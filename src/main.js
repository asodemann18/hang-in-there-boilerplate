
var image = document.querySelector(".poster-img");
var title = document.querySelector(".poster-title");
var quote = document.querySelector(".poster-quote");
var formButton = document.querySelector(".show-form");
var makePoster = document.querySelector(".poster-form");
var mainPage = document.querySelector(".main-poster");
var mainButton = document.querySelector(".show-main");
var showSavedButton = document.querySelector(".show-saved");
var savePage = document.querySelector(".saved-posters");
var backToMainButton = document.querySelector(".back-to-main");
var inputImage = document.querySelector("#poster-image-url");
var inputTitle = document.querySelector("#poster-title");
var inputQuote = document.querySelector("#poster-quote");
var makePosterButton = document.querySelector(".make-poster");
var saveThisPosterButton = document.querySelector(".save-poster");
var savedPostersGrid = document.querySelector(".saved-posters-grid");
var showRandomButton = document.querySelector(".show-random");
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg",
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom",
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall.",
];
var savedPosters = [];

image.addEventListener("load", getImage(images));
title.addEventListener("load", getTitle(titles));
quote.addEventListener("load", getQuote(quotes));
formButton.addEventListener("click", formPoster);
mainButton.addEventListener("click", takeMeBack);
showSavedButton.addEventListener("click", showSaved);
backToMainButton.addEventListener("click", showMain);

makePosterButton.addEventListener("click", addNewCustomPoster);
makePosterButton.addEventListener("click", newInstance);
makePosterButton.addEventListener("click", takeMeBack);
makePosterButton.addEventListener("click", displayNewPoster);

saveThisPosterButton.addEventListener("click", saveNewPoster);
saveThisPosterButton.addEventListener("click", showSavedPoster);
showRandomButton.addEventListener("click", getNewPoster);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getImage(array) {
  var indexHolder = getRandomIndex(array);
  var newImage = array[indexHolder];
  image.setAttribute("src", newImage);
}

function getTitle(array) {
  var indexHolder = getRandomIndex(array);
  var newTitle = array[indexHolder];
  title.innerText = newTitle;
}

function getQuote(array) {
  var indexHolder = getRandomIndex(array);
  var newQuote = array[indexHolder];
  quote.innerText = newQuote;
}

function formPoster() {
  mainPage.classList.add("hidden");
  makePoster.classList.remove("hidden");
}

function takeMeBack() {
  makePoster.classList.add("hidden");
  mainPage.classList.remove("hidden");
}

function showSaved() {
  mainPage.classList.add("hidden");
  savePage.classList.remove("hidden");
}

function showMain() {
  savePage.classList.add("hidden");
  mainPage.classList.remove("hidden");
}

function addNewCustomPoster() {
  images.push(inputImage.value);
  titles.push(inputTitle.value);
  quotes.push(inputQuote.value);
}

function newInstance(event) {
  event.preventDefault();
  var newPoster = new Poster(inputImage.value, inputTitle.value, inputQuote.value);
}

function displayNewPoster() {
  var lastImage = images[images.length - 1];
  image.setAttribute("src", lastImage);
  var lastTitle = titles[titles.length - 1];
  title.innerText = lastTitle;
  var lastQuote = quotes[quotes.length - 1];
  quote.innerText = lastQuote;
}

function saveNewPoster() {
  var saveThisPoster = new Poster(image.getAttribute("src"), title.innerText, quote.innerText);
  for(var i = 0; i < savedPosters.length; i++) {
      var poster = savedPosters[i] ;
      if(poster.imageURL === saveThisPoster.imageURL && poster.title === saveThisPoster.title && poster.quote === saveThisPoster.quote) {
        return;
      }
   }
   savedPosters.push(saveThisPoster);
}

function showSavedPoster() {
  savedPostersGrid.innerHTML = "";
  for(var i = 0; i < savedPosters.length; i++) {
    var imageUrlFromArray = savedPosters[i].imageURL;
    var titleFromArray = savedPosters[i].title;
    var quoteFromArray = savedPosters[i].quote;
    var poster = `<article class = "mini-poster">
                    <img src="${imageUrlFromArray}" alt="nothing to see here">
                    <h2>${titleFromArray}</h2>
                    <h4>${quoteFromArray}</h4>
                  </article>`;
  savedPostersGrid.insertAdjacentHTML("afterbegin", poster);
  }
}

function getNewPoster() {
  var indexHolderImage = getRandomIndex(images);
  var indexHolderTitle = getRandomIndex(titles);
  var indexHolderQuote = getRandomIndex(quotes);
  var newImage = images[indexHolderImage];
  var newTitle = titles[indexHolderTitle];
  var newQuote = quotes[indexHolderQuote];
  image.setAttribute("src", newImage);
  title.innerText = newTitle;
  quote.innerText = newQuote;
}
