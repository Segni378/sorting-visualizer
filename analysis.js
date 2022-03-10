"use strict";

const analysisTitle = document.querySelector(".analysis-title");
const algoCode = document.querySelector(".algorithm-code");
const analysisExp = document.querySelector(".analysis-explanation");
const analysis = document.querySelector(".analysis");
const overlay = document.querySelector(".overlay");


// Open the analysis pop

const showAnalysiss = () => {
    analysis.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Close the analysis pop
closeAnalysis.addEventListener("click", function() {
    analysis.classList.add("hidden");
    overlay.classList.add("hidden");
})

const checkWorstCase = (list) => {
    const arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push(Number(list[i].getAttribute("value")));
    }

    const compArr = [...arr];
    compArr.sort(function (a, b) {
      return b - a;
    });

    if (JSON.stringify(arr) === JSON.stringify(compArr)) {
      return true;
    }
    return false;
}

const checkBestCase = (list) => {
    const arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push(Number(list[i].getAttribute("value")));
    }

    const compArr = [...arr];
    compArr.sort(function (a, b) {
      return a - b;
    });

    if (JSON.stringify(arr) === JSON.stringify(compArr)) {
      return true;
    }
    return false;
}
// bubble sort

const bubbleSortAnalysis = (length) => {
    

    analysisTitle.innerHTML = "<h2>The Time Complexity of the Bubble Sort Algorithm</h2>";

    const p1C = document.createElement("p");
    const p2C = document.createElement("p");
    const p3C = document.createElement("p");
    const p4C = document.createElement("p");
    const p5C = document.createElement("p");

    p1C.innerHTML = `<em>for (i = 0; i < ${length} - 1; i++) {</em> <br>`;
    p2C.innerHTML = `&nbsp;&nbsp;<em>for (j = 0; j < ${length} - i - 1; j++) { </em><br>`;
    p3C.innerHTML = "&nbsp;&nbsp; <em>if leftElement > rightElement </em><br>";
    p4C.innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>swap(leftElement, rightElement) </em><br>";
    p5C.innerHTML = "&nbsp;&nbsp;<em>}<br>}</em>";
    

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
    
    h2.textContent = "Worst Case, Average Case and Best Case";
    analysisExp.appendChild(h2);
    li1.innerHTML =
      "Bubble sort has the same time complexity for all cases. The inner loop performs <em>O(n)</em> comparisons deterministically.";
    ul.appendChild(li1);
    li2.innerHTML = "The outer loop also performs <em>O(n)</em> comparisons deterministically.";
    ul.appendChild(li2);
    li3.innerHTML = `Your outer loop runs ${length} times.`;
    ul.appendChild(li3);
    li4.innerHTML = `Your inner loop runs also ${length} times. So totally it runs for ${length * length} times. `;
    ul.appendChild(li4);
    li5.innerHTML = `Which results in <em>O(n^2)</em> time complexity`;
     ul.appendChild(li5);
    analysisExp.appendChild(ul);
    
}

const commonInsertion = (length) => {
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");

    p1.innerHTML = `<em>for (i = 0; i < ${length}; i++) { <br></em>`;
    p2.innerHTML = "<em>&nbsp;&nbsp;&nbsp;&nbsp; j = i - 1;<br></em>";
    p3.innerHTML = `<em>&nbsp;&nbsp;&nbsp;&nbsp;while (j > 0 && arr[j] >= arr[j+1]) { <br></em>`;
    p4.innerHTML =
      "<em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(j, j+1) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; j--;</em> <br>";
    p5.innerHTML = "&nbsp;&nbsp; <em>}</em><br>}";

    algoCode.appendChild(p1);
    algoCode.appendChild(p2);
    algoCode.appendChild(p3);
    algoCode.appendChild(p4);
    algoCode.appendChild(p5);
}
const worstCaseInsertionSortAnalysis = (length) => {
    analysisTitle.innerHTML = "<h2>The Time Complexity of the Insertion Algorithm</h2>";
    
    commonInsertion(length);

    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    const h2 = document.createElement("h2");

    h2.textContent = "Worst Case";
    analysisExp.appendChild(h2);
    li1.innerHTML = "The worst case happens when the data are in reverse order. In this case, for each <em>i</em>, the item arr[i] is less than every item arr[0],...,arr[i-1], and each of them is moved by one position.";
    ul.appendChild(li1);
    li2.innerHTML =
      "For each iteration <em>i</em> of the outer for loop, there are <em>i</em> comparisons, and the total number of comparisons for all iterations of this loop is found by: <em>1 + 2 + ... + (n - 1) = n(n-1)/2 = O(n^2)</em>";
    ul.appendChild(li2);
    li3.innerHTML = `So the time complexity is O(n^2).`;
    ul.appendChild(li3);
    analysisExp.appendChild(ul);

}
const bestCaseInsertionSortAnalysis = (length) => {
    analysisTitle.innerHTML = "<h2>The Time Complexity of the Insertion Algorithm</h2>";

    commonInsertion(length);

    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    const h2 = document.createElement("h2");

    h2.textContent = "Best Case";
    analysisExp.appendChild(h2);
    li1.innerHTML =
      "The best case happens when the data are is already sorted. In this case, for each <em>i</em>, the item arr[j] is less than arr[j+1] every item, and none of them is moved from their original position.";
    ul.appendChild(li1);
    li2.innerHTML = "For each iteration <em>i</em> of the outer for loop, there are <em>i</em> comparisons, and the total number of comparisons for all iterations of this loop is found by: <em>1 + 2 + ... + (n - 1) = n(n-1)/2 = O(n^2)</em>";
    ul.appendChild(li2);
    li3.innerHTML = `So the time complexity is <em>O(n)</em>.`;
    ul.appendChild(li3);
    analysisExp.appendChild(ul);
}

