import rickAndMortyHome from './assets/projectScreenshots/RickAndMortyHome.PNG';
import rickAndMortyCharacter from './assets/projectScreenshots/RickAndMortyCharacter.PNG';
import quizApp from './assets/projectScreenshots/QuizApp.PNG';
import quizAppEndScreen from './assets/projectScreenshots/QuizAppEndScreen.PNG';
import sneakerHeadsLanding from './assets/projectScreenshots/sneaker-heads-landing.png';
import RTV1 from './assets/projectScreenshots/RTV1.png';
import RTV2 from './assets/projectScreenshots/RTV2.png';

const data = [
  {
    title: 'Rock the Vote',
    description:
      "Rock the Vote is a web application that allows you to post about different political views and vote on the most popular one. It's a great way to get involved in politics and to show your support for your local candidates. This application was developed on the MERN stack. I was responsible for the front-end and back-end development. It is mobile responsive and has a clean and simple design. The database is hosted on MongoDB Atlas, while the server is hosted on Heroku.",
    importantPoints: [
      'Used context to store user state, as well as access API calls.',
      'The user is able to like posts that interest them.',
      'Posts can be sorted by new, popularity, tags, current user likes, and current user posts.',
      'Users can comment on posts.',
      'App is secure, with hashing of passwords, authentication and authorization.',
    ],
    imgs: [RTV1, RTV2],
    github: 'https://github.com/dlittle1/political-issue-project',
    website: 'https://rock-the-vote1.herokuapp.com/',
  },
  {
    title: 'Rick and Morty Universe',
    description:
      "Rick and Morty themed site thats pulls data from two api's, rickandmortyapi.com and mediawiki.org/wiki/API. The data that is pulled gives information about characters locations and episodes and how they are related, for example: what characters are from what locations and are in what episodes. mediawiki allows me to access the wikipedia on rick and morty and that is where I pulled descriptions for each character.",
    importantPoints: [
      'Used axios to make Api Calls.',
      'Implemented Infinite Scroll functionality into character list, and location list.',
      'Used Lodash and debounce to ensure Infinite scroll was not called more than once at a time.',
      'Cleaned the requested wiki HTML data to ensure that no Cross Site Scripting attacks could be made.',
    ],
    imgs: [rickAndMortyHome, rickAndMortyCharacter],
    github: 'https://github.com/dlittle1/RickAndMortyUniverse',
    website: 'http://dlittle1.github.io/RickAndMortyUniverse',
  },
  {
    title: 'Quiz App',
    description:
      'An app made from information pulled from opentdb.com which is an api for quizes. It provides categories, difficulty, multiple choice, true/false, and an amount of questions up to 50. I used this api to create a website that pretty much put those things together, so that a user could choose from those choices and would then be given however many questions that they chose with the correct filters. The app would then display how well they did in the end.',
    importantPoints: [
      'implemented the use of axios for making API calls.',
      'used context to deliver the choices made by the user to the question component.',
    ],
    imgs: [quizApp, quizAppEndScreen],
    github: 'https://github.com/dlittle1/Quiz-App',
    website: 'http://dlittle1.github.io/Quiz-App',
  },
  {
    title: 'Sneaker Heads',
    description:
      "Sneaker Heads is an online social media platform for those that love shoes. It's a place where people can go to share pics of their favorite shoes. They can like other shoes, comment on other shoes, they can create update and delete their own shoes. All of these are stored using MongoDB, the server is run on Node.JS and Express.",
    importantPoints: [
      'Created an API specifically for the shoes.',
      'MongoDB was used to hold the information: shoes, comments, likes, image urls, etc.',
    ],
    imgs: [sneakerHeadsLanding],
    github: 'https://github.com/dlittle1/sneaker-heads',
    website: 'https://sneaker-heads1.herokuapp.com/',
  },
];
export default data;
