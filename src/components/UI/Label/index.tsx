import React from 'react';
import { Props } from './types';
import { LabelStyled } from './styled';
import { colors } from './constants';
const slugify = require('slugify');

const Label: React.FC<Props> = ({ type }) => {
    const typeLabel = slugify(type, '_');
    let colorsBlock =  colors[typeLabel]
    if(!colors[typeLabel]) {
        colorsBlock = colors['default']
    }
    return (
        <LabelStyled colors={colorsBlock} >
            {type}
        </LabelStyled>
    )
}
export default Label;