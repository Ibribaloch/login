const users =[
    {
       "name": "Ali",
       "age": 1,
       "email": "user1@example.com",
       "password": "password1"
    },
    {
       "name": "Fatima",
       "age": 2,
       "email": "user2@example.com",
       "password": "password2"
    },
    {
       "name": "Muhammad",
       "age": 3,
       "email": "user3@example.com",
       "password": "password3"
    },
    {
       "name": "Ayesha",
       "age": 4,
       "email": "user4@example.com",
       "password": "password4"
    },
    {
       "name": "Hassan",
       "age": 5,
       "email": "user5@example.com",
       "password": "password5"
    },
    {
       "name": "Hina",
       "age": 26,
       "email": "user6@example.com",
       "password": "password6"
    },
    {
       "name": "Hamza",
       "age": 27,
       "email": "user7@example.com",
       "password": "password7"
    },
    {
       "name": "Sana",
       "age": 28,
       "email": "user8@example.com",
       "password": "password8"
    },
    {
       "name": "Haroon",
       "age": 29,
       "email": "user9@example.com",
       "password": "password9"
    },
    {
       "name": "Mariam",
       "age": 30,
       "email": "user10@example.com",
       "password": "password10"
    }
   ]
   document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Check if the email is registered
      const user = users.find(user => user.email === email);
      if (!user) {
          alert('Email not registered. Please enter a correct email.');
          return;
      }
  
      // If the email is registered, check the password
      if (user.password !== password) {
          alert('Incorrect password. Please enter the correct password.');
          return;
      }
  
      // If the email and password are correct, check the user's age
      if (user.age < 18) {
          alert('Your age is not valid.');
          return;
      }
  
      // If the email, password, and age are correct, redirect to the next page
      window.location.href = 'nextPage.html';
  });