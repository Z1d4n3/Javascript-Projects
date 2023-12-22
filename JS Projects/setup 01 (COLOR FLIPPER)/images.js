        // random cat photos 
        const images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
        const btn = document.getElementById("btn");
        const image = document.querySelector(".image");

        btn.addEventListener("click", function () {
            const randomNumber = getRandomNumber();
            const randomImageUrl = images[randomNumber];

            document.body.style.backgroundImage = `url('${randomImageUrl}')`;
            image.textContent = `Current Image: ${randomImageUrl}`;
        });

        function getRandomNumber() {
            return Math.floor(Math.random() * images.length);
        }