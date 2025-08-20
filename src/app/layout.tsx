import type { Metadata } from "next"; // importa o tipo Metadata do Next.js para tipar metadados da página
import "./globals.css";
import { AosInit } from "./_components/aos-init"; // importa o arquivo de inicialização do AOS (animações ao rolar a página)

export const metadata: Metadata = {
  title: "PetShop",
  description:
    "Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.",
};

// componente RootLayout que recebe e renderiza os filhos da página
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AosInit /> {/* chama a inicialização do AOS */}
      </body>
    </html>
  );
}
