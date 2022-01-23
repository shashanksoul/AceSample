import React from 'react';
import { View ,Image,Text, StyleSheet } from 'react-native';
import moment from 'moment';


const Card  = (item) => {
    //console.log("data"+JSON.stringify(item));
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.data.imageUrl}} />
            <Text style={styles.caption}>{item.data.caption}</Text>
            <Text style={styles.time}>{`Posted At ${moment.unix(item.data.createdAt.seconds).format('LLL')}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {flex:1,margin :10,elevation:10 ,backgroundColor:'white',borderRadius:8},
    image:{height:200,width:'100%',borderTopLeftRadius:8,borderTopRightRadius:8},
    caption: {fontSize: 20,padding: 10,color:'black'},
    time: {paddingHorizontal: 10,paddingBottom:5,color:'grey'}
})

export default Card;