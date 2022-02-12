 
let arr = [""];


let produceNumber = () => {
let arr = [""];
  while (arr.length < 7) {
    let r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1 && r < 91) arr.push(r);
    }
    
  
 
    let arrr = arr.sort();
    while (arr.length < 8) {
        let j = Math.floor(Math.random() * 100) + 1;
        if (arrr.indexOf(j) === -1 && j < 91) arrr.push(j);
    }
    while (arr.length < 9) {
        let ss = Math.floor(Math.random() * 100) + 1;
        if (ss < 91) arrr.push(ss);
    }
  return arrr ;
};
let printNumber = (arr) => {
    return `${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} | ${arr[7]} | ${arr[8]} \n `
     

 }
const span = document.querySelector("#span");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    while (span.childElementCount > 0) span.removeChild(span.lastElementChild);
    let number = document.querySelector("#number").value;
    while (number > 0) {
        const arr = produceNumber();
        span.innerHTML += `<li>${printNumber(arr)} \n </li>`;
        number--;


    }
     
})