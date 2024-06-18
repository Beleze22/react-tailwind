import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import UsuarioInfo from "./UsuarioInfo";
import { IconMoon, IconSun } from "@tabler/icons-react";

interface PaginaProps {
    children: any;
}

export default function Pagina(props: PaginaProps) {
    const [tema, setTema] = useState<'dark' | ''>('dark')

    function alterarTema() {
        tema === 'dark' ? setTema('') : setTema('dark')
    }

    const usuario = {
        nome: 'Gustavo Beleze',
        email: 'gustavo.beleze@gmail.com',
        imagemUrl: 'https://media.licdn.com/dms/image/C4D03AQHDlTMzjmLx9A/profile-displayphoto-shrink_400_400/0/1657268196462?e=2147483647&v=beta&t=WLC_2qTDZC016VXrPm-e9-9rbCLF4NYdDNCpJm8VbYo',
    }
    return (
        <div className={`flex h-screen ${tema}`}>
            <aside className="bg-zinc-300 dark:bg-zinc-800 w-80 text-white flex flex-col relative">
                <Logo className="pt-7 px-7"/>
                <Menu className="pt-3.5 px-7 pb-24 overflow-auto" />
                
                <div className="fixed bottom-0 bg-zinc-300 dark:bg-zinc-800 w-80">
                    <hr className="mx-7 border-zinc-700"/>
                    <UsuarioInfo className="p-5 text-zinc-500" {...usuario}/>
                </div>
                <button className="absolute right-2 top-2" onClick={alterarTema}>
                    {tema === 'dark' ? <IconSun /> : <IconMoon />}
                </button>
            </aside>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    )
}