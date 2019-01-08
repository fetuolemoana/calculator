

// Variables, probably arrays to store calculator input data 

// Insert event listener for calclator button click 

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   const key = e.target 
   const action = key.dataset.action 

   if (!action) {
     console.log('number key!') 
   }
 }
})

  // All the functions that will handle input data 


