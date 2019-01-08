

// Variables, probably arrays to store calculator input data 

// Insert event listener for calclator button click 

const calculator = document.querySelector('.calculator') 

// Add display variable 

const display = document.querySelector('.calculator__display')

const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   const key = e.target 
   const action = key.dataset.action 

   // Add variables for key content and for displayed number 
   const keyContent = key.textContent 
   const displayedNum = display.textContent 

// All the functions that will handle input data 

  // If the key does not have data action and if displayed number is 0, replace with the pressed key content. Otherwise, add the pressed key to the displayed number already there.  

   if (!action) {
     if (displayedNum === '0') {
       display.textContent = keyContent
     } else {
       display.textContent = displayedNum + keyContent
     }
   }

  // Recognise operator keys 

  if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    console.log('operator key!')
  }

  // Recognise decimal key 

  if (action === 'decimal') {
    console.log('decimal key!')
  }

  // Recognise AC / clear key 

  if (action === 'clear') {
    console.log('clear key!')
  }

  // Recognise the equals key 

  if (action === 'calculate') {
    console.log('equals key!')
  }

 }
})


