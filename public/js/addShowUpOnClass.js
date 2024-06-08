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

  // 初回読み込み時にスクロール関数を実行
  scrollAnimationFunction();

  window.addEventListener('scroll', scrollAnimationFunction);

  window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', scrollAnimationFunction);
  });
});