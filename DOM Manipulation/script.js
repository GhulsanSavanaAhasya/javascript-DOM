// ---------------------------------------------------->
//setAttribute
//getAttribute
//removeAttribute
// const p1 = document.getElementById('p1');
// const judul = document.getElementsByTagName('h1')[0];
// const link = document.querySelector('section#sectionA a');

// p1.innerHTML = "<em><strong>Hello World!</strong></em>";
// judul.setAttribute('name', 'judul');
// link.getAttribute('href');

// link.removeAttribute('href');
// ----------------------------------------------------->


// ----------------------------------------------------->
//classList
const p1 = document.getElementById('p1');
const body = document.body;
const btnTogle = document.getElementById('togle');

// classList.add()
p1.classList.add('label', 'name', 'paragraph');
// classList.remove()
p1.classList.remove('name');
// classList.toggle()
body.classList.toggle('body-bg-color');
body.classList.toggle('body-bg-color');
body.classList.toggle('body-bg-color');
body.classList.toggle('body-bg-color');

btnTogle.addEventListener('click', function(){
    body.classList.toggle('body-bg-color');
});

// classList.item()
console.log(p1.classList.item(1));
// classList.contains
console.log(p1.classList.contains('name'));
console.log(p1.classList.contains('paragraph'));

// classList.replace
console.log(p1.classList.replace('label', 'name'));