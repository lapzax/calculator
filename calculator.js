$(function () {

	var currentText = '';
	var temp = '';
	var ans = '';
	var opt = '';

	function render() {
		$('#msg').text(currentText);	
	}
	
	//Numbers
	$('#btn7').on('click', function () {
		if(currentText==''){
			currentText = currentText + '7';
			render();
		}else if(currentText=='0'){
			currentText = '7'
		}else{
			currentText = currentText + '7';
			render();
		}
	})
	$('#btn8').on('click', function () {
		if(currentText==''){
			currentText = currentText + '8';
			render();
		}else if(currentText=='0'){
			currentText = '8'
		}else{
			currentText = currentText + '8';
			render();
		}
	})
	$('#btn9').on('click', function () {
		if(currentText==''){
			currentText = currentText + '9';
			render();
		}else if(currentText=='0'){
			currentText = '9'
		}else{
			currentText = currentText + '9';
			render();
		}
	})

	$('#btn4').on('click', function () {
		if(currentText==''){
			currentText = currentText + '4';
			render();
		}else if(currentText=='0'){
			currentText = '4'
		}else{
			currentText = currentText + '4';
			render();
		}
	})
	$('#btn5').on('click', function () {
		if(currentText==''){
			currentText = currentText + '5';
			render();
		}else if(currentText=='0'){
			currentText = '5'
		}else{
			currentText = currentText + '5';
			render();
		}
	})
	$('#btn6').on('click', function () {
		if(currentText==''){
			currentText = currentText + '6';
			render();
		}else if(currentText=='0'){
			currentText = '6'
		}else{
			currentText = currentText + '6';
			render();
		}
	})

	$('#btn1').on('click', function () {
		if(currentText==''){
			currentText = currentText + '1';
			render();
		}else if(currentText=='0'){
			currentText = '1'
		}else{
			currentText = currentText + '1';
			render();
		}
	})
	$('#btn2').on('click', function () {
		if(currentText==''){
			currentText = currentText + '2';
			render();
		}else if(currentText=='0'){
			currentText = '2'
		}else{
			currentText = currentText + '2';
			render();
		}
	})
	$('#btn3').on('click', function () {
		if(currentText==''){
			currentText = currentText + '3';
			render();
		}else if(currentText=='0'){
			currentText = '3'
		}else{
			currentText = currentText + '3';
			render();
		}
	})

	$('#btn0').on('click', function () {
		currentText = currentText + '0';
		render();
	})
	
	//Operators
	$('#btnDivide').on('click', function () {
		if(currentText==''){
			render();
		}else if(currentText!=''){
			temp = temp + currentText;
			currentText = '';
			opt = 'Divide';
		}	
	})
	$('#btnMultiply').on('click', function () {
		if(currentText==''){
			render();
		}else if(currentText!=''){
			temp = temp + currentText;
			currentText = '';
			opt = 'Mutiply';
		}	
	})
	$('#btnMinus').on('click', function () {
		if(currentText==''){
			currentText = '-' + currentText;
			render();
		}else if(currentText!=''){
			temp = temp + currentText;
			currentText = '';
			opt = 'Minus';
		}		
	})
	$('#btnAdd').on('click', function () {
		if(currentText==''){
			render();
		}else if(currentText!=''){
			temp = temp + currentText;
			currentText = '';
			opt = 'Add';
		}		
	})

	$('#btnC').on('click', function () {
		currentText = '0';
		render();
	})

	$('#btnEqual').on('click', function () {
		switch(opt){
			case 'Divide':
				ans = ans + (temp/currentText);
				opt = '';
				break;
			case 'Mutiply':
				ans = ans + (temp*currentText);
				opt = '';
				break;
			case 'Minus':
				ans = ans + temp - currentText;
				opt = '';
				break;
			case 'Add':
				ans = ans + temp + currentText;
				opt = '';
				break;
		}
		$('#msg').text(ans);
	})
	
	
	
})