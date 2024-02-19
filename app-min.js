const algo=document.querySelectorAll(".algo"),userDefined=document.querySelector(".user-defined"),userInput=document.querySelector("input"),sortUserDefined=document.querySelector(".sort-user-defined"),speed=document.querySelector("#speed"),toggleArrow=document.querySelector("#show-input-arrow"),show=document.querySelector(".show-service"),hidePanel1=document.querySelector("#hide-panel1"),hidePanel2=document.querySelector("#hide-panel2"),userService=document.querySelector(".user-defined-input"),menu=document.querySelector(".menu-icon"),algos=document.querySelector(".algos"),closeAnalysis=document.querySelector(".close-analysis"),analysisBtn=document.querySelector(".analysis-btn"),sortBtn=document.querySelector(".sort-btn"),generateNew=document.querySelector(".generate-new"),userDefinedInput=document.getElementById("user-input");let sorted=!1;function getWidth(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}analysisBtn.disabled=!0,menu.addEventListener("click",(function(){algos.classList.toggle("active")}));let time=1;show.addEventListener("click",(function(){userService.classList.toggle("active"),toggleArrow.classList.toggle("active")})),hidePanel1.addEventListener("click",(function(){hidePanel1.querySelector(".show").classList.toggle("active"),parseComparison.classList.toggle("active")})),hidePanel2.addEventListener("click",(function(){hidePanel2.querySelector(".show").classList.toggle("active"),pseudoCode.classList.toggle("active")}));const changeSpeed=e=>(time=Number(e)<=10?1:Number(e)<=20?2:Number(e)<=30?3:Number(e)<=40?4:Number(e)<=50?5:Number(e)<=60?6:Number(e)<=80?7:Number(e)<=90?8:9,time),makeBars=(e,t="")=>{sorted=!1,""==t&&(analysisBtn.disabled=!0);const r=document.querySelector(".display-area");r.innerHTML="";let o=0;for(let n of e){const e=document.createElement("div");e.className="bar",""!=t&&e.classList.add(t),e.setAttribute("data-position",o),o++,e.setAttribute("value",String(n)),e.style.height=5.1*n+"px",e.textContent=n,r.appendChild(e)}};let algoSelected;userDefined.addEventListener("click",(function(){let e=userInput.value.split(","),t=userInput.value;","===t[0]&&e.splice(0,1);for(let r=0;r<t.length;r++){if(","===t[r]&&r!=t.length-1&&","===t[r+1])return void alert("Invalid entry! Please ceck if your input has double commas!");if(" "===t[r]&&r!=t.length-1&&","!=t[r+1]&&0!=r&&(","!=t[r-1]||" "===t[r-1]))return void alert("Invalid entry! Please ceck if your input has double spaces(or space separated)!");r===t.length-1&&","===t[t.length-1]&&e.pop()}if(""==e)return void alert("No number entered!");if(e.length>10)return void alert("Maximum number of inputs is 10, sorry!");for(let t=0;t<e.length;t++){if(e[t]=Number(e[t]),isNaN(e[t]))return void alert("Invalid Input! Entered an alphabet(s) instead of number!");if(e[t]>60||e[t]<10)return void alert("Maximum and minimum number is 60 and 10 respectively, Sorry!")}document.querySelector(".Grid-container").innerHTML="";document.querySelector(".color-code-title").style.display="none",makeBars(e)}));const chooseAlgo=e=>{null!=algoSelected&&algo[Number(algoSelected)].classList.remove("selected"),algoSelected=e,algo[Number(algoSelected)].classList.add("selected")},isSorted=e=>{const t=[];for(let r=0;r<e.length;r++)t.push(Number(e[r].getAttribute("value")));const r=[...t];return r.sort((function(e,t){return e-t})),JSON.stringify(t)===JSON.stringify(r)},sort=async()=>{if(document.querySelector(".color-code-title").style.display="block",algos.classList.contains("active")&&algos.classList.remove("active"),null==algoSelected)return void alert("No alorithm selected!");const e=document.querySelectorAll(".bar");if(!0===sorted&&isSorted(e))return void alert("Already sorted!");generateNew.disabled=!0,sortBtn.disabled=!0,userDefinedInput.disabled=!0,parseComparison.classList.add("active"),pseudoCode.classList.add("active");const t=new sortingAlgorithms(e,time);0===algoSelected&&(ParseComparison(),bubbleSortTraceCode(e.length),sorted=await t.bubbleSort()),1===algoSelected&&(ParseComparison(),selectionSortTraceCode(e.length),sorted=t.selectionSort()),2===algoSelected&&(ParseComparison(),insertionSortTraceCode(e.length),sorted=t.insertionSort()),3===algoSelected&&(ParseComparison(),mergeSortTraceCode(),sorted=t.mergeSort()),4===algoSelected&&(ParseComparison(),quickSortTraceCode(),sorted=t.quickSortAlgo())},randumNumbers=()=>{let e=new Array;for(let t=0;t<10;t++){let t=Math.floor(50*Math.random()+10);e.push(t)}return e},createBars=()=>{sorted=!1,analysisBtn.disabled=!0;let e=randumNumbers();makeBars(e),parseCount=0,comparisonCount=0};window.onload=createBars;