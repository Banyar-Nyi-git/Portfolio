document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

	function openModal(modalId) {
	  document.getElementById(modalId + '-modal').style.display = 'block';
	}

	function closeModal(modalId) {
	  document.getElementById(modalId + '-modal').style.display = 'none';
	}

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  emailjs.send('service_phwpqbv', 'template_v3936n9', {
      name: name,
      email: email,
      message: message
  }).then(function(response) {
      alert('Message sent successfully!');
  }, function(error) {
      alert('Failed to send message. Please try again.');
  });
});
