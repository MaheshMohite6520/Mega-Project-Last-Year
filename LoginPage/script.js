document
  .getElementById('signupForm')
  .addEventListener('submit', function (event) {
    var username = document.getElementById('username')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var valid = true
    var messages = []

    if (username.value.length < 3 || username.value.length > 15) {
      messages.push('Username must be between 3 and 15 characters.')
      valid = false
    }

    if (!email.value.includes('@')) {
      messages.push('Email must be a valid email address.')
      valid = false
    }

    if (password.value.length < 6) {
      messages.push('Password must be at least 6 characters long.')
      valid = false
    }

    if (!valid) {
      event.preventDefault() // Stop form submission
      alert('Enter valid E-mail addrress')
    }
  })
