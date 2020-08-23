const images = document.querySelectorAll("img");

let Options = {};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    image.src = image.src.replace("&w=10&", "&w=800&");
    observer.unobserve(image);
  });
}, Options);

images.forEach((image) => {
  observer.observe(image);
});
