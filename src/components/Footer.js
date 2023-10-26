import React, { useState } from "react";
import { View, TextInput, Pressable, StyleSheet, Text } from "react-native";

const Footer = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search ..."
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Pressable style={styles.button} >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        width: '100%',
        height: 80,
        padding: 20,
        backgroundColor: '#323232'
    },
    input: {
        backgroundColor: '#171717',
        width: '60%',
        fontSize: 16,
        padding: 6,
        paddingStart: 12,
        borderRadius: 15,
        color: '#fff',
        borderEndStartRadius: 25
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
        backgroundColor: '#25D8D8',
        borderRadius: 15,
        borderEndEndRadius: 25
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
});

export default Footer;
