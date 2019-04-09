# Helpthehome by The Dream Team

## High Level Description
Help the Homeless is a web and mobile application that allows homeless shelters to see the locations of homeless people of Toronto in need of help in real time. Our application consists of two components: a web application and a mobile application for iOS and Android. The web application displays a map that is updated with markers in real time. Each marker shows the location of a homeless person, along with identifying details such as (age, gender, race, other salient features). Markers are displayed on the map whenever a user on the mobile application sends a request for help. The mobile application is intended to be used by the public. It contains a simple form that allows the user to describe the situation to help the outreach workers identify the person in need when responding for help.

## Key Features
* Current Loacation option allows users to send their current location to report where a homeless person is.
* Drop Pin option allows users to place marker at location of homeless person on a map of Toronto, bypassing the need for user location access. 
* Users are required to fill out details of the homeless person before submitting in order to help authorities identify the specific individual.
* The required form question are multiple choice options making it very easy for a user to fill out quickly.
* Users from Street To Homes can view a map and see point markers overlayed on the map which represent where users of the app have submitted locations of homeless people.
* This map is live-updating, so no refresh required to see new reports.
* Clicking on a point marker on the map brings up detailed information about the homeless person at that location.
* The user of the map can mark a report as "Pending", or "Complete" which is color coded for UX.

## Basic instructions
### Web application
1. To access the web application, go [here](https://helpthehome-prod.herokuapp.com/map).
2. Click on a marker on the map to see the details of a homeless person in need.
3. A detailed box will appear on the top left hand corner containing the person's details. 
   * You can close the box by clicking the close button in the bottom right corner of the details box.
   * You can mark the point as "Pending" to make it yellow. This action is persistent.
   * You can mark the point as "Complete" to remove it from the map. This action is persistent.
4. You can zoom in and out by clicking the `+` and `-` button at the top left corner of the map respectively. You can also zoom in and out by scrolling up and down on your mouse/trackpad respectively.

### Mobile application
1. In a new tab, or window go to our mobile app presently running on an android emulator at Appetize.io: https://appetize.io/app/5gatcnptebzga4fh6up350jaq4?device=nexus5&scale=75&orientation=portrait&osVersion=8.1
2. Press "Tap to Play".
3. Once the app loads, you can **either** press the red button "Use Current Location". (Note: this may use the location of the Appetize server where the emulator is running, **not your actual location**) **OR** press Drop a Pin button if you don't want to share your location.
   * Current Location: If prompted for location access, press "Allow".
   * Drop the Pin: navigate to where you see the homeless person and then tap to drop a pin. (tap the pin to remove the pin if accidental tap occurs). Once satisfied, press Proceed.
5. Fill in all the fields on the form with the appropriate information.
5. When all the information is recorded, click the "Submit" button. A popup should say that you are being redirected to the main page. When you dismiss the message, you should be redirected to the greeting page.
6. You should now be able to see your report in the tab or window where you have the web app running without even needing to refresh.

> You can verify that this is indeed the correct location by opening google maps in the emulator and see your current location. It will match what we have on our website map.
