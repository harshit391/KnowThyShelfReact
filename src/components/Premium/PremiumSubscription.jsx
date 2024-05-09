import { JoinButton } from './JoinButton';
import { FAQSection } from './FAQSection';
import { SignUp } from './SignUp';
import { PricingSection } from './PricingSection';
import ModelTour from './ModalTour';
import React from 'react';
import Main from '../Main';
import '../../assets/css/Premium.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function PremiumPage() {
  return (
    <div>
      <JoinButton />
      <Main />
      <ModelTour />
      <PricingSection />
      <SignUp />
      <FAQSection />
    </div>
  );
}

export default PremiumPage;
