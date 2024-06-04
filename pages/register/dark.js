const mode = document.getElementById('dark');

mode.addEventListener('click',()=>{
    if(mode.classList.contains('fa-moon')){
    (mode.classList.remove('fa-moon'));
    (mode.classList.add('fa-moon'));
    }
});