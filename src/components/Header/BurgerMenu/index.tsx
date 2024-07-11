import {
    StyledBurger
} from './styles';

interface BurgerProps {
    open: boolean;
    setOpen?: any;
}

export const Burger = ({ open, setOpen }: BurgerProps) => {
    return (
      <StyledBurger open={open}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }