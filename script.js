let gridContainer = document.querySelector("#gridContainer")

setGrid(16)
activateCells()

function setGrid(squaresPerSide) {
	for (let i = 0; i < squaresPerSide; i++) {
		let gridColumn = document.createElement("div")
		gridColumn.classList.add("gridColumn")
		for (let j = 0; j < squaresPerSide; j++) {
			let gridCell = document.createElement("div")
			gridCell.classList.add("gridCell")
			gridColumn.appendChild(gridCell)
		}
		gridContainer.appendChild(gridColumn)
	}
	console.log("setGrid")
}

function activateCells() {
	let cells = document.querySelectorAll(".gridCell")
	cells.forEach((cell) => {
		cell.addEventListener("mouseenter", (e) => {
			e.target.style.backgroundColor = "black"
		})
	})
}

document.body.addEventListener("click", promptForReset)

function promptForReset() {
	if (confirm("Do you want to reset the grid?")) {
		let squaresPerSide = prompt("How many squares per side do you want?")
		while (
			!Number(squaresPerSide) ||
			squaresPerSide < 1 ||
			squaresPerSide > 100) {
				squaresPerSide = prompt("How many squares per side do you want?")
		}
		console.log(squaresPerSide)
		squaresPerSide && resetGrid(squaresPerSide)
	}
}

function resetGrid(squaresPerSide) {
	console.log("resetGrid")
	gridContainer.textContent = ""
	setGrid(squaresPerSide)
	activateCells()
}
