import { IconDotsVertical } from "@tabler/icons-react"
import Image from "next/image"

interface UsuarioInfoProps {
    nome: string,
    email: string,
    imagemUrl: string,
    className?: string,
}

export default function UsuarioInfo(props: UsuarioInfoProps) {
    return (
        <div className={`flex gap-2 ${props.className ?? ''}`}>
            <Image 
                src={props.imagemUrl}
                alt='user avatar'
                height={40}
                width={40}
                className="rounded-full"
            />
            <div className="flex flex-col text-sm ">
                <span>{props.nome}</span>
                <span>{props.email}</span>
            </div>
            <div className="flex-1"></div>
            <IconDotsVertical className="cursor-pointer"/>
        </div>
    )
}