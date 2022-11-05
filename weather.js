window.onload=()=>{
    const search=document.querySelector(".searchbox");
    const highlow=document.querySelector(".high-low");

    search.addEventListener('keypress', (e) =>{
        if(e.key==='Enter'){
            getweatherdata(search.value)
        }
    })

    //yahoo weather api taken from rapid api website
}
function getweatherdata(cityin){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc30d0dffdmshc1fc6295c87cb1ep166148jsn65f36c869d2c',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

//var inputcity='';
fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${cityin}&format=json&u=c`, options)
	.then(response => response.json())
	.then(response => showData(response))
	.catch(err => console.error(err));
}

function showData(data){
    const temp=document.querySelector(".temp");
    temp.innerHTML=data.current_observation.condition.temperature+"°C";
    const weather=document.querySelector(".weather");
    weather.innerHTML=data.current_observation.condition.text;
    const city=document.querySelector(".city");
    city.innerHTML=data.location.city+", "+data.location.country;
    const date=document.querySelector(".date");
    const d = new Date();
    let text = d.toString().split(' ');
    var dtext = text[2] + ' ' + text[1] + ' ' + text[3];

    //get current time
    var currenttime=d.getHours()+':'+d.getMinutes();
    date.innerHTML=dtext+" "+currenttime;

}



