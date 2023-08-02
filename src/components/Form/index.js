import React, { useState } from "react";
import { View,  Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./styles";

export default function Form(){

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    const imcCalculator = () => {
        let alturaFormat = altura.replace(",", ".")
        let totalImc =  (peso / (alturaFormat * alturaFormat)).toFixed(2); 
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc:totalImc}])
        setImc(totalImc);
    }

    const verificationImc= () => {
        console.log(imcList)
        if(imc === null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }
    }

    const validation = () => {
        if(altura != null && peso != null ){
            imcCalculator();
            setAltura(null);
            setPeso(null);
            setMessageImc("Seu imc é igual: " );
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
        }else {
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura");
        }
      
    }

    return(
       
            <View style={styles.formContext}>
                {
                    imc == null ? 
                 <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setAltura}
                value={altura}
                placeholder="Ex. 1.77"
                keyboardType="numeric"
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text  style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                scrollEnabled
                onChangeText={setPeso}
                value={peso}
                placeholder="Ex. 90"
                keyboardType="numeric"
                 />
                 <Text style={styles.errorMessage}>{errorMessage}</Text>
                 <TouchableOpacity 
                        style={styles.buttonCalculetor}
                        onPress={() => validation()}>
                        <Text style={styles.textbutton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :  
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                    <TouchableOpacity 
                        style={styles.buttonCalculetor}
                        onPress={() => validation()}>
                        <Text style={styles.textbutton}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                }
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.listaImc}
                    data={imcList.reverse()}
                    renderItem={({item}) => {
                        return (
                            <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                                {item.imc}  
                            </Text>
                        )
                    }}
                    keyExtractor={(item) => {
                        item.id
                    }}
                />
            </View>
       
    )
}