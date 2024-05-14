import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaBars, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LiaLinkedin } from 'react-icons/lia';
import { GrGithub } from 'react-icons/gr';
import { BsTwitterX } from 'react-icons/bs';

import {
  Button,
  DesktopList,
  DesktopListItem,
  HeaderAbout,
  Cont,
  HeaderTitle,
  LeftEmail,
  Logo,
  MenuBar,
  MiniHeader,
  MobileList,
  Nav,
  RightMenuIcon,
  Section,
  SkilledList,
  Text,
  Footer,
} from './app';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
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
                  window.location.href = '../../public/Mujtaba_CV.pdf';
                }}
              >
                Resume
              </Button>
            </DesktopList>
          </motion.div>

          <MenuBar className='md:hidden'>
            {showMenu ? (
              <CgClose color='#fff' size={24} onClick={handleShowMenu} />
            ) : (
              <FaBars color='#fff' size={24} onClick={handleShowMenu} />
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
          </MobileList>
        </div>
      </Nav>

      <main
        style={{
          color: '#fff',
          position: 'relative',
          // minHeight: '90vh',
          width: '100%',
          margin: '0 auto',
          filter: showMenu ? 'blur(5px) brightness(0.7)' : '',
        }}
      >
        <Section>
          <motion.div>
            <motion.h3
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, x: 0 }}
              style={{ color: '#cdc5c5' }}
            >
              <MiniHeader>Hi, my name is</MiniHeader>
            </motion.h3>
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5, x: 0 }}
            >
              <HeaderTitle>Mujtaba Adamu</HeaderTitle>
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5, x: 0 }}
            >
              <Text>
                My area of expertise is using React and React Native to optimise
                front-end-to-backend communication while creating user
                interfaces.
              </Text>
              <Text>
                I possess a strong passion for web development, with a keen
                focus on creating exceptional web experiences. Ever since my
                early days of working with computers, coding has ignited my
                passion, eventually leading me to specialize in web development
                since 2016. I take great pleasure in designing and building
                visually stunning, user-friendly, and feature-rich websites.
              </Text>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5, x: 0 }}
          >
            <Button
              onClick={() => {
                window.location.href = 'mailto:mujtabadamu@gmail.com';
                // window.location.href = 'mailto:someone@example.com';
              }}
              style={{ marginTop: '30px', padding: '15px 20px' }}
            >
              Talk to me
            </Button>
          </motion.div>
        </Section>

        <RightMenuIcon>
          <motion.li>
            <motion.a
              href='https://linkedin.com/in/mujtaba-adamu'
              target='_blank'
            >
              <LiaLinkedin size={25} />
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a href='https://github.com/Adamumujtaba/' target='_blank'>
              <GrGithub size={20} />
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a href='https://twitter.com/Mujtaba__ibb' target='_blank'>
              <BsTwitterX size={20} />
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a
              href='https://www.facebook.com/mujtaba.adamu.77'
              target='_blank'
            >
              <FaFacebook size={20} />
            </motion.a>
          </motion.li>
        </RightMenuIcon>
        <LeftEmail>
          <motion.a>mujtaba@gmail.com</motion.a>
        </LeftEmail>

        <Cont>
          <HeaderAbout>About</HeaderAbout>
          <Text>
            I am a full-stack web developer with a passion for creating
            exceptional user experiences. I have a keen interest in web
            development, with a strong focus on creating visually stunning,
            user-friendly, and feature-rich websites.
          </Text>
          <Text>
            Here are a few technologies I've been working with recently:
          </Text>
          <SkilledList>
            <li>(Type, Java)Script</li>
            <li>HTML & CSS</li>
            <li>Rest APIs</li>
            <li>ES6+</li>
            <li>React</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>Git & Git(hub,lab)</li>
          </SkilledList>
        </Cont>

        <Cont>
          <Footer>
            <p className='txt'>Design and build by Mujtaba Adamu</p>
            <div className='icon'>
              <motion.li>
                <motion.a
                  href='https://linkedin.com/in/mujtaba-adamu'
                  target='_blank'
                >
                  <LiaLinkedin size={25} />
                </motion.a>
              </motion.li>
              <motion.li>
                <motion.a
                  href='https://github.com/Adamumujtaba/'
                  target='_blank'
                >
                  <GrGithub size={20} />
                </motion.a>
              </motion.li>
              <motion.li>
                <motion.a
                  href='https://twitter.com/Mujtaba__ibb'
                  target='_blank'
                >
                  <BsTwitterX size={20} />
                </motion.a>
              </motion.li>
              <motion.li>
                <motion.a
                  href='https://www.facebook.com/mujtaba.adamu.77'
                  target='_blank'
                >
                  <FaFacebook size={20} />
                </motion.a>
              </motion.li>
            </div>
          </Footer>
        </Cont>
      </main>
    </div>
  );
}

export default App;
