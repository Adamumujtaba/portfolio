import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Logo } from '../app';
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavbarContainer>
      <NavHeader>
        <Logo href='/'>
          <svg
            stroke='currentColor'
            fill='none'
            viewBox='0 0 300 300'
            width='100%'
            height='100%'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polygon
              strokeWidth={10}
              width={'100%'}
              height={'100%'}
              points='150,15 258,77 258,202 150,265 42,202 42,77'
            />
            <text
              x='150'
              y='150'
              dominant-baseline='middle'
              text-anchor='middle'
              font-size='100'
              stroke='currentColor'
              fill='currentColor'
            >
              M
            </text>
          </svg>
        </Logo>
      </NavHeader>
      <MenuContainer style={{ right: showMenu ? '0px' : '-500px' }}>
        <MenuItem to={'/'}>Home</MenuItem>
        <MenuItem to={'about'}>About</MenuItem>
        {/* <MenuItem to={'contact'}>Contact</MenuItem> */}
        <MenuItem to={''}>
          <Button
            className='btn'
            onClick={() => {
              window.location.href = '../../public/Mujtaba_CV.pdf';
            }}
          >
            Resume
          </Button>
        </MenuItem>
      </MenuContainer>
      <IconContainer onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <IoClose size={30} /> : <FaBars size={20} />}
      </IconContainer>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  width: 100%;
  position: relative;
`;
const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 64px;
    right: 0px;
    height: 100dvh;
    transition: all 0.5s ease-in-out;
    z-index: 99;
    background: rgb(0, 0, 0, 0.9);
  }
`;
const MenuItem = styled(Link)`
  padding: 5px;
  margin: 0px 10px;
  width: 80px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  color: #d0d0d0;
  font-family: var(--font-mono);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    justify-content: flex-start;
    padding: 30px;
    margin: 10px;
  }
`;
const NavHeader = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    .NavHeadings {
      display: none;
    }
  }
`;

const IconContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin: 0px 20px;
    color: white;
  }
`;
