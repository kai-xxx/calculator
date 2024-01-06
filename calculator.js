function changeBackground() {
           const bodyElement = document.body;

           if (bodyElement.classList.contains('urban1')) {
               bodyElement.classList.remove('urban1');
               bodyElement.classList.add('urban2');
           } else if (bodyElement.classList.contains('urban2')) {
               bodyElement.classList.remove('urban2');
               bodyElement.classList.add('urban3');
           } else if(bodyElement.classList.contains('urban3')){
               bodyElement.classList.remove('urban3');
               bodyElement.classList.add('urban4');
           } else if(bodyElement.classList.contains('urban4')){
             bodyElement.classList.remove('urban4');
             bodyElement.classList.add('urban5');
           } else{
             bodyElement.classList.remove('urban5');
             bodyElement.classList.add('urban1');
           }
       }
setInterval(changeBackground, 3000);


document.addEventListener('keydown', function (event) {
     const key = event.key;
     if (/[0-9+\-*/.]/.test(key)) {
       displayy(key);
     } else if (key === 'Enter') {
       calculate();
     } else if (key === 'Escape') {
       clearDisplay();
     } else if(key=== 'Backspace'){
       previous();
     }
   });

function displayy(value){
  document.getElementById('display').value+=value;
}
function clearDisplay(){
  document.getElementById('display').value='';
}
function calculate(){
  const exp=document.getElementById('display').value;
  const result=eval(exp);
  document.getElementById('display').value = result;
}
function operate(operator){
  document.getElementById('display').value += operator;
}
function previous(){
  const currentExpression=document.getElementById('display').value;
  document.getElementById('display').value=currentExpression.slice(0,-1);
}
