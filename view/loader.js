import React from 'react'
import { Image, Text, View ,StyleSheet} from 'react-native'
import img from '../assets/imagcal.png';

const Loader = () => {
    
  return (
   <View style={styles.container}>
   <Text style={styles.inner}>
    <Image source={img} style={styles.innerimg}/>
   </Text>
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex' ,
        flexDirection:'column',
        height:'100%',
        backgroundColor:'#FF5757',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'


    },

    inner:{
        width: 100,
        height: 100,
        backgroundColor:'inherit'
    },
    innerimg:{
        height:100,
        width:100
    }
})

export default Loader
