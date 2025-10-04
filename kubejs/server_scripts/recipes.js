ServerEvents.recipes(event => {
  event.remove({
    output: 'waystones:mossy_waystone',
    type: 'minecraft:crafting_shaped',
    input: [
      'minecraft:obsidian',
      'minecraft:stone_bricks',
      'waystones:warp_stone'
    ]
  })
})
MoreJSEvents.villagerTrades(event => {
    event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_chestplate',
	});
	event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_helmet',
	});
	event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_leggings',
	});
	event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_boots',
	});
	event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_hoe',
	});
	event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_axe',
	});
	event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_shovel',
	});
	event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_pickaxe',
	});
	event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:diamond_sword',
    });
});
ServerEvents.recipes(event => {
  event.remove({ output: 'waystones:waystone' })
  event.remove({ output: 'waystones:sharestone' })
  event.remove({ output: 'waystones:sandy_waystone' })
  event.remove({ output: 'waystones:deepslate_waystone' })
  event.remove({ output: 'waystones:blackstone_waystone' })
  event.remove({ output: 'waystones:end_stone_waystone' })
  event.remove({ output: 'waystones:warp_plate' })
  event.remove({ output: 'waystones:portstone' })
  event.remove({ output: 'immersive_aircraft:gyrodyne' })
  event.remove({ output: 'immersive_aircraft:engine' })
  event.remove({ output: 'immersive_aircraft:quadrocopter' })
  event.remove({ output: 'immersive_aircraft:airship' })
  event.remove({ output: 'immersive_aircraft:cargo_airship' })
  event.remove({ output: 'immersive_aircraft:boiler' })
  event.remove({ output: 'immersive_aircraft:steel_boiler' })
  event.remove({ output: 'immersive_aircraft:nether_engine' })
  event.remove({ output: 'immersive_aircraft:biplane' })
  event.remove({ output: 'immersive_aircraft:improved_landing_gear' })
  event.remove({ output: 'immersive_aircraft:propeller' })
  event.remove({ output: 'immersive_aircraft:enhanced_propeller' })
  event.remove({ output: 'immersive_aircraft:heavy_crossbow' })
  event.remove({ output: 'immersive_aircraft:rotary_cannon' })
  event.remove({ output: 'immersive_aircraft:bomb_bay' })
  event.remove({ output: 'immersive_aircraft:warship' })
  event.remove({ output: 'explorerscompass:explorerscompass' })
  event.remove({ output: 'sophisticatedbackpacks:copper_backpack' })
  event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
  event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
  event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
  event.remove({ output: 'dungeon_realm:map_device' })
event.shaped('immersive_aircraft:cargo_airship', [
  'DED',
  'ACA',
  'ABA'
], {
  A: { tag: 'forge:chests' },
  B: { item: 'immersive_aircraft:hull_reinforcement' },
  C: { item: 'immersive_aircraft:airship' },
  D: { item: 'immersive_aircraft:propeller' },
  E: { item: 'minecraft:lead' }
})
event.shaped('sophisticatedbackpacks:copper_backpack', [
  'BAB',
  'ACA',
  'BAB'
], {
  A: { item: 'minecraft:copper_block' },
  B: { item: 'create:zinc_ingot' },
  C: { item: 'sophisticatedbackpacks:backpack' }
})
event.shaped('dungeon_realm:map_device', [
  ' C ',
  'ABA',
  'BBB'
], {
  A: { item: 'minecraft:gold_ingot' },
  B: { item: 'create:limestone' },
  C: { item: 'waystones:warp_stone' }
})
event.shaped('spelunkery:portal_fluid_bottle', [
  '   ',
  'ACA',
  'ABA'
], {
  A: { item: 'waystones:warp_dust' },
  B: { item: 'minecraft:glass_bottle' },
  C: { item: 'waystones:warp_stone' }
})
event.shaped('sophisticatedbackpacks:iron_backpack', [
  ' A ',
  'ABA',
  ' A '
], {
  A: { item: 'minecraft:iron_block' },
  B: { item: 'sophisticatedbackpacks:copper_backpack' }
})
event.shaped('sophisticatedbackpacks:iron_backpack', [
  'BAB',
  'ACA',
  'BAB'
], {
  A: { item: 'minecraft:iron_block' },
  B: { item: 'oreganized:lead_ingot' },
  C: { item: 'sophisticatedbackpacks:backpack' }
})
event.shaped('sophisticatedbackpacks:gold_backpack', [
  'BAB',
  'ACA',
  'BAB'
], {
  A: { item: 'minecraft:gold_block' },
  B: { item: 'oreganized:silver_ingot' },
  C: { item: 'sophisticatedbackpacks:iron_backpack' }
})
event.shaped('sophisticatedbackpacks:diamond_backpack', [
  'BAB',
  'ACA',
  'BAB'
], {
  A: { item: 'minecraft:diamond_block' },
  B: { item: 'minecraft:emerald' },
  C: { item: 'sophisticatedbackpacks:gold_backpack' }
})
event.shaped('immersive_aircraft:rotary_cannon', [
  ' A ',
  ' B ',
  'DCD'
], {
  A: { item: 'minecraft:dispenser' },
  B: { item: 'immersive_aircraft:industrial_gears' },
  C: { item: 'create:precision_mechanism' },
  D: { item: 'minecraft:copper_ingot' }
})
event.shaped('immersive_aircraft:bomb_bay', [
  'FAF',
  'BCB',
  'DED'
], {
  A: { item: 'minecraft:netherite_ingot' },
  B: { item: 'minecraft:iron_ingot' },
  C: { item: 'minecraft:tnt' },
  D: { item: 'create:iron_sheet' },
  E: { item: 'minecraft:iron_trapdoor' },
  F: { item: 'minecraft:iron_block' }
})
event.shaped('immersive_aircraft:heavy_crossbow', [
  ' AB',
  ' C ',
  'CDC'
], {
  C: { tag: 'minecraft:logs' },
  B: { item: 'minecraft:tripwire_hook' },
  A: { item: 'minecraft:crossbow' },
  D: { item: 'minecraft:iron_block' }
})
event.shaped('immersive_aircraft:improved_landing_gear', [
  ' BB',
  'AAB',
  'AA '
], {
  A: { item: 'create:sturdy_sheet' },
  B: { item: 'create:iron_sheet' }
})
event.shaped('minecraft:saddle', [
  'BBB',
  'ABA',
  'C C'
], {
  A: { item: 'minecraft:string' },
  B: { item: 'minecraft:leather' },
  C: { item: 'minecraft:iron_ingot' }
})
event.shaped('immersive_aircraft:propeller', [
  'BB ',
  ' B ',
  ' BB'
], {
  B: { item: 'create:iron_sheet' }
})
event.shaped('immersive_aircraft:boiler', [
  ' C ',
  'ABA',
  'ABA'
], {
  A: { item: 'create:steam_engine' },
  B: { item: 'create:fluid_tank' },
  C: { item: 'create:mechanical_pump' }
})
event.shaped('immersive_aircraft:steel_boiler', [
  ' A ',
  'ABA',
  'ACA'
], {
  A: { item: 'create:sturdy_sheet' },
  B: { item: 'immersive_aircraft:boiler' },
  C: { item: 'create:blaze_burner' }
})
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      ' AAA ',
      'AABAA',
      ' ACA ',
      ' ABA ',
      ' ADA ',
      'AAAAA'
    ],
    key: {
      A: { item: 'minecraft:stone_bricks' },
      B: { item: 'waystones:warp_dust' },
      C: { item: 'waystones:warp_stone' },
      D: { item: 'minecraft:obsidian' }
    },
    result: {
      item: 'waystones:waystone'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      '  D  ',
      ' DBD ',
      'DCCCD',
      'AAAAA'
    ],
    key: {
      A: { item: 'minecraft:polished_andesite' },
      B: { item: 'waystones:warp_stone' },
      C: { item: 'minecraft:obsidian' },
	  D: { item: 'minecraft:stone_bricks' }
    },
    result: {
      item: 'waystones:portstone'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      ' AAA ',
      'AABAA',
      ' ACA ',
      ' ABA ',
      ' ADA ',
      'AAAAA'
    ],
    key: {
      A: { item: 'minecraft:chiseled_sandstone' },
      B: { item: 'waystones:warp_dust' },
      C: { item: 'waystones:warp_stone' },
      D: { item: 'minecraft:obsidian' }
    },
    result: {
      item: 'waystones:sandy_waystone'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      ' AAA ',
      'AABAA',
      ' ACA ',
      ' ABA ',
      ' ADA ',
      'AAAAA'
    ],
    key: {
      A: { item: 'minecraft:chiseled_deepslate' },
      B: { item: 'waystones:warp_dust' },
      C: { item: 'waystones:warp_stone' },
      D: { item: 'minecraft:obsidian' }
    },
    result: {
      item: 'waystones:deepslate_waystone'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      ' AAA ',
      'AABAA',
      ' ACA ',
      ' ABA ',
      ' ADA ',
      'AAAAA'
    ],
    key: {
      A: { item: 'minecraft:polished_blackstone' },
      B: { item: 'waystones:warp_dust' },
      C: { item: 'waystones:warp_stone' },
      D: { item: 'minecraft:obsidian' }
    },
    result: {
      item: 'waystones:blackstone_waystone'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      ' AAA ',
      'AABAA',
      ' ACA ',
      ' ABA ',
      ' ADA ',
      'AAAAA'
    ],
    key: {
      A: { item: 'minecraft:end_stone_bricks' },
      B: { item: 'waystones:warp_dust' },
      C: { item: 'waystones:warp_stone' },
      D: { item: 'minecraft:obsidian' }
    },
    result: {
      item: 'waystones:end_stone_waystone'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      ' AAA ',
      'AABAA',
      ' ECE ',
      ' EBE ',
      ' EDE ',
      'AAAAA'
    ],
    key: {
      A: { item: 'minecraft:stone_bricks' },
      B: { item: 'waystones:warp_dust' },
      C: { item: 'waystones:warp_stone' },
      D: { item: 'minecraft:obsidian' },
	  E: { item: 'minecraft:stone_brick_wall' }
    },
    result: {
      item: 'waystones:sharestone'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      '  A  ',
      ' ABA ',
      'ABCBA',
      ' ABA ',
      '  A  '
    ],
    key: {
      A: { item: 'minecraft:stone_bricks' },
      B: { item: 'waystones:warp_dust' },
      C: { item: 'waystones:warp_stone' }
    },
    result: {
      item: 'waystones:warp_plate'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      '  D  ',
      '  C  ',
      'BACAB',
      ' EAE '
    ],
    key: {
      A: { item: 'immersive_aircraft:hull' },
      B: { item: 'immersive_aircraft:sail' },
      C: { tag: 'forge:fences' },
      D: { item: 'immersive_aircraft:propeller' },
      E: { item: 'create:iron_sheet' }
    },
    result: {
      item: 'immersive_aircraft:gyrodyne'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      'EFFFE',
      'CADAC',
      'ABABA'
    ],
    key: {
      A: { item: 'minecraft:iron_block' },
      B: { item: 'immersive_aircraft:boiler' },
      C: { item: 'minecraft:piston' },
      D: { item: 'minecraft:blast_furnace' },
      E: { item: 'minecraft:lightning_rod' },
      F: { item: 'minecraft:iron_trapdoor' }
    },
    result: {
      item: 'immersive_aircraft:engine'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      'BAAAB',
      'ADCCA',
      'BAAAB'
    ],
    key: {
      A: { item: 'immersive_aircraft:hull' },
      B: { item: 'immersive_aircraft:propeller' },
      C: { item: 'minecraft:bamboo_block' },
      D: { item: 'immersive_aircraft:engine' }
    },
    result: {
      item: 'immersive_aircraft:quadrocopter'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      'EEEEE',
      'EEEEE',
      'EEEEE',
      'C   C',
      'AD  A',
      'BAAAB'
    ],
    key: {
      A: { item: 'immersive_aircraft:hull' },
      B: { item: 'create:iron_sheet' },
      C: { item: 'minecraft:lead' },
      D: { item: 'immersive_aircraft:engine' },
      E: { item: 'immersive_aircraft:sail' }
    },
    result: {
      item: 'immersive_aircraft:airship'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      'EFFFE',
      'CADAC',
      'ABABA'
    ],
    key: {
      A: { item: 'minecraft:netherite_ingot' },
      B: { item: 'immersive_aircraft:steel_boiler' },
      C: { item: 'create:mechanical_piston' },
      D: { item: 'immersive_aircraft:engine' },
      E: { item: 'create:shaft' },
      F: { item: 'minecraft:iron_trapdoor' }
    },
    result: {
      item: 'immersive_aircraft:nether_engine'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      '     CCC ',
      'C    G G ',
      'ECCCCCADB',
      '   ECCCE ',
      '      F  '
    ],
    key: {
      A: { tag: 'create:seats' },
      B: { item: 'immersive_aircraft:enhanced_propeller' },
      C: { item: 'immersive_aircraft:hull_reinforcement' },
      D: { item: 'immersive_aircraft:nether_engine' },
      E: { item: 'create:sturdy_sheet' },
      F: { item: 'immersive_aircraft:improved_landing_gear' },
      G: { item: 'create:shaft' }
    },
    result: {
      item: 'immersive_aircraft:biplane'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      'BAB  ',
      'A A  ',
      '  C  ',
      '  A A',
      '  BAB'
    ],
    key: {
      B: { item: 'create:brass_sheet' },
      A: { item: 'create:copper_sheet' },
      C: { item: 'immersive_aircraft:propeller' }
    },
    result: {
      item: 'immersive_aircraft:enhanced_propeller'
    }
  })
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      ' DBD ',
      'DCECD',
      'BEAEB',
      'DCECD',
      ' DBD '
    ],
    key: {
      B: { item: 'minecraft:diamond' },
      A: { item: 'minecraft:compass' },
      E: { item: 'minecraft:ender_eye' },
	  D: { item: 'minecraft:iron_ingot' },
	  C: { item: 'minecraft:amethyst_shard' }
    },
    result: {
      item: 'explorerscompass:explorerscompass'
    }
  })
  event.recipes.createMechanicalExtruderExtruding(Item.of('create:asurine'),[Fluid.of('spelunkery:spring_water'),Fluid.of('minecraft:lava')]).withCatalyst('create:raw_zinc_block')
  event.recipes.createMechanicalExtruderExtruding(Item.of('create:veridium'),[Fluid.of('spelunkery:spring_water'),Fluid.of('minecraft:lava')]).withCatalyst('minecraft:raw_copper_block')
  event.recipes.createMechanicalExtruderExtruding(Item.of('create:crimsite'),[Fluid.of('minecraft:lava'),Fluid.of('minecraft:lava')]).withCatalyst('minecraft:raw_iron_block')
  event.recipes.createMechanicalExtruderExtruding(Item.of('create:ochrum'),[Fluid.of('spelunkery:spring_water'),Fluid.of('create:honey')]).withCatalyst('minecraft:raw_gold_block')
  event.custom({
    type: 'create:mechanical_crafting',
    pattern: [
      'EEEEE',
      'FEFEF',
      'EEEEE',
      'C D C',
      'AHGHA',
      'BAAAB'
    ],
    key: {
      A: { item: 'immersive_aircraft:hull_reinforcement' },
      B: { item: 'create:sturdy_sheet' },
      C: { item: 'minecraft:lead' },
      D: { item: 'immersive_aircraft:cargo_airship' },
      E: { item: 'immersive_aircraft:sail' },
      G: { item: 'immersive_aircraft:nether_engine' },
      F: { item: 'immersive_aircraft:enhanced_propeller' },
      H: { item: 'immersive_aircraft:industrial_gears' }
    },
    result: {
      item: 'immersive_aircraft:warship'
    }
  })
})