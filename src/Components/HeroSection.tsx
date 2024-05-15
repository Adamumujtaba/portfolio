import { Button, HeaderTitle, MiniHeader, Section, Text } from '../app';
import { motion } from 'framer-motion';
function HeroSection() {
  return (
    <>
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
            <Text
              style={{
                margin: '20px 0px',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '30px',
              }}
              className='txt'
            >
              My area of expertise is using React and React Native to optimise
              front-end-to-backend communication while creating user interfaces.
            </Text>
            <Text className='txt'>
              I possess a strong passion for web development, with a keen focus
              on creating exceptional web experiences. Ever since my early days
              of working with computers, coding has ignited my passion,
              eventually leading me to specialize in web development since 2016.
              I take great pleasure in designing and building visually stunning,
              user-friendly, and feature-rich websites.
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
          <a
            href='mailto:mujtabadamu@gmail.com'
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            <Button style={{ marginTop: '30px', padding: '15px 20px' }}>
              Talk to me
            </Button>
          </a>
        </motion.div>
      </Section>
    </>
  );
}

export default HeroSection;
