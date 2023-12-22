import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:2
    },
    content: {
        flex:1,
        backgroundColor:'#212121',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
        height: 40,       
        color:'#aaa',
        marginRight: 5
  },
  participant:{
    color: '#eee',
    fontSize: 16,   
    paddingLeft: 16 
  },
btn:{
    width: 40,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
},
txtBtn:{
    color: '#FFF',
    fontSize: 20,
    fontWeight:'600',
   
}
});