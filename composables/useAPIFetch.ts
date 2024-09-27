type useFetchType = typeof useFetch;
const lastSlidesRequest = null

// wrap useFetch with configuration needed to talk to our API
export const useAPIFetch: useFetchType = (path, options = {}) => {
  // const secretKey = useRuntimeConfig().unsplashSecretKey;
  const accessKey = useRuntimeConfig().public.unsplashAccessKey;

  options.baseURL = "https://api.unsplash.com";
  options.headers = {
    Authorization: `Client-ID ${accessKey}`,
  };

  options.onRequest = ({ request }) => {
    // console.log(request)
    // console.log(options.body)
  };

  // options.onResponseError = ({ response }) => {
  //   console.log(response)
  // };

  return useLazyFetch(path, options);
};
