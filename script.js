function insert_Row() {
let table= document.getElementById('sampleTable');
	let newrow = table.insertRow();
	let cell1 = newrow.insertCell(0);
	let cell2 = newrow.insertCell(1);
	cell1.textContent = 'new cell1';
	cell2.textContent = 'new cell2';
}
