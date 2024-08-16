import React, { CSSProperties } from 'react'

import { Tittle } from '../Typography/Typography';
import { SVG_Icon } from "../Icons/Icons"

// import { TSX_Components } from '../../utils/customTypes';
import { TYPOGRAPHY_LEVEL } from "../../utils/enums"

import styles from "./IconCard.module.css"




export interface IconCardProps extends React.PropsWithChildren {
    name: string;
    id?: string,
    className?: string,
    style?: CSSProperties,
    size?: number;
    color?: string;
}

const IconCard: React.FC<IconCardProps> = ({
    name,
    id = "",
    className = "",
    style = {},
    size = 24,
    color = '#070707'
}) => {

    const combinedClassName = `${styles["icon-card"]} ${className}`;

    return (
        <div
            id={id} className={combinedClassName} style={style}
        >
            <SVG_Icon name={name} size={size} color={color} />
            <Tittle level={TYPOGRAPHY_LEVEL.LEVEL_6}>
                {name}
            </Tittle>
        </div>
    )
}


export { IconCard };