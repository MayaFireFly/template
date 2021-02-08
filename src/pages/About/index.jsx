import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

import './About.sass';

import Header from '../../components/Header';
import Menu from '../../components/Menu';


const About = () => {
  const title = useSelector(state => get(state, ['title', 'title'], 'Template project'));

  return(
    <div>
      <Header>
        {title}
      </Header>

      <Menu/>

      <div className = 'about'>
        <p className = 'about__p'>
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
        <p className = 'about__p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed congue ligula tincidunt arcu luctus, vitae congue purus pulvinar. 
          In hac habitasse platea dictumst. 
          Praesent posuere mauris non viverra accumsan. 
          Etiam aliquam pulvinar egestas.
        </p>
        <p className = 'about__p'>
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
