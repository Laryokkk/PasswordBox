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
            <View style={styles.credentials}>
                <Text style={styles.textEmail}>
                    {account.email}
                </Text>
                {visibility && (
                    <Text style={styles.textPassword}>
                            {account.password}
                    </Text>
                )}
            </View>
            <Ionicons style={styles.icon} size={16} name="md-checkmark-circle" />
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
    credentials: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8'
    },
    textEmail: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    textPassword: {
        fontSize: 18,
        color: '#25D8D8',
    },
    icon: {
        color: '#000000'
    }
});

export default Account;
