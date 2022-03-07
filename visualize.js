class visualizeSorting {
  constructor(list, time) {
    this.list = list;
    // this.time = 500 / time;
  }

  marksorted = async (sortedIndex) => {
    for (let i = sortedIndex - 1; i >= 0; i--) {
      // this.list[i].classList.add("done");
      this.list[i].setAttribute("class", "bar done");
    }
  };
  markmergeSorted = async (index) =>{
    this.list[index].setAttribute("class", "bar done");
  }
  markUnsorted = async (currentUnsortedIndex) => {
    for (let i = currentUnsortedIndex; i < this.list.length; i++) {
      if (this.list[i].classList.contains("unsorted")) continue;
      this.list[i].classList.add("unsorted");
    }
  };
  unmarkUnsorted = async (currentUnsortedIndex) => {
    for (let i = currentUnsortedIndex; i < this.list.length; i++)
      this.list[i].classList.remove("unsorted");
  };

  markUnsortedPartition = async (lb, ub) => {
    for (let i = lb; i <= ub; i++) {
      if (this.list[i].classList.contains("unsorted")) continue;
      this.list[i].classList.add("unsorted");
    }
  };
  unmarkUnsortedPartition = async (lb, ub) => {
    for (let i = lb; i <= ub; i++)
      this.list[i].classList.remove("unsorted");
  };
  mark = async (index) => {
    // this.list[index].classList.add("mark");
    this.list[index].setAttribute("class", "bar mark");
  };
  unmark = async (index) => {
    
    this.list[index].classList.remove("mark");
  };

  //For quick sort only
  markSmaller = async (index) => {
    this.list[index].setAttribute("class", "bar smaller");
  };
  markGreater = async (index) => {
    this.list[index].setAttribute("class", "bar greater");
  };
  unmarkSmaller = async (index) => {
    this.list[index].setAttribute("class", "bar");
  };
  unmarkGreater = async (index) => {
    this.list[index].setAttribute("class", "bar");
  };
  delay = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 900 / changeSpeed(speed.value)); // A function in the app.js to read the input range for speed.
    });
  };

  compare = async (index1, index2) => {
    await this.delay();

    comparisonCount++;
  
    parseComparison.querySelector("#comparisonValue").textContent = comparisonCount; 
    const value1 = Number(this.list[index1].getAttribute("value"));
    const value2 = Number(this.list[index2].getAttribute("value"));

    if (value1 > value2) return true;
    else return false;
  };

  findSmaller = async (index1, index2) => {
    await this.markSmaller(index1);

    return await this.compare(index1, index2);
  };
  findGreater = async (index1, index2) => {
    // if (index1 != index2) {
      await this.markGreater(index2);
      
    // }

    return await this.compare(index1, index2);
  };
  updateList = (updatedList) => {
    this.list = updatedList;
  };
  moveTo = (currentPos, nextPos) => {
    let dataSet1 = this.list[currentPos].dataset.position; // original position

    let width1 = this.list[currentPos].clientWidth;

    let margin;

    let width = getWidth(); // A function from app.js to get current windows width.
    if (width <= 661) {
      margin = 4;
    } else if (width >= 662 && width <= 992) {
      margin = 10;
    } else {
      margin = 20;
    }

    //1. Check if current pos is the same as nextPos
    if (currentPos == nextPos) return;
    if (currentPos != nextPos) {
      if (currentPos < nextPos) {
        this.list[currentPos].style.transform = `translateX(${
          width1 * (nextPos - dataSet1) + (nextPos - dataSet1) * Number(margin)
        }px)`;
      } else {
        this.list[currentPos].style.transform = `translateX(${-(
          width1 * (dataSet1 - nextPos) +
          (dataSet1 - nextPos) * Number(margin)
        )}px)`;
      }
    }
  };

  moveToNextPos = async (currentPos, nextPos) => {
    await this.moveTo(currentPos, nextPos);
    // await this.delay();
  };

  move = (index1, index2) => {
    let dataSet1 = this.list[index1].dataset.position; // original position
    let dataSet2 = this.list[index2].dataset.position; // original position

    let width1 = this.list[index1].clientWidth;
    let width2 = this.list[index2].clientWidth;

    let margin;

    let width = getWidth(); // A function from app.js to get current windows width.
    if (width <= 661) {
      margin = 4;
    } else if (width >= 662 && width <= 992) {
      margin = 10;
    } else {
      margin = 20;
    }

    this.list[index1].style.transform = `translateX(${
      width1 * (index2 - dataSet1) + (index2 - dataSet1) * Number(margin)
    }px)`;
    this.list[index2].style.transform = `translateX(${-(
      width2 * (dataSet2 - index1) +
      (dataSet2 - index1) * Number(margin)
    )}px)`;

    // Updating the original array after swapping the numbers.
    // Because this.list is read only, we cannot change the content directly. So using another array we can change the content of this.list.

    let array = [];

    for (let i = 0; i < this.list.length; i++) {
      if (i == index1) {
        array.push(this.list[index2]);
      } else if (i == index2) {
        array.push(this.list[index1]);
      } else array.push(this.list[i]);
    }
    this.list = array;
  };

  swap = async (index1, index2) => {
    await this.move(index1, index2);
    await this.delay();
    return this.list;
  };
  /* Trace Code visulization */
  markCode = async (id) => {
    pseudoCode.querySelector(`#${id}`).classList.add("markCode");
  }
  
  unmarkCode = async (id) => {
    pseudoCode.querySelector(`#${id}`).classList.remove("markCode");
  }
}


