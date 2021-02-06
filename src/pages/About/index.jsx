import React from 'react';
import { useHistory } from 'react-router-dom';

import './About.sass';
import back from '../../assets/svg/back.svg';

import Header from '../../components/Header';


const About = () => {
  const history = useHistory();

  return(
    <div>
      <Header
        left = { <img src = {back} onClick = {e => history.goBack() } />}
      >
        About
      </Header>

      <div className = 'about'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed congue ligula tincidunt arcu luctus, vitae congue purus pulvinar. 
          In hac habitasse platea dictumst. 
          Praesent posuere mauris non viverra accumsan. 
          Etiam aliquam pulvinar egestas. 
          Aliquam tincidunt odio porta imperdiet vulputate. 
          Sed consequat aliquet porta. 
          Quisque a vehicula sem, id mattis magna. 
          Quisque posuere lorem ac sem semper, id vulputate augue hendrerit. 
          Curabitur aliquet orci et justo fermentum, eget hendrerit magna maximus. 
          Proin viverra pretium luctus.
        </p>
      </div>
    </div>
  );
};

export default About;
