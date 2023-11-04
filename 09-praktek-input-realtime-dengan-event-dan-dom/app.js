// mendapatkan object element form dengan id "form"
const form = document.querySelector("#form");

// mendapatkan object element input
const input = document.querySelector("input");

// mendapatkan object element ul dengan id "notes"
const list = document.querySelector("#notes");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // mendapatkan value dari tag input yang disubmit
    const noteValue = input.value;

    // membuat sebuah element li
    const newList = document.createElement("li");

    // menambahkan sebuah string atau text pada element li
    newList.append(noteValue);

    // console.info(newList);

    // menambahkan element li yang sudah memiliki value ke dalam element ul
    list.insertAdjacentElement("beforeend", newList);

    // bisa juga menggunakan appendChild()
    // list.appendChild(newList);

    // mengubah value menjadi kosong agar setelah submit, form input text kembali fresh
    input.value = "";
});