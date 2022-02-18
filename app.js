const algo = document.querySelectorAll(".algo");
const userDefined = document.querySelector(".user-defined");
const userInput = document.querySelector("input");
const sortUserDefined = document.querySelector(".sort-user-defined");
const speed = document.querySelector("#speed");
const toggleArrow = document.querySelector(".show");
const show = document.querySelector(".show-service");
const userService = document.querySelector(".user-defined-input");
const menu = document.querySelector(".menu-icon");
const algos = document.querySelector(".algos");

// Function to get the width of the window. Used in the visualize.js in swap function for the responsive functionality purpose.

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

//Navigation bar 

menu.addEventListener("click", function() {
    algos.classList.toggle("active");
})


let time = 1;

show.addEventListener("click", function() {
    userService.classList.toggle("active");
    toggleArrow.classList.toggle("active");
})
const changeSpeed = (value) => {
    if(Number(value) <= 10) time = 1;
    else if(Number(value) <= 20) time = 2;
    else if(Number(value) <= 30) time = 3;
    else if(Number(value) <= 40) time = 4;
    else if(Number(value) <= 50) time = 5;
    else if(Number(value) <= 60) time = 6;
    else if(Number(value) <= 80) time = 7;
    else if(Number(value) <= 90) time = 8;
    else time = 9;
    return time;
}

const makeBars = (list, className="") => {
    
    const bars = document.querySelector(".display-area");
    bars.innerHTML = "";
    let i = 0;
    for (let element of list) {
      const bar = document.createElement("div");
      const number_disp = document.createElement("p");
      number_disp.classList.add("number");
      if ( element === 6) {
        number_disp.style.paddingBottom = "25px";
      }
      if (element === 5) {
        // number_disp.style.marginBottom = "15px";
        number_disp.style.paddingBottom = "18px";
      }
      bar.className = "bar";
      if(className != "")
        bar.classList.add(className);
      bar.setAttribute("data-position", i);
      i++;
      bar.setAttribute("value", String(element));
      bar.style.height = `${5.1* element}px`;
      number_disp.innerHTML = element;
      bar.appendChild(number_disp);
      bars.appendChild(bar);
    }
}

// User Defined input code 

userDefined.addEventListener("click", function () {
  let input = userInput.value.split(",");
  if(input.length > 10) {
    alert("Maximum number of input is 10, sorry!");
    return;
  }
  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
    if(input[i] > 60 || input[i] <= 10) {
      alert("Maximum and minimum number is 60 and 10 respectively, Sorry!");
      return;
    }
  }
  const colorCodes = document.querySelector(".Grid-container");
  colorCodes.innerHTML = "";
  const colorCodeTitle = document.querySelector(".color-code-title");
  colorCodeTitle.style.display = "none";
  makeBars(input);
});

let algoSelected;

const chooseAlgo = (choice) => {
    if(algoSelected != null) {
      algo[Number(algoSelected)].classList.remove("selected");
    }
    algoSelected = choice;

    algo[Number(algoSelected)].classList.add("selected");
}

const isSorted = (list) => {
    const arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push(Number(list[i].getAttribute("value")));
    }

    const compArr = [...arr];
    compArr.sort(function (a, b) {
        return a - b;
    })

    if(JSON.stringify(arr) === JSON.stringify(compArr)) {
      return true;
    }
   return false;
}

const sort = () => {
    const colorCodeTitle = document.querySelector(".color-code-title");
    colorCodeTitle.style.display = "block";

    if(algos.classList.contains("active")) {
      algos.classList.remove("active");
    }
    if(algoSelected == null){
      alert("No alorithm selected!");
      return;
    }

    const list = document.querySelectorAll(".bar");
  
    if(isSorted(list)) {
      console.log("In the if!");
      alert("Already sorted!");
      return;
    }
    const algorithm = new sortingAlgorithms(list, time);

    if(algoSelected === 0) algorithm.bubbleSort();
    if(algoSelected === 1) algorithm.selectionSort();
    if(algoSelected === 2) algorithm.insertionSort();
    if(algoSelected === 3) algorithm.mergeSort();
    if(algoSelected === 4) algorithm.quickSort();
    if(algoSelected === 5) algorithm.coutingSort();
}
const randumNumbers = () => {
  let list = new Array();
  let max = 60,
  min = 10;

  for (let i = 0; i < 10; i++) {
    let randumNumber = Math.floor(Math.random() * (max - min) + min);
    list.push(randumNumber);
  }

  return list;
};

const createBars = () => {
  let list = randumNumbers();
  makeBars(list); 
};

window.onload = createBars;

