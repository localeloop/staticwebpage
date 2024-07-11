import React from 'react';
import { Image } from '../Image';
import { TextLogo } from './styles';

interface LogoProps {
    img?: string;
    alt?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Logo = ( { img, alt, onClick, children }: LogoProps ) => {
    let val;

    if ( img && children ){
        throw new Error( 'You can only pass either img or text, not both' );
    }

    if ( img ){
        return (
            <Image src={img} height='100%' width='100%' />
        );
    }

    if ( children ){
        return (
            <TextLogo>{children}</TextLogo>
        );
    }

    return null;
}

export default Logo;