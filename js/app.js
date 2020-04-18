document.addEventListener('DOMContentLoaded', () => {
  const newTakeawayform =
  document.querySelector('#newTakeawayform');
  newTakeawayform.addEventListener('submit', handleNewTakeawayFormSubmit);
});

const handleNewTakeawayFormSubmit = function (event) {
  event.preventDefault();

  const takeawayData = createNewTakeaway(event.target);
  const takeaways = document.querySelector('#takeawayData');
  takeaways.appendChild(takeawayData);

  event.target.reset();
}

const createNewTakeaway = function (form) {

  const takeawayData = document.createElement('li');
  takeawayData.classList.add('#takeaways')

  const name = document.createElement('p');
  name.textContent = form.name.value;
  takeawayData.appendChild(name);

  return takeawayData;

}
