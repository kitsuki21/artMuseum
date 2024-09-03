import { useCallback, useState } from "react";

export const useFetching: <T extends (...args: any[]) => any>(
  callback: T
) => [(...args: any[]) => Promise<any>, boolean, string] = (callback) => {
  const [isLoadiang, setIsLoadiang] = useState(false);
  const [error, setError] = useState("");

  const fetching: (...args: any[]) => any = useCallback(
    async (...args) => {
      try {
        setIsLoadiang(true);
        return await callback(...args);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoadiang(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return [fetching, isLoadiang, error];
};
