// mendapatkan element button dengan id "clickme"
// const buttonClickMe = document.querySelector("#clickme");

// mendapatkan element h1
const buttonClickMe = document.querySelector("h1");

// memberikan sebuah nilai kepada attribute "onclick"
buttonClickMe.onclick = function () {
    console.info("You clicked me!");
};

// ketika mouse/pointer berada diatas element maka function akan dijalankan
// buttonClickMe.onmouseover = function () {
//     console.info("don't touch me");
// };

const scream = () => {
    console.info("don't touch me");
};

// bisa menggunakan variable function
buttonClickMe.onmouseover = scream;

/*
    satu element memungkinkan memiliki beberapa property event yang bisa kita tambahkan.

    event "onclick" tidak hanya dimiliki oleh element "button" saja tapi setiap element juga bisa kita tambahkan
*/