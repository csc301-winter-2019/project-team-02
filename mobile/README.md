# The Mobile Component

## Installation

### Requirements

1. npm
2. Mobile emulator or real a device with Expo Client [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www), [iOS](https://itunes.apple.com/app/apple-store/id982107779) installed

### Steps

1. From this directory:

  `npm install`

  `npm start`

  This should open your browser to a page on localhost created by Expo with a QR code.

2. Open the Expo Client and scan the QR code from the browser. The app now build on the device.

> Note: If you want to connect to the Web Component from the mobile, you need to have the Web Component running simultaneously on localhost. Then you need to update the ip address found in app.json under "apiUrl" under "dev" to your local ip. Leave the port and remainder url as is.

## Latest Production build (master branch)

https://expo.io/@csc301dreamteam/helpthehome?release-channel=prod

## Latest QA build (qa branch)

https://expo.io/@csc301dreamteam/helpthehome?release-channel=staging

