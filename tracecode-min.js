"use strict";const parseComparison=document.querySelector(".parse-comparison"),pseudoCode=document.querySelector(".pseudo-code");let comparisonCount=0,parseCount=0;const ParseComparison=()=>{parseComparison.innerHTML="";const e=document.createElement("div"),n=document.createElement("div"),p=document.createElement("p"),t=document.createElement("p"),s=document.createElement("span"),d=document.createElement("span");d.setAttribute("id","parseValue"),s.setAttribute("id","comparisonValue"),d.textContent=parseCount,s.textContent=comparisonCount,d.style.marginLeft="5px",s.style.marginLeft="5px",p.textContent="No. of passes : ",t.textContent="No. of comparisons : ",e.appendChild(p),e.appendChild(d),n.appendChild(t),n.appendChild(s),e.style.display="flex",n.style.display="flex",parseComparison.appendChild(e),parseComparison.appendChild(n)},bubbleSortTraceCode=e=>{pseudoCode.innerHTML="";const n=document.createElement("p"),p=document.createElement("p"),t=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p");n.innerHTML=`for (i = 0; i < ${e} - 1; i++) { <br>`,p.innerHTML=`for (j = 0; j < ${e} - i - 1; j++) { <br>`,t.innerHTML="&nbsp;&nbsp; if leftElement > rightElement <br>",s.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(leftElement, rightElement) <br>",d.innerHTML="&nbsp;&nbsp;}<br>}",n.setAttribute("id","outer-for-loop"),p.setAttribute("id","inner-for-loop"),t.setAttribute("id","compare"),s.setAttribute("id","swap"),pseudoCode.appendChild(n),pseudoCode.appendChild(p),pseudoCode.appendChild(t),pseudoCode.appendChild(s),pseudoCode.appendChild(d)},selectionSortTraceCode=e=>{pseudoCode.innerHTML="";const n=document.createElement("p"),p=document.createElement("p"),t=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p"),b=document.createElement("p");n.innerHTML=`for (i = 0; i < ${e}; i++) { <br>`,p.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; min = i <br>",t.innerHTML=`&nbsp;&nbsp;&nbsp;&nbsp;for (j = i+1; j < ${e}; j++) { <br>`,s.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if min > j <br>",d.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; min = j <br> ",r.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;}<br>",i.innerHTML="&nbsp;&nbsp; if min != i <br>",o.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(i, min) <br>",b.innerHTML="}",n.setAttribute("id","outer-for-loop"),p.setAttribute("id","initialize-min"),t.setAttribute("id","inner-for-loop"),s.setAttribute("id","compare1"),d.setAttribute("id","update-min"),i.setAttribute("id","compare2"),o.setAttribute("id","swap"),pseudoCode.appendChild(n),pseudoCode.appendChild(p),pseudoCode.appendChild(t),pseudoCode.appendChild(s),pseudoCode.appendChild(d),pseudoCode.appendChild(r),pseudoCode.appendChild(i),pseudoCode.appendChild(o),pseudoCode.appendChild(b)},insertionSortTraceCode=e=>{pseudoCode.innerHTML="";const n=document.createElement("p"),p=document.createElement("p"),t=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p");n.innerHTML=`for (i = 1; i < ${e}; i++) { <br>`,p.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; j = i - 1;<br>",t.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;while (j > 0 && arr[j] >= arr[j+1]) { <br>",s.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; swap(j, j+1) <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; j--; <br>",d.innerHTML="&nbsp;&nbsp; }<br>}",n.setAttribute("id","outer-loop"),p.setAttribute("id","initialize-j"),t.setAttribute("id","inner-loop"),s.setAttribute("id","swap"),pseudoCode.appendChild(n),pseudoCode.appendChild(p),pseudoCode.appendChild(t),pseudoCode.appendChild(s),pseudoCode.appendChild(d)},mergeSortTraceCode=()=>{pseudoCode.innerHTML="";const e=document.createElement("p"),n=document.createElement("p"),p=document.createElement("p"),t=document.createElement("p");document.createElement("p");e.innerHTML="Split each element into partitions of size 1 <br>",n.innerHTML="&nbsp;&nbsp;Recursively merge adjacent partitions <br><br>",p.innerHTML="&nbsp;&nbsp;Sort adjacent partitions using another array <br><br>",t.innerHTML="&nbsp;&nbsp;Place the sorted numbers back in the &nbsp;&nbsp; original array",p.setAttribute("id","sort"),p.style.marginBottom="5px",t.setAttribute("id","merge-sorted"),pseudoCode.appendChild(e),pseudoCode.appendChild(n),pseudoCode.appendChild(p),pseudoCode.appendChild(t)},quickSortTraceCode=()=>{pseudoCode.innerHTML="";const e=document.createElement("p"),n=document.createElement("p"),p=document.createElement("p"),t=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p"),r=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p"),b=document.createElement("p"),a=document.createElement("p"),u=document.createElement("p"),l=document.createElement("p"),c=document.createElement("p");e.innerHTML="for each (unsorted) partition <br><br>",n.innerHTML="&nbsp;&nbsp;&nbsp;set first element as pivot <br>",p.innerHTML="&nbsp;&nbsp;&nbsp;i = pivotIndex <br> &nbsp;&nbsp;&nbsp;j = upperBound<br><br>",t.innerHTML="&nbsp;while(i <= j) { <br>",s.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; while(pivot >= arr[i] { <br>",d.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; start++;<br>",r.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;}",i.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; while(arr[j] < pivot) { <br>",o.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end--; <br>",b.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;}",a.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; if(arr[i] < arr[j])",u.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(arr[i], arr[j]); <br>",l.innerHTML="&nbsp; }",c.innerHTML="&nbsp;&nbsp;swap(pivot, arr[j])",n.setAttribute("id","initialize-pivot"),p.setAttribute("id","initialize-i-j"),t.setAttribute("id","outer-loop"),s.setAttribute("id","inner-loop1"),d.setAttribute("id","increament-start"),i.setAttribute("id","inner-loop2"),o.setAttribute("id","increament-end"),a.setAttribute("id","compare"),u.setAttribute("id","swap1"),c.setAttribute("id","swap2"),pseudoCode.appendChild(e),pseudoCode.appendChild(n),pseudoCode.appendChild(p),pseudoCode.appendChild(t),pseudoCode.appendChild(s),pseudoCode.appendChild(d),pseudoCode.appendChild(r),pseudoCode.appendChild(i),pseudoCode.appendChild(o),pseudoCode.appendChild(b),pseudoCode.appendChild(a),pseudoCode.appendChild(u),pseudoCode.appendChild(l),pseudoCode.appendChild(c)};