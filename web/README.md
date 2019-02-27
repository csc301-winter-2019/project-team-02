# The web component

## How to run in your LOCAL env:

### Requirements

1. docker (or local mongodb install)
2. npm

#### Steps

1. Spawn up a docker container with mongodb OR start mongo from local install

  `docker run -d --name mymongo -p 27017:27017 mongo`


2. Now you are ready to start the app:

  From this directory:

  `npm install`

  `npm start`

  Then open your browser to `localhost:3000`

You should be greeted with a page with a map. From next time onwards, just start up the mongo container with `docker start mymongo`.

## You can view the current latest production site on Heroku (master branch)

not yet.

## You can view the current latest QA site on Heroku (qa branch)

https://helpthehome-qa.herokuapp.com/

