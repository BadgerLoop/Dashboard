# BadgerLoop Dashboard

## Introduction
We will be using an Angular based dashboard for competition weekend.

## Installation
+ Navigate to `Competition_Dashboard` directory in the main `Dashboard` repo.
+ Enter `backend-angular` then `master`
  + You should now be in `/Dashboard/Competition_Dashboard/backend-angular/master`
+ Run `npm start` inside this directory
  + This will automatically install npm packages, bower dependencies and finally gulp, all with just one command.
  + Note: You might need to install npm and its dependencies.  Feel free to contact me if you have trouble installing them.
+ Now, in a new terminal go back to `/Dashboard/Competition_Dashboard/backend-angular/`.  You should see `index.html` in this directory
+ You will now need to install an http-server in order to view locally. In order to do so, run `npm install http-server -g`
  + Note: You will only need to do this the first time through
+ Finally, serve the angular project by running `http-server . -a 127.0.0.1 -p 8080`
  + You should now be able to ping `http://127.0.0.1:8080/` in your browser and be able to see the template dashboard that we will begin to alter.

## Running from here on out
+ You will only need to run the `npm start` and the `http-server . -a 127.0.0.1 -p 8080` when ever you want to work on the project locally.
  + I created an alias in my bash for the `http-server` so that I don't need to enter it everytime.  Feel free to contact me if you don't know how to create an alias
## Troubleshooting
Slack any problems to #software.  More likely than none, other people are having your same issue.
