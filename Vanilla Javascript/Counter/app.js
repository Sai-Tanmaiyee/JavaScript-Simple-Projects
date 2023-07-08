let count = 0;
const value = document.getElementById("value");
//const value = document.querySelector("#value");
const btns= document.querySelectorAll(".btn");

btns.forEach(function(btn) {
 // console.log(btn);
 btn.addEventListener("click", function (e) {
  console.log(e.currentTarget.classList);
  const styles = e.currentTarget.classList;
  if(styles.contains("decrease")){
   count--;
  }
  else if(styles.contains('reset')){
   count=0;
  }
  else{
   count++;
  }
  value.textContent = count;

  if(count < 0){
   value.style.color = 'red';
  }
  else if(count > 0){
   value.style.color = 'green';
  }
  else{
   value.style.color = '#222';
  }

  
 });
});