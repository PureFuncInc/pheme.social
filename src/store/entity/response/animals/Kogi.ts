import { Kogi as KogiInterface } from '@/store/modules/api/animals/interface';

class Kogi {
  private kogi;

  constructor(
    kogi: KogiInterface = {
      uuid: 0,
      name: '',
      imageUrl: '',
      nftUrl: '',
      age: 0,
      sex: 0,
      height: 0,
      weight: 0,
      vitality: 0,
      strength: 0,
      intelligence: 0,
      dexterity: 0,
      luck: 0,
      level: 0,
      rarity: '',
      mating: 0,
      abilities: 'NONE',
    },
  ) {
    this.kogi = kogi;
  }

  serialize() {
    return this.kogi;
  }
}

export default Kogi;
