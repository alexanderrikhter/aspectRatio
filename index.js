document.getElementById('ratio-width').onchange = function() {changeWidthRatio()};
document.getElementById('ratio-height').onchange = function() {changeHeightRatio()};
document.getElementById('width').onchange = function() {changeWidth()};
document.getElementById('height').onchange = function() {changeHeight()};

let width = document.getElementById('width').value;
let height = document.getElementById('height').value;
let heightRatio = document.getElementById('ratio-height').value;
let widthRatio = document.getElementById('ratio-width').value;

function changeWidthRatio() { 
    height = document.getElementById('height').value;
    heightRatio = document.getElementById('ratio-height').value;
    widthRatio = document.getElementById('ratio-width').value;
    document.getElementById('width').value = height/heightRatio*widthRatio;
}

function changeHeightRatio() {
    width = document.getElementById('width').value;
    widthRatio = document.getElementById('ratio-width').value;
    heightRatio = document.getElementById('ratio-height').value;
    document.getElementById('height').value = width*heightRatio/widthRatio;
}

function changeWidth() {
    width = document.getElementById('width').value;
    heightRatio = document.getElementById('ratio-height').value;
    widthRatio = document.getElementById('ratio-width').value;
    document.getElementById('height').value = (width*heightRatio/widthRatio).toFixed(1);
}

function changeHeight() {
    height = document.getElementById('height').value;
    heightRatio = document.getElementById('ratio-height').value;
    widthRatio = document.getElementById('ratio-width').value;
    document.getElementById('width').value = (height*widthRatio/heightRatio).toFixed(1);
}