/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselImages = ['mountains', 'turntable', 'computer', 'trees']
let curCarouselIndex = 0;
function createCarousel() {
  let
    wrapper = document.createElement('div'),
    lBut = document.createElement('div'),
    rBut = document.createElement('div'),
    img = document.createElement('img');

  wrapper.classList.add('carousel');
  lBut.classList.add('left-button');
  rBut.classList.add('right-button');

  img.src = `./assets/carousel/${carouselImages[curCarouselIndex]}.jpeg`;

  lBut.textContent = ' < ';
  rBut.textContent = ' > ';

  lBut.addEventListener('click', event => {
    carouselLeft();
  })

  rBut.addEventListener('click', event => {
    carouselRight();
  })

  wrapper.append(lBut, img, rBut);

  return wrapper;
}

function carouselLeft() {
  curCarouselIndex = (curCarouselIndex == 0) ? (carouselImages.length - 1) : (curCarouselIndex -= 1);
  document.querySelector('.carousel img').src = `./assets/carousel/${carouselImages[curCarouselIndex]}.jpeg`;
}

function carouselRight() {
  curCarouselIndex = (curCarouselIndex == (carouselImages.length - 1)) ? 0 : (curCarouselIndex += 1);
  document.querySelector('.carousel img').src = `./assets/carousel/${carouselImages[curCarouselIndex]}.jpeg`;
}

document.querySelector('.carousel-container').appendChild(createCarousel());