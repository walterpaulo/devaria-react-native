import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const {height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    containerAvatar: {
        marginBottom: height/35
    }

})

export default styles