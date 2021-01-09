export default function getGameSeed(): string {
  const hash = window.location.hash;

  if (hash !== '') {
    return hash;
  }

  const newHash = '#' + Math.random().toString(36).substring(7);
  window.location.hash = newHash;

  return newHash;
}
