﻿// priority: 0

function registerGTCEuMachineRecipes(event) {
	//#region Выход: Filter Casing

	event.shaped('gtceu:filter_casing', [
		'AAA',
		'BBB',
		'CDE'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:item_filter',
		C: 'gtceu:mv_electric_motor',
		D: 'gtceu:steel_frame',
		E: '#forge:rotors/steel'
	}).id('gtceu:shaped/filter_casing')

	//#endregion

	//#region Выход: Assembly Line Grating

	event.shaped('2x gtceu:assembly_line_grating', [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: '#forge:rotors/steel',
		C: 'gtceu:steel_frame',
		D: 'gtceu:mv_electric_motor'
	}).id('gtceu:shaped/casing_grate_casing')

	//#endregion

	//#region Gas Collectors

	event.shaped('gtceu:lv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:lv_electric_pump',
		D: '#gtceu:circuits/lv',
		E: 'gtceu:lv_machine_hull'
	}).id('gtceu:shaped/lv_gas_collector')

	event.shaped('gtceu:mv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:mv_electric_pump',
		D: '#gtceu:circuits/mv',
		E: 'gtceu:mv_machine_hull'
	}).id('gtceu:shaped/mv_gas_collector')

	event.shaped('gtceu:hv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:hv_electric_pump',
		D: '#gtceu:circuits/hv',
		E: 'gtceu:hv_machine_hull'
	}).id('gtceu:shaped/hv_gas_collector')

	event.shaped('gtceu:ev_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:ev_electric_pump',
		D: '#gtceu:circuits/ev',
		E: 'gtceu:ev_machine_hull'
	}).id('gtceu:shaped/ev_gas_collector')

	event.shaped('gtceu:iv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:iv_electric_pump',
		D: '#gtceu:circuits/iv',
		E: 'gtceu:iv_machine_hull'
	}).id('gtceu:shaped/iv_gas_collector')

	event.shaped('gtceu:luv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:luv_electric_pump',
		D: '#gtceu:circuits/luv',
		E: 'gtceu:luv_machine_hull'
	}).id('gtceu:shaped/luv_gas_collector')

	event.shaped('gtceu:zpm_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:zpm_electric_pump',
		D: '#gtceu:circuits/zpm',
		E: 'gtceu:zpm_machine_hull'
	}).id('gtceu:shaped/zpm_gas_collector')

	event.shaped('gtceu:uv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:uv_electric_pump',
		D: '#gtceu:circuits/uv',
		E: 'gtceu:uv_machine_hull'
	}).id('gtceu:shaped/uv_gas_collector')

	//#endregion

	//#region Forge Hammers

	event.shaped('gtceu:lv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:tin_single_cable',
		B: 'gtceu:lv_electric_piston',
		C: '#gtceu:circuits/lv',
		D: 'gtceu:lv_machine_hull',
		E: 'tfc:metal/anvil/steel',
	}).id('gtceu:shaped/lv_forge_hammer')

	event.shaped('gtceu:mv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:copper_single_cable',
		B: 'gtceu:mv_electric_piston',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:mv_machine_hull',
		E: 'tfc:metal/anvil/steel',
	}).id('gtceu:shaped/mv_forge_hammer')

	event.shaped('gtceu:hv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:gold_single_cable',
		B: 'gtceu:hv_electric_piston',
		C: '#gtceu:circuits/hv',
		D: 'gtceu:hv_machine_hull',
		E: 'tfc:metal/anvil/steel',
	}).id('gtceu:shaped/hv_forge_hammer')

	event.shaped('gtceu:ev_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:aluminium_single_cable',
		B: 'gtceu:ev_electric_piston',
		C: '#gtceu:circuits/ev',
		D: 'gtceu:ev_machine_hull',
		E: 'tfc:metal/anvil/black_steel',
	}).id('gtceu:shaped/ev_forge_hammer')

	event.shaped('gtceu:iv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:platinum_single_cable',
		B: 'gtceu:iv_electric_piston',
		C: '#gtceu:circuits/iv',
		D: 'gtceu:iv_machine_hull',
		E: 'tfc:metal/anvil/black_steel',
	}).id('gtceu:shaped/iv_forge_hammer')

	event.shaped('gtceu:luv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:niobium_titanium_single_cable',
		B: 'gtceu:luv_electric_piston',
		C: '#gtceu:circuits/luv',
		D: 'gtceu:luv_machine_hull',
		E: 'tfc:metal/anvil/black_steel',
	}).id('gtceu:shaped/luv_forge_hammer')

	event.shaped('gtceu:zpm_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:vanadium_gallium_single_cable',
		B: 'gtceu:zpm_electric_piston',
		C: '#gtceu:circuits/zpm',
		D: 'gtceu:zpm_machine_hull',
		E: '#tfc:red_or_blue_anvil',
	}).id('gtceu:shaped/zpm_forge_hammer')

	event.shaped('gtceu:uv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:yttrium_barium_cuprate_single_cable',
		B: 'gtceu:uv_electric_piston',
		C: '#gtceu:circuits/uv',
		D: 'gtceu:uv_machine_hull',
		E: '#tfc:red_or_blue_anvil',
	}).id('gtceu:shaped/uv_forge_hammer')

	//#endregion

	//#region CokeOven

	// Coke Oven
	event.shaped('gtceu:coke_oven', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'gtceu:coke_oven_bricks',
		B: '#forge:plates/wrought_iron',
		C: '#forge:tools/wrenches'
	}).id('gtceu:shaped/coke_oven')

	// Coke Oven Hatch
	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('gtceu:coke_oven_hatch', [
			'AB'
		], {
			A: 'gtceu:coke_oven_bricks',
			B: '#tfc:barrels'
		})
	).id('gtceu:shaped/coke_oven_hatch')

	//#endregion

	// High Pressure Steam Miner
	event.replaceInput({ id: 'gtceu:shaped/steam_miner_steel' },
		'gtceu:lp_steam_miner', 'gtceu:steel_brick_casing')

	//#region Выход: Стальные машины

	// HP Steam Boilers
	event.shaped('gtceu:hp_steam_solid_boiler', [
		'AEA',
		'ADA',
		'BCB'
	], {
		A: '#forge:plates/steel',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: 'gtceu:steel_brick_casing',
		D: 'tfc:crucible',
		E: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_boiler_coal_steel')

	event.shaped('gtceu:hp_steam_liquid_boiler', [
		'AEA',
		'ADA',
		'BCB'
	], {
		A: '#forge:plates/steel',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: 'gtceu:steel_brick_casing',
		D: '#forge:glass',
		E: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_boiler_lava_steel')

	event.shaped('gtceu:hp_steam_solar_boiler', [
		'AAA',
		'BCB',
		'EDE'
	], {
		A: '#forge:glass_panes',
		B: '#forge:double_plates/silver',
		C: '#forge:rods/black_steel',
		D: 'gtceu:steel_brick_casing',
		E: 'gtceu:tin_alloy_small_fluid_pipe',
	}).id('gtceu:shaped/steam_boiler_solar_steel')

	// Экстрактор
	event.shaped('gtceu:hp_steam_extractor', [
		'BEB',
		'CAC',
		'DFD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		E: '#forge:glass_panes',
		F: '#forge:rings/black_steel'
	}).id('gtceu:shaped/steam_extractor_steel')

	// Дробитель
	event.shaped('gtceu:hp_steam_macerator', [
		'BFB',
		'CAC',
		'DED'
	], {
		A: 'gtceu:steel_brick_casing',
		B: '#forge:small_gears/wrought_iron',
		C: '#forge:plates/steel',
		D: '#forge:rods/black_steel',
		E: 'gtceu:tin_alloy_small_fluid_pipe',
		F: '#forge:raw_materials/diamond'
	}).id('gtceu:shaped/steam_macerator_steel')

	// Компрессор
	event.shaped('gtceu:hp_steam_compressor', [
		'BCB',
		'EAE',
		'DFD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		E: 'minecraft:piston',
		F: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_compressor_steel')

	// Молот
	event.shaped('gtceu:hp_steam_forge_hammer', [
		'DFD',
		'BEB',
		'CAC'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		E: '#forge:ingots/black_steel',
		F: 'minecraft:piston'
	}).id('gtceu:shaped/steam_hammer_steel')

	// Печь
	event.shaped('gtceu:hp_steam_furnace', [
		'BCB',
		'DAD',
		'FFF'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		F: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_furnace_steel')

	// Сплавщик
	event.shaped('gtceu:hp_steam_alloy_smelter', [
		'FCF',
		'DAD',
		'CBC'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		F: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_alloy_smelter_steel')

	// Блоко-ломатель
	event.shaped('gtceu:hp_steam_rock_crusher', [
		'ECE',
		'BAB',
		'DDD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:drill_heads',
		D: '#forge:rods/wrought_iron',
		E: '#forge:screws/wrought_iron'
	}).id('gtceu:shaped/steam_rock_breaker_steel')

	// Miner
	event.shaped('gtceu:hp_steam_miner', [
		'EFE',
		'BAB',
		'DCD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:drill_heads',
		D: '#forge:rods/steel',
		E: '#forge:plates/wrought_iron',
		F: '#gtceu:circuits/ulv'
	}).id('gtceu:shaped/steam_miner_steel')

	//#endregion

		//#region passthrough hatches
	event.recipes.shaped('gtceu:lv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:lv_conveyor_module',
		B: 'gtceu:small_wrought_iron_gear',
		C: 'gtceu:lv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_lv')

	event.recipes.shaped('gtceu:mv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:mv_conveyor_module',
		B: 'gtceu:small_bronze_gear',
		C: 'gtceu:mv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_mv')

	event.recipes.shaped('gtceu:ev_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:ev_conveyor_module',
		B: 'gtceu:small_titanium_gear',
		C: 'gtceu:ev_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_ev')

	event.recipes.shaped('gtceu:iv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:iv_conveyor_module',
		B: 'gtceu:small_tungsten_steel_gear',
		C: 'gtceu:iv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_iv')

	event.recipes.shaped('gtceu:luv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:luv_conveyor_module',
		B: 'gtceu:small_hsss_gear',
		C: 'gtceu:luv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_luv')

	event.recipes.shaped('gtceu:zpm_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:zpm_conveyor_module',
		B: 'gtceu:small_osmiridium_gear',
		C: 'gtceu:zpm_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_zpm')

	event.recipes.shaped('gtceu:uv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:uv_conveyor_module',
		B: 'gtceu:small_naquadah_alloy_gear',
		C: 'gtceu:uv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_uv')

	event.recipes.shaped('gtceu:lv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:lv_electric_pump',
		B: 'gtceu:bronze_small_fluid_pipe',
		C: 'gtceu:lv_machine_hull',
		D: '#forge:glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_lv')

	event.recipes.shaped('gtceu:mv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:mv_electric_pump',
		B: 'gtceu:steel_small_fluid_pipe',
		C: 'gtceu:mv_machine_hull',
		D: '#forge:glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_mv')

	event.remove('gtceu:shaped/passthrough_hatch_fluid')

	event.recipes.shaped('gtceu:hv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:hv_electric_pump',
		B: 'gtceu:stainless_steel_small_fluid_pipe',
		C: 'gtceu:hv_machine_hull',
		D: 'gtceu:tempered_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_hv')

	event.recipes.shaped('gtceu:ev_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:ev_electric_pump',
		B: 'gtceu:titanium_small_fluid_pipe',
		C: 'gtceu:ev_machine_hull',
		D: 'gtceu:tempered_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_ev')

	event.recipes.shaped('gtceu:iv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:iv_electric_pump',
		B: 'gtceu:tungsten_steel_small_fluid_pipe',
		C: 'gtceu:iv_machine_hull',
		D: 'gtceu:laminated_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_iv')

	event.recipes.shaped('gtceu:luv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:luv_electric_pump',
		B: 'gtceu:niobium_titanium_small_fluid_pipe',
		C: 'gtceu:luv_machine_hull',
		D: 'gtceu:laminated_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_luv')

	event.recipes.shaped('gtceu:zpm_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:zpm_electric_pump',
		B: 'gtceu:polybenzimidazole_small_fluid_pipe',
		C: 'gtceu:zpm_machine_hull',
		D: 'gtceu:fusion_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_zpm')

	event.recipes.shaped('gtceu:uv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:uv_electric_pump',
		B: 'gtceu:naquadah_small_fluid_pipe',
		C: 'gtceu:uv_machine_hull',
		D: 'gtceu:fusion_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_uv')

	//#endregion

	//#region Long Distance Pipelines

	event.remove({ id: 'gtceu:assembler/long_distance_item_pipe' })
	event.recipes.gtceu.assembler('long_distance_item_pipe')
		.itemInputs(
			'1x gtceu:tin_large_item_pipe',
			'4x #forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144 / 4))
		.itemOutputs('32x gtceu:long_distance_item_pipeline')
		.circuit(2)
		.duration(300)
		.EUt(24)

	event.remove({ id: 'gtceu:assembler/long_distance_fluid_pipe' })
	event.recipes.gtceu.assembler('long_distance_fluid_pipe')
		.itemInputs(
			'1x gtceu:bronze_large_fluid_pipe',
			'4x #forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144 / 4))
		.itemOutputs('32x gtceu:long_distance_fluid_pipeline')
		.circuit(2)
		.duration(300)
		.EUt(24)

	//#endregion

	// Контроллер теплицы
	event.shaped('gtceu:greenhouse', [
		'ABA',
		'CDC',
		'BCB'
	], {
		A: '#gtceu:circuits/mv',
		B: 'gtceu:copper_single_cable',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:solid_machine_casing'
	}).id('tfg:shaped/greenhouse')

	// Drums
	const DRUMS_AND_CRATES = [
		'bismuth_bronze',
		'black_bronze'
	]

	DRUMS_AND_CRATES.forEach(material => {
		event.shapeless(`gtceu:${material}_drum`, [`gtceu:${material}_drum`]).id(`tfg:shapeless/drum_nbt_${material}`)
	
		event.shaped(`gtceu:${material}_drum`, [
			' A ',
			'BCB',
			'BCB'
		], {
			A: '#forge:tools/hammers',
			B: `#forge:plates/${material}`,
			C: `#forge:rods/long/${material}`
		}).id(`tfg:shaped/${material}_drum`)

		event.shaped(`gtceu:${material}_crate`, [
			'CBC',
			'BAB',
			'CBC'
		], {
			A: '#forge:tools/hammers',
			B: `#forge:plates/${material}`,
			C: `#forge:rods/long/${material}`
		}).id(`tfg:shaped/${material}_crate`)

		event.recipes.gtceu.assembler(`gtceu:${material}_drum`)
			.itemInputs(`4x #forge:plates/${material}`, `2x #forge:rods/long/${material}`)
			.itemOutputs(`gtceu:${material}_drum`)
			.duration(200)
			.EUt(16)
			.circuit(2)

		event.recipes.gtceu.assembler(`gtceu:${material}_crate`)
			.itemInputs(`4x #forge:plates/${material}`, `4x #forge:rods/long/${material}`)
			.itemOutputs(`gtceu:${material}_crate`)
			.duration(200)
			.EUt(16)
			.circuit(1)

		event.recipes.gtceu.macerator(`gtceu:${material}_drum`)
			.itemInputs(`gtceu:${material}_drum`)
			.itemOutputs(`6x #forge:dusts/${material}`)
			.duration(456)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		event.recipes.gtceu.macerator(`gtceu:${material}_crate`)
			.itemInputs(`gtceu:${material}_crate`)
			.itemOutputs(`8x #forge:dusts/${material}`)
			.duration(608)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		event.recipes.gtceu.arc_furnace(`gtceu:${material}_drum`)
			.itemInputs(`gtceu:${material}_drum`)
			.itemOutputs(`6x #forge:ingots/${material}`)
			.duration(456)
			.EUt(30)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

		event.recipes.gtceu.arc_furnace(`gtceu:${material}_crate`)
			.itemInputs(`gtceu:${material}_crate`)
			.itemOutputs(`8x #forge:ingots/${material}`)
			.duration(608)
			.EUt(30)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
	})

}