/*var x=10;
var y=5;
var result;
result=x+y;
document.write(result);
result+=x;
document.write("<br />"+result);*/
  
/*nam=prompt("Ваше имя");
alert(nam);*/



/*var num = 10;
if (num == 10) {
	alert('Верно');
} else {
	alert('Неверно');
}*/



//Qani der 

/*var i = 0; //счетчик цикла
while (i < 5) {
	i++;
	alert(i);*/

/*for (var i = 0; i < 10; i++) {
	alert(i);}*/


// if- else----------

/*var arr;
var lang='en';
if(lang=='ru'){
	arr=['panidelnik','vtornik']
}
if(lang=='en'){
	arr=['eng1','eng2']
}
alert(arr);*/

//switch-case-------------

/*var lang = 'ru';
switch (lang) {
	case 'ru':
		var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		var arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
alert(arr);*/

//2toxani masiv----------------------------

/*var lang = 'ru';
var day=1;
var arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang][day]);*/


/*var num=4;
switch (num){
	case 1:
	var result='vesna';
	break;
	case 2:
	var result='leto';
	break;
	case 3:
	var result='osen';
	break;
	case 4:
	var result='zima';
	break;
}
	alert(result);*/


/*
	STUGENQ 1 tvi chisht exnely--------------------
var str='12345';
var num=str[0];
if(num=='1' || num=='2' || num=='3'){
	alert('yesssss');
}
else{
	alert('noooo');
}*/

/*  Toxic tiv shinel u gumarel-----------------------
var num='123';
var result=Number(num[0])+Number(num[1])+Number(num[2]);
alert(result);*/

/*var num='111111';
var num1=Number(num[0])+Number(num[1])+Number(num[2]);
var num2=Number(num[3])+Number(num[4])+Number(num[5]);
var result=num1+num2;
if (num1===num2) {
	alert(result);
}
else{
	alert('нет');
}






Задачи на циклы while, for в JavaScript----------------*/


/*var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	result = result * arr[i];
}
alert(result);*/
	

					/*Цикл for-in------------------
var obj = {
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
};

for (var key in obj) {
	alert(key + ' - это ' + obj[key] + '.');
}*/

/*var i=10;
while(i<33){
	i++;
	document.write(i+'<br>');
}*/


/*var sum=0;
for(var i=0;i<=100; i++){
	document.write(i+'<br>');
	sum=sum+i;
}
alert(sum);*/


/*var sum=0;
var arr= [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	//document.write(arr[i]);
	sum=sum+arr[i];
}
alert(sum);*/

/*var obj = {'Коля':'200', 'Вася':'300',  'Петя':'400'};
for(var key in obj){
	document.write(obj[key] + '  - зарплата ' + key + 'долларов'+'<br>');
}*/

/*  for and if --------------------------------------
var arr=[ 2, 5, 9, 15, 0, 4,16,7];
for (var i = 0; i <arr.length ; i++) {
	//document.write(arr[i]);

	if (arr[i]>3 && arr[i]<10) {
		document.write(arr[i]+'<br>');
	} else {
		alert(arr[i]);
	}
}*/

/*------------------<0 >0 for and if tpel gumary------------------
		var sum=0;
		var sum2=0;
var arr=[1,5,-4,-3];
for (var i = 0; i < arr.length; i++) {
	if (arr[i]>0) {
		sum=sum+arr[i];
		//document.write(sum+'<br>');
	} if(arr[i]<0) {
		sum2=sum2+arr[i];
		//alert(sum2);
	}
	
}
document.write(sum+'<br>');
alert(sum2);*/

/* ------------------for and if and break--------------------
var arr=[1, 2, 5, 9, 13, 4, 10];
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i]+'<br>');
	if (arr[i]==4) {
		alert('yessssssss');
		break;
	} 
}*/


/*----------mug enq grum-------------------------------------
var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < arr.length; i++) {
	document.write('<b>'+arr[i]+'</b>')
}*/








/*------13-----var str=[];
str[0]='-';
var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < arr.length; i++) {
	//document.write('-'+arr[i])
	
	str[i]=arr[i];

	str[i+1]="-"
	document.write(str[i+1]);
}
//document.write('-');*/

/* -----------------shabat kirakin grel jirni---------------
var arr=['1', '2', '3', '4', '5', '6', '7'];
for (var i = 0; i < arr.length; i++) {
	//document.write(arr[i]);
if (i==5 || i==6) {
	document.write('<b>'+arr[i]+'</b>');
}else{
	document.write(arr[i]);
} 
}*/

/*------------teq grac u pahvac tiv---------------------------
var arr=['1', '9', '3', '4', '5', '6', '7'];
for (var i = 0; i < arr.length; i++) {
	//document.write(arr[i]);
if (i==1) {
	var day=arr[1];
	document.write('<em>'+day+'</em>');
}else{
	document.write(arr[i]);
} 
}*/

/*---------------cikleri qanak --16--------
var n=1000;
var num=0;
while(n>=50){
	n=n/2;
	num=num+1;
	document.write(n+' '+num+'<br>');
	//document.write(num+'<br>');

}
alert(num);*/

