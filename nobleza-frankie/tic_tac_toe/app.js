//JS for Modal
//DOM Declarations
const modal = document.querySelector('#modal');
const modalContainer = document.querySelector('#modal-container');
const formGridSize = document.querySelector('#form_grid_size');
const formFirstMove = document.querySelector('#form_first_move');
const formOpponentSelection = document.querySelector('#form_opponent_selection');
const formSubmitBtn = document.querySelector('#form_submit');
const boardWrapper = document.querySelector('#board_wrapper');

//Button on submit
formSubmitBtn.addEventListener("click", function(){
    initializeContent();
})

//JS for Main
//DOM Declarations

//Global Variables

//Initialize Main
const initializeContent = () => {

     // Hide/Unhide
     modal.classList.add('hide');
     modalContainer.classList.add('hide');
     content.classList.remove('hide');
}