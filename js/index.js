const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey="87b6c85e0bde753e4c226931c33d19e8";
const searchbox=document.querySelector(`.search input`);
const searchbtn=document.querySelector(`.search button`);

async function checkWeather(city)
{
    const res= await fetch(apiUrl+city+"&appid="+apiKey);
    const d=await res.json();
    console.log(d);
    document.querySelector(`.temp`).innerHTML=d.main.temp;
    document.querySelector(`.city`).innerHTML=d.name;
    document.querySelector(`.humidity`).innerHTML=d.main.humidity;
    document.querySelector(`.wind`).innerHTML=d.wind.speed;
}
function fun()
{
    var city=document.querySelector(`.search input`).value;
    checkWeather(city);
}