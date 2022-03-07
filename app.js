const algo = document.querySelectorAll(".algo");
const userDefined = document.querySelector(".user-defined");
const userInput = document.querySelector("input");
const sortUserDefined = document.querySelector(".sort-user-defined");
const speed = document.querySelector("#speed");
const toggleArrow = document.querySelector("#show-input-arrow");
const show = document.querySelector(".show-service");
const hidePanel1 = document.querySelector("#hide-panel1");
const hidePanel2 = document.querySelector("#hide-panel2");
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

/* Toggle arrows */

show.addEventListener("click", function() {
    userService.classList.toggle("active");
    toggleArrow.classList.toggle("active");
})
hidePanel1.addEventListener("click", function() {
    hidePanel1.querySelector(".show").classList.toggle("active");
    parseComparison.classList.toggle("active");
})
hidePanel2.addEventListener("click", function() {
    hidePanel2.querySelector(".show").classList.toggle("active");
    pseudoCode.classList.toggle("active");
})

/* Speed */

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
  
  /* Input validation */

  let input = userInput.value.split(",");
  let string = userInput.value;
   if (string[0] === ",") {
     input.splice(0, 1);
   }

  for(let i = 0; i < string.length; i++) {
    if(string[i] === "," && i != string.length - 1) {
      if(string[i+1] === ",") {
        alert("Invalid entry! Please ceck if your input has double commas!");
        return;
      }

    }
    if (string[i] === " " && i != string.length - 1) {
       if (string[i + 1] != ",") {
         if( i!=0 && (string[i-1] != "," || string[i-1] === " ")){
           alert(
             "Invalid entry! Please ceck if your input has double spaces(or space separated)!"
           );
           return;
           
         }
       }
    }
     
    if(i === string.length - 1) {
      if(string[string.length-1] === "," ) {
        input.pop();
      }
    }
    
  }
  
  if(input == "") {
    alert("No number entered!");
    return;
  }
  if(input.length > 10) {
    alert("Maximum number of inputs is 10, sorry!");
    return;
  }
  
  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
    if(input[i] > 60 || input[i] <= 10) {
      console.log(input[i]);
      alert("Maximum and minimum number is 60 and 10 respectively, Sorry!");
      return;
    }
  }

  /* Color code initial setup */

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
      alert("Already sorted!");
      return;
    }

   
    parseComparison.classList.add("active");
    pseudoCode.classList.add("active");
    
    const algorithm = new sortingAlgorithms(list, time);

    if(algoSelected === 0) {
      ParseComparison();
      bubbleSortTraceCode(list.length);
      algorithm.bubbleSort();
    } 
    if(algoSelected === 1){
      ParseComparison();
      selectionSortTraceCode(list.length);
      algorithm.selectionSort();
    } 
    if(algoSelected === 2) {
      ParseComparison();
      insertionSortTraceCode(list.length);
      algorithm.insertionSort();
    }
    if(algoSelected === 3) {
      ParseComparison();
      mergeSortTraceCode();
      algorithm.mergeSort();
    } 
    if(algoSelected === 4) {
      ParseComparison();
      quickSortTraceCode();
      algorithm.quickSortAlgo();
    } 
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
  // This code is found in the tracecode.js file
  parseCount = 0;
  comparisonCount = 0;
};

window.onload = createBars;

