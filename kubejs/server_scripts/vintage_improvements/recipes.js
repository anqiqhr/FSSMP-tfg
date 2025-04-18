// priority: 0

function registerVintageImprovementsRecipes(event) {

	event.remove({ mod: 'vintageimprovements' })

	// #region Machines

	event.shaped('vintageimprovements:spring_coiling_machine', [
		'CDF',
		'CAF',
		'EBE'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'greate:steel_cogwheel',
		C: '#forge:rods/steel',
		D: '#forge:double_ingots/black_steel',
		E: '#forge:small_gears/steel',
		F: '#gtceu:circuits/ulv'
	}).id('tfg:vi/shaped/spring_coiling_machine')

	event.shaped('vintageimprovements:vacuum_chamber', [
		'EBE',
		'DAG',
		'FCF'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'greate:steel_mechanical_pump',
		C: 'create:mechanical_piston',
		D: '#forge:springs/wrought_iron',
		E: 'create:electron_tube',
		F: '#forge:plates/black_steel',
		G: 'create:precision_mechanism'
	}).id('tfg:vi/shaped/vacuum_chamber')

	event.shaped('vintageimprovements:vibrating_table', [
		'BCB',
		'DAD',
		'BEB'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: '#forge:springs/wrought_iron',
		C: '#forge:plates/black_steel',
		D: '#gtceu:circuits/ulv',
		E: 'greate:steel_cogwheel'
	}).id('tfg:vi/shaped/vibrating_table')

	event.recipes.create.mechanical_crafting('vintageimprovements:centrifuge', [
		'   A   ',
		'   B   ',
		'  DAD  ',
		'ABACABA',
		'  EAE  ',
		'   B   ',
		'   A   '
	], {
		A: '#forge:plates/treated_wood',
		B: '#forge:rods/long/black_steel',
		C: 'create:andesite_casing',
		D: '#forge:frames/treated_wood',
		E: 'greate:steel_cogwheel'
	}).id('tfg:vi/mechanical_crafting/centrifuge')

	event.shaped('vintageimprovements:curving_press', [
		'DBD',
		'FAF',
		'CEC'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'greate:steel_shaft',
		C: '#forge:rods/steel',
		D: '#gtceu:circuits/ulv',
		E: '#forge:plates/black_steel',
		F: '#forge:springs/wrought_iron'
	}).id('tfg:vi/shaped/curving_press')

	event.shapeless('vintageimprovements:curving_press', ['create:mechanical_press', '#forge:tools/files'])
		.id('tfg:shapeless/mech_press_converting')

	event.shaped('vintageimprovements:helve_hammer', [
		'F A',
		'BBE',
		'C D'
	], {
		A: '#forge:frames/bronze',
		B: '#tfg:hardwood',
		C: '#forge:double_ingots/iron',
		D: 'greate:andesite_alloy_cogwheel',
		E: '#minecraft:planks',
		F: '#forge:tools/hammers'
	}).id('tfg:vi/shaped/helve_hammer_bronze')

	event.shaped('vintageimprovements:helve_hammer', [
		'F A',
		'BBE',
		'C D'
	], {
		A: '#forge:frames/black_bronze',
		B: '#tfg:hardwood',
		C: '#forge:double_ingots/iron',
		D: 'greate:andesite_alloy_cogwheel',
		E: '#minecraft:planks',
		F: '#forge:tools/hammers'
	}).id('tfg:vi/shaped/helve_hammer_black_bronze')

	event.shaped('vintageimprovements:helve_hammer', [
		'F A',
		'BBE',
		'C D'
	], {
		A: '#forge:frames/bismuth_bronze',
		B: '#tfg:hardwood',
		C: '#forge:double_ingots/iron',
		D: 'greate:andesite_alloy_cogwheel',
		E: '#minecraft:planks',
		F: '#forge:tools/hammers'
	}).id('tfg:vi/shaped/helve_hammer_bismuth_bronze')

	event.recipes.create.mechanical_crafting('vintageimprovements:lathe', [
		'DEEFE',
		'AB CG',
		'DEEFE'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'minecraft:piston',
		C: 'minecraft:diamond',
		D: '#forge:plates/treated_wood',
		E: '#forge:rods/black_steel',
		F: '#gtceu:circuits/ulv',
		G: 'create:precision_mechanism'
	}).id('tfg:vi/mechanical_crafting/lathe')

	event.shaped('vintageimprovements:laser', [
		'FBF',
		'EAE',
		'DCD'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'create:precision_mechanism',
		C: 'tfc:lens',
		D: 'gtceu:red_alloy_single_wire',
		E: 'minecraft:piston',
		F: '#gtceu:circuits/ulv'
	}).id('tfg:vi/shaped/laser')

	// #endregion

	// #region Components

	event.recipes.createSequencedAssembly([
		'vintageimprovements:redstone_module',
	], '#forge:plates/red_alloy', [
		event.recipes.createDeploying('vintageimprovements:incomplete_redstone_module', ['vintageimprovements:incomplete_redstone_module', '#forge:small_gears/brass']),
		event.recipes.createDeploying('vintageimprovements:incomplete_redstone_module', ['vintageimprovements:incomplete_redstone_module', '#forge:bolts/red_alloy']),
		event.recipes.createFilling('vintageimprovements:incomplete_redstone_module', ['vintageimprovements:incomplete_redstone_module', Fluid.of('gtceu:redstone', 144)]),
	]).transitionalItem('vintageimprovements:incomplete_redstone_module').loops(1).id('tfg:vi/sequenced_assembly/redstone_module')

	event.recipes.gtceu.assembler('tfg:vi/redstone_module')
		.itemInputs('#forge:plates/red_alloy', '#forge:small_gears/brass', '#forge:bolts/red_alloy')
		.inputFluids(Fluid.of('gtceu:redstone', 144))
		.itemOutputs('vintageimprovements:redstone_module')
		.duration(400)
		.EUt(20)

	event.shaped('vintageimprovements:recipe_card', [
		' B ',
		'CA ',
		' B '
	], {
		A: '#forge:plates/brass',
		B: '#forge:screws/wrought_iron',
		C: '#forge:tools/screwdrivers'
	}).id('tfg:vi/shaped/recipe_card')

	event.shaped('vintageimprovements:helve_hammer_slot_cover', [
		'B B',
		'CA ',
		'B B'
	], {
		A: '#forge:plates/brass',
		B: '#forge:screws/wrought_iron',
		C: '#forge:tools/screwdrivers'
	})

	// #endregion

	//#region Hammer

	const STARTING_BLOWS = 6;

	// Tier 1
	let HAMMERING_MATERIALS = [
		{ material: GTMaterials.Copper, blows: STARTING_BLOWS },
		{ material: GTMaterials.Zinc, blows: STARTING_BLOWS },
		{ material: GTMaterials.Nickel, blows: STARTING_BLOWS },
		{ material: GTMaterials.Gold, blows: STARTING_BLOWS },
		{ material: GTMaterials.Bismuth, blows: STARTING_BLOWS },
		{ material: GTMaterials.RoseGold, blows: STARTING_BLOWS },
		{ material: GTMaterials.SterlingSilver, blows: STARTING_BLOWS }
	]

	let HAMMERING_ITEMS = [
		{ input: 'tfc:raw_iron_bloom', output: 'tfc:refined_iron_bloom', blows: STARTING_BLOWS },
		{ input: 'tfc:refined_iron_bloom', output: 'gtceu:wrought_iron_ingot', blows: STARTING_BLOWS }
	]

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'copper');
		x.blows--;
	})

	// Tier 2
	HAMMERING_MATERIALS.push({ material: GTMaterials.Bronze, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlackBronze, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BismuthBronze, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.Brass, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.RedAlloy, blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'bronze');
		generateHammeringRecipe(event, x.material, x.blows, 'black_bronze');
		generateHammeringRecipe(event, x.material, x.blows, 'bismuth_bronze');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'bronze');
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'black_bronze');
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'bismuth_bronze');
		x.blows--;
	})

	// Tier 3
	HAMMERING_MATERIALS.push({ material: GTMaterials.TinAlloy, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.Iron, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.WroughtIron, blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/pig_iron', output: 'tfc:metal/ingot/high_carbon_steel', blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/high_carbon_steel', output: 'gtceu:steel_ingot', blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'wrought_iron');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'wrought_iron');
		x.blows--;
	})

	// Tier 4
	HAMMERING_MATERIALS.push({ material: GTMaterials.Steel, blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/high_carbon_black_steel', output: 'tfc:metal/ingot/black_steel', blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'steel');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'steel');
		x.blows--;
	})

	// Tier 5
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlackSteel, blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/high_carbon_red_steel', output: 'tfc:metal/ingot/red_steel', blows: STARTING_BLOWS })
	HAMMERING_ITEMS.push({ input: 'tfc:metal/ingot/high_carbon_blue_steel', output: 'tfc:metal/ingot/blue_steel', blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'black_steel');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'black_steel');
		x.blows--;
	})

	// Tier 6
	HAMMERING_MATERIALS.push({ material: GTMaterials.RedSteel, blows: STARTING_BLOWS })
	HAMMERING_MATERIALS.push({ material: GTMaterials.BlueSteel, blows: STARTING_BLOWS })

	HAMMERING_MATERIALS.forEach(x => {
		generateHammeringRecipe(event, x.material, x.blows, 'red_steel');
		generateHammeringRecipe(event, x.material, x.blows, 'blue_steel');
		x.blows--;
	})
	HAMMERING_ITEMS.forEach(x => {
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'red_steel');
		generateHammeringRecipeFromItem(event, x.input, x.output, x.blows, 'blue_steel');
		x.blows--;
	})
	// #endregion


	GTMaterialRegistry.getRegisteredMaterials().forEach(material => {

		// #region Coiling

		if (material.hasFlag(MaterialFlags.GENERATE_ROD) && material.hasFlag(MaterialFlags.GENERATE_SPRING_SMALL)) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [ChemicalHelper.get(TagPrefix.rod, material, 1)],
				results: [ChemicalHelper.get(TagPrefix.springSmall, material, 1)],
				processingTime: (material.getMass() / 2) * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_small_spring`)
		}

		if (material.hasFlag(MaterialFlags.GENERATE_LONG_ROD) && material.hasFlag(MaterialFlags.GENERATE_SPRING)) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [ChemicalHelper.get(TagPrefix.rodLong, material, 1)],
				results: [ChemicalHelper.get(TagPrefix.spring, material, 1)],
				processingTime: material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_spring`)
		}

		const singleWire = ChemicalHelper.get(TagPrefix.wireGtSingle, material, 2)
		if (singleWire != null) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [ChemicalHelper.get(TagPrefix.ingot, material, 1)],
				results: [singleWire],
				processingTime: material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_single_wire`)
		}

		if (material.hasFlag(MaterialFlags.GENERATE_FINE_WIRE) && singleWire != null) {
			event.custom({
				type: 'vintageimprovements:coiling',
				ingredients: [ChemicalHelper.get(TagPrefix.wireGtSingle, material, 1)],
				results: [ChemicalHelper.get(TagPrefix.wireFine, material, 4)],
				processingTime: material.getMass() * 3 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/coiling/${material.getName()}_fine_wire`)
		}

		// #endregion

		// #region Vibrating

		if (material.hasProperty(PropertyKey.ORE) && material.hasProperty(PropertyKey.GEM)) {

			let highYield = material.hasFlag(MaterialFlags.HIGH_SIFTER_OUTPUT)

			// aaaaargh I hate these custom type recipes
			let gem = `gtceu:${material.getName()}_gem`;
			if (material == GTMaterials.Coal)
				gem = 'minecraft:coal'
			else if (material == GTMaterials.Diamond)
				gem = 'minecraft:diamond'
			else if (material == GTMaterials.Emerald)
				gem = 'minecraft:emerald'
			else if (material == GTMaterials.Lapis)
				gem = 'minecraft:lapis_lazuli'
			else if (material == GTMaterials.NetherQuartz)
				gem = 'minecraft:quartz'
			else if (material == GTMaterials.Amethyst)
				gem = 'minecraft:amethyst_shard'
			else if (material == GTMaterials.CertusQuartz)
				gem = 'ae2:certus_quartz_crystal'

			event.custom({
				type: 'vintageimprovements:vibrating',
				ingredients: [{ item: `gtceu:purified_${material.getName()}_ore` }],
				results: [
					{ item: `gtceu:exquisite_${material.getName()}_gem`, chance: highYield ? 0.05 : 0.03 },
					{ item: `gtceu:flawless_${material.getName()}_gem`, chance: highYield ? 0.15 : 0.10 },
					{ item: gem, chance: highYield ? 0.50 : 0.35 },
					{ item: `gtceu:pure_${material.getName()}_dust`, chance: highYield ? 0.25 : 0.50 },
					{ item: `gtceu:flawed_${material.getName()}_gem`, chance: highYield ? 0.20 : 0.25 },
					{ item: `gtceu:chipped_${material.getName()}_gem`, chance: highYield ? 0.30 : 0.35 }
				],
				processingTime: 200 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/vibrating/${material.getName()}`)
		}

		// #endregion

		// #region Lathe

		if (material.hasFlag(MaterialFlags.GENERATE_ROD)) {
			let latheInput = material.hasProperty(PropertyKey.GEM)
				? ChemicalHelper.get(TagPrefix.gem, material, 1)
				: ChemicalHelper.get(TagPrefix.ingot, material, 1)

			if (latheInput != null) {
				event.custom({
					type: 'vintageimprovements:turning',
					ingredients: [latheInput],
					results: [ChemicalHelper.get(TagPrefix.rod, material, 2)],
					processingTime: material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
				}).id(`tfg:vi/lathe/${material.getName()}_to_rod`)
			}
		}

		if (material.hasFlag(MaterialFlags.GENERATE_BOLT_SCREW)) {
			event.custom({
				type: 'vintageimprovements:turning',
				ingredients: [ChemicalHelper.get(TagPrefix.bolt, material, 1)],
				results: [ChemicalHelper.get(TagPrefix.screw, material, 1)],
				processingTime: Math.max(1, material.getMass() / 8) * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/lathe/${material.getName()}_bolt_to_screw`)
		}

		// #endregion

		// #region Pressurizing

		if (material.hasFlag(TFGMaterialFlags.GENERATE_DOUBLE_INGOTS)) {
			const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

			event.custom({
				type: 'vintageimprovements:pressurizing',
				ingredients: [ingotItem, ingotItem, { item: 'tfc:powder/flux' }],
				"heatRequirement": "heated",
				results: [ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)],
				processingTime: material.getMass() * 6 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/pressurizing/${material.getName()}_double_ingot`)
			
			const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

			event.custom({
				type: 'vintageimprovements:pressurizing',
				ingredients: [plateItem, plateItem, { item: 'tfc:powder/flux' }],
				"heatRequirement": "heated",
				results: [ChemicalHelper.get(TagPrefix.plateDouble, material, 1)],
				processingTime: material.getMass() * 6 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/pressurizing/${material.getName()}_double_plate`)
		}

		// #endregion
	})


	// #region Vibrating

	event.custom({
		type: 'vintageimprovements:vibrating',
		ingredients: [{ tag: 'tfc:rock/gravel' }],
		results: [
			{ item: 'minecraft:flint' },
			{ item: 'minecraft:flint', chance: 0.9 },
			{ item: 'minecraft:flint', chance: 0.8 },
			{ item: 'minecraft:flint', chance: 0.6 },
			{ item: 'minecraft:flint', chance: 0.33 },
			{ item: 'minecraft:flint', chance: 0.25 }
		],
		processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id(`tfg:vi/vibrating/gravel`)

	global.TFC_STONE_TYPES.forEach(stone => {
		event.custom({
			type: 'vintageimprovements:vibrating',
			ingredients: [{ item: `tfc:deposit/native_gold/${stone}` }],
			results: [ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Gold, 1)],
			processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
		}).id(`tfg:vi/vibrating/deposits/${stone}_gold`)

		event.custom({
			type: 'vintageimprovements:vibrating',
			ingredients: [{ item: `tfc:deposit/native_copper/${stone}` }],
			results: [ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Copper, 1)],
			processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
		}).id(`tfg:vi/vibrating/deposits/${stone}_copper`)

		event.custom({
			type: 'vintageimprovements:vibrating',
			ingredients: [{ item: `tfc:deposit/native_silver/${stone}` }],
			results: [ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Silver, 1)],
			processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
		}).id(`tfg:vi/vibrating/deposits/${stone}_silver`)

		event.custom({
			type: 'vintageimprovements:vibrating',
			ingredients: [{ item: `tfc:deposit/cassiterite/${stone}` }],
			results: [ChemicalHelper.get(TagPrefix.rawOre, GTMaterials.Cassiterite, 1)],
			processingTime: 100 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
		}).id(`tfg:vi/vibrating/deposits/${stone}_cassiterite`)
	})

	// #endregion

	// #region Lathe

	event.custom({
		type: 'vintageimprovements:turning',
		ingredients: [{ tag: 'forge:glass' }],
		results: [{ item: 'tfc:lens' }],
		processingTime: 100
	}).id(`tfg:vi/lathe/lens`)

	// #endregion

	// #region Curving Press

	event.forEachRecipe([{ type: 'gtceu:extruder' }],
		recipe => {
			let r = JSON.parse(recipe.json)

			// LV recipes only
			let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null;
			if (!(EUt <= 32)) { return }
			// Skip this one
			if (r.outputs.item[0].content.ingredient.item == "gtceu:nan_certificate") { return }

			let input = r.inputs.item[0].content.ingredient;
			input.count = r.inputs.item[0].content.count;

			let output = r.outputs.item[0].content.ingredient;
			output.count = r.outputs.item[0].content.count;

			event.custom({
				type: 'vintageimprovements:curving',
				ingredients: [ input ],
				itemAsHead: r.inputs.item[1].content.ingredient.item,
				results: [ output ],
				processingTime: r.duration * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/curving/${recipe.getId().split(':')[1]}`)
		}
	)

	// #endregion

	// #region Centrifuge

	// Copied from https://github.com/ThePansmith/Monifactory/blob/15c109298104e0c0b5083b266264bd6c158c6154/kubejs/server_scripts/mods/optionalCompats/create.js#L251
	event.forEachRecipe([{ type: 'gtceu:centrifuge' }],
		recipe => {
			let r = JSON.parse(recipe.json)

			// ULV recipes only
			let EUt = (r.tickInputs && r.tickInputs.eu) ? r.tickInputs.eu[0].content : null;
			if (!(EUt <= 8)) { return }

			let inputs = [];
			if (r.inputs.item) {
				r.inputs.item.forEach(i => {
					let ins = i.content.ingredient;

					if (i.content.count)
						ins.count = i.content.count;

					inputs.push(ins)
				})
			}
			else return;

			let outputs = [];
			if (r.outputs.item) {
				r.outputs.item.forEach(i => {
					let out = i.content.ingredient;

					if (i.content.count)
						out.count = i.content.count;
					
					if (i.chance != 0 && i.chance != 10000)
						out.chance = i.chance / 10000;

					outputs.push(out)
				})
			}
			else return;

			event.custom({
				type: 'vintageimprovements:centrifugation',
				ingredients: inputs,
				results: outputs,
				processingTime: r.duration * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
			}).id(`tfg:vi/${recipe.getId().split(':')[1]}`)
		}
	)

	// Fix weird inconsistency
	event.replaceOutput({ id: 'tfg:vi/centrifuge/sticky_resin_separation' }, 'gtceu:raw_rubber_dust', 'gtceu:carbon_dust')

	// #endregion

	// #region Vacuum

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'tfc:glue' }],
		results: [{ fluid: 'gtceu:glue', amount: 50 }],
		heatRequirement: "heated",
		processingTime: 100
	}).id('tfg:vi/vacuumizing/glue')

	// TODO: Remove me when we upgrade Greate and can just slap rubber onto wires again
	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'gtceu:rubber_dust' }],
		results: [{ fluid: 'gtceu:rubber', amount: 144 }],
		heatRequirement: "heated",
		processingTime: 100
	}).id('tfg:vi/vacuum/rubber')

	// #endregion
}

function generateHammeringRecipe(event, material, blows, anvil) {
	event.custom({
		type: 'vintageimprovements:hammering',
		hammerBlows: blows,
		ingredients: [ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)],
		results: [ChemicalHelper.get(TagPrefix.plate, material, 1)],
		anvilBlock: `tfc:metal/anvil/${anvil}`
	}).id(`tfg:vi/hammer/${material.getName()}_plate_on_${anvil}_anvil`)
}

function generateHammeringRecipeFromItem(event, input, output, blows, anvil) {
	event.custom({
		type: 'vintageimprovements:hammering',
		hammerBlows: blows,
		ingredients: [{ item: input }],
		results: [{ item: output }],
		anvilBlock: `tfc:metal/anvil/${anvil}`
	}).id(`tfg:vi/hammer/${input.replace(/[#:]/g, '_')}_on_${anvil}_anvil`)
}