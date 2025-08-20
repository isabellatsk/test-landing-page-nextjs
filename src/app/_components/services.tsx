"use client";
import useEmblaCarousel from "embla-carousel-react"; // importa o hook useEmblaCarousel da biblioteca Embla para criar carrossel
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

// array de objetos representando os serviços oferecidos
const services = [
  {
    title: "Banho e Tosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquam facilis molestias, repellat quam eligendi eum maxime at!",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre banho e tosa e gostaria de mais informações",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquam facilis molestias, repellat quam eligendi eum maxime at!",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre consulta veterinária e gostaria de mais informações",
  },
  {
    title: "Táxi Pet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquam facilis molestias, repellat quam eligendi eum maxime at!",
    duration: "1h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre táxi pet e gostaria de mais informações",
  },
  {
    title: "Hotel para pets",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquam facilis molestias, repellat quam eligendi eum maxime at!",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre hotel para pets e gostaria de mais informações",
  },
];

export function Services() {
  // emblaRef -> referência do container do carrossel
  // emblaApi -> API do carrossel para controlar navegação e ações
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // carrossel não loopa
    align: "start", // slides alinhados no início
    slidesToScroll: 1, // quantos slides rolar por vez
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }, // em telas maiores, rola 3 slides
    },
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
    <section className="bg-[#E84C3D] py-16 px-5">
      {/* seção "Serviços" com fundo vermelho e padding vertical/horizontal */}

      <div className="container mx-auto px-4">
        {/* container centralizado do conteúdo todo */}

        <h2 className="text-white text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative bg-white py-7 rounded-4xl">
          {/* container do carrossel com fundo branco e bordas arredondadas */}

          <div className="overflow-hidden" ref={emblaRef}>
            {/* wrapper do carrossel com referência para o Embla */}
            <div className="flex">
              {/* container flexível que contém todos os slides */}

              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  {/* slide individual, ocupa 100% da largura no mobile e 1/3 no desktop */}

                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    {/* cartão do serviço com fundo escuro, padding e layout vertical */}

                    <div className="flex-1 flex items-start justify-between">
                      {/* container do ícone e texto do serviço */}
                      <div className="flex gap-4">
                        <span className="text-3xl">{item.icon}</span>

                        <div>
                          <h3 className="font-bold text-xl mb-1 my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      {/* rodapé do cartão com duração e botão de contato */}
                      <div className="flex items-center gap-2 text-sm ml-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>

                      <a
                        href={`https://wa.me/5551986102927?text=${item.linkText}`}
                        target="_blank"
                        className="ml-3 p-1 flex items-center justify-center gap-2 hover:bg-[#E84C3D] rounded-md duration-300 leading-tight"
                      >
                        <WhatsappLogoIcon className="w-7 h-7" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute w-10 h-10 bg-[#f19c95] flex items-center justify-center rounded-full shadow-lg left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
            {/* botão para ir para o slide anterior */}
          </button>

          <button
            onClick={scrollNext}
            className="absolute w-10 h-10 bg-[#f19c95] flex items-center justify-center rounded-full shadow-lg -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
            {/* botão para ir para o próximo slide */}
          </button>
        </div>
      </div>
    </section>
  );
}
