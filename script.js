class Calculator{
    constructor(previousoperandTextElement,currentoperandTextElement){
        this.previousoperandTextElement = previousoperandTextElement
        this.currentoperandTextElement = currentoperandTextElement
        this.clear()
    }
    clear(){
        this.currentoperand = ''
        this.previousoperand =''
        this.operation = undefined

    }
    delete(){

    }
    appendNumber(number){

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){

    }
}
const numberButtons = document.querySelectorAll('[data.number]')
const operentionButtons = document.querySelectorAll('[data.operation]')
const equalsButtons = document.querySelector('[data.equals]')
const deleteButtons = document.querySelector('[data.delete]')
const allclearButtons = document.querySelector('[data.all-clear]')
const previousoperandTextElement = document.querySelector('[data.previous-operand]')
const currentoperandTextElement = document.querySelector('[data.current-operand]')

const calculator = new Calculator(previousoperandTextElement,currentoperandTextElement)
numberButtons.forEach(button =>{
    button.addEventListener('click',() =>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
}))