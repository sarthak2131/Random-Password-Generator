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
    });
});
