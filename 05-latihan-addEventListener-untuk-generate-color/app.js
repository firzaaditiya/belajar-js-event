// mendapakatkan object element button
const button = document.querySelector("button");

// mendapatkan object element h1
const h1 = document.querySelector("h1");

// membuat arrow function untuk menghasilkan warna secara acak
const generateRandomColor = () => {
    // red
    const r = Math.floor(Math.random() * 255); // menghasilkan nilai acak 0-255

    // green
    const g = Math.floor(Math.random() * 255);

    // blue
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};

// ketika button diklik maka akan mengubah warna background dengan rgb yang dihasilkan secara acak
button.addEventListener("click", function () {
    // menyimpan nilai rgb acak kedalam variable newColor
    const newColor = generateRandomColor();

    // menampilkan ke console browser
    console.info(newColor);

    // mengubah style warna background element body
    document.body.style.backgroundColor = newColor;

    // mengubah text element h1, menjadi nilai rgbColor yang dihasilkan secara acak
    h1.innerText = newColor;
});