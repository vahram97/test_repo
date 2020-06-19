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
function func_table() {
	let table=document.getElementById('tab');
	table.classList.toggle('active');
}
function creat_row() {
	let table=document.getElementById('tab');
	for (var i = 0; i < man_sort.length; i++) {
		let tr=document.createElement('tr');
		table.appendChild(tr);
		for (let j = 0; j <=Object.keys(man_sort[i]).length; j++) {
			let td=document.createElement('td');
			tr.appendChild(td);
			if (j==0){td.innerHTML=i+1;}
			if (j==1){td.innerHTML=man_sort[i]['surname'];}
			if (j==2){td.innerHTML=man_sort[i]['name'];}
			if (j==3){td.innerHTML=man_sort[i]['age'];}
		}
		}
	}
let basa=[];
for (let i = 0; i < man.length; i++) {
	basa[i]=Object.values(man[i]['surname']).join('');
}
basa.sort();
//console.log(basa);
//console.log(man[0]['surname']);
let man_sort=[];
for (let i = 0; i < basa.length; i++) {
	if (basa[i]==man[i]['surname']) {man_sort[i]=man[i];}
	  else {for (let j = 0; j < basa.length; j++) {
	  	if (basa[i]==man[j]['surname']) {man_sort[i]=man[j];}

	  } }
}
//console.log(man_sort);
function search() {
	let inp=document.getElementById('inp');
	let table2=document.getElementById('tab2');
	table2.innerHTML='';
	table2.classList.toggle('active');
	if (inp.value!='') {
		for (var i = 0; i < man_sort.length; i++) {
		if (man_sort[i]['surname'].toLowerCase().includes(inp.value.toLowerCase())==true) {	
			let tr=document.createElement('tr');
			table2.appendChild(tr);
			for (let j = 0; j <=Object.keys(man_sort[i]).length; j++) {
				let td=document.createElement('td');
				tr.appendChild(td);
				if (j==0){td.innerHTML=i+1;}
				if (j==1){td.innerHTML=man_sort[i]['surname'];}
				if (j==2){td.innerHTML=man_sort[i]['name'];}
				if (j==3){td.innerHTML=man_sort[i]['age'];}
			}
		}
		}
	} 
}








// Object.values(man[1]);
// console.log(Object.values(man[1]['surname']));
// console.log(Object.values(man[1]));