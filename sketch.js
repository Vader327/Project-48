var response, responseJOSN, hospital, hospitalJSON;
var citySelector, hospitalSelector, search;
var x, i, info, boxDiv, hideButton;
var weatherSelector, horoscopeSelector;
var horoscope, horoscopeText, weather, weather_query, jokeText;
var temperature, humidity, weatherDescription;
var container, iconContainer, joke, table;
var newJoke;
var flightText, hotelText;
var weatherHeader, horoscopeHeader, hospitalHeader, jokeHeader;
var yoga, yogaSelector1, yogaSelector2, yogaSelector3, yogaSelector4;
var doctor, doctorSelector1, doctorSelector2, doctorSelector3, doctorSelector4;
var cnslng, cnslngSelector1, cnslngSelector2;
var helpline, helplineSelector;
var movie, movieSelector1, movieSelector2, movieSelector3;
var travel, travelSelector1, travelSelector2, travelSelector3, travelSelector4;
var hotelSelector1, hotelSelector2, hotelSelector3, hotelSelector4;
var shopping, shoppingSelector1, shoppingSelector2, shoppingSelector3, shoppingSelector4, shoppingSelector5;
var game, gameSelector1, gameSelector2, gameSelector3, gameSelector4, gameSelector5, gameSelector6;
var weatherIcon, horoscopeIcon, hospitalIcon, jokeIcon;
var weatherDiv, horoscopeDiv, hospitalDiv, jokeDiv, travelDiv, hotelDiv;

var cityArr = [];
var hospitals = [];
var weatherData = [];
var horoscopes = [];
var horoscopeNames = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];

var clicked = false;
var isloaded = false;

