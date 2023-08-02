import React from "react";
import { View, Text, TouchableOpacity, Share}  from "react-native";
import styles from "./styles";

export default function ResultImc(props){

    const onShare = async  () => {
        const result = await Share.share({
            message: `Meu imc hoje é: ${props.resutImc}`
        })
    }
    return (
        <View style={styles.resutImc}>
            <View style={styles.boxShareButton}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
                <TouchableOpacity style={styles.shared} onPress={() => onShare()}>
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}