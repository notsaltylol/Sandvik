import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: windowWidth,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      backgroundColor: 'pink',
      padding: '10%',
    },
    boldText:{
      fontWeight: 'bold',
    },
    body: {
      backgroundColor: 'yellow',
      padding: '10%',
      fontWeight:'bold'
    },
    buttonContainer:{
      marginTop:'10%',
      fontSize: 30,
      fontWeight: '600',
      
    },
    input:{
      borderWidth:1,
      borderColor: '#777',
      margin:'10%',
      width:'50%',
    },
    units:{
      marginRight:'3%',
      marginTop:'3%',
      width:'20%',
      fontWeight: 'bold',
      fontSize: windowWidth*.04,
    },
    calcInput:{
      borderBottomWidth:2,
      borderColor: '#777',
      margin:'3%',
      width:'25%',
      textAlign: 'right',
      fontSize: windowWidth*.04,
      fontWeight: '600'
    },
    rowStyle:{
      margin: '.5%',
      flexDirection: 'row-reverse',
      textAlign: 'right',
      flex: 1,
      width: windowWidth
    },
    inputTitle:{
      width:'40%',
      fontSize:windowWidth*.045,
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#191970'
    }
  });

  export default styles;