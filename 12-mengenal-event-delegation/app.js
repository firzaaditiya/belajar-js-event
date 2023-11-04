/*
    event delegation, adalah suatu event yang mewakili suatu element yang kita kenakan event listener, namun yang dieksekusi
    adalah hal lain
*/

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

    // menambahkan element li yang sudah memiliki value ke dalam element ul
    list.insertAdjacentElement("beforeend", newList);

    input.value = "";
});

/*
const lis = document.querySelectorAll("li");
for (const li of lis) {
    li.addEventListener("click", () => {
        // bisa menggunakan ini yang support browser lama
        // li.parentElement.removeChild(li);

        // bisa gunakan ini, namun hanya support browser modern fitur remove()
        li.remove();
    });
}
*/

list.addEventListener("click", (event) => {
    // console.info(event);
    // kita bisa memanfaatkan property target, karena dia mengacu pada element yang diklik yaitu li
    // event.target.remove();

    // console.dir(event.target);

    /*
        menambahkan sebuah validasi agar hanya nodeName "LI" atau element li yang bisa dihapus

        jadi nodeName harus "LI" baru akan dieksekusi kode

        event.target.remove();
    */
    event.target.nodeName === "LI" && event.target.remove();
});