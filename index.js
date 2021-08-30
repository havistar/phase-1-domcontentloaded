// Your code goes here


document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  const getID = document.getElementById('text')

  document.addEventListener("DOMContentLoaded",() => {
    let changes = document.getElementById('text');
    changes.textContent = 'This is really cool!'
    console.log("JavaScript is so cool. It lets me add text to my page programmatically.")
    });