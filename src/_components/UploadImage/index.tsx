import { Image, Text, TouchableOpacity, View } from "react-native"
import style from "./styles"

const UploadImage = () => {

    const pickImage = () => {

    }

    return (
        <View>
            <TouchableOpacity style={style.containerAvatar} onPress={pickImage}>
                <Image source={require('../../_assets/image/avatar2.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default UploadImage