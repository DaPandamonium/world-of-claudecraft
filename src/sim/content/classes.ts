import type { AbilityDef, PlayerClass, Stats, WeaponInfo } from '../types';

// ---------------------------------------------------------------------------
// Player classes — per-level base stats follow vanilla growth curves.
// HP/mana rules are the real ones: first 20 stamina gives 1 hp each, the rest
// 10 hp each; first 20 intellect gives 1 mana each, the rest 15 mana each.
// ---------------------------------------------------------------------------

export interface ClassDef {
  id: PlayerClass;
  name: string;
  baseStats: Stats;
  statsPerLevel: Stats;
  baseHp: number; // class hp before stamina at level 1
  hpPerLevel: number;
  baseMana: number;
  manaPerLevel: number;
  resourceType: 'rage' | 'mana' | 'energy';
  startWeapon: string;
  startChest: string;
  ranged?: WeaponInfo & { maxRange: number; minRange: number }; // hunters: auto shot
  abilities: string[]; // full kit, in learn order
  color: number;
  crest: string; // portrait glyph
}

export const CLASSES: Record<PlayerClass, ClassDef> = {
  warrior: {
    id: 'warrior',
    name: 'Warrior',
    baseStats: { str: 23, agi: 20, sta: 22, int: 10, spi: 11, armor: 50 },
    statsPerLevel: { str: 2, agi: 1, sta: 2, int: 0, spi: 0, armor: 12 },
    baseHp: 50,
    hpPerLevel: 18,
    baseMana: 100, // rage cap
    manaPerLevel: 0,
    resourceType: 'rage',
    startWeapon: 'worn_sword',
    startChest: 'recruit_tunic',
    abilities: ['heroic_strike', 'battle_shout', 'charge', 'rend', 'thunder_clap', 'hamstring', 'bloodrage', 'overpower'],
    color: 0xc79c6e,
    crest: '⚔',
  },
  mage: {
    id: 'mage',
    name: 'Mage',
    baseStats: { str: 10, agi: 12, sta: 14, int: 24, spi: 22, armor: 25 },
    statsPerLevel: { str: 0, agi: 0, sta: 1, int: 3, spi: 2, armor: 4 },
    baseHp: 40,
    hpPerLevel: 12,
    baseMana: 100,
    manaPerLevel: 24,
    resourceType: 'mana',
    startWeapon: 'gnarled_staff',
    startChest: 'apprentice_robe',
    abilities: ['fireball', 'frost_armor', 'arcane_intellect', 'frostbolt', 'conjure_water', 'fire_blast', 'arcane_missiles', 'polymorph', 'frost_nova'],
    color: 0x69ccf0,
    crest: '✦',
  },
  rogue: {
    id: 'rogue',
    name: 'Rogue',
    baseStats: { str: 17, agi: 25, sta: 17, int: 11, spi: 12, armor: 40 },
    statsPerLevel: { str: 1, agi: 3, sta: 1, int: 0, spi: 0, armor: 8 },
    baseHp: 45,
    hpPerLevel: 15,
    baseMana: 100, // energy cap
    manaPerLevel: 0,
    resourceType: 'energy',
    startWeapon: 'rusty_dagger',
    startChest: 'footpad_jerkin',
    abilities: ['sinister_strike', 'eviscerate', 'backstab', 'gouge', 'evasion', 'slice_and_dice', 'sprint'],
    color: 0xfff569,
    crest: '⚷',
  },
  paladin: {
    id: 'paladin',
    name: 'Paladin',
    baseStats: { str: 22, agi: 17, sta: 22, int: 13, spi: 14, armor: 45 },
    statsPerLevel: { str: 2, agi: 1, sta: 2, int: 1, spi: 1, armor: 12 },
    baseHp: 55,
    hpPerLevel: 17,
    baseMana: 80,
    manaPerLevel: 20,
    resourceType: 'mana',
    startWeapon: 'training_mace',
    startChest: 'recruit_tunic',
    abilities: ['seal_of_righteousness', 'holy_light', 'devotion_aura', 'judgement', 'blessing_of_might', 'divine_protection', 'hammer_of_justice', 'lay_on_hands'],
    color: 0xf58cba,
    crest: '🔨',
  },
  hunter: {
    id: 'hunter',
    name: 'Hunter',
    baseStats: { str: 14, agi: 25, sta: 19, int: 13, spi: 14, armor: 45 },
    statsPerLevel: { str: 1, agi: 3, sta: 2, int: 1, spi: 1, armor: 8 },
    baseHp: 50,
    hpPerLevel: 15,
    baseMana: 80,
    manaPerLevel: 18,
    resourceType: 'mana',
    startWeapon: 'rusty_hatchet',
    startChest: 'footpad_jerkin',
    ranged: { min: 5, max: 9, speed: 2.3, maxRange: 35, minRange: 8 },
    abilities: ['raptor_strike', 'aspect_of_the_hawk', 'serpent_sting', 'arcane_shot', 'concussive_shot', 'mongoose_bite', 'wing_clip'],
    color: 0xabd473,
    crest: '🏹',
  },
  priest: {
    id: 'priest',
    name: 'Priest',
    baseStats: { str: 10, agi: 11, sta: 13, int: 22, spi: 24, armor: 20 },
    statsPerLevel: { str: 0, agi: 0, sta: 1, int: 2, spi: 3, armor: 4 },
    baseHp: 38,
    hpPerLevel: 11,
    baseMana: 110,
    manaPerLevel: 26,
    resourceType: 'mana',
    startWeapon: 'gnarled_staff',
    startChest: 'apprentice_robe',
    abilities: ['smite', 'lesser_heal', 'power_word_fortitude', 'shadow_word_pain', 'power_word_shield', 'renew', 'mind_blast'],
    color: 0xfffff0,
    crest: '✝',
  },
  shaman: {
    id: 'shaman',
    name: 'Shaman',
    baseStats: { str: 18, agi: 16, sta: 20, int: 18, spi: 18, armor: 40 },
    statsPerLevel: { str: 1, agi: 1, sta: 2, int: 2, spi: 2, armor: 10 },
    baseHp: 48,
    hpPerLevel: 15,
    baseMana: 90,
    manaPerLevel: 22,
    resourceType: 'mana',
    startWeapon: 'training_mace',
    startChest: 'footpad_jerkin',
    abilities: ['lightning_bolt', 'rockbiter_weapon', 'healing_wave', 'earth_shock', 'lightning_shield', 'flame_shock'],
    color: 0x0070de,
    crest: '🌩',
  },
  warlock: {
    id: 'warlock',
    name: 'Warlock',
    baseStats: { str: 11, agi: 12, sta: 15, int: 21, spi: 21, armor: 22 },
    statsPerLevel: { str: 0, agi: 0, sta: 1, int: 3, spi: 2, armor: 4 },
    baseHp: 42,
    hpPerLevel: 12,
    baseMana: 105,
    manaPerLevel: 25,
    resourceType: 'mana',
    startWeapon: 'gnarled_staff',
    startChest: 'apprentice_robe',
    abilities: ['shadow_bolt', 'demon_skin', 'immolate', 'corruption', 'life_tap', 'curse_of_agony', 'drain_life'],
    color: 0x9482c9,
    crest: '🕯',
  },
  druid: {
    id: 'druid',
    name: 'Druid',
    baseStats: { str: 15, agi: 15, sta: 17, int: 19, spi: 20, armor: 30 },
    statsPerLevel: { str: 1, agi: 1, sta: 2, int: 2, spi: 2, armor: 6 },
    baseHp: 45,
    hpPerLevel: 13,
    baseMana: 95,
    manaPerLevel: 22,
    resourceType: 'mana',
    startWeapon: 'gnarled_staff',
    startChest: 'footpad_jerkin',
    abilities: ['wrath', 'healing_touch', 'mark_of_the_wild', 'moonfire', 'rejuvenation', 'thorns', 'entangling_roots', 'bear_form'],
    color: 0xff7d0a,
    crest: '🐻',
  },
};

