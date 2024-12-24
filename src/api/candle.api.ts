export const getExchangeCandles = async ({
  setLoading,
  symbol,
  page = 1,
  limit = 10,
  dateRange
}: {
  symbol: string | undefined;
  setLoading: (loading: boolean) => void;
  page?: number;
  limit?: number;
  dateRange:{
    from:Date|null,
    to:Date|null
  } |null;
}) => {
  if (!symbol) {
    throw new Error("Symbol is required to fetch exchanges.");
  }

  if (typeof setLoading !== "function") {
    throw new Error("setLoading must be a valid function.");
  }

  // Initialize the query string with type 'string'
  let query: string = '';

  // Conditionally add parameters
  if (page) query += `page=${page}&`;
  if (limit) query += `limit=${limit}&`;
  if (dateRange?.from) query += `startDate=${dateRange?.from.toISOString()}&`;
  if (dateRange?.to) query += `endDate=${dateRange?.to.toISOString()}&`;

  // Remove the trailing '&' if present
  query = query.endsWith('&') ? query.slice(0, -1) : query;

  try {
    // Start loading
    setLoading(true);

    const baseUrl = import.meta.env.VITE_BE_BASE_URL;

    if (!baseUrl) {
      throw new Error("Backend base URL is not defined.");
    }

    // Fetch data
    const response = await fetch(
      `${baseUrl}/exchange/${symbol}/candels?${query}`
    );

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(
        `Failed to fetch exchanges. HTTP status: ${response.status}`
      );
    }

    // Parse and return data
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching exchanges:", error);
    throw error;
  } finally {
    // Stop loading
    setLoading(false);
  }
};
