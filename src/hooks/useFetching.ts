import { useState } from "react";

export function useFetching(
  callback: () => Promise<void>
): [() => Promise<void>, Boolean, String] {
  const [isLoadiang, setIsLoadiang] = useState<Boolean>(false);
  const [error, setError] = useState<String>("");

  async function fetching(): Promise<void> {
    try {
      setIsLoadiang(true);
      await callback();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoadiang(false);
    }
  }

  return [fetching, isLoadiang, error];
}
