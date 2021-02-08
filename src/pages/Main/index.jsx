import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';

import './Main.sass';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { setTitle } from '../../store/slices/title';


const Main = () => {
  const dispatch = useDispatch();
  const title = useSelector(state => get(state, ['title', 'title'], null));
  const [titleLocal, setTitleLocal] = useState(title ?? 'Template project');
  const [error, setError] = useState(null);
  const [separator, setSeparator] = useState(<div className = 'main__form_separator'></div>);

  useEffect(() => {    
    if (/^\w+[a-zA-Z ]{1,50}$/.test(titleLocal)) { 
      setSeparator(<div className = 'main__form_separator'></div>);
      setError(null);           
      dispatch(setTitle(titleLocal));      
    } else {
      setSeparator(<div></div>);
      setError('Title: 2-50 symbols, latin letters and spaces only.');   
    }   
  }, [dispatch, titleLocal]);

  return(
    <div>
      <Header>
        {title}
      </Header>

      <Menu/>

      <div className = 'main'>       

        <form className = 'main__form' onSubmit = {(e) => {
          e.preventDefault();
          setTitleLocal(e.target.children[1].value);
        }}>
          <h3 className = 'main__from_h'>
            Enter a title for header
          </h3>

          <input 
            className = {`main__form_input ${error ? 'main__form_input-error' : ''}`} 
            onBlur = {(e) => {
              setTitleLocal(e.target.value);
            }} 
            placeholder = {title}
          />

          <div className = 'main__form_error'>
            {separator}
            {error}
          </div>

          <button className = 'main__form_btn'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
