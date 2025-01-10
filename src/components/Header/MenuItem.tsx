import { TFunction } from 'i18next';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Button } from '../../common/Button';
import useWindowSize from '../../hooks/useWindowSize';
import { MenuItems, CustomNavLinkSmall, Span } from './styles';

const menuItemVariants = {
  open: { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
  closed: { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
};

const MenuItem = ({ handleWidgetClick, t, isOpen }: { handleWidgetClick: () => void, t: TFunction, isOpen?: boolean }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <MenuItems
      as={motion.div}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={isMobile ? {
        open: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      } : {}}
    >
      <CustomNavLinkSmall as={motion.div} variants={isMobile ? menuItemVariants : {}}>
        <NavLink to="food">
          <Span>{t("Food")}</Span>
        </NavLink>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall as={motion.div} variants={isMobile ? menuItemVariants : {}}>
        <NavLink to="whatson">
          <Span>{t("What's On")}</Span>
        </NavLink>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall as={motion.div} variants={isMobile ? menuItemVariants : {}}>
        <NavLink to="livemusic">
          <Span>{t("Live Music")}</Span>
        </NavLink>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall as={motion.div} variants={isMobile ? menuItemVariants : {}} style={{ width: '180px' }}>
        <Button onClick={ handleWidgetClick}>{t('Reserve Table') }</Button>
      </CustomNavLinkSmall>
    </MenuItems>
  );
};

export default MenuItem;