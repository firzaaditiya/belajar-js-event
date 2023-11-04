/*
    terkadang kita menemukan sebuah website ketika kita sedang mengisi form, lalu ketika kita submit kita tidak
    diarahkan ke halaman tertentu atau tidak refresh halaman nya, melainkan tetap berada dihalaman yang sama
*/

// mengambil object element form
const form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
    // console.info(event);

    /*
        mencegah halaman dialihkan ke tujuan pada attribute form "action"

        jadi function ini akan mencegah atau mengubah behavior / kebiasaan dari element form ini bagaimana,
        jika pada element form biasanya ketika dia disubmit maka dia akan diarahkan ke tujuan pada attribute
        tag html form yaitu "action"

        jika disini kasusnya dia tidak diarahkan ke "/destination" dan tetap berada pada halaman yang sama
    */
    event.preventDefault();

    console.info("submitted form");
});

// mengubah perilaku pada element <a>
document.querySelector("a").addEventListener("click", function(event) {

    /*
        maka ketika diklik tag link <a>, dia tidak akan diarahkan ke website tujuan atau url tujuan nya
    */
    event.preventDefault();
    console.info("harusnya ke google");
});
