const form = document.querySelector("#form");

const input = document.querySelector("input");

const list = document.querySelector("#notes");

/*
    ketika value pada input berubah maka event akan dijalankan, ketika sudah mengetik value dan kita cancel
    focus maka value akan di assign ke dalam "input.value"

    event ini akan berjalan ketika kita mengetikan sebuah value atau mengubah value inputan
*/
input.addEventListener("change", (event) => {
    console.info("nilai berubah");
});

/*
    event ini akan dijalankan ketika kita menginputkan sebuah value yang bisa dimasukan ke dalam inputan, misalkan
    kita menginputkan string "makan" maka event ini akan berjalan sebanyak 5 kali, berlaku juga ketika kita menghapus
    sebuah inputan menggunakan "backspace"
*/
input.addEventListener("input", (event) => {
    // mendapatkan element h1
    document.querySelector("h1").innerText = input.value; // maka text pada h1 akan berubah secara realtime

    console.info("nilai berhasil diinput");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const noteValue = input.value;
    
    const newList = document.createElement("li");

    newList.append(noteValue);

    list.insertAdjacentElement("beforeend", newList);

    input.value = "";
});