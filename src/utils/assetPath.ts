// Utility to get the correct asset path for GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  // In development, use the path as-is
  if (import.meta.env.DEV) {
    return path;
  }
  
  // In production, prepend the base URL
  const base = import.meta.env.BASE_URL || '/';
  
  // If path already includes the base, return as-is
  if (path.startsWith(base)) {
    return path;
  }
  
  // Remove leading slash from path if exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Combine base with path
  return base.endsWith('/') ? base + cleanPath : base + '/' + cleanPath;
};