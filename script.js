lightColors = ['red', 'yellow', 'green', 'blue'];
selectedColor = 0;

// Change the color of the light when the switch is clicked
document.getElementById('switch').addEventListener('click', function() {
    console.log('Switch clicked');
    document.querySelector('.cls-2').style.fill = lightColors[selectedColor];
    selectedColor = (selectedColor + 1) % lightColors.length;
});