export const getExchangeMetas = async ({
  setLoading,
  symbol,
}: {
  symbol: string|undefined;
  setLoading: (loading: boolean) => void;
}) => {
  if (!symbol) {
    throw new Error('Symbol is required to fetch exchanges.');
  }

  if (typeof setLoading !== 'function') {
    throw new Error('setLoading must be a valid function.');
  }

  // Build query parameters dynamically
  const query = new URLSearchParams({
    selectors: JSON.stringify([
      "_source.name",
      "_source.countryName",
      "_source.currency",
      "_source.symbol",
      "_source.type",
      "_source.code",
      "_source.ticker",
      "_source.countryIso",
    ]),
  });

  try {
    // Start loading
    setLoading(true);

    const baseUrl = import.meta.env.VITE_BE_BASE_URL;

    if (!baseUrl) {
      throw new Error('Backend base URL is not defined.');
    }

    // Fetch data
    const response = await fetch(`${baseUrl}/exchange/${symbol}/metas?${query}`);

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Failed to fetch exchanges. HTTP status: ${response.status}`);
    }

    // Parse and return data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching exchanges:', error);
    throw error;
  } finally {
    // Stop loading
    setLoading(false);
  }
};
