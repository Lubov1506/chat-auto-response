import { useEffect, useState } from "react";

export const useHttp = (fetchFn, param, sortFn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchFn(param);
      const sortedData = sortFn ? sortFn(data) : data;
      setData(sortedData);
      setLoading(false);
    };
    getData();
  }, [fetchFn, param]);

  return [data, setData, loading];
};
