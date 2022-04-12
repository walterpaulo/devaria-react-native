import { Image, TouchableOpacity, View } from "react-native"
import * as ImagePicker from 'expo-image-picker'
import style from "./styles"

const UploadImage = (props: {
    setImage: (image: ImagePicker.ImagePickerResult) => void
}) => {

    const pickImage = async () => {
       const result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.Images,
           allowsEditing: true,
           aspect: [4, 3],
           quality: 1,
       })
       if(!result.cancelled){
        props.setImage(result)
       }
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