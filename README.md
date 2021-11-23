# RESTy

Created by Harvey Lucas and Roop Hayer

## Netlify Deploy URL

https://cocky-albattani-48a932.netlify.app/

## Summary of Problem Domain

### Lab: Class 26 - Component Based UI

Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner

### Phase 1 Requirements

Refactor the RESTy application as follows:

1. Convert all child components of App.js from classes to functions

- The App component serves as the container for all sub-components of this application.
- Leave this component as a Class.
- Make sure all base styles for App are included in a .scss imported within App.js.
- Ensure that the Header, Footer, Results and Form components are imported using ES6 import syntax.

2. Use .scss files to style each component

- Each of the components use their own .scss file for styling.

3. Core application functionality should remain unchanged:

- The Form component should:
  - Call a function on submit that updates the App component via a function sent down as a prop so that the app can process the form values.
- The Results component should show mock API results.

## Visual

![RESTy](./assets/resty.png)
