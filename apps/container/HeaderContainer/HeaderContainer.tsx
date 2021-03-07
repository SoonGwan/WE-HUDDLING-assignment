import React, { useState } from 'react';
import Header from '../../components/Header';
import TwitStore from '../../store/TwitStore';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import CardView from '../../components/CardView';
import { useRecoilState } from 'recoil';
import { TwitList } from '../../atom/TwitListAtom';

const HeaderContainer = () => {
  const [search, setSearch] = useState('');
  const [, setTwitMap] = useRecoilState<[]>(TwitList);
  const onChageSearch = (text: string) => {
    setSearch(text);
  };

  const handleSearch = async () => {
    try {
      if (search.trim().length <= 0) {
        alert('입력해주세요!');
        return;
      }

      const {
        data: { data },
      } = await TwitStore.searchTwit(search);
      // console.log(data);
      const list = data.map((data: { id: string; text: string }) => {
        const { id, text } = data;

        return <CardView id={id} text={text} />;
      });

      setTwitMap(list);
    } catch (err) {
      return err;
    }
  };
  return (
    <Header
      handleSearch={handleSearch}
      onChageSearch={onChageSearch}
      search={search}
    />
  );
};

export default HeaderContainer;
