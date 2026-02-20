document.addEventListener('DOMContentLoaded', () => {
    const contents = document.querySelectorAll('.content-section');
    const maps = document.querySelectorAll('.map-section');
    
    contents.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 1.5s ease-in-out';
    });

    maps.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 1.5s ease-in-out';
    });

    setTimeout(() => {
        contents.forEach(el => el.style.opacity = '1');
        maps.forEach(el => el.style.opacity = '1');
    }, 100);
});