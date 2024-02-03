const lessons = document.querySelector('main');
function showConsole() {
    console.log('Ура!');
    alert('Вы нажали кнопку ' + event.target.value);
};
let x = "dddd";
lessons.addEventListener("click", function (event) {
    if (event.target.closest('.cart-button')) {
        showConsole();
        console.log(event.target.value);
        event.target.insertAdjacentHTML(
            "afterend",
            `<div id="min">``</div>`

        );
        document.getElementById("min").innerHTML = min;
    }
});
