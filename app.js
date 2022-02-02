const algo = document.querySelectorAll(".algo");
const userDefined = document.querySelector(".user-defined");
const userInput = document.querySelector("input");
const sortUserDefined = document.querySelector(".sort-user-defined");
const speed = document.querySelector("#speed");
const toggleArrow = document.querySelector(".show");
const show = document.querySelector(".show-service");
const userService = document.querySelector(".user-defined-input");
let time = 1;

console.log(show);
show.addEventListener("click", function() {
    userService.classList.toggle("active");
    toggleArrow.classList.toggle("active");
})
const changeSpeed = (value) => {
    if(Number(value) === 0) time = 1;
    else if(Number(value) <= 25) time = 4;
    else if(Number(value) <= 50) time = 3;
    else if(Number(value) <= 75) time = 2;
    else time = 1;
}
const makeBars = (list) => {
    const bars = document.querySelector(".display-area");
    bars.innerHTML = "";
    let i = 0;
    for (let element of list) {
      const bar = document.createElement("div");
      const number_disp = document.createElement("p");
      number_disp.classList.add("number");
      if (element === 5 || element === 6 || element === 7) {
        number_disp.classList.add("push-up");
      }
      if (element === 6) {
        number_disp.style.marginBottom = "15px";
      }
      bar.className = "bar";
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
  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
  }
  
  makeBars(input);
});
// const createUserDefinedBars = () => {
    
   
//     
// }
let algoSelected;

const chooseAlgo = (choice) => {
    if(algoSelected != null) {
      algo[Number(algoSelected)].classList.remove("selected");
    }
    algoSelected = choice;

    algo[Number(algoSelected)].classList.add("selected");
}
const sort = () => {

    if(algoSelected == null){
      alert("No alorithm selected!");
      return;
    }
    
    const list = document.querySelectorAll(".bar");

    const algorithm = new sortingAlgorithms(list, time);

    if(algoSelected === 0){ console.log("True"); algorithm.bubbleSort();} 
    if(algoSelected === 1) algorithm.selectionSort();
    if(algoSelected === 2) algorithm.insertionSort();
    if(algoSelected === 3) algorithm.mergeSort();
    if(algoSelected === 4) algorithm.quickSort();
    if(algoSelected === 5) algorithm.coutingSort();
}
const randumNumbers = () => {
  let list = new Array();
  let max = 50,
  min = 0;

  for (let i = 0; i < 10; i++) {
    let randumNumber = Math.floor(Math.random() * (max - min) + min);
    list.push(randumNumber);
  }

  return list;
};

const createBars = () => {
  let list = randumNumbers();
  // const bars = document.querySelector(".display-area");
  // let i = 0;
  // for (let element of list) {
  //   const bar = document.createElement("div");
  //   const number_disp = document.createElement("p");
  //   number_disp.classList.add("number");
  //   if (element === 5 || element === 6 || element === 7) {
  //     number_disp.classList.add("push-up");
  //   }
  //   if(element === 6) {
  //     number_disp.style.marginBottom = "15px";
  //   }
  //   bar.className = "bar";
  //   bar.setAttribute("data-position", i);
  //   i++;
  //   bar.setAttribute("value", String(element));
  //   bar.style.height = `${4 * element}px`;
  //   number_disp.innerHTML = element;
  //   bar.appendChild(number_disp);
  //   bars.appendChild(bar);
  // } 
  makeBars(list); 
};

window.onload = createBars;

