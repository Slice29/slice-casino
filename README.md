# Slice Casino

A passion project casino web app designed for research purposes.

## Project Description

This app is the product of my passion for game logic, probabilistics and big data processing.
It's a slots web app, inspired by the popular casino game Dice and Roll. 
The purpose of this project is to implement all the functionalities of the actual slot, run it a great number of times and process the data.

All the logic is handled in JavaScript, while the frontend is HTML with Bootstrap 5.

The slot is purely random in it's current form, with little to no styling.


While this started as just a fun project to kill a weekend afternoon, it quickly became one of my favorite projects to work on.

## Implementation Details

The app.js is the main script processing all the logic and making sure everything works correctly. Coming from a C++ background, I wanted to work with bi-dimensional arrays. The whole app is structured around the slots being converted to one big matrix. I found it helped a lot with the following maths. The paylines, additional wins and changing the values of the slots are also handled here.

The script is broken down into several functions, as granular and functional as I could design them. I looked nowhere for inspiration when starting the design of the app, and as that has certainly proven challenging it's equally rewarding.

It's a 3x3 slot as of right now, with all the slots from the dice and roll game being possible combinations on the slot grid.

The logicabani.js script handles anything that I thought would clutter up the app.js script, and more of the betting and payout logic.

protoype.js checks the neighbours of elements for additional wins and handles the element win queue, as well as tracking all checked slots.

## The purpose of the app

The final purpose of the app is to process as much data as possible regarding playing slots. I would like to find out things such as:
* the RTP(return to player) when effectively random probability is at play
* how small changes in initial conditions affect the payout hundreds of thousands of spins later down the line
* the mathematical relevance of the size of the grid and paylines in regards to actual payout

## Plans for the future

* expanding the application so that it's a 3x5 grid

* implementing a functional Gamble system after a win

* creating the possibility to change the number of paylines, depending on the bet

* simulate a great number of spins, feed this data into MATLab and process the results.

* abstract the game logic further, so that the RTP control is as simple as changing a parameter of a function

* implement a web system which allows multiple instances of the casino to run at the same time, automatically adjusting the RTP to each one so that the overall RTP of the system is maintained

## How to use the app

Just clone the repo and run index.html and game away!

After a win, press the reset button to keep playing.

**Disclaimer**

In this latest gitHub push version the wins are not added to the balance. When you run out of money to gamble, just refresh the app.




