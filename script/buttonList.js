
const buttons = document.querySelectorAll("a.button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert('Ошибка!\nДанный магазин находиться в разработке...')
    });
})


