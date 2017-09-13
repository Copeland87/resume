var para = document.querySelector('p')

para.addEventListener('click', updateName);

function updateName() {
	var name = prompt('Enter Your Name');
	para.textContent = 'Welcome, ' + name;
}