// <!------------------------LOCAL--STORAGE----DATA---------------------------------------------------------------------->

// const Home2_api ="faba931e994a422d9cd568cf81836d63";


var data = JSON.parse(localStorage.getItem('news'))
    console.log(data)

    let image = document.createElement("img")
    image.src =data.articles[0].urlToImage;
    // image.src =data.articles[1].urlToImage;

    let image1 = document.createElement("img")
    image1.src =data.articles[2].urlToImage;

    let image2 = document.createElement("img")
    image2.src =data.articles[7].urlToImage;

    let image3 = document.createElement("img")
    image3.src =data.articles[6].urlToImage;

    let image4 = document.createElement("img")
    image4.src =data.articles[5].urlToImage;


    let desc = document.createElement("p")
    desc.innerText = data.articles[0].description;

    let desc2 = document.createElement("h3")
    desc2.innerText = data.articles[2].description;
    desc2.setAttribute("id","title")

    let title = document.createElement("h3")
    title.innerText= data.articles[2].title;
    title.setAttribute("id","title")

    let content = document.createElement("p")
    content.innerText = data.articles[2].content;
    content.setAttribute("id","title")

    document.getElementById("head-photo").append(image1)
    document.getElementById("heading").append(title)
    document.getElementById("sidebar1").append(image2)
    document.getElementById("sidebar2").append(image)
    document.getElementById("sidebar3").append(image3)
    document.getElementById("sidebar4").append(image4)
    document.getElementById("detailedsa").append(desc2,content)






// <!-------------------------Internation--news----------------------------------------------------------------------------------->

var InternationNews = document.getElementById("card")
async function InternationAppend() {
  let urlSlide = `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=6&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(urlSlide);
    let users = await response.json();
    InternationData(users.articles);
    console.log(users.articles)
  } catch (err) {
    console.log(err);
  }
}
InternationAppend();

function InternationData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let card = document.createElement("div");
    card.setAttribute("class", `news${count}`);
    card.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let para = document.createElement("p");
    para.setAttribute("id","textInfo")
    para.innerText = el.title;

    card.append(image, para);
    InternationNews.append(card)
  });
}

// <!-------------------------YOUTUBE---news----------------------------------------------------------------------------------->

const Youtube_API ="AIzaSyCJyaaVC4RqxNBCwUJwZX3ivdIZgtNro7Y";
       
let YoutubeNews = document.getElementById("video-detils")
    async function youtubeAppend(){
        let youtube_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=worldnews&key=${Youtube_API}`;
        try{
            let repns = await fetch(youtube_url)
            let data = await repns.json()
            // console.log(data)
            youtubeData(data.items)
        }
        catch(err){
            console.log(err)
        }
    }

    youtubeAppend();

    function youtubeData(data){
        console.log(data)
            data.forEach(({id:{videoId},snippet:{title,thumbnails}}) => {
            // console.log(videoId)
            // console.log(title )
            let div = document.createElement('div');
 
            
            let img = document.createElement('img')
            // img.src= thumbnails.default.url;
            // img.setAttribute("id","logo")


            let iframe = document.createElement('iframe');
            iframe.src= `https://www.youtube.com/embed/${videoId}`;
            iframe.allow = "fullscreen";
            iframe.setAttribute("id","iframeStyle")


            let tagName =  document.createElement('h3');
            tagName.innerText = title;
            tagName.setAttribute("id","youtube-text")

            div.append(iframe,tagName)

            let video = {
            title,
            videoId,
            
            };

            div.onclick = () => {
            playVideo(video);
            };
            YoutubeNews.append(div)

        });

    };

