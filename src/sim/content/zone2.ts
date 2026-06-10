// Zone 2 — Mirefen Marsh (levels 6-13). Brother Aldric follows the
// Gravecaller trail south of the causeway: drowned dead rise from the fen,
// trolls dig into barrow-mounds, and Vael the Mistcaller waits in the
// Sunken Bastion.
//
// Content (mobs/NPCs/quests/camps/items/props) is filled in by the zone-2
// content pass; the zone definition and roads below anchor the world layout.

import type {
  CampDef, GroundObjectDef, ItemDef, MobTemplate, NpcDef, QuestDef, ZoneDef, ZonePropsDef,
} from '../types';
import { emptyZoneProps } from '../types';

export const ZONE2_ZONE: ZoneDef = {
  id: 'mirefen_marsh',
  name: 'Mirefen Marsh',
  zMin: 180,
  zMax: 540,
  levelRange: [6, 13],
  biome: 'marsh',
  hub: { x: 0, z: 300, radius: 20, name: 'Fenbridge' },
  graveyard: { x: -18, z: 286 },
  lakes: [
    { x: -110, z: 310, radius: 35 },
    { x: 60, z: 380, radius: 25 },
    { x: -40, z: 450, radius: 20 },
  ],
  pois: [
    { x: 0, z: 300, label: 'Fenbridge' },
    { x: -40, z: 230, label: 'Prowler Reeds' },
    { x: -105, z: 300, label: 'Deepfen Shallows' },
    { x: 80, z: 315, label: 'Widow Thicket' },
    { x: 100, z: 435, label: 'Drowned Chapel' },
    { x: -95, z: 440, label: 'Troll Mounds' },
    { x: 0, z: 485, label: 'Gravecaller Encampment' },
    { x: 45, z: 515, label: 'The Sunken Bastion' },
  ],
  welcome: 'Report to Warden Fenwick at the Fenbridge gate.',
};

// Causeway north from Eastbrook to Fenbridge, then spokes to each hub.
export const ZONE2_ROADS: { x: number; z: number }[][] = [
  [{ x: 0, z: 80 }, { x: 0, z: 180 }, { x: -8, z: 240 }, { x: 0, z: 300 }],         // Eastbrook -> Fenbridge
  [{ x: 4, z: 308 }, { x: 50, z: 380 }, { x: 90, z: 420 }],                         // -> Drowned Chapel
  [{ x: -6, z: 308 }, { x: -40, z: 370 }, { x: -80, z: 420 }],                      // -> Troll Mounds
  [{ x: 2, z: 312 }, { x: 10, z: 400 }, { x: 20, z: 470 }, { x: 45, z: 515 }],      // -> cult camp -> Bastion
];

export const ZONE2_MOBS: Record<string, MobTemplate> = {};
export const ZONE2_NPCS: Record<string, NpcDef> = {};
export const ZONE2_QUESTS: Record<string, QuestDef> = {};
export const ZONE2_QUEST_ORDER: string[] = [];
export const ZONE2_CAMPS: CampDef[] = [];
export const ZONE2_OBJECTS: GroundObjectDef[] = [];
export const ZONE2_ITEMS: Record<string, ItemDef> = {};
export const ZONE2_PROPS: ZonePropsDef = emptyZoneProps();
