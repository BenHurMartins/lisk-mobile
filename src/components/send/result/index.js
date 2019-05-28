import React from 'react';
import connect from 'redux-connect-decorator';
import { View } from 'react-native';
import { translate } from 'react-i18next';
import LottieView from 'lottie-react-native';
import { PrimaryButton } from '../../toolBox/button';
import { A, P } from '../../toolBox/typography';
import txCreatedAnim from '../../../assets/animations/tx-created.json';
import txPendingAnim from '../../../assets/animations/tx-pending.json';
import txConfirmedAnim from '../../../assets/animations/tx-confirmed.json';
import withTheme from '../../withTheme';
import getStyles from './styles';

const createdAnimDuration = 6200;

@connect(state => ({
  account: state.accounts.info,
  transactions: state.transactions,
  activeToken: state.settings.active,
  followedAccounts: state.accounts.followed,
}), {})
class Result extends React.Component {
  state = {
    step: 0,
  };
  animation = [];
  timeouts = {
    created: null,
    confirmed: null,
  };

  componentDidMount() {
    const { reset, navigation: { setParams } } = this.props;
    setParams({
      title: 'Sent',
      showButtonLeft: false,
      action: reset,
    });
    this.startDate = new Date();
    this.play('created');
  }

  componentWillUnmount() {
    const { navigation: { setParams } } = this.props;
    clearTimeout(this.timeouts.created);
    clearTimeout(this.timeouts.confirmed);
    setParams({ title: 'Send' });
  }

  componentWillUpdate(nextProp) {
    const { sharedData } = this.props;
    const nowPending = this.props.transactions.pending.filter(tx =>
      tx.id === sharedData.txId).length > 0;
    const nextConfirmed = nextProp.transactions.confirmed.filter(tx =>
      tx.id === sharedData.txId).length > 0;

    if (nowPending && nextConfirmed) {
      this.play('confirmed');
    }
  }

  play(stage) {
    if (stage === 'created') {
      this.animation[0].play();
      this.timeouts.created = setTimeout(() => {
        this.setState({
          step: 1,
        }, () => {
          this.animation[1].play();
        });
      }, createdAnimDuration);
    } else if (stage === 'confirmed') {
      this.setState({
        step: 2,
      }, () => {
        this.animation[2].play();
      });
    }
  }


  render() {
    const {
      t, styles, finalCallback, reset, navigation,
      followedAccounts, settings: { token }, sharedData: { address },
    } = this.props;

    const isNotFollowed = !followedAccounts[token.active].some(item => item.address === address);

    return (
      <View style={[styles.container, styles.theme.container]}>
        <P style={styles.theme.subtitle}>
          {t('Thank you. Your transaction is being processed. It may take up to 15 minutes to be confirmed.')}
        </P>
        <View style={styles.illustration}>
          {this.state.step === 0 ? <LottieView
            source={txCreatedAnim}
            loop={false}
            ref={(el) => { this.animation[0] = el; }} />
            : null}
          {this.state.step === 1 ? <LottieView
            source={txPendingAnim}
            loop={true}
            ref={(el) => { this.animation[1] = el; }} />
            : null}
          {this.state.step === 2 ? <LottieView
            source={txConfirmedAnim}
            loop={false}
            ref={(el) => { this.animation[2] = el; }} />
            : null}
        </View>
        <View style={styles.footer}>
          {isNotFollowed && (
            <A onPress={() => navigation.navigate('AddBookmark', { title: t('New bookmark'), account: { address } })} style={styles.anchor}>{t('Add address to bookmarks')}</A>
          )}
          <PrimaryButton
            style={styles.button}
            onClick={() => {
              finalCallback();
              reset();
            }}
            title={t('Continue')}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(translate()(Result), getStyles());
