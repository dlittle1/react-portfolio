import RickAndMortyHome from './assets/projectScreenshots/RickAndMortyHome.PNG'
import RickAndMortyCharacter from './assets/projectScreenshots/RickAndMortyCharacter.PNG'
import QuizApp from './assets/projectScreenshots/QuizApp.PNG'
import QuizAppEndScreen from './assets/projectScreenshots/QuizAppEndScreen.PNG'
const data = [
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
    imgs: [RickAndMortyHome, RickAndMortyCharacter],
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
    imgs: [QuizApp, QuizAppEndScreen],
    github: 'https://github.com/dlittle1/Quiz-App',
    website: 'http://dlittle1.github.io/Quiz-App',
  },
]
export default data
