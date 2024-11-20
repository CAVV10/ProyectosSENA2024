// Ejemplo: Cambiar opacidad al pasar el mouse
document.querySelectorAll('.project-image').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.opacity = '0.8';
    });
    img.addEventListener('mouseout', () => {
        img.style.opacity = '1';
    });
});
