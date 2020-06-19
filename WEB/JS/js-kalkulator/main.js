
/*-------------------------17 arajadranq 2 input stacum ev jnjum DOM------------------------------
function func1() {
	let input=document.getElementById('clic_me1');
	let newInput=document.createElement('input');
	document.body.appendChild(newInput);
	newInput.setAttribute('id','click_me_leter');
	newInput.setAttribute('value','нажми для отблокировки');
	newInput.setAttribute('type','submit');
	newInput.setAttribute('onclick','func2()');
	input.disabled=true;
	input.value='тепер я блокирован'
}
function func2() {
	let input=document.getElementById('clic_me1');
	input.disabled=false;
	input.setAttribute('value','о на меня можно нажать');
	let newInput=document.getElementById('click_me_leter');
	document.body.removeChild(newInput);
}
*/
// let input_text=document.getElementById('text');
// input_text.setAttribute=('style','float:left;');
	let res_area=document.getElementById('res_area');
	let area=document.getElementById('area');
	res_area.disabled=true;
	area.disabled=true;
if (area.value==0) {} else {}	
function mathNum(elem) {
	let area=document.getElementById('area');
	area.value=area.value+elem.value;
}
function mathOperator(elem) {
	let area=document.getElementById('area');
	if (area.value.substr(-1)=='+' || area.value.substr(-1)=='-'
		|| area.value.substr(-1)=='*' || area.value.substr(-1)=='/' || area.value.substr(-1)=='.') {
		area.value=area.value.slice(0,-1)+elem.value;
	} /*if (area.value=='') {
		document.querySelector('.math_f').disabled=true;
	} */
	else {area.value=area.value+elem.value;}
}
function result() {
	let res_area=document.getElementById('res_area');
	let area=document.getElementById('area');
	res_area.value=eval(area.value);
}
function f_delete(elem) {
	let area=document.getElementById('area');
	area.value='';
	let res_area=document.getElementById('res_area');
	res_area.value='';
}
function point(elem) {
	let area=document.getElementById('area');
	if (area.value.substr(-1)=='+' || area.value.substr(-1)=='-'
		|| area.value.substr(-1)=='*' || area.value.substr(-1)=='/' 
		|| area.value.substr(-1)=='.') {
		area.value=area.value.slice(0,-1)+elem.value;
	}
	else {area.value=area.value+elem.value;}
}
if (area.value=='.') {area.value='0'+'.'+area.value;}
// if (area.value.substr(0,1)=='0') {area.value='0.';}















