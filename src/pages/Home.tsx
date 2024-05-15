import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LiaLinkedin } from 'react-icons/lia';
import { GrGithub } from 'react-icons/gr';
import { BsTwitterX } from 'react-icons/bs';
import { LeftEmail, RightMenuIcon, Footer } from '../app';
import Navbar from '../Components/Nav';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';

function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Navbar handleShowMenu={handleShowMenu} showMenu={showMenu} />

      <main
        style={{
          color: '#fff',
          position: 'relative',
          // minHeight: '90vh',
          width: '100%',
          margin: '0 auto',
          overflowX: 'hidden',
          filter: showMenu ? 'blur(5px) brightness(0.7)' : '',
        }}
      >
        <HeroSection />

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

        <>
          <AboutMe />
        </>

        <>
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
        </>
      </main>
    </div>
  );
}

export default Home;
