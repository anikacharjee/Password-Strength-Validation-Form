const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signup-btn');
const criteria = {
  uppercase: document.getElementById('uppercase'),
  lowercase: document.getElementById('lowercase'),
  number: document.getElementById('number'),
  special: document.getElementById('special'),
  length: document.getElementById('length')
};

function checkPassword(pwd) {
  const checks = {
    uppercase: /[A-Z]/.test(pwd),
    lowercase: /[a-z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    special: /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\}\\|;:'",.<>\/?]/.test(pwd),
    length: pwd.length >= 8
  };

  // Set classes for each criterion
  for (let key in criteria) {
    criteria[key].className = checks[key] ? 'valid' : 'invalid';
  }
  // If all valid, enable button, else disable
  const allValid = Object.values(checks).every(Boolean);
  signupBtn.disabled = !allValid;
  signupBtn.classList.toggle('enabled', allValid);
}

passwordInput.addEventListener('input', e => {
  checkPassword(e.target.value);
});
