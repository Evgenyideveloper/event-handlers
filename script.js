

const button = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const buttonCircle = document.getElementById('e_btn');
const range = document.getElementById('range');
const circle = document.getElementById('circle');


const buttonClick =()=>{
	let text = input.value
	square.style.backgroundColor = text;
}
button.addEventListener('click', buttonClick);

const displayNone =()=>{
	buttonCircle.style = "display: none";
}
buttonCircle.addEventListener('click', displayNone);

const rangeInput = function(){	
	circle.style.width = this.value + '%';
	circle.style.height = this.value + '%';	
}
range.addEventListener('input', rangeInput);
