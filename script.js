const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.querySelector("table")
let itemPrice = document.querySelectorAll(".price")

const getSum = () => {
	let newRow = document.createElement("tr")
	newRow.id = "ans"
	let newCell = document.createElement("td")
	let totalPrice = 0
	for(let t of itemPrice){
		totalPrice += +t.innerText
	} 
	newCell.innerText = `${totalPrice}`
	newRow.append(newCell)
	table.append(newRow)
};

getSumBtn.addEventListener("click", getSum);

