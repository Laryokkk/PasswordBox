import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Account from "./Account";

const AccountsGroup = ({group}) => {
    return (
        <View styles={styles.container}>
            <Text style={styles.title}>
                {group.title}
            </Text>
            <View style={{height: 12}} />
            <FlatList
                style={styles.list}
                data={group.accountList}
                renderItem={(({item}) => <Account account={item} />)}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    }
});

export default AccountsGroup;
