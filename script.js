const fadeIns = document.querySelectorAll('.fade-in')

const menuToggle = document.getElementById('menu-toggle')
const navbarMenu = document.getElementById('navbar-menu')

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('hidden')
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.2,
  },
)

fadeIns.forEach((element) => {
  observer.observe(element)
})

const cursor = document.querySelector('.cursor');

document.addEventListener("mousemove",(e)=>{
let x =e.pageX;
let y =e.pageY

cursor.style.top = y+"px";
cursor.style.left = x+"px";
})