import { useEffect, useState } from "react";

export const useHttp = (fetchFn, param) => {
  // console.log("useHttp param:", param);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      // console.log(param);
      const data = await fetchFn(param);
      setData(data);
      setLoading(false);
    };
    getData();
  }, [fetchFn, param]);

  return [data, setData, loading];
};
