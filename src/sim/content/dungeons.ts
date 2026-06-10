// Dungeon content: mob templates that only spawn inside instances, spawn
// lists, and the DungeonDef registry merged by sim/data.ts.

import type { DungeonDef, DungeonSpawn, MobTemplate } from '../types';

export const DUNGEON_MOBS: Record<string, MobTemplate> = {
  // ---- The Hollow Crypt (5-player elite instance) ----
  crypt_shambler: {
    id: 'crypt_shambler', name: 'Crypt Shambler', minLevel: 7, maxLevel: 8, family: 'undead', elite: true,
    hpBase: 50, hpPerLevel: 20, dmgBase: 7, dmgPerLevel: 2.2, attackSpeed: 2.4,
    armorPerLevel: 18, moveSpeed: 6.5, aggroRadius: 12,
    loot: [{ copper: 90, chance: 1 }, { itemId: 'bone_fragments', chance: 0.8 }],
    scale: 1.1, color: 0xb8c4c4,
  },
  hollow_acolyte: {
    id: 'hollow_acolyte', name: 'Hollow Acolyte', minLevel: 8, maxLevel: 8, family: 'undead', elite: true,
    hpBase: 44, hpPerLevel: 18, dmgBase: 8, dmgPerLevel: 2.3, attackSpeed: 2.0,
    armorPerLevel: 14, moveSpeed: 7, aggroRadius: 12,
    loot: [{ copper: 110, chance: 1 }, { itemId: 'linen_scrap', chance: 0.6 }],
    scale: 1.0, color: 0x5b2c6f,
  },
  bonechill_widow: {
    id: 'bonechill_widow', name: 'Bonechill Widow', minLevel: 8, maxLevel: 9, family: 'spider', elite: true,
    hpBase: 48, hpPerLevel: 19, dmgBase: 8, dmgPerLevel: 2.4, attackSpeed: 1.8,
    armorPerLevel: 12, moveSpeed: 8, aggroRadius: 13,
    loot: [{ copper: 120, chance: 1 }, { itemId: 'spider_leg', chance: 0.7 }],
    scale: 1.25, color: 0xd6eaf8,
  },
  sexton_marrow: {
    id: 'sexton_marrow', name: 'Sexton Marrow', minLevel: 9, maxLevel: 9, family: 'undead', elite: true,
    hpBase: 110, hpPerLevel: 24, dmgBase: 9, dmgPerLevel: 2.5, attackSpeed: 2.2,
    armorPerLevel: 22, moveSpeed: 7, aggroRadius: 14,
    loot: [{ copper: 400, chance: 1 }, { itemId: 'quilted_trousers', chance: 0.4 }, { itemId: 'oiled_boots', chance: 0.4 }],
    scale: 1.2, color: 0x839192,
  },
  morthen: {
    id: 'morthen', name: 'Morthen the Gravecaller', minLevel: 10, maxLevel: 10, family: 'undead',
    elite: true, boss: true,
    hpBase: 230, hpPerLevel: 32, dmgBase: 11, dmgPerLevel: 2.6, attackSpeed: 2.6,
    armorPerLevel: 26, moveSpeed: 7, aggroRadius: 16,
    aoePulse: { min: 12, max: 18, radius: 12, every: 10, name: 'Shadow Pulse' },
    loot: [{ copper: 2500, chance: 1 }, { itemId: 'greyjaw_pelt_cloak', chance: 0.5 }],
    scale: 1.35, color: 0x4a235a,
  },
};

// Trash packs of 2 elites (spaced beyond social-aggro range so groups can
// pull them one pack at a time), a miniboss pair, then Morthen with guards.
const CRYPT_SPAWN_LIST: DungeonSpawn[] = [
  { mobId: 'crypt_shambler', x: -3, z: 18 },
  { mobId: 'crypt_shambler', x: 3, z: 19 },
  { mobId: 'crypt_shambler', x: -9, z: 38 },
  { mobId: 'hollow_acolyte', x: -5, z: 39 },
  { mobId: 'crypt_shambler', x: 9, z: 54 },
  { mobId: 'hollow_acolyte', x: 5, z: 55 },
  { mobId: 'bonechill_widow', x: -5, z: 68 },
  { mobId: 'bonechill_widow', x: -1, z: 70 },
  { mobId: 'sexton_marrow', x: -4, z: 82 },
  { mobId: 'hollow_acolyte', x: 1, z: 83 },
  { mobId: 'morthen', x: 0, z: 98 },
  { mobId: 'crypt_shambler', x: -4, z: 96 },
  { mobId: 'crypt_shambler', x: 4, z: 96 },
];

export const DUNGEON_DEFS: Record<string, DungeonDef> = {
  hollow_crypt: {
    id: 'hollow_crypt',
    name: 'The Hollow Crypt',
    index: 0,
    doorPos: { x: 80, z: 90 }, // entrance portal at the chapel ruin
    entry: { x: 0, z: 0 },
    exitOffset: { x: 0, z: -6 },
    spawns: CRYPT_SPAWN_LIST,
    interior: 'crypt',
    suggestedPlayers: 5,
    enterText: 'You descend into the Hollow Crypt...',
    leaveText: 'You climb back into daylight.',
  },
};
