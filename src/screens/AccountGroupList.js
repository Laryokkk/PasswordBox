import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import AccountsGroup from "../components/AccountsGroup";
import Footer from "../components/Footer";
import AddAccountModal from "../components/AddAccountModal";

const AccountGroupList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const onAddAccountClick = () => {
    setModalVisible(prevState => !prevState);
  };

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
    <View style={{ flex: 1 }}>
      <AddAccountModal isModalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <FlatList
        style={{ margin: 20, marginTop: 80 }}
        data={list}
        renderItem={(({ item }) => <AccountsGroup group={item} />)}
        ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
        showsVerticalScrollIndicator={false}
      />
      <Footer onClick={onAddAccountClick}/>
    </View>
  );
};

export default AccountGroupList;
