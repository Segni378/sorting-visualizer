class visualizeSorting{
    constructor(list, time) {
        this.list = list;
        this.time = 500/time;
    }

    mark = async (index) => {
        this.list[index].classList.add("mark");
    }
    unmark = async (index) => {
        this.list[index].classList.remove("mark");
    }
    delay = async () => {
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve();
          }, this.time);
        });
    }

    compare = async (index1, index2) => {
        await this.delay();
        const value1 = Number(this.list[index1].getAttribute("value"));
        const value2 = Number(this.list[index2].getAttribute("value"));

        if(value1 > value2) return true;
        else return false;
    }

    move = (index1, index2) => {     

        let dataSet1 = this.list[index1].dataset.position;
        let dataSet2 = this.list[index2].dataset.position;

        let width1 = this.list[index1].clientWidth;
        let width2 = this.list[index2].clientWidth;

        this.list[index1].style.transform = `translateX(${width1 * ((index2 - dataSet1)) + (index2 - dataSet1)*20}px)`;
        this.list[index2].style.transform = `translateX(${-(width2 * (dataSet2 - index1) + (dataSet2 - index1) * 20)}px)`;

        // Swapping the elements in the array using new array, and updating the original array. 
        // Because this.list is read only, we cannot change the content directly. So this method is used.  

        let array = [];

        for(let i = 0; i < this.list.length; i++){
            if(i == index1) {
                array.push(this.list[index2]);
            }
            else if (i == index2) {
                array.push(this.list[index1]);
            }
            else array.push(this.list[i]);
        }       
        this.list = array;
    };

    swap = async (index1, index2) => {
        // await this.delay();

        // const value1 = Number(this.list[index1].getAttribute("value"));
        // const value2 = Number(this.list[index2].getAttribute("value"));
        // const number_disp1 = this.list[index1].querySelector(".number");
        // const number_disp2 = this.list[index2].querySelector(".number");
        
        await this.move(index1, index2);
        await this.delay();
        
        return this.list;
        // this.list[index1].setAttribute("value", value2);
        // this.list[index2].setAttribute("value", value1);

        // number_disp1.textContent = value2;
        // number_disp2.textContent = value1;

        // this.list[index1].style.height = `${4 * value2}px`;
        // this.list[index2].style.height = `${4 * value1}px`;

    }
}