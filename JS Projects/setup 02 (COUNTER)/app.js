let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// 10 digit aray from -5 to 5 (-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5)
const randomNumbers = Array.from({ length: 11 }, (_, index) => index - 5);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // decrease by 10
    if (styles.contains("decrease")) {
      count-=10;
      // increase by 10
    } else if (styles.contains("increase")) {
      count+=10;
      // adds a number from the array
    } else if (styles.contains("random")) {
      count += random(randomNumbers);
    } else {
      count = 0;
    }
// array function to randomize the number taken
    function random(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex]; 
    }
    
    if (count > 0) {
      value.style.color = "green";
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
