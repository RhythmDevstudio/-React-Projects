const num = document.querySelectorAll('.number')
const symbol = document.querySelectorAll('.equation')
const display = document.querySelector('#display')


console.log("Hello");
num.forEach((n) => {
  n.addEventListener('click', () => {
    const input = n.textContent
    console.log(input);
    display.value += input
  })
})

symbol.forEach((s) => {
  s.addEventListener('click', () => {   
        const input = s.textContent
        display.value += input
    })
})
const submit = document.querySelector('#submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
      display.value = eval(display.value).toFixed(2)
    
})
