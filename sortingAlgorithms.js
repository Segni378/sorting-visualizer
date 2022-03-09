"use strict";
class sortingAlgorithms {
  constructor(list, time) {
    this.list = list;
    this.size = this.list.length;
    this.visualize = new visualizeSorting(this.list, time);
    this.isSorted = false;
  }

  // Extract the number of the modified array from
  getValues = (list) => {
    let values = [];

    for (let i = 0; i < list.length; i++) {
      values[i] = Number(Number(list[i].getAttribute("value")));
    }
    return values;
  };

  // This function is used to creat color code for a particular sorting algorithm.

  colorCodeGenerator = (colors) => {
    const colorCodes = document.querySelector(".Grid-container");
    colorCodes.innerHTML = "";
    for (let i = 0; i < colors.length; i++) {
      const colorContainter = document.createElement("div");
      colorContainter.classList.add("colorContainer");
      const message = document.createElement("p");
      const color = document.createElement("div");
      color.classList.add("color");
      color.style.width = "20px";
      color.style.height = "20px";
      color.style.backgroundColor = colors[i].color;
      message.textContent = colors[i].message;

      colorContainter.appendChild(color);
      colorContainter.appendChild(message);
      colorCodes.appendChild(colorContainter);
    }
  };

  // Bubble Sort

  bubbleSort = async () => {
    const colors = [
      {
        color: "#FFA500",
        message: "Comparison",
      },
      {
        color: "#008000",
        message: "Sorted",
      },
    ];
    this.colorCodeGenerator(colors);
    await this.visualize.delay();
    await this.visualize.delay();
    await this.visualize.delay();
    parseCount = 0;
    comparisonCount = 0;
    for (let i = 0; i < this.size - 1; i++) {
      await this.visualize.markCode("outer-for-loop");
      await this.visualize.delay();
      await this.visualize.unmarkCode("outer-for-loop");
      for (let j = 0; j < this.size - i - 1; j++) {

         this.visualize.markCode("inner-for-loop");
         await this.visualize.delay();
         this.visualize.unmarkCode("inner-for-loop");
         this.visualize.mark(j);
         this.visualize.mark(j + 1);

        this.visualize.markCode("compare");
        await this.visualize.delay();

        if (await this.visualize.compare(j, j + 1)) {
          await this.visualize.unmarkCode("compare");
          await this.visualize.markCode("swap");
          this.list = await this.visualize.swap(j, j + 1);
          await this.visualize.delay();
          await this.visualize.unmarkCode("swap");
        }
        this.visualize.unmarkCode("compare");
        await this.visualize.delay();
        await this.visualize.unmark(j);
        await this.visualize.unmark(j + 1);
      }
        parseCount++;
        parseComparison.querySelector("#parseValue").textContent = parseCount; 
      this.list[this.size - i - 1].classList.add("done");
    }
    this.list[0].classList.add("done");

    // This is to prevent the user trying to sort the already sorted input multiple times.
    // And the other thing is, previously nothing was happening, actually, in the DOM except the visualization. The elements are still where now conceptually. Only the array elements were being swapped. By calling the below function we will override the previous position of the elements

    makeBars(this.getValues(this.list), "done");
    this.isSorted = true;
    showAnalysis(this.list.length);
    return this.isSorted;
  };

  // Selection Sort

