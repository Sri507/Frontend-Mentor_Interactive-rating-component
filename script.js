const ratings = document.querySelectorAll(".rating");
let curr = 0;

const btnr = document.querySelector(".buttonr");
const rating_container = document.querySelector(".rating-container");
const thank_container = document.querySelector(".thank-container");
const rating_word = document.querySelector(".rating-words");

btnr.addEventListener("click", (e) => {
  if (curr === 0) {
    e.preventDefault();
  } else {
    rating_container.style.display = "none";
    thank_container.style.display = "block";
    rating_word.innerText = `You selected ${curr} out of 5`;
  }
});

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function (e) {
    const target = e.target;
    curr = parseInt(target.firstChild.data);
    ratings[i].style.transform = `ease 0.3s`;
    ratings[i].classList.add("active");
    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i].classList.contains("active") && i + 1 != curr) {
        ratings[i].classList.remove("active");
        ratings[i].style.background = `hsl(213, 19%, 18%)`;
        target.style.color = `hsl(217, 12%, 63%)`;
      }
      if (i + 1 != curr) {
        ratings[i].style.color = `hsl(217, 12%, 63%)`;
      }
    }
    target.style.background = `hsl(0, 0%, 100%)`;
    target.style.color = `hsl(216, 12%, 8%)`;
  });
  ratings[i].addEventListener("mouseover", () => {
    ratings[i].style.backgroundColor = `hsl(25, 97%, 53%)`;
    ratings[i].style.color = `hsl(216, 12%, 8%)`;
  });

  ratings[i].addEventListener("mouseout", () => {
    if (ratings[i].classList.contains("active")) {
      ratings[i].style.background = `hsl(0, 0%, 100%)`;
      ratings[i].style.color = `hsl(216, 12%, 8%)`;
    } else {
      ratings[i].style.background = `hsl(213, 19%, 18%)`;
      ratings[i].style.color = `hsl(217, 12%, 63%)`;
    }
  });
}
