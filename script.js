//---------------------------------------Slideshow--------------------------------------------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//-----------------------InputInterface---------------------------------------------------------

function localeString(x, sep, grp) {
    var sx = ('' + x).split('.'),
        s = '',
        i, j;
    sep || (sep = ' ');
    grp || grp === 0 || (grp = 3);
    i = sx[0].length;
    while (i > grp) {
        j = i - grp;
        s = sep + sx[0].slice(j, i) + s;
        i = j;
    }
    s = sx[0].slice(0, i) + s;
    sx[0] = s;
    return sx.join('.');
}

function myFunction_1() {
    const price = 42000;
    const night = document.getElementById("night").value;
    const member = document.getElementById("member").value;
    var sum = night * member * price;
    document.getElementById("sum").innerHTML = 'Ár: ' + localeString(sum) + 'Ft';
}

function myFunction_2() {
    const price = 92000;
    const night = document.getElementById("night").value;
    const member = document.getElementById("member").value;
    var sum = night * member * price;
    document.getElementById("sum").innerHTML = 'Ár: ' + localeString(sum) + 'Ft';
}

function myFunction_3() {
    const price = 10900;
    const night = document.getElementById("night").value;
    const member = document.getElementById("member").value;
    var sum = night * member * price;
    document.getElementById("sum").innerHTML = 'Ár: ' + localeString(sum) + 'Ft';
}