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
    input:{
      borderWidth:1,
      borderColor: '#777',
      margin:'10%',
      width:'50%',
    },
    units:{
      marginLeft:'10%',
      marginTop:'3%',
      width:'20%',
      fontSize: 12,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    rowVals:{
      marginRight:'0%',
      marginTop:'3%',
      width:'15.5%',
      fontSize: 10.5,
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#adb5bd',
    },
    graphVals:{
      marginRight:'0%',
      marginTop:'3%',
      width:'30%',
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#adb5bd',
    },
    calcInput:{
      borderBottomWidth:2,
      borderColor: '#777',
      margin:'3%',
      width:'25%',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'right',
      fontSize: windowWidth*.04,
      fontWeight: '600',
      //fontFamily: 'Georgia-Bold'
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
      fontWeight: '600',
      //fontFamily: 'Georgia-Bold'
    },
    calcOutput: {
      borderBottomWidth:2,
      borderColor: '#777',
      margin:'3%',
      width:'25%',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'right',
      fontSize: windowWidth*.04,
      fontWeight: '600',
      //fontFamily: 'Georgia-Bold'
    },
    rowStyle:{
      margin: '.5%',
      paddingRight: '10%',
      flexDirection: 'row',
      textAlign: 'center',
      flex: 1,
      width: windowWidth*0.85,
      //fontFamily: 'Georgia-Bold'
    },
    inputTitle:{
      width:'30%',
      fontSize:14,
      marginLeft: '10%',
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#191970',
      //fontFamily: 'Georgia-Bold'
    },
    tableInputTitle:{
      width:'24%',
      fontSize:12,
      paddingLeft: 0,
      marginTop:'3%',
      textAlign: 'left',
      fontWeight: 'bold',
      color:'#6c757d',
      //fontFamily: 'Georgia-Bold'
    },
    graphInputTitle:{
      width:'24%',
      fontSize:12,
      paddingLeft: 0,
      paddingRight: 5,
      marginLeft: '0%',
      marginTop:'3%',
      marginBottom:'7%',
      textAlign: 'left',
      fontWeight: 'bold',
      color:'#191970',
      //fontFamily: 'Georgia-Bold'
    },
    sectionTitle:{
      fontSize:25,
      marginTop:'0%',
      marginBottom:'0%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#0000CC',
      //fontFamily: 'Georgia-Bold'
    },

    containerTable: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },

    resultsHeading: {
      width:'60%',
      marginLeft: '20%',
      marginRight: '20%',
      fontSize:18,
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#000011',
      //fontFamily: 'Georgia-Bold'
    },

    outputTitle:{
      width:'30%',
      marginLeft: '10%',
      fontSize:14,
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#ff8f70',
    //  fontFamily: 'Georgia-Bold'
    }
    },

   
  );

  export default styles;