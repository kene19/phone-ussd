let output = document.querySelector(".output");
let con = document.querySelector(".con");
let btn = document.querySelector(".btn");
let one = document.querySelector(".one");
let show = document.querySelector(".show");
let ok = document.querySelector(".ok");
let ussd = document.querySelector(".ussd");
let err = document.querySelector(".err");
let errbtn = document.querySelector(".errbtn");
let deleteKey = document.querySelector(".delete");
let allKey = document.querySelectorAll(".key");
let ll = "*804#";

for (let key of allKey) {
    key.addEventListener("click", function () {
        kanu = output.innerText += key.innerText;
    })
}
let an = Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click", function () {
    
    console.log(kanu)
    ussd.style.display = "flex";
    setTimeout(() => {
        if (kanu == ll) {
            show.style.display = "block";
            ussd.style.display = "none";
            one.innerHTML = `<p>Dear customer,Your account balance is ${an}.34 Birr
                               With this balance your account will expire on 03/05/2025.ethio telecom
                              </p>`

        } else {
            err.style.display = "flex";
            ussd.style.display = "none";
        }
    }, 2000);
   output.textContent = ''

});

ok.addEventListener("click", function () {
    console.log("ok")
    an = Math.floor(Math.random() * 100) + 1;
    show.style.display = "none";
    console.log(an)
})
errbtn.addEventListener("click", function () {
    console.log("ok")
    an = Math.floor(Math.random() * 100) + 1;
    err.style.display = "none";
    console.log(an)
})
deleteKey.addEventListener("click", function () {
    let textContainerContent = output.innerText;
    if (textContainerContent.length == 0) {
        return;
    }
    console.log(textContainerContent);
    let newContent = textContainerContent.slice(0, textContainerContent.length - 1);
    output.innerText = newContent;
})



