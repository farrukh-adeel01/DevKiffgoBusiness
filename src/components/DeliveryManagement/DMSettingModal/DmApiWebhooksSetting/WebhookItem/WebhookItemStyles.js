// @flow
import { StyleSheet } from 'aphrodite';
import { Colors } from '../../../../../theme';

export default StyleSheet.create({
  wrapper: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    marginTop: '2px',
    borderRadius: '2px'
  },
  itemWrapper: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 10px',
    marginTop: '2px',
    borderRadius: '2px',

    ':hover': {
      backgroundColor: Colors.mineShaft
    }
  },
  selected: {
    background: 'white',
    ':hover': {
      backgroundColor: 'white'
    }
  },
  eventHeading: {
    color: Colors.borderGrey,
    fontSize: '15px'
  },
  title: {
    color: 'white',
    fontSize: '14px'
  },
  titleSelected: {
    color: 'black'
  },
  key: {
    marginTop: '5px',
    color: Colors.borderGrey,
    fontSize: '13px'
  }
});
