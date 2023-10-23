import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AccountsGroup from "../components/AccountsGroup";

const AccountGroupList = () => {
    const list = [
        {
            title: 'AGAP2',
            accountList: [
                {
                    email: 'artur.smirnov@agap2.it',
                    password: 'dasda2f2f'
                },
            ],
        },
        {
            title: 'Deda Group',
            accountList: [
                {
                    email: 'artur-smirnov@dedagroup.it',
                    password: 'dasda2f2f'
                },
                {
                    email: 'artur-smirnov@subco.dedagroup.it',
                    password: 'dasda2f2f'
                },
            ],
        },
    ];


    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={(({item}) => <AccountsGroup group={item} />)}
                ItemSeparatorComponent={() => <View style={{height: 30}} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '80%',
    }
});

export default AccountGroupList;
