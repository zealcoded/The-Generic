//generating the random 
const minNumber = 1515201700;            
const maxNumber = 5155209740;
//const mainNumber = number(minNumber, maxNumber);

const message = document.getElementById('message');

//generating btn
document.getElementById('btn-gen').addEventListener('click', getRandom)

//Get the random Number
function getRandom(e){
    //
    if(e.target){
      //time out for the input
   setTimeout(() => {
     check.remove();
   }, 7000);
    }
   const gen = Math.floor(Math.random()*(maxNumber)+minNumber);
   //console.log(gen);

   //timeout
   setTimeout(() => {
    message.innerHTML = `
    <p class="text-center" id="message">${parseInt(gen)}</p>
    `;
},);

//remove 
setTimeout(() => {
  message.remove();
}, 5000);
    
}

//input
const check = document.getElementById('check');

// checking reslut btn
document.getElementById('btn-check').addEventListener('click', (e)=>{

let check = document.getElementById('check').value;
const gen = Math.floor(Math.random()*(maxNumber)+minNumber);
const CheckVan = e.target;
console.log(CheckVan)

//validating the drop
 if (isNaN(check) || check === '') {
   document.getElementById('output').innerHTML = `
   <div class="alert alert-warning alert-dismissible">
   <strong>Warning!</strong> Please Enter The Generated Number..
 </div>
  `;
 }else{
  const div = document.createElement('div');
  div.className = 'alert alert-success text-center mx-auto w-50 m-3';
  div.appendChild(document.createTextNode(`Well Done! ${check}`));
  
  //adding div to its position
  const con = document.querySelector('.container2');
  const con2 = document.querySelector('.con2');
  //insert 
  con.insertBefore(div, con2);
 }

})
// Refresh button 
document.getElementById('refresh').addEventListener('click', ()=>{
  window.location.reload()
})






