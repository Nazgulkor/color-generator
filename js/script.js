"use strict";

const back = document.querySelector('.container');
const button = document.querySelector('.btn');
const span = document.querySelector('.color');
const colors = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
];



function getColor(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += colors[Math.floor(Math.random() * colors.length)];
    }
    return color
}

button.addEventListener('click', () =>{
    back.style.backgroundColor = getColor();
    span.textContent = getColor();
    span.style.color = back.style.backgroundColor;
});




