// Function to play the game

function playGame(userChoice) {

  const choices = ['rock', 'paper', 'scissors'];

  

  // Get a random choice for the computer

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Update the images based on the choices

  document.querySelector('.user_result img').src = `images/${userChoice}.png`;

  document.querySelector('.cpu_result img').src = `images/${computerChoice}.png`;

  // Show the shake animation before displaying the result

  document.querySelector('.container').classList.add('start');

  

  // Disable the options while the game is running

  const optionImages = document.querySelectorAll('.option_image');

  optionImages.forEach(option => {

    option.style.pointerEvents = 'none';

  });

  // Wait for 1 second to show the result

  setTimeout(() => {

    // Enable the options again after the result is displayed

    optionImages.forEach(option => {

      option.style.pointerEvents = 'auto';

    });

    // Remove the shake animation after the game ends

    document.querySelector('.container').classList.remove('start');

    // Determine the result

    let result = '';

    if (userChoice === computerChoice) {

      result = "It's a draw!";

    } else if (

      (userChoice === 'rock' && computerChoice === 'scissors') ||

      (userChoice === 'paper' && computerChoice === 'rock') ||

      (userChoice === 'scissors' && computerChoice === 'paper')

    ) {

      result = `You win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}.`;

    } else {

      result = `You lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}.`;

    }

    // Display the result

    document.querySelector('.result').textContent = result;

  }, 1000); // Wait for 1 second before showing the result

}

// Capitalize the first letter of a string

function capitalize(str) {

  return str.charAt(0).toUpperCase() + str.slice(1);

}

// Add event listeners to the options

document.querySelectorAll('.option_image').forEach(option => {

  option.addEventListener('click', () => {

    const userChoice = option.querySelector('p').textContent.toLowerCase();

    playGame(userChoice);

    // Highlight the selected option

    document.querySelectorAll('.option_image').forEach(opt => {

      opt.classList.remove('active');

    });

    option.classList.add('active');

  });

});