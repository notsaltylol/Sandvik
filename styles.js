import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: windowWidth,
      backgroundColor: '#ffffff',
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
      marginBottom: '30%',
      marginTop: 10,
      padding: 10,
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
      marginRight:'20%',
      marginTop:'3%',
      width:'20%',
      fontSize: 12,
      textAlign: 'center',
      //width:'20%',
      fontWeight: 'bold',
      //fontSize: windowWidth*.04,
    },
    rowVals:{
      marginRight:'0%',
      marginTop:'3%',
      width:'14%',
      fontSize: 12,
      textAlign: 'center',
      //width:'20%',
      fontWeight: 'bold',
      //fontSize: windowWidth*.04,
    },
    calcInput:{
      borderBottomWidth:2,
      borderColor: '#777',
      margin:'3%',
      width:'20%',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '600',
      //width:'25%',
      textAlign: 'right',
      fontSize: windowWidth*.04,
      fontWeight: '600'
    },
    rowProdEstInput:{
      borderBottomWidth:2,
      borderColor: '#777',
      marginRight:'0%',
      marginTop:'0%',
      width:'14%',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '600'
    },
    calcOutput: {
      borderBottomWidth:2,
      borderColor: '#777',
      margin:'3%',
      width:'20%',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '600',
      //width:'25%',
      textAlign: 'right',
      fontSize: windowWidth*.04,
      fontWeight: '600'
    },
    rowStyle:{
      margin: '.5%',
      //marginRight:'3%',
      //marginLeft:'20%',
      paddingRight: '10%',
      flexDirection: 'row',
      textAlign: 'center',
      flex: 1,
      width: windowWidth
    },
    inputTitle:{
      width:'30%',
      fontSize:12,
      //width:'40%',
      //fontSize:windowWidth*.045,
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#191970'
    },
    rowinputTitle:{
      width:'16%',
      fontSize:12,
      //width:'40%',
      //fontSize:windowWidth*.045,
      marginTop:'3%',
      marginLeft: '10%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#191970'
    },
    sectionTitle:{
      fontSize:17,
      marginTop:'2%',
      //marginRight:'10%',
      marginBottom:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#0000CC'
    },

    containerTable: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },

    outputTitle:{
      //fontSize:windowWidth*.05,
      width:'30%',
      fontSize:12,
      //width:'40%',
      //fontSize:windowWidth*.045,
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#ff7f50'}
    }
  );

  export default styles;