import { get } from "../helpers/api_helpers";
import { withRetryHandling } from "../utils/retry-handling";

//Authentication

export const getPosts = withRetryHandling(({ page = 1, perPage = 10 }) => {
  return get(
    `${process.env.VUE_APP_API_URL}?per_page=${perPage}&page=${page}&_fields=featured,id,excerpt,slug,parselyMeta,date`
  );
});

export const getPostById = withRetryHandling(({ id }) => {
  return get(`${process.env.VUE_APP_API_URL}/${id}`);
});
