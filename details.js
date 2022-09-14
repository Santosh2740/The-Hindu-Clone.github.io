let news = JSON.parse(localStorage.getItem("newsdata"));
console.log(news);

let image = document.createElement("img");
image.setAttribute("src", news.urlToImage);

let title = document.createElement("p");
title.innerText = news.title;

let content = document.createElement("p");
content.innerText = news.content;

let desc = document.createElement("p");
desc.innerText = news.description;

let publish = document.createElement("p");
publish.innerText = news.publishedAt;

document
  .querySelector(".container1")
  .append(image, title, content, desc, publish);

async function myFunction() {
  let url = `https://newsdata.io/api/1/news?apikey=pub_84091586a77b5fb99d81bd1d64b5eee32e81&q=in&country=us&language=en&category=top`;
  let res = await fetch(url);

  let data = await res.json();
  console.log(data.results);

  appendData(data.results);
}
myFunction();

function appendData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let div1 = document.createElement("div");
    div1.setAttribute("class", `news${count}`);
    count++;
    let image = document.createElement("img");
    image.setAttribute("src", el.image_url);

    let p = document.createElement("p");
    p.innerText = el.title;

    div1.append(image, p);
    document.querySelector(".container").append(div1);
  });
}

// -------------------------santosh funcanlity----------------------

const apiikeys = "4cae90ffd89a4e6a8bdd80a6d457fdc5";

let searchDetails = async () => {
  try {
    let query = document.getElementById("query").value;

    // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${api_key}`;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=70&q=${query}&apiKey=${apiikeys}`;
    // let url = `https://newsapi.org/v2/everything?q=${query}&from=2022-06-19&sortBy=popularity&apiKey=${apiikeys}`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    localStorage.setItem("news", JSON.stringify(data));
    window.location.href = "searchFdetails.html";
  } catch (error) {
    console.log(error);
  }
};

let movie = document.getElementById("containt");
async function getData15() {
  let urls15 = `https://newsapi.org/v2/top-headlines?country=uk&category=business&pageSize=5&apiKey=${apiikeys}`;
  try {
    let response = await fetch(urls15);
    let users = await response.json();
    appened15(users.articles);
    // console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
getData15();

function appened15(data) {
  movie.innerHTML = null;
  data.forEach(function (el) {
    var card = document.createElement("div");
    card.setAttribute("id", "bhu");
    var span = document.createElement("span");

    var ul = document.createElement("ul");
    ul.setAttribute("id", "abc");

    var newsHeading = document.createElement("p"); //NEWSHEADING
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.setAttribute("id", "hide");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    movie.append(card);
  });
}

let movie2 = document.getElementById("containt2");
async function getData2() {
  let url2 = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=5&apiKey=${apiikeys}`;
  try {
    let response = await fetch(url2);
    let users = await response.json();
    append2(users.articles);
    // console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
getData2();

function append2(data3) {
  movie2.innerHTML = null;
  data3.forEach(function (el) {
    var card = document.createElement("div");
    card.setAttribute("id", "bhu");
    var span = document.createElement("span");

    var ul = document.createElement("ul");
    ul.setAttribute("id", "abc");

    var newsHeading = document.createElement("p"); //NEWSHEADING
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.setAttribute("id", "hide");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    movie2.append(card);
  });
}

let movie3 = document.getElementById("containt3");
async function getData3() {
  let url3 = `https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=5&apiKey=${apiikeys}`;
  // `https://newsapi.org/v2/top-headlines?country=us&apiKey=280cfd40a460489e99d7b0bf899d28c3`;
  try {
    let response = await fetch(url3);
    let users = await response.json();
    append3(users.articles);
    // console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
getData3();

function append3(data3) {
  movie3.innerHTML = null;
  data3.forEach(function (el) {
    var card = document.createElement("div");
    card.setAttribute("id", "bhu");
    var span = document.createElement("span");

    var ul = document.createElement("ul");
    ul.setAttribute("id", "abc");

    var newsHeading = document.createElement("p"); //NEWSHEADING
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.setAttribute("id", "hide");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    movie3.append(card);
  });
}
