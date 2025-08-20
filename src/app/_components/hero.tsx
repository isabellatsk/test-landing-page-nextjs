import Image from "next/image";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"; // importa o ícone do WhatsApp da Phosphor Icons
// é necessário declarar "..dist/ssr" para que funcione corretamente em projetos com Server-Side Rendering (SSR)

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      {/* Seção principal do banner */}

      <div>
        {/* Container da imagem de fundo para mobile e overlay */}
        <Image
          src={dogImg}
          alt="foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        {/* Imagem do cachorro em modo cover, visível apenas em telas pequenas */}

        <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
        {/* Overlay preta semi-transparente sobre a imagem, visível em telas pequenas */}
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-5 relative">
        {/* Container centralizado do conteúdo */}

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Container que separa o conteúdo da imagem e grid que organiza isso em 1 coluna (mobile) e 2 colunas (desktop) */}

          <div className="space-y-6">
            {/* Coluna principal (conteúdo) com espaçamento entre elementos */}

            <h1
              className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10"
              data-aos="fade-down"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>

            <p className="lg:text-base" data-aos="fade-right">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <div>
              {/* Container do botão de contato */}
              <a
                data-aos="fade-up"
                data-aos-delay="500"
                href={`https://wa.me/5551986102927?text=Olá vim pelo site e gostaria de mais informações`}
                target="_blank"
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogoIcon className="w-5 h-5 " />
                Contato via WhatsApp
              </a>
            </div>

            <div className="mt-8">
              {/* Container da promoção */}
              <p className="text-sm mb-4">
                <b className="bg-black text-white rounded-md px-2 py-1">5%</b>
                de desconto na primeira compra
              </p>
            </div>

            <div className="flex mt-4">
              {/* Container da imagem do gato */}
              <div className="w-32 hidden lg:block">
                <Image
                  src={catImg}
                  alt="Foto do gato"
                  quality={100}
                  className="object-fill"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            {/* Coluna secundária com imagem do cachorro, visível apenas em tablets e desktops */}
            <Image
              src={dogImg}
              alt="Foto do cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0px, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
