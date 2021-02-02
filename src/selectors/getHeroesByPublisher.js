import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

  const VALID_PUBLISHERS = ['DC Comics', 'Marvel Comics'];

  if (!VALID_PUBLISHERS.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  return heroes.filter( hero => hero.publisher === publisher)
}