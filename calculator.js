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
		currentText += '7';
		render();
	})
	$('#btn8').on('click', function () {
		currentText += '8';
		render();
	})
	$('#btn9').on('click', function () {
		currentText += '9';
		render();
	})

	$('#btn4').on('click', function () {
		currentText += '4';
		render();
	})
	$('#btn5').on('click', function () {
		currentText += '5';
		render();
	})
	$('#btn6').on('click', function () {
		currentText += '6';
		render();
	})

	$('#btn1').on('click', function () {
		currentText += '1';
		render();
	})
	$('#btn2').on('click', function () {
		currentText += '2';
		render();
	})
	$('#btn3').on('click', function () {
		currentText += '3';
		render();
	})

	$('#btn0').on('click', function () {
		currentText += '0';
		render();
	})
	
	//Operators
	$('#btnDivide').on('click', function () {
		if(currentText==''){
			render();
		}else if(currentText!=''){
			temp += currentText;
			currentText = '';
			opt = 'Divide';
		}	
	})
	$('#btnMultiply').on('click', function () {
		if(currentText==''){
			render();
		}else if(currentText!=''){
			temp += currentText;
			currentText = '';
			opt = 'Mutiply';
		}	
	})
	$('#btnMinus').on('click', function () {
		if(currentText==''){
			currentText = '-' + currentText;
			render();
		}else if(currentText!=''){
			temp += currentText;
			currentText = '';
			opt = 'Minus';
		}		
	})
	$('#btnAdd').on('click', function () {
		if(currentText==''){
			render();
		}else if(currentText!=''){
			temp += currentText;
			currentText = '';
			opt = 'Add';
		}		
	})

	$('#btnC').on('click', function () {
		currentText = '0';
		temp = '';
		ans = '';
		opt = '';
		render();
		currentText ='';
	})

	$('#btnEqual').on('click', function () {
		switch(opt){
			case 'Divide':
				if(ans!=''){
					ans /= currentText;
				}else{
					ans += (temp/currentText);
				}
				opt = '';
				break;
			case 'Mutiply':
				if(ans!=''){
					ans *= currentText;
				}else{
					ans += (temp*currentText);
				}
				opt = '';
				break;
			case 'Minus':
				if(ans!=''){
					ans -= currentText;
				}else{
					ans += (temp-currentText);
				}				
				opt = '';
				break;
			case 'Add':
				if(ans!=''){
					ans += currentText;
				}else{
					ans += (temp+currentText);
				}
				opt = '';
				break;
		}
		$('#msg').text(ans);
	})
	
	
	
})