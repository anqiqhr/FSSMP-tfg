// priority: 0

const registerGTCEUItemTags = (event) => {

	// Удаление тегов у отключенных предметов
	global.GTCEU_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	global.GTCEU_HIDED_ITEMS.forEach(item => {
		event.add('c:hidden_from_recipe_viewers', item)
	})

	global.GTCEU_ARMORS.forEach(item => {
		event.add('minecraft:trimmable_armor', item)
	})

	// Добавление тега EMI для скрытия всех руд
	event.add('c:hidden_from_recipe_viewers', '#forge:ores')

	//#region Пыли стоунтайпов в один тэг
	event.add('tfg:stone_dusts', 'tfg:gabbro_dust')
	event.add('tfg:stone_dusts', 'tfg:shale_dust')
	event.add('tfg:stone_dusts', 'tfg:claystone_dust')
	event.add('tfg:stone_dusts', 'tfg:limestone_dust')
	event.add('tfg:stone_dusts', 'tfg:conglomerate_dust')
	event.add('tfg:stone_dusts', 'tfg:dolomite_dust')
	event.add('tfg:stone_dusts', 'tfg:chert_dust')
	event.add('tfg:stone_dusts', 'tfg:chalk_dust')
	event.add('tfg:stone_dusts', 'tfg:rhyolite_dust')
	event.add('tfg:stone_dusts', 'tfg:dacite_dust')
	event.add('tfg:stone_dusts', 'gtceu:quartzite_dust')
	event.add('tfg:stone_dusts', 'tfg:slate_dust')
	event.add('tfg:stone_dusts', 'tfg:phyllite_dust')
	event.add('tfg:stone_dusts', 'tfg:schist_dust')
	event.add('tfg:stone_dusts', 'tfg:gneiss_dust')
	event.add('tfg:stone_dusts', 'gtceu:marble_dust')
	event.add('tfg:stone_dusts', 'gtceu:basalt_dust')
	event.add('tfg:stone_dusts', 'gtceu:diorite_dust')
	event.add('tfg:stone_dusts', 'gtceu:andesite_dust')
	event.add('tfg:stone_dusts', 'gtceu:granite_dust')
	event.add('tfg:stone_dusts', 'gtceu:deepslate_dust')
	event.add('tfg:stone_dusts', 'gtceu:blackstone_dust')
	event.add('tfg:stone_dusts', 'tfg:dripstone_dust')

	event.add('tfg:stone_dusts', 'gtceu:stone_dust')
	//#endregion

	event.remove('minecraft:planks', 'gtceu:treated_wood_planks')

	event.add('tfg:sugars', 'minecraft:sugar')
	event.add('tfg:sugars', 'afc:birch_sugar')
	event.add('tfg:sugars', 'afc:maple_sugar')
    
    global.MINECRAFT_DYE_NAMES.forEach(dyeName =>
    {
        event.remove('ae2:p2p_attunements/fluid_p2p_tunnel', `gtceu:${dyeName}_dye_bucket`)
    })

	// Piglin loved
    event.add('minecraft:piglin_loved', 'gtceu:tiny_pyrite_dust')
    event.add('minecraft:piglin_loved', 'gtceu:poor_raw_pyrite')
    event.add('minecraft:piglin_loved', 'gtceu:raw_pyrite')
    event.add('minecraft:piglin_loved', 'gtceu:rich_raw_pyrite')
}

const registerGTCEUBlockTags = (event) => {

	// Удаление тегов у отключенных предметов
	global.GTCEU_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
	})

	// TODO: Ores all broke for some reason? This is a workaround for now
	event.add('minecraft:mineable/pickaxe', '#forge:ores')
	event.add('minecraft:needs_iron_tool', '#forge:ores')

	// Let GT indicators be covered by snow
	GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
		
		if (material.hasProperty(PropertyKey.ORE)) {
			let indicator = `gtceu:${material.getName()}_indicator`;

			event.add('tfg:dust_ore_indicators', indicator)
			event.add('tfc:can_be_snow_piled', indicator)
			event.add('tfc:can_be_ice_piled', indicator)

			if (material.hasProperty(PropertyKey.GEM)) {

				let bud = `gtceu:${material.getName()}_bud_indicator`;
				
				event.add('tfg:bud_ore_indicators', bud)
				event.add('tfc:can_be_snow_piled', bud)
				event.add('tfc:can_be_ice_piled', bud)

				event.add('minecraft:mineable/pickaxe', bud)
			}

			// I LOVE KUBEJS I LOVE KUBEJS I LOVE KUBEJS
			let str = `:${ChemicalHelper.get(TagPrefix.rawOreBlock, material, 1).getItem()}`;
			if (material == GTMaterials.Copper || material == GTMaterials.Gold || material == GTMaterials.Iron)
				str = "minecraft" + str;
			else
				str = "gtceu" + str;

			event.add('tfc:can_collapse', str);
			event.add('tfc:can_start_collapse', str);
			event.add('tfc:can_trigger_collapse', str);
			// Hide these from JEI
			event.add('c:hidden_from_recipe_viewers', str);
		}
	})
}


const registerGTCEUFluidTags = (event) => {

	event.add('c:hidden_from_recipe_viewers', /gtceu.*potion.*/)

}