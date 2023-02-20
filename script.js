const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.setAttribute('autocomplete', 'off')
  input.setAttribute('autocorrect', 'off')
  input.setAttribute('autocapitalize', 'off')
  input.setAttribute('spellcheck', false)
})

let sentence = `their argument could be heard across the parking lot.`
const input = document.getElementById('input')
const output = document.getElementById('output')
let word_count = 0
let letter_count = 0

let current_string = ""
let current_input_letter = ""
let current_input_word = ""
let current_testing_letter = ""
let current_testing_word = ""



let input_arr = sentence.split(" ")
wording()

function foo(a){
    
    // console.log("letter count > "+letter_count)
    
    current_string = a.value
    current_input_letter = current_string[current_string.length - 1]
    current_testing_letter = input.childNodes[word_count].innerHTML[letter_count]
    current_testing_word =  input.childNodes[word_count]


    if(current_input_letter == " "){
        a.value = ""
        letter_count = -1
        word_count +=1 
    }
    else{
        if(current_input_letter == current_testing_letter){
            current_testing_word.style.backgroundColor = "gray"
        }
        if(current_input_letter != current_testing_letter){
            current_testing_word.style.backgroundColor = "red"
        }
        if(current_string == current_testing_word.innerHTML){
            current_testing_word.style.backgroundColor = "green"
        }
        
    }
            
    letter_count += 1
}

function wording(){
    for(let i = 0; i < input_arr.length; i++){
        input.innerHTML += `<span class="word">${input_arr[i]}</span>`
    }
    input.classList.add('flex')
}

window.addEventListener('keydown',(e)=>{
    if(e.key == "Backspace"){
        if(letter_count > 0){
            console.log('letter count decreased !')
            letter_count -= 2
        }
    }
})