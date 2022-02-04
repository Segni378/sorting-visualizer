const algo = document.querySelectorAll(".algo");
const userDefined = document.querySelector(".user-defined");
const userInput = document.querySelector("input");
const sortUserDefined = document.querySelector(".sort-user-defined");
const speed = document.querySelector("#speed");
const toggleArrow = document.querySelector(".show");
const show = document.querySelector(".show-service");
const userService = document.querySelector(".user-defined-input");
let time = 1;

show.addEventListener("click", function() {
    userService.classList.toggle("active");
    toggleArrow.classList.toggle("active");
})
const changeSpeed = (value) => {
    if(Number(value) <= 25) time = 1;
    else if(Number(value) <= 50) time = 2;
    else if(Number(value) <= 75) time = 3;
    else time = 4;
}


const makeBars = (list, className="") => {
    const bars = document.querySelector(".display-area");
    
    bars.innerHTML = "";
    let i = 0;
    for (let element of list) {
      const bar = document.createElement("div");
      const number_disp = document.createElement("p");
      number_disp.classList.add("number");
      if ( element === 7) {
        number_disp.classList.add("push-up");
      }
      if (element === 6) {
        number_disp.style.marginBottom = "15px";
      }
      bar.className = "bar";
      if(className != "")
      bar.classList.add(className);
      bar.setAttribute("data-position", i);
      i++;
      bar.setAttribute("value", String(element));
      bar.style.height = `${4 * element}px`;
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
    if(input[i] > 70) {
      alert("Maximum number is 70, Sorry!");
      return;
    }
  }
  
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
    compArr.sort();
    if(JSON.stringify(arr) === JSON.stringify(compArr)) {
      return true;
    }
    return false;
}

const sort = () => {
    const colorCodeTitle = document.querySelector(".color-code-title");
    colorCodeTitle.style.display = "block";

    if(algoSelected == null){
      alert("No alorithm selected!");
      return;
    }

    const list = document.querySelectorAll(".bar");

    if(isSorted(list)) {
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
  let max = 70,
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

