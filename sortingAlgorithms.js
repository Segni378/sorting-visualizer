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
    // And the other thing is, previously nothing was happening, actually, in the DOM except the visualization. The elements are still where
    // they are now
    // conceptually. Only the array elements were being swapped. By calling the below function we will override the previous position of the
    // elements

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
merge = (arr,lb, mid, ub) => {

  let i = lb;
	let k = lb;
	let j = mid + 1;
	let temp = [];
	while( i <= mid && j <= ub) {
		if (arr[i] <= arr[j]) {
			temp[k] = arr[i];
			i++;
		}
		else {
			temp[k] = arr[j];
			j++;
		}
		k++;
	}
	
	if (i > mid) {
		while(j <= ub) {
			temp[k] = arr[j];
			j++;
			k++; 
		}
	}
	else if(j > ub) {
		while(i <= mid) {
			temp[k] = arr[i];
			i++;
			k++;
		}
	}
	
	// Copying the sorted form to the main array
	for (let m = lb; m <= ub; m++) {
		arr[m] = temp[m];
	}
	
}
  mergeSort = (arr, lb, ub) => {
    if (lb < ub) {
		let mid = (lb + ub) / 2;
		mergeSort(arr, lb, mid);
		mergeSort(arr, mid+1, ub);
		merge(arr, lb, mid, ub);	
	}
  }
}