"use strict";
class sortingAlgorithms {
    constructor(list, time) {
        this.list = list;
        this.size = this.list.length;
        this.visualize = new visualizeSorting(this.list, time);
    }

    bubbleSort = async () => {
  
        for (let i = 0; i < this.size - 1; i++) {
            for (let j = 0; j < this.size - i - 1; j ++) {
                await this.visualize.mark(j);
                await this.visualize.mark(j+1);

                if(await this.visualize.compare(j, j+1)) {
                    this.list = await this.visualize.swap(j, j + 1);
                }
                await this.visualize.delay();
                await this.visualize.unmark(j);
                await this.visualize.unmark(j+1);
            }
            this.list[this.size - i - 1].classList.add("done");
        }
      this.list[0].classList.add("done");
    }
}