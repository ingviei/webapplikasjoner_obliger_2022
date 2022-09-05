// Oppgave 1

const deleteButton = document.getElementById('remove-btn');
const text = document.getElementById('remove');

function deleteText () {
text.innerHTML = null;
};

deleteButton.addEventListener('click', deleteText, false); 


//Oppgave 2
const changebtn = document.querySelector('#change-btn');
const change = document.querySelector('#change');

function changeText () {
    change.innerHTML = "Dette er en ny tekst som endrer opprinnelig paragraf";
}

changebtn.addEventListener('click', changeText, false);

// Oppgave 3

const receivedInput = document.getElementById("input");

function assignText() {
    const textInput = document.getElementById("input").value;
    document.getElementById("input-text").innerHTML = textInput;
  }

  receivedInput.addEventListener('input', assignText, false); 
  

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

const btnList = document.querySelector('#write-list');
const ul4 = document.querySelector('#ul');

btnList.onclick = () => {
    myList.forEach(elem => {
        const liElement = document.createElement('li');
        liElement.appendChild(document.createTextNode(elem)); 
        ul4.appendChild(liElement);
    })
}


// Oppgave 5 
const btnCreateElement = document.querySelector('#create');
const divBody = document.querySelector('#placeholder'); 

btnCreateElement.onclick = () => {    
    const dropdown = document.querySelector('#select');
    const newElement = dropdown.value;
    const newHtml = document.createElement(newElement);
    const textInput = document.getElementById("text").value;
    newHtml.appendChild(document.createTextNode(textInput));
    divBody.appendChild(newHtml);
}


// Oppgave 6
const btnRemoveList = document.querySelector('#remove-li');
const ul6 = document.querySelector('#list');

btnRemoveList.onclick = () => {
    ul6.removeChild(ul6.childNodes[1]);        
}




// Oppgave 7
const inputMax = document.getElementById("name");
const max_4 = 4; 


function checkLength() {
    const x = document.getElementById("name").value;
    if (x.length > max_4) {
    let btn_max4 = document.getElementById("order").disabled = true; 
    
}
}
  inputMax.addEventListener('input', checkLength, false); 
  


// Oppgave 8
const nodeList = document.querySelector('.children').querySelectorAll('li');
const btnColor = document.querySelector('#color');

function selectColor() {
for (let  i = 0; i <= nodeList.length; i++) {
    nodeList[i].style.borderStyle = 'solid';
    if ((i + 1) % 2 === 0) {    
        nodeList[i].style.borderColor = 'pink'; 
    }
    else { 
    nodeList[i].style.borderColor = 'green'; 
    }
    }
}


btnColor.addEventListener('click', selectColor, false); 
