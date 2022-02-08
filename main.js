const reviews = [ 
      
    { 
       id: 1, 
       name: "John Smith", 
       job: "WEB DEVELOPER",
       img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       text: "I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed",
     }, 
   { 
        id: 2, 
        name: "Linda Jasson", 
        job: "WEB DESIGNER",
        img: "https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg",
        text: "I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed",
},
{
        id : 3, 
        name : "Stiven Clark", 
        job : "THE BOSS",
        img : "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
        text : "I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed",
},
{ 
        id : 4, 
        name : "Kayla Jenkins", 
        job : "SINGER",
        img : "https://media.istockphoto.com/photos/confident-woman-picture-id1163683003?k=20&m=1163683003&s=612x612&w=0&h=21P_PIqbioQQs1HKlc3uJ9-jwJLHRvu9FUJ6hY1K-1I=",
        text : "I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed",
}];

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
    showPerson();
});

//show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
//show prev person

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show random person
randomBtn.addEventListener('click', function(){
currentItem = Math.floor(Math.random() * reviews.length);
showPerson();
})