# The Web Component

## Installation

### Requirements

1. docker (or local mongodb install)
2. npm

### Steps
> Docker steps below might not work on Windows. Refer to Docker docs.

1. Spawn up a docker container with mongodb OR start mongo from your local install

  `docker run -d --name mymongo -p 27017:27017 mongo`

2. Now you are ready to start the web component:

  From this directory:

  `npm install`

  `npm start`

  Then open your browser to `localhost:3000`

You should be greeted with the home page. From next time onwards, just start up the mongo container with `docker start mymongo`.

## Latest Production site (master branch)

https://helpthehome-prod.herokuapp.com/

## Latest QA site (qa branch)

https://helpthehome-qa.herokuapp.com/

