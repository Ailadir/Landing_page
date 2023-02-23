var mysong = new Audio();
mysong.src = './ff2.mp3';

const playsong = () => {
  mysong.play();
};

const pausesong = () => {
  mysong.pause();
};

const toHide = document.querySelector('.luffy_text');
const toShow = document.querySelector('.luffy_quote');
window.addEventListener('scroll', () => {
  const fade_time = window.innerHeight / 7;
  const show_time = window.innerHeight * 1.35;
  const scrolled = window.scrollY;
  console.log(`Window height ${show_time}`);
  console.log(scrolled);
  if (scrolled > fade_time) {
    toHide.classList.add('fade');
  } else {
    toHide.classList.remove('fade');
  }
  if (scrolled > show_time) {
    toShow.classList.add('fade_in');
  } else {
    toShow.classList.remove('fade_in');
  }
});
