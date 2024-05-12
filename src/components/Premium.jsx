import React from 'react';

import "../assets/css/Premium.css";
import Main from './Premium/Main';
import WhatsNew from './Premium/WhatsNew';
import Subscription from './Premium/Subscription';
import SignUp from './Premium/SignUp';
import FAQ from './Premium/FAQ';

const Premium = () => {
    return (
        <div className='premium'>
          <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css"/>
          <Main/>
          <WhatsNew/>
          <Subscription/>
          <SignUp/>
          <FAQ/>
        </div>
    )
}

export default Premium;