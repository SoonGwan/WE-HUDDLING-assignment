import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import TwitStore from '../../store/TwitStore';
import CardView from '../../components/CardView';
import { useRecoilState } from 'recoil';
import { TwitList } from '../../atom/TwitListAtom';
import { Loading } from '../../atom/LoadingAtom';

const HeaderContainer = () => {
  const [search, setSearch] = useState('아침식사');
  const [, setTwitMap] = useRecoilState<JSX.Element[]>(TwitList);
  const [, setIsLoading] = useRecoilState<Boolean>(Loading);

  let searchList: any = [];

  const onChageSearch = (text: string) => {
    setSearch(text);
  };

  const handleSearch = useCallback(async () => {
    try {
      setIsLoading(true);
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
      setIsLoading(false);
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
      setIsLoading(false);

      return err;
    }
  }, [search, setSearch]);

  useEffect(() => {
    onChageSearch('아침식사');
    handleSearch();
  }, []);

  return (
    <Header
      handleSearch={handleSearch}
      onChageSearch={onChageSearch}
      search={search}
    />
  );
};

export default HeaderContainer;
