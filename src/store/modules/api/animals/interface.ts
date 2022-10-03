export interface Sutando {
  uuid: number,
  name: string,
  imageUrl: string,
  age: number,
  experience: number,
  level: number,
  sex: number,
  height: number,
  weight: number,
  vitality: number,
  strength: number,
  intelligence: number,
  dexterity: number,
  luck: number,
  individual: string,
  rarity: string,
  matingCount: number,
  status: string
}

export default interface State {
  sutando: Sutando,
  getSutando: {
    requesting: boolean;
  };
}
