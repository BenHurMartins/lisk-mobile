/* eslint-disable */
const { When, Then, Given } = require('cucumber');

const passphrase = 'truly chicken bracket giant lecture coyote undo tourist portion damage mansion together';

Given(/The app is opened at the registration screen with predefined passphrase/, async function () {
  await device.launchApp({
    url: `lisk://register?passphrase=${encodeURI(passphrase)}`,
    newInstance: true,
  });
});

Then(/^I fill in placeholders for the predefined passphrase$/, async function () {
  for (const word of passphrase.split(' ')) {
    try {
      await element(by.id(`passphrasePlaceholderFor-${word}`)).tap();
      await element(by.id(`passphraseOptionFor-${word}`)).tap();
    } catch (error) {
      // } // eslint-disable-line no-empty
    }
  }
});
