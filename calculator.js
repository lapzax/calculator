$(function () {
	var curentText = '';
	
	function render () {
		$('#msg').text(curentText);	
	}
	
	$('#btn7').on('click', function () {
		curentText = curentText + '7';
		render();
	})
	$('#btn8').on('click', function () {
		curentText = curentText + '8';
		render();
	})
	$('#btn9').on('click', function () {
		curentText = curentText + '9';
		render();
	})
	/*
	$('#btnDivide').on('click', function () {
		curentText = curentText + '2';
		render();
	})
	*/
	$('#btn4').on('click', function () {
		curentText = curentText + '4';
		render();
	})
	$('#btn5').on('click', function () {
		curentText = curentText + '5';
		render();
	})
	$('#btn6').on('click', function () {
		curentText = curentText + '6';
		render();
	})
	/*
	$('#btnMultiply').on('click', function () {
		curentText = curentText + '2';
		render();
	})
	*/
	$('#btn1').on('click', function () {
		//alert('hello jquery');
		curentText = curentText + '1';
		render();
		//$('#msg').addClass('green');
	})
	$('#btn2').on('click', function () {
		curentText = curentText + '2';
		render();
	})
	$('#btn3').on('click', function () {
		curentText = curentText + '3';
		render();
	})
	
	$('#btnMinus').on('click', function () {
		curentText = '-' + curentText + '2';
		render();
	})
	
	$('#btnC').on('click', function () {
		curentText = '';
		render();
	})
	$('#btn0').on('click', function () {
		curentText = curentText + '0';
		render();
	})
	/*
	$('#btnEqual').on('click', function () {
		curentText = curentText + '2';
		render();
	})
	*/
	/*
	$('#btnAdd').on('click', function () {
		curentText = curentText + '2';
		render();
	})
	*/

	
});