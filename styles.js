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
      marginTop:'10%'
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
      fontWeight: 'bold'
    },
    calcInput:{
      borderBottomWidth:2,
      borderColor: '#777',
      margin:'3%',
      width:'20%',
      textAlign: 'right',
      fontSize: 15,
      fontWeight: '600'
    },
    rowProdEstInput:{
      marginRight:'3%',
      marginTop:'3%',
      width:'20%',
      fontWeight: 'bold',
      textAlign: 'right',
      fontSize: 15,
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
      fontSize:17,
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#191970'
    },

    containerTable: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

  export default styles;