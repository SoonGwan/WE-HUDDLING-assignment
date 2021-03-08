import React, { useState } from 'react';
import Header from '../../components/Header';
import TwitStore from '../../store/TwitStore';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import CardView from '../../components/CardView';
import { useRecoilState } from 'recoil';
import { TwitList } from '../../atom/TwitListAtom';

const HeaderContainer = () => {
  const [search, setSearch] = useState('');
  const [, setTwitMap] = useRecoilState<JSX.Element[]>(TwitList);
  let searchList: any = [];
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

      for (let i = 0; i < data.length; i += 1) {
        searchList.push(data[i].author_id);
      }

      const res = await TwitStore.userLookUp(searchList.join(','));
      let userWithInfoList = [];

      for (let i = 0; i < res.data.length; i += 1) {
        for (let j = 0; j < data.length; j += 1) {
          if (data[j].author_id === res.data[i].id_str) {
            const { text } = data[j];
            const { name, screen_name, profile_image_url } = res.data[i];
            console.log(res.data[i]);
            let temp = {
              name,
              text,
              screen_name,
              profile_image_url,
            };
            userWithInfoList.push(temp);
          }
        }
      }

      const cardListMap = userWithInfoList.map((data) => {
        const { name, screen_name, text, profile_image_url } = data;
        return (
          <CardView
            name={name}
            text={text}
            screen_name={screen_name}
            profile_image_url={profile_image_url}
          />
        );
      });

      setTwitMap(cardListMap);
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
