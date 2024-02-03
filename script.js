setGrid(16, 16)
activateCells()

function setGrid(width, height) {
	let gridContainer = document.querySelector("#gridContainer")
	for (let i = 0; i < width; i++) {
		let gridColumn = document.createElement("div")
		gridColumn.classList.add("gridColumn")
		for (let j = 0; j < height; j++) {
			let gridCell = document.createElement("div")
			gridCell.classList.add("gridCell")
			gridColumn.appendChild(gridCell)
		}
		gridContainer.appendChild(gridColumn)
	}
}

function activateCells() {
	let wakeCells = document.querySelectorAll(".gridCell")
	wakeCells.forEach((cell) => {
		cell.addEventListener("mouseenter", (e) => {
			e.target.style.backgroundColor = "black"
		})
	})
}
