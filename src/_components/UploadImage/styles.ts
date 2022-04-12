import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const {height} = Dimensions.get('screen')

const style = StyleSheet.create({
    containerAvatar: {
        marginBottom: height/35
    }

})

export default style