export function lazyload(node, src) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        node.src = src;
        observer.unobserve(node);
      }
    });
  }, { rootMargin: '500px 0px' });

  observer.observe(node);

  return {
    destroy() { observer.disconnect(); }
  };
}
