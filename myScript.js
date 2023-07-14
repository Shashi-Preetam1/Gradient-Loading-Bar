for (let index = 1; index <= 100; index++) {
    setTimeout(function timer(){
        document.getElementById("num").innerHTML = index;
        document.getElementById("num").style.display = "block";
    }, index * 90);
}