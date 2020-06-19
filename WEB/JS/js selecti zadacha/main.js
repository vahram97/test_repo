/*function func1(callback) {
    console.log(1);
    callback();
}
function func2(callback) {
    console.log(2);
    callback();
}
function func3(callback) {
    console.log(3);
    callback();
}
function func4() {
    console.log(4);
    
}
func1(function(){
func2(function(){
    func3(func4);
})});*/
//let add = function () {
//  let counter = 0;
//  return function () {counter += 1; return counter}
//}();


//let ul=document.getElementById('ul');
//ul.addEventListener('click', addsimvol);
//function addsimvol(event){
//    let li=event.target.closest('li');
//    if(li){
//    li.innerHTML=li.innerHTML+'!';        
//    }
//}

//var name_input = document.querySelector('.name');
//var surname = document.querySelector('.surname');
//var button = document.querySelectorAll('button');
//var input_submit = document.querySelector('input[type="submit"]');
//var table = document.querySelector('table');
//input_submit.addEventListener('click', addTr);
//function addTr(){
//var tr_new = document.createElement('tr');
//table.appendChild(tr_new);
//for(var i = 1; i <= 3; i++){
//var td_new = document.createElement('td');
//if(i == 1){
//td_new.innerHTML = name_input.value;
//}
//if(i == 2){
//td_new.innerHTML = surname.value;
//}
//if(i == 3){
//var button = document.createElement('button');
//button.innerHTML = 'Удалить';
//button.addEventListener('click', removeTr);
//td_new.appendChild(button);
//}
//tr_new.appendChild(td_new);
//}
//}
//
//for(var i = 0; i < button.length; i++){
//button[i].addEventListener('click', removeTr);
//}
//function removeTr(){
//this.closest('tr').parentElement.removeChild(this.closest('tr'));
//}
//
//table.addEventListener('click', editTd);
//
//function editTd(evt){
//var text = evt.target.innerHTML;
//evt.target.innerHTML = '';
//var input_new = document.createElement('input');
//evt.target.appendChild(input_new);
//input_new.value = text;
//input_new.addEventListener('keyup', saveText);
//function saveText(event){
//if(event.keyCode == '13'){
//evt.target.innerHTML = input_new.value;
//}
//}
//}

let arr=[['vanadzor','erevan','gyumri','alaverdi'],['moskva','peterburg','sochi'],['tbilisi','batumi','suxumi']];
let select=document.getElementById('country');
let select2=document.getElementById('city');
select.selectedIndex=-1;
let input =document.getElementById('input');
function changevalue(){
    let options=select.options;
    select2.innerHTML='';    
    if(select.selectedIndex!=-1){
        select2.style.display='inline-block';
    }
    for(let i=0; i<options.length; i++){
        if(options[i].selected==true){
            for(let j=0; j<arr[i].length; j++){
//               let op=document.createElement('option');
//                op.text=arr[i][j];
//                select2.appendChild(op);
                select2.add(new Option(arr[i][j]));
            }  
        }
    }
}
select.addEventListener('change', changevalue);








