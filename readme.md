# SportSee

SportSee is an application for see you sport statistics, calculate calories in your meals and more. Sportsee also includes device motion sensor to monitor all of your exercise data and food nutrition in real time. 
Get fit, look good and feel great!

![sportsee.png](https://github.com/Laurene45/LaureneCourde_12_19052022-/blob/main/sportsee/documentation/sportsee.png?raw=true)


## Technologies

-   JS
-   CSS
-   React.js  (v18.1.0)
-   React-router-dom (v6.3.0)
-   Recharts (v2.1.10)


## Project back-end (**without Docker**)

### Prerequisites

 - [Recommended IDE (Visual Studio
   Code)](https://code.visualstudio.com/)
 - [Node.js (v14.16.0)](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com)

### Launching the project

! important ! install first the server

[https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

-   Fork the repository
-   Clone it on your computer.
-   The  `yarn`  command will allow you to install the dependencies.
-   The  `yarn dev`  command will allow you to run the micro API.

## Project back-end (**with Docker**)

### Prerequisites

-   [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Starting the project

-   The  `docker image build --no-cache -t micro-api .`  command will allow you to build your image.
-   The  `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn`  command will allow you to create your Docker container and run your image on port 3000.
-   The  `docker container stop micro-api`  command will allow you to stop your micro-api.
-   The  `docker container rm micro-api`  command will allow you to delete your micro-api container.


## Project front-end

- Clone the repository of SportSee front-end:

`git clone 
https://github.com/Laurene45/LaureneCourde_12_19052022-.git`

- Inside this front-end repository, install dependencies: 
 
`npm install`

- Launch front-end on port 3001:

`npm start`

During installation it will ask you to run the app on port 3001 due to port conflict.Validate by pressing "y"

Front-end is now rendered at URL  : `http://localhost:3001`.

The page will reload when you make changes.
You may also see any lint errors in the console.


### Authors

Malow
