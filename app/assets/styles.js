import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    bgPrimary:{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100%'
    },
    tinyLogo: {
        width: 450,
        height: 400
    },    
    container: {
      flex: 1,
      backgroundColor: '#303030',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',

    },
    text: {
      color: '#fff'
    }
  });

  export default globalStyles;