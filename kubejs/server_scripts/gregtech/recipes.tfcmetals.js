// priority: 0

function registerGTCEuTFCMetalsRecipes(event)
{
		//#region LV hull

	event.replaceInput('gtceu:shaped/lv_machine_hull', '#forge:plates/wrought_iron', '#forge:plates/red_steel')

	//#endregion

	//#region make colored steel a bit easier to compensate

	event.recipes.gtceu.arc_furnace('tfg:black_steel_dust_to_ingot')
		.itemInputs('gtceu:black_steel_dust')
		.itemOutputs('tfc:metal/ingot/black_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(500)
		.EUt(24)

	event.recipes.gtceu.arc_furnace('tfg:red_steel_dust_to_ingot')
		.itemInputs('gtceu:red_steel_dust')
		.itemOutputs('tfc:metal/ingot/red_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(700)
		.EUt(32)

	event.recipes.gtceu.arc_furnace('tfg:blue_steel_dust_to_ingot')
		.itemInputs('gtceu:blue_steel_dust')
		.itemOutputs('tfc:metal/ingot/blue_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(700)
		.EUt(32)

	//#endregion

	//#region add regular furnace recipes for other tfc alloys

	event.remove({ id: 'gtceu:electric_blast_furnace/blast_bismuth_bronze' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_bismuth_bronze_gas' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_black_bronze' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_black_bronze_gas' })
	event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_black_bronze_ingot' })
	event.remove({ id: 'gtceu:vacuum_freezer/black_bronze' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_sterling_silver' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_sterling_silver_gas' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_rose_gold' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_rose_gold_gas' })

	event.smelting('gtceu:bismuth_bronze_ingot', 'gtceu:bismuth_bronze_dust')
	event.smelting('gtceu:black_bronze_ingot', 'gtceu:black_bronze_dust')
	event.smelting('gtceu:sterling_silver_ingot', 'gtceu:sterling_silver_dust')
	event.smelting('gtceu:rose_gold_ingot', 'gtceu:rose_gold_dust')

	//#endregion

	// Add circuit to assembler recipe for redstone lamp.
	// Avoids conflict with AE2 smart cables.
	event.remove({ id: 'gtceu:assembler/redstone_lamp' })
	event.recipes.gtceu.assembler('redstone_lamp')
		.itemInputs('4x #forge:dusts/redstone', '4x #forge:dusts/glowstone')
		.itemOutputs('1x minecraft:redstone_lamp')
		.circuit(1)
		.duration(100)
		.EUt(1)

	// Clear NBT on tanks with shapeless crafts.
	const TANK_NAMES = [
		"lv_super",
		"mv_super",
		"hv_super",
		"ev_super",
		"iv_quantum",
		"luv_quantum",
		"zpm_quantum",
		"uv_quantum",
		"uhv_quantum",
	]

	TANK_NAMES.forEach(prefix => {
		// Craft super tanks to remove their NBT data.
		event.shapeless(`gtceu:${prefix}_tank`, [`gtceu:${prefix}_tank`])
		// Craft super chests to remove their NBT data.
		event.shapeless(`gtceu:${prefix}_chest`, [`gtceu:${prefix}_chest`])
	})

	// red alloy, because crucible always makes 4+1=5

	event.remove({ id: 'gtceu:mixer/red_alloy' })
	event.recipes.gtceu.mixer('tfg:red_alloy_mixer')
		.itemInputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_dust')
		.circuit(2)
		.duration(100)
		.EUt(7)

	event.remove({ id: 'gtceu:centrifuge/red_alloy_separation' })
	event.recipes.gtceu.centrifuge('tfg:red_alloy_separation')
		.itemInputs('5x gtceu:red_alloy_dust')
		.itemOutputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.duration(900)
		.EUt(30)

	event.remove({ id: 'gtceu:alloy_smelter/copper_dust_and_redstone_dust_into_red_alloy' })
	event.recipes.gtceu.alloy_smelter('tfg:copper_dust_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.remove({ id: 'gtceu:alloy_smelter/annealed_copper_dust_and_redstone_dust_into_red_alloy' })
	event.recipes.gtceu.alloy_smelter('tfg:annealed_copper_dust_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:annealed_copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.remove({ id: 'gtceu:alloy_smelter/copper_ingot_and_redstone_dust_into_red_alloy' })
	event.recipes.gtceu.alloy_smelter('tfg:copper_ingot_and_redstone_dust_into_red_alloy')
		.itemInputs('1x minecraft:copper_ingot', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.remove({ id: 'gtceu:alloy_smelter/annealed_copper_ingot_and_redstone_dust_into_red_alloy' })
	event.recipes.gtceu.alloy_smelter('tfg:annealed_copper_ingot_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:annealed_copper_ingot', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	// steam machines

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_forge_hammer' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_forge_hammer')
		.itemInputs('1x gtceu:hp_steam_forge_hammer')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '2x gtceu:steel_ingot', '2x gtceu:tin_alloy_ingot', '1x #forge:ingots/black_steel')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_forge_hammer' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_forge_hammer')
		.itemInputs('1x gtceu:hp_steam_forge_hammer')
		.itemOutputs('7x gtceu:wrought_iron_dust', '2x gtceu:steel_dust', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust', '1x #forge:dusts/black_steel')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_extractor' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_extractor')
		.itemInputs('1x gtceu:hp_steam_extractor')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '2x gtceu:steel_ingot', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_extractor' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_extractor')
		.itemInputs('1x gtceu:hp_steam_extractor')
		.itemOutputs('7x gtceu:wrought_iron_dust', '2x gtceu:steel_dust', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_macerator' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_macerator')
		.itemInputs('1x gtceu:hp_steam_macerator')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '2x gtceu:steel_ingot', '1x #forge:ingots/black_steel', '1x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_macerator' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_macerator')
		.itemInputs('1x gtceu:hp_steam_macerator')
		.itemOutputs('7x gtceu:wrought_iron_dust', '2x gtceu:steel_dust', '1x #forge:dusts/black_steel', '1x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_compressor' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_compressor')
		.itemInputs('1x gtceu:hp_steam_compressor')
		.itemOutputs('8x gtceu:wrought_iron_ingot', '1x gtceu:steel_ingot', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_compressor' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_compressor')
		.itemInputs('1x gtceu:hp_steam_compressor')
		.itemOutputs('8x gtceu:wrought_iron_dust', '1x gtceu:steel_dust', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_furnace' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_furnace')
		.itemInputs('1x gtceu:hp_steam_furnace')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '2x gtceu:tin_alloy_ingot', '1x gtceu:steel_ingot', '1x #forge:ingots/black_steel')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_furnace' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_furnace')
		.itemInputs('1x gtceu:hp_steam_furnace')
		.itemOutputs('7x gtceu:wrought_iron_dust', '2x gtceu:tin_alloy_dust', '1x gtceu:steel_dust', '1x #forge:dusts/black_steel', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_alloy_smelter' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_alloy_smelter')
		.itemInputs('1x gtceu:hp_steam_alloy_smelter')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '3x gtceu:steel_ingot', '1x gtceu:tin_alloy_ingot', '1x #forge:ingots/black_steel')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_alloy_smelter' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_alloy_smelter')
		.itemInputs('1x gtceu:hp_steam_alloy_smelter')
		.itemOutputs('7x gtceu:wrought_iron_dust', '3x gtceu:steel_dust', '1x gtceu:tin_alloy_dust', '1x #forge:dusts/black_steel', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_rock_crusher' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_rock_crusher')
		.itemInputs('1x gtceu:hp_steam_rock_crusher')
		.itemOutputs('6x gtceu:wrought_iron_ingot', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_rock_crusher' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_rock_crusher')
		.itemInputs('1x gtceu:hp_steam_rock_crusher')
		.itemOutputs('6x gtceu:wrought_iron_dust', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_miner' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_miner')
		.itemInputs('1x gtceu:hp_steam_miner')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '2x gtceu:tin_alloy_ingot', '1x #forge:ingots/steel')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_miner' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_miner')
		.itemInputs('1x gtceu:hp_steam_miner')
		.itemOutputs('7x gtceu:wrought_iron_dust', '2x gtceu:tin_alloy_dust', '1x #forge:dusts/steel', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_solid_boiler' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_solid_boiler')
		.itemInputs('1x gtceu:hp_steam_solid_boiler')
		.itemOutputs('5x gtceu:wrought_iron_ingot', '4x #forge:ingots/steel', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_solid_boiler' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_solid_boiler')
		.itemInputs('1x gtceu:hp_steam_solid_boiler')
		.itemOutputs('5x gtceu:wrought_iron_dust', '4x #forge:dusts/steel', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_liquid_boiler' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_liquid_boiler')
		.itemInputs('1x gtceu:hp_steam_liquid_boiler')
		.itemOutputs('5x gtceu:wrought_iron_ingot', '4x #forge:ingots/steel', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_liquid_boiler' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_liquid_boiler')
		.itemInputs('1x gtceu:hp_steam_liquid_boiler')
		.itemOutputs('5x gtceu:wrought_iron_dust', '4x #forge:dusts/steel', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_solar_boiler' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_solar_boiler')
		.itemInputs('1x gtceu:hp_steam_solar_boiler')
		.itemOutputs('5x gtceu:wrought_iron_ingot', '4x #forge:ingots/silver', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_solar_boiler' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_solar_boiler')
		.itemInputs('1x gtceu:hp_steam_solar_boiler')
		.itemOutputs('5x gtceu:wrought_iron_dust', '4x #forge:dusts/silver', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	//#endregion
}