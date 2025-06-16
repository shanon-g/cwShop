// Day Selector 1-31
const daySelect = document.getElementById('birth-day');
for (let d = 1; d <= 31; d++) {
  const opt = document.createElement('option');
  opt.value = d;
  opt.textContent = d;
  daySelect.appendChild(opt);
}

// Year Selector >= 1950
const yearSelect = document.getElementById('birth-year');
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1950; y--) {
  const opt = document.createElement('option');
  opt.value = y;
  opt.textContent = y;
  yearSelect.appendChild(opt);
}

 // Form submit handler with validation
const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate Full Name
  const fullName = form.elements['fullName'].value.trim();
  if (fullName === '') {
    alert('Please enter your full name.');
    return;
  }

  // Validate Email (basic check)
  const email = form.elements['email'].value.trim();
  if (email === '') {
    alert('Please enter your email address.');
    return;
  }
  // Optional: simple email format check
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate Birth Date selects
  const day = form.elements['birth-day'].value;
  const month = form.elements['birth-month'].value;
  const year = form.elements['birth-year'].value;
  if (!day) {
    alert('Please select your birth day.');
    return;
  }
  if (!month) {
    alert('Please select your birth month.');
    return;
  }
  if (!year) {
    alert('Please select your birth year.');
    return;
  }

  // Check age >= 18
  const birthDate = new Date(year, month - 1, day); // JS months are 0-based
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18) {
    alert('You must be at least 18 years old to register.');
    return;
  }

  // Validate Gender radios
  const genderMale = document.getElementById('gender-male').checked;
  const genderFemale = document.getElementById('gender-female').checked;
  if (!genderMale && !genderFemale) {
    alert('Please select your gender.');
    return;
  }

  // Validate Face Image file input
  const faceFile = document.getElementById('face-image').files.length;
  if (faceFile === 0) {
    alert('Please upload your close-up face image.');
    return;
  }

  // Validate Body Image file input
  const bodyFile = document.getElementById('body-image').files.length;
  if (bodyFile === 0) {
    alert('Please upload your full body image.');
    return;
  }

  // Validate Terms checkbox
  if (!form.elements['terms'].checked) {
    alert('You must agree to the Terms and Condition.');
    return;
  }

  // If all validations passed:
  alert('Registration form submitted!');
  form.submit();
});

  

function setupImagePreview(inputId, imgId) {
  const input = document.getElementById(inputId);
  const img = document.getElementById(imgId);

  input.addEventListener('change', () => {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      // If no file selected, reset to placeholder
      img.src = `assets/placeholder_${imgId.split('-')[0]}.png`; // adjust this if needed
    }
  });
}
  
// Call this on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setupImagePreview('face-image', 'face-preview');
  setupImagePreview('body-image', 'body-preview');
});
  