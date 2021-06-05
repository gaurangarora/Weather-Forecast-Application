let main = {
    apiKey: "9c05b6094576daceb158e70f03afc9c1", //You will have to put your own API key from https://openweathermap.org/
    getWeather: function(city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
            .then((data) => this.showWeather(data));
    },
    showWeather: function(data){
        const { name } = data; //for extracting name and similary for icon, description, etc
        const { icon, description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector('.location').innerText = "Currently in " + name;
        document.querySelector('.weatherIcon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.details').innerText = description;
        document.querySelector('.temperature').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind: " + speed + " km/h";

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search : function(){ //Search the city name from search bar
        this.getWeather(document.querySelector('.searchLoc').value);
        
    }
};

document.querySelector('.search button').addEventListener('click', function(){ //search when user searches via button
    main.search();
});

document.querySelector('.search button').addEventListener('keyup', function(event){ //search when user searches via pressing the enter key
    if(event.key == "Enter"){
        main.search();
    }
});