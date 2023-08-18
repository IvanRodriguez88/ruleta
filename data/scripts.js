$( document ).ready(function() {
	options = ["Prueba", "Prueba", "Prueba", "Prueba", "Prueba"];
	init()
	drawRouletteWheel();
});

$("#spin").on('click', () => {
	spin()
})