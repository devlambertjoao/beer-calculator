const maxPriceElement = document.getElementById("maxPrice")
const sizeElement = document.getElementById("size")
const beerPriceElement = document.getElementById("beerPrice")
const resultElement = document.getElementById("result")

function calculate() {
	const buyMessage = "Buy This Beer NOW!!!!";
	const notBuyMessage = "Drink water! This beer is expensive :(";

	const maxPrice = +maxPriceElement.value;
	const size = +sizeElement.value;
	const beerPrice = +beerPriceElement.value;

	const result = (beerPrice / size) * 1000;

	resultElement.innerHTML = `
		<span>Price per Liter: R$${result.toFixed(2)}</span>
		<span>${result <= maxPrice ? buyMessage : notBuyMessage}</span>
	`
}

maxPriceElement.addEventListener("change", () => calculate())
sizeElement.addEventListener("change", () => calculate())
beerPriceElement.addEventListener("change", () => calculate())

calculate();


navigator.serviceWorker && navigator.serviceWorker.register('./serviceWorker.js').then(function(registration) {  
	console.log(`SW Registred with scope: ${registration.scope}`);
});
