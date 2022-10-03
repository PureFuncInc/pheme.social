import { Sutando as SutandoInterface } from '@/store/modules/api/animals/interface';

class Sutando {
  private sutando;

  constructor(
    sutando: SutandoInterface = {
      uuid: 0,
      name: '',
      imageUrl: '',
      age: 0,
      experience: 0,
      level: 0,
      sex: 0,
      height: 0,
      weight: 0,
      vitality: 0,
      strength: 0,
      intelligence: 0,
      dexterity: 0,
      luck: 0,
      individual: '',
      rarity: '',
      matingCount: 0,
      status: '',
    },
  ) {
    this.sutando = sutando;
  }

  serialize() {
    return this.sutando;
  }
}

export default Sutando;
