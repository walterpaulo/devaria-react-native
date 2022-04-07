import {Text, TouchableOpacity, ActivityIndicator, View } from "react-native"
import { colors } from "../../../app.json"
import styles from "./styles"
import { IButton } from "./types"

const Button = (props: IButton) => {
    return
        <View>
            <TouchableOpacity 
                onPress={props.onPress}
                disabled={props.disabled}
                style={[props.style]}
                >
                {props.loading ?
                    <ActivityIndicator size={30} color={colors.whiteColor} />
                    :
                    <Text style={styles.text}>{props.placeholder}</Text>
                }
            </TouchableOpacity>
        </View>

}
export default Button