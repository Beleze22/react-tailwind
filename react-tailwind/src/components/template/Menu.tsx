import { IconBoxMargin, IconBoxPadding, IconCell, IconDashboard, IconDatabase, IconDeviceMobile, IconDimensions, IconMobiledata, IconNumbers, IconResize, IconSpace } from "@tabler/icons-react";
import MenuGrupo from "./MenuGrupo";
import MenuItem from "./MenuItem";

interface MenuProps {
    className?: string;
}

export default function Menu(props: MenuProps) {
    return (
        <div className={`${props.className ?? ''}`}>
            <MenuGrupo texto="Conceitos"/>
                <MenuItem icone={<IconDashboard />} texto="Tudo é Classes" url="/conceitos/classes"/>
                <MenuItem icone={<IconNumbers />} texto="Componentes" url="/conceitos/componentes"/>
                <MenuItem icone={<IconDeviceMobile />} texto="Mobile First" url="/conceitos/mobile"/>
                <MenuItem icone={<IconDatabase />} texto="Pseudo Classes" url="/conceitos/pseudo"/>
            
            <MenuGrupo texto="Box Model"/>
                <MenuItem icone={<IconBoxPadding />} texto="Box Padding" url="/boxModel/padding"/>
                <MenuItem icone={<IconBoxMargin />} texto="Box Margin" url="/boxModel/margin"/>
                <MenuItem icone={<IconResize />} texto="Box Sizing" url="/boxModel/boxsizing"/>
                <MenuItem icone={<IconDimensions />} texto="Tamanho" url="/boxModel/tamanho"/>
                <MenuItem icone={<IconSpace />} texto="Espaços" url="/boxModel/espacos"/>
            
            <MenuGrupo texto="Flex"/>
                <MenuItem icone={<IconDashboard />} texto="Resumo Flex" url="/flex/inicial"/>
                <MenuItem icone={<IconNumbers />} texto="Redimensionamento" url="/flex/redimensionamento"/>
            
        </div>
    )
}