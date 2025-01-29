// Lock Animation
document.querySelectorAll('.close-code').forEach(element => {
    element.addEventListener('click',()=>{
        element.querySelector('span').style.animation = 'lock-button 1s ease normal';
        element.style.cursor = 'default';
        setTimeout(() => {
            element.querySelector('span').style.animation = '';
            element.style.cursor = 'pointer';
        }, 1000);
        
    });
});
