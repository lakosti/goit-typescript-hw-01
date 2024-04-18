import axios from "axios";

type Data = { userId: 1; id: 1; name: "mango" };

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<Data>("url");
