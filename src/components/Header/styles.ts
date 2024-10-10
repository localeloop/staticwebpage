import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const BurgerButton = styled.button`
  display: none;

  @media only screen and (max-width: 853px) {
    display: block;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: none;
    padding: 10px;
  }
`;

export const BurgerPath = styled(motion.path)`
  stroke: #fff;
  stroke-width: 3;
  stroke-linecap: round;
`;

export const HeaderSection = styled("header")<{ scrolled: boolean }>`
  position: fixed;
  color: rgba(0, 0, 0, 1);
  background: ${props => props.scrolled ? 'rgba(22,22,22,0.8 )' : 'rgba(22,22,22,0.3)'};
  padding: 1rem 0.5rem;
  height: 7rem;
  width: 100%;
  z-index: 2;

  transition: background 0.3s ease;
  -webkit-transition: background 0.3s ease;
  -moz-transition: background 0.3s ease;
  -ms-transition: background 0.3s ease;
  -o-transition: background 0.3s ease;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  position: absolute;
  top: 0;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled.div`
  display: none; // Hide by default

  @media only screen and (max-width: 853px) {
    display: flex; // Show only on mobile screens
    top: 50%;
    width: 2rem;
    right: 20px;
    height: 100%;
    z-index: 1000;
    cursor: pointer;
    position: absolute;
    align-items: center;
    transform: translateY(-50%);
  }
`;


export const Outline = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const MenuItems = styled("div")`
  position: absolute;
  right: 0;

  @media only screen and (max-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;


export const DropdownContainer = styled.div`
  position: absolute;
  background-color: #333;
  min-width: 160px;
  border-radius: 0 2%;
  transition: display 2s ease;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;


export const SocialLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  cursor: pointer;
  display: block;
  &:hover {
    background-color: #333;
  }

  img {
  }
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #ddd;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;


  @media only screen and (max-width: 768px) {
    margin: 2.5rem auto;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #4F6F52;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: light;
  font-size: 1.4rem;
  text-decoration: none;
  color: #fff;
  position: relative;
  font-family: 'Cinzel', sans-serif;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: scaleX(0); 
    transform-origin: left; 
    transition: transform 0.3s ease-in-out;
  }

  &:hover,
  &:active,
  &:focus {
    &::after {
      transform: scaleX(1);
    }
  }

  &:not(:hover) {
    &::after {
      transform-origin: right;
      transform: scaleX(0);
    }
  }
`;