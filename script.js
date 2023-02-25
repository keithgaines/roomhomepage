const mobileImgSrcs = [
    'images/mobile-image-hero-1.jpg',
    'images/mobile-image-hero-2.jpg',
    'images/mobile-image-hero-3.jpg'
  ];
  const desktopImgSrcs = [
    'images/desktop-image-hero-1.jpg',
    'images/desktop-image-hero-2.jpg',
    'images/desktop-image-hero-3.jpg'
  ];
  const titles = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
  ];
  const texts = [
    'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  ];
  const img = document.getElementById('img');
  const titlesElements = document.querySelectorAll('.text-container h1');
  const textElements = document.querySelectorAll('.text-container p');
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  let index = 0;
  
  function updateContent() {
    if (window.innerWidth >= 768) {
      img.src = desktopImgSrcs[index];
    } else {
      img.src = mobileImgSrcs[index];
    }
    titlesElements.forEach((el, i) => {
      el.textContent = titles[(index + i) % titles.length];
    });
    textElements.forEach((el, i) => {
      el.textContent = texts[(index + i) % texts.length];
    });
  }
  
  function handleResize() {
    updateContent();
  }
  
  leftBtn.addEventListener('click', () => {
    index = index === 0 ? mobileImgSrcs.length - 1 : index - 1;
    updateContent();
  });
  
  rightBtn.addEventListener('click', () => {
    index = (index + 1) % mobileImgSrcs.length;
    updateContent();
  });
  
  window.addEventListener('resize', handleResize);
  
  updateContent();
  