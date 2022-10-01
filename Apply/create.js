const modal = document.querySelector('#modal');

const apply = document.querySelector('.apply');
const submit = document.querySelector('.submit');

apply.addEventListener('click', function(){
  modal.showModal();
});

submit.addEventListener('click', function(){
  modal.close();
});
