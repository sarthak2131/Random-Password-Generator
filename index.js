document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('generateBtn');
    const newPass = document.getElementById('newPass');
    const slider = document.getElementById('lengthRange');
    const rangeVal = document.getElementById('rangeVal')
    const upperCase = document.getElementById('uppercase')
    const lowerCase = document.getElementById('lowercase')
    const numbers = document.getElementById('numbers')
    const symbols = document.getElementById('symbols')
    const copybtn = document.getElementById('copyBtn')
    slider.addEventListener('input',(e)=>{
        rangeVal.innerText = e.target.value

    })
    btn.addEventListener('click', () => {
        newPass.value = "New Password Generated";
        
     
    let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = '0123456789';
    let symbolsStr = '!@#$%^&*()_+[]{}|;:,.<>?';
    let finalStr = ''

        if(upperCase.checked){
          finalStr += capitalLetters;
        }
        if(lowerCase.checked){
            finalStr+=smallLetters
        }
        if(numbers.checked){
            finalStr+=numberStr
        }
        if(symbols.checked){
            finalStr+=symbolsStr
        }
        if(finalStr === ''){
            alert("Please select at least one field.");
            newPass.value = "";
            return; 
        }
        console.log(finalStr)
    let latestPass = ''
    for (let i = 0; i < slider.value; i++) {
        let randNum = Math.floor(Math.random()*finalStr.length )
        latestPass += finalStr[randNum];
    }
    newPass.value = `${latestPass}`
    });
    copybtn.addEventListener('click',()=>{
       window.navigator.clipboard.writeText(newPass.value)
    })
});
