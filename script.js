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

    const color1 = document.getElementById('color1');
    const hex1 = document.getElementById('hex1');
    const v1Pins = document.querySelectorAll('.v1-pin');

    color1.addEventListener('input', (e) => {
        const newColor = e.target.value;
        hex1.textContent = newColor.toUpperCase();
        v1Pins.forEach(pin => pin.style.color = newColor);
    });

    const color2 = document.getElementById('color2');
    const hex2 = document.getElementById('hex2');
    const v2Pins = document.querySelectorAll('.v2-pin');

    color2.addEventListener('input', (e) => {
        const newColor = e.target.value;
        hex2.textContent = newColor.toUpperCase();
        v2Pins.forEach(pin => pin.style.color = newColor);
    });
});
