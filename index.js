document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('generateBtn');
    const newPass = document.getElementById('newPass');
    const slider = document.getElementById('lengthRange');
    const rangeVal = document.getElementById('rangeVal')
    

    slider.addEventListener('input',(e)=>{
        rangeVal.innerText = e.target.value

    })
    btn.addEventListener('click', () => {
        newPass.value = "New Password Generated";
        
     
    let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = '0123456789';
    let symbolsStr = '!@#$%^&*()_+[]{}|;:,.<>?';
    let finalStr = capitalLetters
    let latestPass = ''
    for (let i = 0; i < slider.value; i++) {
        let randNum = Math.floor(Math.random()*finalStr.length )
        latestPass += finalStr[randNum];
    }
    newPass.value = `${latestPass}`
    });
});
