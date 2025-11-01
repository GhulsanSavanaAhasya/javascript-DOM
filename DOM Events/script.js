const title = document.getElementById('title');
const btn = document.querySelector('#btn');
const p = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++){
//     p[i].onclick = function(){
//         p[i].style.backgroundColor = 'red';
//     }
// }
// for(let i = 0; i < p.length; i++){
//     p[i].onclick = function(){
//         p[i].style.color = 'blue';
//     }
// }

for(let i = 0; i < p.length; i++){
    p[i].addEventListener('click', function(){
        p[i].style.backgroundColor = "red";
    });
}
for(let i = 0; i < p.length; i++){
    p[i].addEventListener('click', function(){
        p[i].style.color = "blue";
    });
}

// p.onclick = function(){
//     p.style.color = 'blue';
// }


title.addEventListener('click', () => {
    title.style.backgroundColor = 'lightgreen';
});

btn.addEventListener('click', () => {
    const newLi = document.createElement('li');
    const ul = document.querySelector('section#sectionB ul li:nth-child(1)');
    newLi.textContent = 'This is a new list item by click button';
    ul.before(newLi);
});

const delBtn = document.getElementById('del-btn');
const link = document.querySelector('section#sectionA a');
delBtn.addEventListener('click', () => {
    link.remove();
});

const changeBgColor = document.querySelector('#change-bg-btn');
changeBgColor.addEventListener('click', () => {
    document.body.style.backgroundColor = "#ef2f";
});
