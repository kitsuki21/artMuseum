import { useCallback, useState } from "react";

export const useFetching: <T extends () => any>(
  callback: T
) => [(id?: string) => Promise<any>, boolean, string] = (callback) => {
  const [isLoadiang, setIsLoadiang] = useState(false);
  const [error, setError] = useState("");

  const fetching: () => any = useCallback(async () => {
    try {
      setIsLoadiang(true);
      await callback();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoadiang(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fetching, isLoadiang, error];
};