const averageCaseInsertionSortAnalysis = (length) => {
    analysisTitle.innerHTML = "<h2>The Time Complexity of the Insertion Algorithm</h2>";

    commonInsertion(length);

    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    const h2 = document.createElement("h2");

    h2.textContent = "Average Case";
    analysisExp.appendChild(h2);
    li1.innerHTML =
      "The outer for loop always executes n - 1 times, the number of comparisons depends on how far away the item arr[i] is from its proper position in the currently sorted subarray arr[0...i].";
    ul.appendChild(li1);
    li2.innerHTML =
      "This means that, in iteration <em>i</em> of the outer for loop, there are either 1,2, ..., or <em>i</em> comparisons.";
    ul.appendChild(li2);
    li3.innerHTML = `The average number of comparisons of arr[i] with other elements during the iteration <em>i</em> of the outer for loop can be computed by adding all the possible numbers of times such tests are performed and dividing the sum by the number of such possibilities. `;
    ul.appendChild(li3);
    li4.innerHTML = "To obtain the average number of all comparisons, the computed figure has to be added for all <em>i</em>'s (for all iterations of the outer for loop) from 1 to n - 1.";
    ul.appendChild(li4);
    li5.innerHTML = "So the time complexity is <em>O(n^2)</em>.";
    ul.appendChild(li5);
    analysisExp.appendChild(ul);



}

const selectionSortAnalysis = (length) => {

    analysisTitle.innerHTML = "<h2>The Time Complexity of the Selection Algorithm</h2>";

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const p6 = document.createElement("p");
    const p7 = document.createElement("p");
    const p8 = document.createElement("p");
    const p9 = document.createElement("p");
    p1.innerHTML = `for (i = 0; i < ${length}; i++) { <br>`;
    p2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; min = i <br>";
    p3.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;for (j = i+1; j < ${length}; j++) { <br>`;
    p4.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if min > j <br>";
    p5.innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; min = j <br> ";
    p6.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;}<br>";
    p7.innerHTML = "&nbsp;&nbsp; if min != i <br>";
    p8.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(i, min) <br>";
    p9.innerHTML = "}";

    algoCode.appendChild(p1);
    algoCode.appendChild(p2);
    algoCode.appendChild(p3);
    algoCode.appendChild(p4);
    algoCode.appendChild(p5);
    algoCode.appendChild(p6);
    algoCode.appendChild(p7);
    algoCode.appendChild(p8);
    algoCode.appendChild(p9);

    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    const h2 = document.createElement("h2");
    
    h2.textContent = "Worst Case, Average Case and Best Case";
    analysisExp.appendChild(h2);
    li1.innerHTML = "The analysis of the performance of the function selection sort is simplified by the presence of two for loops with lower and upper bounds. ";
    ul.appendChild(li1);
    li2.innerHTML = "The outer loop executes n - 1 times, and for each <em>i</em> between 0 and n - 2, the inner loop iterates <em>n - i - 1</em> times.";
    ul.appendChild(li2);
    li3.innerHTML = `This number stays the same for all cases.`;
    ul.appendChild(li3);
    li4.innerHTML = `Which results in <em>O(n^2)</em> time complexity`;
    ul.appendChild(li4);
    
    analysisExp.appendChild(ul);

}
const showAnalysis = (length, list) => {
    analysisExp.innerHTML = "";
    analysisTitle.innerHTML = "";
    algoCode.innerHTML = "";
  if (algoSelected === 0) {
    bubbleSortAnalysis(length);
  }

  if (algoSelected === 1) {
    console.log("hello");
    selectionSortAnalysis(length);
  }

  if (algoSelected === 2) {
      
    if(checkWorstCase(list)) {
        worstCaseInsertionSortAnalysis(length);
    }
    else if (checkBestCase(list)) {
        bestCaseInsertionSortAnalysis(length);
    }
    else {
        averageCaseInsertionSortAnalysis(length);
    }

  }

  
};
