const input=document.querySelector('input')
const btn=document.getElementById('btn')
const icon=document.querySelector('.icon')
const weather=document.querySelector('.weather')
const temperature=document.querySelector('.temperature')
const description=document.querySelector('.description')
const weatherBox=document.querySelector('.weather-box')



btn.addEventListener("click",()=>{
    let city=input.value
    getWeather(city)
})

function getWeather(city){
    // console.log(city)
    if (!city) {
        alert("City name is required.");
        return;
    }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response=>
            response.json())
            .then(data=>{
           if(data.cod===200){
            const iconCode=data.weather[0].icon
                icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`
            
                const weatherCity=data.name
                const weatherCountry=data.sys.country
                weather.innerHTML=`${weatherCity}, ${weatherCountry}`
            
                let weatherTemp=data.main.temp
                weatherTemp=weatherTemp-273
                const temp=weatherTemp.toFixed(2)
                temperature.innerHTML=`${temp} °C`
            
            
                const weatherDescription=data.weather[0].description
                description.innerHTML=`${weatherDescription}`
           }else{
            weatherBox.innerHTML=`<h3>${data.message}</h3>`
           }
                
            
            
        })
    
  

    
}


const apiKey='e36a45dde7d2b4726fb25537d29f06b4'


const method='https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}'