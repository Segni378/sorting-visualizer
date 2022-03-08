"use strict"

const parseComparison = document.querySelector(".parse-comparison");
const pseudoCode = document.querySelector(".pseudo-code");

let comparisonCount = 0;
let parseCount = 0;

const ParseComparison = () => {
     
    parseComparison.innerHTML = "";
    const container1 = document.createElement("div");
    const container2 = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const span2 = document.createElement("span");
    const span1 = document.createElement("span");

    span1.setAttribute("id", "parseValue");
    span2.setAttribute("id", "comparisonValue");
    
    span1.textContent = parseCount;
    span2.textContent = comparisonCount;
    span1.style.marginLeft = "5px";
    span2.style.marginLeft = "5px";
    p1.textContent = "No. of parses : ";
    p2.textContent = "No. of comparisons : ";

    container1.appendChild(p1);
    container1.appendChild(span1);
    container2.appendChild(p2);
    container2.appendChild(span2);

    container1.style.display = "flex";
    container2.style.display = "flex";

    parseComparison.appendChild(container1);
    parseComparison.appendChild(container2);



}
const bubbleSortTraceCode = (length) => {
    
    pseudoCode.innerHTML = "";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");

    p1.innerHTML = `for (i = 0; i < ${length} - 1; i++) { <br>`;
    p2.innerHTML = `for (j = 0; j < ${length} - i - 1; j++) { <br>`;
    p3.innerHTML = "&nbsp;&nbsp; if leftElement > rightElement <br>";
    p4.innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(leftElement, rightElement) <br>";
    p5.innerHTML = "&nbsp;&nbsp;}<br>}";
    p1.setAttribute("id", "outer-for-loop");
    p2.setAttribute("id", "inner-for-loop");
    p3.setAttribute("id", "compare");
    p4.setAttribute("id", "swap");
    
    pseudoCode.appendChild(p1);
    pseudoCode.appendChild(p2);
    pseudoCode.appendChild(p3);
    pseudoCode.appendChild(p4);
    pseudoCode.appendChild(p5);



}

const selectionSortTraceCode = (length) => {
    pseudoCode.innerHTML = "";
    
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
    p8.innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(i, min) <br>";
    p9.innerHTML = "}";

    p1.setAttribute("id", "outer-for-loop");
    p2.setAttribute("id", "initialize-min");
    p3.setAttribute("id", "inner-for-loop");
    p4.setAttribute("id", "compare1");  
    p5.setAttribute("id", "update-min");
    p7.setAttribute("id", "compare2");
    p8.setAttribute("id", "swap");


    pseudoCode.appendChild(p1);
    pseudoCode.appendChild(p2);
    pseudoCode.appendChild(p3);
    pseudoCode.appendChild(p4);
    pseudoCode.appendChild(p5);
    pseudoCode.appendChild(p6);
    pseudoCode.appendChild(p7);
    pseudoCode.appendChild(p8);
    pseudoCode.appendChild(p9);
} 

const insertionSortTraceCode = (length) => {

    pseudoCode.innerHTML = "";
    
     const p1 = document.createElement("p");
     const p2 = document.createElement("p");
     const p3 = document.createElement("p");
     const p4 = document.createElement("p");
     const p5 = document.createElement("p");
    
    p1.innerHTML = `for (i = 0; i < ${length}; i++) { <br>`;
    p2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; j = i - 1;<br>";
    p3.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;while (j > 0 && arr[j] >= arr[j+1]) { <br>`;
    p4.innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(j, j+1) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; j--; <br>";
    p5.innerHTML = "&nbsp;&nbsp; }<br>}";

    p1.setAttribute("id", "outer-loop");
    p2.setAttribute("id", "initialize-j");
    p3.setAttribute("id", "inner-loop");
    p4.setAttribute("id", "swap");

    pseudoCode.appendChild(p1);
    pseudoCode.appendChild(p2);
    pseudoCode.appendChild(p3);
    pseudoCode.appendChild(p4);
    pseudoCode.appendChild(p5);
}

const mergeSortTraceCode = () => {

  pseudoCode.innerHTML = "";

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");

  p1.innerHTML = "Split each element into partitions of size 1 <br>";
  p2.innerHTML =
    "&nbsp;&nbsp;Recursively merge adjacent partitions <br><br>";
  p3.innerHTML =
    "&nbsp;&nbsp;Sort adjacent partitions using another array <br><br>";
  p4.innerHTML =
    "&nbsp;&nbsp;Place the sorted numbers back in the &nbsp;&nbsp; original array";

  p3.setAttribute("id", "sort");
  p3.style.marginBottom = "5px";
  p4.setAttribute("id", "merge-sorted");

  pseudoCode.appendChild(p1);
  pseudoCode.appendChild(p2);
  pseudoCode.appendChild(p3);
  pseudoCode.appendChild(p4);

}
const quickSortTraceCode = () => {

  pseudoCode.innerHTML = "";

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");
  const p7 = document.createElement("p");
  const p8 = document.createElement("p");
  const p9 = document.createElement("p");
  const p10 = document.createElement("p");
  const p11 = document.createElement("p");
  const p12 = document.createElement("p");
  const p13 = document.createElement("p");
  const p14 = document.createElement("p");

    p1.innerHTML = "for each (unsorted) partition <br><br>";
    p2.innerHTML = "&nbsp;&nbsp;&nbsp;set first element as pivot <br>";
    p3.innerHTML = "&nbsp;&nbsp;&nbsp;i = pivotIndex <br> &nbsp;&nbsp;&nbsp;j = upperBound<br><br>";
    p4.innerHTML = "&nbsp;while(i <= j) { <br>";
    p5.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; while(pivot >= arr[i] { <br>"
    p6.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; start++;<br>";
    p7.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;}";
    p8.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; while(arr[j] < pivot) { <br>";
    p9.innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end--; <br>";
    p10.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;}";
    p11.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; if(arr[i] < arr[j])";
    p12.innerHTML =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(arr[i], arr[j]); <br>";
    p13.innerHTML = "&nbsp; }";
    p14.innerHTML = "&nbsp;&nbsp;swap(pivot, arr[j])";

    
    p2.setAttribute("id", "initialize-pivot");
    p3.setAttribute("id", "initialize-i-j");
    p4.setAttribute("id", "outer-loop");
    p5.setAttribute("id", "inner-loop1");
    p6.setAttribute("id", "increament-start");
    p8.setAttribute("id", "inner-loop2");
    p9.setAttribute("id", "increament-end");
    p11.setAttribute("id", "compare");
    p12.setAttribute("id", "swap1");
    p14.setAttribute("id", "swap2");
    pseudoCode.appendChild(p1);
    pseudoCode.appendChild(p2);
    pseudoCode.appendChild(p3);
    pseudoCode.appendChild(p4);
    pseudoCode.appendChild(p5);
    pseudoCode.appendChild(p6);
    pseudoCode.appendChild(p7);
    pseudoCode.appendChild(p8);
    pseudoCode.appendChild(p9);
    pseudoCode.appendChild(p10);
    pseudoCode.appendChild(p11);
    pseudoCode.appendChild(p12);
    pseudoCode.appendChild(p13);
    pseudoCode.appendChild(p14);
}