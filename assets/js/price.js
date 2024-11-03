let checkbox=document.querySelector('.checkbox-btn');
checkbox.addEventListener('click', change);

let basicPrice= document.querySelector('.basic-price');
let profPrice=document.querySelector('.prof-price');
let masterPrice=document.querySelector('.master-price');

let isYearly = true; 
function change() {
  if (isYearly) {
    basicPrice.innerText = `19,99₺`;
    profPrice.innerText = `24,99₺`;
    masterPrice.innerText = `39,99₺`;
  } else {
    basicPrice.innerText = `199,99₺`;
    profPrice.innerText = `249,99₺`;
    masterPrice.innerText = `399,99₺`;
  }
  isYearly = !isYearly; 
}