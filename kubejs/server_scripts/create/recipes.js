// priority: 0

const registerCreateRecipes = (event) => {

	// Удаление рецептов мода create 
	event.remove({
		not: [
			{ id: 'create:crafting/kinetics/adjustable_chain_gearshift' },
			{ id: 'create:crafting/kinetics/cuckoo_clock' },
			{ id: 'create:crafting/kinetics/mysterious_cuckoo_clock' },
			{ id: 'create:crafting/kinetics/smart_chute' },
			{ id: 'create:crafting/kinetics/speedometerfrom_conversion' },
			{ id: 'create:crafting/kinetics/stressometerfrom_conversion' },
			{ id: 'create:crafting/kinetics/smart_fluid_pipe' },
			{ id: 'create:crafting/kinetics/portable_fluid_interface' },
			{ id: 'create:crafting/kinetics/clockwork_bearing' },
			{ id: 'create:crafting/kinetics/linear_chassisfrom_conversion' },
			{ id: 'create:crafting/kinetics/secondary_linear_chassisfrom_conversion' },
			{ id: 'create:crafting/kinetics/portable_storage_interface' },
			{ id: 'create:crafting/kinetics/track_signal' },
			{ id: 'create:crafting/kinetics/track_observer' },
			{ id: 'create:crafting/kinetics/controls' },
			{ id: 'create:crafting/logistics/content_observer' },
			{ id: 'create:crafting/logistics/stockpile_switch' },
			{ id: 'create:crafting/kinetics/nixie_tube' },
			{ id: 'create:crafting/kinetics/analog_lever' },
			{ id: 'create:crafting/kinetics/placard' },
			{ id: 'create:crafting/logistics/pulse_repeater' },
			{ id: 'create:crafting/logistics/pulse_extender' },
			{ id: 'create:crafting/logistics/powered_latch' },
			{ id: 'create:crafting/logistics/powered_toggle_latch' },
			{ id: 'create:crafting/kinetics/crafter_slot_cover' },
			{ id: 'create:crafting/appliances/linked_controller' },
			{ id: 'create:crafting/appliances/filter_clear' },
			{ id: 'create:crafting/appliances/attribute_filter_clear' },
			{ id: 'create:crafting/appliances/schedule_clear' },
			{ id: 'create:crafting/schematics/empty_schematic' },
			{ id: 'create:crafting/schematics/schematic_and_quill' },
			{ id: 'create:crafting/appliances/clipboard_clear' },
			{ id: 'create:crafting/kinetics/andesite_door' },
			{ id: 'create:crafting/kinetics/brass_door' },
			{ id: 'create:crafting/kinetics/copper_door' },
			{ id: 'create:crafting/kinetics/train_door' },
			{ id: 'create:crafting/kinetics/train_trapdoor' },
			{ id: 'create:crafting/logistics/content_observer' },
			{ type: 'minecraft:stonecutting' }
		], mod: 'create'
	})

	// Train Station
	event.shapeless('2x create:track_station', [
		'create:railway_casing',
		'firmaciv:firmaciv_compass'
	]).id('create:crafting/kinetics/track_station')

	// Speedometer
	event.shapeless('create:speedometer', [
		'create:andesite_casing',
		'firmaciv:firmaciv_compass'
	]).id('create:crafting/kinetics/speedometer')

	// Пушка для постройки схематик
	event.shaped('create:schematicannon', [
		'DE ',
		'CAC'
	], {
		A: '#forge:storage_blocks/wrought_iron',
		C: '#tfc:rock/smooth',
		D: 'minecraft:dispenser',
		E: 'firmaciv:cannon'
	}).id('tfg:create/shaped/schematicannon')

	// Стол для схематик
	event.shaped('create:schematic_table', [
		'AAA',
		'CB ',
		' B '
	], {
		A: '#minecraft:wooden_slabs',
		B: '#tfg:rock_walls',
		C: '#forge:tools/saws'
	}).id('tfg:create/shaped/schematic_table')

	// Внутриблочный двигатель цепи
	event.shapeless('create:encased_chain_drive', [
		'create:andesite_casing',
		'#tfg:metal_chains',
		'#tfg:metal_chains',
		'#tfg:metal_chains',
		'#tfg:metal_chains'
	]).id('tfg:create/shapeless/encased_chain_drive')

	// Сопло
	event.shaped('create:nozzle', [
		'ABA',
		'ACA'
	], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:plates/wrought_iron',
		C: '#forge:cloth'
	}).id('tfg:create/shaped/nozzle')

	// Ручка, чтобы люто крутить
	event.shaped('create:hand_crank', [
		'AAA',
		'  B'
	], {
		A: '#tfc:lumber',
		B: '#forge:rods/bismuth_bronze'
	}).id('tfg:create/shaped/hand_crank_bismuth_bronze')

	event.shaped('create:hand_crank', [
		'AAA',
		'  B'
	], {
		A: '#tfc:lumber',
		B: '#forge:rods/bronze'
	}).id('tfg:create/shaped/hand_crank_bronze')

	event.shaped('create:hand_crank', [
		'AAA',
		'  B'
	], {
		A: '#tfc:lumber',
		B: '#forge:rods/black_bronze'
	}).id('tfg:create/shaped/hand_crank_black_bronze')

	// Емкость для миксера
	event.shaped('create:basin', [
		'ABA',
		'AAA'
	], {
		A: '#forge:plates/iron',
		B: '#forge:tools/hammers'
	}).id('tfg:create/shaped/basin')

	event.recipes.gtceu.assembler('tfg:create/basin')
		.itemInputs('5x #forge:plates/iron')
		.circuit(3)
		.itemOutputs('create:basin')
		.duration(200)
		.EUt(20)

	// Место куда можно что то положить
	event.shapeless('create:depot', [
		'create:andesite_casing',
		'#forge:double_plates/wrought_iron'
	]).id('tfg:create/shapeless/depot')

	// Лоток
	event.shaped('create:chute', [
		'A ',
		'AB',
		'A '
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:tools/hammers'
	}).id('tfg:create/shaped/chute')

	event.recipes.gtceu.assembler('tfg:create/chute')
		.itemInputs('3x #forge:plates/wrought_iron')
		.circuit(4)
		.itemOutputs('create:chute')
		.duration(200)
		.EUt(20)

	// Металлический держатель
	event.shaped('2x create:metal_bracket', [
		'AAA',
		' B '
	], {
		A: '#forge:nuggets/wrought_iron',
		B: '#forge:plates/wrought_iron'
	}).id('tfg:create/shaped/metal_bracket')

	// Жидкостная труба
	event.shaped('create:fluid_pipe', [
		'BAB'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:plates/copper'
	}).id('tfg:create/shaped/fluid_pipe')

	event.recipes.gtceu.assembler('tfg:create/fluid_pipe')
		.itemInputs('4x #forge:plates/copper')
		.circuit(3)
		.itemOutputs('create:fluid_pipe')
		.duration(200)
		.EUt(20)

	// Жидкостный люк
	event.shapeless('create:fluid_valve', [
		'create:fluid_pipe',
		'#forge:plates/wrought_iron'
	]).id('tfg:create/shapeless/fluid_valve')

	// Ручка жидкостного люка
	event.shaped('create:copper_valve_handle', [
		' A ',
		'BCD'
	], {
		A: '#forge:plates/copper',
		B: '#forge:tools/hammers',
		C: '#forge:small_gears/wrought_iron',
		D: '#forge:tools/files'
	}).id('tfg:create/shaped/copper_valve_handle')

	event.recipes.gtceu.assembler('tfg:create/copper_valve_handle')
		.itemInputs('4x #forge:plates/copper', '#forge:small_gears/wrought_iron')
		.circuit(6)
		.itemOutputs('create:copper_valve_handle')
		.duration(200)
		.EUt(20)

	// Жидкостный резервуар
	event.shaped('create:fluid_tank', [
		'ADA',
		'BCB',
		'AEA'
	], {
		A: '#forge:screws/copper',
		B: '#forge:plates/copper',
		C: '#forge:glass_panes',
		D: '#forge:tools/screwdrivers',
		E: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/fluid_tank')

	// Шкив для шланга
	event.shaped('create:hose_pulley', [
		'DAE',
		' B ',
		'CFC'
	], {
		A: 'create:copper_casing',
		B: '#forge:foils/rubber',
		C: '#forge:plates/copper',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers',
		F: 'minecraft:bucket'
	}).id('tfg:create/shaped/hose_pulley')

	// Слив из предметов
	event.shaped('create:item_drain', [
		'A',
		'B'
	], {
		A: '#tfg:metal_bars',
		B: 'create:copper_casing'
	}).id('tfg:create/shaped/item_drain')

	// Жидкостный наполнитель
	event.shaped('create:spout', [
		'CBD',
		' A '
	], {
		A: '#forge:foils/rubber',
		B: 'create:fluid_tank',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/spout')

	// Паровой двигатель
	event.shaped('create:steam_engine', [
		'ABA',
		'CDC',
		'EFG'
	], {
		A: '#forge:screws/wrought_iron',
		B: '#forge:plates/brass',
		C: '#forge:rods/black_steel',
		D: '#forge:gears/steel',
		E: '#forge:tools/hammers',
		F: '#forge:storage_blocks/copper',
		G: '#forge:tools/screwdrivers',
	}).id('tfg:create/shaped/steam_engine')

	event.recipes.gtceu.assembler('tfg:create/steam_engine')
		.itemInputs('2x #forge:screws/wrought_iron', '#forge:plates/brass', '2x #forge:rods/red_steel', '#forge:gears/steel', '#forge:storage_blocks/copper')
		.circuit(3)
		.itemOutputs('create:steam_engine')
		.duration(200)
		.EUt(32)

	// Паровой свисток
	event.shaped('create:steam_whistle', [
		'AC',
		'BD'
	], {
		A: '#forge:plates/brass',
		B: '#forge:rings/gold',
		C: '#forge:tools/hammers',
		D: '#forge:tools/files'
	}).id('tfg:create/shaped/steam_whistle')

	event.recipes.gtceu.assembler('tfg:create/steam_whistle')
		.itemInputs('#forge:plates/brass', '#forge:rings/gold')
		.circuit(5)
		.itemOutputs('create:steam_whistle')
		.duration(200)
		.EUt(4)

	// Рука поршня
	event.shaped('8x create:piston_extension_pole', [
		'A ',
		'BC',
		'A '
	], {
		A: '#minecraft:planks',
		B: '#forge:plates/wrought_iron',
		C: '#forge:tools/hammers'
	}).id('tfg:create/shaped/piston_extension_pole')

	event.recipes.gtceu.assembler('tfg:create/piston_extension_pole')
		.itemInputs('2x #minecraft:planks', '#forge:plates/wrought_iron')
		.circuit(3)
		.itemOutputs('8x create:piston_extension_pole')
		.duration(200)
		.EUt(20)

	// Редстоуновый вал
	event.shaped('create:gantry_shaft', [
		'A ',
		'BC',
		'A '
	], {
		A: '#forge:plates/wrought_iron',
		B: 'gtceu:red_alloy_single_wire',
		C: '#forge:tools/hammers'
	}).id('tfg:create/shaped/gantry_shaft')

	event.recipes.gtceu.assembler('tfg:create/gantry_shaft')
		.itemInputs('gtceu:red_alloy_single_wire', '2x #forge:plates/wrought_iron')
		.circuit(3)
		.itemOutputs('create:gantry_shaft')
		.duration(200)
		.EUt(20)

	// Канатный шкиф
	event.shaped('create:rope_pulley', [
		'EA ',
		'DBD',
		' C '
	], {
		A: 'create:andesite_casing',
		B: 'firmaciv:rope_coil',
		C: '#forge:plates/wrought_iron',
		D: '#tfg:small_cogwheels',
		E: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/rope_pulley')

	// Шкиф подъемника
	event.shaped('create:elevator_pulley', [
		'EAF',
		'DBD',
		' C '
	], {
		A: 'create:brass_casing',
		B: 'firmaciv:rope_coil',
		C: '#forge:plates/steel',
		D: '#tfg:small_cogwheels',
		E: '#forge:tools/wrenches',
		F: 'create:electron_tube'
	}).id('tfg:create/shaped/elevator_pulley')

	// Сборщик вагонеток
	event.shaped('create:cart_assembler', [
		' D ',
		'ABA',
		'C C'
	], {
		A: '#forge:plates/steel',
		B: 'gtceu:red_alloy_single_wire',
		C: '#minecraft:logs',
		D: '#forge:wrenches'
	}).id('tfg:create/shaped/cart_assembler')

	// Контроллер рельсы
	event.shaped('create:controller_rail', [
		'ABA',
		'ACA',
		'ABA'
	], {
		A: '#forge:rods/gold',
		B: '#tfc:can_be_lit_on_torch',
		C: 'create:electron_tube'
	}).id('tfg:create/shaped/controller_rail')

	// Линейный переход
	event.shaped('3x create:linear_chassis', [
		'ABA',
		'CCC',
		'ABA'
	], {
		A: '#forge:screws/wrought_iron',
		B: '#forge:plates/wrought_iron',
		C: '#minecraft:logs'
	}).id('tfg:create/shaped/linear_chassis')

	// Радиальный переход
	event.shaped('3x create:radial_chassis', [
		'ACA',
		'BCB',
		'ACA'
	], {
		A: '#forge:screws/wrought_iron',
		B: '#forge:plates/wrought_iron',
		C: '#minecraft:logs'
	}).id('tfg:create/shaped/radial_chassis')

	// Умный липкий поршень
	event.shaped('create:sticker', [
		'ABA',
		'CDC'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'tfc:glue',
		C: '#forge:cobblestone',
		D: '#forge:dusts/redstone'
	}).id('tfg:create/shaped/sticker')

	// Механическая бурилка
	event.shaped('create:mechanical_drill', [
		'EBF',
		'HCG',
		'ADA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:drill_heads',
		C: 'greate:steel_cogwheel',
		D: 'create:andesite_casing',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches',
		G: '#forge:screws/wrought_iron',
		H: '#gtceu:circuits/ulv'
	}).id('tfg:create/shaped/mechanical_drill')

	event.shaped('create:mechanical_roller', [
		'GBG',
		'ADA',
		'EHF'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'tfc:metal/block/wrought_iron',
		D: 'create:andesite_casing',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches',
		G: '#forge:bolts/wrought_iron',
		H: '#tfg:small_cogwheels'
	}).id('tfg:create/shaped/mechanical_roller')

	// Редстоуновый контакт
	event.shaped('2x create:redstone_contact', [
		'DCE',
		'ABA',
		'AAA'
	], {
		A: '#forge:cobblestone',
		B: '#forge:dusts/redstone',
		C: '#forge:plates/wrought_iron',
		D: '#forge:screws/bronze',
		E: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/redstone_contact')

	event.recipes.gtceu.assembler('tfg:create/redstone_contact')
		.itemInputs('5x #forge:cobblestone', '#forge:dusts/redstone', '#forge:plates/wrought_iron', '#forge:screws/bronze')
		.circuit(3)
		.itemOutputs('2x create:redstone_contact')
		.duration(200)
		.EUt(20)

	// Механический собиратель
	event.shaped('create:mechanical_harvester', [
		'CDE',
		'BFB',
		'AAA'
	], {
		A: '#forge:shovel_heads/wrought_iron',
		B: '#forge:plates/wrought_iron',
		C: '#forge:tools/hammers',
		D: 'create:andesite_casing',
		E: '#forge:tools/wrenches',
		F: '#tfg:small_cogwheels'
	}).id('tfg:create/shaped/mechanical_harvester')

	event.recipes.gtceu.assembler('tfg:create/mechanical_harvester')
		.itemInputs('3x #forge:shovel_heads', '2x #forge:plates/wrought_iron', '#tfg:small_cogwheels', 'create:andesite_casing')
		.circuit(3)
		.itemOutputs('create:mechanical_harvester')
		.duration(200)
		.EUt(20)

	// Механический плуг
	event.shaped('create:mechanical_plough', [
		'CDE',
		'BFB',
		'AAA'
	], {
		A: '#forge:hoe_heads/wrought_iron',
		B: '#forge:plates/wrought_iron',
		C: '#forge:tools/hammers',
		D: 'create:andesite_casing',
		E: '#forge:tools/wrenches',
		F: '#tfg:small_cogwheels'
	}).id('tfg:create/shaped/mechanical_plough')

	event.recipes.gtceu.assembler('tfg:create/mechanical_plough')
		.itemInputs('3x #forge:hoe_heads', '2x #forge:plates/wrought_iron', '#tfg:small_cogwheels', 'create:andesite_casing')
		.circuit(4)
		.itemOutputs('create:mechanical_plough')
		.duration(200)
		.EUt(20)

	// Create sail creation using custom sail items.

	event.shaped('8x create:sail_frame', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:screws/wrought_iron',
		B: 'gtceu:treated_wood_rod',
		C: 'gtceu:treated_wood_frame'
	}).id('tfg:create/shaped/sail_frame')

	event.shaped('8x create:white_sail', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'create:sail_frame',
		B: '#forge:cloth'
	}).id('tfg:create/shaped/white_sail')


	// Андезитовый корпус
	event.recipes.createItemApplication(['create:andesite_casing'], ['#minecraft:logs', '#forge:plates/wrought_iron'])
		.id('tfg:create/item_application/andesite_casing')

	event.recipes.gtceu.assembler('tfg:create/andesite_casing')
		.itemInputs('#minecraft:logs', '#forge:plates/wrought_iron')
		.circuit(10)
		.itemOutputs('create:andesite_casing')
		.duration(50)
		.EUt(4)

	// Латунный корпус
	event.recipes.createItemApplication(['create:brass_casing'], ['#minecraft:logs', '#forge:plates/brass'])
		.id('tfg:create/item_application/brass_casing')

	event.recipes.gtceu.assembler('tfg:create/brass_casing')
		.itemInputs('#minecraft:logs', '#forge:plates/brass')
		.circuit(10)
		.itemOutputs('create:brass_casing')
		.duration(50)
		.EUt(4)

	// Медный корпус
	event.recipes.createItemApplication(['create:copper_casing'], ['#minecraft:logs', '#forge:plates/copper'])
		.id('tfg:create/item_application/copper_casing')

	event.recipes.gtceu.assembler('tfg:create/copper_casing')
		.itemInputs('#minecraft:logs', '#forge:plates/copper')
		.circuit(10)
		.itemOutputs('create:copper_casing')
		.duration(50)
		.EUt(4)

	// Корпус поезда
	event.recipes.createItemApplication(['create:railway_casing'], ['create:brass_casing', '#forge:plates/black_steel'])
		.id('tfg:create/item_application/railway_casing')

	event.recipes.gtceu.assembler('tfg:create/railway_casing')
		.itemInputs('create:brass_casing', '#forge:plates/black_steel')
		.circuit(10)
		.itemOutputs('create:railway_casing')
		.duration(50)
		.EUt(4)

	// Механический крафтер
	event.shaped('create:mechanical_crafter', [
		' A ',
		'DCE',
		' F '
	], {
		A: 'create:electron_tube',
		C: '#tfc:workbenches',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers',
		F: '#forge:small_gears/brass'
	}).id('tfg:create/shaped/mechanical_crafter')

	// Маховик
	event.shaped('create:flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:plates/brass',
		B: '#forge:rods/wrought_iron',
		C: '#tfg:shafts'
	}).id('tfg:create/shaped/flywheel')

	// Механическая рука
	event.shaped('create:mechanical_arm', [
		'AHB',
		'AGE',
		'CDF'
	], {
		A: '#forge:plates/brass',
		B: '#forge:rods/wrought_iron',
		C: 'create:precision_mechanism',
		D: 'create:brass_casing',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches',
		G: '#forge:screws/wrought_iron',
		H: 'create:electron_tube'
	}).id('tfg:create/shaped/mechanical_arm')

	event.recipes.gtceu.assembler('tfg:create/mechanical_arm')
		.itemInputs('2x #forge:plates/brass', '#forge:rods/wrought_iron', 'create:precision_mechanism', 'create:brass_casing', '#forge:screws/wrought_iron', 'create:electron_tube')
		.circuit(3)
		.itemOutputs('create:mechanical_arm')
		.duration(200)
		.EUt(20)

	// Наблюдатель за поездом
	event.shapeless('create:track_observer', [
		'create:railway_casing',
		'#minecraft:stone_pressure_plates'
	]).id('tfg:create/shapeless/track_observer')

	// Сейф
	event.shaped('create:item_vault', [
		' B ',
		'CAC',
		' D '
	], {
		A: '#forge:chests/wooden',
		B: '#forge:sheets/wrought_iron',
		C: '#forge:screws/wrought_iron',
		D: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/item_vault')

	event.recipes.gtceu.assembler('tfg:create/item_vault')
		.itemInputs('3x #forge:chests/wooden', '#forge:sheets/wrought_iron', '2x #forge:screws/steel')
		.circuit(3)
		.itemOutputs('create:item_vault')
		.duration(200)
		.EUt(20)

	// Умный раздатчик/приемник из железа
	event.shaped('2x create:andesite_funnel', [
		'AAD',
		'BBC'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:foils/rubber',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/knives'
	}).id('tfg:create/shaped/andesite_funnel')

	event.shaped('2x create:andesite_funnel', [
		'AAD',
		'BBC'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:leather',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/knives'
	}).id('tfg:create/shaped/andesite_funnel_leather')

	// Умный раздатчик/приемник из латуни
	event.shaped('2x create:brass_funnel', [
		' E ',
		'AAD',
		'BBC'
	], {
		A: '#forge:plates/brass',
		B: '#forge:foils/rubber',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/knives',
		E: 'create:electron_tube'
	}).id('tfg:create/shaped/brass_funnel')

	event.shaped('2x create:brass_funnel', [
		' E ',
		'AAD',
		'BBC'
	], {
		A: '#forge:plates/brass',
		B: '#forge:leather',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/knives',
		E: 'create:electron_tube'
	}).id('tfg:create/shaped/brass_funnel_leather')

	// Тунель из железа
	event.shaped('create:andesite_tunnel', [
		' D',
		'AA',
		'BB'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:foils/rubber',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/andesite_tunnel')

	event.shaped('create:andesite_tunnel', [
		' D',
		'AA',
		'BB'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:leather',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/andesite_tunnel_leather')

	// Тунель из латуни
	event.shaped('create:brass_tunnel', [
		'CD',
		'AA',
		'BB'
	], {
		A: '#forge:plates/brass',
		B: '#forge:foils/rubber',
		C: 'create:electron_tube',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/brass_tunnel')

	event.shaped('create:brass_tunnel', [
		'CD',
		'AA',
		'BB'
	], {
		A: '#forge:plates/brass',
		B: '#forge:leather',
		C: 'create:electron_tube',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/brass_tunnel_leather')

	// Дисплей столешница (чзх)
	event.shaped('create:display_board', [
		'DA ',
		'BCB',
		' A '
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:rings/wrought_iron',
		C: '#forge:small_gears',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/display_board')

	// Латунная рука
	event.shaped('create:brass_hand', [
		' AB',
		'CCD',
		' C '
	], {
		A: '#forge:tools/hammers',
		B: '#forge:ingots/brass',
		C: '#forge:nuggets/brass',
		D: '#forge:tools/files'
	}).id('tfg:create/shaped/brass_hand')

	event.recipes.gtceu.assembler('tfg:create/brass_hand')
		.itemInputs('3x #forge:nuggets/brass', '#forge:plates/brass')
		.circuit(3)
		.itemOutputs('create:brass_hand')
		.duration(200)
		.EUt(20)

	// Электронная трубка
	event.shaped('1x create:electron_tube', [
		'FAG',
		'BCB',
		'DED'
	], {
		A: 'gtceu:glass_tube',
		B: '#forge:bolts/steel',
		C: 'gtceu:treated_wood_plate',
		D: 'gtceu:red_alloy_single_wire',
		E: '#forge:plates/wrought_iron',
		F: '#forge:tools/screwdrivers',
		G: '#forge:tools/wire_cutters'
	}).id('tfg:create/shaped/electron_tube')

	event.recipes.createSequencedAssembly([
		'2x create:electron_tube',
	], 'gtceu:treated_wood_plate', [
		event.recipes.createDeploying('tfg:unfinished_electron_tube', ['tfg:unfinished_electron_tube', '#forge:plates/wrought_iron']),
		event.recipes.createDeploying('tfg:unfinished_electron_tube', ['tfg:unfinished_electron_tube', 'gtceu:red_alloy_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_electron_tube', ['tfg:unfinished_electron_tube', 'gtceu:red_alloy_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_electron_tube', ['tfg:unfinished_electron_tube', 'gtceu:glass_tube']),
	]).transitionalItem('tfg:unfinished_electron_tube').loops(1).id('tfg:create/sequenced_assembly/electron_tube')

	event.recipes.gtceu.assembler('create:electron_tube')
		.itemInputs('#forge:plates/wrought_iron', 'gtceu:glass_tube', '2x gtceu:red_alloy_single_wire')
		.itemOutputs('2x create:electron_tube')
		.duration(50)
		.EUt(7)

	event.shaped('4x create:electron_tube', [
		'FAG',
		'DCD'
	], {
		A: 'gtceu:glass_tube',
		C: 'gtceu:plastic_circuit_board',
		D: 'gtceu:red_alloy_single_wire',
		F: '#forge:tools/screwdrivers',
		G: '#forge:tools/wire_cutters'
	}).id('tfg:create/shaped/electron_tube2')

	event.recipes.gtceu.assembler('create:electron_tube2')
		.itemInputs('gtceu:plastic_circuit_board', 'gtceu:glass_tube', '2x gtceu:red_alloy_single_wire')
		.itemOutputs('4x create:electron_tube')
		.duration(50)
		.EUt(7)

	event.shaped('4x create:electron_tube', [
		' A ',
		' B ',
		' C '
	], {
		A: '#forge:tools/screwdrivers',
		B: 'gtceu:nand_chip',
		C: 'gtceu:plastic_circuit_board'
	}).id('tfg:create/shaped/electron_tube3')

	event.recipes.gtceu.assembler('create:electron_tube3')
		.itemInputs('gtceu:plastic_circuit_board', 'gtceu:nand_chip')
		.itemOutputs('4x create:electron_tube')
		.duration(50)
		.EUt(7)

	// Тюбик с клеем
	event.shaped('create:super_glue', [
		'BA',
		'CB'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'tfc:glue',
		C: '#forge:rings/wrought_iron'
	}).id('tfg:create/shaped/super_glue')

	// Deployer
	event.shaped('create:deployer', [
		' A ',
		'DBF',
		' CE'
	], {
		A: '#tfg:small_cogwheels',
		B: 'create:andesite_casing',
		C: 'create:brass_hand',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/screwdrivers',
		F: 'create:electron_tube'
	}).id('tfg:create/shaped/deployer')

	// Соединятор вагонеток
	event.shapeless('create:minecart_coupling', [
		'#tfg:metal_chains',
		'#forge:bolts',
		'#tfg:metal_chains',
		'#forge:bolts',
		'#tfg:metal_chains',
		'#forge:tools/hammers'
	]).id('tfg:create/shapeless/minecart_coupling')

	event.recipes.gtceu.assembler('tfg:create/minecart_coupling')
		.itemInputs('3x #tfg:metal_chains', '2x #forge:bolts')
		.circuit(1)
		.itemOutputs('create:minecart_coupling')
		.duration(200)
		.EUt(20)

	// Блупринт создания
	event.shapeless('create:crafting_blueprint', [
		'minecraft:painting',
		'#tfc:workbenches'
	]).id('tfg:create/shapeless/crafting_blueprint')

	// Медная бочка на спину
	event.shaped('create:copper_backtank', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: '#forge:screws/copper',
		B: 'greate:andesite_alloy_shaft',
		C: '#forge:plates/copper',
		D: 'tfc:bellows',
		E: 'firmaciv:large_waterproof_hide',
		F: 'tfc:metal/chestplate/copper'
	}).id('tfg:create/shaped/copper_backtank')

	// Шлем для дайвинга
	event.shaped('create:copper_diving_helmet', [
		'ABA',
		'CDC'
	], {
		A: '#forge:plates/copper',
		B: 'tfc:metal/helmet/copper',
		C: '#forge:glass_panes',
		D: 'firmaciv:large_waterproof_hide'
	}).id('tfg:create/shaped/copper_diving_helmet')

	// Ботинки для дайвинга
	event.shaped('create:copper_diving_boots', [
		'ABA',
		'CDC'
	], {
		A: '#forge:screws/copper',
		B: 'tfc:metal/boots/copper',
		C: '#forge:ingots/iron',
		D: 'firmaciv:large_waterproof_hide'
	}).id('tfg:create/shaped/copper_diving_boots')

	// Netherite backtank
	event.shaped('create:netherite_backtank', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: '#forge:screws/blue_steel',
		B: 'greate:steel_shaft',
		C: '#forge:plates/blue_steel',
		D: 'gtceu:steel_drum',
		E: 'beneath:cursed_hide',
		F: 'tfc:metal/chestplate/blue_steel'
	}).id('tfg:create/shaped/netherite_backtank')

	event.shaped('create:netherite_backtank', [
		'ACA',
		'CCC',
		'EDE'
	], {
		A: '#forge:screws/blue_steel',
		C: '#forge:plates/blue_steel',
		D: 'create:copper_backtank',
		E: 'beneath:cursed_hide'
	}).id('tfg:create/shaped/netherite_backtank_upgrade')

	// Netherite diving helmet
	event.shaped('create:netherite_diving_helmet', [
		'ABA',
		'CDC'
	], {
		A: '#forge:plates/blue_steel',
		B: 'tfc:metal/helmet/blue_steel',
		C: 'firmalife:reinforced_glass',
		D: 'beneath:cursed_hide'
	}).id('tfg:create/shaped/netherite_diving_helmet')

	event.shaped('create:netherite_diving_helmet', [
		' A ',
		'ABA',
		'CDC'
	], {
		A: '#forge:plates/blue_steel',
		B: 'create:copper_diving_helmet',
		C: 'firmalife:reinforced_glass',
		D: 'beneath:cursed_hide'
	}).id('tfg:create/shaped/netherite_diving_helmet_upgrade')

	// Netherite diving boots
	event.shaped('create:netherite_diving_boots', [
		'ABC',
		'EDE'
	], {
		A: '#forge:screws/blue_steel',
		B: 'tfc:metal/boots/blue_steel',
		C: '#forge:plates/blue_steel',
		D: 'beneath:cursed_hide',
		E: '#forge:ingots/lead'
	}).id('tfg:create/shaped/netherite_diving_boots')

	event.shaped('create:netherite_diving_boots', [
		'ABA',
		'CDC'
	], {
		A: '#forge:screws/blue_steel',
		B: 'create:copper_diving_boots',
		C: '#forge:plates/blue_steel',
		D: 'beneath:cursed_hide'
	}).id('tfg:create/shaped/netherite_diving_boots_upgrade')

	// Херь, увеличивающая дистанцию копки
	event.recipes.createMechanicalCrafting('create:extendo_grip', [
		' A ',
		' B ',
		'CCC',
		'CCC',
		' D '
	], {
		A: '#forge:plates/brass',
		B: 'create:precision_mechanism',
		C: '#forge:rods/wooden',
		D: 'create:brass_hand'
	}).id('tfg:create/mechanical_crafting/extendo_grip')

	// Херь, устанавливающая блоки зеркально
	event.recipes.createMechanicalCrafting('create:wand_of_symmetry', [
		'  A  ',
		' ABA ',
		'  C  ',
		'  D  ',
		'  E  '
	], {
		A: '#forge:glass',
		B: 'minecraft:redstone_lamp',
		C: 'create:precision_mechanism',
		D: '#forge:plates/brass',
		E: 'minecraft:obsidian'
	}).id('tfg:create/mechanical_crafting/wand_of_symmetry')

	// Фильтр список
	event.shaped('create:filter', [
		'ABA'
	], {
		A: '#forge:nuggets/wrought_iron',
		B: '#forge:cloth'
	}).id('tfg:create/shaped/filter')

	// Фильтр аттрибутов
	event.shaped('create:attribute_filter', [
		'ABA'
	], {
		A: '#forge:nuggets/brass',
		B: '#forge:cloth'
	}).id('tfg:create/shaped/attribute_filter')

	// Расписание поездов
	event.shapeless('4x create:schedule', [
		'minecraft:paper',
		'#forge:dyes/black'
	]).id('tfg:create/shapeless/schedule')

	// Дневник
	event.shaped('create:clipboard', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:bolts/wrought_iron',
		B: '#forge:plates/wood',
		C: 'minecraft:paper'
	}).id('tfg:create/shaped/clipboard')

	// Лестница из железа
	event.shaped('6x create:andesite_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/tin_alloy'
	}).id('tfg:create/shaped/andesite_ladder')

	// Лестница из латуни
	event.shaped('6x create:brass_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/brass'
	}).id('tfg:create/shaped/brass_ladder')

	// Лестница из железа
	event.shaped('6x create:copper_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/copper'
	}).id('tfg:create/shaped/copper_ladder')

	// Леса из железа
	event.shaped('4x create:andesite_scaffolding', [
		'AAA',
		'A A'
	], {
		A: '#forge:rods/tin_alloy'
	}).id('tfg:create/shaped/andesite_scaffolding')

	// Леса из латуни
	event.shaped('4x create:brass_scaffolding', [
		'AAA',
		'A A'
	], {
		A: '#forge:rods/brass'
	}).id('tfg:create/shaped/brass_scaffolding')

	// Леса из железа
	event.shaped('4x create:copper_scaffolding', [
		'AAA',
		'A A'
	], {
		A: '#forge:rods/copper'
	}).id('tfg:create/shaped/copper_scaffolding')

	// Цинковая ступень
	event.shapeless('create:copycat_step', [
		'#forge:plates/zinc',
		'#forge:tools/files'
	]).id('tfg:create/shapeless/copycat_step')

	// Цинковая панель
	event.shapeless('create:copycat_panel', [
		'#forge:double_plates/zinc',
		'#forge:tools/files'
	]).id('tfg:create/shapeless/copycat_panel')

	event.recipes.gtceu.assembler('tfg:create/copycat_panel')
		.itemInputs('#forge:double_plates/zinc')
		.circuit(5)
		.itemOutputs('create:copycat_panel')
		.duration(200)
		.EUt(20)

	// Деталь рельса
	event.shaped('3x create:metal_girder', [
		'AAA',
		'BBB'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:nuggets/wrought_iron'
	}).id('tfg:create/shaped/metal_girder')

	// Стеклянная дверь
	event.shapeless('create:framed_glass_door', [
		'#minecraft:wooden_doors',
		'minecraft:glass_pane'
	]).id('tfg:create/shapeless/framed_glass_door')

	// Стеклянный люк
	event.shapeless('create:framed_glass_trapdoor', [
		'#minecraft:wooden_trapdoors',
		'minecraft:glass_pane'
	]).id('tfg:create/shapeless/framed_glass_trapdoor')

	// 
	event.recipes.createMechanicalCrafting('create:potato_cannon', [
		'ABCCC',
		'DD   '
	], {
		A: '#forge:screws/copper',
		B: 'create:precision_mechanism',
		C: 'create:fluid_pipe',
		D: '#forge:plates/copper'
	}).id('tfg:create/mechanical_crafting/potato_cannon')

	// Липкий механический поршень
	event.shaped('create:mechanical_piston', [
		'A',
		'B',
		'C'
	], {
		A: 'minecraft:piston',
		B: 'create:andesite_casing',
		C: '#tfg:shafts'
	}).id('tfg:create/shaped/mechanical_piston')

	event.shaped('create:sticky_mechanical_piston', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:tools/hammers',
		B: 'tfc:glue',
		C: 'create:mechanical_piston'
	}).id('tfg:create/shaped/sticky_mechanical_piston_from_glue')

	event.shaped('create:sticky_mechanical_piston', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:sticky_resin',
		C: 'create:mechanical_piston',
	}).id('tfg:create/shaped/sticky_mechanical_piston_from_sticky_resin')

	event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_liquid_glue')
		.itemInputs('create:mechanical_piston')
		.inputFluids(Fluid.of('gtceu:glue', 100))
		.itemOutputs('create:sticky_mechanical_piston')
		.duration(100)
		.EUt(4)

	event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_slimeball')
		.itemInputs('create:mechanical_piston', 'minecraft:slimeball')
		.itemOutputs('create:sticky_mechanical_piston')
		.duration(100)
		.EUt(4)

	event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_sticky_resin')
		.itemInputs('create:mechanical_piston', 'gtceu:sticky_resin')
		.itemOutputs('create:sticky_mechanical_piston')
		.duration(100)
		.EUt(4)

	//#region Покраска ручек от люка

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('#tfg:colored_valve_handles', Fluid.of(`tfc:lye`, 144))
		.outputItem(`create:copper_valve_handle`)
		.id(`barrel/create/valve_handle_decolor`)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.recipes.tfc.barrel_sealed(1000)
			.inputs('create:copper_valve_handle', Fluid.of(`tfc:${dye}_dye`, 144))
			.outputItem(`create:${dye}_valve_handle`)
			.id(`barrel/create/${dye}_valve_handle`)
	})

	//#endregion

	//#region Покраска тулбоксов

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		if (dye != 'brown') {
			event.remove({ id: `create:create.toolbox.color.block.create.${dye}_toolbox` })

			event.recipes.tfc.barrel_sealed(1000)
				.inputs('create:brown_toolbox', Fluid.of(`tfc:${dye}_dye`, 288))
				.outputItem(`create:${dye}_toolbox`)
				.id(`barrel/create/${dye}_toolbox`)

			event.recipes.gtceu.chemical_bath(`create/${dye}_toolbox`)
				.itemInputs('create:brown_toolbox')
				.inputFluids(Fluid.of(`tfc:${dye}_dye`, 288))
				.itemOutputs(`create:${dye}_toolbox`)
				.duration(200)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
	})

	//#endregion

	//#region Покраска сидушек

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('#tfg:colored_seats', Fluid.of(`tfc:lye`, 288))
		.outputItem(`create:white_seat`)
		.id(`barrel/create/seat_decolor`)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		if (dye != "white") {

			event.recipes.tfc.barrel_sealed(1000)
				.inputs(`create:white_seat`, Fluid.of(`tfc:${dye}_dye`, 288))
				.outputItem(`create:${dye}_seat`)
				.id(`barrel/create/${dye}_seat`)
		}
	})

	//#endregion

	//#region Механизм точности

	event.recipes.createSequencedAssembly([
		'create:precision_mechanism',
	], '#forge:plates/gold', [
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:small_springs/gold']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:small_gears/brass']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:bolts/wrought_iron']),
	]).transitionalItem('create:incomplete_precision_mechanism').loops(3).id('tfg:create/sequenced_assembly/precision_mechanism')

	event.recipes.gtceu.assembler('tfg:create/precision_mechanism')
		.itemInputs('#forge:plates/gold', '3x #forge:small_springs/gold', '3x #forge:small_gears/brass', '3x #forge:bolts/wrought_iron')
		.itemOutputs('create:precision_mechanism')
		.duration(2000)
		.EUt(20)

	//#endregion

	// #region Water Wheels

	event.shaped('create:water_wheel', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'gtceu:treated_wood_planks',
		B: '#tfg:shafts'
	}).id('create:shaped/water_wheel')

	event.shaped('create:large_water_wheel', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'gtceu:treated_wood_planks',
		B: 'create:water_wheel'
	}).id('create:shaped/large_water_wheel')

	// #endregion

	// #region Windmill Bearing

	event.shaped('create:windmill_bearing', [
		'FA ',
		'DBE',
		' C '
	], {
		A: 'gtceu:treated_wood_slab',
		B: 'create:andesite_casing',
		C: '#tfg:small_cogwheels',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/hammers',
		F: 'tfc:glue'
	}).id('create:shaped/windmill_bearing')

	// #endregion

	//#region Blaze burner

	event.shaped('create:blaze_burner', [
		'B B',
		'BAB',
		'CCC'
	], {
		A: '#forge:storage_blocks/coke',
		B: '#forge:rods/black_steel',
		C: '#forge:plates/black_steel',
	}).id('tfg:create/shaped/blaze_burner')

	//#endregion

	// #region So-called "Shit Glass"

	event.shaped('4x create:framed_glass',
		[
			'AA',
			'AA'
		], {
		A: 'minecraft:glass'
	}).id('tfg:create/framed_glass')

	event.shaped('4x create:tiled_glass',
		[
			'A A',
			'   ',
			'A A'
		], {
		A: 'minecraft:glass'
	}).id('tfg:create/tiled_glass')

	event.shaped('4x create:horizontal_framed_glass',
		[
			'AA',
			'  ',
			'AA'
		], {
		A: 'minecraft:glass'
	}).id('tfg:create/horizontal_framed_glass')

	event.shaped('4x create:vertical_framed_glass',
		[
			'A A',
			'A A'
		], {
		A: 'minecraft:glass'
	}).id('tfg:create/vertical_framed_glass')

	const CREATE_FRAMED_GLASS_WINDOWS =
		[
			'framed_glass',
			'tiled_glass',
			'horizontal_framed_glass',
			'vertical_framed_glass'
		]

	CREATE_FRAMED_GLASS_WINDOWS.forEach(x => {
		event.shapeless(`2x create:${x}_pane`,
			[
				`create:${x}`,
				'#forge:tools/saws'
			])
			.id(`tfg:create/shapeless/${x}_pane`)

		event.recipes.gtceu.cutter(`tfg:create/${x}_pane`)
			.itemInputs(`3x create:${x}`)
			.itemOutputs(`8x create:${x}_pane`)
			.duration(40)
			.EUt(7)
	})

	const CREATE_OTHER_GLASS_WINDOWS =
		[
			['dark_oak', 'tfc:wood/lumber/hickory'],
			['mangrove', 'tfc:wood/lumber/mangrove'],
			['ornate_iron', 'gtceu:wrought_iron_rod']
		]

	CREATE_OTHER_GLASS_WINDOWS.forEach(x => {
		event.shaped(`2x create:${x[0]}_window`,
			[
				' B ',
				'BAB'
			], {
			A: 'minecraft:glass',
			B: x[1]
		}).id(`tfg:create/shaped/${x[0]}_window`)

		event.shapeless(`2x create:${x[0]}_window_pane`,
			[
				`create:${x[0]}_window`,
				'#forge:tools/saws'
			])
			.id(`tfg:create/shapeless/${x[0]}_window_pane`)

		event.recipes.gtceu.cutter(`tfg:create/${x[0]}_window_pane`)
			.itemInputs(`3x create:${x[0]}_window`)
			.itemOutputs(`8x create:${x[0]}_window_pane`)
			.duration(40)
			.EUt(7)
	})

	//Allow automatic scraping by using sequenced assembly
	event.forEachRecipe({ type: 'tfc:scraping' }, r => {
		let originalRecipeIngredient = r.json.get("ingredient").get("item");
		let output = r.originalRecipeResult;

		event.recipes.createSequencedAssembly([output], originalRecipeIngredient, [
			event.recipes.createDeploying(originalRecipeIngredient, [originalRecipeIngredient, '#tfc:knives']).keepHeldItem()
		]).transitionalItem(originalRecipeIngredient).loops(16)
	})

	// #endregion

	//#region Decoration blocks

	const DECO_BLOCKS = [
		{ base: 'tfc:rock/raw/diorite', cut: 'create:cut_diorite', vanilla: 'minecraft:diorite' },
		// this is renamed to Cut Chert
		{ base: 'tfc:rock/raw/chert', cut: 'create:cut_granite', vanilla: 'minecraft:granite' },
		{ base: 'tfc:rock/raw/andesite', cut: 'create:cut_andesite', vanilla: 'minecraft:andesite' },
		{ base: 'tfc:rock/raw/limestone', cut: 'create:cut_limestone' },
		{ base: 'minecraft:deepslate', cut: 'create:cut_deepslate' },
		{ base: 'minecraft:dripstone_block', cut: 'create:cut_dripstone' },
		{ base: 'minecraft:calcite', cut: 'create:cut_calcite' }
	]

	DECO_BLOCKS.forEach(x => {
		event.shapeless(x.cut, [x.base, '#tfc:chisels', '#forge:tools/files']).id(`create:shapeless/chisel_${x.cut.split(':')[1]}`)

		event.recipes.gtceu.laser_engraver(`engrave_${x.cut.split(':')[1]}`)
			.itemInputs(x.base)
			.notConsumable('tfc:lens')
			.itemOutputs(x.cut)
			.duration(32)
			.EUt(GTValues.VA[GTValues.ULV])

		event.custom({
			type: 'vintageimprovements:laser_cutting',
			ingredients: [{ item: x.base }],
			results: [{item: x.cut }],
			energy: GTValues.VA[GTValues.ULV] * 32 * 4,
			maxChargeRate: GTValues.VA[GTValues.ULV] * 4
		}).id(`tfg:vi/laser/create/${x.cut.split(':')[1]}`)

		event.shaped(`2x create:layered_${x.cut.split('_')[1]}`, [
			'AA'
		], {
			A: x.cut
		})

		event.shaped(`2x create:${x.cut.split('_')[1]}_pillar`, [
			'A',
			'A'
		], {
			A: x.cut
		})

		// Stops the stonecutter recipe turning it back into vanilla stone
		if ("vanilla" in x) {
			event.replaceOutput({ mod: 'create' }, x.vanilla, x.base);
		}
	})

	//#endregion
	
	event.shaped('create:white_seat', [
		'DA ',
		'CBC'
	], {
		A: '#tfc:high_quality_cloth',
		B: '#minecraft:wooden_slabs',
		C: '#forge:screws',
		D: '#forge:tools/hammers'
	}).id('tfg:create/shaped/white_seat')

	event.shaped('create:brown_toolbox', [
		'CEC',
		'BAB',
		'DAD'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:plates/brass',
		C: '#forge:nuggets/brass',
		D: '#forge:screws',
		E: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/brown_toolbox')

	event.shaped('create:contraption_controls', [
		'EAF',
		'DBD',
		' C '
	], {
		A: '#minecraft:buttons',
		B: 'create:andesite_casing',
		C: 'create:electron_tube',
		D: '#forge:plates/wrought_iron',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/contraption_controls')

	event.shaped('create:wrench', [
		' BB',
		' C ',
		'AD '
	], {
		A: '#forge:rods/wooden',
		B: '#forge:plates/brass',
		C: '#tfg:small_cogwheels',
		D: '#forge:tools/hammers'
	}).id('tfg:create/shaped/wrench')

	event.shaped('create:goggles', [
		'DBD',
		'AEA',
		'C C'
	], {
		A: '#forge:rings/brass',
		B: '#forge:leather',
		C: 'tfc:lens',
		D: 'tfc:glue',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/goggles')

	event.shaped('create:analog_lever', [
		'CA',
		'DB'
	], {
		A: 'minecraft:lever',
		B: 'create:andesite_casing',
		C: '#forge:tools/wrenches',
		D: 'minecraft:redstone'
	}).id('tfg:create/shaped/analog_lever')

	event.shaped('create:redstone_link', [
		'FCB',
		'DAD',
		' E '
	], {
		A: 'create:brass_casing',
		B: '#gtceu:circuits/ulv',
		C: '#forge:small_springs',
		D: '#forge:plates/wrought_iron',
		E: '#forge:tools/wrenches',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/redstone_link')

	event.shaped('create:display_link', [
		'FED',
		'BAB',
		'EC '
	], {
		A: 'create:brass_casing',
		B: '#forge:springs/copper',
		C: '#forge:plates/brass',
		D: 'create:electron_tube',
		E: '#forge:screws',
		F: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/display_link')

	event.shaped('create:rotation_speed_controller', [
		'ECE',
		'BAB',
		'DFG'
	], {
		A: 'create:brass_casing',
		B: '#forge:small_gears/brass',
		C: 'create:electron_tube',
		D: '#forge:tools/wrenches',
		E: '#forge:small_springs/gold',
		F: '#tfg:shafts',
		G: '#forge:tools/hammers'
	}).id('tfg:create/shaped/rotation_speed_controller')

	event.shaped('create:sequenced_gearshift', [
		'DBE',
		'CAC',
		'   '
	], {
		A: 'create:brass_casing',
		B: 'create:electron_tube',
		C: '#tfg:small_cogwheels',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/sequenced_gearshift')

	event.shaped('create:mechanical_bearing', [
		'CBE',
		' A ',
		' D '
	], {
		A: 'create:andesite_casing',
		B: '#minecraft:plates/wrought_iron',
		C: 'tfc:glue',
		D: '#tfg:small_cogwheels',
		E: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/mechanical_bearing')

	event.shaped('create:gantry_carriage', [
		'DCE',
		' A ',
		' B '
	], {
		A: 'create:andesite_casing',
		B: '#tfg:small_cogwheels',
		C: '#minecraft:wooden_slabs',
		D: 'tfc:glue',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/gantry_carriage')

	event.shaped('create:weighted_ejector', [
		' B ',
		' CE',
		'DA '
	], {
		A: 'create:andesite_casing',
		B: '#forge:plates/wrought_iron',
		C: '#forge:springs/wrought_iron',
		D: '#tfg:small_cogwheels',
		E: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/weighted_ejector')

	event.shaped('create:turntable', [
		'DA ',
		'CBC'
	], {
		A: '#create:seats',
		B: '#minecraft:wooden_slabs',
		C: '#forge:screws',
		D: '#forge:tools/hammers'
	}).id('tfg:create/shaped/turntable')

	event.shaped('create:gearshift', [
		' C ',
		'DAE',
		' B '
	], {
		A: 'create:andesite_casing',
		B: '#tfg:small_cogwheels',
		C: 'minecraft:redstone',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/gearshift')

	event.shaped('create:clutch', [
		' C ',
		'DAE',
		' B '
	], {
		A: 'create:andesite_casing',
		B: '#tfg:shafts',
		C: 'minecraft:redstone',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/clutch')
}
