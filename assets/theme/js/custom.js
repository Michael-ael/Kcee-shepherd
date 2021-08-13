const checkbox = document.getElementById('checkbox');
let darkMode = localStorage.getItem('darkMode');
 
// checkbox.addEventListener('change', () => {
//     document.body.classList.toggle('dark')
// });
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