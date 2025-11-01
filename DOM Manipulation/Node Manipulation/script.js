// // Node Manipulation

// -----------------------------------------------------------
// // create a new element
// const newP = document.createElement('p');
// // create text for new element
// const newTextP = document.createTextNode('New Paragraph');
// // add text to the new element
// newP.appendChild(newTextP);
// // add a new element wherever you want (at the end)
// const sectionaA = document.querySelector('#sectionA');
// sectionaA.appendChild(newP);
// -----------------------------------------------------------
// insertBefore()
// const newList = document.createElement('li');
// const newLiText = document.createTextNode('New List Item');

// newList.appendChild(newLiText);

// const listItem1 = document.querySelector('section#sectionB ul');
// // const listItem2 = document.querySelector('section#sectionB ul li:nth-child(2)');
// const listItem2 = listItem1.querySelector('li:nth-child(3)');
// listItem1.insertBefore(newList, listItem2);
// -----------------------------------------------------------
// new way
// const newP = document.createElement('p');
// const newP2 = document.createElement('h2');
// newP.textContent = 'This is a new paragraph';
// newP2. textContent = 'Replace with input range';
// const sectionA = document.getElementById('sectionA');
// const title = document.getElementsByTagName('h1')[0];
// const link = document.querySelector('section#sectionA a');
// const input = document.querySelector('section#sectionB input');
// title.before(newP);
// title.after(newP);
// sectionA.append(newP);
// sectionA.prepend(newP);
// newP.remove();

// sectionA.removeChild(link);
// // link.remove();

// // input.remove();
// input.replaceWith(newP2);

const addBtn = document.getElementById('add-btn');
const newP = document.createElement('p');
const sectionA = document.getElementById('sectionA');
let i = 0

addBtn.addEventListener('click', () =>{
    const newP = document.createElement('p');
    i++;
    newP.textContent = `Add new paragraph ${i}`;
    sectionA.append(newP);
});