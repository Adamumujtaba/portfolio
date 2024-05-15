import { About, Text, HeaderAbout, SkilledList } from '../app';
import UserImage from '../images/image.jpg';

function AboutMe() {
  return (
    <>
      <About>
        <HeaderAbout>About</HeaderAbout>
        <div className='wrapper'>
          <div>
            <Text style={{ width: '100%' }}>
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
          </div>
          <div className='imageWrapper'>
            <img src={UserImage} width={'100%'} alt='user_image' />
          </div>
        </div>
      </About>
    </>
  );
}

export default AboutMe;
