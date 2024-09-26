import axios, { AxiosResponse } from "axios";

export async function saveBookmark(bookmark: { title: string; url: string }) {
  const res: AxiosResponse<AxiosResponse> = await axios.post(
    `/api/bookmarks`,
    bookmark
  );
  return res.data;
}
