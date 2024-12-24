export const getAllExchanges = async ({
  page,
  limit,
  search,
  setLoading,
}: {
  page: number;
  limit: number;
  search: string;
  setLoading: (loading: boolean) => void;
}) => {
  // Build query parameters dynamically
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    search,
    selectors: JSON.stringify([
      "_source.name",
      "_source.country",
      "_source.isArtificialExchange",
      "_source.currency",
      "_source.symbol",
    ]),
  });

  try {
    // Start loading
    setLoading(true);

    // Fetch data
    const response = await fetch(`${import.meta.env.VITE_BE_BASE_URL}/exchange/all?${query}`);

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse and return data
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle and log errors
    console.error('Error fetching exchanges:', error);
    throw error;
  } finally {
    // Stop loading
    setLoading(false);
  }
};
