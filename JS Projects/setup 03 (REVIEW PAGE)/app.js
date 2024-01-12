// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Timmeowthy',
    job: 'Dry Food Supplier',
    img: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
    text: "I enjoy hard candy, dry environments, and I hate other cats!",
  },
  {
    id: 2,
    name: 'Gunsen',
    job: 'Professional Sprinter',
    img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    text: 'I will not stop until i become the fastest! I like long walks on the beach, and going outside!',
  },
  {
    id: 3,
    name: 'Meowlexa',
    job: 'Sleep Warden',
    img: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    text: 'I make sure all of the other cats are going to bed on time. I like to stay in my own lane, and work at my own pace.',
  },
  {
    id: 4,
    name: 'Daryl',
    job: 'Catfood Connoisseur',
    img: 'https://image.petmd.com/files/styles/863x625/public/2023-09/how-smart-are-cats.jpg',
    text: 'Give me a lick of your food, and ill rate it! I promise to not eat it all. I like to take baths, and play with toys. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show starting person
startBtn.addEventListener('click', function () {
  currentItem = 0; 
  showPerson(currentItem);
});
// show ending person
endBtn.addEventListener('click', function () {
  currentItem = 3; 
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
