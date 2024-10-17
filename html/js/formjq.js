 $('#registrationForm').submit(function(event) {
      event.preventDefault();
     
      let valid = true;
      const name = $('#name').val();
      if (name === '' || !/^[a-zA-Z ]+$/.test(name)) {
         $('#nameError').text('Please enter a valid name.');
         valid = false;
      } else {
         $('#nameError').text('ok');
      }
      // Email Validation
      const email = $('#email').val();
      if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
         $('#emailError').text('Please enter a valid email.');
         valid = false;
      } else {
         $('#emailError').text('');
      }
   
      // Password Validation
      const password = $('#password').val();
      const confirmPassword =$('#confirmPassword').val();
      const passwordError = $('#passwordError');
      const confirmPasswordError = $('#confirmPasswordError');
      if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
         passwordError.text('Password must be at least 8 characters and include uppercase, lowercase, and a number.');
         valid = false;
      } else {
         passwordError.text('');
      }
   
      if (password !== confirmPassword) {
         confirmPasswordError.text('Passwords do not match.');
         valid = false;
      } else {
         confirmPasswordError.text('');
      }
   
      // Phone Validation
      const phone = $('#phone').val();
      if (phone === '' || !/^\d{10}$/.test(phone)) {
         $('#phoneError').text('Please enter a valid 10-digit phone number.');
         valid = false;
      } else {
         $('#phoneError').text('');
      }
   
      // Date Validation
      const dob =$('#dob').val();
      if (dob === '') {
         $('#dobError').text('Please enter your date of birth.');
         valid = false;
      } else {
         $('#dobError').text('');
      }
   
      // Age Validation
      const age = $('#age').val();
      if (age < 18 || age > 50) {
        $('#ageError').text('Please enter a valid age between 18 and 50.');
         valid = false;
      } else {
        $('#ageError').text('');
      }
   
      // Gender Validation
      const genderMale = $('#male').checked;
      const genderFemale = $('#female').checked.val();
      const genderOther = $('#other').checked.val();
      if (!genderMale && !genderFemale && !genderOther) {
         $('#genderError').text('Please select your gender.');
         valid = false;
      } else {
         $('#genderError').text('');
      }
   
      // Website Validation
      const website = $('#website').val();
      if (website === '' || !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(website)) {
         $('#websiteError').text('Please enter a valid website URL.');
         valid = false;
      } else {
         $('#websiteError').text('');
      }
   
      const country = $('#country').val();
      if (country === '') {
         $('#countryError').text('Please select your country.');
         valid = false;
      } else {
         $('#countryError').text('');
      }
   
      // Message (Textarea) Validation
      const message = $('#message').val();
      if (message === '' || message.length < 10) {
         $('#messageError').text('Please enter a message with at least 10 characters.');
         valid = false;
      } else {
         $('#messageError').text('');
      }
   
      // Terms and Conditions Validation
      const terms = $('#terms').checked.val();
      if (!terms) {
         $('#termsError').text('You must agree to the terms and conditions.');
         valid = false;
      } else {
        $('#termsError').text('');
      }
   
      // Final Validation Check
      if (valid) {
         alert('Form submitted successfully!');
   
      }
   });