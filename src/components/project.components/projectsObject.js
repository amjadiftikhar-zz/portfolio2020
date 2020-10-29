import seasonyApp from "../../images/seasonyApp.jpg";
import mealsharingImage from "../../images/mealsharing.jpg";
import weatherAppImage from "../../images/weatherApp.jpg";
import githubSearch from "../../images/githubSearch.jpg";
import giphySearch from "../../images/giphySearch.jpg";
import oldPortfolioImage from "../../images/oldPortfolio.jpg";
import movieApp from "../../images/movieApp.png";

const projectObj = [
  {
    projectTitle:"Seasony Dashboard Application",
    stackList:["Javascript", "Node JS", "React", "HTML", "CSS", "Storybook", 
                "Express", "Knex", "Firebase", "Heroku", "Github", "Git", "MySQL", "Swagger"
              ], 
    projectImage: seasonyApp,
    githubLink:"https://github.com/HackYourFuture-CPH/FP-class11",
    herokuLink:"https://fp-class11.herokuapp.com/",
    description:"A dashboard application for seasony.dk, I was one of the team members in this project and we developed it from scratch to deployment and gain a in depth understanding of building real time projects with the collaboration of our highly skilled mentors."
  },
  {
    projectTitle:"Meal Sharing Application", 
    stackList:["Javascript", "Node JS", "HTML", "CSS", "Express", "Heroku", "Github",
                "Git", "MySQL"
              ], 
    projectImage: mealsharingImage,
    githubLink:"https://github.com/amjadiftikhar/myProjects",
    herokuLink:"https://my-meal-sharing-app.herokuapp.com/",
    description:"A meal sharing application with a MySql database to make reservations, submitting reviews and look through all meals available for reservation. Search option for the random meal is also available in the application and its available for a live preview."
  }, 
  {
    projectTitle:"Weather Application", 
    stackList:["Javascript", "HTML", "CSS",  "Github", "Git", "REST API"], 
    projectImage: weatherAppImage,
    githubLink:"https://github.com/amjadiftikhar/myProjects",
    herokuLink:"https://htmlpreview.github.io/?https://github.com/amjadiftikhar/my_SPAs/blob/master/weather-App/index.html",
    description:"A weather application to see the weather updates, using weather API and the app is available for the preview. Tools used are API, Javascript, HTML and CSS"
  }, 
  {
    projectTitle:"Search Github Users", 
    stackList:["Javascript", "React", "HTML", "CSS", "Github", "Git", "RESTful API"], 
    projectImage: githubSearch,
    githubLink:"https://github.com/amjadiftikhar/searchUsers_github",
    herokuLink:"https://github.com/amjadiftikhar/searchUsers_github",
    description:"An application to search the information about github users. Its one of the applications I developed in React. Tools used are React, Javascript, API, HTML and CSS"
  }, 
  {
    projectTitle:"Giphy Search", 
    stackList:["Javascript", "HTML", "CSS", "Github", "Git", "RESTful API"], 
    projectImage: giphySearch,
    githubLink:"https://github.com/amjadiftikhar/my_SPAs/tree/master/giphy-App",
    herokuLink:"https://github.com/amjadiftikhar/my_SPAs/tree/master/giphy-App",
    description:"It is an application for the giphy search using giphy API and worked with DOM    manipulation. Tools used including API, Javascript, HTML and CSS."
  }, 
  {
    projectTitle:"Portfolio Application", 
    stackList:["Javascript", "React", "Bootstrap", "HTML", "CSS", "Github", "Git"], 
    projectImage: oldPortfolioImage,
    githubLink:"https://github.com/amjadiftikhar/my-portfolio",
    herokuLink:"http://amjadportfolio.herokuapp.com/",
    description:"Its a portfolio website developed in React. I worked with reuseable components and used hooks instead of class components. I used Javascript, React, React Bootstrap, HTML, CSS etc. Portfolio is available for preview."
  }, 
  {
    projectTitle:"Movie Catalogue",
    stackList:["Javascript", "React", "API", "HTML", "CSS", 
                "Heroku", "Github", "Git"
              ], 
    projectImage: movieApp,
    githubLink:"https://github.com/amjadiftikhar/movie-app",
    herokuLink:"https://github.com/amjadiftikhar/movie-app",
    description:"A Movie application, using Star Wars API fetched data for movies and movie characters and rendered it. Tools used are API, Javascript, React, HTML and CSS."
  }
  ]

  export default projectObj;