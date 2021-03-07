import React, { useState } from 'react';
import Header from '../../components/Header';
import TwitStore from '../../store/TwitStore';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

const HeaderContainer = () => {
  const [search, setSearch] = useState('');

  const onChageSearch = (text: string) => {
    setSearch(text);
  };

  const handleSearch = async () => {
    try {
      const data = await TwitStore.searchTwit(search);
      console.log(data);
    } catch (err) {
      return err;
    }
  };
  return (
    <Header
      handleSearch={handleSearch}
      onChageSearch={onChageSearch}
      search={search}
      //   setSearch={setSearch}
    />
  );
};

export default HeaderContainer;
