let td1=document.getElementById('td1');
let td2=document.getElementById('td2');
let td3=document.getElementById('td3');
let data_now=new Date();
//let dataNight=new Date(data_now.getFullYear(), data_now.getMonth(), data_now.getDate()+1, 0, 0, 0);
let a=[];
//a[0]=data_now.getFullYear();
//a[1]=data_now.getMonth();
//a[2]=data_now.getDate()+1;
//a[3]=data_now.getHours();
//a[3]=data_now.getMinutes();
//a[3]=data_now.getSeconds();
start();
function timer () {
	setInterval(start,1000)
}
function start() {
	 td1.innerHTML=23-data_now.getHours();
	 td2.innerHTML=59-data_now.getMinutes();
	 td3.innerHTML=59-data_now.getSeconds();
	 data_now=new Date();
}
//	let dataNight=new Date(data_now.getFullYear(), data_now.getMonth(), data_now.getDate()+1, 0, 0, 0);
//	let diff=(dataNight-data_now)/1000;
//	td1.innerHTML=Math.floor(diff/(60*60));
//	td2.innerHTML=Math.floor(diff/60);
//	td3.innerHTML=Math.floor(diff%60);
