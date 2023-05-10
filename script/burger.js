
let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    document.querySelector('.dropdownn_content').classList.toggle('open');
})


