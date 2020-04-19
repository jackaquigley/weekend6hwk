document.addEventListener('DOMContentLoaded', () => {
  const newTakeawayform =
  document.querySelector('#newTakeawayform');
  newTakeawayform.addEventListener('submit', handleNewTakeawayFormSubmit);

  const deleteAllTakeawaysButton = document.querySelector('#deleteAllTakeaways')
  deleteAllTakeawaysButton.addEventListener('click', handleDeleteTakeawaysClick)
});

const handleNewTakeawayFormSubmit = function (event) {
  event.preventDefault();

  const takeawayData = createNewTakeaway(event.target);
  const takeaways = document.querySelector('#takeawayData');
  takeaways.appendChild(takeawayData);

  event.target.reset();
}

const createNewTakeaway = function (form) {

  const takeawayData = document.createElement('p');
  takeawayData.classList.add('takeaways')

  const name = document.createElement('p');
  name.textContent = `Takeaway Name: ${form.name.value}`;
  takeawayData.appendChild(name) ;

  const jackRating =
  document.createElement('p')
  jackRating.textContent = `Jack's Rating: ${form.jackRating.value}`;
  takeawayData.appendChild(jackRating);

  const mitchellRating = document.createElement('p')
  mitchellRating.textContent = `Mitchell's Rating: ${form.mitchellRating.value}`;
  takeawayData.appendChild(mitchellRating);

  const type = document.createElement('p')
  type.textContent = `Type: ${form.type.value}`;
  takeawayData.appendChild(type);

  return takeawayData;

}

const handleDeleteTakeawaysClick = function (event) {
  const takeawayData = document.querySelector('#takeawayData');
takeawayData.innerHTML = '';
}
