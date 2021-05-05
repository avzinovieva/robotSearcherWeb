import React from 'react';

export default {
  loading: {
    header: 'Loading',
  },
  ordersList: {
    header: 'OrderList',
    inputSearchPlaceholder: 'Order id',
    orderTableHeaders: {
      userName: 'User name',
      orderId: 'Order id',
      requestData: 'Creation date',
      moneyAmount: 'Price',
    },
  },
  noMatch: {
    header: 'Page is not exist',
  },
  login: {
    header: 'Login',
    button: 'Login',
    name: 'Username',
    password: 'Password',
    error: 'Incorrect login or password',
  },
  placeholders: {
    modalWindowInputName: 'Work type name',
    modalWindowInputPrice: 'Work default price',
  },
  modalWindow: {
    button: 'Save',
  },
  topBar: {
    exitButton: 'Log out',
    categories: 'Categories',
    orders: 'Orders',
    users: 'Users',
    payment: 'Payment',
  },
  categories: {
    placeholder: 'Name',
    header: 'Categories',
    buttons: {
      delete: 'Delete',
      edit: 'Edit',
      workTypesButtonName: 'Work types',
    },
  },
  workTypesDetails: {
    header: 'Work types',
    cards: {
      buttonEdit: 'Edit',
      buttonDelete: 'Delete',
    },
  },
  mastersList: {
    header: 'Masters list',
    inputSearchPlaceholder: 'User name',
  },
  mastersRequestsList: {
    header: 'Masters requests',
    inputSearchPlaceholder: 'User name',
    button: {
      buttonAccept: 'Accept',
      buttonDecline: 'Decline',
    },
    accept: {
      modal: {
        title: 'Master acceptation',
        subtitle: 'Are you sure you want to accept this master?',
        buttonYes: 'Yes',
        buttonNo: 'No',
      },
    },
    decline: {
      modal: {
        title: 'Master rejection',
        subtitle: 'Please tell the reason for decline',
        buttonYes: 'Accept',
        buttonNo: 'Cancel',
      },
    },
  },
  landing: {
    banner: {
      aboutUs: 'About us',
      contacts: 'Contacts',
      investors: 'For investors',
      corgiText: 'Are you master of your craft?',
      subtitle1: 'Looking for your clients?',
      subtitle2: 'Quarantine is killing your business?',
    },
    aboutUs: {
      title: 'About us',
      p1: 'Fixe will help you find clients in your craft.',
      p2: 'Side job or main job?',
      p3: 'With us, you will always have a way'
          + ' to receive money for what you can do perfectly!',
    },
    reasons: {
      title: 'Why is it worth working with us?',
      corgiText: '- is a convenient way to have a'
          + ' huge selection of orders at the best price per work.',
      reason1: 'Constant flow of clients',
      reasonDesc1: 'will help you work on a'
          + ' flexible schedule and always have a way to earn money at hand.',
      reason2: 'Rating system',
      reasonDesc2: 'will protect you from unscrupulous clients,'
          + ' and moderators will help you resolve conflict situations.',
      reason3: 'Regular payments',
      reasonDesc3: 'will help you to safely receive money'
          + ' for completed orders directly to your bank card.',
    },
    howItWorks: {
      title: 'How it works?',
      p1: 'It\'s simple!',
      p2: 'Register and receive your first orders within a few minutes.',
      subtitle: 'Get the next orders in your city right now!',
    },
    footer: {
      title: 'Enter your phone number and '
          + 'we will send an SMS with a link to download the application',
      getLink: 'Get the link',
      android: 'Fixe for android',
      download: 'Download the app',
      soon: 'coming soon to',
      qrCode: 'code to download the application',
      city: 'с. Kharkiv',
      socials: 'We are in social networks',
      errors: {
        minimumLength: 'Too short',
        maximumLength: 'To long',
        required: 'Required',
      },
    },
  },
  pagination: {
    nextToPageLegend: 'Go to page',
  },
  landingCustomer: {
    banner: {
      aboutUs: 'About us',
      contacts: 'Contacts',
      investors: 'For investors',
      corgiText: 'Refer to trusted masters',
      subtitle1: 'Something, as always at the wrong time, broke?',
      subtitle2: 'Urgent need to fix?',
    },
    aboutUs: {
      title: 'About us',
      p1: 'Find the nearest specialist,'
          + ' who will solve your issue in the Fixe application',
      p2: 'Hundreds of masters and specialists,'
          + ' literally a few minutes from you, '
          + 'will solve your problem efficiently and quickly',
    },
    reasons: {
      corgiText: '- it is a convenient way to find a solution to your problem at the best price for work.',
      reason1: 'Facilities',
      reasonDesc1: 'Simple and fast order registration.',
      reason2: 'Security',
      reasonDesc2: 'Work only with trusted masters '
          + 'and view reviews from other users.',
      reason3: 'Speed',
      reasonDesc3: 'All the masters are just minutes from you.',
      reason4: 'Choice',
      reasonDesc4: 'More than 100 types of work.'
          + ' Monthly addition of new categories of specialists.',
    },
    howItWorks: {
      title: 'How it works?',
      p1: 'It\'s simple!',
      p2: 'Chat with the masters'
          + ' in the application and clarify all the nuances.',
      p3: 'Leave a review and rating of the master after the completed order.',
      p4: 'Pay by card in a few moments.',
      p5: 'Contact the online moderator with any question.',
      subtitle: 'Download the app and'
          + ' solve any breakdown quickly and without nerves!',
    },
  },
};
