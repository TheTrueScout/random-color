const displayColorCode = document.querySelector('.color-code')
const generate = document.querySelector('.generate')
const colorCharacter = '0123456789abcdef'.split('')
const lightShow = document.querySelector('.lightshow')


function colorGenerator() {

  let newColor = '';

  for (let i = 0; i < 6; i++) {
    const randomColor = colorCharacter[Math.floor(Math.random() * colorCharacter.length)];
    newColor += randomColor
  }
  document.body.style.backgroundColor = `#${newColor}`;
  displayColorCode.innerHTML = `#${newColor}`;

}

generate.addEventListener('click', () => {

  colorGenerator()

});



let intervalId; 

lightShow.addEventListener('click', () => {
  if (lightShow.classList.contains('show-start')) {
    lightShow.classList.remove('show-start');
    clearInterval(intervalId);
  } else {
    lightShow.classList.add('show-start');
    intervalId = setInterval(() => {
      colorGenerator();
    }, 100);
  }
});
