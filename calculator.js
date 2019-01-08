

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

// Remove .is-depressed from all keys by creating an array from the children of key. Need to understand how .forEach works. 
Array.from(key.parentNode.children) 
  .forEach(k => k.classList.remove('is-depressed'))

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
    key.classList.add('is-depressed')
  }

  // Recognise decimal key and add it to the displayed number. 

  if (action === 'decimal') { 
    // Need to stop more than one decimal being added to displayed character. 
    if (displayedNum.includes('.')) {
      // Prevent an extra decimal being added. 
      display.textContent  
    } else {
    display.textContent = displayedNum + '.'
    }
  }

  // Recognise AC / clear key 

  if (action === 'clear') {
    // Make displayed number 0 
    display.textContent = 0
  }

  // Recognise the equals key 

  if (action === 'calculate') {
    // Calculate! 
    console.log('equals key!')
  }

 }
})


