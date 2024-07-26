import { useEffect, useState } from "react";

export const useHttp = (fetchFn, param) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchFn(param);
      setData(data);
      setLoading(false);
    };
    getData();
  }, [fetchFn, param]);
  console.log(data);
  return [data, setData, loading];
};
