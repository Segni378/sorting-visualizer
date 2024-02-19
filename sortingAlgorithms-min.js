"use strict";class sortingAlgorithms{constructor(i,a){this.list=i,this.copylist=i,this.size=this.list.length,this.visualize=new visualizeSorting(this.list,a),this.isSorted=!1}enableButtons=()=>{analysisBtn.disabled=!1,generateNew.disabled=!1,sortBtn.disabled=!1,userDefinedInput.disabled=!1};getValues=i=>{let a=[];for(let s=0;s<i.length;s++)a[s]=Number(Number(i[s].getAttribute("value")));return a};colorCodeGenerator=i=>{const a=document.querySelector(".Grid-container");a.innerHTML="";for(let s=0;s<i.length;s++){const t=document.createElement("div");t.classList.add("colorContainer");const e=document.createElement("p"),l=document.createElement("div");l.classList.add("color"),l.style.width="20px",l.style.height="20px",l.style.backgroundColor=i[s].color,e.textContent=i[s].message,t.appendChild(l),t.appendChild(e),a.appendChild(t)}};bubbleSort=async()=>{this.colorCodeGenerator([{color:"#FFA500",message:"Comparison"},{color:"#008000",message:"Sorted"}]),await this.visualize.delay(),await this.visualize.delay(),await this.visualize.delay(),parseCount=0,comparisonCount=0;for(let i=0;i<this.size-1;i++){await this.visualize.markCode("outer-for-loop"),await this.visualize.delay(),await this.visualize.unmarkCode("outer-for-loop");for(let a=0;a<this.size-i-1;a++)this.visualize.markCode("inner-for-loop"),await this.visualize.delay(),this.visualize.unmarkCode("inner-for-loop"),this.visualize.mark(a),this.visualize.mark(a+1),this.visualize.markCode("compare"),await this.visualize.delay(),await this.visualize.compare(a,a+1)&&(await this.visualize.unmarkCode("compare"),await this.visualize.markCode("swap"),this.list=await this.visualize.swap(a,a+1),await this.visualize.delay(),await this.visualize.unmarkCode("swap")),this.visualize.unmarkCode("compare"),await this.visualize.delay(),await this.visualize.unmark(a),await this.visualize.unmark(a+1);parseCount++,parseComparison.querySelector("#parseValue").textContent=parseCount,this.list[this.size-i-1].classList.add("done")}return this.list[0].classList.add("done"),makeBars(this.getValues(this.list),"done"),this.isSorted=!0,this.enableButtons(),showAnalysis(this.list.length,this.copylist),this.isSorted};selectionSort=async()=>{let i;this.colorCodeGenerator([{color:"#0bdee7",message:"Minimum"},{color:"#FFA500",message:"Comparison"},{color:"#008000",message:"Sorted subarray"},{color:"#DC143C",message:"Unsorted Subarray"},{color:"#a79d8a",message:"Swap"}]),parseCount=0,comparisonCount=0;for(let a=0;a<this.list.length;a++){i=a,await this.visualize.markUnsorted(a),await this.visualize.delay(),await this.visualize.unmarkUnsorted(a),await this.visualize.delay(),await this.visualize.markUnsorted(a),await this.visualize.delay(),await this.visualize.unmarkUnsorted(a),await this.visualize.delay(),await this.visualize.delay(),await this.visualize.markCode("outer-for-loop"),await this.visualize.delay(),await this.visualize.unmarkCode("outer-for-loop"),this.visualize.markCode("initialize-min"),this.list[i].setAttribute("class","bar min"),await this.visualize.delay(),this.visualize.unmarkCode("initialize-min"),this.visualize.markCode("inner-for-loop"),await this.visualize.delay(),this.visualize.unmarkCode("inner-for-loop");for(let s=a+1;s<this.list.length;s++)this.visualize.markCode("inner-for-loop"),await this.visualize.mark(s),this.list[i].setAttribute("class","bar min"),await this.visualize.delay(),this.visualize.unmarkCode("inner-for-loop"),this.visualize.markCode("compare1"),await this.visualize.delay(),await this.visualize.compare(i,s)&&(this.visualize.unmarkCode("compare1"),this.visualize.unmark(s),this.list[i].setAttribute("class","bar"),this.visualize.markCode("update-min"),i=s,this.list[i].setAttribute("class","bar min"),await this.visualize.delay(),this.visualize.unmarkCode("update-min")),this.visualize.unmarkCode("compare1"),await this.visualize.unmark(s);this.visualize.markCode("compare2"),await this.visualize.delay(),i!=a&&(this.visualize.unmarkCode("compare2"),this.visualize.markCode("swap"),await this.visualize.delay(),this.list[i].classList.add("swap"),this.list[a].classList.add("swap"),await this.visualize.delay(),await this.visualize.delay(),this.list=await this.visualize.swap(a,i),this.list[i].classList.remove("swap"),this.list[a].classList.remove("swap"),this.visualize.unmarkCode("swap"),this.list[a].setAttribute("class","bar"),await this.visualize.delay()),this.list[a].setAttribute("class","bar"),this.visualize.unmarkCode("compare2"),this.list[a].classList.add("done"),a!=this.list.length-1&&(parseCount++,parseComparison.querySelector("#parseValue").textContent=parseCount)}return this.enableButtons(),makeBars(this.getValues(this.list),"done"),this.isSorted=!0,showAnalysis(this.list.length,this.copylist),this.isSorted};insertionSort=async()=>{this.colorCodeGenerator([{color:"#FFA500",message:"Comparison"},{color:"#008000",message:"Sorted subarray"},{color:"#DC143C",message:"Unsorted Subarray"}]),parseCount=0,comparisonCount=0,this.list[0].classList.add("done");for(let i=1;i<this.list.length;i++){this.visualize.markCode("outer-loop"),await this.visualize.delay(),this.visualize.unmarkCode("outer-loop"),this.visualize.markCode("initialize-j"),await this.visualize.delay(),this.visualize.unmarkCode("initialize-j");let a=i-1;for(await this.visualize.markUnsorted(i),this.visualize.markCode("inner-loop"),await this.visualize.delay(),this.visualize.unmarkCode("inner-loop");a>=0&&await this.visualize.compare(a,a+1);)this.visualize.markCode("inner-loop"),await this.visualize.delay(),this.visualize.unmarkCode("inner-loop"),this.list[i].classList.contains("unsorted")&&this.list[a].classList.remove("unsorted"),await this.visualize.mark(a+1),await this.visualize.delay(),await this.visualize.delay(),await this.visualize.mark(a),this.list[a].classList.remove("done"),await this.visualize.delay(),this.visualize.markCode("swap"),this.list=await this.visualize.swap(a,a+1),await this.visualize.delay(),this.visualize.unmarkCode("swap"),this.list[a+1].classList.remove("unsorted"),this.list[a+1].classList.add("done"),a--;a==i-1&&(this.visualize.unmark(a),this.list[a].classList.add("done")),await this.visualize.delay(),await this.visualize.delay(),this.list[a+1].classList.add("done"),parseCount++,parseComparison.querySelector("#parseValue").textContent=parseCount,await this.visualize.delay()}return this.enableButtons(),showAnalysis(this.list.length,this.copylist),makeBars(this.getValues(this.list),"done"),this.isSorted=!0,this.isSorted};mergeSort=async()=>{this.colorCodeGenerator([{color:"#FFA500",message:"current array to be sorted"},{color:"#008000",message:"Merged(after sorting)"}]),parseCount=0,comparisonCount=0,await this.MergeDivider(0,this.size-1);for(let i=0;i<this.size;++i)this.list[i].classList.add("done");return this.enableButtons(),makeBars(this.getValues(this.list),"done"),this.isSorted=!0,showAnalysis(this.list.length,this.copylist),this.isSorted};MergeDivider=async(i,a)=>{if(i<a){let s=i+Math.floor((a-i)/2);await this.MergeDivider(i,s),await this.MergeDivider(s+1,a),await this.Merge(i,s,a)}};Merge=async(i,a,s)=>{let t=new Array,e=i,l=a+1,r=i,o=[];for(;e<=a&&l<=s;){Number(this.list[e].getAttribute("value"))>Number(this.list[l].getAttribute("value"))?(t[r]=this.list[l],r++,++l,await this.visualize.delay(),comparisonCount++,parseComparison.querySelector("#comparisonValue").textContent=comparisonCount):(t[r]=this.list[e],r++,++e,await this.visualize.delay(),comparisonCount++,parseComparison.querySelector("#comparisonValue").textContent=comparisonCount)}for(;e<=a;)t[r]=this.list[e],r++,++e;for(;l<=s;)t[r]=this.list[l],r++,++l;for(let a=i;a<=s;++a)await this.visualize.mark(a);for(let a=i;a<=s;a++)o.push(t.indexOf(this.list[a]));await this.visualize.delay(),await this.visualize.delay(),this.visualize.markCode("merge-sorted"),this.visualize.markCode("sort"),await this.visualize.delay();for(let a=i,t=0;a<=s&&t<o.length;a++,t++)await this.visualize.moveToNextPos(a,o[t]);await this.visualize.delay(),await this.visualize.delay(),this.visualize.unmarkCode("merge-sorted"),this.visualize.unmarkCode("sort");let u=[];for(let a=0;a<this.list.length;a++)a>=i&&a<=s?u.push(t[a]):u.push(this.list[a]);this.list=u,this.visualize.updateList(this.list);for(let a=i;a<=s;++a)await this.visualize.markmergeSorted(a);parseCount++,parseComparison.querySelector("#parseValue").textContent=parseCount,await this.visualize.delay(),await this.visualize.delay()};quickSortAlgo=async()=>{this.colorCodeGenerator([{color:"red",message:"pivote"},{color:"purple",message:"i value(searching number greater than pivot from front)"},{color:"darkblue",message:"j value(searching number smaller than pivot from back)"},{color:"#008000",message:"Sorted"}]),parseCount=0,comparisonCount=0;let i=this.list.length-1;return await this.quickSort(0,i),this.enableButtons(),makeBars(this.getValues(this.list),"done"),this.isSorted=!0,showAnalysis(this.list.length,this.copylist),this.isSorted};quickSort=async(i,a)=>{if(i<a){let s=await this.partition(i,a);await this.quickSort(i,s-1),await this.quickSort(s+1,a)}};partition=async(i,a)=>{await this.visualize.delay(),await this.visualize.delay();let s=Number(this.list[i].getAttribute("value")),t=i,e=a;for(await this.visualize.markUnsortedPartition(i,a),await this.visualize.delay(),await this.visualize.unmarkUnsortedPartition(i,a),await this.visualize.delay(),await this.visualize.markUnsortedPartition(i,a),await this.visualize.delay(),await this.visualize.unmarkUnsortedPartition(i,a),await this.visualize.delay(),await this.visualize.delay(),this.list[i].style.backgroundColor="red",this.visualize.markCode("initialize-pivot"),await this.visualize.delay(),this.list[i].style.backgroundColor="red",await this.visualize.delay(),this.visualize.unmarkCode("initialize-pivot"),this.visualize.markCode("initialize-i-j"),await this.visualize.delay(),this.visualize.unmarkCode("initialize-i-j");t<=e;){for(this.visualize.markCode("outer-loop"),await this.visualize.delay(),this.visualize.unmarkCode("outer-loop"),this.visualize.markCode("inner-loop1");(await this.visualize.findGreater(i,t)||s===Number(this.list[t].getAttribute("value")))&&(this.visualize.markCode("inner-loop1"),await this.visualize.delay(),this.visualize.unmarkCode("inner-loop1"),this.visualize.markCode("increament-start"),await this.visualize.delay(),this.visualize.unmarkCode("increament-start"),await this.visualize.unmarkGreater(t),t++,!(t>this.list.length-1)););for(await this.visualize.delay(),this.visualize.unmarkCode("inner-loop1"),this.visualize.markCode("inner-loop2");await this.visualize.findSmaller(e,i)&&(this.visualize.markCode("inner-loop2"),await this.visualize.delay(),this.visualize.unmarkCode("inner-loop2"),this.visualize.markCode("increament-end"),await this.visualize.delay(),this.visualize.unmarkCode("increament-end"),await this.visualize.unmarkSmaller(e),e--,!(e<0)););await this.visualize.delay(),this.visualize.unmarkCode("inner-loop2"),this.visualize.markCode("compare"),await this.visualize.delay(),this.visualize.unmarkCode("compare"),t<e&&(this.visualize.markCode("swap1"),await this.visualize.delay(),this.visualize.unmarkCode("swap1"),this.list=await this.visualize.swap(t,e),await this.visualize.unmarkSmaller(e),await this.visualize.unmarkGreater(t))}return this.visualize.markCode("swap2"),await this.visualize.delay(),this.visualize.unmarkCode("swap2"),this.list=await this.visualize.swap(i,e),await this.visualize.unmarkSmaller(i),await this.visualize.delay(),await this.visualize.delay(),this.list[e].style.backgroundColor="rgb(96, 143, 160)",parseCount++,parseComparison.querySelector("#parseValue").textContent=parseCount,e}}