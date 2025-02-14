const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Gak Boleh", images:"images/cat-02.gif"},
  {text:"Jangan Kabur", images:"images/cat-03.gif"},
  {text:"Balik Lagi Ke Halaman Utama Gih", images:"images/cat-04.gif"},
  {text:"Ih Gituu Ayang Mah", images:"images/cat-05.gif"},
]
const ohyes = {text:"Alhamdulillah", images:"images/val.jpg"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Banget"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Tidak'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})