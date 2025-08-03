// Utility function to get the correct asset path based on the base URL
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if base already has trailing slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? base + cleanPath : base + '/' + cleanPath;
};