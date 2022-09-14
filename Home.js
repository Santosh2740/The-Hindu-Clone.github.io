//API append From "NEWS API" ("Abdul Quadir")

const Home_API ="ee893823fdd3460b8ffd85653692c318"

async function myFunction() {
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${Home_API}`;

  // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c6e033dcc9ad4f3fa103d693944185ec`;
  let res = await fetch(url);
  let data = await res.json();
  appendData(data.articles);
}
myFunction();
function appendData(data) {
  let count = 1;
  data.forEach((el) => {
    let div1 = document.createElement("div");
    div1.setAttribute("class", `news${count}`);
    div1.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;
    let image = document.createElement("img");
    image.setAttribute("src", el.urlToImage);

    let p = document.createElement("p");
    p.innerText = el.title;
    p.setAttribute("id", "title");

    div1.append(image, p);
    document.getElementById("container").append(div1);
  });
}

//If you click on any news its go to LocalStorage(Abdul Quadir)
function dataDisplay(data) {
  window.location.href = "details.html";
  let news = localStorage.setItem("newsdata", JSON.stringify(data));
  console.log(news);
}

// ---------------------------S-L-I-D-E-----NEWS-----API--------------------------------------------------------------------->


var slideNews = document.getElementById("slideNews")
async function getSlideData() {
  let urlSlide = `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=16&apiKey=${Home_API}`;
  try {
    let response = await fetch(urlSlide);
    let users = await response.json();
    appendSlideNews(users.articles);
    // console.log(users.articles)
  } catch (err) {
    console.log(err);
  }
}
getSlideData();

function appendSlideNews(dated) {
  // slideNews.innerHTML = null;
  let count = 1;
  dated.forEach((el) => {
    // console.log(el);
    let card2 = document.createElement("div");
    card2.setAttribute("class", `news${count}`);
    card2.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let para = document.createElement("p");
    para.innerText = el.title;

    card2.append(image, para);
    document.getElementById("slideNews").append(card2);
  });
}



//<!-----------------------------Slide bar in home page----------------------------------------->

var button = document.getElementById("next_home");
// var button = document.querySelector(.next);

button.onclick = function () {
  var container = document.getElementById("slideNews");
  sideScroll(container, "right", 25, 100, 10);
};

var back = document.getElementById("prev_home");
back.onclick = function () {
  var container = document.getElementById("slideNews");
  sideScroll(container, "left", 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}



// <!-------------------------------------S---A--N--T--O--S--H------------------------------------------------------------------------------------------------->

