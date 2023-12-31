// @flow
import { StyleSheet } from 'aphrodite';
import { Colors, Images } from '../../../theme';

export default StyleSheet.create({
  container: {
    maxWidth: 1360,
    margin: '0 auto',
    '@media (max-width: 1400px)': {
      maxWidth: 1140,
      margin: '0px auto 40px'
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px auto',
    maxWidth: 425
  },
  buttonOne: {
    padding: 25,
    width: '100%',
    maxWidth: 224,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: `${Colors.white}`,
    borderRadius: '23px',
    fontWeight: '700',
    boxShadow: 'rgb(133 47 219 / 25%) 0px 8px 10px 0px',
    background: 'linear-gradient(104deg, #b35fe0, #8f77de 122%);',
    border: '1px solid transparent',
    '@media (max-width: 992px)': {
      fontWeight: '600'
    }
  },
  giftIcon: {
    marginRight: 9,
    width: 13,
    height: 17
  },
  buttonTwo: {
    height: '42px',
    padding: '14px 40px',
    borderRadius: '23px',
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.14)',
    background: Colors.white,
    color: Colors.bgGreen,
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    position: 'relative',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 767px)': {
      marginTop: 34
    }
  },
  desription: {
    lineHeight: '1.39em',
    '@media (max-width: 991px)': {
      paddingRight: 0
    }
  },
  headerGraphics: {
    width: '100%',
    '@media (max-width: 991px)': {
      margin: '20px auto',
      width: '80%',
      display: 'flex'
    },
    '@media (max-width: 520px)': {
      width: '100%'
    }
  },
  heroSection: {
    position: 'relative',
    paddingBottom: 60,
    '@media (max-width: 992px)': {
      height: 'auto',
      // paddingBottom: 850,
      paddingTop: '60px'
    },

    '@media (max-width: 767px)': {
      // paddingBottom: 400,
      paddingTop: '0'
    }
  },
  HeightVhs: {
    '@media (max-width: 992px)': {
      height: 'auto !important'
    }
    /* height: '85vh' */
  },
  btnDesign: {
    fontWeight: '700',
    position: 'relative'
  },
  lineHeight12: {
    lineHeight: '1.1 !important',
    width: '100%'
  },
  madeLondonContainer: {
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    margin: '25px 0'
  },
  madeLondonText: {
    fontSize: '1.2em',
    color: `${Colors.text.titleColorTwo}`
  },
  rocketIcon: {
    marginRight: '14px',
    height: '34px',
    width: '47px'
  },
  heroBtnContainer: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '15px',
    '@media (max-width: 767px)': {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    '@media (max-width: 600px)': {
      fontSize: 15
    }
  },
  mt5: {
    marginTop: '30px',
    '@media (max-width: 767px)': {
      marginTop: '0px'
    }
  },
  inputControl: {
    padding: '1.3em 1em',
    border: ' 2px solid #6DDEC6',
    borderRadius: '10px',
    height: 41,
    '::placeholder': {
      color: '#cdcdcd'
    }
  },
  sendBtn: {
    border: '1px solid transparent',
    borderRadius: 23,
    height: 45,
    width: 210,
    boxShadow: '0 8px 10px 0 rgba(61, 159, 117, 0.25)',
    color: Colors.white,
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(104deg, #5edea8, #77deda 122%)',
    '@media (max-width: 600px)': {
      marginTop: 15
    }
  },

  marginRight: {
    marginRight: '20px',
    '@media (max-width: 767px)': {
      marginRight: '0px'
    }
  },
  marginRightMessage: {
    marginRight: '200px',
    '@media (max-width: 767px)': {
      marginRight: '0px'
    }
  },
  selectorPadding: {
    padding: ' 8px 10px '
  },
  formWrapper: {
    '@media (max-width: 1400px)': {
      width: 660
    },
    '@media (max-width: 980px)': {
      width: '100%'
    }
  },
  marginRightMaxWidth: {
    marginRight: 20,
    '@media (max-width: 1400px)': {
      marginRight: 35
    },
    '@media (max-width: 474px)': {
      marginRight: 0
    }
  },
  actionBtnWrapper: {
    '@media (max-width: 767px)': {
      justifyContent: 'center'
    },
    '@media (max-width: 474px)': {
      flexDirection: 'column'
    }
  },
  deliverySecLinks: {
    fontSize: 16,
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 2.22,
    letterSpacing: 0.36,
    color: '#58a4f0'
  }
});