// <!-------------------------NATIONAL---news----------------------------------------------------------------------------------->
var NationalNews = document.getElementById("last-grid")
async function NationalAppend() {
  let Nationa_URL = `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=100&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(Nationa_URL);
    let users = await response.json();
    NationaData(users.articles);
    console.log(users.articles)
  } catch (err) {
    console.log(err);
  }
}
NationalAppend();

function NationaData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let card = document.createElement("div");
    card.setAttribute("class", `news${count}`);
    card.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let para = document.createElement("p");
    para.setAttribute("id","textInfo")
    para.innerText = el.title;

    card.append(image, para);
    NationalNews.append(card)
  });
}

  //------------------------------funcanality of next and preview------------------------------------ 

  var button = document.getElementById('next');
  // var button = document.querySelector(.next);
  
  button.onclick = function () {
      var container = document.getElementById('last-grid');
      sideScroll(container,'right',25,100,10);
  };
  
  var back = document.getElementById('prev');
  back.onclick = function () {
      var container = document.getElementById('last-grid');
      sideScroll(container,'left',25,100,10);
  };
  
  function sideScroll(element,direction,speed,distance,step){
      scrollAmount = 0;
      var slideTimer = setInterval(function(){
          if(direction == 'left'){
              element.scrollLeft -= step;
          } else {
              element.scrollLeft += step;
          }
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
  }
  
  
// <!-------------------------SPORTS---news----------------------------------------------------------------------------------->

var sportsNews = document.getElementById("sports")
async function sportsAppend() {
  let sports_url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=12&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(sports_url);
    let users = await response.json();
    sportsData(users.articles);
    console.log(users.articles)
  } catch (err) {
    console.log(err);
  }
}
sportsAppend();

function sportsData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let card = document.createElement("div");
    card.setAttribute("class", `news${count}`);
    card.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let para = document.createElement("p");
    para.setAttribute("id","textInfo")
    para.innerText = el.title;

    card.append(image, para);
    sportsNews.append(card)
  });
}

// <!-------------------------Healths---news----------------------------------------------------------------------------------->

var HealthsNews = document.getElementById("Health")
async function healthsAppend() {
  let healths_url = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=12&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(healths_url);
    let users = await response.json();
    healthsData(users.articles);
    console.log(users.articles)
  } catch (err) {
    console.log(err);
  }
}
healthsAppend();

function healthsData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let card = document.createElement("div");
    card.setAttribute("class", `news${count}`);
    card.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let para = document.createElement("p");
    para.setAttribute("id","textInfo")
    para.innerText = el.title;

    card.append(image, para);
    HealthsNews.append(card)
  });
}

// <!-------------------------Entertainments---news----------------------------------------------------------------------------------->

var EntertainmentsNews = document.getElementById("entertainment")
async function EntertainmentsAppend() {
  let Entertainments_URL = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=12&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(Entertainments_URL);
    let users = await response.json();
    EntertainmentsData(users.articles);
    console.log(users.articles)
  } catch (err) {
    console.log(err);
  }
}
EntertainmentsAppend();

function EntertainmentsData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let card = document.createElement("div");
    card.setAttribute("class", `news${count}`);
    card.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let para = document.createElement("p");
    para.setAttribute("id","textInfo")
    para.innerText = el.title;

    card.append(image, para);
    EntertainmentsNews.append(card)
  });
}

// <!-------------------------Other---news----------------------------------------------------------------------------------->

var OthersNews = document.getElementById("lastpagelike")
async function OthersNewsAppend()
{
    let OthersNews_url= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=18&apiKey=ee893823fdd3460b8ffd85653692c318`;
    ;
    try{
        let response=await fetch(OthersNews_url)
    let users=await response.json()
    OthersNewsData(users.articles)
    // console.log(users.articles)
    }
   catch(err)
   {
       console.log(err)
   }
}
OthersNewsAppend()


function OthersNewsData(data){
    let count = 1;
  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class",`news${count}`);
    card.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    // image.src = el.urlToImage;
    
    let para = document.createElement("p");
    para.setAttribute("id","textInfo")
    para.innerText = el.title;

        var link = document.createElement('a');
        link.setAttribute("id","hideText")
        link.href = el.url;

        link.append(para)

    card.append(link);
    OthersNews.append(card)
  });

}


// <!-------------------------USA---news----------------------------------------------------------------------------------->

var usaNews = document.getElementById("UsaNews")
async function usaAppend() {
  let usa_URL = `https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=16&apiKey=ee893823fdd3460b8ffd85653692c318`;
  try {
    let response = await fetch(usa_URL);
    let users = await response.json();
    usaData(users.articles);
    console.log(users.articles)
  } catch (err) {
    console.log(err);
  }
}
usaAppend();

function usaData(data) {
  let count = 1;
  data.forEach((el) => {
    // console.log(el);
    let card = document.createElement("div");
    card.setAttribute("class", `news${count}`);
    card.addEventListener("click", function () {
      dataDisplay(el);
    });
    count++;

    let image = document.createElement("img");
    image.src = el.urlToImage;

    let para = document.createElement("p");
    para.setAttribute("id","textInfo")
    para.innerText = el.title;

    card.append(image, para);
    usaNews.append(card)
  });
}
