# Space Spotter
Link to Space Spotter: http://it2810-39.idi.ntnu.no/project1/

## Installation Instructions

1. Install Node.js and npm if not already installed.
2. Clone repository locally
3. Navigate to the project directory and run `npm install` to install project dependencies.

## Usage Instructions

1. After installation, run `npm run dev` to start the development server.
2. Open your web browser and access the application at the localhost appearing in the terminal.
3. Use the filtering options to search for rooms and interact with the favorites feature.

## Linting and Prettier

To check Prettier `npx prettier . --check`

To run Linting `npm run lint`

## Testing

You can test the website by running `npm test` in the terminal.


# Documentation from the developers

## Description of the project Space Spotter

The project involves a web page with the possibility to display all rooms on the NTNU campuses.

## Functional requirements

The user is presented with a list after the successful filtering selection. In this list the user can open the room by clicking on each row that is displayed. The user can choose freely from the list and the chosen room will be displayed on the top of the list section of the page. All filter choices are saved in a local storage. There is also a favorite function that will give the user the possibility to save their favorite room. During the next session the user will be able to display their previous favorites using the favorite button. The web page is developed using a responsive design and is coded so it can be displayed on both desktops and mobile phones. The web page has been designed in Figma first with a focus on palette selection and UI development.

## Technical requirements

The web page is based on typescript and react, and react state and props are used. Space Spotter retrieves information from a REST API by using TanStack Query. The data is collected from the room booking page from NTNU using their Swagger-service (https://tp.educloud.no/ntnu/ws/swagger-ui/dist/). The service uses local and session storage. The web page is tested on devices such as desktops, PC, Mac, mobile phones and on different web browsers (Chrome, Safari and Brave).

## Development and testing instructions

We have used Node.js v20.5+ and npm v9.8+ and created the project using vite 4.4 where we used the project type React and Typescript. The project began with using the source code provided from Gitlab and we have used issues with branches according to these. This to have controll over each task for each developer. Through our prosess we have taken advantage of linting and Prettier.

## Choices of solutions

In regards of the API call, we decided on a solution that makes the call at once the page is loaded. From a Norwegian perspective, most users will not have any issue with downloading this information from this call and with this we focus mainly on performance. We have few calls to the API, but we guarantee updated information whenever the page is reloaded.

The favorite function has been connected to the local storage. This to ensure a smooth storage of the information of the users favorite room without having to make an account. Local storage has a limit, but we have made sure to stay within these limits when the storage is limited to only the favorite rooms of the user.

## Testing

Testing has been utilized with Vitest. This includes component testing with snapshot testing.

### Comments from the developers regarding testing

Testing in P1 was perceived as difficult as we had problems with Vitest and Jest. This is something that has been improved in the revised and final version. The project now includes testing of components using Vitest in addition to snapshot testing.

## Changelog

We have made several changes for the final version. These are all based on feedback we have received from our peers. The changes in the revision includes:

-   NEW: Installation and usage of prettier
-   NEW: Component testing with simple snapshot testing using Vitest
-   NEW: A new scroll to function so the selected room is now in a better focus.
-   NEW: The favorite button is improved in regards to affordance. The button changes color when toggled.

## The work of each developer
 
This has been provided on blackboard as stated in the project description.
