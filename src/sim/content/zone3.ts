// Zone 3 — Thornpeak Heights (levels 13-20). The Gravecallers serve Korzul
// the Gravewyrm, an ancient dragon sealed beneath the peaks. Highwatch holds
// the wall against ogres, waking elementals, and the open chanting of the
// Wyrmcult at the Gravewyrm Sanctum gates.
//
// Content (mobs/NPCs/quests/camps/items/props) is filled in by the zone-3
// content pass; the zone definition and roads below anchor the world layout.

import type {
  CampDef, GroundObjectDef, ItemDef, MobTemplate, NpcDef, QuestDef, ZoneDef, ZonePropsDef,
} from '../types';
import { emptyZoneProps } from '../types';

export const ZONE3_ZONE: ZoneDef = {
  id: 'thornpeak_heights',
  name: 'Thornpeak Heights',
  zMin: 540,
  zMax: 900,
  levelRange: [13, 20],
  biome: 'peaks',
  hub: { x: 0, z: 660, radius: 20, name: 'Highwatch' },
  graveyard: { x: 15, z: 645 },
  lakes: [{ x: -70, z: 760, radius: 18 }],
  pois: [
    { x: 0, z: 660, label: 'Highwatch' },
    { x: -50, z: 590, label: 'Stalker Ridge' },
    { x: 85, z: 615, label: 'Deeprock Burrows' },
    { x: -90, z: 700, label: 'Ogre Foothills' },
    { x: -130, z: 740, label: "Drogmar's War-Camp" },
    { x: 110, z: 760, label: 'Stormcrag' },
    { x: 55, z: 820, label: 'Wyrmcult Tents' },
    { x: -40, z: 830, label: 'Revenant Fields' },
    { x: 0, z: 880, label: 'Gravewyrm Sanctum' },
  ],
  welcome: 'Captain Thessaly holds the wall at Highwatch — barely.',
};

// Mountain road from Fenbridge up to Highwatch, then spokes.
export const ZONE3_ROADS: { x: number; z: number }[][] = [
  [{ x: 0, z: 320 }, { x: 10, z: 450 }, { x: 0, z: 540 }, { x: 0, z: 660 }],        // Fenbridge -> Highwatch
  [{ x: -6, z: 666 }, { x: -60, z: 700 }, { x: -110, z: 735 }],                     // -> ogre war-camp
  [{ x: 6, z: 668 }, { x: 70, z: 720 }, { x: 110, z: 760 }],                        // -> Stormcrag
  [{ x: 0, z: 676 }, { x: 0, z: 780 }, { x: 0, z: 860 }],                           // -> Sanctum Approach
];

export const ZONE3_MOBS: Record<string, MobTemplate> = {};
export const ZONE3_NPCS: Record<string, NpcDef> = {};
export const ZONE3_QUESTS: Record<string, QuestDef> = {};
export const ZONE3_QUEST_ORDER: string[] = [];
export const ZONE3_CAMPS: CampDef[] = [];
export const ZONE3_OBJECTS: GroundObjectDef[] = [];
export const ZONE3_ITEMS: Record<string, ItemDef> = {};
export const ZONE3_PROPS: ZonePropsDef = emptyZoneProps();
