// for (let index = 1; index <= 100; index++) {
//     (function (num) {
//       setTimeout(function timer() {
//         document.getElementById("num").innerHTML = num;
//         document.getElementById("num").style.display = "block";
//       }, num * 90);
//     })(index);
//   }



// for (let index = 1; index <= 100; index++) {
//     setTimeout(function timer(){
//         document.getElementById("num").innerHTML = index;
//         document.getElementById("num").style.display = "block";
//     }, index * 90);
// }



// document.getElementById("num").style.display = "block";
// var c = 0;
// var loading = setInterval(() => {
//     document.getElementById("num").innerHTML = c;
//     c++;
//     if(c == 101)
//         clearInterval(loading);
// }, 90);



// let start = new Date();
// let current = new Date();
// let count = +current - +start;
// setTimeout((function timer(){
//     current = +new Date();
//     count = +current - +start;
//     console.log(count);
// }), 10)
// console.log(count);




document.getElementById("num").style.display = "block";

const timer = (fn, time = 100) => {
    let nextAt, timeout;
    nextAt = new Date().getTime() + time;

    const wrapper = () => {
        nextAt += time;
        timeout = setTimeout(wrapper, nextAt - new Date().getTime());
        fn();
    }

    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
};

let time, elapsedSeconds = 0;

time = timer(() => {
    elapsedSeconds++;
    let seconds = elapsedSeconds;
    if(elapsedSeconds <= 100)
        document.getElementById("num").innerHTML = seconds;
});