  selectionSort = async () => {
    let min;

    const colors = [
      {
        color: "#0bdee7",
        message: "Minimum",
      },
      {
        color: "#FFA500",
        message: "Comparison",
      },
      {
        color: "#008000",
        message: "Sorted subarray",
      },

      {
        color: "#DC143C",
        message: "Unsorted Subarray",
      },

      {
        color: "#a79d8a",
        message: "Swap",
      },
    ];
    this.colorCodeGenerator(colors);

    parseCount = 0;
    comparisonCount = 0;

    for (let i = 0; i < this.list.length; i++) {
      min = i;
      
      await this.visualize.markUnsorted(i);
      await this.visualize.delay();
      await this.visualize.unmarkUnsorted(i);
      await this.visualize.delay();
      await this.visualize.markUnsorted(i);
      await this.visualize.delay();
      await this.visualize.unmarkUnsorted(i);
      await this.visualize.delay();
      await this.visualize.delay();
      await this.visualize.markCode("outer-for-loop");
      await this.visualize.delay();
      await this.visualize.unmarkCode("outer-for-loop");
      this.visualize.markCode("initialize-min");
      this.list[min].setAttribute("class", "bar min");
      await this.visualize.delay();
      this.visualize.unmarkCode("initialize-min");
      // await this.visualize.delay();
      // // await this.visualize.delay();
      
      for (let j = i + 1; j < this.list.length; j++) {
        this.visualize.markCode("inner-for-loop");
        await this.visualize.mark(j);
        this.list[min].setAttribute("class", "bar min");
        await this.visualize.delay();
        this.visualize.unmarkCode("inner-for-loop");

        this.visualize.markCode("compare1");
        await this.visualize.delay();
        if (await this.visualize.compare(min, j)) {
          this.visualize.unmarkCode("compare1");
          this.visualize.unmark(j);
          this.list[min].setAttribute("class", "bar");
          this.visualize.markCode("update-min");
          min = j; // This is the main code
          this.list[min].setAttribute("class", "bar min"); // and mark the new minimum value
          await this.visualize.delay();
          this.visualize.unmarkCode("update-min");
        }
        this.visualize.unmarkCode("compare1");
        await this.visualize.unmark(j);
      }

      // await this.visualize.unmark(min);
      
      this.visualize.markCode("compare2");
      await this.visualize.delay();
      if (min != i) {
        this.visualize.unmarkCode("compare2");
        this.visualize.markCode("swap");
        await this.visualize.delay();
        this.list[min].classList.add("swap");
        this.list[i].classList.add("swap");
        await this.visualize.delay();
        await this.visualize.delay();
        this.list = await this.visualize.swap(i, min); // This is the main code here
        this.list[min].classList.remove("swap");
        this.list[i].classList.remove("swap");
        this.visualize.unmarkCode("swap");
        this.list[i].setAttribute("class", "bar");
        await this.visualize.delay();
      }
      this.list[i].setAttribute("class", "bar");
      this.visualize.unmarkCode("compare2");
      this.list[i].classList.add("done");
      if(i!=this.list.length-1){

        parseCount++;
        parseComparison.querySelector("#parseValue").textContent = parseCount;
      }
    }
    // create the bars in the dom again with the updated list. This will prevent the user trying to sort the already sorted input multiple times.
    makeBars(this.getValues(this.list), "done");
  };

  // Insertion Sort

  insertionSort = async () => {
    const colors = [
      {
        color: "#FFA500",
        message: "Comparison",
      },
      {
        color: "#008000",
        message: "Sorted subarray",
      },

      {
        color: "#DC143C",
        message: "Unsorted Subarray",
      },
    ];

    this.colorCodeGenerator(colors);
    parseCount = 0;
    comparisonCount = 0;
    this.list[0].classList.add("done");
    for (let i = 1; i < this.list.length; i++) {

      /* A code for visualizing unsorted partition */
      this.visualize.markCode("outer-loop");
      await this.visualize.delay();
      this.visualize.unmarkCode("outer-loop");
      this.visualize.markCode("initialize-j");
      await this.visualize.delay();
      this.visualize.unmarkCode("initialize-j");

      let j = i - 1;

      await this.visualize.markUnsorted(i);

      while (j >= 0 && (await this.visualize.compare(j, j + 1))) {
        
        /* A code for visualizing unsorted partition */
        this.visualize.markCode("inner-loop");
        await this.visualize.delay();
        this.visualize.unmarkCode("inner-loop");

        if (this.list[i].classList.contains("unsorted"))
          this.list[j].classList.remove("unsorted");

        await this.visualize.mark(j + 1);
        await this.visualize.delay();
        await this.visualize.delay();

        await this.visualize.mark(j);
        this.list[j].classList.remove("done");
        await this.visualize.delay();

        this.visualize.markCode("swap");
        this.list = await this.visualize.swap(j, j + 1);

        await this.visualize.delay();
        this.visualize.unmarkCode("swap");
        this.list[j + 1].classList.remove("unsorted");
        this.list[j + 1].classList.add("done");
        j--;
      }
      if (j == i - 1) {
        this.visualize.unmark(j);
        this.list[j].classList.add("done");
      }
      await this.visualize.delay();
      await this.visualize.delay();
      this.list[j + 1].classList.add("done");
      parseCount++;
      parseComparison.querySelector("#parseValue").textContent = parseCount;

      await this.visualize.delay();
      // await this.visualize.delay();
    }

    // create the bars in the dom again with the updated list. This will prevent the user trying to sort the already sorted input multiple times.
    makeBars(this.getValues(this.list), "done");
  };

  // Merge Sort
 
