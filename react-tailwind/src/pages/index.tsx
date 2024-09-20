import Image from "next/image";
import { Inter } from "next/font/google";
import Pagina from "@/components/template/Pagina";
import InputName from "@/components/InputName"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Pagina>
      Página Inicial
      <InputName />
    </Pagina>
  );
}
