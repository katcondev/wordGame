const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
      response.json().then(responseJSON => {
        const userDetails = JSON.stringify(responseJSON, null, 3);
        var parsed = JSON.parse(userDetails);
        localStorage.setItem("userid", parsed.id);
      })
    } else {
      alert('Failed to sign up.');
    }
  }
};
// document.getElementsByClassName('sign-up-btn').addEventListener('click',signupFormHandler)
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
