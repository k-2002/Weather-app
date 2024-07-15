
const apikey ="18b01301cf81360a2067cdebeb6a7b54";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector('#header input');
const btn = document.querySelector('#header button');

async function checkweather(city) {
    const respons = await fetch(apiurl + city+`&appid=${apikey}`);

    if(respons.status == 404)
    {
        document.querySelector(".error").style.display='block';
        document.querySelector(".weather").style.display='none';
    }
    else{
        
    
    var data = await respons.json();

     document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°c";
     document.querySelector('.city').innerHTML = data.name;
     document.querySelector('.humedity').innerHTML = data.main.humidity +"%";
     document.querySelector('.wind').innerHTML = data.wind.speed +" km/h";

     const image = document.querySelector('.weather-icon');
     if(data.weather[0].main=='Clouds')
     {
         image.src = 'image/images/clouds.png'; 
     }
     else if(data.weather[0].main=='Clear')
     {
        image.src = 'image/images/clear.png'; 
     }
     else if(data.weather[0].main=='Rain')
     {
        image.src = 'image/images/rain.png'; 
     }
     else if(data.weather[0].main=='Drizzle')
     {
        image.src = 'image/images/drizzle.png'; 
     }
     else if(data.weather[0].main=='Mist')
     {
        image.src = 'image/images/mist.png'; 
     }

     document.querySelector('.weather').style.display ="block";
     document.querySelector(".error").style.display='none';
    }
}
btn.addEventListener('click',()=>{
    checkweather(search.value);
    

});


