'use strict';
const submitBtn = document.querySelector('.btn-submit');
const firstContainer = document.querySelector('.general-box');
const secondContainer = document.querySelector('.second-container');

submitBtn.addEventListener('click', submitAction);

function submitAction() {
  secondContainer.classList.toggle('hidden');
  firstContainer.classList.toggle('hidden');
}
