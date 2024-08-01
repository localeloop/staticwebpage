import { useState, lazy, useMemo, Suspense } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { Row, Col, Drawer } from "antd";
import { HeaderSection, LogoContainer, Burger,
  NotHidden, Label, Outline,
} from "./styles";

import useWindowSize from '../../hooks/useWindowSize';
import Container from "../../common/Container";
import Logo from '../../common/Logo';

const LazyDrawer = lazy(() => import("antd").then(module => ({ default: module.Drawer })));
const BookingWidget = lazy(() => import("../../common/BookingWidget"));
const MenuItem = lazy(() => import("./MenuItem"));

const Header = ({ t }: { t: TFunction }) => {
  const [isDrawerVisible, setDrawerVisibility] = useState(false);
  const [isWidgetVisible, setWidgetVisibility] = useState(false);
  // window inner width
  const { width } = useWindowSize();

  const handleWidgetClick = () => {
    setWidgetVisibility(!isWidgetVisible);
    burgerMenuButton();
  };

  const burgerMenuButton = () => {
    setDrawerVisibility(!isDrawerVisible);

    if (isWidgetVisible && width <= 768) {
      setWidgetVisibility(false);
    }
  };

  const memoizedMenuItem = useMemo(() => 
    <MenuItem handleWidgetClick={handleWidgetClick} t={t} />, [t, handleWidgetClick]
  );

  return (
    <HeaderSection>
      <Container maxWidth="1700px">
        <BookingWidget isVisible={isWidgetVisible} onClose={() => setWidgetVisibility(false)} />
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Logo>The Queen's Head</Logo>
          </LogoContainer>
          <NotHidden>
            {memoizedMenuItem}
          </NotHidden>
          <Burger onClick={burgerMenuButton}>
            <Outline />
          </Burger>
        </Row>
        {width <= 768 && ( 
          <LazyDrawer 
            closable={false} 
            open={isDrawerVisible} 
            onClose={burgerMenuButton}
            onClick={burgerMenuButton}
            bodyStyle={{ background: "#161616" }}
          >
            <div>
              <Col style={{ marginBottom: "2.5rem"}}>
                <Label onClick={burgerMenuButton}>
                  <Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Outline style={{padding: "0 0 0 2px", width: '2rem', height: '100%' }} />
                  </Col>
                </Label>
              </Col>
              {memoizedMenuItem}
            </div>
          </LazyDrawer>
        )}
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