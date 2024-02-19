"use strict";const analysisTitle=document.querySelector(".analysis-title"),algoCode=document.querySelector(".algorithm-code"),analysisExp=document.querySelector(".analysis-explanation"),analysis=document.querySelector(".analysis"),overlay=document.querySelector(".overlay"),showAnalysiss=()=>{analysis.classList.remove("hidden"),overlay.classList.remove("hidden")};closeAnalysis.addEventListener("click",(function(){analysis.classList.add("hidden"),overlay.classList.add("hidden")}));const checkWorstCase=e=>{const n=[];for(let t=0;t<e.length;t++)n.push(Number(e[t].getAttribute("value")));const t=[...n];return t.sort((function(e,n){return n-e})),JSON.stringify(n)===JSON.stringify(t)},checkBestCase=e=>{const n=[];for(let t=0;t<e.length;t++)n.push(Number(e[t].getAttribute("value")));const t=[...n];return t.sort((function(e,n){return e-n})),JSON.stringify(n)===JSON.stringify(t)},bubbleSortAnalysis=e=>{analysisTitle.innerHTML="<h2>The Time Complexity of the Bubble Sort Algorithm</h2>";const n=document.createElement("p"),t=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p");n.innerHTML=`<em>for (i = 0; i < ${e} - 1; i++) {</em> <br>`,t.innerHTML=`&nbsp;&nbsp;<em>for (j = 0; j < ${e} - i - 1; j++) { </em><br>`,i.innerHTML="&nbsp;&nbsp; <em>if leftElement > rightElement </em><br>",o.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>swap(leftElement, rightElement) </em><br>",a.innerHTML="&nbsp;&nbsp;<em>}<br>}</em>",algoCode.appendChild(n),algoCode.appendChild(t),algoCode.appendChild(i),algoCode.appendChild(o),algoCode.appendChild(a);const s=document.createElement("ul"),r=document.createElement("li"),l=document.createElement("li"),p=(document.createElement("li"),document.createElement("li"),document.createElement("li")),m=document.createElement("h2");m.textContent="Worst Case, Average Case and Best Case",analysisExp.appendChild(m),r.innerHTML="Bubble sort has the same time complexity for all cases. The inner loop performs <em>O(n)</em> comparisons deterministically.",s.appendChild(r),l.innerHTML="The outer loop also performs <em>O(n)</em> comparisons deterministically.",s.appendChild(l),p.innerHTML="Which results in <em>O(n^2)</em> time complexity",s.appendChild(p),analysisExp.appendChild(s)},commonInsertion=e=>{const n=document.createElement("p"),t=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p");n.innerHTML=`<em>for (i = 1; i < ${e}; i++) { <br></em>`,t.innerHTML="<em>&nbsp;&nbsp;&nbsp;&nbsp; j = i - 1;<br></em>",i.innerHTML="<em>&nbsp;&nbsp;&nbsp;&nbsp;while (j > 0 && arr[j] >= arr[j+1]) { <br></em>",o.innerHTML="<em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(j, j+1) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; j--;</em> <br>",a.innerHTML="&nbsp;&nbsp; <em>}</em><br>}",algoCode.appendChild(n),algoCode.appendChild(t),algoCode.appendChild(i),algoCode.appendChild(o),algoCode.appendChild(a)},worstCaseInsertionSortAnalysis=e=>{analysisTitle.innerHTML="<h2>The Time Complexity of the Insertion Algorithm</h2>",commonInsertion(e);const n=document.createElement("ul"),t=document.createElement("li"),i=document.createElement("li"),o=document.createElement("li"),a=(document.createElement("li"),document.createElement("li"),document.createElement("h2"));a.textContent="Worst Case",analysisExp.appendChild(a),t.innerHTML="The worst case happens when the data are in reverse order. In this case, for each <em>i</em>, the item arr[i] is less than every item arr[0],...,arr[i-1], and each of them is moved by one position.",n.appendChild(t),i.innerHTML="For each iteration <em>i</em> of the outer for loop, there are <em>i</em> comparisons, and the total number of comparisons for all iterations of this loop is found by: <em>1 + 2 + ... + (n - 1) = n(n-1)/2 = O(n^2)</em>",n.appendChild(i),o.innerHTML="So the time complexity is O(n^2).",n.appendChild(o),analysisExp.appendChild(n)},bestCaseInsertionSortAnalysis=e=>{analysisTitle.innerHTML="<h2>The Time Complexity of the Insertion Algorithm</h2>",commonInsertion(e);const n=document.createElement("ul"),t=document.createElement("li"),i=document.createElement("li"),o=document.createElement("li"),a=(document.createElement("li"),document.createElement("li"),document.createElement("h2"));a.textContent="Best Case",analysisExp.appendChild(a),t.innerHTML="The best case happens when the data are is already sorted. In this case, for each <em>i</em>, the item arr[j] is less than arr[j+1] every item, and none of them is moved from their original position.",n.appendChild(t),i.innerHTML="For each iteration <em>i</em> of the outer for loop, there are <em>i</em> comparisons, and the total number of comparisons for all iterations of this loop is found by: <em>1 + 2 + ... + (n - 1) = n(n-1)/2 = O(n^2)</em>",n.appendChild(i),o.innerHTML="So the time complexity is <em>O(n)</em>.",n.appendChild(o),analysisExp.appendChild(n)},averageCaseInsertionSortAnalysis=e=>{analysisTitle.innerHTML="<h2>The Time Complexity of the Insertion Algorithm</h2>",commonInsertion(e);const n=document.createElement("ul"),t=document.createElement("li"),i=document.createElement("li"),o=document.createElement("li"),a=document.createElement("li"),s=document.createElement("li"),r=document.createElement("h2");r.textContent="Average Case",analysisExp.appendChild(r),t.innerHTML="The outer for loop always executes n times, the number of comparisons depends on how far away the item arr[i] is from its proper position in the currently sorted subarray arr[0...i].",n.appendChild(t),i.innerHTML="This means that, in iteration <em>i</em> of the outer for loop, there are either 1,2, ..., or <em>i</em> comparisons.",n.appendChild(i),o.innerHTML="The average number of comparisons of arr[i] with other elements during the iteration <em>i</em> of the outer for loop can be computed by adding all the possible numbers of times such tests are performed and dividing the sum by the number of such possibilities. ",n.appendChild(o),a.innerHTML="To obtain the average number of all comparisons, the computed figure has to be added for all <em>i</em>'s (for all iterations of the outer for loop) from 1 to n - 1.",n.appendChild(a),s.innerHTML="So the time complexity is <em>O(n^2)</em>.",n.appendChild(s),analysisExp.appendChild(n)},selectionSortAnalysis=e=>{analysisTitle.innerHTML="<h2>The Time Complexity of the Selection Algorithm</h2>";const n=document.createElement("p"),t=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p"),r=document.createElement("p"),l=document.createElement("p"),p=document.createElement("p");n.innerHTML=`for (i = 0; i < ${e}; i++) { <br>`,t.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; min = i <br>",i.innerHTML=`&nbsp;&nbsp;&nbsp;&nbsp;for (j = i+1; j < ${e}; j++) { <br>`,o.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if min > j <br>",a.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; min = j <br> ",s.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;}<br>",r.innerHTML="&nbsp;&nbsp; if min != i <br>",l.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(i, min) <br>",p.innerHTML="}",algoCode.appendChild(n),algoCode.appendChild(t),algoCode.appendChild(i),algoCode.appendChild(o),algoCode.appendChild(a),algoCode.appendChild(s),algoCode.appendChild(r),algoCode.appendChild(l),algoCode.appendChild(p);const m=document.createElement("ul"),d=document.createElement("li"),c=document.createElement("li"),h=document.createElement("li"),b=document.createElement("li"),u=document.createElement("h2");u.textContent="Worst Case, Average Case and Best Case",analysisExp.appendChild(u),d.innerHTML="The analysis of the performance of the function selection sort is simplified by the presence of two for loops with lower and upper bounds. ",m.appendChild(d),c.innerHTML="The outer loop executes n times, and for each <em>i</em> between 0 and n - 2, the inner loop iterates <em>n - i - 1</em> times.",m.appendChild(c),h.innerHTML="This number stays the same for all cases.",m.appendChild(h),b.innerHTML="Which results in <em>O(n^2)</em> time complexity",m.appendChild(b),analysisExp.appendChild(m)},mergeSortAnalysis=e=>{analysisTitle.innerHTML="<h2>The Time Complexity of the merge sort Algorithm</h2>";const n=document.createElement("p"),t=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p");document.createElement("p");n.innerHTML="Split each element into partitions of size 1 <br>",t.innerHTML="&nbsp;&nbsp;Recursively merge adjacent partitions <br><br>",i.innerHTML="&nbsp;&nbsp;Sort adjacent partitions using another array <br><br>",o.innerHTML="&nbsp;&nbsp;Place the sorted numbers back in the &nbsp;&nbsp; original array",algoCode.appendChild(n),algoCode.appendChild(t),algoCode.appendChild(i),algoCode.appendChild(o);const a=document.createElement("ul"),s=document.createElement("li"),r=(document.createElement("li"),document.createElement("li")),l=document.createElement("li"),p=(document.createElement("li"),document.createElement("h2"));p.textContent="Worst Case, Average Case and Best Case",analysisExp.appendChild(p),s.innerHTML="Merge sort divides the array equally using recurssion. For <em>n</em> elements the number of levels(stages) created are <em>logn</em>.",a.appendChild(s),r.innerHTML="The merge process does not contain any nested loops, so it is executed with linear complexity: If the array size is doubled, the merge time doubles, too. The total effort is, therefore, the same at all merge levels.",a.appendChild(r),l.innerHTML="So we have n elements times <em>log2 n</em> division and merge stages. Therefore: The time complexity of Merge Sort is: <em>O(n log n)</em>",a.appendChild(l),analysisExp.appendChild(a)},quickSortCommon=()=>{const e=document.createElement("p"),n=document.createElement("p"),t=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p"),r=document.createElement("p"),l=document.createElement("p"),p=document.createElement("p"),m=document.createElement("p"),d=document.createElement("p"),c=document.createElement("p"),h=document.createElement("p");e.innerHTML="for each (unsorted) partition <br><br>",n.innerHTML="&nbsp;&nbsp;&nbsp;set first element as pivot <br>",t.innerHTML="&nbsp;&nbsp;&nbsp;i = pivotIndex <br> &nbsp;&nbsp;&nbsp;j = upperBound<br><br>",i.innerHTML="&nbsp;while(i <= j) { <br>",o.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; while(pivot >= arr[i] { <br>",a.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; start++;<br>",s.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;}",r.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; while(arr[j] < pivot) { <br>",l.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end--; <br>",p.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;}",m.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; if(arr[i] < arr[j])",d.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(arr[i], arr[j]); <br>",c.innerHTML="&nbsp; }",h.innerHTML="&nbsp;&nbsp;swap(pivot, arr[j])",algoCode.appendChild(e),algoCode.appendChild(n),algoCode.appendChild(t),algoCode.appendChild(i),algoCode.appendChild(o),algoCode.appendChild(a),algoCode.appendChild(s),algoCode.appendChild(r),algoCode.appendChild(l),algoCode.appendChild(p),algoCode.appendChild(m),algoCode.appendChild(d),algoCode.appendChild(c),algoCode.appendChild(h)},worstCaseQuickSortAnalysis=()=>{analysisTitle.innerHTML="<h2>The Time Complexity of the quick sort Algorithm</h2>",quickSortCommon();const e=document.createElement("ul"),n=document.createElement("li"),t=(document.createElement("li"),document.createElement("li")),i=document.createElement("li"),o=document.createElement("li"),a=document.createElement("li"),s=document.createElement("h2");s.textContent="Worst Case",analysisExp.appendChild(s),n.innerHTML="If the pivot element is always the smallest or largest element of the (sub)array (e.g. because our input data is already sorted and we always choose the last one as the pivot element), the array would not be divided into two approximately equally sized partitions,",e.appendChild(n),t.innerHTML="but one of length 0 (since no element is larger than the pivot element) and one of length n-1 (all elements except the pivot element).",e.appendChild(t),i.innerHTML="Therefore we would need n partitioning levels with a partitioning effort of size n, n-1, n-2, etc.:",e.appendChild(i),o.innerHTML="When we total up the partitioning times for each level, we get <em>n + (n-1) + (n-2) + ... + 2 + 1 = n(n+1)/2</em> comparisons.",e.appendChild(o),a.innerHTML=" Your input has time complexity, in big-Θ notation, <em>Θ(n2)</em>",e.appendChild(a),analysisExp.appendChild(e)},averageCaseQuickSortAnalysis=()=>{analysisTitle.innerHTML="<h2>The Time Complexity of the quick sort Algorithm</h2>",quickSortCommon();const e=document.createElement("ul"),n=document.createElement("li"),t=(document.createElement("li"),document.createElement("h2"));t.textContent="Average Case",analysisExp.appendChild(t),n.innerHTML="Your input results in average case time complexity, <em>Θ(nlog⁡2n)</em>",e.appendChild(n),analysisExp.appendChild(e)},showAnalysis=(e,n)=>{analysisExp.innerHTML="",analysisTitle.innerHTML="",algoCode.innerHTML="",0===algoSelected&&bubbleSortAnalysis(e),1===algoSelected&&selectionSortAnalysis(e),2===algoSelected&&(checkWorstCase(n)?worstCaseInsertionSortAnalysis(e):checkBestCase(n)?bestCaseInsertionSortAnalysis(e):averageCaseInsertionSortAnalysis(e)),3===algoSelected&&mergeSortAnalysis(),4===algoSelected&&(checkBestCase(n)?worstCaseQuickSortAnalysis():averageCaseQuickSortAnalysis())};