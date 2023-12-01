const getcolor = () =>{
    const randomNumber =Math.floor( Math.random() * 16777215);
    // console.log(randomNumber);
    const randomCode = "#"+ randomNumber.toString(16);
    // console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)


}

// event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
// math floor k MTLB KI DECIMAL VALUE KO nearest numberpr li anaa

// iss number ko hexa me convert krna hai


// intital call
getcolor();