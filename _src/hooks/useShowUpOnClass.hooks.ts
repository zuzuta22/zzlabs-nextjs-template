'use client';

import { useEffect } from 'react';

const useShowUpClassOn = (className: string, triggerMargin = 100) => {
  useEffect(() => {
    const scrollAnimationElements = document.querySelectorAll(`.${className}`);

    const scrollAnimationFunction = () => {
      scrollAnimationElements.forEach(element => {
        if (window.innerHeight > element.getBoundingClientRect().top + triggerMargin) {
          element.classList.add(`${className}--on`);
        }
      });
    };

    // 初回読み込み時にスクロール関数を実行
    scrollAnimationFunction();

    window.addEventListener('scroll', scrollAnimationFunction);

    return () => {
      window.removeEventListener('scroll', scrollAnimationFunction);
    };
  }, [className, triggerMargin]);
};

export default useShowUpClassOn;