// kita mendapatkan element dan menyambungkan beberapa function sekaligus
document.querySelector("button").addEventListener("click", (event) => {
    // melihat isi event
    console.info(event);
});

// mendapatkan element input
const input = document.querySelector("input");

// jadi ketika kita menekan sebuah tombol pada keyboard maka akan menampilkan sebuah string pada console
// input.addEventListener("keydown", () => {
//     console.info("Tombol ditekan");
// });

// ketika kita melepas tombol setelah menekannya maka function ini akan dijalankan
// input.addEventListener("keyup", () => {
//     console.info("Tombol dilepas");
// });

// melihat object event dan kegunaan nya dalam studi kasus key
input.addEventListener("keydown", (event) => {
    // console.info(event.key);
    // console.info(event.code);

    // membuat seleksi tombol
    switch(event.code) {
        case "ArrowUp":
            console.info("Tombol Arah Atas");
            break;
        case "ArrowRight":
            console.info("Tombol Arah Kanan");
            break;
        case "ArrowDown":
            console.info("Tombol Arah Bawah");
            break;
        case "ArrowLeft":
            console.info("Tombol Arah Kiri");
            break;
        default:
            console.info("Diabaikan");
    }
});