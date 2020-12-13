import seasonyApp from "../../images/seasonyApp.jpg";
import mealsharingImage from "../../images/mealsharing.jpg";
import weatherAppImage from "../../images/weatherApp.jpg";
import githubSearch from "../../images/githubSearch.jpg";
import giphySearch from "../../images/giphySearch.jpg";
import oldPortfolioImage from "../../images/oldPortfolio.jpg";
import assignmentProj from "../../images/assignmentProj.png";
import movieApp from "../../images/movieApp.png";
import mobilTilbud from "../../images/mobilTilbud.png";

const projectObj = [
  {
    projectTitle:"MobilTilbud Application",
    stackList:["Python", "Django", "HTML", "CSS", "Bootstrap", 
                "Github", "Git", "MySQL"
              ], 
    projectImage: mobilTilbud,
    githubLink:"https://github.com/faisalakhlaq/mobiletilbud",
    herokuLink:"https://github.com/faisalakhlaq/mobiletilbud",
    description:"An application developed in Python and Django, I am participating in this project developing frontend and deployment. My goal is to make a best user experience and in depth understanding of building real time projects as a team member."
  },
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
    projectTitle:"Test Application",
    stackList:["Javascript", "React", "HTML", "CSS", 
                "Github", "Git"
              ], 
    projectImage: assignmentProj,
    githubLink:"https://github.com/amjadiftikhar/front-end-test",
    herokuLink:"https://github.com/amjadiftikhar/front-end-test",
    description:"Assignment to develop a provided design in React and in simple HTML5, CSS3 and Javascript. Responsiveness and mobile first layout approach been adopted. "
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