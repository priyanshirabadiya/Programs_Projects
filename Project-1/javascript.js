let a = document.getElementById('touuper')
let b = document.getElementById('tolower')
let c = document.getElementById('changecolor')
let d = document.getElementById('countletter')
let e = document.getElementById('countword')
let nums = document.getElementById('countnumbers');
let special = document.getElementById('countspecial');
let copybtn = document.getElementById('copy-button');

let input = document.querySelector('input')
console.log(a);
console.log(b);
console.log(c);

const upper = () => {
    input.value = input.value.toUpperCase();
}

const lower = () => {
    input.value = input.value.toLowerCase();
}



const letters = () => {
    let text = input.value;
    let countl = 0;
    let extra = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[a-zA-Z]/)) {
            countl++;
        } else {
            extra++;
        }
    }
    input.value = `Alphabets are: ${countl}`;
}

const numbers = () => {
    let text = input.value;
    let countN = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[0-9]/)) {
            countN++;
        }
    }
    input.value = ` Numbers are : ${countN}`;
}

const specialchar = () => {
    let text = input.value;
    let extra = 0;
    for (let i = 0; i < text.length; i++) {
        if (!text[i].match(/[a-zA-Z0-9]/)) {
            extra++;
        }
    }
    input.value = ` Special characters are: ${extra}`;
}


const words = () => {
    let text = input.value.trim().split(' ');
    let countW = text.length;
    input.value = `Words are : ${countW}`;
}


const copycode = () => {
    // input.select();
    // document.execCommand('copy'); // Copy the selected text to the clipboard
    // alert('Text copied to clipboard!');
    navigator.clipboard.writeText(input.value)
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

const style = () => {
    let color = prompt("Enter text color (e.g., red, blue, #00ff00):");
    input.style.color = color;
}


a.addEventListener('click', upper);
b.addEventListener('click', lower);
c.addEventListener('click', style);
d.addEventListener('click', letters);
e.addEventListener('click', words)
nums.addEventListener('click', numbers)
special.addEventListener('click', specialchar);
copybtn.addEventListener('click', copycode);

