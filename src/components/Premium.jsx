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


  console.log(type);
  
    return (
        <div className='premium'>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
          <Main goback={type}/>
          <WhatsNew/>
          <Subscription/>
          <SignUp/>
          <FAQ/>
        </div>
    )
}

export default Premium;