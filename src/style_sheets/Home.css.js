export default {
   container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridAutoRows: '1fr 1fr'
   },

   header: {
      gridColumn: "1/4",
      position: "relative",
      top: "25px",
      display: "flex",
      justifyContent: "center"
   },

   links: {
      float: "left",
      maxHeight: "45%"
   }

   main: {
      grid-column: 1/4;
      grid-row: 2/4',
      margin: -30px 5% 0px 5%',
      position: relative',
      text-align: center',
   }

   .main{

   }

   .main > img {
      width: 100%',
   }

   .hero-text {
      position: absolute',
      width: 100%',
      z-index: 1',
      color: #3E3E3E',
      font-size: 3vw',
   }

   .hero-text > h1 {
      display: inline-block',
      margin-bottom: 0px',
   }

   .hero-text > h2 {
      display: inline-block',
      font-size: 3vw',
      position: relative',
      top: 0',
      color: #6684C9',
   }



   .projects-button {
      background-color: #6684C9',
      color: white',
      border-radius: 5px',
      margin-top: 50px',
      width: 150px',
   }
   .dev-pic {
      display: none',
   }

   @media screen and (max-width: 600px){
      .dev-pic {
         display: inline-block',
         max-width: 50%',
         position: relative',
         bottom: -80px',
         left: 25%',
         opacity: 0.5',
         z-index: -2',
      }
   }

   @media screen and (max-width: 992px) {

      .header-full {
         justify-content:center',
      }

      .home-links-full {
         max-width: 40%',
         max-height: 40%',
      }

      main {
         margin: 0px 10px 0px 10px',
      }

      .home-heading-full {
         font-size: 3.5vw',
      }

      .home-body-full > img {
         width: 100%',
      }

      .background-cover {
         height: 375px',
         width: 100%',
         background-color:#F2F2F2',
         position: absolute',
         top: 0',
         z-index:-1',
      }
   }

}
