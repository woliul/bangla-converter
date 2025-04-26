import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { ConvertToUnicode, ConvertToBijoy } from '/src/banglaConverter';


export default function App() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleConvertToUnicode = () => {
        const converted = ConvertToUnicode(inputText);
        setOutputText(converted);
    };

    const handleConvertToBijoy = () => {
        const converted = ConvertToBijoy(inputText);
        setOutputText(converted);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Bangla Converter</Text>

            <TextInput
                style={styles.input}
                placeholder="Type here..."
                value={inputText}
                onChangeText={setInputText}
                multiline
            />

            <View style={styles.buttonContainer}>
                <Button title="To Unicode" onPress={handleConvertToUnicode} />
                <Button title="To Bijoy" onPress={handleConvertToBijoy} />
            </View>

            <Text style={styles.output}>{outputText}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    heading: { fontSize: 24, marginBottom: 20 },
    input: { height: 100, borderColor: 'gray', borderWidth: 1, width: '100%', padding: 10, marginBottom: 20 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20 },
    output: { fontSize: 18, marginTop: 20 },
});
