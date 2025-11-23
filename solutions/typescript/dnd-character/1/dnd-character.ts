export class DnDCharacter {
  private static throwDice(): number {
    return Math.ceil(Math.random() * 6)
  }
  
  public static generateAbilityScore(): number {
    const throws = [...new Array(4)].map(() => DnDCharacter.throwDice())
    const sum = throws.reduce((sum,  value) => sum + value, 0) - Math.min(...throws)
    return sum
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  hitpoints: number

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
}
