document
  .querySelector('.topOffer > img:last-child')
  .addEventListener('click', () => {
    localStorage.setItem('showItemsPriceLessThen30', true);
    window.location.href = '../search.html';
  });

document
  .querySelector('.topOffer > img:first-child')
  .addEventListener('click', () => {
    localStorage.setItem('DealsOfTheWeekImg1', true);
    window.location.href = '../search.html';
  });
document
  .querySelector('.topOffer > img:nth-child(2)')
  .addEventListener('click', () => {
    localStorage.setItem('BigPackBiggerDiscount', true);
    window.location.href = '../search.html';
  });
document
  .querySelector('.topOffer > img:nth-child(3)')
  .addEventListener('click', () => {
    localStorage.setItem('CombosYouCantMiss', true);
    window.location.href = '../search.html';
  });
