const slides = document.querySelectorAll('.slider > div'); 
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const total = slides.length;

function updateSlider() {
   slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

next.addEventListener('click', () => {
    if (index < total - 1) {
        index++;
        updateSlider();
    } else {
        console.log("end");
    }
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlider();
    } else {
        console.log("start");
    }
});

updateSlider();

console.log("JS cargado");

const elementosOcultos = document.querySelectorAll('.hidden');

console.log("Elementos hidden:", elementosOcultos.length);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        console.log("observando:", entrada.target);

        if (entrada.isIntersecting) {
            entrada.target.classList.add('show');
            console.log("mostrando:", entrada.target);
        }
    });
});

elementosOcultos.forEach((elemento) => {
    observador.observe(elemento);
});