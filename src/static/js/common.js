$(document).ready(function () {
    $(".burger").click(function () {
        $(this).toggleClass('is-active');
        $('.dropdown-menu').toggleClass('is-active');
    });

    $('.select select').selectric();
});
