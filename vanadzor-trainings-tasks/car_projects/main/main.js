let divs=document.querySelectorAll(".div");
// for(let i=0; i<divs.length; i++){
//   divs[i].addEventListener('click',function(){
//       this.innerHTML+='x';
//   });
// }

// function rekursSum(n){
// if (n>1) {
//     return n+rekursSum(n-1);
// } else {
//     return n;
// }
// alert(n);
// }
let rang=document.getElementById("rang");
let dc=document.getElementById("dc");
dc.style.width=Number(rang.value)+'px';
//console.log((rang.offsetWidth));
function foo(){
  dc.style.width=Number(rang.value*(1.29))+'px';
}
dc.addEventListener('click',foo);

function isEven(num) {
    if(num<0 || num===1) return false;
    if(num==0) return true;
    return isEven(num-2);
  };
  //console.log(isEven(151515));

////////////////////  task1  //////////////////////

// let arr=[1,2,3,4,6,9];
// function mysum(arr,number){
//   let sum=0;
//   if(Array.isArray(arr) && typeof(number)=='number' && number!=0){
//     arr.forEach(element => {
//       if (element%number==0) sum+=element;
//     })
//   }
//   return sum;
// }
// console.log(mysum(arr,2));

//////////////////////  task2  ///////////////////////

// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach((el,i,arr)=>{
//   if (arr[i+1] && i%2==0) {
//     [arr[i],arr[i+1]]=[arr[i+1],arr[i]];  
//   }
// });
//  console.log(newarr);

/////////////////// task 3 ////////////////////////////
// let arr=[1,2,3,4,1,3,1,2,3,4,5];
// let newarr=[];
// for (let i = arr.length; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     newarr.push(arr.slice(j,i));
//   } 
// }
// console.log(newarr);
// let count=[];
// newarr.forEach((elem,index,arr)=>{
//   let rezult=elem.every((el,i,a)=>{
//     if (a[i+1]) {
//     return a[i]<a[i+1];
//     } else return true; 
//   });
//   if (rezult) {
//     console.log(elem);
//     count.push(elem.length);
//   }
// });
// console.log(Math.max(...count));



//////////// task 3 2 variant/////////////////
// let arr=[1,2,3,4,0,3,1,2,3,4,5,3,2,2,2];
// let newarr=[];
// let start=0;
// for (let i = 0; i < arr.length; i++) {
//   if (i<arr.length-1) {
//     if (arr[i]>=arr[i+1]) {
//       newarr.push(arr.slice(start,i+1).length);
//       start=i+1;
//     }
//   } else if(arr[i-1]>=arr[i]){
//     newarr.push(arr.slice(start,i+1).length);
//   }
// }
// console.log(newarr);
// console.log(Math.max(...newarr));

//////////////   task 4  ///////////////////////
// let text='aaa b bbb aaa    b';
// let arrtext=text.split(' ').filter(elem=>{
//   return elem!='';
// });
// let uniqarr=[];
// arrtext.forEach(elem=>{
//   uniqarr.includes(elem)!=true && uniqarr.push(elem);
// });
// uniqarr.forEach(elem => {
//   let count=0;
//   arrtext.forEach(el=>{
//     if(elem==el) {
//       count+=1;
//     }
//   });
//   console.log(elem+":"+count);
// });

///////////////////////     priomner     ///////////////////

let apiCall = async (api) => {
  try {
    const apiRoot = 'https://9b01af80-5bb8-4f16-91e1-d4650a4cd306.mock.pstmn.io';
    const request = `${apiRoot}${api}`;
    // console.log(request);
    let response = await fetch(request);
    // console.log(response);
    let json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
  }
  
  let allCars = apiCall('/cars');
  console.log(allCars);
  // console.log(apiCall('/cars'));
  // let greenCars = apiCall('/cars?color=green');
  // console.log(greenCars);
  // https://c1d7ebcd-f0c1-440a-abce-90d5c1de68c9.mock.pstmn.io
  // let animals=[
  //   {"type":"cat", "name":"Miki", "age":"2","color":"black","voic":"myau"},
  //   {"type":"dog", "name":"Staf", "age":"2","color":"green","voic":"haf"},
  //   {"type":"cat", "name":"jery", "age":"2","color":"yellow","voic":"myau2"},
  //  ];

  //  let a=[
  //   { "id": "1", "color": "red", "year": "2007", "vin": "1" },
  //   { "id": "2", "color": "blue", "year": "2009", "vin": "2" },
  //   { "id": "3", "color": "green", "year": "2010", "vin": "3" }
  //   ]