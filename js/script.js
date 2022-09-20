/* eslint-disable no-undef */

ScrollReveal().reveal(".teste", {
  origin: "top", // Para ele surgir de cima para baixo.
  distance: "50px", // A distancia do origin para a posição original do elemento.
  duration: 2000, // A duração da animação em ms
  delay: 300, // O delay para a animação acontecer
   // Ao sair do campo de tela, a animação não acontecerá novamente caso eu passe por ela novamente.
});
