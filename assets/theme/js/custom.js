const checkbox = document.getElementById('checkbox');
let darkMode = localStorage.getItem('darkMode');
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];
 

checkbox.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !=="enabled"){
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

const enableDarkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    localStorage.setItem("darkMode", null);
    document.body.classList.remove('dark');
}

if(darkMode === 'enabled'){
    enableDarkMode(); 
}

btn.addEventListener('click', () => {
    modal.style.display = "block";
})

span.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.style.display = 'none';
    }
})
