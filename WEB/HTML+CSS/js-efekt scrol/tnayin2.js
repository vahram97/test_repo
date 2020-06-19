function func1() {
	let test=document.getElementById('test');
	let range1=document.getElementById('range1');
	let div=document.getElementById('newdiv');
	test.value=range1.value;
	div.style.borderRadius=Number(range1.value*0.5)+'%';
	div.style.background='#'+84+87+Number(range1.value*0.5-1);
	console.log(range1.value);
}
function func(elem) {
	elem.innerHTML = event.pageX + ':' + event.pageY;
}
function func2(elem) {
	elem.style.background='red';
}
function func_scroll() {
	let windowScroll=document.body.scrollTtop || document.documentElement.scrollTop;
	let docHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
	let scrolled=(windowScroll/docHeight)*100;
	document.getElementById('newdiv').style.width=scrolled+'%';
}
window.onscroll=function() {
	func_scroll();
	document.getElementById('test').value=document.documentElement.scrollTop+'/'+document.documentElement.scrollHeight+'-'+
document.documentElement.clientHeight;
	if (document.documentElement.scrollTop>=200) {
	document.getElementById('newdiv2').style.background='red';
}
	else {document.getElementById('newdiv2').style.background='green';}
}
console.log(document.documentElement.scrollTop);
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
