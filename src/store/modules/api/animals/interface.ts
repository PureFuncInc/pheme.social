export interface Kogi {
  uuid: number,
  name: string,
  imageUrl: string,
  nftUrl: string,
  age: number,
  sex: number,
  height: number,
  weight: number,
  vitality: number,
  strength: number,
  intelligence: number,
  dexterity: number,
  luck: number,
  level: number,
  rarity: string,
  mating: number,
  abilities: 'NONE' | 'FIRE' | 'RAINY',
}

export default interface State {
  kogi: Kogi,
  getKogi: {
    requesting: boolean;
  };
}
