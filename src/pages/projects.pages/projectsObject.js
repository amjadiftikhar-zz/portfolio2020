import seasonyApp from "../../images/seasonyApp.jpg";
import mealsharingImage from "../../images/mealsharing.jpg";
import weatherAppImage from "../../images/weatherApp.jpg";
import githubSearch from "../../images/githubSearch.jpg";
import giphySearch from "../../images/giphySearch.jpg";
import oldPortfolioImage from "../../images/oldPortfolio.jpg";

const projectObj = [
    {
    projectTitle:"Seasony Dashboard Application",
    stackList:["Javascript", "Node JS", "React", "HTML", "CSS", "Storybook", 
                "Express", "Knex", "Heroku", "Github", "Git", "MySQL", "Swagger"
              ], 
    projectImage: seasonyApp,
    githubLink:"https://github.com/HackYourFuture-CPH/FP-class11",
    herokuLink:"https://fp-class11.herokuapp.com/",
    description:"description comes here"
  },
  {
    projectTitle:"Meal Sharing Application", 
    stackList:["Javascript", "Node JS", "HTML", "CSS", "Express", "Heroku", "Github",
                "Git", "MySQL"
              ], 
    projectImage: mealsharingImage,
    githubLink:"https://github.com/amjadiftikhar/myProjects",
    herokuLink:"https://my-meal-sharing-app.herokuapp.com/",
    description:"description comes here"
  }, 
  {
    projectTitle:"Weather Application", 
    stackList:["Javascript", "HTML", "CSS",  "Github", "Git", "REST API"
              ], 
    projectImage: weatherAppImage,
    githubLink:"https://github.com/amjadiftikhar/myProjects",
    herokuLink:"https://htmlpreview.github.io/?https://github.com/amjadiftikhar/my_SPAs/blob/master/weather-App/index.html",
    description:"description comes here"
  }, 
  {
    projectTitle:"Search Github Users", 
    stackList:["Javascript", "React", "HTML", "CSS", 
                "Github", "Git", "RESTful API"
              ], 
    projectImage: githubSearch,
    githubLink:"https://github.com/amjadiftikhar/searchUsers_github",
    herokuLink:"https://github.com/amjadiftikhar/searchUsers_github",
    description:"description comes here"
  }, 
  {
    projectTitle:"Giphy Search", 
    stackList:["Javascript", "HTML", "CSS", 
                "Github", "Git", "RESTful API"
              ], 
    projectImage: giphySearch,
    githubLink:"https://github.com/amjadiftikhar/my_SPAs/tree/master/giphy-App",
    herokuLink:"https://github.com/amjadiftikhar/my_SPAs/tree/master/giphy-App",
    description:"description comes here, description comes here"
  }, 
  {
    projectTitle:"Portfolio Application", 
    stackList:["Javascript", "React", "Bootstrap", "HTML", "CSS", 
                "Github", "Git"
              ], 
    projectImage: oldPortfolioImage,
    githubLink:"https://github.com/amjadiftikhar/my-portfolio",
    herokuLink:"http://amjadportfolio.herokuapp.com/",
    description:"description comes here, description comes here"
  }
  ]

  export default projectObj;