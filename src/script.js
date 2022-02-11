//5-7 15 - 20KG
//8-10 21 - 25KG
//11-15 26 - 30KG
//-20 31 - 40KG
function myfunction() {

    var Name =  document.getElementById('input_1').value;
    var Age =  document.getElementById('input_2').value;
    var weight =  document.getElementById('input_3').value;



	if (Age >= 5 && Age <= 7) {
		if (weight < 15) {
			document.getElementById('output').innerHTML =
				'Hello ' + Name + ' !!! Your weight is less than recommended value of 15kg at an age of ' + Age + '.';
		} else if ((15 <= weight)&&(weight<= 20)) {
			document.getElementById('output').innerHTML = 'Hello ' + Name + ' !!! Your weight is perfect.';
		} else {
			document.getElementById('output').innerHTML =
				'Hello ' +
				Name +
				' !!! Your weight is greater than recommended value of 20kg at an age of ' +
				Age +
				'.';
		}
	}
	else if (Age >= 8 && Age <= 10) {
		if (weight < 21) {
			var output =
				'Hello ' + Name + ' !!! Your weight is less than recommended value of 21kg at an age of ' + Age + '.';
		} else if ((21 <= weight)&&(weight<= 25)) {
			var output = 'Hello ' + Name + ' !!! Your weight is perfect.';
		} else {
			var output =
				'Hello ' +
				Name +
				' !!! Your weight is greater than recommended value of 25kg at an age of ' +
				Age +
				'.';
		}
	}
	else if (Age >= 11 && Age <= 15) {
		if (weight < 26) {
			var output =
				'Hello ' + Name + ' !!! Your weight is less than recommended value of 26kg at an age of ' + Age + '.';
		} else if ((26 <= weight)&&(weight<= 30)) {
			var output = 'Hello ' + Name + ' !!! Your weight is perfect.';
		} else {
			var output =
				'Hello ' +
				Name +
				' !!! Your weight is greater than recommended value of 30kg at an age of ' +
				Age +
				'.';
		}
	}
	else if (Age >= 16 && Age <= 20) {
		if (weight < 31) {
			var output =
				'Hello ' + Name + ' !!! Your weight is less than recommended value of 31kg at an age of ' + Age + '.';
		} else if ((21 <= weight)&&(weight<= 40)) {
			var output = 'Hello ' + Name + ' !!! Your weight is perfect.';
		} else {
			var output =
				'Hello ' +
				Name +
				' !!! Your weight is greater than recommended value of 40kg at an age of ' +
				Age +
				'.';
		}
	}
    document.getElementById('output').innerHTML = output;
}
