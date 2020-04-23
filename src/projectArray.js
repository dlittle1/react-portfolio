export default [
    {
      published:true,
      title: "Trivia App - React ",
      website: "https://dlittle1.github.io/Trivia_Game_React/",
      featuresArr:
      [
         {
            title: "Built Using the opentdb.com Trivia Api - Stored Locally",
            text: "My Trivia App was built as a means to express my ability to use RESTful API's in my React Applications. The application utilizes Axios to access the database, and pull in the required information. The Score, Health, and Questions are all stored locally allowing the user to leave or refresh without interuption."
         },
         {
            title: "The Object of The Game",
            text: "The game length is determined by how long a player can stay alive. They have three lives, every time they miss a question they lose a life, if they die early the game ends, and they have to restart. If they go all 10 questions without losing they win the game, and are then able to play again if they choose to do so."
         },
         {
            title: "The User Gets to Choose",
            text: "When first starting the application the user is as to choose which Category and Difficulty they would like to play with. The category of questions, and their difficulty will then be pulled from the API allowing the user to begin the game."
         }
      ],
      imgArr:
      [
         {imgSrc: require("./assets/triviaCode.png"), imgSubtitle: "use of axios for getting and setting categories, and difficulty"},
         {imgSrc: require("./assets/triviaLocalStorage.png"), imgSubtitle: "use of local storage allowing the user a more functional experience"},
         {imgSrc: require("./assets/triviaRoyaleHome.png"), imgSubtitle: "Home Page"},
         {imgSrc: require("./assets/triviaGame.png"), imgSubtitle: "Gameplay"}
      ]
    },
    {
      published: false,
      title: "Coming Soon...",
      website: "https://dlittle1.github.io/Trivia_Game_React/",
      p1Title: "Built Using the opentdb.com Trivia Api - Stored Locally",
      p1Text: `My Trivia App was built as a means to express my ability to use RESTful API's in my React Applications. The application utilizes Axios to access the database, and pull in the required information. The Score, Health, and Questions are all stored locally allowing the user to leave or refresh without interuption.`,
      p2Title: "The User Gets to Choose",
      p2Text: "When first starting the application the user is as to choose which Category and Difficulty they would like to play with. The category of questions, and their difficulty will then be pulled from the API allowing the user to begin the game.",
      p3Title: "The Object of The Game",
      p3Text: "The game length is determined by how long a player can stay alive. They have three lives, every time they miss a question they lose a life, if they die early the game ends, and they have to restart. If they go all 10 questions without losing they win the game, and are then able to play again if they choose to do so.",
      imgArr:
      [
          {imgSrc: require("./assets/triviaCode.png"), imgSubtitle: "use of axios for getting and setting categories, and difficulty"},
          {imgSrc: require("./assets/triviaLocalStorage.png"), imgSubtitle: "use of local storage allowing the user a more functional experience"},
          {imgSrc: require("./assets/triviaRoyaleHome.png"), imgSubtitle: "Home Page"},
          {imgSrc: require("./assets/triviaGame.png"), imgSubtitle: "Gameplay"}
      ]

    },
    {
      published: false,
      title: "Coming Soon...",
      subtitle: "We predict too much for the next year and yet far too little for the next ten.",
      tp1Title: "Feature1",
      p1Text: "Start Bootstrap",
      p2Title: "Feature1",
      p2Text: "Start Bootstrap",
      imgSrc: "https://images.unsplash.com/photo-1583903035692-48d7e13ab3f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"


    },
    {
      published: false,
        title: "Failure is not an option",
        subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        p1Title: "Feature1",
        p1Text: "Start Bootstrap",
        p2Title: "Feature1",
        p2Text: "Start Bootstrap",
        imgSrc: "https://images.unsplash.com/photo-1583864442126-cf72052ced87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
]
