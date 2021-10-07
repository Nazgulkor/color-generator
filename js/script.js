"use strict";

const back = document.querySelector('body');
const button = document.querySelector('.btn');
const span = document.querySelector('.color');
const list = document.querySelector('.list');
const listColors = document.querySelector('.colors');
const paper = document.querySelector('.wellpaper');
const closeIt = document.querySelector('.close');
const showColor = document.querySelector('.wellpaper span');


const addColor = document.createElement('div');
addColor.style.cssText = `
    width : 20px;
    height : 20px;
`;

const coubs = [];

const generateColors = [
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



(function () {
    back.style.backgroundColor = getColor();
    span.textContent = getColor();
    span.style.color = back.style.backgroundColor;
})()


function getColor(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += generateColors[Math.floor(Math.random() * generateColors.length)];
    }
    return color;
}

button.addEventListener('click', () => {
    back.style.backgroundColor = getColor();
    span.textContent = getColor();
    span.style.color = back.style.backgroundColor;
    button.style.color = back.style.backgroundColor;
    const coub = document.createElement('div');
    coub.className = "coubs";
    coub.style.cssText = `
        width : 20px;
        height : 20px;
        background-color : ${back.style.backgroundColor};
        cursor: pointer;
    `;
    listColors.append(coub);
    coubs.push(coub);
    coubs.forEach((item) => {
        item.addEventListener('click', () => {
            paper.style.backgroundColor = item.style.backgroundColor;
            showColor.textContent = item.style.backgroundColor
        })
    })
});

button.addEventListener('mouseover', () => {
    button.style.color = back.style.backgroundColor;
})

button.onmouseout = function() {
    button.style.color = 'black';
}

list.addEventListener('click', () => {
    listColors.classList.toggle("colors-active");
    paper.classList.toggle("wellpaper-active");
    closeIt.classList.toggle('close-active');
    showColor.classList.toggle('show-color-active')
})


list.addEventListener('click', () =>{
    paper.style.backgroundColor = '';
    showColor.textContent = '';
})
closeIt.addEventListener('click', () => {
    listColors.classList.remove('colors-active');
    paper.classList.remove('wellpaper-active');
    closeIt.classList.remove('close-active');
    paper.style.backgroundColor = '';
    showColor.textContent = '';
})




