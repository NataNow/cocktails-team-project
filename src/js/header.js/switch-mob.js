const body = document.querySelector('body');
const input = document.querySelector('#switch-mob');
const light = document.querySelector('.switch-light-js');
const dark = document.querySelector('.switch-dark-js');
console.log(light);
console.log(dark);
console.log(input);
console.log(body);

input.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  light.classList.toggle('dark');
  dark.classList.toggle('dark');
});
