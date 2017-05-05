/**
 * Query selector using Vanilla JS and `querySelectorAll`, returning Array instead of NodeList..
 * @param {String} selector
 * @param {HTMLElement} [el=document] - Element to search within.
 * @returns {Array}
 */
function query(selector, el) {
  el = el || document;
  // returning an Array instead of a NodeList
  return Array.prototype.slice.call(el.querySelectorAll(selector));
}

function globalSetup() {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  // External links open in new tab
  query('a[href^=http]').forEach(function (el) {
    el.setAttribute('target', '_blank');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  globalSetup();
});
