let numLoop = 0
setTimeout(() => {
    document.getElementById("tit").innerText = "Happy birthday!!!"
}, 100);
function alphaMain() {
    document.getElementById("main").style.opacity = 0
    setTimeout(() => {
        document.getElementById("timer").style.display = "block"
    }, 200);
}
function alphaCount() {
    document.getElementById("timer").style.opacity = 0
}
function countDown() {
    let timer = document.getElementById("timer")
    time = Number(timer.innerText)
    time--
    timer.innerText = time
    if (numLoop == 5) {
        clearInterval(countDown2)
        setTimeOut(hapbir,2000)
    }
    numLoop++
}
setTimeout(alphaMain, 1000)
setTimeout(alphaCount, 7000)
let countDown2 = setInterval(countDown, 1000);
function hapbir() {
    document.getElementById("img").style.display = "block"
    pl()
}
function pl() {
    document.getElementById("aud").style.display = "block"
}
