import { StyleSheet } from 'react-native';
import getTheme from './native-base-theme/components';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      backgroundColor: 'pink',
      padding: 20,
    },
    boldText:{
      fontWeight: 'bold',
    },
    body: {
      backgroundColor: 'yellow',
      padding: 20,
      fontWeight:'bold'
    },
    buttonContainer:{
      marginTop:20
    },
    input:{
      borderWidth:1,
      borderColor: '#777',
      margin:10,
      width:100
    },
    rowStyle:{
      margin: 2,
      flexDirection: 'row',
        
    },
    inputTitle:{
      textAlignVertical: 'center',
      width:100
    }
  });

  export default styles;