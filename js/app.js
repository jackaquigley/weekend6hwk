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
  name.textContent = `Takeaway Name: ${form.name.value}`;
  takeawayData.appendChild(name) ;

  const jackRating =
  document.createElement('p')
  jackRating.textContent = form.jackRating.value;
  takeawayData.appendChild(jackRating);

  const mitchellRating = document.createElement('p')
  mitchellRating.textContent = form.mitchellRating.value;
  takeawayData.appendChild(mitchellRating);

  const wouldGetAgain = document.createElement('p')
  wouldGetAgain.textContent = form.wouldGetAgain.value;
  takeawayData.appendChild(wouldGetAgain);

  const type = document.createElement('p')
  type.textContent = form.type.value;
  takeawayData.appendChild(type);

  return takeawayData;

}
