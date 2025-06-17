const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
   e.preventDefault();
   validateForm();
});

function showError(input, message) {
   const errorSpan = document.getElementById(`${input.id}-error`);
   errorSpan.textContent = message;
   errorSpan.classList.remove('hidden');
   input.classList.add('border-red-500');
}

function clearError(input) {
   const errorSpan = document.getElementById(`${input.id}-error`);
   errorSpan.textContent = '';
   errorSpan.classList.add('hidden');
   input.classList.remove('border-red-500');
}

function validateEmail(email) {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return re.test(email);
}

function validatePassword(password) {
   const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
   return re.test(password);
}

function validateForm() {
   const name = document.getElementById('name');
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const message = document.getElementById('message');

   let valid = true;

   // Name Validation
   if (name.value.trim() === '') {
      showError(name, 'Name cannot be empty.');
      valid = false;
   } else {
      clearError(name);
   }

   // Email Validation
   if (!validateEmail(email.value)) {
      showError(email, 'Please enter a valid email.');
      valid = false;
   } else {
      clearError(email);
   }

   // Password Validation
   if (!validatePassword(password.value)) {
      showError(password, 'Password must be 8+ characters with letters, numbers, and symbols.');
      valid = false;
   } else {
      clearError(password);
   }

   // Message Validation
   if (message.value.trim() === '') {
      showError(message, 'Message cannot be empty.');
      valid = false;
   } else {
      clearError(message);
   }

   if (valid) {
      alert('Form submitted successfully!');
      form.reset();
   }
}