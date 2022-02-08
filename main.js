const reviews = [ 
      
    { 
       id: 1, 
       name: "Susan Smith", 
       job: "web developer",
       img: "https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?b=1&k=20&m=1319763830&s=170667a&w=0&h=wE44n9yP1nrefeqv5DCl5mE3ouU01FNNHeZPR0yDCWA=",
       text: "I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed",
     }, 
   { 
        id: 2, 
        name: "Linda Jasson", 
        job: "web designer",
        img: "https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg",
        text: "I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed",
},
{
        id : 3, 
        name : "Betty Clark", 
        job : "The Boss",
        img : "https://image.freepik.com/free-photo/satisfied-attractive-girl-holding-something-hand-showing-thumbs-up-approval_1258-19083.jpg",
        text : "I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed",
},
{ 
        id : 4, 
        name : "Kayla Jenkins", 
        job : "Singer",
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
    job.textContent = item.name;
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