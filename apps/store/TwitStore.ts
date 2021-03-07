import { getRequest } from '../util/Axios';

class TwitStore {
  searchTwit = async (string: string) => {
    const data = await getRequest({
      url: `/tweets/search/recent?max_results=100&query=${string}`,
    });

    return data;
  };
}

export default new TwitStore();
