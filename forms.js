document.getElementById('simpleForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  const firstName = document.getElementById('First name').value.trim();
  const lastName = document.getElementById('Second name').value.trim();
  const age = document.getElementById('Age').value.trim();

  const pythonChecked = document.getElementById('python').checked;
  const jsChecked = document.getElementById('JavaScript').checked;

  let message = `My name is ${firstName} ${lastName}. I am ${age} years old, and `;

  if (pythonChecked && jsChecked) {
    message += "I am conversant with both Python and JavaScript.";
  } else if (pythonChecked) {
    message += "I am conversant with Python.";
  } else if (jsChecked) {
    message += "I am conversant with JavaScript.";
  } else {
    message += "I am not conversant with Python or JavaScript.";
  }

  const userConfirmed = confirm(message);
  if (userConfirmed) {
    alert("Congratulations! You have successfully submitted the form.");
  }
});
