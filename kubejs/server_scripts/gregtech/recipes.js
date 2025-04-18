// priority: 0

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerGTCEURecipes = (event) => {

	registerGTCEUMetalRecipes(event)
    registerGTCEURecyclingRecipes(event)
	registerGTCEuTFCMetalsRecipes(event)
	registerGTCEuMachineRecipes(event)

	removeGTCEURecipes(event)

	//#region Выход: Удобрение
	// В обычном миксере
	event.recipes.gtceu.mixer('fertilizer')
		.itemInputs(
			'#tfc:dirt',
			'2x #tfg:wood_dusts',
			'4x #forge:sand'
		)
		.circuit(1)
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('4x gtceu:fertilizer')
		.duration(300)
		.EUt(30)

	//#endregion

	//#region Выход: Кварцевый песок

	event.shaped('gtceu:quartz_sand_dust', [
		'A',
		'B'
	], {
		A: '#forge:sand',
		B: '#forge:tools/mortars'
	}).id('gtceu:shaped/quartz_sand')

	event.recipes.gtceu.macerator('quartz_sand_from_sand')
		.itemInputs('#forge:sand')
		.itemOutputs('gtceu:quartz_sand_dust')
		.duration(30)
		.EUt(2)

	//#endregion

	event.recipes.gtceu.macerator('flux')
		.itemInputs('#tfc:fluxstone')
		.itemOutputs('2x tfc:powder/flux')
		.duration(30)
		.EUt(2)

	event.recipes.gtceu.forge_hammer('flux')
		.itemInputs('#tfc:fluxstone')
		.itemOutputs('2x tfc:powder/flux')
		.duration(30)
		.EUt(2)

	//#region Выход: Диоксид силикона

	event.recipes.gtceu.electrolyzer('sand_electrolysis')
		.itemInputs('8x #forge:sand')
		.itemOutputs('gtceu:silicon_dioxide_dust')
		.duration(500)
		.EUt(25)

	//#endregion

    event.recipes.gtceu.centrifuge('tfg:beets_to_sugar')
        .itemInputs('5x tfc:food/beet')
        .inputFluids(Fluid.of('tfc:salt_water', 1000))
        .itemOutputs('3x minecraft:sugar', '3x gtceu:plant_ball', '1x #forge:dusts/salt')
        .outputFluids(Fluid.of('minecraft:water', 1000))
        .duration(800)
        .EUt(7)
        .circuit(3)
  
	event.smelting('4x tfc:powder/wood_ash', '1x #minecraft:logs_that_burn').id('tfg:wood_ash')

	//#region Выход: Соленая пыль + Вода

	// Декрафт в центрифуге
	event.recipes.gtceu.centrifuge('centrifuging_tfc_salt_water')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('1x gtceu:salt_dust')
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(51)
		.EUt(30)
		.circuit(1)

	// Декрафт в электролайзере
	event.recipes.gtceu.electrolyzer('electrolyze_tfc_salt_water')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('1x gtceu:sodium_hydroxide_dust', '2x gtceu:small_sodium_hydroxide_dust')
		.outputFluids(Fluid.of('gtceu:chlorine', 500), Fluid.of('gtceu:hydrogen', 500))
		.duration(720)
		.EUt(30)
		.circuit(2)

	//#endregion

	//#region Выход: Каменный стержень

	// Из сырого камня
	event.recipes.gtceu.lathe('stone_rod_from_stone')
		.itemInputs('#tfc:rock/raw')
		.itemOutputs('gtceu:stone_rod', 'gtceu:small_stone_dust')
		.duration(15)
		.EUt(2)

	// Из булыжника
	event.recipes.gtceu.lathe('stone_rod_from_cobblestone')
		.itemInputs('#forge:cobblestone')
		.itemOutputs('gtceu:stone_rod', 'gtceu:small_stone_dust')
		.duration(15)
		.EUt(2)

	//#endregion

	//#region Выход: Пропитанные доски

	event.remove({ id: 'gtceu:shaped/treated_wood_planks' })

	event.recipes.tfc.barrel_sealed(4000)
		.outputItem('gtceu:treated_wood_planks')
		.inputs('#minecraft:planks', TFC.fluidStackIngredient('#forge:creosote', 100))
		.id('tfg:barrel/treated_wood_planks')

	//#endregion

	//#region Выход: Капля резины

	// Из латекса
	event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_latex')

	event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('tfg:conifer_pitch', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_conifer_pitch')

	event.recipes.gtceu.fluid_solidifier('tfg:fluid_solidifier/latex_heating')
		.duration(24*20)
		.EUt(30)
		.itemInputs('tfc:powder/sulfur')
		.itemOutputs('gtceu:sticky_resin')
		.inputFluids(Fluid.of('tfg:latex', 1000))

	//#region Выход: Растительный шарик

	// 8x Ванильная растительность -> Plant Ball (Compressor)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_seeds')
		.itemInputs('8x #tfc:seeds')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_food')
		.itemInputs('8x #tfc:foods')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_plants')
		.itemInputs('8x #tfc:plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_corals')
		.itemInputs('8x #tfc:corals')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	//#endregion

	//#region Выход: Биомасса

	// Ванильная растительность -> Биомасса (Brewery)

	event.recipes.gtceu.brewery('biomass_from_tfc_seeds')
		.itemInputs('#tfc:seeds')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_food')
		.itemInputs('#tfc:foods')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_plants')
		.itemInputs('#tfc:plants')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_corals')
		.itemInputs('#tfc:corals')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_spider_eyes')
		.itemInputs('minecraft:spider_eye')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	//#endregion

	//#region Выход: Рыбье масло

	event.recipes.gtceu.extractor(`tfg/fish_oil`)
		.itemInputs('#minecraft:fishes')
		.outputFluids(Fluid.of('gtceu:fish_oil', 40))
		.duration(16)
		.EUt(4)

	//#endregion

	//#region Выход: Семянное масло

	event.recipes.gtceu.extractor(`tfg/seed_oil`)
		.itemInputs('#tfc:seeds')
		.outputFluids(Fluid.of('gtceu:seed_oil', 16))
		.duration(32)
		.EUt(2)

	//#endregion

	//#region Выход: Цемент

	generateMixerRecipe(
		event,
		['2x #tfg:stone_dusts', 'gtceu:marble_dust', 'gtceu:gypsum_dust'],
		Fluid.of('minecraft:water', 1000),
		[],
		null,
		Fluid.of('gtceu:concrete', 1152),
		40,
		16,
		64,
		'concrete_from_marble'
	)

	generateMixerRecipe(
		event,
		['3x #tfg:stone_dusts', 'gtceu:clay_dust'],
		Fluid.of('minecraft:water', 500),
		[],
		null,
		Fluid.of('gtceu:concrete', 576),
		20,
		16,
		64,
		'concrete_from_clay'
	)

	generateMixerRecipe(
		event,
		['3x #tfg:stone_dusts', 'gtceu:calcite_dust', 'gtceu:gypsum_dust'],
		Fluid.of('minecraft:water', 1000),
		[],
		null,
		Fluid.of('gtceu:concrete', 1152),
		40,
		16,
		64,
		'concrete_from_calcite'
	)

	//GT light/dark concrete recipe fix

	event.remove({ id: 'gtceu:fluid_solidifier/solidify_concrete_block' })
	event.remove({ id: 'gtceu:chemical_bath/light_to_dark_concrete' })

	event.recipes.gtceu.fluid_solidifier('gtceu:fluid_solidifier/solidify_light_concrete')
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.notConsumable('1x gtceu:block_casting_mold')
		.itemOutputs('1x gtceu:light_concrete')
		.duration(98)
		.EUt(7)

	event.recipes.gtceu.chemical_bath('gtceu:chemical_bath/dark_concrete')
		.inputFluids(Fluid.of('tfc:black_dye', 18))
		.itemInputs('1x gtceu:light_concrete')
		.itemOutputs('1x gtceu:dark_concrete')
		.duration(20)
		.EUt(7)

	event.recipes.gtceu.extractor('gtceu:extractor/extract_light_concrete')
		.itemInputs('1x gtceu:light_concrete')
		.outputFluids(Fluid.of('gtceu:concrete', 144))
		.duration(98)
		.EUt(30)

	event.stonecutting('gtceu:light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_bricks')
	event.stonecutting('gtceu:chiseled_light_concrete', 'gtceu:light_concrete').id('tfg:stonecutting/chiseled_light_concrete')
	event.stonecutting('gtceu:light_concrete_tile', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_tile')
	event.stonecutting('gtceu:light_concrete_small_tile', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_small_tile')
	event.stonecutting('gtceu:light_concrete_windmill_a', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_windmill_a')
	event.stonecutting('gtceu:light_concrete_windmill_b', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_windmill_b')
	event.stonecutting('gtceu:small_light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/small_light_concrete_bricks')
	event.stonecutting('gtceu:square_light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/square_light_concrete_bricks')

	event.stonecutting('gtceu:dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_bricks')
	event.stonecutting('gtceu:chiseled_dark_concrete', 'gtceu:dark_concrete').id('tfg:stonecutting/chiseled_dark_concrete')
	event.stonecutting('gtceu:dark_concrete_tile', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_tile')
	event.stonecutting('gtceu:dark_concrete_small_tile', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_small_tile')
	event.stonecutting('gtceu:dark_concrete_windmill_a', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_windmill_a')
	event.stonecutting('gtceu:dark_concrete_windmill_b', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_windmill_b')
	event.stonecutting('gtceu:small_dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/small_dark_concrete_bricks')
	event.stonecutting('gtceu:square_dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/square_dark_concrete_bricks')

	//#endregion

	//#region Выход: Бурильная жидкость

	generateMixerRecipe(
		event,
		['2x #tfg:stone_dusts'],
		[Fluid.of('gtceu:lubricant', 20), Fluid.of('minecraft:water', 4000)],
		[],
		null,
		Fluid.of('gtceu:drilling_fluid', 5000),
		40,
		16,
		64,
		'drilling_fluid'
	)

	//#endregion

	//#region Выход: Пыль мяса

	event.recipes.gtceu.macerator('macerate_meat_to_dust')
		.itemInputs('#tfc:foods/meats')
		.itemOutputs('gtceu:meat_dust', 'gtceu:tiny_bone_dust')
		.duration(100)
		.EUt(2)

	//#endregion

	//#region Выход: Пыль какао-бобов

	event.recipes.gtceu.macerator('macerate_cocoa')
		.itemInputs('firmalife:food/roasted_cocoa_beans')
		.itemOutputs('gtceu:cocoa_dust')
		.duration(100)
		.EUt(2)

	//#endregion

	//#region Стеклодувка

	// Glass Tube
	event.recipes.tfc.glassworking('gtceu:glass_tube', '#tfc:glass_batches_tier_3', ['blow', 'stretch', 'stretch'])
		.id('tfg:gtceu/glassworking/glass_tube')

	//#endregion

	// Пыль звезды незера 
	event.recipes.gtceu.chemical_reactor('tfg:gtceu/nether_star_dust')
		.itemInputs('2x #forge:dusts/iridium', '#forge:dusts/diamond')
		.circuit(10)
		.itemOutputs('gtceu:nether_star_dust')
		.inputFluids(Fluid.of('gtceu:nether_air', 1000))
		.duration(700)
		.EUt(2720)

	// Creosote-Treated Wood Planks -> Treated Wood Pulp
	event.recipes.gtceu.macerator('tfg:gtceu/macerate_treated_wood_planks')
		.itemInputs('gtceu:treated_wood_planks')
		.itemOutputs('gtceu:treated_wood_dust')
		.duration(120)
		.EUt(4)

	// Empty Wooden Form
	event.shaped('gtceu:empty_wooden_form', [
		' AA',
		'BAA'
	], {
		A: '#minecraft:planks',
		B: '#forge:tools/saws'
	}).id('gtceu:shaped/plank_to_wooden_shape')

	// Деревянная шестерня
	event.shaped('gtceu:small_wood_gear', [
		'AB ',
		'BCB',
		' B '
	], {
		A: '#forge:tools/saws',
		B: '#forge:rods/wooden',
		C: 'tfc:glue'
	}).id('gtceu:shaped/small_gear_wood')

	event.shaped('gtceu:wood_gear', [
		'AB ',
		'BCB',
		' B '
	], {
		A: '#forge:tools/saws',
		B: '#minecraft:planks',
		C: 'tfc:glue'
	}).id('gtceu:shaped/gear_wood')

	// Compressed Coke Clay
	event.shaped('gtceu:compressed_coke_clay', [
		'AAA',
		'BCB',
		'BBB'
	], {
		A: 'minecraft:clay_ball',
		B: '#minecraft:sand',
		C: 'gtceu:brick_wooden_form'
	}).replaceIngredient('gtceu:brick_wooden_form', 'gtceu:brick_wooden_form').id('gtceu:shaped/compressed_coke_clay')

	// Compressed Coke Clay -> Coke Oven Brick
	event.recipes.tfc.heating('gtceu:compressed_coke_clay', 1399)
		.resultItem('gtceu:coke_oven_brick')
		.id('tfg:heating/coke_oven_bricks')

	// TFC FireBrick -> FireBrick dust
	event.recipes.gtceu.macerator('macerate_firebrick')
		.itemInputs('tfc:ceramic/fire_brick')
		.itemOutputs('gtceu:fireclay_dust')
		.duration(15)
		.EUt(2)

	// Multi-Smelter
	event.shaped('gtceu:multi_smelter', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:hp_steam_furnace',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:copper_single_cable'
	}).id('gtceu:shaped/multi_furnace')

	// Electric Blast Furnace
	event.shaped('gtceu:electric_blast_furnace', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:hp_steam_furnace',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:tin_single_cable'
	}).id('gtceu:shaped/electric_blast_furnace')

	// Клей из ТФК клея
	event.recipes.gtceu.centrifuge('glue_from_tfc_glue')
		.itemInputs('tfc:glue')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(400)
		.EUt(5)

	// Исправление рецепта пыли серебра стерлинга
	generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/silver'], [], '5x gtceu:sterling_silver_dust', 1, [], 500, 7, 64, 'sterling_silver')

	// Исправление рецепта пыли розовой бронзы
	generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/gold'], [], '5x gtceu:rose_gold_dust', 3, [], 500, 7, 64, 'rose_gold')

	//#region Рецепт ULV микросхемы

	event.remove({ id: 'gtceu:shaped/vacuum_tube' })
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_plain' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_red_alloy' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_red_alloy_annealed' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')

	event.recipes.createSequencedAssembly([
		'gtceu:vacuum_tube',
	], 'gtceu:resin_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', '#forge:bolts/steel']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:copper_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:copper_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:glass_tube']),
		event.custom({ type: 'vintageimprovements:vacuumizing', ingredients: [{ item: 'tfg:unfinished_vacuum_tube' }], results: [{ item: 'tfg:unfinished_vacuum_tube' }], processingTime: 80 })
	]).transitionalItem('tfg:unfinished_vacuum_tube').loops(1).id('tfg:gtceu/sequenced_assembly/vacuum_tube')

	//#endregion

	//#region Рецепт LV микросхемы

	event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' })

	event.recipes.createSequencedAssembly([
		'gtceu:basic_electronic_circuit',
	], 'gtceu:resin_printed_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:resistor']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:resistor']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:vacuum_tube']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:vacuum_tube']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'create:electron_tube']),
		event.recipes.createFilling('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', Fluid.of('gtceu:glue', 50)]),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', '#forge:plates/steel']),
	]).transitionalItem('tfg:unfinished_basic_electronic_circuit').loops(1).id('tfg:gtceu/sequenced_assembly/basic_electronic_circuit')

	//#endregion

	//#region Quantum mainframe stack fix.
	//
	// Quantum Mainframes need 48x annealed copper wire but
	// the stacking limit is 32 so instead allow 24x 2x.
	//
	// Frustratingly event.replaceInput doesn't allow for
	// changing item counts, only types.
	event.remove(/gtceu:circuit_assembler\/quantum_mainframe_zpm.*/)
	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'48x gtceu:smd_capacitor',
			'24x gtceu:smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_soldering_alloy')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'48x gtceu:smd_capacitor',
			'24x gtceu:smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_asmd')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'12x gtceu:advanced_smd_capacitor',
			'6x gtceu:advanced_smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_asmd_soldering_alloy')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'12x gtceu:advanced_smd_capacitor',
			'6x gtceu:advanced_smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)
	//#endregion


	// #region Move MV superconductor to early HV instead of post-vac freezer

	event.remove({ id: 'gtceu:shaped/hv_chemical_bath' })
	event.shaped('gtceu:hv_chemical_bath', [
		'ABC',
		'DEA',
		'FGF'
	], {
		A: 'gtceu:hv_conveyor_module',
		B: 'gtceu:tempered_glass',
		C: 'gtceu:gold_single_cable',
		D: 'gtceu:hv_electric_pump',
		// swap one of the tempered glass for a PE pipe to ensure they've finished the plastic part of MV
		E: 'gtceu:polyethylene_normal_fluid_pipe',
		F: '#gtceu:circuits/hv',
		G: 'gtceu:hv_machine_hull'
	}).id('tfg:shaped/hv_chemical_bath')

	event.recipes.gtceu.chemical_bath('tfg:magnesium_diboride_cool_down_distilled_water')
		.itemInputs('gtceu:hot_magnesium_diboride_ingot')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('gtceu:magnesium_diboride_ingot')
		.duration(250)
		.EUt(480)

	event.recipes.gtceu.chemical_bath('tfg:magnesium_diboride_cool_down')
		.itemInputs('gtceu:hot_magnesium_diboride_ingot')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('gtceu:magnesium_diboride_ingot')
		.duration(400)
		.EUt(480)

	// #endregion

	// #region Add all glass colors to macerator/hammer
	event.remove({ id: "gtceu:macerator/macerate_glass" });
	event.recipes.gtceu.macerator("gtceu:macerator/macerate_glass")
		.itemInputs(
			"#forge:glass"
		)
		.itemOutputs("gtceu:glass_dust")
		.duration(20)
		.EUt(2);

	event.remove({ id: "gtceu:macerator/macerate_glass_pane" });
	event.recipes.gtceu.macerator("gtceu:macerator/macerate_glass_pane")
		.itemInputs(
			"#forge:glass_panes"
		)
		.itemOutputs("3x gtceu:tiny_glass_dust")
		.duration(6)
		.EUt(2)

	event.replaceInput({ id: "gtceu:shaped/glass_dust_hammer" },
		"minecraft:glass",
		"#forge:glass"
	);
	// #endregion

	// #region Rich coal processing

	event.recipes.gtceu.coke_oven("tfg:poor_coal_to_coke")
		.itemInputs('2x gtceu:poor_raw_coal')
		.itemOutputs('1x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 500))
		.duration(900)

	event.recipes.gtceu.coke_oven("tfg:coal_to_coke")
		.itemInputs('gtceu:raw_coal')
		.itemOutputs('2x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 1000))
		.duration(900)

	event.recipes.gtceu.coke_oven("tfg:rich_coal_to_coke")
		.itemInputs('gtceu:rich_raw_coal')
		.itemOutputs('4x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 2000))
		.duration(900)

	event.recipes.gtceu.pyrolyse_oven("tfg:rich_coal_to_tar")
		.itemInputs('3x gtceu:rich_raw_coal')
		.chancedOutput('gtceu:dark_ash_dust', 5000, 0)
		.outputFluids(Fluid.of('gtceu:coal_tar', 3000))
		.duration(288)
		.EUt(96)
		.circuit(8)

	event.recipes.gtceu.pyrolyse_oven("tfg:rich_coal_to_coke_creosote")
		.itemInputs('4x gtceu:rich_raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(576)
		.EUt(64)
		.circuit(1)

	event.recipes.gtceu.pyrolyse_oven("tfg:coal_to_coal_gas")
		.itemInputs('4x gtceu:rich_raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:steam'))
		.outputFluids(Fluid.of('gtceu:coal_gas', 4000))
		.duration(288)
		.EUt(96)
		.circuit(22)

	event.recipes.gtceu.pyrolyse_oven("tfg:coal_to_coke_creosote_nitrogen")
		.itemInputs('4x gtceu:rich_raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:nitrogen'))
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(288)
		.EUt(96)
		.circuit(2)

	event.recipes.gtceu.coke_oven("tfg:raw_coal_to_coke")
        .itemInputs('gtceu:raw_coal')
        .itemOutputs('2x gtceu:coke_gem')
        .outputFluids(Fluid.of('gtceu:creosote', 2000))
        .duration(1710)

    event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_tar")
        .itemInputs('6x gtceu:raw_coal')
        .chancedOutput('gtceu:dark_ash_dust', 5000, 0)
        .outputFluids(Fluid.of('gtceu:coal_tar', 3000))
        .duration(288)
        .EUt(96)
        .circuit(8)

    event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coke_creosote")
        .itemInputs('8x gtceu:raw_coal')
        .itemOutputs('16x gtceu:coke_gem')
        .outputFluids(Fluid.of('gtceu:creosote', 8000))
        .duration(576)
        .EUt(64)
        .circuit(1)

    event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coal_gas")
        .itemInputs('8x gtceu:raw_coal')
        .itemOutputs('16x gtceu:coke_gem')
        .inputFluids(Fluid.of('gtceu:steam'))
        .outputFluids(Fluid.of('gtceu:coal_gas', 4000))
        .duration(288)
        .EUt(96)
        .circuit(22)

    event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coke_creosote_nitrogen")
        .itemInputs('8x gtceu:raw_coal')
        .itemOutputs('16x gtceu:coke_gem')
        .inputFluids(Fluid.of('gtceu:nitrogen'))
        .outputFluids(Fluid.of('gtceu:creosote', 8000))
        .duration(288)
        .EUt(96)
        .circuit(2)

	// #endregion

	// #region Fix TFC hanging sign metal dupe for Macerator and Arc Furnace

	const SIGN_METALS = [
		GTMaterials.Copper,
		GTMaterials.Bronze,
		GTMaterials.BlackBronze,
		GTMaterials.BismuthBronze,
		GTMaterials.WroughtIron,
		GTMaterials.Steel,
		GTMaterials.BlackSteel,
		GTMaterials.RedSteel,
		GTMaterials.BlueSteel
	];

	SIGN_METALS.forEach(metal => {
		// Arc furnace
		global.TFC_WOOD_TYPES.forEach(wood => {
			event.remove(`gtceu:arc_furnace/arc_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.arc_furnace(`gtceu:arc_furnace/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.nugget, metal, 1), 3750, 0)
				.inputFluids(Fluid.of('gtceu:oxygen', 12))
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		})

		global.AFC_WOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.arc_furnace(`gtceu:arc_furnace/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.nugget, metal, 1), 3750, 0)
				.inputFluids(Fluid.of('gtceu:oxygen', 12))
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		})

		// Macerator
		global.TFC_HARDWOOD_TYPES.forEach(wood => {
			event.remove(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:hardwood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.TFC_SOFTWOOD_TYPES.forEach(wood => {
			event.remove(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:wood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.AFC_HARDWOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:hardwood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.AFC_SOFTWOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:wood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})
	})
	// #endregion

	//#region Voiding covers

	event.replaceInput({ id: 'gtceu:shaped/cover_fluid_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:assembler/cover_fluid_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:shaped/cover_item_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:assembler/cover_item_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	//#endregion

	// #region Treated Wood

	event.shaped('2x gtceu:treated_wood_door', [
		'AA ',
		'AA ',
		'AA '
	], {
		A: 'gtceu:treated_wood_plate'
	}).id('tfg:shaped/treated_door')

	event.shaped('3x gtceu:treated_wood_trapdoor', [
		'AAA',
		'AAA',
		'   '
	], {
		A: 'gtceu:treated_wood_plate'
	}).id('tfg:shaped/treated_trapdoor')

	// #endregion

	// #region Primitive protection

	event.recipes.tfc.barrel_sealed(2000)
		.outputItem('tfg:prepared_leather_gloves')
		.inputs('tfchotornot:mittens', Fluid.of('tfc:vinegar', 1000))
		.id('tfg:sealed_barrel/prepared_leather_gloves')

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/wood_ash', Fluid.of('tfg:latex', 100))
		.outputFluid(Fluid.of('tfg:vulcanized_latex', 100))
		.length(300)
		.temperature(300)
		.id('tfg:vat/vulcanized_latex')

	event.recipes.tfc.pot('tfc:powder/wood_ash', Fluid.of('tfg:latex', 100), 1200, 300)
		.fluidOutput(Fluid.of('tfg:vulcanized_latex', 100))
		.id('tfg:pot/vulcanized_latex')

	event.recipes.firmalife.vat()
		.outputItem('tfg:latex_soaked_gloves')
		.inputs('tfg:prepared_leather_gloves', Fluid.of('tfg:vulcanized_latex', 1000))
		.length(300)
		.temperature(200)
		.id('tfg:vat/latex_soaked_gloves')

	event.recipes.firmalife.oven('tfg:latex_soaked_gloves', 120, 1200, 'gtceu:rubber_gloves')
		.id('tfg:oven/rubber_gloves')

	event.remove({ id: 'gtceu:shaped/rubber_gloves' })

	event.recipes.gtceu.alloy_smelter('rubber_gloves_alloy_smelter')
		.itemInputs('2x #forge:plates/rubber')
		.notConsumable('create:brass_hand')
		.itemOutputs('gtceu:rubber_gloves')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])


	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('gtceu:face_mask', [
			'ACA',
			'ABA',
			' D '
		], {
			A: '#forge:string',
			B: '#forge:cloth',
			C: 'minecraft:paper',
			D: '#tfc:sewing_needles'
		})
	).id('gtceu:shaped/face_mask')

	event.recipes.gtceu.assembler('assemble_face_mask')
		.itemInputs('4x #forge:string', '#forge:cloth', 'minecraft:paper')
		.itemOutputs('gtceu:face_mask')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(7)

	// #endregion

	event.replaceInput({ id: 'gtceu:shaped/nightvision_goggles' }, 'gtceu:glass_lens', 'tfc:lens')
	event.replaceInput({ id: 'gtceu:shaped/nightvision_goggles' }, 'gtceu:lv_sodium_battery', '#gtceu:batteries/lv')

	event.replaceInput({ id: 'gtceu:shaped/note_block' }, 'minecraft:iron_bars', '#tfg:metal_bars')
	event.replaceInput({ id: 'gtceu:shaped/note_block' }, 'gtceu:wood_plate', '#tfc:lumber')

	event.replaceInput({ mod: 'gtceu' }, 'minecraft:sugar', '#tfg:sugars')
	event.replaceInput({ mod: 'gtceu' }, 'minecraft:string', '#forge:string')

	event.recipes.gtceu.fluid_solidifier('tfg:solidify_glue')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('tfc:glue')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])


	event.recipes.createSequencedAssembly([
		'gtceu:ulv_voltage_coil',
	], 'gtceu:magnetic_iron_rod', [
		event.recipes.createDeploying('gtceu:magnetic_iron_rod', ['gtceu:magnetic_iron_rod', '#forge:fine_wires/lead'])
	]).transitionalItem('gtceu:magnetic_iron_rod').loops(32).id('tfg:sequenced_assembly/ulv_voltage_coil')

	//#endregion

	//#region Steam Bloomery

	event.recipes.gtceu.steam_bloomery('steam_raw_iron_bloom_coal')
		.itemInputs('#forge:ingots/iron', '#tfc:steam_bloomery_basic_fuels')
		.itemOutputs('tfc:raw_iron_bloom')
		.duration(2400)
		.EUt(GTValues.VEX[GTValues.ULV])

	event.recipes.gtceu.steam_bloomery('steam_raw_iron_bloom_coalcoke')
		.itemInputs('2x #forge:ingots/iron', '#tfc:blast_furnace_fuel')
		.itemOutputs('2x tfc:raw_iron_bloom')
		.duration(2400)
		.EUt(GTValues.VEX[GTValues.ULV])

	GTMaterialRegistry.getRegisteredMaterials().forEach(material => {

		const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
		if (tfcProperty == null)
			return;

		if (tfcProperty.getOutputMaterial() == GTMaterials.Iron) {
			event.recipes.gtceu.steam_bloomery(`steam_raw_iron_bloom_coal_${material.getName()}`)
				.itemInputs(ChemicalHelper.get(TagPrefix.dust, material, 1), '#tfc:steam_bloomery_basic_fuels')
				.itemOutputs('tfc:raw_iron_bloom')
				.duration(2400)
				.EUt(GTValues.VEX[GTValues.ULV])

			event.recipes.gtceu.steam_bloomery(`steam_raw_iron_bloom_coalcoke_${material.getName()}`)
				.itemInputs(ChemicalHelper.get(TagPrefix.dust, material, 2), '#tfc:blast_furnace_fuel')
				.itemOutputs('2x tfc:raw_iron_bloom')
				.duration(2400)
				.EUt(GTValues.VEX[GTValues.ULV])
		}
	})

	//#endregion
		
	// TODO: Greate again...
	event.shapeless('gtceu:red_alloy_single_cable', ['gtceu:red_alloy_single_wire', '#forge:plates/rubber'])
		.id('tfg:shapeless/red_alloy_single_cable')

	event.shapeless('gtceu:tin_single_cable', ['gtceu:tin_single_wire', '#forge:plates/rubber'])
		.id('tfg:shapeless/tin_single_cable')
	event.shapeless('gtceu:tin_double_cable', ['gtceu:tin_double_wire', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/tin_double_cable')
	event.shapeless('gtceu:tin_quadruple_cable', ['gtceu:tin_quadruple_wire', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/tin_quadruple_cable')
	event.shapeless('gtceu:tin_octal_cable', ['gtceu:tin_octal_wire', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/tin_octal_cable')

	event.shapeless('gtceu:cobalt_single_cable', ['gtceu:cobalt_single_wire', '#forge:plates/rubber'])
		.id('tfg:shapeless/cobalt_single_cable')
	event.shapeless('gtceu:cobalt_double_cable', ['gtceu:cobalt_double_wire', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/cobalt_double_cable')
	event.shapeless('gtceu:cobalt_quadruple_cable', ['gtceu:cobalt_quadruple_wire', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/cobalt_quadruple_cable')
	event.shapeless('gtceu:cobalt_octal_cable', ['gtceu:cobalt_octal_wire', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/cobalt_octal_cable')

	event.shapeless('gtceu:nickel_single_cable', ['gtceu:nickel_single_wire', '#forge:plates/rubber'])
		.id('tfg:shapeless/nickel_single_cable')
	event.shapeless('gtceu:nickel_double_cable', ['gtceu:nickel_double_wire', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/nickel_double_cable')
	event.shapeless('gtceu:nickel_quadruple_cable', ['gtceu:nickel_quadruple_wire', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/nickel_quadruple_cable')
	event.shapeless('gtceu:nickel_octal_cable', ['gtceu:nickel_octal_wire', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber', '#forge:plates/rubber'])
		.id('tfg:shapeless/nickel_octal_cable')
}
