//document.getElementById()
//document.getElementsByTagName()
//document.getElementsByClassName()
//document.querySelector()
//document.querySelectorAll()

const title = document.getElementById('title');
const p = document.getElementsByTagName('p');
const list = document.getElementsByClassName('list');
const p2 = document.querySelector('#sectionA p');
const li2 = document.querySelector('section#sectionB ul li:nth-child(2)');
const pall = document.querySelectorAll('p');



list[0].style.backgroundColor = 'blue';
li2.style.backgroundColor = 'yellow';

for(let i = 0; i < p.length; i++){
    p[i].style.color = 'red';
}
pall[0].style.color = 'green';


title.innerHTML = 'Hello World';
p2.innerHTML = 'Hai (Ini p)';