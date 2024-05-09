import { AnimationElements } from './AnimationElements';
import { MainTitle } from './MainTitle';
import { JoinButton } from './JoinButton';
import { FAQSection } from './FAQSection';
import { SignUp } from './SignUp';
import { PricingSection } from './PricingSection';
import { ModalTour } from './ModalTour';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Premium.css'


function PremiumPage() {
  return (
    <>
      <JoinButton />
      <MainTitle />
      <AnimationElements />
      <ModalTour />
      <PricingSection />
      <SignUp />
      <FAQSection />
    </>
  );
}

export default PremiumPage;
