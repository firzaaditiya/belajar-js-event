const eventbtn = document.querySelector("#eventbtn");

/*
    event listener akan mengeksekusi callback atau funtion pda saat element tersebut dieksekusi
    atau dijalankan event nya

    https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
    
    https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

    ini adalah cara yang lebih elegan dan disarankan, ini mempermudah dalam penulisan code
*/
// eventbtn.addEventListener("click", () => {
//     alert("clicked");
// });

function stepSatu() {
    console.info("step satu");
}

function stepDua() {
    console.info("step dua");
}

/*
    ketika kita melakukan ini dengan harapan kedua function akan dieksekusi, maka ini tidak bisa karena "stepSatu" akan
    ditimpa oleh "stepDua"
*/
// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;

// ketika kita menggunakan addEventListener, kita bisa menjalankan lebih dari 1 function, ini kelebihan nya
eventbtn.addEventListener("click", stepSatu);
eventbtn.addEventListener("click", stepDua);