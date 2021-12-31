// let ul = document.querySelector(".ul");
// let finish = document.querySelector(".finish");
// let squares = [];
// let timeout = 150;

// for (let i = 10; i >= 1; i--) {
//   let square = document.createElement("li");
//   square.setAttribute("id", i);
//   square.innerHTML = i;
//   ul.append(square);
//   squares.push(square);
// }

// const length = squares.length;
// let temp;
// function bubbel_sort() {
//   for (let i = 0; i < squares.length; i++) {
//     for (let j = 0; j < squares.length - i - 1; j++) {
//       setTimeout(() => {
//         if (
//           parseInt(squares[j].innerHTML) > parseInt(squares[j + 1].innerHTML)
//         ) {
//           if (j > 0) {
//             squares[j].classList.remove("red-color");
//             squares[j - 1].classList.remove("red-color");
//           }

//           squares[j].classList.add("red-color");
//           squares[j + 1].classList.add("red-color");

//           setTimeout(() => {
//             temp = squares[j].innerHTML;
//             squares[j].innerHTML = squares[j + 1].innerHTML;
//             squares[j + 1].innerHTML = temp;
//           }, 100);
//           if (j === squares.length - i - 2) {
//             setTimeout(() => {
//               squares[j].classList.remove("red-color");
//               squares[j + 1].classList.remove("red-color");
//             }, 100);
//           }
//         }
//       }, timeout);
//       timeout += 200;
//     }
//   }

//   let text = document.createElement("p");
//   text.InnerHTML = "Done!";
//   finish.append(text);
// }

// bubbel_sort();

const randumNumbers = () => {
  let list = new Array();
  let max = 50,
    min = 1;

  for (let i = 0; i < 10; i++) {
    let randumNumber = Math.floor(Math.random() * (max - min) + min);
    list.push(randumNumber);
  }

  return list;
};

const createBars = () => {
  let list = randumNumbers();
  const bars = document.querySelector(".display-area");
  for (let element of list) {
    const bar = document.createElement("div");
    const number_disp = document.createElement("p");
    if (element === 5 || element === 6 || element === 7) {
      number_disp.className = "push-up";
    }
    bar.className = "bar";
    bar.setAttribute("value", String(element));
    bar.style.height = `${4 * element}px`;
    number_disp.innerHTML = element;
    bar.appendChild(number_disp);
    bars.appendChild(bar);
  }
};

window.onload = createBars;
