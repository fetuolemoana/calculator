

// Variables, probably arrays to store calculator input data 

// Insert event listener for calclator button click 

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   const key = e.target 
   const action = key.dataset.action 

// All the functions that will handle input data 

// Recognise number key

   if (!action) {
     console.log('number key!') 
   }

   // Recognise operator keys 

  if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    console.log('operator key!')
  }
  
 }
})


