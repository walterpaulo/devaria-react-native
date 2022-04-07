import { Image, ImageSourcePropType, TextInput, View } from "react-native"
import styles from "./style"
import { IInput } from "./types"

const Input = (props: IInput) =>{

    return(
        <View>
            <View style={styles.containerInput}>
                { props.icone &&
                <Image source={props.icone} />
                }
                <TextInput 
                    placeholder={props.placeholder}
                    style={[props.style]}
                    secureTextEntry={props.secureTextEntry}
                    value={props.value}
                    onChangeText= {props.onChangeText}
                    autoCapitalize = "none"
                />
            </View>
        </View>
    )
}

export default Input