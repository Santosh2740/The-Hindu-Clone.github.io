// <!-------------------------NEWS--HEADLINE--1----------------------------------------------->

// const Home2_api ="ee893823fdd3460b8ffd85653692c318";
const Home2_api ="faba931e994a422d9cd568cf81836d63";

let Headline1 = document.getElementById("box-1");
async function HeadlineAppend() {
  let HeadlineURL = `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(HeadlineURL);
    let users = await response.json();
    HeadlineData(users.articles);
    // console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
HeadlineAppend();

function HeadlineData(data) {
  data.forEach(function (el) {
    var card = document.createElement("div");
    var span = document.createElement("span");

    var ul = document.createElement("ul");

    var newsHeading = document.createElement("p"); 
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    Headline1.append(card)
    
  });
}

// <!-------------------------NEWS--HEADLINE--2----------------------------------------------->

let Headline2 = document.getElementById("box-2");
async function HeadlineAppend2() {
  let HeadlineURL2 = `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(HeadlineURL2);
    let users = await response.json();
    HeadlineData2(users.articles);
    // console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
HeadlineAppend2();

function HeadlineData2(data) {

  data.forEach(function (el) {
    var card = document.createElement("div");
    var span = document.createElement("span");

    var ul = document.createElement("ul");
   

    var newsHeading = document.createElement("p"); 
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    Headline2.append(card)
    
  });
}

// <!-------------------------NEWS--HEADLINE--3----------------------------------------------->

let Headline3 = document.getElementById("box-3");
async function HeadlineAppend3() {
  let HeadlineURL3 = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=5&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(HeadlineURL3);
    let users = await response.json();
    HeadlineData3(users.articles);
    // console.log(users.articles);
  } catch (err) {
    console.log(err);
  }
}
HeadlineAppend3();

function HeadlineData3(data) {
  data.forEach(function (el) {
    var card = document.createElement("div");
    var span = document.createElement("span");

    var ul = document.createElement("ul");

    var newsHeading = document.createElement("p"); 
    newsHeading.setAttribute("id", "edf");
    newsHeading.innerHTML = el.title;

    var link = document.createElement("a");
    link.href = el.url;

    link.append(newsHeading);

    ul.append(span, link);
    card.append(ul);
    Headline3.append(card)
    
  });
}

