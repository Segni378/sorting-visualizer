"use strict";
class sortingAlgorithms {
  constructor(list, time) {
    this.list = list;
    this.size = this.list.length;
    this.visualize = new visualizeSorting(this.list, time);
  }

  // Extract the number of the modified array from
  getValues = (list) => {
    let values = [];

    for (let i = 0; i < list.length; i++) {
      values[i] = Number(Number(list[i].getAttribute("value")));
    }
    return values;
  };

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

    for (let i = 0; i < this.size - 1; i++) {
      for (let j = 0; j < this.size - i - 1; j++) {
        await this.visualize.mark(j);
        await this.visualize.mark(j + 1);

        if (await this.visualize.compare(j, j + 1)) {
          this.list = await this.visualize.swap(j, j + 1);
        }
        await this.visualize.delay();
        await this.visualize.unmark(j);
        await this.visualize.unmark(j + 1);
      }
      this.list[this.size - i - 1].classList.add("done");
    }
    this.list[0].classList.add("done");
    // This is to prevent the user trying to sort the already sorted input multiple times.
    // And the other thing is, previously nothing was happening, actually, in the DOM except the visualization. The elements are still where now conceptually. Only the array elements were being swapped. By calling the below function we will override the previous position of the elements

    makeBars(this.getValues(this.list), "done");
    return this.list;
  };

  // Selection Sort

  selectionSort = async () => {
    let min;

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

      {
        color: "#a79d8a",
        message: "Swap",
      },
    ];
    this.colorCodeGenerator(colors);

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
      for (let j = i + 1; j < this.list.length; j++) {
        await this.visualize.mark(j);
        await this.visualize.mark(min);
        if (await this.visualize.compare(min, j)) {
          await this.visualize.unmark(min); // Unmark the previous minimum
          min = j;
          await this.visualize.mark(min); // and mark the new minimum value
        }
        await this.visualize.unmark(j);
      }

      await this.visualize.unmark(min);
      if (min != i) {
        this.list[min].classList.add("swap");
        this.list[i].classList.add("swap");
        await this.visualize.delay();
        await this.visualize.delay();
        this.list = await this.visualize.swap(i, min);
        this.list[min].classList.remove("swap");
        this.list[i].classList.remove("swap");
        await this.visualize.delay();
      }

      this.list[i].classList.add("done");
    }
    // This is to prevent the user trying to sort the already sorted input multiple times.
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
    this.list[0].classList.add("done");
    for (let i = 1; i < this.list.length; i++) {
      let j = i - 1;
      await this.visualize.markUnsorted(i);

      while (j >= 0 && (await this.visualize.compare(j, j + 1))) {
        await this.visualize.delay();

        if (this.list[i].classList.contains("unsorted"))
          this.list[j].classList.remove("unsorted");

        this.list[j].classList.remove("done");
        await this.visualize.mark(j);
        this.list[j + 1].classList.remove("unsorted");
        await this.visualize.mark(j + 1);
        await this.visualize.delay();
        this.list = await this.visualize.swap(j, j + 1);

        await this.visualize.delay();
        this.list[j + 1].classList.remove("unsorted");
        this.list[j + 1].classList.add("done");
        j--;
      }
      await this.visualize.delay();
      await this.visualize.delay();
      this.list[j + 1].classList.add("done");

      await this.visualize.delay();
      // await this.visualize.delay();
    }

    // This is to prevent the user trying to sort the already sorted input multiple times.
    makeBars(this.getValues(this.list), "done");
  };

  // Merge Sort
 selectColor(colorNum, colors){
    if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
    return "hsl(" + (colorNum * (360 / colors) % 360) + ",100%,50%)";
}
  mergeSort = async () => {
    console.log(this.list);
     
      // for (var i = 0; i < this.list.length; i++) {
      //   let color = this.selectColor(Math.floor(Math.random() * 10), 10);
      //   this.list[i].style.backgroundColor = color;
      // }
    // await this.visualize.delay();
    await this.MergeDivider(0, this.size - 1);
    for (let counter = 0; counter < this.size; ++counter) {
      this.list[counter].classList.add("done");
    }
  };;

  MergeDivider = async (start, end) => {
    if (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      await this.MergeDivider(start, mid);
      await this.MergeDivider(mid + 1, end);
      await this.Merge(start, mid, end);
    }
  };

  Merge = async (start, mid, end) => {
    let newList = new Array();
    let frontcounter = start;
    let midcounter = mid + 1;
    let newPosStart = start;
    let newPositionHolder = [];
    // console.log(start, end);
    while (frontcounter <= mid && midcounter <= end) {
      let fvalue = Number(this.list[frontcounter].getAttribute("value"));
      let svalue = Number(this.list[midcounter].getAttribute("value"));
      if (fvalue >= svalue) {
        newList[newPosStart] = this.list[midcounter];
        newPosStart++;
        ++midcounter;
      } else {
        newList[newPosStart] = this.list[frontcounter];
        newPosStart++;
        ++frontcounter;
      }
    }
    while (frontcounter <= mid) {
      // console.log("First",newList);
      newList[newPosStart] = this.list[frontcounter];
      newPosStart++;
      // console.log("Second",newList);
      ++frontcounter;
    }
    
    while (midcounter <= end) {
      newList[newPosStart] = this.list[midcounter];
      newPosStart++;
      ++midcounter;
    }


    for (let c = start; c <= end; ++c) {
      await this.visualize.mark(c);
      this.list[c].setAttribute("class", "bar mark")
    }

  
    for(let i = start; i <= end; i++) {
        // if (newList.indexOf(this.list[i]) == -1) {
        //   console.log("Start " + start, "End " + end);
        //   console.log("The new List", newList);
        //   console.log("Item", this.list[i]);
        //   console.log("List", this.list);
        // }
          newPositionHolder.push(newList.indexOf(this.list[i]));
     }


    await this.visualize.delay();
    await this.visualize.delay();
    
      for(let i = start, pos=0; i <= end && pos < newPositionHolder.length; i++, pos++) {
        await this.visualize.moveToNextPos(i, newPositionHolder[pos]);     
      }

    await this.visualize.delay();
    await this.visualize.delay();

     let temp = [];
    
     for (let i = 0; i < this.list.length; i++) {
      if(i>=start && i <= end) {
        temp.push(newList[i]);
      }
      else temp.push(this.list[i]);
     }
     this.list= temp;
     this.visualize.updateList(this.list);
    //  for(let i = 0; i < this.list.length; i ++) {
    //   //  if(i>=start&&i<=end) {
    //   //    console.log("index " + i, "Value : " + this.list[i].getAttribute("value"));
    //   //  }
    //    console.log(Number(this.list[i].getAttribute("value")) + " ");
    //  }

     
    for (let c = start; c <= end; ++c) {
      this.list[c].setAttribute("class", "bar done");
    }
  };
  // Merge = async (start, mid, end) => {
  //   let newList = new Array();
  //   let frontcounter = start;
  //   let midcounter = mid + 1;
  //   console.log(start, end);
  //   while (frontcounter <= mid && midcounter <= end) {
  //     let fvalue = Number(this.list[frontcounter].getAttribute("value"));
  //     let svalue = Number(this.list[midcounter].getAttribute("value"));
  //     if (fvalue >= svalue) {
  //       newList.push(svalue);
  //       ++midcounter;
  //     } else {
  //       newList.push(fvalue);
  //       ++frontcounter;
  //     }
  //   }
  //   while (frontcounter <= mid) {
  //     // console.log("First",newList);
  //     newList.push(Number(this.list[frontcounter].getAttribute("value")));
  //     // console.log("Second",newList);
  //     ++frontcounter;
  //   }
    
  //   while (midcounter <= end) {
  //     newList.push(Number(this.list[midcounter].getAttribute("value")));
  //     // console.log("First", newList);
  //     ++midcounter;
  //   }

  //   console.log("New List",newList);
  //   for (let c = start; c <= end; ++c) {
  //     await this.visualize.mark(c);
  //     // this.list[c].setAttribute("class", "cell current");
  //   }
  //   for (
  //     let c = start, point = 0;
  //     c <= end && point < newList.length;
  //     ++c, ++point
  //   ) {
  //     await this.visualize.delay();
  //     this.list[c].setAttribute("value", newList[point]);
  //     this.list[c].style.height = `${5.1 * newList[point]}px`;
  //   }
  //   for (let c = start; c <= end; ++c) {
  //     this.list[c].setAttribute("class", "bar done");
  //   }
  // };
}
