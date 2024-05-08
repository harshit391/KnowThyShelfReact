import { AnimationElements } from './AnimationElements';
import { MainTitle } from './MainTitle';
import { JoinButton } from './JoinButton';
import { FAQSection } from './FAQSection';
import { SignUp } from './SignUp';
import { PricingSection } from './PricingSection';
import { ModalTour } from './ModalTour';
import React from 'react';
// import '../../assets/css/Premium.css'


function PremiumPage() {
  return (
    <div>
      <JoinButton />
      <MainTitle />
      <ModalTour />
      <PricingSection />
      <SignUp />
      <FAQSection />
    </div>
  );
}

export default PremiumPage;
