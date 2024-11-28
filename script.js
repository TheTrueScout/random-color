const displayColorCode = document.querySelector('.color-code');
const generate = document.querySelector('.generate');
const colorCharacter = '0123456789abcdef'.split('');
const lightShow = document.querySelector('.lightshow');
const copyCode = document.querySelector('.copy-code');
const copiedText = document.querySelector('.copied-text');


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

copyCode.addEventListener('click', () => {
  navigator.clipboard.writeText(displayColorCode.textContent)
  .then (() => {
    copiedText.textContent = 'copied'
    setTimeout(() => {
      copiedText.textContent = ''
    }, 2000);
  })
   .catch (error => {
      console.error('Failed to copy', error)
   })
})
