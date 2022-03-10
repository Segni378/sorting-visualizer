"use strict";

const analysisTitle = document.querySelector(".analysis-title");
const algoCode = document.querySelector(".algorithm-code");
const analysisExp = document.querySelector(".analysis-explanation");
const analysis = document.querySelector(".analysis");
const overlay = document.querySelector(".overlay");

const showAnalysiss = () => {
    analysis.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
closeAnalysis.addEventListener("click", function() {
    analysis.classList.add("hidden");
    overlay.classList.add("hidden");
})
const bubbleSortAnalysis = (length) => {

    analysisTitle.innerHTML = "<h2>The Time Complexity of the Bubble Sort Algorithm</h2>";

    const p1C = document.createElement("p");
    const p2C = document.createElement("p");
    const p3C = document.createElement("p");
    const p4C = document.createElement("p");
    const p5C = document.createElement("p");

    p1C.innerHTML = `for (i = 0; i < ${length} - 1; i++) { <br>`;
    p2C.innerHTML = `&nbsp;&nbsp;for (j = 0; j < ${length} - i - 1; j++) { <br>`;
    p3C.innerHTML = "&nbsp;&nbsp; if leftElement > rightElement <br>";
    p4C.innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(leftElement, rightElement) <br>";
    p5C.innerHTML = "&nbsp;&nbsp;}<br>}";
    

    algoCode.appendChild(p1C);
    algoCode.appendChild(p2C);
    algoCode.appendChild(p3C);
    algoCode.appendChild(p4C);
    algoCode.appendChild(p5C);


    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    const h2 = document.createElement("h2");
    const p = document.createElement("p"); 
    
    h2.textContent = "Worst Case, Average Case and Best Case";
    analysisExp.appendChild(h2);
    li1.innerHTML = "Bubble sort has the same time complexity for all cases. The inner loop performs O(n) comparisons deterministically.";
    ul.appendChild(li1);
    li2.innerHTML = "The outer loop also performs O(n) comparisons deterministically.";
    ul.appendChild(li2);
    li3.innerHTML = `Your outer loop runs ${length} times.`;
    ul.appendChild(li3);
    li4.innerHTML = `Your inner loop runs also ${length} times. So totally it runs for ${length * length} times. `;
    ul.appendChild(li4);
    li5.innerHTML = `Which results in O(n^2) time complexity`;
     ul.appendChild(li5);
    analysisExp.appendChild(ul);
    
}
const showAnalysis = (length) => {

    if(algoSelected === 0) {
        bubbleSortAnalysis(length);
    }
}