// ---------------------------------------------------------------------------
// Abilities — rank values and learn levels from vanilla (levels 1-10)
// ---------------------------------------------------------------------------

export const ABILITIES: Record<string, AbilityDef> = {
  // ====================== WARRIOR ======================
  heroic_strike: {
    id: 'heroic_strike', name: 'Heroic Strike', class: 'warrior', learnLevel: 1,
    cost: 15, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: true, onNextSwing: true, offGcd: true,
    effects: [{ type: 'weaponDamage', bonus: 11 }],
    ranks: [{ rank: 2, level: 8, cost: 15, effects: [{ type: 'weaponDamage', bonus: 21 }] }],
    icon: 'HS', iconColor: '#c0392b',
    description: 'A strong attack that increases melee damage by $d. Activates on your next swing.',
  },
  battle_shout: {
    id: 'battle_shout', name: 'Battle Shout', class: 'warrior', learnLevel: 1,
    cost: 10, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: false,
    effects: [{ type: 'selfBuff', kind: 'buff_ap', value: 20, duration: 120 }],
    icon: 'BS', iconColor: '#e67e22',
    description: 'Increases your attack power by 20 for 2 min.',
  },
  charge: {
    id: 'charge', name: 'Charge', class: 'warrior', learnLevel: 4,
    cost: 0, castTime: 0, cooldown: 15, range: 25, minRange: 8, school: 'physical',
    requiresTarget: true, offGcd: true,
    effects: [{ type: 'charge' }, { type: 'stun', duration: 1 }],
    icon: 'CH', iconColor: '#d35400',
    description: 'Charges an enemy, generating 9 rage and stunning it for 1 sec. 8-25 yd range.',
  },
  rend: {
    id: 'rend', name: 'Rend', class: 'warrior', learnLevel: 4,
    cost: 10, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: true,
    effects: [{ type: 'dot', total: 15, duration: 9, interval: 3 }],
    ranks: [{ rank: 2, level: 10, cost: 10, effects: [{ type: 'dot', total: 21, duration: 9, interval: 3 }] }],
    icon: 'RE', iconColor: '#922b21',
    description: 'Wounds the target, causing them to bleed for $d damage over 9 sec.',
  },
  thunder_clap: {
    id: 'thunder_clap', name: 'Thunder Clap', class: 'warrior', learnLevel: 6,
    cost: 20, castTime: 0, cooldown: 4, range: 0, school: 'physical',
    requiresTarget: false,
    effects: [
      { type: 'aoeDamage', min: 12, max: 14, radius: 8 },
      { type: 'aoeAttackSpeed', mult: 1.1, duration: 10, radius: 8 },
    ],
    icon: 'TC', iconColor: '#2980b9',
    description: 'Blasts nearby enemies for $d damage and slows their attacks by 10% for 10 sec.',
  },
  hamstring: {
    id: 'hamstring', name: 'Hamstring', class: 'warrior', learnLevel: 8,
    cost: 10, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 5, max: 5 }, { type: 'slow', mult: 0.5, duration: 15 }],
    icon: 'HA', iconColor: '#a93226',
    description: 'Maims the enemy for 5 damage, slowing its movement by 50% for 15 sec.',
  },
  bloodrage: {
    id: 'bloodrage', name: 'Bloodrage', class: 'warrior', learnLevel: 10,
    cost: 0, castTime: 0, cooldown: 60, range: 0, school: 'physical',
    requiresTarget: false, offGcd: true,
    effects: [{ type: 'selfDamagePctMax', pct: 0.08 }, { type: 'gainResource', amount: 10 }],
    icon: 'BR', iconColor: '#e74c3c',
    description: 'Generates 10 rage at the cost of health.',
  },
  overpower: {
    id: 'overpower', name: 'Overpower', class: 'warrior', learnLevel: 10,
    cost: 5, castTime: 0, cooldown: 5, range: 0, school: 'physical',
    requiresTarget: true, requiresDodgeProc: true,
    effects: [{ type: 'weaponStrike', bonus: 5, cannotBeDodged: true }],
    icon: 'OP', iconColor: '#f39c12',
    description: 'Instant attack for weapon damage +5. Only usable after the target dodges. Cannot be dodged.',
  },

  // ====================== MAGE ======================
  fireball: {
    id: 'fireball', name: 'Fireball', class: 'mage', learnLevel: 1,
    cost: 30, castTime: 1.5, cooldown: 0, range: 30, school: 'fire',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 16, max: 25 }, { type: 'dot', total: 2, duration: 4, interval: 2 }],
    ranks: [{
      rank: 2, level: 6, cost: 45, castTime: 2.0,
      effects: [{ type: 'directDamage', min: 22, max: 31 }, { type: 'dot', total: 3, duration: 6, interval: 2 }],
    }],
    icon: 'FB', iconColor: '#e74c3c',
    description: 'Hurls a fiery ball that causes $d Fire damage plus additional damage over time.',
  },
  frost_armor: {
    id: 'frost_armor', name: 'Frost Armor', class: 'mage', learnLevel: 1,
    cost: 20, castTime: 0, cooldown: 0, range: 0, school: 'frost',
    requiresTarget: false,
    effects: [{ type: 'selfBuff', kind: 'buff_armor', value: 30, duration: 1800 }],
    icon: 'FA', iconColor: '#aed6f1',
    description: 'Encases you in frost, increasing armor by 30 for 30 min.',
  },
  arcane_intellect: {
    id: 'arcane_intellect', name: 'Arcane Intellect', class: 'mage', learnLevel: 1,
    cost: 25, castTime: 0, cooldown: 0, range: 0, school: 'arcane',
    requiresTarget: false,
    effects: [{ type: 'selfBuff', kind: 'buff_int', value: 2, duration: 1800 }],
    icon: 'AI', iconColor: '#bb8fce',
    description: 'Increases Intellect by 2 for 30 min.',
  },
  frostbolt: {
    id: 'frostbolt', name: 'Frostbolt', class: 'mage', learnLevel: 4,
    cost: 25, castTime: 1.5, cooldown: 0, range: 30, school: 'frost',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 18, max: 20 }, { type: 'slow', mult: 0.6, duration: 5 }],
    ranks: [{
      rank: 2, level: 8, cost: 35, castTime: 2.0,
      effects: [{ type: 'directDamage', min: 31, max: 35 }, { type: 'slow', mult: 0.6, duration: 6 }],
    }],
    icon: 'FR', iconColor: '#3498db',
    description: 'Launches a bolt of frost, causing $d Frost damage and slowing movement by 40%.',
  },
  conjure_water: {
    id: 'conjure_water', name: 'Conjure Water', class: 'mage', learnLevel: 4,
    cost: 40, castTime: 3, cooldown: 0, range: 0, school: 'arcane',
    requiresTarget: false,
    effects: [], // special-cased: creates conjured_water in bags
    icon: 'CW', iconColor: '#5dade2',
    description: 'Conjures 2 bottles of spring water, restoring mana when drunk.',
  },
  fire_blast: {
    id: 'fire_blast', name: 'Fire Blast', class: 'mage', learnLevel: 6,
    cost: 40, castTime: 0, cooldown: 8, range: 20, school: 'fire',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 27, max: 35 }],
    icon: 'BL', iconColor: '#e67e22',
    description: 'Blasts the enemy for $d Fire damage. Instant.',
  },
  arcane_missiles: {
    id: 'arcane_missiles', name: 'Arcane Missiles', class: 'mage', learnLevel: 8,
    cost: 50, castTime: 0, channel: { duration: 3, ticks: 3 }, cooldown: 0, range: 30, school: 'arcane',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 8, max: 8 }], // per missile
    icon: 'AM', iconColor: '#c39bd3',
    description: 'Launches Arcane Missiles at the enemy, causing 8 Arcane damage each second for 3 sec.',
  },
  polymorph: {
    id: 'polymorph', name: 'Polymorph', class: 'mage', learnLevel: 8,
    cost: 50, castTime: 1.5, cooldown: 0, range: 30, school: 'arcane',
    requiresTarget: true,
    effects: [{ type: 'polymorph', duration: 15 }],
    icon: 'PM', iconColor: '#f5b7b1',
    description: 'Transforms the enemy into a sheep for up to 15 sec. The sheep wanders and heals rapidly. Any damage breaks the effect. Beasts and humanoids only.',
  },
  frost_nova: {
    id: 'frost_nova', name: 'Frost Nova', class: 'mage', learnLevel: 10,
    cost: 35, castTime: 0, cooldown: 22, range: 0, school: 'frost',
    requiresTarget: false,
    effects: [{ type: 'aoeRoot', duration: 8, radius: 10, min: 6, max: 7 }],
    icon: 'NV', iconColor: '#85c1e9',
    description: 'Freezes all nearby enemies in place for up to 8 sec, dealing $d Frost damage.',
  },

  // ====================== ROGUE ======================
  sinister_strike: {
    id: 'sinister_strike', name: 'Sinister Strike', class: 'rogue', learnLevel: 1,
    cost: 45, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: true, awardsCombo: 1,
    effects: [{ type: 'weaponStrike', bonus: 3 }],
    ranks: [{ rank: 2, level: 8, cost: 45, effects: [{ type: 'weaponStrike', bonus: 6 }] }],
    icon: 'SS', iconColor: '#f4d03f',
    description: 'An instant strike for weapon damage plus $d. Awards 1 combo point.',
  },
  eviscerate: {
    id: 'eviscerate', name: 'Eviscerate', class: 'rogue', learnLevel: 1,
    cost: 35, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: true, spendsCombo: true,
    effects: [{ type: 'finisherDamage', base: 4, perCombo: 7, variance: 4 }],
    icon: 'EV', iconColor: '#cb4335',
    description: 'Finishing move that causes damage per combo point.',
  },
  backstab: {
    id: 'backstab', name: 'Backstab', class: 'rogue', learnLevel: 4,
    cost: 60, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: true, awardsCombo: 1,
    effects: [{ type: 'weaponStrike', bonus: 11, requiresBehind: true, weaponMult: 1.5 }],
    icon: 'BK', iconColor: '#ec7063',
    description: 'Backstab the target for 150% weapon damage plus $d. Must be behind the target. Requires a dagger. Awards 1 combo point.',
  },
  gouge: {
    id: 'gouge', name: 'Gouge', class: 'rogue', learnLevel: 6,
    cost: 45, castTime: 0, cooldown: 10, range: 0, school: 'physical',
    requiresTarget: true, awardsCombo: 1,
    effects: [{ type: 'directDamage', min: 8, max: 9 }, { type: 'incapacitate', duration: 4 }],
    icon: 'GO', iconColor: '#d98880',
    description: 'Strikes the target, incapacitating it for 4 sec. Any damage breaks the effect. Awards 1 combo point.',
  },
  evasion: {
    id: 'evasion', name: 'Evasion', class: 'rogue', learnLevel: 8,
    cost: 0, castTime: 0, cooldown: 300, range: 0, school: 'physical',
    requiresTarget: false, offGcd: true,
    effects: [{ type: 'selfBuff', kind: 'buff_dodge', value: 0.5, duration: 15 }],
    icon: 'EA', iconColor: '#82e0aa',
    description: 'Increases your dodge chance by 50% for 15 sec.',
  },
  slice_and_dice: {
    id: 'slice_and_dice', name: 'Slice and Dice', class: 'rogue', learnLevel: 10,
    cost: 25, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: true, spendsCombo: true,
    effects: [{ type: 'finisherHaste', mult: 1.3, basedur: 9, perCombo: 3 }],
    icon: 'SD', iconColor: '#f7dc6f',
    description: 'Finishing move that increases melee attack speed by 30%. Lasts longer per combo point.',
  },
  sprint: {
    id: 'sprint', name: 'Sprint', class: 'rogue', learnLevel: 10,
    cost: 0, castTime: 0, cooldown: 300, range: 0, school: 'physical',
    requiresTarget: false, offGcd: true,
    effects: [{ type: 'selfBuff', kind: 'buff_speed', value: 1.7, duration: 15 }],
    icon: 'SP', iconColor: '#aab7b8',
    description: 'Increases your movement speed by 70% for 15 sec.',
  },

  // ====================== PALADIN ======================
  seal_of_righteousness: {
    id: 'seal_of_righteousness', name: 'Seal of Righteousness', class: 'paladin', learnLevel: 1,
    cost: 25, castTime: 0, cooldown: 0, range: 0, school: 'holy',
    requiresTarget: false,
    effects: [{ type: 'imbue', bonus: 4, duration: 30, judgeMin: 10, judgeMax: 18 }],
    icon: 'SR', iconColor: '#f9e79f',
    description: 'Fills you with Holy power for 30 sec, causing each of your melee swings to deal 4 additional Holy damage. Unleash with Judgement.',
  },
  holy_light: {
    id: 'holy_light', name: 'Holy Light', class: 'paladin', learnLevel: 1,
    cost: 35, castTime: 2.5, cooldown: 0, range: 30, school: 'holy',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'heal', min: 42, max: 51 }],
    icon: 'HL', iconColor: '#fdf2c7',
    description: 'Heals a friendly target for $d.',
  },
  devotion_aura: {
    id: 'devotion_aura', name: 'Devotion Aura', class: 'paladin', learnLevel: 1,
    cost: 0, castTime: 0, cooldown: 0, range: 0, school: 'holy',
    requiresTarget: false,
    effects: [{ type: 'selfBuff', kind: 'buff_armor', value: 40, duration: 1800 }],
    icon: 'DA', iconColor: '#f4d03f',
    description: 'Increases your armor by 40 for 30 min.',
  },
  judgement: {
    id: 'judgement', name: 'Judgement', class: 'paladin', learnLevel: 4,
    cost: 30, castTime: 0, cooldown: 10, range: 10, school: 'holy',
    requiresTarget: true,
    effects: [{ type: 'judgement' }],
    icon: 'JD', iconColor: '#f5b041',
    description: 'Unleashes your active Seal upon the enemy, consuming it to deal its judgement damage.',
  },
  blessing_of_might: {
    id: 'blessing_of_might', name: 'Blessing of Might', class: 'paladin', learnLevel: 4,
    cost: 25, castTime: 0, cooldown: 0, range: 30, school: 'holy',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'buffTarget', kind: 'buff_ap', value: 15, duration: 300 }],
    icon: 'BM', iconColor: '#f8c471',
    description: 'Places a Blessing on a friendly target, increasing attack power by 15 for 5 min.',
  },
  divine_protection: {
    id: 'divine_protection', name: 'Divine Protection', class: 'paladin', learnLevel: 6,
    cost: 15, castTime: 0, cooldown: 180, range: 0, school: 'holy',
    requiresTarget: false, offGcd: true,
    effects: [{ type: 'absorb', amount: 50, duration: 10 }],
    icon: 'DP', iconColor: '#fcf3cf',
    description: 'A holy shield absorbs 50 damage for 10 sec.',
  },
  hammer_of_justice: {
    id: 'hammer_of_justice', name: 'Hammer of Justice', class: 'paladin', learnLevel: 8,
    cost: 30, castTime: 0, cooldown: 60, range: 10, school: 'holy',
    requiresTarget: true,
    effects: [{ type: 'stun', duration: 3 }],
    icon: 'HJ', iconColor: '#d4ac0d',
    description: 'Stuns the target for 3 sec.',
  },
  lay_on_hands: {
    id: 'lay_on_hands', name: 'Lay on Hands', class: 'paladin', learnLevel: 10,
    cost: 0, castTime: 0, cooldown: 600, range: 30, school: 'holy',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'heal', min: 250, max: 250 }],
    icon: 'LH', iconColor: '#fef9e7',
    description: 'A massive surge of healing: restores 250 health. 10 min cooldown.',
  },

  // ====================== HUNTER ======================
  raptor_strike: {
    id: 'raptor_strike', name: 'Raptor Strike', class: 'hunter', learnLevel: 1,
    cost: 15, castTime: 0, cooldown: 6, range: 0, school: 'physical',
    requiresTarget: true, onNextSwing: true, offGcd: true,
    effects: [{ type: 'weaponDamage', bonus: 5 }],
    icon: 'RS', iconColor: '#a9dfbf',
    description: 'A strong melee attack that increases damage by 5. Activates on your next swing.',
  },
  aspect_of_the_hawk: {
    id: 'aspect_of_the_hawk', name: 'Aspect of the Hawk', class: 'hunter', learnLevel: 4,
    cost: 20, castTime: 0, cooldown: 0, range: 0, school: 'nature',
    requiresTarget: false,
    effects: [{ type: 'selfBuff', kind: 'buff_ap', value: 20, duration: 1800 }],
    icon: 'AH', iconColor: '#7dcea0',
    description: 'Take on the aspect of the hawk, increasing attack power by 20 for 30 min.',
  },
  serpent_sting: {
    id: 'serpent_sting', name: 'Serpent Sting', class: 'hunter', learnLevel: 4,
    cost: 15, castTime: 0, cooldown: 0, range: 35, minRange: 8, school: 'nature',
    requiresTarget: true,
    effects: [{ type: 'dot', total: 20, duration: 15, interval: 3 }],
    icon: 'SS', iconColor: '#58d68d',
    description: 'Stings the target, dealing $d Nature damage over 15 sec.',
  },
  arcane_shot: {
    id: 'arcane_shot', name: 'Arcane Shot', class: 'hunter', learnLevel: 6,
    cost: 25, castTime: 0, cooldown: 6, range: 35, minRange: 8, school: 'arcane',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 13, max: 17 }],
    icon: 'AS', iconColor: '#bb8fce',
    description: 'An instant shot that deals $d Arcane damage.',
  },
  concussive_shot: {
    id: 'concussive_shot', name: 'Concussive Shot', class: 'hunter', learnLevel: 8,
    cost: 20, castTime: 0, cooldown: 12, range: 35, minRange: 8, school: 'physical',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 4, max: 6 }, { type: 'slow', mult: 0.5, duration: 4 }],
    icon: 'CS', iconColor: '#85c1e9',
    description: 'Dazes the target, slowing movement by 50% for 4 sec.',
  },
  mongoose_bite: {
    id: 'mongoose_bite', name: 'Mongoose Bite', class: 'hunter', learnLevel: 10,
    cost: 10, castTime: 0, cooldown: 5, range: 0, school: 'physical',
    requiresTarget: true, requiresDodgeProc: true,
    effects: [{ type: 'weaponStrike', bonus: 12, cannotBeDodged: true }],
    icon: 'MB', iconColor: '#52be80',
    description: 'Counterattack after the target dodges for weapon damage plus 12. Cannot be dodged.',
  },
  wing_clip: {
    id: 'wing_clip', name: 'Wing Clip', class: 'hunter', learnLevel: 10,
    cost: 20, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 3, max: 5 }, { type: 'slow', mult: 0.6, duration: 10 }],
    icon: 'WC', iconColor: '#a3e4d7',
    description: 'Inflicts a wound that slows the enemy by 40% for 10 sec.',
  },

  // ====================== PRIEST ======================
  smite: {
    id: 'smite', name: 'Smite', class: 'priest', learnLevel: 1,
    cost: 20, castTime: 2.0, cooldown: 0, range: 30, school: 'holy',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 15, max: 20 }],
    icon: 'SM', iconColor: '#fdf2c7',
    description: 'Smites the enemy for $d Holy damage.',
  },
  lesser_heal: {
    id: 'lesser_heal', name: 'Lesser Heal', class: 'priest', learnLevel: 1,
    cost: 30, castTime: 2.0, cooldown: 0, range: 30, school: 'holy',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'heal', min: 47, max: 58 }],
    icon: 'LH', iconColor: '#fef9e7',
    description: 'Heals a friendly target for $d.',
  },
  power_word_fortitude: {
    id: 'power_word_fortitude', name: 'Power Word: Fortitude', class: 'priest', learnLevel: 1,
    cost: 30, castTime: 0, cooldown: 0, range: 30, school: 'holy',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'buffTarget', kind: 'buff_sta', value: 3, duration: 1800 }],
    icon: 'PF', iconColor: '#fff',
    description: 'Increases the target\'s Stamina by 3 for 30 min.',
  },
  shadow_word_pain: {
    id: 'shadow_word_pain', name: 'Shadow Word: Pain', class: 'priest', learnLevel: 4,
    cost: 25, castTime: 0, cooldown: 0, range: 30, school: 'shadow',
    requiresTarget: true,
    effects: [{ type: 'dot', total: 30, duration: 18, interval: 3 }],
    icon: 'SW', iconColor: '#9b59b6',
    description: 'A word of darkness causes $d Shadow damage over 18 sec.',
  },
  power_word_shield: {
    id: 'power_word_shield', name: 'Power Word: Shield', class: 'priest', learnLevel: 6,
    cost: 45, castTime: 0, cooldown: 6, range: 30, school: 'holy',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'absorb', amount: 48, duration: 30 }],
    icon: 'PS', iconColor: '#fcf3cf',
    description: 'Shields the target, absorbing 48 damage for 30 sec.',
  },
  renew: {
    id: 'renew', name: 'Renew', class: 'priest', learnLevel: 8,
    cost: 30, castTime: 0, cooldown: 0, range: 30, school: 'holy',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'hot', total: 45, duration: 15, interval: 3 }],
    icon: 'RN', iconColor: '#abebc6',
    description: 'Heals the target for $d over 15 sec.',
  },
  mind_blast: {
    id: 'mind_blast', name: 'Mind Blast', class: 'priest', learnLevel: 10,
    cost: 50, castTime: 1.5, cooldown: 8, range: 30, school: 'shadow',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 42, max: 46 }],
    icon: 'MB', iconColor: '#bb8fce',
    description: 'Blasts the target\'s mind for $d Shadow damage.',
  },

  // ====================== SHAMAN ======================
  lightning_bolt: {
    id: 'lightning_bolt', name: 'Lightning Bolt', class: 'shaman', learnLevel: 1,
    cost: 15, castTime: 1.5, cooldown: 0, range: 30, school: 'nature',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 15, max: 17 }],
    icon: 'LB', iconColor: '#85c1e9',
    description: 'Hurls a bolt of lightning for $d Nature damage.',
  },
  rockbiter_weapon: {
    id: 'rockbiter_weapon', name: 'Rockbiter Weapon', class: 'shaman', learnLevel: 1,
    cost: 20, castTime: 0, cooldown: 0, range: 0, school: 'nature',
    requiresTarget: false,
    effects: [{ type: 'imbue', bonus: 5, duration: 300 }],
    icon: 'RB', iconColor: '#b9770e',
    description: 'Imbues your weapon with the fury of stone: each swing deals 5 additional damage for 5 min.',
  },
  healing_wave: {
    id: 'healing_wave', name: 'Healing Wave', class: 'shaman', learnLevel: 1,
    cost: 25, castTime: 1.5, cooldown: 0, range: 30, school: 'nature',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'heal', min: 36, max: 44 }],
    icon: 'HW', iconColor: '#aed6f1',
    description: 'Heals a friendly target for $d.',
  },
  earth_shock: {
    id: 'earth_shock', name: 'Earth Shock', class: 'shaman', learnLevel: 4,
    cost: 30, castTime: 0, cooldown: 6, range: 20, school: 'nature',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 19, max: 22 }],
    icon: 'ES', iconColor: '#b9770e',
    description: 'Instantly shocks the target with concussive force for $d Nature damage.',
  },
  lightning_shield: {
    id: 'lightning_shield', name: 'Lightning Shield', class: 'shaman', learnLevel: 8,
    cost: 25, castTime: 0, cooldown: 0, range: 0, school: 'nature',
    requiresTarget: false,
    effects: [{ type: 'selfBuff', kind: 'thorns', value: 13, duration: 600 }],
    icon: 'LS', iconColor: '#5dade2',
    description: 'Surrounds you with crackling lightning: melee attackers take 13 Nature damage.',
  },
  flame_shock: {
    id: 'flame_shock', name: 'Flame Shock', class: 'shaman', learnLevel: 10,
    cost: 35, castTime: 0, cooldown: 6, range: 20, school: 'fire',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 25, max: 25 }, { type: 'dot', total: 28, duration: 12, interval: 3 }],
    icon: 'FS', iconColor: '#e74c3c',
    description: 'Sears the target with fire for 25 damage plus $d over 12 sec.',
  },

  // ====================== WARLOCK ======================
  shadow_bolt: {
    id: 'shadow_bolt', name: 'Shadow Bolt', class: 'warlock', learnLevel: 1,
    cost: 25, castTime: 1.7, cooldown: 0, range: 30, school: 'shadow',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 13, max: 18 }],
    icon: 'SB', iconColor: '#9b59b6',
    description: 'Sends a shadowy bolt at the enemy for $d Shadow damage.',
  },
  demon_skin: {
    id: 'demon_skin', name: 'Demon Skin', class: 'warlock', learnLevel: 1,
    cost: 20, castTime: 0, cooldown: 0, range: 0, school: 'shadow',
    requiresTarget: false,
    effects: [{ type: 'selfBuff', kind: 'buff_armor', value: 30, duration: 1800 }],
    icon: 'DS', iconColor: '#7d6608',
    description: 'Demonic skin increases your armor by 30 for 30 min.',
  },
  immolate: {
    id: 'immolate', name: 'Immolate', class: 'warlock', learnLevel: 1,
    cost: 25, castTime: 2.0, cooldown: 0, range: 30, school: 'fire',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 11, max: 11 }, { type: 'dot', total: 20, duration: 15, interval: 3 }],
    icon: 'IM', iconColor: '#e67e22',
    description: 'Burns the enemy for 11 Fire damage and an additional $d over 15 sec.',
  },
  corruption: {
    id: 'corruption', name: 'Corruption', class: 'warlock', learnLevel: 4,
    cost: 35, castTime: 2.0, cooldown: 0, range: 30, school: 'shadow',
    requiresTarget: true,
    effects: [{ type: 'dot', total: 40, duration: 18, interval: 3 }],
    icon: 'CO', iconColor: '#6c3483',
    description: 'Corrupts the target, causing $d Shadow damage over 18 sec.',
  },
  life_tap: {
    id: 'life_tap', name: 'Life Tap', class: 'warlock', learnLevel: 6,
    cost: 0, castTime: 0, cooldown: 0, range: 0, school: 'shadow',
    requiresTarget: false,
    effects: [{ type: 'lifeTap', hp: 30, mana: 30 }],
    icon: 'LT', iconColor: '#76448a',
    description: 'Converts 30 health into 30 mana.',
  },
  curse_of_agony: {
    id: 'curse_of_agony', name: 'Curse of Agony', class: 'warlock', learnLevel: 8,
    cost: 25, castTime: 0, cooldown: 0, range: 30, school: 'shadow',
    requiresTarget: true,
    effects: [{ type: 'dot', total: 36, duration: 24, interval: 3 }],
    icon: 'CA', iconColor: '#512e5f',
    description: 'Curses the target with agony: $d Shadow damage over 24 sec.',
  },
  drain_life: {
    id: 'drain_life', name: 'Drain Life', class: 'warlock', learnLevel: 10,
    cost: 35, castTime: 0, channel: { duration: 5, ticks: 5 }, cooldown: 0, range: 20, school: 'shadow',
    requiresTarget: true,
    effects: [{ type: 'drainTick', min: 7, max: 7, healFrac: 1 }],
    icon: 'DL', iconColor: '#a569bd',
    description: 'Drains the target\'s life, transferring 7 health to you each second for 5 sec.',
  },

  // ====================== DRUID ======================
  wrath: {
    id: 'wrath', name: 'Wrath', class: 'druid', learnLevel: 1,
    cost: 20, castTime: 1.5, cooldown: 0, range: 30, school: 'nature',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 13, max: 16 }],
    icon: 'WR', iconColor: '#58d68d',
    description: 'Hurls a bolt of nature energy for $d Nature damage.',
  },
  healing_touch: {
    id: 'healing_touch', name: 'Healing Touch', class: 'druid', learnLevel: 1,
    cost: 25, castTime: 2.5, cooldown: 0, range: 30, school: 'nature',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'heal', min: 37, max: 51 }],
    icon: 'HT', iconColor: '#a9dfbf',
    description: 'Heals a friendly target for $d.',
  },
  mark_of_the_wild: {
    id: 'mark_of_the_wild', name: 'Mark of the Wild', class: 'druid', learnLevel: 1,
    cost: 20, castTime: 0, cooldown: 0, range: 30, school: 'nature',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'buffTarget', kind: 'buff_armor', value: 25, duration: 1800 }],
    icon: 'MW', iconColor: '#f5cba7',
    description: 'Places the Mark of the Wild on a friendly target, increasing armor by 25 for 30 min.',
  },
  moonfire: {
    id: 'moonfire', name: 'Moonfire', class: 'druid', learnLevel: 4,
    cost: 25, castTime: 0, cooldown: 0, range: 30, school: 'arcane',
    requiresTarget: true,
    effects: [{ type: 'directDamage', min: 9, max: 12 }, { type: 'dot', total: 12, duration: 9, interval: 3 }],
    icon: 'MF', iconColor: '#d2b4de',
    description: 'Burns the enemy with moonfire for $d Arcane damage plus damage over time.',
  },
  rejuvenation: {
    id: 'rejuvenation', name: 'Rejuvenation', class: 'druid', learnLevel: 4,
    cost: 25, castTime: 0, cooldown: 0, range: 30, school: 'nature',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'hot', total: 32, duration: 12, interval: 3 }],
    icon: 'RJ', iconColor: '#82e0aa',
    description: 'Heals the target for $d over 12 sec.',
  },
  thorns: {
    id: 'thorns', name: 'Thorns', class: 'druid', learnLevel: 6,
    cost: 20, castTime: 0, cooldown: 0, range: 30, school: 'nature',
    requiresTarget: true, targetType: 'friendly',
    effects: [{ type: 'buffTarget', kind: 'thorns', value: 3, duration: 600 }],
    icon: 'TH', iconColor: '#7dcea0',
    description: 'Thorns sprout from the target: melee attackers take 3 Nature damage.',
  },
  entangling_roots: {
    id: 'entangling_roots', name: 'Entangling Roots', class: 'druid', learnLevel: 8,
    cost: 35, castTime: 1.5, cooldown: 0, range: 30, school: 'nature',
    requiresTarget: true,
    effects: [{ type: 'root', duration: 12 }],
    icon: 'ER', iconColor: '#229954',
    description: 'Roots the target in place for up to 12 sec.',
  },
  bear_form: {
    id: 'bear_form', name: 'Bear Form', class: 'druid', learnLevel: 10,
    cost: 30, castTime: 0, cooldown: 0, range: 0, school: 'physical',
    requiresTarget: false,
    effects: [{ type: 'selfBuff', kind: 'form_bear', value: 0.65, duration: 3600 }],
    icon: 'BF', iconColor: '#b9770e',
    description: 'Shapeshift into a bear, increasing armor by 65% and attack power by 15. Cast again to return to caster form.',
  },
};

// Abilities a class knows at a given level, with active rank values resolved.
export function abilitiesKnownAt(cls: PlayerClass, level: number): { def: AbilityDef; rank: number; cost: number; castTime: number; effects: AbilityDef['effects'] }[] {
  const out = [];
  for (const id of CLASSES[cls].abilities) {
    const def = ABILITIES[id];
    if (def.learnLevel > level) continue;
    let rank = 1, cost = def.cost, castTime = def.castTime, effects = def.effects;
    for (const r of def.ranks ?? []) {
      if (r.level <= level) {
        rank = r.rank;
        cost = r.cost;
        effects = r.effects;
        if (r.castTime !== undefined) castTime = r.castTime;
      }
    }
    out.push({ def, rank, cost, castTime, effects });
  }
  return out;
}