/*var a=5, b=10;
b>=a ? document.write('yesss'):document.write('nooooo');*/



/*-------------Задачи на математические функции JavaScript-----------------*/


/*var a=379;
result=Math.pow(a,1/2);
document.write(result+'<br>');
document.write(result.toFixed()+'<br>');*/

/*---------------------------7 zadani---------------------------
var b=587;
result=Math.pow(b,1/2);
document.write(result+'<br>');
document.write(Math.ceil(result)+'<br>');
document.write(Math.floor(result)+'<br>');
var obj={};
obj['ceil']=(Math.ceil(result)+'<br>');
obj['floor']=(Math.ceil(result)+'<br>');
alert(obj['floor'])*/

/*-------10 zadani----1-ic 5 tveri mijakayqic random---------------
var arr = [];
for (i = 0; i < 10; i++) {
	arr[i] = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}
alert(arr); */

//------------Задачи на функции работы со строками -----------

/*var data = '2025-12-31';
var newData=data.split('-').reverse().join('/');
alert(newData);		31/12/2025*/

/*var str= 'я учу javascript!';
var n=5;
var result;
if (str.length>n) {
	result=str.substr(0,n);
} else {
	result=str;
}
alert(result);*/



/*let str= 'я учу javascript !';
let str1=str.charAt().toUpperCase();
let str2=str.substr(2);
let str3=str1.concat(' '+str2);
alert(str3);*/

/*------------------13--տողի բառերի առաջին տառը դարձնել մեծատառ-------
var str='es sirum em aaaa aaaaaaa aaaaaa';
var arr=str.split(' ');
var str0, str1,str2,str3;
var arr0=[];
   for (var i = 0; i < arr.length; i++) {	    	  	
    	str0=arr[i];
    	str2=str0.substr(1);
    	str1=str0.charAt().toUpperCase();
    	str3=str1.concat(str2);
    	arr0[i]=str3		    	  
	} 	    	  
		alert(arr0.join(' '));*/

/*------------------14-- _գծից հետո տառը դարձնել մեծատառ--------------
var str='var_test_text';
var arr=[];
var str1; 
arr=str.replace(/_/g,' ').split(' ');
for (var i = 0; i <arr.length; i++) {
	if (i>0)
	 {arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
	}
	document.write(arr[i]+'<br>');

}
alert(arr.join(''));*/


//------Задачи на функции работы с массивами в JavaScript------------

/* stananq----------------------[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
var arr=[1,2,3,4,5];
arr.splice(1,0,'a','b',);
arr.splice(6,0,'c');
arr.splice(8,0,'e');
console.log(arr);*/

/*-------- sortirovka poqric-----> mec----------------
var  arr=[3, 4, 1, 2, 7];
arr.sort(function(a,b){
	if (a>b){return 1}
		if(a<b){return -1}
})
console.log(arr);*/

/*----- tpum enq  keyery ------------------ ---------------------------
var obj= {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));*/




//---------- Практика на комбинации стандартных функций JavaScript----------------

/* http://----sksvox toxy tpel yes --------------------------------1lucum

var str= 'http://jumong';
if (str[0]=='h' && str[1]=='t'  && str[2]=='t' && str[3]=='p' && str[4]==':' && str[5]=='/' 

	&& str[6]=='/') {
	alert('yes');
} else {alert('no');}*/

/*----------------------------------------------------------------2 lucum
var str= 'http://jumong';
if (str.indexOf('http://')==0) {
	alert('yessss');
} else {
	alert('noooooooo');
}
*/

//------------- stugenqtoxi verjy---------------=.html ?--------------------------------

/*var str= 'jumong.html';
if (str.substr(-5)=='.html') {
	alert('yessss');
} else {
	alert('noooooooo');
}*/

//------------Зададим функцию----------------------------------------------4:

/*function day(a) {
	var arr=['','понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота','kiraki'];
	if (a==0) {return arr[Math.abs(a)+1];}
	 else {return arr[Math.abs(a)];}	
}		
console.log(day(0));*/

//------------Задачи на приемы работы с флагами на JavaScript-----------------

/*var arr=[1,2,3,5,9,5];
var flag=false;
for (var i = 0; i <arr.length; i++) {
if (arr[i]==5) {flag=true;} else {flag=false;}	
}
	if (flag===true) {alert('yes');} else {alert('no');}*/

/*--------zadacha 2---------------------
var num=31;
var flag=false;
for (var i = 2; i < 31; i++) {
if (num%i!==0) {flag=false;} else {flag=true;}
}
document.write(flag);*/

/*-------------zadacha 3
var arr=[1,2,3,4];
var flag=true;
for (var i = 0; i < arr.length; i++) {
	if (arr[i]===arr[i+1]) {flag=true;break;} else {flag=false;}
}
if (flag==true) {alert('yes')} else {alert('no')}*/

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


	










/*"use strict"
 innerHTML
alert(4);
console.log(5);
document.write(6);
DOM nor elmentner kam stexcvac elementneri het ashxatanqner
kanchelu hamar ogtagorcvum e document.document(elemnt) 
orinak
document.body
.head
1document
2element
3text
4comment*/


	














