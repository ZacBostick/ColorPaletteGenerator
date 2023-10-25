function generateColors() {
    const palette = document.getElementById('palette');
    palette.innerHTML = ''; 
    
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        const hexText = document.createElement('p');
        hexText.innerText = color;
        colorBox.appendChild(hexText);
        palette.appendChild(colorBox);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function copyToClipboard() {
    const colors = document.querySelectorAll('.color-box p');
    let colorText = ' ';
    
    colors.forEach(color => {
        colorText += color.innerText + '\n';
    });
    
    const textarea = document.createElement('textarea');
    textarea.value = colorText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    alert("Colors copied to clipboard!"); 
}
generateColors();
