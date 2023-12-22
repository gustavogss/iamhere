import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
         flex: 1, padding: 20, backgroundColor: "#000"
         },
    eventName: {
         fontSize: 24, color: "#eee", marginTop: 48
         },
    evenData: { 
        fontSize: 16, color: "#aaa" 
    },
    input:{
        flex:1,
        backgroundColor:'#212121',
        borderRadius: 5,
        padding: 5,
        paddingLeft: 20,
        height: 40,       
        color:'#aaa',
        marginRight: 5,
        marginBottom: 20
    },
    form:{        
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      marginTop: 20

    },
    btn:{
        width: 40,
        height: 40,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20
    },
    txtBtn:{
        color: '#FFF',
        fontSize: 20
    },
    listEmptyText:{
        color:'#eee',
        fontSize:14,
        textAlign: 'center'
    }
});