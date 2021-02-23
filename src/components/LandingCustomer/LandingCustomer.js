import React from 'react';
import i18n from 'i18n-js';
import Landing from '../Landing/Landing';
import t from '../../translations/i18n';
import mobileScreenImg from '../../img/mobileScreenCustomer.png';

const LandingCustomer = () => {
  document.title = 'Fixe Customer';

  const language = localStorage.getItem('fixe_landing_master_lang');
  if (language == null) {
    i18n.locale = 'ua';
    localStorage.setItem('fixe_landing_master_lang', 'UA');
  } else {
    i18n.locale = language.toLocaleLowerCase();
  }

  const aboutUsParagraphs = [
    t('landingCustomer.aboutUs.p1'),
    t('landingCustomer.aboutUs.p2')];
  const reasonsCorgiText = t('landingCustomer.reasons.corgiText');
  const reasonsParagraphs = [
    {
      reason: t('landingCustomer.reasons.reason1'),
      description: t('landingCustomer.reasons.reasonDesc1'),
    },
    {
      reason: t('landingCustomer.reasons.reason2'),
      description: t('landingCustomer.reasons.reasonDesc2'),
    },
    {
      reason: t('landingCustomer.reasons.reason3'),
      description: t('landingCustomer.reasons.reasonDesc3'),
    },
    {
      reason: t('landingCustomer.reasons.reason4'),
      description: t('landingCustomer.reasons.reasonDesc4'),
    },
  ];
  const howItWorksParagraphs = [
    t('landingCustomer.howItWorks.p2'),
    t('landingCustomer.howItWorks.p3'),
    t('landingCustomer.howItWorks.p4'),
    t('landingCustomer.howItWorks.p5')];
  const howItWorksSubtitle = t('landingCustomer.howItWorks.subtitle');
  const downloadLink = 'https://bit.ly/Fixe_Beta';

  return (
    <Landing
      aboutUsParagraphs={aboutUsParagraphs}
      reasonsParagraphs={reasonsParagraphs}
      howItWorksParagraphs={howItWorksParagraphs}
      howItWorksSubtitle={howItWorksSubtitle}
      mobileScreenImg={mobileScreenImg}
      landingType="customer"
      reasonsCorgiText={reasonsCorgiText}
      downloadLink={downloadLink}
    />
  );
};

export default LandingCustomer;
