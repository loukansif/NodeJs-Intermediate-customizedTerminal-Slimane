#!/usr/bin/env node
let date;

function displayDate() {
    date = new Date();
    console.log(date.toLocaleDateString("fr"))
    setInterval(()=>{
        date = new Date();
        // console.log(date.);
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    },1000)
}

displayDate();