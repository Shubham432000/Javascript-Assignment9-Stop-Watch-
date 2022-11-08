let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;
function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
    timer = false;
     hr=0;
     min=0;
     sec=0;
     count=0;

     document.getElementById("hr").innerHTML="00";
     document.getElementById("min").innerHTML="00";
     document.getElementById("sec").innerHTML="00";
     document.getElementById("count").innerHTML="00";
}

function stopwatch() {
  if (timer == true) {
    count++;

    if (count == 100) {
      sec++;
      count = 0;
    }
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 60){
        hr++;
        min = 0;
        sec = 0;
    }
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;
    setTimeout("stopwatch()", 10);
  }
}

// let count=0;
// let count1=0;
// let count2=0;

// let Value = document.getElementById("value")
// let Value1 = document.getElementById("value1")
// let Value2 = document.getElementById("value2")

// function Start(){
//     setInterval(() => {
//         count++;
//         Value.textContent = count

//     }, 5000);

//     setInterval(()=>{
//         count1++;
//         Value1.textContent = count1
//     },60000)

//     setInterval(()=>{
//         count2++;
//         if(count2 == 60){
//             Value2.textContent = 0;
//         }
//         Value2.textContent = count2
//     },100)
// }
