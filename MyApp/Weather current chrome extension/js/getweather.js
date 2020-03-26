// API KEY : d9831ec7ba29dfb58680b33f06b00b7b

const idMap = new Map([
    [200, "thunter"],
    [201, "thunter"],
    [202, "thunter"],
    [210, "thunter"],
    [211, "thunter"],
    [212, "thunter"],
    [221, "thunter"],
    [230, "thunter"],
    [231, "thunter"],
    [232, "thunter"],

    [300, "small_rain"],
    [301, "small_rain"],
    [302, "small_rain"],
    [310, "small_rain"],
    [311, "small_rain"],
    [312, "small_rain"],
    [313, "small_rain"],
    [314, "small_rain"],
    [321, "small_rain"],
    
    [500, "rain"],
    [501, "rain"],
    [502, "rain"],
    [503, "rain"],
    [504, "rain"],
    [511, "freezing"],
    [520, "small_rain"],
    [521, "small_rain"],
    [522, "small_rain"],
    [531, "small_rain"],


    [500, "rain"],
    [501, "rain"],
    [502, "rain"],
    [503, "rain"],
    [504, "rain"],
    [511, "freezing"],
    [520, "small_rain"],
    [521, "small_rain"],
    [522, "small_rain"],
    [531, "small_rain"],


    [600, "freezing"],
    [601, "freezing"],
    [602, "freezing"],
    [611, "freezing"],
    [612, "freezing"],
    [613, "freezing"],
    [615, "freezing"],
    [616, "freezing"],
    [620, "freezing"],
    [621, "freezing"],
    [622  ,"freezing"],



    [701, "mist"],
    [711, "mist"],
    [721, "mist"],
    [731, "mist"],
    [741, "mist"],
    [751, "mist"],
    [761, "mist"],
    [762, "mist"],
    [771, "mist"],
    [781, "mist"],

    [800, "mist"],
    [801, "mist"],
    [802, "mist"],
    [803, "mist"],
    [804, "mist"],
    






    ['default', ["sunny", '']]
])
var weather = {};

//get day
var today = new Date();
var hours = today.getHours();
var time = hours + ":" + today.getMinutes();

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
        ActiveIcon(data.weather[0].id);
        // checkWeather(weather.weather_id); //hàm này sẽ được giải thích ở dưới, nó xử  lý hiện tượng thời tiết
        weather.temp = data.main.temp;
        weather.maxTemp = data.main.temp_max;
        weather.minTemp = data.main.temp_min;
        weather.windSpeed = data.wind.speed;
        weather.feels_like = data.main.feels_like;
        $(".weather .city").html(weather.city);
        $(".detail .temperature .content").html(weather.temp+"°C");
        $(".detail .wind .content").html(weather.windSpeed);
        $(".detail .feellike .content").html(weather.feels_like+"°C");

        $(".location .enum h1").html(capitalize(weather.weather_enum));
        $(".location .place").html(weather.city);
        $(".date .dayOfWeek").html(weather.dayOfWeek);
        $(".date .dateTime").html(weather.date);
        $(".date .time").html(time);




        $(".weather .feel").html(weather.feels_like);
        $(".weather .max a").html(weather.maxTemp);
        $(".weather .min a").html(weather.minTemp);


    }
});

function icon(icon_name) {
    $(".weather .icon").html(icon_name);
}

function ActiveIcon(id){
    let action = idMap.get(id);
    $(".wico").attr("src","../imgsrc/"+action+".svg");
}
 

//change color and icon 


var bgColor = "rgb(255, 255, 255)";
var imgsrc = "../imgsrc/sun12.svg"
if(hours>5 && hours<=10){
    bgColor = "#ffbc05"; 
    imgsrc = "../imgsrc/sun.svg";    
}
else if(hours<=12){
    bgColor = "rgb(255, 188, 5)";    
    imgsrc = "../imgsrc/sun12.svg"
}
else if(hours <=18){
    bgColor = "rgb(255, 165, 0)";
    imgsrc = "../imgsrc/afternoon.svg"
}
else{
    bgColor = "rgb(230, 221, 228)";
    imgsrc = "../imgsrc/night.svg"

}

$(".weather .bgtop .stt").css("background-color", bgColor);
$(".weather .bgtop .stt").css("background-image","url(" + imgsrc +")");






