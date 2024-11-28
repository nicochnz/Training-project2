export const gameCardsLoader = () => {
  return fetch(`${import.meta.env.VITE_API_URL}/api/smashArray`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      return response.json();
    },
  );
};

export const gameCardsLoaderWithAwait = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/smashArray`,
  );
  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }
  return response.json();
};
