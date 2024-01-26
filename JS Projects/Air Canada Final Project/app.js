
//Button 5 and 6 will change employees forwards, or backwards

const reviews = [
    {
      id: 1,
      name: 'Daniel',
      job: 'Security Guard',
      img: 'Daniel.png',
      text: 'As we prioritize the safety of our passengers, Daniel assists with keeping the environment under control, and takes care of any threats or risks to Air Canada. He loves working with his colleagues to get the job done. ',
    },
    {
      id: 2,
      name: 'Scott',
      job: 'Head Pilot',
      img: 'Scott.png',
      text: 'Scott is the the head pilot at Air Canada. Working together with his team to provide a smooth, safe, and enjoyable experience is his top priority. He loves what he does in the sky.',
    },
    {
      id: 3,
      name: 'Samantha',
      job: 'Receptionist',
      img: 'Samantha.png',
      text: 'Samantha is the receptionist, and oversees customer support. She believes that the key to an enjoyable time at Air Canada is quality assistance, and assurance. Talking to people is what Samantha is passionate for.',
    },
    {
      id: 4,
      name: 'Dom',
      job: 'Avionics Technician',
      img: 'Dom.png',
      text: 'Dom loves the mechanical side of Air Canada. He helps make any repairs to the planes, and other equipment. He plays a vital role in assuring that the onboarding process goes well.',
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


  //Like, Dislike, and Reset counter button
  let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const randt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    let random = 0;
  for (let i = 0; i < 1; i++) {
    random += randt[getRandomNumber()];
  }

    if (styles.contains("adddislike")) {
      count--;
    } else if (styles.contains("addlike")) {
      count++;}
      else if  (styles.contains("resetlikes")){
        count = 0;
      }
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "white";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

function getRandomNumber() {
    return Math.floor(Math.random() * randt.length);
  }
 
//Show List media query 
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
});

  //Background color changing
//Array Use
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Nom = document.getElementById("colorswap");
const color = document.querySelector(".color");
//Loop Use
Nom.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
 document.body.style.backgroundColor = hexColor;
});
//Random Function
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


//Airplane Button to close nav bar

function myFunction() {
  var x = document.getElementById("navigationbar");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

// Extra Button
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 2250) {
      clearInterval(id);
      elem.style.display = "none";
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
      elem.style.display = "block";
    }
  }
}