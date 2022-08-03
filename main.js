const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primeryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  primeryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expended', false)
    : navToggle.setAttribute('aria-expended', true);
  primeryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});
