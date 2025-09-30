// Example of adding a hover effect to the tags (optional)
document.querySelectorAll('.tags span').forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.backgroundColor = '#007bff';
        tag.style.color = 'white';
    });

    tag.addEventListener('mouseout', () => {
        tag.style.backgroundColor = '#ffffff';
        tag.style.color = '#333';
    });
});

