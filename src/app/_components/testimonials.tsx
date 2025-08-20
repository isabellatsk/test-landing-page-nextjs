"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.jpg";
import tutor3 from "../../../public/tutor3.jpg";

// array de objetos representando as pessoas
const testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto, fugit sint minus sequi asperiores aliquid mollitia velit delectus quaerat eveniet labore quisquam non recusandae, officia deserunt ullam at inventore.",
    author: "Marianna Silveira",
    role: "Tutora do Toby (Golden Retriever)",
    image: tutor2,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto, fugit sint minus sequi asperiores aliquid mollitia velit delectus quaerat eveniet labore quisquam non recusandae, officia deserunt ullam at inventore.",
    author: "Rafael Marques",
    role: "Tutor do Thor (Bulldog Francês)",
    image: tutor1,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto, fugit sint minus sequi asperiores aliquid mollitia velit delectus quaerat eveniet labore quisquam non recusandae, officia deserunt ullam at inventore.",
    author: "Camila Fernandes",
    role: "Tutora da Mel (Gata)",
    image: tutor3,
  },
];

export function Testmonials() {
  // emblaRef -> referência do container do carrossel
  // emblaApi -> API do carrossel para controlar navegação e ações
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // carrossel não loopa
  });

  // função para ir para o slide anterior
  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  // função para ir para o próximo slide
  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#FFD449] py-16 px-5">
      {/* seção depoimentos com fundo amarelo e padding vertical/horizontal */}

      <div className="container mx-auto px-4">
        {/* container centralizado do conteúdo todo */}

        <h2 className="text-4xl font-bold text-center mb-12">
          depoimentos dos nossos clientes
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* wrapper do carrossel centralizado */}

          <div className="overflow-hidden" ref={emblaRef}>
            {/* container do carrossel com overflow escondido */}
            <div className="flex">
              {/* container flexível contendo todos os slides */}

              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  {/* slide individual ocupando 100% de largura no mobile */}

                  <article className="bg-white text-gray-900 rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    {/* cartão do depoimento com fundo branco e bordas arredondadas */}

                    <div className="flex flex-col items-center text-center space-y-4 px-5">
                      {/* conteúdo do depoimento centralizado */}

                      <div className="relative w-24 h-24">
                        {/* container da imagem do autor */}
                        <Image
                          src={item.image}
                          alt="foto de uma pessoa"
                          quality={100}
                          fill
                          priority
                          sizes="96px"
                          className="object-cover rounded-full border-4 border-[#1e293b]"
                        />
                      </div>
                      <p className="text-gray-900">{item.content}</p>
                      <div>
                        <p className="font-bold text-gray-900">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute w-10 h-10 bg-[#1e293b] flex items-center justify-center rounded-full shadow-lgs left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
            {/* botão para ir para o slide anterior */}
          </button>

          <button
            onClick={scrollNext}
            className="absolute w-10 h-10 bg-[#1e293b] flex items-center justify-center rounded-full shadow-lg -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
            {/* botão para ir para o próximo slide */}
          </button>
        </div>
      </div>
    </section>
  );
}
