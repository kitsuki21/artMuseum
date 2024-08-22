import { useCallback, useState } from "react";

export const useFetching: <
  T extends (page: number | undefined, limit: number | undefined) => any
>(
  callback: T
) => [
  (page?: number, limit?: number, id?: string) => Promise<any>,
  boolean,
  string
] = (callback) => {
  const [isLoadiang, setIsLoadiang] = useState(false);
  const [error, setError] = useState("");

  const fetching: (page?: number, limit?: number, id?: string) => any =
    useCallback(async (page: number | undefined, limit: number | undefined) => {
      try {
        setIsLoadiang(true);
        await callback(page, limit);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoadiang(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return [fetching, isLoadiang, error];
};