function setup(){
  getData();

  document.getElementById("defaultCanvas0").remove();

  yoga = createElement("img");
  yoga.elt.src = "Pictures/yoga.jpg";  
  doctor = createElement("img");
  doctor.elt.src = "Pictures/doctor.jpg";
  cnslng = createElement("img");
  cnslng.elt.src = "Pictures/counselling.png";
  helpline = createElement("img");
  helpline.elt.src = "Pictures/helpline.jpg";
  movie = createElement("img");
  movie.elt.src = "Pictures/movie.jpg";
  travel = createElement("img");
  travel.elt.src = "Pictures/ticket.jpg";
  shopping = createElement("img");
  shopping.elt.src = "Pictures/shopping.jpg";
  game = createElement("img");
  game.elt.src = "Pictures/game.jpg";

  
  weatherIcon = createInput();
  weatherIcon.elt.type = "image";
  weatherIcon.elt.src = "Pictures/weathericon.gif";
  weatherIcon.elt.alt = "Weather";
  weatherIcon.elt.id = "weatherIcon";

  weatherHeader = createElement("h3");
  weatherHeader.html("Weather");
  weatherHeader.elt.id = "iconText";

  weatherDiv = createDiv();
  weatherDiv.addClass("iconDiv");
  weatherDiv.child(weatherIcon.elt);
  weatherDiv.child(weatherHeader.elt);


  horoscopeIcon = createInput();
  horoscopeIcon.elt.type = "image";
  horoscopeIcon.elt.src = "Pictures/horoscopeicon.png";
  horoscopeIcon.elt.alt = "Horoscope";
  horoscopeIcon.elt.id = "horoscopeIcon";
  horoscopeIcon.style("animation","spin 20s linear infinite");

  horoscopeHeader = createElement("h3");
  horoscopeHeader.html("Horoscope");
  horoscopeHeader.elt.id = "iconText";
  
  horoscopeDiv = createDiv();
  horoscopeDiv.addClass("iconDiv");
  horoscopeDiv.child(horoscopeIcon.elt);
  horoscopeDiv.child(horoscopeHeader.elt);


  hospitalIcon = createInput();
  hospitalIcon.elt.type = "image";
  hospitalIcon.elt.src = "Pictures/hospitalicon.png";
  hospitalIcon.elt.alt = "Hospoital Infomation";
  hospitalIcon.elt.id = "weatherIcon";

  hospitalHeader = createElement("h3");
  hospitalHeader.html("Hospital<br>Information");
  hospitalHeader.elt.id = "iconText";
    
  hospitalDiv = createDiv();
  hospitalDiv.addClass("iconDiv");
  hospitalDiv.child(hospitalIcon.elt);
  hospitalDiv.child(hospitalHeader.elt);


  jokeIcon = createInput();
  jokeIcon.elt.type = "image";
  jokeIcon.elt.src = "Pictures/laughing.gif";
  jokeIcon.elt.alt = "Joke";
  jokeIcon.elt.id = "horoscopeIcon";

  jokeHeader = createElement("h3");
  jokeHeader.html("Jokes");
  jokeHeader.elt.id = "iconText";
      
  jokeDiv = createDiv();
  jokeDiv.addClass("iconDiv");
  jokeDiv.child(jokeIcon.elt);
  jokeDiv.child(jokeHeader.elt);


  boxDiv = createDiv();
  boxDiv.style("width","300px");
  boxDiv.style("height","500px");
  boxDiv.hide();

  hideButton = createButton("<i class='fa fa-times' style='font-size:20px;'></i>");
  hideButton.elt.id = "cross";
  hideButton.hide();


  weatherSelector = createSelect();
  weatherSelector.hide();

  temperature = createElement("h3");
  temperature.elt.id = "weatherDescription";
  temperature.html("Loading...");
  temperature.hide();

  humidity = createElement("h3");
  humidity.elt.id = "weatherDescription";
  humidity.html("Please Wait");
  humidity.hide();

  weatherDescription = createElement("h3");
  weatherDescription.elt.id = "weatherDescription";
  weatherDescription.hide();


  horoscopeSelector = createSelect();
  horoscopeSelector.hide();

  for(i of horoscopeNames){
    horoscopeSelector.option(i);
  }

  horoscopeText = createElement("h3");
  horoscopeText.elt.id = "weatherDescription";
  horoscopeText.style("width","750px");
  horoscopeText.html("Loading...<br>Please Wait");
  horoscopeText.hide();


  citySelector = createSelect();
  citySelector.hide();

  hospitalSelector = createSelect();
  hospitalSelector.hide();
  
  search = createButton("Search <i class='fa fa-search' aria-hidden='true'></i>");
  search.elt.id = "buttonLink";
  search.style("width","4cm");
  search.hide();

  info = createElement("h3");
  info.elt.id = "weatherDescription";
  info.html("Loading...<br>Please Wait");
  info.hide();


  jokeText = createElement("h3");
  jokeText.elt.id = "weatherDescription";
  jokeText.style("width","7cm");
  jokeText.html("Loading...<br>Please Wait");
  jokeText.hide();

  newJoke = createButton("New Joke");
  newJoke.elt.id = "buttonLink";  newJoke.hide();

  boxDiv.child(weatherSelector.elt);
  boxDiv.child(temperature.elt);
  boxDiv.child(humidity.elt);
  boxDiv.child(weatherDescription.elt);
  boxDiv.child(horoscopeSelector.elt);
  boxDiv.child(horoscopeText.elt);
  boxDiv.child(citySelector.elt);
  boxDiv.child(hospitalSelector.elt);
  boxDiv.child(search.elt);
  boxDiv.child(info.elt);
  boxDiv.child(jokeText.elt);
  boxDiv.child(newJoke.elt);

  iconContainer = createDiv();
  iconContainer.child(weatherDiv.elt);
  iconContainer.child(horoscopeDiv.elt);
  iconContainer.child(hospitalDiv.elt);
  iconContainer.child(jokeDiv.elt);

  container = createDiv();
  container.elt.id = "container";
  container.child(yoga.elt);
  container.child(doctor.elt);
  container.child(cnslng.elt);
  container.child(helpline.elt);
  container.child(movie.elt);
  container.child(travel.elt);
  container.child(shopping.elt);
  container.child(game.elt);

  travelDiv = createDiv();
  travelDiv.addClass("innerContainer");
  hotelDiv = createDiv();
  hotelDiv.addClass("innerContainer");

  flightText = createElement("h3");
  flightText.elt.id = "weatherDescription";
  flightText.html("Flights&nbsp&nbsp<i class='fa fa-plane' style='font-size:20px;'></i>");
  flightText.hide();

  hotelText = createElement("h3");
  hotelText.elt.id = "weatherDescription";
  hotelText.html("Hotels&nbsp&nbsp<i class='fa fa-hotel' style='font-size:20px;'></i>");
  hotelText.hide();

  travelDiv.child(flightText.elt);
  hotelDiv.child(hotelText.elt);

  if(window.innerHeight >= window.innerWidth){
    yoga.addClass("portrait");
    doctor.addClass("portrait");
    cnslng.addClass("portrait");
    helpline.addClass("portrait");
    movie.addClass("portrait");
    travel.addClass("portrait");
    shopping.addClass("portrait");
    game.addClass("portrait");
    boxDiv.elt.id = "buttonBg_portrait";
    iconContainer.elt.id = "iconContainer";
    iconContainer.elt.width = displayWidth/2;
  }
  else{
    yoga.addClass("landscape");
    doctor.addClass("landscape");
    cnslng.addClass("landscape");
    helpline.addClass("landscape");
    movie.addClass("landscape");
    travel.addClass("landscape");
    shopping.addClass("landscape");
    game.addClass("landscape");
    boxDiv.elt.id = "buttonBg_landscape";
    iconContainer.elt.id = "container";
  }
  
  createButtons();

  table = document.getElementsByTagName("table")[0];
  table.style = "display:none";
  boxDiv.child(table);
}

