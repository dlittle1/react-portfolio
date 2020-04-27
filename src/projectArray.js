export default [
    {
      published:true,
      title: "Trivia App - React ",
      website: "https://dlittle1.github.io/Trivia_Game_React",
      github: "https://github.com/dlittle1/Trivia_Game_React",
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
      ],
      featuredImage: require("./assets/triviaRoyaleHome.png")
    },
    {
      published:true,
      title: "My Portfolio - React ",
      website: "https://dlittle1.github.io/react-portfolio",
      github: "https://github.com/dlittle1/react-portfolio",
      featuresArr:
      [
         {
            title: "Built with expandability in mind",
            text: `Was built without a backend but with an array of objects - projects.
                   Whenever I need to edit a project, or add a new project, all I need to do is add it to the array.
                   The Projects page will then take the info from the array and share it with the user of the site for it's given project id.
                   As pictured in the screenshot within this projects carousel.`
         },
         {
            title: "Built with UI/UX at it's core",
            text: `From the very beginning of it's creation, I wanted this site to stand out.
                   After all, it is my portfolio. It's what needs to stand out! So before even beginning I had to create the idea, I used Adobe XD for this.
                   Learning Adobe XD has been an integral part of not only learning to make websites, but to make easy to use, good looking sites as well.
                   it helped me to sketch out what would look great, then implementing that into code was easy peasy.`
         },
         {
            title: "A possible business idea.",
            text: `I know there are a lot of template sites out there for wordpress, but with a site such as this, all you would really need to know is how to edit an object without breaking the code.
                   This site could easily be turned into a template site that I could then sell to others looking for portfolio templates.`
         }
      ],
      imgArr:
      [
         {imgSrc: require("./assets/portfolio/adobeXD.png"), imgSubtitle: "use of Adobe Xd in the creation of my portfolio, some things have changed, but that's all in the process :)"},
         {imgSrc: require("./assets/portfolio/projectsArray.png"), imgSubtitle: "Using an array of objects to store, and easily access projects"},
         {imgSrc: require("./assets/portfolio/projectsPage.png"), imgSubtitle: "How I access the array of objects to display my project"},
         {imgSrc: require("./assets/portfolio/projectsPage2.png"), imgSubtitle: "Using the information given, I can then display the info in a clear, and concise way"}


      ],
      featuredImage: require("./assets/portfolio/adobeXD.png")
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
      published: true,
      title: "About Me",
      featuresArr:
      [
         {
           title: "🍟 + 😴 + 💻 Pretty much sums it up",
           text: "In all honesty though, I really do love to code, not only is it something that I can do professionaly but it's something that I'm truly passionate about. "
        },
        {
           title: "Puzzles",
           text: "Ever since I was a kid I've enjoyed puzzles. I started out with jigsaw but then moved into word puzzles, for example, you have to figure out who is wearing what, and what kind of pet they owned. If you know what i'm talking about then I applaud you, I loved those as a kid. I think one of the reasons I love programming so much is because I love to come up with solutions to problems, or answers to puzzles. It's exciting for me, I can literally do it all day."
        },
        {
           title: "Artist",
           text: "I love to paint, and I love to pretty much do anything outside. I've been an artist for as long as I can remember, at least an artist at heart. I'm not great, but I enjoy it. When I was in high school I even had an 'internship' at an art studio where I would go paint all day. Best internship ever! I've been painting, and drawing ever since, I've even done some commercial work, not a lot but enough to get my feet wet."
        },
        {
           title: "Outdoorist",
           text: "Born and raised in Utah, so I guess I'm your typical Utahn when I say that I LOVE the outdoors, I love to ski, hike, bike, climb, fish, really anything outside, I love to do it!"
        }
      ],
      imgArr:
      [
         {imgSrc: require("./assets/moto.jpg")},
         {imgSrc: require("./assets/profileImage2.jpeg")},
         {imgSrc: require("./assets/stars.jpg")},
         {imgSrc: require("./assets/lights.jpg")}
      ],
      featuredImage: require("./assets/profileImage.jpg")
  }
]
