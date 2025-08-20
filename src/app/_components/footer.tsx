import whiskas from "../../../public/whiskas.png";
import golden from "../../../public/golden.png";
import natural from "../../../public/natural.png";
import primier from "../../../public/primier.png";
import royal from "../../../public/royal.png";
import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

// array de objetos representando as marcas parceiras
const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
];

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white px-6">
      {/* seção parceiros e rodapé com fundo vermelho, texto branco e padding */}

      <div className="container mx-auto px-4">
        {/* container centralizado do conteúdo todo */}

        <div className="border-b border-white/20 pb-8">
          {/* parte dos parceiros com borda inferior */}

          <h4 className="text-3xl font-semibold mb-8 text-center">
            nossos parceiros
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {/* grid de logos dos parceiros */}

            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                {/* cartão individual do parceiro */}
                <Image
                  src={item.logo}
                  alt={item.name}
                  quality={100}
                  width={100}
                  height={50}
                  style={{ width: "auto", height: "auto" }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          {/* parte do rodapé com 3 colunas responsivas */}

          <div>
            {/* coluna 1: informações da empresa */}
            <h3 className="text-2xl font-semibold mb-2">pet shop dev</h3>
            <p className="mb-4">
              cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a
              href={`https://wa.me/5551986102927?text=Olá vim pelo site e gostaria de mais informações`}
              target="_blank"
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              contato via whatsapp
            </a>
          </div>

          <div>
            {/* coluna 2: contatos */}
            <h3 className="text-2xl font-semibold mb-2">contatos</h3>
            <p>email: teste@gmmail.com</p>
            <p>telefone: 5598989898</p>
            <p>rua x, centro, campo grande | ms</p>
          </div>

          <div>
            {/* coluna 3: redes sociais */}
            <h3 className="text-2xl font-semibold mb-2">redes sociais</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank">
                <FacebookLogoIcon className="w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank">
                <InstagramLogoIcon className="w-8 h-8" />
              </a>
              <a href="https://youtube.com" target="_blank">
                <YoutubeLogoIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
