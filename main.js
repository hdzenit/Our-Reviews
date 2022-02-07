const reviews = [ 
      
    { 
       id: 01, 
       name: "Don't Look Up", 
       year: 2021,
       duration:"2h18",
       backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd6RGXWbIoOHL3daqY8inmYcduPOmeukBFfOpzMJA0yh0ogdbGvekRFLgP1eyZBDFO2Igi5gLPKlusDO9AnqbE_UCIcA.jpg?r=6a0%22)",
       description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
       actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
}, 
   
    { 
     id: 02, 
     name: "Back to the Outback", 
     year: 2021,
     duration:"2h18",
     backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcpFGB8j2mmUIdLNIJaZ-GMNL58-eQFBihnSRcOvHNGXz0sS7JvBAPvhxo1dLmFPshSDy1eKBdOqNHbSYSLqSOOAF5XW.jpg?r=de8",
     description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
     actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
},
    { 
     id: 03, 
     name: "Red Notice", 
     year: 2020,
     duration: "2h18",
     backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZsT2bdvYhDgBRNH-QmuiQwJ9p7hjcduBLNFrVBepJYsVBmJT0Dyi7no8vlWESvKalMsakP12WzonaigvxKsXHjvKtXW.jpg?r=590%22)",
     description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
     actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
{ 
    id: 04, 
    name: "How the Grinch Stole Christmas", 
    year: 2021,
    duration:"2h18",        
    backgroundimage:"https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUxuDzOVcY6FjzsROdO9oD595VQo_S6by2cO2LCbiCBm_g76GdaFn4OeUAffrECj1WACLfVNksUOT0mYe5tt3BtIfwTu.jpg?r=768",
    description:"Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors:"Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
   trailer:"https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
}]
//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load inital

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

//show person based on item
function showPerson(person){
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.name;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    showPerson(currentItem);
})