# totvs-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

This app is a demo profile page for a ficticious social media website.  All code is real, all data is fake.  No real HTTP messages are being made.  However, the location in the code where one would have made the HTTP call, a hard-coded set of data is returned instead.

## App Section Details
### ME
This section / card displays information about the current user.  In particular, it show-cases the profile picture, name, handle, status, about user and number of friends.

### STILL MOMENTS
This section / card displays the recent photos the current user has chosen to share with his friends.

### BUDDY TALK
This section / card displays a time sorted list of messages that the friends have posted on their own wall.  Current user has subscribed to their feed and hence is able to see the messages.

### MY THOUGHTS
This section / card displays posts made by current user and any responses to that post the friends may have made.

### BUDDIES
This section / card displays current user's friends.  Also, it shows a brief information about each friend such as if they are online / offline, their handle, and their status.  Note, the online / offline status changes randomly every 5 seconds or so.

## SETUP
* Make sure you have NodeJS 8.x and Angular CLI version 6.x
* git clone the respository to your local folder
* navigate to the cloned folder and run 'npm install' to install all the dependencies
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
