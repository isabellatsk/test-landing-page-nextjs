import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react"; // importa os ícones Check e MapPin da biblioteca Lucide Icons
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      {/* seção "Sobre" com fundo claro e padding vertical */}

      <div className="container px-5 mx-auto">
        {/* container centralizado do conteúdo */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* container que separa o conteúdo da imagem e grid que organiza isso em 1 coluna (mobile) e 2 colunas (desktop) */}

          <div className="relative" data-aos="fade-up-right">
            {/* parte da imagem com animação */}

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              {/* container da imagem grande do cachorro */}
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                className="object-cover hover:scale-110 duration-300"
                quality={100}
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              {/* container da imagem menor sobreposta no canto inferior direito */}
              <Image
                src={about2Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-right">
            {/* parte do conteúdo com animação */}

            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

            <ul className="space-y-4">
              {/* lista de informações com ícones */}
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Aberto desde 2003
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Equipe com mais de 10
                veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              {/* container para botões de contato e endereço */}
              <a
                href={`https://wa.me/5551986102927?text=Olá vim pelo site e gostaria de mais informações`}
                target="_blank"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" /> Contato via
                WhatsApp
              </a>
              <a
                href={`https://www.google.com/maps/@-29.919089,-50.9049709,16z?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D`}
                target="_blank"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                Endereço <MapPin className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
