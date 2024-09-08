import { useState, lazy, useMemo } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import {
  HeaderSection, LogoContainer,
  NotHidden, Label, Outline,
} from "./styles";

import { MenuToggle as Burger } from "./Burger";

import useWindowSize from '../../hooks/useWindowSize';
import Container from "../../common/Container";
import Logo from '../../common/Logo';

const BookingWidget = lazy(() => import("../../common/BookingWidget"));
const MenuItem = lazy(() => import("./MenuItem"));

const Header = ({ t }: { t: TFunction }) => {
  const [isWidgetVisible, setWidgetVisibility] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();

  const handleWidgetClick = () => {
    setWidgetVisibility(!isWidgetVisible);
    setIsOpen(!isOpen);
  };

  // const memoizedMenuItem = useMemo(() =>
  // );

  const drawerVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <HeaderSection>
      <Container maxWidth="1400px">
        <BookingWidget isVisible={isWidgetVisible} onClose={() => setWidgetVisibility(false)} />
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Logo>The Queen's Head</Logo>
          </LogoContainer>
          <NotHidden>
            <MenuItem handleWidgetClick={handleWidgetClick} t={t} />
          </NotHidden>
          <Burger toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </Row>
        {width <= 768 && (
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={drawerVariants}
            style={{
              position: "fixed",
              top: "10%",
              left: 0,
              bottom: 0,
              width: "75%",
              backgroundColor: "#161616",
              zIndex: 1000,
            }}
          >
            <div>
              <MenuItem handleWidgetClick={handleWidgetClick} t={t} isOpen={isOpen} />
            </div>
          </motion.div>
        )}
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);