var images = [
'g.jpg',
'h.jpg',
'i.jpg',
'j.jpg',
'k.jpg',
'l.jpg',
'm.jpg',
'b.jpg',
'o.jpg',
'f.jpg',
'c.jpg',
'd.jpg',
'e.jpg'
]

var num = 0;

function next() {
var slider =
document.getElementById("slider");

num++;
if(num >= images.length) {
num = 0;
}
slider.src=images[num];
}

function prev() {
var slider =
document.getElementById("slider");

num--;
if(num < 0) {
num = images.length-1;
}
slider.src = images[num];
}

// sweet code
