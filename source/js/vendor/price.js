const tabs = document.querySelector('.price__tabs');
const tabButtons = tabs.querySelectorAll('.tabs__button');
const tabPanels = tabs.querySelectorAll('.tabs__panel');
const tabPanelsArray = Array.from(tabPanels);

const forEachHandler = (callback, items) => {
  items.forEach((item) => {
    callback(item);
  });
};

const showTab = (evt) => {
  const tabControl = evt.target.attributes['aria-controls'].value;
  console.log(tabControl);
  forEachHandler(removeActive, tabButtons);
  forEachHandler(hiddenPanel, tabPanels);
  evt.currentTarget.setAttribute('aria-selected', true);
  evt.currentTarget.classList.add('tabs__button--border-active');

  const tabPanel = tabPanelsArray.find((panel) => {
    if (panel.id === tabControl) {
      return true;
    }
  });
  tabPanel.classList.remove('tabs__panel--hidden');
  tabPanel.classList.add('tabs__panel--is-current');
};

function onclickHandler(button) {
  button.addEventListener('click', showTab);
}

function removeActive(button) {
  button.setAttribute('aria-selected', false);
  button.classList.remove('tabs__button--border-active');
}

function hiddenPanel(panel) {
  panel.classList.remove('tabs__panel--is-current');
  panel.classList.add('tabs__panel--hidden');
}

forEachHandler(onclickHandler, tabButtons);
