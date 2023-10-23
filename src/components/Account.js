import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Account = ({account}) => {
    const [visibility, setVisibility] = useState(false);

    const handleChangeVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        <View onTouchEnd={handleChangeVisibility} style={styles.container}>
            <View>
                <Text style={styles.textEmail}>
                    {account.email}
                </Text>
                {visibility && (
                    <Text style={styles.textPassword}>
                            {account.password}
                    </Text>
                )}
            </View>
            <View>
                <Ionicons name="md-checkmark-circle" size={24} color="green" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        padding: 10,
        borderRadius: 10,

        backgroundColor: '#323232',
    },
    textEmail: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    textPassword: {
        fontSize: 14,
        color: '#25D8D8',
    }
});

export default Account;
