# README

## High Level Description
Help the Homeless is a web and mobile application that allows homeless shelters to see the locations of homeless people in need of help in real time. Our application consists of two components: a web application and a mobile application for iOS and Android. The web application displays a map that is updated with markers in real time. Each marker shows the location of a homeless person, along with identifying details such as (age, clothing, injured or not, etc.). Markers are displayed on the map whenever a user on the mobile application sends a request for help. The mobile application is intended to be used by the public. It contains a simple form that allows the user to describe the situation to help the outreach workers identify the person in need when responding for help.

## Key Features
* Users can send their location using the app to report where a homeless person is
* Users can fill out details about the homeless person before reporting them
* Users from Street To Homes can view a map and see point markers overlayed on the map which represent where users of the app have submitted locations of homeless people
* Clicking on a point marker on the map brings up detailed information about the homeless person at that location
* 'Drop Pin' was not implemented in this iteration, although the button was made and added to our app for future use. This button currently has no functionality, but once fully implemented will allow users to select a location on the map themselves and place a pin there indicating there is a homeless person who requires help.

## Basic instructions
### Web application
1. To access the web application, go [here](https://helpthehome-qa.herokuapp.com/map).
2. Click on a marker on the map to see the details of a homeless person in need.
3. A detailed box will appear on the top left hand corner containing the person's age range, clothing description, injury status, and reason for help. You can close the box by clicking the close button in the bottom right corner of the details box.
4. You can zoom in and out by clicking the `+` and `-` button at the top left corner of the map respectively. You can also zoom in and out by scrolling up and down on your mouse/trackpad respectively.

### Mobile application
1. Ensure your phone supports location services and it is turned on. To enable location services for iPhone see [here](https://support.apple.com/en-ca/HT207092) and Android see [here](https://support.google.com/accounts/answer/3467281?hl=en).
3. Download the Expo APP [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en), [iOS](https://itunes.apple.com/us/app/expo-client/id982107779).
4. Scan the QR code below:
![](https://i.imgur.com/yuHVrVH.png)

2. When you open the mobile application the greeting page should show up on the screen. Click the `Use Current Location` button.
> If you see a prompt asking for your location access, press "Allow".
4. Fill in all the fields on the form with the appropriate information. Although you can leave any field blank, it is **strongly** recommended that you fill in all the fields, as it helps identify the person in need.
5. When all the information is recorded, click submit. A popup should say that you are being redirected to the main page. When you dismiss the message, you should be redirected to the greeting page.
6. You should now be able to see your report in the web application.
