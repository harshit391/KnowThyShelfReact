import React from 'react';

import "../assets/css/Premium.css";
import Main from './Premium/Main';
import WhatsNew from './Premium/WhatsNew';
import Subscription from './Premium/Subscription';
import SignUp from './Premium/SignUp';
import FAQ from './Premium/FAQ';

import { useSearchParams } from 'react-router-dom';


const Premium = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  
    return (
        <div className='premium'>
          <Main goback={type}/>
          <WhatsNew/>
          <Subscription/>
          <SignUp/>
          <FAQ/>
        </div>
    )
}

export default Premium;