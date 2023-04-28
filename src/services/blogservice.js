import { get } from "../helpers/api_helpers";
import { withRetryHandling } from "../utils/retry-handling";

//Authentication

export const getPosts = withRetryHandling(({ page = 1, perPage = 10 }) => {
  return get(
    `?per_page=${perPage}&page=${page}&_fields=featured,id,excerpt,slug,parselyMeta,date`
  );
});

export const getMorePosts = withRetryHandling(
  ({ page = 1, perPage = 3, id }) => {
    const offset = Math.floor(Math.random() * 100);
    return get(
      `?per_page=${perPage}&page=${page}&_fields=featured,id,excerpt,slug,parselyMeta,date&exclude=${id}&offset=${offset}`
    );
  }
);

export const getPostById = withRetryHandling(({ id }) => {
  return get(`/${id}?_fields=featured,id,content,slug,parselyMeta,date`);
});
