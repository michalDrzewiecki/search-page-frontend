import axios from 'axios';

export abstract class HttpRequestService {

  protected async get<T>(url: string): Promise<T> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : e;
      throw new Error(`Error during fetching data! message: ${errorMessage}`);
    }
  }
}
