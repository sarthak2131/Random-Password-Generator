document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('generateBtn');
    const newPass = document.getElementById('newPass');

    btn.addEventListener('click', () => {
        newPass.value = "New Password Generated"; 
    });
});