function draw(){
  background("lightgray");

  citySelector.changed(()=>{
    hospitalSelector.show();
    hospitalSelector.elt.innerHTML = "";

    for(x in hospitals){
      if(hospitals[x][0] === citySelector.value()){
        hospitalSelector.option(hospitals[x][1]);
      }
    }
  })

  search.mousePressed(()=>{
    for(x in hospitals){
      if(hospitals[x][1] === hospitalSelector.value()){
        info.html("City: " + hospitals[x][0] + "<br>Name: " + hospitals[x][1] + "<br>Address: " + hospitals[x][2] + "<br>Email: " + hospitals[x][3]);
      }
    }
  })

  weatherSelector.changed(()=>{
    weather_query = weatherSelector.value();

    for(x in weatherData){
      if(weatherData[x].city === weather_query){
        temperature.html("Temperature: " + weatherData[x].temperature);
        humidity.html("Humidity: " + weatherData[x].humidity);
        weatherDescription.html("Description: " + weatherData[x].description);
      }
    }
  })

  hideButton.mousePressed(()=>{
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
    table.style = "left:" + displayWidth/4 + "px; top:450px; display:none";
  })

  weatherIcon.mousePressed(()=>{
    if(clicked===false){
      if(boxDiv.elt.id == "buttonBg_landscape"){
        boxDiv.style("height","300px");
      }
      if(boxDiv.elt.id == "buttonBg_portrait"){
        boxDiv.position(displayWidth/2 - 150, 200);
        boxDiv.style("height","300px");
      }
      
      boxDiv.show();
      hideButton.show();
      weatherSelector.show();
      temperature.show();
      humidity.show();
      weatherDescription.show();
      weatherSelector.elt.value = "defaultValue";
      
      if(isloaded == true){
        temperature.html("Please select a city.");
        humidity.html("");
        weatherDescription.html("");
      }      
      clicked = true;
    }
  })


  horoscopeIcon.mousePressed(()=>{
    if(clicked===false){
      if(window.innerHeight > window.innerWidth){
        boxDiv.style("width","400px");
        horoscopeText.style("width","380px");
      }
      if(window.innerHeight < window.innerWidth){
        boxDiv.style("width","800px");
      }
      boxDiv.style("height","auto");
      boxDiv.show();
      hideButton.show();
      horoscopeSelector.show();
      horoscopeSelector.elt.value = "defaultValue";
      horoscopeText.show();

      if(isloaded == true){
        horoscopeText.html("Please select your Sun Sign.");
      }
      clicked = true;
    }
  })

  horoscopeSelector.changed(()=>{
    for(x in horoscopes){
      if(horoscopes[x].name === horoscopeSelector.value()){
        horoscopeText.html("Horoscope: " + horoscopes[x].horoscope);
      }
    }
  })


  hospitalIcon.mousePressed(()=>{
    if(clicked===false){
      if(window.innerHeight > window.innerWidth){
        boxDiv.style("width","400px");
        hospitalSelector.style("width","380px");
        info.style("width","380px");
      }
      if(window.innerHeight < window.innerWidth){
        boxDiv.style("width","800px");
        hospitalSelector.style("width","510px");
        info.style("width","510px");
      }
      boxDiv.style("height","auto");
      boxDiv.show();
      hideButton.show();
      citySelector.show();
      info.show();
      search.show();
      hospitalSelector.hide();
      citySelector.elt.value = "defaultValue";
      hospitalSelector.elt.value = "defaultValue";
      
      if(isloaded == true){
        info.html("Please select a city and a hospital.<br>Select a city then press the search button to select a hospital.");
      }
      clicked = true;
    }
  })


  jokeIcon.mousePressed(()=>{
    if(clicked===false){
      boxDiv.style("height","auto");
      boxDiv.show();
      hideButton.show();
      jokeText.show();
      newJoke.show();
      clicked = true;
    }
  })

  newJoke.mousePressed(()=>{
    getJoke();
  })

  yoga.mousePressed(()=>{
    if(clicked===false){
      boxDiv.style("height","250px");
      boxDiv.show();
      hideButton.show();
      yogaSelector1.show();
      yogaSelector2.show();
      yogaSelector3.show();
      yogaSelector4.show();
      clicked = true;
    }
  })

  yogaSelector1.mousePressed(()=>{
    window.open("https://silverageyoga.org/online-classes");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector2.mousePressed(()=>{
    window.open("https://patanjaleeyoga.com/online-yoga-classes");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector3.mousePressed(()=>{
    window.open("https://www.artofliving.org/in-en/yoga/health-and-wellness/yoga-for-seniors");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector4.mousePressed(()=>{
    window.open("https://www.vishuddhiyogaindia.com/yoga-online-courses/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  

  doctor.mousePressed(()=>{
    if(clicked===false){
      boxDiv.style("height","220px");
      boxDiv.style("width","350px");
      hideButton.show();
      boxDiv.show();
      doctorSelector1.show();
      doctorSelector2.show();
      doctorSelector3.show();
      clicked = true;
    }
  })

  doctorSelector1.mousePressed(()=>{
    window.open("https://www.1mg.com/online-doctor-consultation");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  doctorSelector2.mousePressed(()=>{
    window.open("https://www.icliniq.com/en_IN/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  doctorSelector3.mousePressed(()=>{
    window.open("https://lockdownclinic.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })


  cnslng.mousePressed(()=>{
    if(clicked===false){
      boxDiv.style("height","150px");
      hideButton.show();
      boxDiv.show();
      cnslngSelector1.show();
      cnslngSelector2.show();
      clicked = true;
    }
  })

  cnslngSelector1.mousePressed(()=>{
    window.open("https://yourdost.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  cnslngSelector2.mousePressed(()=>{
    window.open("https://www.manastha.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })

  helpline.mousePressed(()=>{
    if(clicked===false){
      if(window.innerHeight > window.innerWidth){
        boxDiv.style("width","430px");
        table.style = "display: block;";
      }
      if(window.innerHeight < window.innerWidth){
        boxDiv.style("width","850px");
        table.style = "display: block; margin-left: 20px";
      }
      boxDiv.style("height","450px");
      hideButton.show();
      boxDiv.show();
      clicked = true;
    }
  })

  movie.mousePressed(()=>{
    if(clicked===false){
      boxDiv.style("height","200px");
      hideButton.show();
      boxDiv.show();
      movieSelector1.show();
      movieSelector2.show();
      movieSelector3.show();
      clicked = true;
    }
  })

  movieSelector1.mousePressed(()=>{
    window.open("https://in.bookmyshow.com/mumbai/movies");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  movieSelector2.mousePressed(()=>{
    window.open("https://paytm.com/movies/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  movieSelector3.mousePressed(()=>{
    window.open("https://www.ticketnew.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })

  travel.mousePressed(()=>{
    if(clicked===false){
      if(window.innerHeight > window.innerWidth){
        boxDiv.style("width","480px");
      }
      if(window.innerHeight < window.innerWidth){
        boxDiv.style("width","500px");
      }
      boxDiv.style("height","300px");
      hideButton.show();
      boxDiv.show();
      travelSelector1.show();
      travelSelector2.show();
      travelSelector3.show();
      travelSelector4.show();
      hotelSelector1.show();
      hotelSelector2.show();
      hotelSelector3.show();
      hotelSelector4.show();
      flightText.show();
      hotelText.show();
      clicked = true;
    }
  })

  travelSelector1.mousePressed(()=>{
    window.open("https://www.makemytrip.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  travelSelector2.mousePressed(()=>{
    window.open("https://www.goibibo.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  travelSelector3.mousePressed(()=>{
    window.open("https://www.yatra.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  travelSelector4.mousePressed(()=>{
    window.open("https://www.cleartrip.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  hotelSelector1.mousePressed(()=>{
    window.open("https://www.trivago.in");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  hotelSelector2.mousePressed(()=>{
    window.open("https://www.goibibo.com/hotels/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  hotelSelector3.mousePressed(()=>{
    window.open("https://www.yatra.com/hotels");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  hotelSelector4.mousePressed(()=>{
    window.open("https://www.oyorooms.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })

  shopping.mousePressed(()=>{
    if(clicked===false){
      boxDiv.style("height","320px");
      boxDiv.show();
      hideButton.show();
      shoppingSelector1.show();
      shoppingSelector2.show();
      shoppingSelector3.show();
      shoppingSelector4.show();
      shoppingSelector5.show();
      clicked = true;
    }
  })

  shoppingSelector1.mousePressed(()=>{
    window.open("https://www.amazon.in/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  shoppingSelector2.mousePressed(()=>{
    window.open("https://www.flipkart.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  shoppingSelector3.mousePressed(()=>{
    window.open("https://www.snapdeal.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  shoppingSelector4.mousePressed(()=>{
    window.open("https://www.naaptol.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  shoppingSelector5.mousePressed(()=>{
    window.open("https://www.myntra.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })


  game.mousePressed(()=>{
    if(clicked===false){
      boxDiv.style("height","370px");
      boxDiv.show();
      hideButton.show();
      gameSelector1.show();
      gameSelector2.show();
      gameSelector3.show();
      gameSelector4.show();
      gameSelector5.show();
      gameSelector6.show();
      clicked = true;
    }
  })

  gameSelector1.mousePressed(()=>{
    window.open("https://vader327.github.io/C33/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector2.mousePressed(()=>{
    window.open("https://vader327.github.io/Project-28/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector3.mousePressed(()=>{
    window.open("https://vader327.github.io/Project-40/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector4.mousePressed(()=>{
    window.open("https://vader327.github.io/Project-32/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector5.mousePressed(()=>{
    window.open("https://vader327.github.io/Project-37/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector6.mousePressed(()=>{
    window.open("https://vader327.github.io/Daddy-s-Day-Out/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
}

async function getData(){
  for(x in horoscopeNames){
    horoscope = (await (await fetch("https://ohmanda.com/api/horoscope/" + horoscopeNames[x].toString().toLowerCase())).json())["horoscope"].substring(1);
    horoscopes.push({name:horoscopeNames[x], horoscope:horoscope});
  }

  joke = (await (await fetch("https://icanhazdadjoke.com/", {headers:{Accept: "application/json"}})).json()).joke;
  jokeText.html(joke);

  response = await fetch("data.txt");
  responseJOSN = await response.json();
  hospital = responseJOSN["Table1"];

  for(var obj in hospital){
    cityArr.push(hospital[obj].city);
    hospitals.push([hospital[obj].city, hospital[obj].name, hospital[obj].address, hospital[obj].id]);
  }

  cityArr = cityArr.filter((value, index) => cityArr.indexOf(value) === index);
  cityArr.sort();
  
  for(x of cityArr){
    citySelector.option(x);
    if(x !== "Vijaywada" && x !== "Fridabad" && x !== "Raigad" && x !== "Sindhudurg"){
      weatherSelector.option(x);
      weather = (await (await fetch("https://api.openweathermap.org/data/2.5/weather?&appid=0acbed08482b338a220e6ba9c72d00e9&q=" + x)).json());
      weatherData.push({city:x,temperature:(Math.round(weather.main.temp - 273) + "°C"),humidity:(weather.main.humidity + "%"),description:(weather.weather[0].main)});
    }
  }
  temperature.html("Please select a city.");
  humidity.html("");
  horoscopeText.html("Please select your Sun Sign.");
  info.html("Please select a city and a hospital.<br>Select a city then press the search button to select a hospital.");
  isloaded = true;
}

async function getJoke(){
  joke = (await (await fetch("https://icanhazdadjoke.com/", {headers:{Accept: "application/json"}})).json()).joke;
  jokeText.html(joke);
}

function hideButtons(){
  yogaSelector1.hide();
  yogaSelector2.hide();
  yogaSelector3.hide();
  yogaSelector4.hide();

  doctorSelector1.hide();
  doctorSelector2.hide();
  doctorSelector3.hide();

  cnslngSelector1.hide();
  cnslngSelector2.hide();

  movieSelector1.hide();
  movieSelector2.hide();
  movieSelector3.hide();

  travelSelector1.hide();
  travelSelector2.hide();
  travelSelector3.hide();
  travelSelector4.hide();

  hotelSelector1.hide();
  hotelSelector2.hide();
  hotelSelector3.hide();
  hotelSelector4.hide();
  

  shoppingSelector1.hide();
  shoppingSelector2.hide();
  shoppingSelector3.hide();
  shoppingSelector4.hide();
  shoppingSelector5.hide();


  gameSelector1.hide();
  gameSelector2.hide();
  gameSelector3.hide();
  gameSelector4.hide();
  gameSelector5.hide();
  gameSelector6.hide();

  flightText.hide();
  hotelText.hide();

  weatherSelector.hide();
  temperature.hide();
  humidity.hide();
  weatherDescription.hide();

  horoscopeSelector.hide();
  horoscopeText.hide();

  citySelector.hide();
  hospitalSelector.hide();
  info.hide();
  search.hide();

  jokeText.hide();
  newJoke.hide();

  clicked = false;
  boxDiv.style("width","300px");
}

function createButtons(){
  yogaSelector1 = createButton("Silver Age Yoga");
  yogaSelector1.elt.id = "buttonLink";
  yogaSelector1.hide();

  yogaSelector2 = createButton("Patanjalee Yoga");
  yogaSelector2.elt.id = "buttonLink";
  yogaSelector2.hide();

  yogaSelector3 = createButton("Art of Living Yoga");
  yogaSelector3.elt.id = "buttonLink";
  yogaSelector3.hide();

  yogaSelector4 = createButton("Vishuddhi Yoga");
  yogaSelector4.elt.id = "buttonLink";
  yogaSelector4.hide();


  doctorSelector1 = createButton("Online Doctor Consultation");
  doctorSelector1.elt.id = "buttonLink";
  doctorSelector1.style("width","270px");
  doctorSelector1.hide();

  doctorSelector2 = createButton("iCliniq Doctor Consultation");
  doctorSelector2.elt.id = "buttonLink";
  doctorSelector2.style("width","270px");
  doctorSelector2.hide();

  doctorSelector3 = createButton("Lock Down Clinic Doctor Consultation");
  doctorSelector3.elt.id = "buttonLink";
  doctorSelector3.style("width","270px");
  doctorSelector3.style("height","45px");
  doctorSelector3.hide();


  cnslngSelector1 = createButton("Your Dost Counselling");
  cnslngSelector1.elt.id = "buttonLink";
  cnslngSelector1.style("width","250px");
  cnslngSelector1.hide();

  cnslngSelector2 = createButton("Manastha Counselling");
  cnslngSelector2.elt.id = "buttonLink";
  cnslngSelector2.style("width","250px");
  cnslngSelector2.hide();


  movieSelector1 = createButton("Bookmyshow");
  movieSelector1.elt.id = "buttonLink";
  movieSelector1.hide();

  movieSelector2 = createButton("PayTM Movies");
  movieSelector2.elt.id = "buttonLink";
  movieSelector2.hide();

  movieSelector3 = createButton("Ticketnew");
  movieSelector3.elt.id = "buttonLink";
  movieSelector3.hide();


  travelSelector1 = createButton("MakeMyTrip");
  travelSelector1.elt.id = "buttonLink";
  travelSelector1.hide();

  travelSelector2 = createButton("Goibibo");
  travelSelector2.elt.id = "buttonLink";
  travelSelector2.hide();

  travelSelector3 = createButton("Yatra");
  travelSelector3.elt.id = "buttonLink";
  travelSelector3.hide();

  travelSelector4 = createButton("ClearTrip");
  travelSelector4.elt.id = "buttonLink";
  travelSelector4.hide();

  hotelSelector1 = createButton("Trivago");
  hotelSelector1.elt.id = "buttonLink";
  hotelSelector1.hide();

  hotelSelector2 = createButton("Goibibo Hotels");
  hotelSelector2.elt.id = "buttonLink";
  hotelSelector2.hide();

  hotelSelector3 = createButton("Yatra Hotels");
  hotelSelector3.elt.id = "buttonLink";
  hotelSelector3.hide();

  hotelSelector4 = createButton("OYO Rooms");
  hotelSelector4.elt.id = "buttonLink";
  hotelSelector4.hide();


  shoppingSelector1 = createButton("Amazon Shopping");
  shoppingSelector1.elt.id = "buttonLink";
  shoppingSelector1.style("width","270px");
  shoppingSelector1.hide();

  shoppingSelector2 = createButton("Flipkart Shopping");
  shoppingSelector2.elt.id = "buttonLink";
  shoppingSelector2.style("width","270px");
  shoppingSelector2.hide();

  shoppingSelector3 = createButton("Snapdeal Shopping");
  shoppingSelector3.elt.id = "buttonLink";
  shoppingSelector3.style("width","270px");
  shoppingSelector3.hide();

  shoppingSelector4 = createButton("Naaptol Shopping");
  shoppingSelector4.elt.id = "buttonLink";
  shoppingSelector4.style("width","270px");
  shoppingSelector4.hide();

  shoppingSelector5 = createButton("Myntra Shopping");
  shoppingSelector5.elt.id = "buttonLink";
  shoppingSelector5.style("width","270px");
  shoppingSelector5.hide();


  gameSelector1 = createButton("Angry Birds");
  gameSelector1.elt.id = "buttonLink";
  gameSelector1.style("width","270px");
  gameSelector1.hide();

  gameSelector2 = createButton("Crumpled Balls");
  gameSelector2.elt.id = "buttonLink";
  gameSelector2.style("width","270px");
  gameSelector2.hide();

  gameSelector3 = createButton("Horizontal Hurdles");
  gameSelector3.elt.id = "buttonLink";
  gameSelector3.style("width","270px");
  gameSelector3.hide();

  gameSelector4 = createButton("Tower Seige");
  gameSelector4.elt.id = "buttonLink";
  gameSelector4.style("width","270px");
  gameSelector4.hide();

  gameSelector5 = createButton("Paint It");
  gameSelector5.elt.id = "buttonLink";
  gameSelector5.style("width","270px");
  gameSelector5.hide();

  gameSelector6 = createButton("Escape the Virus");
  gameSelector6.elt.id = "buttonLink";
  gameSelector6.style("width","270px");
  gameSelector6.hide();

  travelDiv.child(travelSelector1.elt);
  travelDiv.child(travelSelector2.elt);
  travelDiv.child(travelSelector3.elt);
  travelDiv.child(travelSelector4.elt);

  hotelDiv.child(hotelSelector1.elt);
  hotelDiv.child(hotelSelector2.elt);
  hotelDiv.child(hotelSelector3.elt);
  hotelDiv.child(hotelSelector4.elt);


  boxDiv.child(yogaSelector1.elt);
  boxDiv.child(yogaSelector2.elt);
  boxDiv.child(yogaSelector3.elt);
  boxDiv.child(yogaSelector4.elt);

  boxDiv.child(doctorSelector1.elt);
  boxDiv.child(doctorSelector2.elt);
  boxDiv.child(doctorSelector3.elt);

  boxDiv.child(cnslngSelector1.elt);
  boxDiv.child(cnslngSelector2.elt);

  boxDiv.child(movieSelector1.elt);
  boxDiv.child(movieSelector2.elt);
  boxDiv.child(movieSelector3.elt);

  boxDiv.child(travelDiv.elt);
  boxDiv.child(hotelDiv.elt);

  boxDiv.child(shoppingSelector1.elt);
  boxDiv.child(shoppingSelector2.elt);
  boxDiv.child(shoppingSelector3.elt);
  boxDiv.child(shoppingSelector4.elt);
  boxDiv.child(shoppingSelector5.elt);

  boxDiv.child(gameSelector1.elt);
  boxDiv.child(gameSelector2.elt);
  boxDiv.child(gameSelector3.elt);
  boxDiv.child(gameSelector4.elt);
  boxDiv.child(gameSelector5.elt);
  boxDiv.child(gameSelector6.elt);

  boxDiv.child(hideButton.elt);
}
