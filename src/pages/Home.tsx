import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Button,
  Cont,
  Footer,
  HeaderAbout,
  HeaderTitle,
  LeftEmail,
  MiniHeader,
  RightMenuIcon,
  SkilledList,
  Text,
} from '../app';
import UserImage from '../images/mujtaba.jpg';
import Image from '../images/image.jpg';
import { LiaLinkedin } from 'react-icons/lia';
import { GrGithub } from 'react-icons/gr';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
function Home() {
  return (
    <>
      <Container>
        <div className='info'>
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
            <Text style={{ margin: '30px 0px' }}>
              My area of expertise is using React and React Native to optimise
              front-end-to-backend communication while creating user interfaces.
            </Text>
            <Text>
              I possess a strong passion for web development, with a keen focus
              on creating exceptional web experiences. Ever since my early days
              of working with computers, coding has ignited my passion,
              eventually leading me to specialize in web development since 2016.
              I take great pleasure in designing and building visually stunning,
              user-friendly, and feature-rich websites.
            </Text>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5, x: 0 }}
        >
          <a
            href='mailto:mujtabadamu@gmail.com'
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <Button style={{ marginTop: '30px', padding: '15px 20px' }}>
              Talk to me
            </Button>
          </a>
        </motion.div>
      </Container>
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
        <div className='wrapper'>
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5, x: 0 }}
            >
              <HeaderAbout>About</HeaderAbout>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5, x: 0 }}
            >
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
            </motion.div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5, x: 0 }}
          >
            <div className='imageWrapper'>
              <img src={Image} width={'100%'} alt='user_image' />
            </div>
          </motion.div>
        </div>
      </Cont>

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
        </div>
      </Footer>
    </>
  );
}

export default Home;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 500px;
  background-image: url(${UserImage});
  background-repeat: no-repeat;
  transition: var(--transition);
  background-position: center right;
  background-size: contain;

  .info {
    width: 70%;
  }
  @media screen and (max-width: 760px) {
    padding: 0px;
    margin: 5rem auto;
    width: 95%;
    .info {
      width: 100%;
    }
  }
`;
