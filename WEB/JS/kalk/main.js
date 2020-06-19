let res_area=document.getElementById('res_area');
let area=document.getElementById('area');
res_area.disabled=true;
area.disabled=true;
function mathNum(elem) {
	let area=document.getElementById('area');
	if (area.value.charAt(0)=='0') {
		area.value=elem.value;
	} else {area.value=area.value+elem.value;}
}
function mathOperator(elem) {
	let area=document.getElementById('area');
	if (area.value.substr(-1)=='+' || area.value.substr(-1)=='-'
		|| area.value.substr(-1)=='*' || area.value.substr(-1)=='/' || area.value.substr(-1)=='.') {
		area.value=area.value.slice(0,-1)+elem.value;
	}
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
function point() {
	let area=document.getElementById('area');
	let point=document.getElementById('point');
	if (area.value.length>0 && area.value.substr(-1)=='+'
		&& area.value.substr(-1)=='-' && area.value.substr(-1)=='*'
		&& area.value.substr(-1)=='/') {area.value=area.value+'0.';}
	if (area.value.length>0 && area.value.substr(-1)!=='+'
		&& area.value.substr(-1)!=='-' && area.value.substr(-1)!=='*'
		&& area.value.substr(-1)!=='/') {area.value=area.value+'.';}	 
	if (area.value.substr(-1)=='+' || area.value.substr(-1)=='-'
		|| area.value.substr(-1)=='*' || area.value.substr(-1)=='/' || area.value=='') {area.value=area.value+'0.';} 
}
function zero() {
	let area=document.getElementById('area');
	let zero=document.getElementById('zero');
	if (area.value.charAt(0)=='0') {
		area.value=''+'0';
	} else {area.value=area.value+zero.value;}
}















