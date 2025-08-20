// componente que inicializa a biblioteca AOS para animações
// configura a duração das animações e faz com que ocorram apenas uma vez

"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//inicializa a biblioteca
export function AosInit() {
  useEffect(() => {
    Aos.init({
      duration: 800, // duração da animação em milissegundos
      once: true, // apenas uma vez ao aparecer na tela
    });
  }, []); // [] vazio para rodar apenas uma vez ao montar o componente
  return null;
}
