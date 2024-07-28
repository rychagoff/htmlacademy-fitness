const accordions = document.querySelectorAll('.accordion__item');
const accordionsIsOpened = document.querySelectorAll('.accordion__item--is-opened');

const forEachHandler = (callback, items) => {
  items.forEach((item) => {
    callback(item);
  });
};

function onclickHandler(accordion) {
  accordion.addEventListener('click', showAccordion);
}

function onloadAccordion() {
  const accordion = document.querySelector('.accordion__item--is-opened');
  const control = accordion.querySelector('.accordion__control');
  const content = accordion.querySelector('p');

  control.setAttribute('aria-expanded', true);
  content.setAttribute('aria-hidden', false);
  content.style.maxHeight = content.scrollHeight + 'px';

  // console.log(accordion);
  // console.log(control);
  // console.log(content);
};

const showAccordion = (accordion) => {
  const self = accordion.currentTarget;
  const control = self.querySelector('.accordion__control');
  const content = self.querySelector('p');

  self.classList.toggle('accordion__item--is-opened');

  if (self.classList.contains('accordion__item--is-opened')) {
    control.setAttribute('aria-expanded', true);
    content.setAttribute('aria-hidden', false);
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    control.setAttribute('aria-expanded', false);
    content.setAttribute('aria-hidden', true);
    content.style.maxHeight = null;
  }
}

forEachHandler(onclickHandler, accordions);
onloadAccordion();

export { onloadAccordion };
