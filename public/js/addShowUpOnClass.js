document.addEventListener('DOMContentLoaded', () => {
  const scrollAnimationElements = document.querySelectorAll('.show_up');

  const scrollAnimationFunction = () => {
    scrollAnimationElements.forEach(element => {
      const triggerMargin = 100;
      if (window.innerHeight > element.getBoundingClientRect().top + triggerMargin) {
        element.classList.add('show_up--on');
      }
    });
  };

  window.addEventListener('scroll', scrollAnimationFunction);
  window.addEventListener('load', scrollAnimationFunction);

  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', scrollAnimationFunction);
    window.removeEventListener('load', scrollAnimationFunction);
  });
});
