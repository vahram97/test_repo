let man=[
 {surname:'Arzumanyan', name:'Gevor', age:24},
 {surname:'Martirosyan', name:'Mariam', age:20},
 {surname:'Shahbazyan', name:'Lusine', age:37},
 {surname:'Anakyan', name:'Nikogos', age:25},
 {surname:'Engibaryan', name:'Arko', age:23},
 {surname:'Petrosyan', name:'Gevorg', age:19},
 {surname:'Vanyan', name:'Vahram', age:22},
 {surname:'Xalechyan', name:'Vahe', age:21},
 {surname:'Aghvanyan', name:'Marutn', age:23},
];
//alert(man[0]['surname']);
function search() {
    let p=document.getElementById('p');
    let input=document.getElementById('inp');
    let surname=[];
    p.innerHTML='';
    if (input.value!='') { 
    man.forEach((elems,index) => {
        if (elems['surname'].toLowerCase().includes(input.value.toLowerCase())==true) {
        p.innerHTML+=elems['surname']+'<br>';
    }
    });
    } //else p.innerHTML='';
}
let num=[];
let numSort=[];
for (let i=0; i<15; i++) {
    num[i]=Math.floor(Math.random()*100);
}
function sort() {
    for (let i=0; i<num.length; i++) {
       let ever=num.every(function(elems) {
         if (elems>=num[i]) {return true;}           
       });
       if (ever===true) {
           let a=num.splice(i,1);
           numSort=numSort.concat(a);
           i=-1;             }
    }
alert(numSort);
}
