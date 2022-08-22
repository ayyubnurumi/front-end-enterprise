const form = document.querySelector('#form');
const input = document.querySelector('#phone');
const output = document.querySelector('#output');

const re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;

function testInfo(phoneInput) {
  const ok = re.exec(phoneInput.value);

  if (!ok) {
    output.textContent = `${phoneInput.value} isn't a phone number with area code!`;
  } else {
    output.textContent = `Thanks, your phone number is ${ok[0]}`;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  testInfo(input);
});
