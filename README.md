# Documentation from the developers

## Description of the project Space Spotter
The project involves a web page with the possibility to display all rooms on the NTNU campuses. 

## Functional requirements
The user is presentet with a list after the sucessfull filtering selection. In this list the user can open the room by clicking on each row that is displayed. The user can chose freely from the list and the chosen room will be displayed on the top of the list section of the page. All filter choises are saved in a local storage. There is also a favourite function that will give the user the possibility to save their favourite room. During the next session the user will be able to display their previous favourites using the favourite button. The web page is developed using a responsive design and is coded so it can be displayed on both desktops and mobile phones. The web page has been designed in Figma first with a focus on palette selection and UI development. 

## Technical requirements
The web page is based on typescript and react, and react state and props are used. Space Spotter retreives information from a REST API by using TanStack Query. The data is collected from the room booking page from NTNU using their Swagger-service (https://tp.educloud.no/ntnu/ws/swagger-ui/dist/). The service uses local and session storage. The web page is tested on devices such as desktops, PC, Mac, mobile phones and on different web browsers (Chrome, Safari and Brave). 

## Development and testing instructions
We have used Node.js v20.5+ and npm v9.8+ and created the project using vite 4.4 where we used the project type React and Typescript. The project began with using the source code provided from gitlab and we have used issues with branches according to these. This to have controll over each task for each developer. Through our prosess we have taken advantage of linting and Prettier.  

## Choices of solutions
In regards of the API call, we decided on a solution that makes the call at once the page is loaded. From a norwegian perspektive, most users will not have any issue with downloading this information from this call and with this we focus mainly on performance. We have few calls to the API, but we guarante updated information whenever the page is reloaded. 

The favourite function has been connected to the local storage. This to ensure a smooth storage of the information of the usesers favourite room without having to make an account. Local storage has a limit, but we have made sure to stay within these limits when the storage is limited to only the favourite rooms of the user. 

## The work of each deleoper 
This has been provided on blackboard as stated in the project description. 


# Delivery instructions

## Installation Instructions

1. Install Node.js and npm if not already installed.
2. Clone repository locally
3. Navigate to the project directory and run `npm install` to install project dependencies.

## Usage Instructions

1. After installation, run `npm run dev` to start the development server.
2. Open your web browser and access the application at the localhost appearing in the terminal.
3. Use the filtering options to search for rooms and interact with the favorites feature.

# Difficulties

## Testing
During our development process we had difficulties with testing the web application. This lead to us not having any working tests. There is a folder called tests, with incomplete work. This is to illustrate what we tried to accomplish. 

### App.test.tsx
This file checked that the app loaded without crashing. This test passed, until we changed the config files to accommodate for the tests in our other files. We could not get it to work again, as Jest did not work. 

### Filters.test.tsx
This file was supposed to use mocking to retrieve a room. We could not make this work. Our main reason seemed to be that we could not make Jest work. We could not find issues in the file itself, and our error messages pointed us to our config files, but this is difficult to pinpoint.
