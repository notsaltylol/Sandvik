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
      width:'15%',
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 'bold',
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
      width:'25%',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'right',
      fontSize: windowWidth*.04,
      fontWeight: '600'
    },
    rowStyle:{
      margin: '.5%',
      paddingRight: '10%',
      flexDirection: 'row',
      textAlign: 'center',
      flex: 1,
      width: windowWidth
    },
    inputTitle:{
      width:'30%',
      fontSize:14,
      marginLeft: '10%',
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#191970'
    },
    tableInputTitle:{
      width:'21%',
      fontSize:12,
      paddingLeft: 5,
      marginTop:'3%',
      textAlign: 'left',
      fontWeight: 'bold',
      color:'#191970'
    },
    sectionTitle:{
      fontSize:17,
      marginTop:'2%',
      marginBottom:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#0000CC'
    },

    containerTable: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },

    outputTitle:{
      width:'30%',
      marginLeft: '10%',
      fontSize:14,
      marginTop:'3%',
      textAlign: 'center',
      fontWeight: 'bold',
      color:'#ff7f50'}
    }
  );

  export default styles;