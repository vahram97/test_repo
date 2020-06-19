function func1() {
	document.getElementById('paragraf').style.textTransform='uppercase';
	var elem=document.getElementById('but');
	elem.style.background='red';
    var newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.style.background='green';
    newDiv.style.width='500px';
    newDiv.style.height='500px';
    newDiv.setAttribute('id', 'd-1');
    elem.disabled = true;
    newDiv.innerHTML='<input type="submit" id="inp" onclick="func2()">'
}
function func2() {
	var elem=document.getElementById('inp');
	elem.style.background='blue';
	var div=document.getElementById('d-1');
	div.style.background='#232524';
}

