// API KEY : d9831ec7ba29dfb58680b33f06b00b7b


var weather = {};


$.ajax({
    type: "GET",
    dataType: "json",
    data: {name: name},
    url: "http://api.openweathermap.org/data/2.5/weather?q=Tinh Binh Phuoc&appid=d9831ec7ba29dfb58680b33f06b00b7b&units=metric",
    success: function(data)
    {
        console.log(data);
        weather.date = moment.unix(data.dt).format("DD/MM/YYYY");
        weather.time = moment.unix(data.dt).format("HH:MM");
        weather.dayOfWeek = moment.unix(data.dt).format("dddd");
        weather.curTime = moment.unix(data.dt).format("LT");
        weather.city = data.name;
        weather.weather_id = data.weather[0].id; // id weather de lay trang thai;
        weather.weather_enum = data.weather[0].description;
        // checkWeather(weather.weather_id); //hàm này sẽ được giải thích ở dưới, nó xử  lý hiện tượng thời tiết
        weather.temp = data.main.temp;
        weather.maxTemp = data.main.temp_max;
        weather.minTemp = data.main.temp_min;
 
        $(".weather .city").html(weather.city);
        $(".detail .temperature .content").html(weather.temp);
        $(".location .enum h1").html(capitalize(weather.weather_enum));
        $(".location .place").html(weather.city);
        $(".date .dayOfWeek").html(weather.dayOfWeek);
        $(".date .dateTime").html(weather.date);
        $(".date .time").html(weather.curTime);

        console.log(weather.curTime);




        $(".weather .feel").html(weather.feels_like);
        $(".weather .max a").html(weather.maxTemp);
        $(".weather .min a").html(weather.minTemp);


    }
});

