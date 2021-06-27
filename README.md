# Convergent React Core Examples

This is a repo developed by officers of Texas Convergent that is filled with React code examples. It's designed to serve as a reference to new developers, who are unfamiliar with React, and get them familiar with the framework as quickly as possible. 

## Running the project

While the repo is mainly used to show code references, you can also see the examples running in real time. To do so, you will need the following installed on your computer:

* Latest version of [Node JS](https://nodejs.org/en/download/)
* A JS package manager
    * [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    * [Yarn (My recommendation)](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

Once you have both dependencies, clone this repo to your local machine. `cd` into the repository folder. If you've installed NPM, then run `npm install`. If you've installed Yarn, run `yarn install`.

Afterwards run either `npm start` or `yarn start`, depending on your package manager, and the project will appear on [localhost:3000](http://localhost:3000). 

From there, you will be greeted with a list of example files to chose from. Click on one, and the example will render below.

## For Developers of the Project

If you want to add a new example to the project, you will need to do a couple of things. 
1. Create a folder in the `examples` directory with your example files. Make sure to follow the existing naming scheme! If your example falls under an existing topic, just put your new file under the existing folder.
 
2. Update the object of imports in `imports.js` with the new folder and file(s). (I tried to dynamically generate the object using fs, but I couldn't get it to work due to React existin gin a browser environment. If anyone has a better solution, please tell me)

    1. If you include a file in the import list, make sure it has a default export!