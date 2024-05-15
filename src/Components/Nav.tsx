import { CgClose } from 'react-icons/cg';
import {
  Button,
  DesktopList,
  DesktopListItem,
  Logo,
  MenuBar,
  MobileList,
  Nav,
} from '../app';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Props {
  showMenu: boolean;
  handleShowMenu: () => void;
}

function Navbar({ showMenu, handleShowMenu }: Props) {
  return (
    <>
      <Nav>
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

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            whileInView={{ opacity: 1 }}
          >
            <DesktopList>
              <DesktopListItem>
                <a>About</a>
              </DesktopListItem>
              <DesktopListItem>
                <a>Work</a>
              </DesktopListItem>
              <DesktopListItem>
                <a>Contact</a>
              </DesktopListItem>
              <Button
                onClick={() => {
                  window.location.href = './resume.pdf';
                }}
              >
                Resume
              </Button>
            </DesktopList>
          </motion.div>

          <MenuBar className='md:hidden'>
            {showMenu ? (
              <CgClose color='#3699f0' size={24} onClick={handleShowMenu} />
            ) : (
              <FaBars color='#3699f0' size={24} onClick={handleShowMenu} />
            )}
          </MenuBar>

          <MobileList
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ right: showMenu ? '-12px' : '-100%' }}
          >
            <li>
              <a className='text-blue-50'>About</a>
            </li>
            <li>
              <a className='text-blue-50'>Work</a>
            </li>
            <li>
              <a className='text-blue-50'>Contact</a>
            </li>
            <Button
              onClick={() => {
                window.location.href = '../../public/Mujtaba_CV.pdf';
              }}
            >
              Resume
            </Button>
          </MobileList>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
