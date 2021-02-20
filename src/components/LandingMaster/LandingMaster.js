import React from 'react';
import Landing from '../Landing/Landing';
import t from '../../translations/i18n';
import i18n from 'i18n-js';
import mobileScreenImg from '../../img/mobileScreen.png';

const LandingMaster = () => {
  document.title = 'Fixe Master';

  const language = localStorage.getItem('fixe_landing_master_lang');
  if (language == null) {
    i18n.locale = 'ua';
    localStorage.setItem('fixe_landing_master_lang', 'UA');
  } else {
    i18n.locale = language.toLocaleLowerCase();
  }

  const aboutUsParagraphs = [
    t('landing.aboutUs.p1'),
    t('landing.aboutUs.p2'),
    t('landing.aboutUs.p3')];
  const reasonsCorgiText = t('landing.reasons.corgiText');
  const reasonsParagraphs = [
    {reason: t('landing.reasons.reason1'),
      description: t('landing.reasons.reasonDesc1')},
    {reason: t('landing.reasons.reason2'),
      description: t('landing.reasons.reasonDesc2')},
    {reason: t('landing.reasons.reason3'),
      description: t('landing.reasons.reasonDesc3')},
  ];
  const howItWorksParagraphs = [t('landing.howItWorks.p2')];
  const howItWorksSubtitle = t('landing.howItWorks.subtitle');

  return (
    <Landing
      aboutUsParagraphs={aboutUsParagraphs}
      reasonsParagraphs={reasonsParagraphs}
      mobileScreenImg={mobileScreenImg}
      howItWorksParagraphs={howItWorksParagraphs}
      howItWorksSubtitle={howItWorksSubtitle}
      landingType={'master'}
      reasonsCorgiText = {reasonsCorgiText}
    />
  );
};

export default LandingMaster;
