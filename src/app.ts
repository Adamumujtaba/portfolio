import { motion } from 'framer-motion';
import UserImage from './images/mujtaba.jpg';
import styled from 'styled-components';

export const Button = styled.button`
  all: unset;
  padding: 10px 10px;
  border-radius: 3px;
  border: 1px solid #3699f0;
  font-size: small;
  font-family: var(--font-mono);
  min-width: 60px;
  text-align: center;
  color: #3699f0;
  cursor: pointer;
`;
export const Section = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 10rem;
  background-image: url(${UserImage});
  background-repeat: no-repeat;
  transition: var(--transition);
  background-position: center right;
  background-size: contain;
  /* background-attachment: fixed; */
  /* background: red; */
  @media screen and (max-width: 760px) {
    padding: 0px;
    margin: 5rem auto;
    width: 95%;
  }
`;

export const MiniHeader = styled.h2`
  font-weight: 400;
  font-family: var(--font-mono);
  font-size: 14px;
  color: #3699f0;
`;
export const HeaderTitle = styled.h1`
  font-family: var(--font-mono);
  font-size: clamp(40px, 6vw, 80px);
  color: #d0d0d0d0;
`;
export const Logo = styled.a`
  display: block;
  height: 42px;
  width: 42px;
  color: #3699f0;
  font-family: var(--font-sans);
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 80px;
  position: relative;
  width: 95%;
`;

export const DesktopList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  /* background: red; */
  animation-duration: 2000ms;
  opacity: 1;
  list-style: none;
  font-size: small;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuBar = styled.li`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const DesktopListItem = styled.li`
  color: #fff;
  font-family: var(--font-mono);
`;

export const MobileList = styled(motion.ul)`
  display: none;
  li {
    color: #fff;
    list-style-type: none;
    font-family: var(--font-sans);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    position: absolute;
    padding-top: 3rem;
    top: 70px;
    width: 60%;
    height: 100vh;
    background-color: #070707;
    /* background-color: red; */
    right: -12px;
    z-index: 3;
    transition: all 0.5s ease-in-out;
  }
`;
export const RightMenuIcon = styled(motion.ul)`
  position: fixed;
  display: flex;
  flex-direction: row;
  list-style-position: inside;
  padding: 0px;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: start;
  gap: 5px;
  box-sizing: border-box;
  bottom: 0;
  left: 20px;
  &::after {
    content: '';
    padding: 0.6px;
    margin: 5px 10px;
    background: #fff;
    height: 130px;
    width: 0.5px;
    display: block;
  }
  a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 0.5px;
    width: 25px;
    box-sizing: border-box;
    text-align: center;
  }
  a:hover {
    transform: scale(1.2);
    transition: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    color: #3699f0;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const LeftEmail = styled(motion.a)`
  /* background: #0dffce; */
  /* background: #1546a3; */
  writing-mode: vertical-lr;
  position: fixed;
  display: flex;
  flex-direction: row;
  right: 20px;
  /* left: 0px; */
  bottom: 0;
  &:hover {
    color: #1546a3;
  }
  a {
    font-family: var(--font-mono);
    color: #d0d0d0d0;
  }
  &::after {
    content: '';
    padding: 0.6px;
    margin: 5px 10px;
    background: #fff;
    height: 130px;
    width: 0.4px;
    display: block;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.div`
  font-family: var(--font-sans);
  line-height: 1.4rem;
  text-align: justify;
  color: #d0d0d0d0;
`;

export const About = styled.div`
  width: 80%;
  margin: auto;

  .wrapper {
    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    div {
      width: 500px;
    }
    .imageWrapper {
      width: 300px;
      img {
        box-shadow: 5px 10px #888888;
        filter: grayscale(100%) contrast(1);
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const HeaderAbout = styled.h1`
  font-family: var(--font-mono);
  font-size: clamp(20px, 4vw, 40px);
  display: flex;
  align-items: center;
  gap: 10px;
  color: #d0d0d0d0;
  &::after {
    content: '';
    padding: 1px;
    width: 300px;
    background: #d0d0d0d0;
  }
`;

export const SkilledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 0px;

  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
  font-family: var(--font-mono);
  font-size: small;
  color: #d0d0d0d0;
  li::before {
    content: '▹';
    color: #3699f0;
    margin: 10px;
    line-height: 25px;
  }
`;
// content: "▹";

export const Footer = styled.footer`
  font-size: smaller;
  font-family: var(--font-mono);
  text-align: center;
  padding: 2rem 0px;
  color: #d0d0d0d0;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 20px;
    a {
      color: #d0d0d0d0;
    }
  }

  @media screen and (min-width: 768px) {
    .txt {
      display: block;
    }
    .icon {
      display: none;
    }
  }
`;
