import { getRequest } from '../util/Axios';

class TwitStore {
  searchTwit = async (string: string) => {
    const data = await getRequest({
      url: `2/tweets/search/recent?tweet.fields=author_id&max_results=60&query=${string}`,
    });

    return data;
  };

  singleUserContext = async (idx: number) => {
    const data = await getRequest({
      url: `2/tweets/${idx}`,
    });

    return data;
  };

  userLookUp = async (userList: string) => {
    const data = await getRequest({
      url: `1.1/users/lookup.json?user_id=${userList}`,
    });

    return data;
  };
}

export default new TwitStore();
