document.querySelectorAll('.inlinetable, .info-introduction').forEach(el => {
  if (el.querySelector('caption')) {
    el.classList.add('has-caption');
  }
});
