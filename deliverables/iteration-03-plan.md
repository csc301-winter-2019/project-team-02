# Helpthehome by The Dream Team

## Iteration XX

 * Start date: Mar 12
 * End date: Mar 29

## Process

#### Changes from previous iteration

 * Having a dedicated day for testing so that branches are kept up to date and master is getting consistently updated with new code. We didn't do this in the last iteration and we think it led to a bunch of code conflicts. We hope that by testing regularly, we can get code pushed to appropriate places rather than letting it just sit in its branch.
 We will be able to see if this is effective by doing a search in GitHub commits with message "resolving conflicts". (We usually put something similar in conflict merges).
 * We will create a recurring Slack reminder in the general channel which will notify us every night to check Pull Requests. Additionally, when a developer creates a new PR, they will individually notify the reviews on Slack with the link requesting for review. This is so that tasks get to the testing phase quicker, and therefore end up getting merged back into master quicker => new tasks will have the latest master.

 #### Roles & responsibilities

> See the previous iteration docs.

#### Team Rules

> See the previous iteration docs.

#### Events

> See the previous iteration docs.

#### Artifacts

> See the previous iteration docs.

#### Deployment and Github Workflow

> See the previous iteration docs.
>
Additionally, we now have staging and production deployments for the mobile side using expo "release channels" feature. This means that anyone can quickly see the `qa` branch on their device **without** staring up the npm server on their host machine. Instead, they can just open a persistent url and scan a QR code to load up the app.

## Product

#### Goals and tasks

 1. A better form with better worded questions, making it simpler for the user to answer these question by providing them with concise **options**, rather then making them fill out text boxes.
 2. Making the map markers interactable. The user of the website should be able to mark the marker as pending or dismiss it. This also involves color coding the markers for better UX.
 3. Implementing the "Drop a pin" feature for the mobile. So that someone who does not wish to report their location can also participate.
 4. Handling of response from the server when mobile sends out the post request so that the user knows that their report actually went through in a Greeting Page. From this point, the user should not be able to spam us with more requests until a certain timer has expired.


#### Artifacts

 * A mobile application with the latest master branch deployed on Appetize, or a real phone (if permitted).
 * A interactive web application with the latest master branch deployed on Heroku.

