// const refs = {
//   switchInput: document.querySelector('.switch-field-js'),
//   light: document.querySelector('.switch-light-js'),
//   dark: document.querySelector('.switch-dark-js'),
//   body: document.querySelector('body'),
// };

// input.addEventListener('change', () => {
//   refs.body.classList.toggle('dark-mode');
//   refs.light.classList.toggle('dark');
//   refs.dark.classList.toggle('dark');
// });

const body = document.querySelector('body');
const input = document.querySelector('.switch-field-js');
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
