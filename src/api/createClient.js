import { fetchWrapper } from "./fetchWrapper";

export const createClient = (baseEndpoint) =>
    (url, config) => fetchWrapper(baseEndpoint + "/" + url, config);