# Helpthehome by The Dream Team

## High Level Description
Help the Homeless is a web and mobile application that allows homeless shelters to see the locations of homeless people in need of help in real time. Our application consists of two components: a web application and a mobile application for iOS and Android. The web application displays a map that is updated with markers in real time. Each marker shows the location of a homeless person, along with identifying details such as (age, clothing, injured or not, etc.). Markers are displayed on the map whenever a user on the mobile application sends a request for help. The mobile application is intended to be used by the public. It contains a simple form that allows the user to describe the situation to help the outreach workers identify the person in need when responding for help.

## Key Features
* Users can send their location using the app to report where a homeless person is.
* Users can fill out details about the homeless person before reporting them.
* Users from Street To Homes can view a map and see point markers overlayed on the map which represent where users of the app have submitted locations of homeless people.
* This map is live-updating, so no refresh required.
* Clicking on a point marker on the map brings up detailed information about the homeless person at that location.
* Drop Pin option allows users to place marker at location of homeless person on a map of Toronto, bypassing the need for user location. 
*When viewing the spread of points on the map, users with access to this side can now sort between pending reports and completed reports. The markers are also colour co-ordinated to make it easier for users to tell.

## Basic instructions
### Web application
1. To access the web application, go [here](https://helpthehome-qa.herokuapp.com/map).
2. Click on a marker on the map to see the details of a homeless person in need.
3. A detailed box will appear on the top left hand corner containing the person's age range, clothing description, injury status, and reason for help. You can close the box by clicking the close button in the bottom right corner of the details box.
4. You can zoom in and out by clicking the `+` and `-` button at the top left corner of the map respectively. You can also zoom in and out by scrolling up and down on your mouse/trackpad respectively.

### Mobile application
1. In a new tab, or window go to our mobile app presently running on an android emulator at Appetize.io: https://appetize.io/app/4nzk9t6g0h0y9r9ux2zj7d3tpg?device=nexus5&scale=75&orientation=portrait&osVersion=8.1
2. Press "Tap to Play".
3. Once prompted for location access, press "Allow".
4. Once you see "Welcome to Helpthehome!", you can press the red button "Use Current Location". (Note: this will use the location of the Appetize server where the emulator is running, **not your actual location**)
5. Fill in all the fields on the form with the appropriate information. Although you can leave any field blank, it is **strongly** recommended that you fill in all the fields, as it helps identify the person in need.
5. When all the information is recorded, click the "Submit" button. A popup should say that you are being redirected to the main page. When you dismiss the message, you should be redirected to the greeting page.
6. You should now be able to see your report in the tab or window where you have the web app running without even needing to refresh.

> You can verify that this is indeed the correct location by opening google maps in the emulator and see your current location. It will match what we have on our website map.