  mergeSort = async () => {
    const colors = [
      {
        color: "#FFA500",
        message: "current array to be sorted",
      },
      {
        color: "#008000",
        message: "Merged(after sorting)",
      },
    ];
    this.colorCodeGenerator(colors);
    parseCount = 0;
    comparisonCount = 0;
    await this.MergeDivider(0, this.size - 1);
    for (let counter = 0; counter < this.size; ++counter) {
      this.list[counter].classList.add("done");
    }

    // create the bars in the dom again with the updated list. This will prevent the user trying to sort the already sorted input multiple times.
    makeBars(this.getValues(this.list), "done");
  };

  MergeDivider = async (start, end) => {
    if (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      await this.MergeDivider(start, mid);
      await this.MergeDivider(mid + 1, end);
      await this.Merge(start, mid, end);
    }
  };

  Merge = async (start, mid, end) => {
    let newList = new Array(); // This array holds the sorted form the numbers in the subarray in consideration.
    let frontcounter = start;
    let midcounter = mid + 1;
    let newPosStart = start;
    let newPositionHolder = []; // This array holds the new location of the numbers in the subarray in cosideration.


    while (frontcounter <= mid && midcounter <= end) {
      let fvalue = Number(this.list[frontcounter].getAttribute("value"));
      let svalue = Number(this.list[midcounter].getAttribute("value"));
      if (fvalue > svalue) {
        newList[newPosStart] = this.list[midcounter];
        newPosStart++;
        ++midcounter;

        await this.visualize.delay();
        comparisonCount++;
        parseComparison.querySelector("#comparisonValue").textContent =
          comparisonCount;
        
      } else {
        newList[newPosStart] = this.list[frontcounter];
        newPosStart++;
        ++frontcounter;

        await this.visualize.delay();
        comparisonCount++;
        parseComparison.querySelector("#comparisonValue").textContent =
          comparisonCount;
      }
    }
    while (frontcounter <= mid) {
     
      newList[newPosStart] = this.list[frontcounter];
      newPosStart++;
     
      ++frontcounter;
    }
    
    while (midcounter <= end) {
      newList[newPosStart] = this.list[midcounter];
      newPosStart++;
      ++midcounter;
    }

    /* At this position newList array has the subarray in the sorted form. They are stored starting from the start index. The numbers before this index are by default zero. We are not interested in that. */

    // Mark the subarray in cosideration
    for (let c = start; c <= end; ++c) {
      await this.visualize.mark(c);
      // this.list[c].setAttribute("class", "bar mark");
    }

    // The below for loop is used to store the new location of the numbers in the original array(i.e. list). We get that location from the newList array as it is has the sorted form of them. Since newList is an array it each numbers have their corresponding index. That index is pushed to the newPositionHolder array. 

    for(let i = start; i <= end; i++) {
      newPositionHolder.push(newList.indexOf(this.list[i]));
     }


    await this.visualize.delay();
    await this.visualize.delay();
    
    // Here, the unsorted subarray, will be moved to their corresponding new locations by using the moveToNextPos function in the visualize.js file.
     this.visualize.markCode("merge-sorted");
     this.visualize.markCode("sort");
     await this.visualize.delay();
      for(let i = start, pos=0; i <= end && pos < newPositionHolder.length; i++, pos++) {
        await this.visualize.moveToNextPos(i, newPositionHolder[pos]);     
      }

    await this.visualize.delay();
    await this.visualize.delay();
    this.visualize.unmarkCode("merge-sorted");
    this.visualize.unmarkCode("sort");
    // Since updating the this.list directly is not allowed the below code is a work around to do that. While traversing the whole array(i.e. list array) if the index comes to the array in cosideration the list will be updated according to the values sequences in the newList array. 

     let temp = [];
    
     for (let i = 0; i < this.list.length; i++) {
      if(i>=start && i <= end) {
        temp.push(newList[i]);
      }
      else temp.push(this.list[i]);
     }
     this.list= temp;
     this.visualize.updateList(this.list);
    
    
     // At this location we will mark the sub array as sorted. 
    for (let c = start; c <= end; ++c) {
      await this.visualize.markmergeSorted(c);
    }
    parseCount++;
    parseComparison.querySelector("#parseValue").textContent = parseCount;
    await this.visualize.delay();
    await this.visualize.delay();
  };
  
  // Quick sort 

