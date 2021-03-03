const API = require("./lib/API");
const readlineSync = require("readline-sync");
// const { stringify } = require("querystring");
// const { update } = require("./lib/API");


const mainMenuChoice = ["See Game info","Add New Game", "Remove Game"];
const gameRatings = [1,2,3,4,5]
const newGame = {"id": '', "title": '', "platforms":[],"ratings":0,"times rated":0,"aveRating":0};

const games = API.read("games");
const gamesTitles = games.map(game => `\n ${game.title}`);

const mainMenu = () => {
  console.log("====MAIN MENU====");
  const initChoice = readlineSync.keyInSelect(mainMenuChoice, "What would you like to do?");
  if(initChoice == 0) {
    seeGameListForInfo();
  } else if (initChoice == 1) {
    addNewGame();
  } else if(initChoice ==2){
    removeGame();
  } else if(mainMenuChoice[initChoice] == undefined){
    console.log("ENJOY YOUR GAME :)")
  }

}

const seeGameListForInfo = () => {
  console.log("====GAME LIST====");
  const gameSelected = readlineSync.keyInSelect(gamesTitles, "Which game would you like to see more info about?",{cancel:'Back to Main Menu'})
  const gameName = games[gameSelected];
 
  if(gamesTitles[gameSelected] == undefined){
    mainMenu();
  } else {
    console.log(gameName)
  }

 let currenRating = gameName["ratings"];

  const rateGame = () => {
    console.log("====GAME RATING====");
    const givenRating = readlineSync.keyInSelect(gameRatings, "Rate the game between 1-5:",{cancel:'Back to Main Menu'})
    if(gameRatings[givenRating] == undefined){
      seeGameListForInfo();
    }

    ratingToPush = eval(gameRatings[givenRating]+currenRating);
    currenRating = ratingToPush;
    ratedTimes = gameName["times rated"];
    ratedTimes= ratedTimes+1;
    console.log(ratedTimes);
    let aveRating =eval(ratingToPush/ratedTimes);
    aveRating = Math.round(aveRating*10)/10


    console.log(`ratings: ${currenRating}, times rated:${ratedTimes}, newAveRating: ${aveRating}`)

    gameName["ratings"] = currenRating;
    gameName["times rated"] = ratedTimes;
    gameName["aveRating"] = aveRating;
 
   API.update("games", gameName);

    
  
  }
  rateGame();
  mainMenu()
}
let newPlatformsArray = [];
const addNewGame = () => {
  console.log("====ADD NEW GAME====");
    const newId = games.length +1;
    const newTitle = readlineSync.question("What is your game title?");
    const newPlatforms = readlineSync.question("which Platform(s) is your game on?(seperate with spaces if multiple) ");

    const stringToArray = (str) => str.trim().split(" ");

    newPlatformsArray = stringToArray(newPlatforms);
    console.log(newPlatformsArray);

    newGame.id = newId;
    newGame.title = newTitle;
    newGame.platforms = newPlatformsArray;

    API.create("games", newGame);

    mainMenu();
}

const removeGame = () => {
  console.log("====DELETE GAME====");
  const gameSelected = readlineSync.keyInSelect(gamesTitles, "Which game would you like to delete?",{cancel:'Back to Main Menu'})
  const gameName = games[gameSelected];
  const gameID = gameSelected+1;

  if(gamesTitles[gameSelected] == undefined){
    mainMenu();
  } else {
    console.log(gameName);
  };

  if(readlineSync.keyInYN('Are you sure you want to PERMANENTLY delete this game and all its info? (Y/N)')) {
    console.log(gamesTitles[gameSelected] + " has been Deleted")
    API.destroy("games",gameID);3
    mainMenu();
  } else {
    mainMenu();
  };

}
// function calculateAverageRating(book) {
//   let total = 0;
//   for (const review of book.reviews) {
//     total += parseInt(review.rating);
//   }
//   return total / book.reviews.length;
// }

// function displayBooksSummary(books) {
//   for (const book of books) {
//     // if ths book has some reviews
//     if (book.reviews.length > 0) {
//       console.log(
//         `--- ${book.id}: ${book.title}, rating: ${calculateAverageRating(book)}`
//       );
//     } else {
//       console.log(`--- ${book.id}: ${book.title}, no reviews yet!`);
//     }
//   }
// }

// function displayBookDetails(book) {
//   console.log(`-- ${book.title} --`);
//   for (const review of book.reviews) {
//     console.log(`${review.content} - Rating: ${review.rating}`);
//   }
// }

// function chooseABook(books) {
//   // display each ID and title
//   for (const book of books) {
//     console.log(`--- ${book.id}: ${book.title}`);
//   }

//   // user inputs an ID number
//   const bookChoice = readlineSync.question(
//     "Which number book would you like to review? "
//   );
//   const book = API.read("books", bookChoice);

//   // if the API can't find that book
//   // run chooseABook again
//   if (book !== undefined) {
//     return book;
//   } else {
//     console.log("Ooops we can't find that book!");
//     return chooseABook(books)1;
//   }
// }

// function mainMenu() {
//   console.log("----------------");
//   console.log("---- AMAZON ----");
//   console.log("----------------");
//   console.log("1. View our books");
//   console.log("2. Leave a review");
//   console.log("----------------");

//   const choice = readlineSync.question("Please choose an option ");

//   if (choice === "1") {
//     console.log("-----------------");
//     console.log("- ALL OUR BOOKS -");
//     console.log("-----------------");

//     // get all books
//     const books = API.read("books");
//     displayBooksSummary(books);

//     // return to main menu
//     mainMenu();
//   } else if (choice === "2") {
//     console.log("-----------------");
//     console.log("- CHOOSE A BOOK -");
//     console.log("-----------------");

//     const books = API.read("books");
//     const book = chooseABook(books);
//     displayBookDetails(book);

//     // Input review details
//     const rating = readlineSync.question("What is your rating? ");
//     const content = readlineSync.question("Please write your review ");

//     // add the new review to the book reviews
//     book.reviews.push({
//       rating: rating,
//       content: content
//     });

//     // update the book in the API
//     API.update("books", book);

//     console.log("----------------------------");
//     console.log("Thanks for leaving a review!");
//     console.log("----------------------------");

//     // return to main manu
//     mainMenu();
//   } else {
//     console.log("Sorry we didn't recognise that choice!");
//     mainMenu();
//   }
// }
gamesTitles;
mainMenu();
