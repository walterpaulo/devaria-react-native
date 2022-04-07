import { Dimensions, StyleSheet } from "react-native";
import { colors} from "../../../app.json"

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    containerInput: {
        marginTop: height/20,
        width: width/1.3,
        height: height/25,
        borderBottomColor: colors.primaryColor,
        borderBottomWidthWidth: 1

    },
    input: {
        width: width/1.4,
        paddingHorizontal: 12,
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'bionnale',
        color: colors.grayColor02

    },
    row: {
        flexDirection: "row",
        alignItems: "center"

    },
})

export default styles