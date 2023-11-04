// function untuk menghasilkan warna dengan format rgb secara acak
const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// mendapatkan seluruh object element button
const buttons = document.querySelectorAll("button");

/*
// melakukan perulangan pada seluruh element button dan menambahkan eventListener "click"
for (const button of buttons) {
    button.addEventListener("click", () => {
        // merubah warna background
        button.style.backgroundColor = generateRandomColor();

        // merubah warna text button
        button.style.color = generateRandomColor();

        console.info(this);
    });
}
*/

const headings = document.querySelectorAll("h1");

/*
// melakukan perulangan pada seluruh element button dan menambahkan eventListener "click"
for (const heading of headings) {
    heading.addEventListener("click", () => {
        // merubah warna background
        heading.style.backgroundColor = generateRandomColor();

        // merubah warna text heading
        heading.style.color = generateRandomColor();
    });
}
*/

// ada code yang lebih singkat lagi dengan memanfaatkan keyword this
function colorize() {
    // kata kunci this ini mengacu pada object element yang sedang dipilih
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}

for (const button of buttons) {
    /*
        jadi pada callback function kita hanya perlu memasukan function colorize() untuk mengubah
        background dan warna text dari element
    */
    button.addEventListener("click", colorize);
}

for (const heading of headings) {
    heading.addEventListener("click", colorize);
}