  quickSortAlgo = async () => {
    
    const colors = [
      {
        color: "red",
        message: "pivote",
      },
      {
        color: "purple",
        message: "i value(searching number greater than pivot from front)"
      },
      {
        color: "darkblue",
        message: "j value(searching number smaller than pivot from back)",
      },
      {
        color: "#008000",
        message: "Sorted"
      },
    ];
    this.colorCodeGenerator(colors);
    parseCount = 0;
    comparisonCount = 0;

    let lb = 0;
    let ub = this.list.length - 1;
   
    await this.quickSort(lb, ub);

    // create the bars in the dom again with the updated list. This will prevent the user trying to sort the already sorted input multiple times.
    makeBars(this.getValues(this.list), "done");
  }

  quickSort = async(lb, ub) => {
    if(lb < ub) {
      let partitionPoint = await this.partition(lb, ub);
      await this.quickSort(lb, partitionPoint-1);
      await this.quickSort(partitionPoint + 1, ub);
    }
  }

  partition = async (lb, ub) => {
    /* A little delay before the visualization starts */
    await this.visualize.delay();
    await this.visualize.delay();

    let pivot = Number(this.list[lb].getAttribute("value"));

    let start = lb;
    let end = ub;

    /* A code for visualizing unsorted partition */

    await this.visualize.markUnsortedPartition(lb, ub);
    await this.visualize.delay();
    await this.visualize.unmarkUnsortedPartition(lb, ub);
    await this.visualize.delay();
    await this.visualize.markUnsortedPartition(lb, ub);
    await this.visualize.delay();
    await this.visualize.unmarkUnsortedPartition(lb, ub);
    await this.visualize.delay();
    await this.visualize.delay();

    /* A code for visualizing code tracing */
    this.list[lb].style.backgroundColor = "red";
    this.visualize.markCode("initialize-pivot");
    await this.visualize.delay();
    this.list[lb].style.backgroundColor = "red";
    await this.visualize.delay();
    this.visualize.unmarkCode("initialize-pivot");
    this.visualize.markCode("initialize-i-j");
    await this.visualize.delay();
    this.visualize.unmarkCode("initialize-i-j");

    /* End of trace code visualization code */

    while (start <= end) {
      this.visualize.markCode("outer-loop");
      await this.visualize.delay();
      this.visualize.unmarkCode("outer-loop");

      this.visualize.markCode("inner-loop1");
    
      while (
        (await this.visualize.findGreater(lb, start)) ||
        pivot === Number(this.list[start].getAttribute("value"))
      ) {
        /* A code for trace code visualization */

        this.visualize.markCode("inner-loop1");
        await this.visualize.delay();
        this.visualize.unmarkCode("inner-loop1");
        this.visualize.markCode("increament-start");
        await this.visualize.delay();
        this.visualize.unmarkCode("increament-start");

        /* End of trace code visualization code */
        await this.visualize.unmarkGreater(start);
        start++;

        if (start > this.list.length - 1) break;
      }
        await this.visualize.delay();
        this.visualize.unmarkCode("inner-loop1");
      this.visualize.markCode("inner-loop2");
      
      while (await this.visualize.findSmaller(end, lb)) {
        /* A code for trace code visualization */
         this.visualize.markCode("inner-loop2");
         await this.visualize.delay();
         this.visualize.unmarkCode("inner-loop2");
        
        this.visualize.markCode("increament-end");
        await this.visualize.delay();
        this.visualize.unmarkCode("increament-end");

        /* End of trace code visualization code */

        await this.visualize.unmarkSmaller(end);
        end--;
        if (end < 0) break;
      }
      await this.visualize.delay();
      this.visualize.unmarkCode("inner-loop2");
      /* A code for trace code visualization */
      this.visualize.markCode("compare");
      await this.visualize.delay();
      this.visualize.unmarkCode("compare");
      /* End of trace code visualization code */
      if (start < end) {
        /* A code for trace code visualization */
        this.visualize.markCode("swap1");
        await this.visualize.delay();
        this.visualize.unmarkCode("swap1");
        /* End of trace code visualization code */
        this.list = await this.visualize.swap(start, end);
        await this.visualize.unmarkSmaller(end);
        await this.visualize.unmarkGreater(start);
      }
      
    }

    /* A code for trace code visualization */
    this.visualize.markCode("swap2");
    await this.visualize.delay();
    this.visualize.unmarkCode("swap2");
    /* End of trace code visualization code */

    this.list = await this.visualize.swap(lb, end);
    await this.visualize.unmarkSmaller(lb);
    await this.visualize.delay();
    await this.visualize.delay();

    // Unmark the pivot which was marked in visualize.js since it is not longer pivot after the return statement.
    this.list[end].style.backgroundColor = "rgb(96, 143, 160)";
    parseCount++;
    parseComparison.querySelector("#parseValue").textContent = parseCount;
    return end;
  }

}
