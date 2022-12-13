import { useState, useCallback } from "react";
import axios from "axios";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (
      url: string,
      method: string = "GET",
      body: any = null,
      headers: any = {}
    ) => {
      setLoading(true);

      try {
        if (body) {
          headers['Content-Type'] = 'application/json'
        }

        const res = await axios({
          method,
          url,
          headers,
          data: body,
        }).then((res) => res.data)
        .catch((e) => {
          setError(e.response.data.message || "");
          throw new Error(e || "Something went wrong");
        });

        setLoading(false);
        return res
      } catch (e: any) {
        setLoading(false);
      }
    },
    []
  );

  const clearError = useCallback(() =>  setError(null), [])

  return { loading, request, error, clearError };
};

export default useHttp;
