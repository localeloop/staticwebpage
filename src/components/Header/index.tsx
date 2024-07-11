import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Image } from "../../common/Image";
import { Button } from "../../common/Button";
import Logo from '../../common/Logo';
import { Link } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  MenuItems,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <MenuItems>
      <CustomNavLinkSmall>
        <Link to="food">
          <Span>{t("Food")}</Span>
        </Link>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall>
        <Link to="whatson">
          <Span>{t("What's On")}</Span>
        </Link>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall>
        <Link to="livemusic">
          <Span>{t("Live Music")}</Span>
        </Link>
      </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: '180px' }}>
          <a 
            href="https://tableagent.com/surrey/the-queens-head/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Span>
              <Button>{t('Reserve Table')}</Button>
            </Span>
          </a>
        </CustomNavLinkSmall>
      </MenuItems>
    );
  };

  return (
    <HeaderSection>
      <Container maxWidth="1700px">
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Logo>The Queen's Head</Logo>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);

// import { useState, useEffect } from "react";
// import { Row, Col, Drawer } from "antd";
// import { withTranslation } from "react-i18next";
// import Container from "../../common/Container";
// import { SvgIcon } from "../../common/SvgIcon";
// import { Button } from "../../common/Button";
// import { Link } from 'react-router-dom';
// import {
//   FloatingBurgerContainer,
//   HeaderSection,
//   LogoContainer,
//   NotHidden,
//   Menu,
//   CustomNavLinkSmall,
//   Label,
//   Outline,
//   Span,
// } from "./styles";
// import { Burger } from "./BurgerMenu";

// const Header = ({ t }: any) => {
//   const [visible, setVisibility] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       setIsScrolled(scrollTop > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const showDrawer = () => {
//     setVisibility(!visible);
//   };

//   const onClose = () => {
//     setVisibility(!visible);
//   };

//   const MenuItem = () => {
//     const scrollTo = (id: string) => {
//       const element = document.getElementById(id) as HTMLDivElement;
//       element.scrollIntoView({
//         behavior: "smooth",
//       });
//       setVisibility(false);
//     };
//     return (
//       <>
//         <CustomNavLinkSmall>
//           <Span>{t("Gallery")}</Span>
//         </CustomNavLinkSmall>
//         <CustomNavLinkSmall
//           style={{ width: "180px" }}
//           onClick={() => scrollTo("contact")}
//         >
//           <Span>
//             <Button>{t("Contact")}</Button>
//           </Span>
//         </CustomNavLinkSmall>
//       </>
//     );
//   };

//   return (
//     <HeaderSection isScrolled={isScrolled}>
//       <Container>
//         <Row justify="space-between">
//           <LogoContainer to="/" aria-label="homepage">
//             <SvgIcon src="logo.svg" width="101px" height="64px" />
//           </LogoContainer>
//           <FloatingBurgerContainer>
//               <Burger open={visible} />
//           </FloatingBurgerContainer>
//         </Row>
//         <Drawer placement="left" closable={false} open={visible} onClose={onClose}>
//           <Col style={{ marginBottom: "2.5rem" }}>
//             <Label onClick={onClose}>
//               <Col span={12}>
//                 <Menu>Menu</Menu>
//               </Col>
//               <Col span={12}>
//                 <Outline />
//               </Col>
//             </Label>
//           </Col>
//           <MenuItem />
//         </Drawer>
//       </Container>
//     </HeaderSection>
//   );
// };

// export default withTranslation()(Header);