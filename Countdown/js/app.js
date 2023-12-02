// const endDate = "28 oct 2023 10:00 PM"

// document.getElementById("end-date").innerText =endDate;
// const inputs = document.querySelectorAll("input")

// WE USE DATE OBJECT FOR COUNTING- BASICALLY WO HUMLOGO KISI YA PARTICUALR DATE KA TIMESTAMP BANKR DET hai jo first jan 1978 se abtk ke  milisecind hote hai

// const clock = () =>


// function clock(){
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = (end - now) /1000;
    // humare pass jo aa rha milisecond me hai usko hum 1000 se divide kreke second me change krdege ,aur phir usse second ko days me
    // console.log(diff);
    // convert into days;
    // inputs[0].value = Math.floor(diff/3600/24);
    // convert into remaining hours
    // inputs[1].value = Math.floor(diff/3600)%24;
        // convert into minutes
    // inputs[2].value = Math.floor(diff/60)%60;
        // convert into seconds
    // inputs[3].value = Math.floor(diff)%60;

    
// }
// initial call
// clock()
//  1day = 24hrs
//  1hr = 60mins
// 60 mins = 3600 sec

// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )

const endDate = "26 March 2024 11:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)