const savedBMI = localStorage.getItem('bmi');
if (savedBMI) {
  const bmiAsNumber = Number(savedBMI);
  document.querySelector('.js-result').innerText = `BMI: ${bmiAsNumber}`;
}

const savedHeight = localStorage.getItem('height');
if (savedHeight) {
  document.querySelector('.js-height-input').value = savedHeight;
}

const savedWeight = localStorage.getItem('weight');
if (savedWeight) {
  document.querySelector('.js-weight-input').value = savedWeight;
}

function calcBMI() {
  /// BMI Calculation
  const heightValue = Number(document.querySelector('.js-height-input').value);
  const weightValue = Number(document.querySelector('.js-weight-input').value);
  const resultBMI = weightValue / heightValue ** 2;

  const formattedBMI = (resultBMI * 10000).toFixed(1);

  document.querySelector('.js-result').innerText = `BMI: ${formattedBMI}`;

  /// BMI Status
  const categoryValue = document.querySelector('.js-weight-category');

  if (formattedBMI < 16) {
    categoryValue.innerText = 'Status: Severely Underweight';
    categoryValue.classList.add('red-text');
  } else if (formattedBMI >= 16 && formattedBMI <= 18.4) {
    categoryValue.innerText = 'Status: Underweight';
    categoryValue.classList.add('red-text');
  } else if (formattedBMI >= 18.5 && formattedBMI <= 24.9) {
    categoryValue.innerText = 'Status: Normal';
    categoryValue.classList.add('green-text');
    categoryValue.classList.remove('red-text');
  } else if (formattedBMI >= 25 && formattedBMI <= 29.9) {
    categoryValue.innerText = 'Status: Overweight';
    categoryValue.classList.add('red-text');
  } else if (formattedBMI >= 30 && formattedBMI <= 34.9) {
    categoryValue.innerText = 'Status: Moderately Obese';
    categoryValue.classList.add('red-text');
  } else if (formattedBMI >= 35 && formattedBMI <= 39.9) {
    categoryValue.innerText = 'Status: Severely Obese';
    categoryValue.classList.add('red-text');
  } else if (formattedBMI >= 40) {
    categoryValue.innerText = 'Status: Morbidly Obese';
    categoryValue.classList.add('red-text');
  }

  localStorage.setItem('bmi', formattedBMI.toString());
  localStorage.setItem('height', heightValue.toString());
  localStorage.setItem('weight', weightValue.toString());
}

function handleBMIkeyDown(event) {
  if (event.key === 'Enter') {
    calcBMI();
  }
}

function colorChanger() {
  const genderWoman = document.querySelector('.js-woman-gender-button');
  const genderMan = document.querySelector('.js-man-gender-button');

  genderWoman.addEventListener('click', function () {
    document.querySelector('.container').classList.add('colors-woman');
    document.querySelector('.container').classList.remove('colors-man');
  });

  genderMan.addEventListener('click', function () {
    document.querySelector('.container').classList.add('colors-man');
    document.querySelector('.container').classList.remove('colors-woman');
  });
}

colorChanger();
