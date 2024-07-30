import {
    StyledBurger
} from './styles';

interface BurgerProps {
    open: boolean;
    setOpen?: any;
}

export const Burger = ({ open, setOpen }: BurgerProps) => {
    return (
      <StyledBurger className="burgerMenu" open={open}>
        <div className="burger-top"/>
        <div />
        <div />
      </StyledBurger>
    )
  }