const section = document.querySelector("#section");
const paragraf = document.querySelector("#paragraf");
const button = document.querySelector("button");

section.addEventListener("click", () => {
    alert("section click");
});

paragraf.addEventListener("click", () => {
    alert("paragraf click");
});

/*
    event bubbling, jadi ketika sebuah element yang memiliki event click dan pada parent nya juga memiliki suatu event click,
    maka ketika element button diklik, event yang dijalankan tidak hanya button event saja melainkan parent nya juga
*/
button.addEventListener("click", () => {
    alert("button click");
});

// mendapatkan element div dengan id "container"
const container = document.querySelector("#container");

// mendapatkan element button dengan id "changeColor"
const btnChangeColor = document.querySelector("#changeColor");

// fungsi untuk menghasilkan warna rgb secara acak
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};

// event click element button
btnChangeColor.addEventListener("click", (event) => {
    container.style.backgroundColor = generateRandomColor();

    /*
        ini akan menghentikan proses selanjutnya, seperti event pada element parent dari button ini
    */
    event.stopPropagation();
});

// event click element div
container.addEventListener("click", () => {
    /*
        toggle pada classList, adalah ketika belum memiliki class "hide" maka akan ditambahkan jika sudah ada maka
        akan dihapus
    */
    container.classList.toggle("hide");
});