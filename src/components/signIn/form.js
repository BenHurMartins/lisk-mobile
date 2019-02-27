import React from 'react';
import { Platform, View, Animated } from 'react-native';
import { translate } from 'react-i18next';
import styles from './styles';
import Input from '../toolBox/input';
import { validatePassphrase } from '../../utilities/passphrase';
import { P, A } from '../toolBox/typography';
import KeyboardAwareScrollView from '../toolBox/keyboardAwareScrollView';
import Scanner from '../scanner';
import { IconButton } from '../toolBox/button';
import { colors } from '../../constants/styleGuide';

const devDefaultPass = process.env.passphrase || '';

const Extras = ({
  onPress, opacity, t,
}) => (
  <View>
    <Animated.View style={[styles.linkWrapper, styles.row, { opacity }]}>
      <P style={styles.question}>{t('Don’t have a Lisk ID?')}</P>
      <A style={styles.link} onPress={onPress}>{t('Create it now')}</A>
    </Animated.View>
  </View>
);

class Form extends React.Component {
  state = {
    passphrase: {
      value: devDefaultPass,
      validity: [],
    },
    animation: {
      opacity: new Animated.Value(0),
    },
  };

  showKeyboard = () => {
    setTimeout(() => {
      if (this.props.navigation &&
        this.props.navigation.isFocused() &&
        this.passphraseInput) {
        this.passphraseInput.focus();
      }
    }, 500);
  }

  onInputChange = (value, cb) => {
    this.setState({
      passphrase: {
        value,
        validity: [],
      },
    }, () => {
      if (typeof cb === 'function') cb(value);
    });
  }

  goToRegistration = () => {
    this.passphraseInput.blur();
    this.props.navigation.navigate('Register');
  }

  onFormSubmission = () => {
    const { passphrase } = this.state;
    const validity = validatePassphrase(passphrase.value);

    if (!validity.length) {
      this.passphraseInput.blur();
      this.props.signIn(passphrase.value, 'form');
    } else {
      this.setState({
        passphrase: {
          value: passphrase.value,
          validity,
        },
      });
    }
  }

  onQRCodeRead = (value) => {
    this.onInputChange(value, this.onFormSubmission);
  }

  animate = () => {
    const { animate } = this.props;
    const { opacity } = this.state.animation;

    Animated.timing(opacity, {
      toValue: 1,
      duration: animate ? 400 : 0,
      delay: animate ? 200 : 0,
    }).start();
  }

  toggleCamera = () => {
    this.passphraseInput.blur();
    this.scanner.toggleCamera();
  }

  componentDidMount() {
    this.showKeyboard();
    this.animate();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { passphrase, animation: { opacity } } = this.state;
    const {
      t, navigation, lng,
    } = this.props;

    let errorMessage = '';

    if (passphrase.validity.length) {
      const errors = passphrase.validity
        .filter(item => item.code !== 'INVALID_MNEMONIC' || passphrase.validity.length === 1);

      if (errors.length && errors[0].message && errors[0].message.length) {
        errorMessage = errors[0].message.replace(' Please check the passphrase.', '');
      }
    }

    return (
      <View style={styles.container}>
        <Scanner
          ref={(el) => { this.scanner = el; }}
          containerStyles={{
            cameraRoll: styles.cameraRoll,
            cameraOverlay: styles.cameraOverlay,
          }}
          fullScreen={true}
          navigation={navigation}
          readFromCameraRoll={false}
          onQRCodeRead={this.onQRCodeRead}
        />
        <Animated.View
          style={[styles.titleContainer, styles.paddingBottom, { opacity }]}
        >
          <P style={styles.title}>
            { t('The official Lisk mobile wallet.') }
          </P>
        </Animated.View>
        <Animated.View style={[{ opacity }]}>
          <Input
            noTheme={true}
            label={t('Passphrase')}
            reference={(ref) => { this.passphraseInput = ref; }}
            innerStyles={{ input: styles.input }}
            value={passphrase.value}
            onChange={this.onInputChange}
            autoFocus={true}
            autoCorrect={false}
            multiline={Platform.OS === 'ios'}
            secureTextEntry={Platform.OS !== 'ios'}
            error={errorMessage}
            keyboardAppearance="light"
          />
          {
            passphrase.value === '' ?
              <IconButton
                onPress={this.toggleCamera}
                titleStyle={styles.scanButtonTitle}
                style={[styles.scanButton, lng === 'de' ? styles.longTitle : null]}
                title={t('Scan')}
                icon='scanner'
                iconSize={18}
                color={colors.light.blue} /> : null
          }
        </Animated.View>
        <KeyboardAwareScrollView
          noTheme={true}
          button={t('Sign in')}
          onSubmit={this.onFormSubmission}
          extras={
            <Extras
              t={t}
              onPress={this.goToRegistration}
              opacity={opacity}
            />
          }
        />
      </View>
    );
  }
}

export default translate()(Form);
