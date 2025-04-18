/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerAFCRecipes = (event) => {

	// #region Removes

	global.AFC_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.remove({ id: "afc:pot/rubber" })
	event.remove({ id: "afc:tree_tapping/hevea_latex" })
	event.remove({ id: "afc:tree_tapping/rubber_fig_latex" })

	// #endregion

	// #region Wood crafts

	global.AFC_WOOD_TYPES.forEach(wood => {
		event.remove({ id: `afc:crafting/wood/${wood}_axle` })
		event.remove({ id: `afc:crafting/wood/${wood}_bladed_axle` })
		event.remove({ id: `afc:crafting/wood/${wood}_encased_axle` })
		event.remove({ id: `afc:crafting/wood/${wood}_clutch` })
		event.remove({ id: `afc:crafting/wood/${wood}_gear_box` })
		event.remove({ id: `afc:crafting/wood/${wood}_water_wheel` })

		// Бревна -> Пиломатериалы
		generateCutterRecipe(event, `#afc:${wood}_logs`, `16x afc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_log`)

		// Доски -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}`, `4x afc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_planks`)

		// Ступень -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}_stairs`, `3x afc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_stairs`)


		// Плита -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}_slab`, `2x afc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_slab`)

		// ? -> Деревянная нажимная пластина
		event.shaped(`afc:wood/planks/${wood}_pressure_plate`, [
			'ABA',
			'CDC',
			'AEA'
		], {
			A: '#forge:screws/wood',
			B: '#tfc:hammers',
			C: `afc:wood/planks/${wood}_slab`,
			D: '#forge:springs',
			E: '#forge:tools/screwdrivers'
		}).id(`afc:crafting/wood/${wood}_pressure_plate`)

		event.recipes.gtceu.assembler(`${wood}_pressure_plate`)
			.itemInputs('#forge:springs', `2x afc:wood/planks/${wood}_slab`)
			.circuit(0)
			.itemOutputs(`2x afc:wood/planks/${wood}_pressure_plate`)
			.duration(50)
			.EUt(2)

		// ? -> Деревянная кнопка
		event.remove({ id: `afc:crafting/wood/${wood}_button` })

		generateCutterRecipe(event, `afc:wood/planks/${wood}_pressure_plate`, `6x afc:wood/planks/${wood}_button`, 50, 2, `${wood}_button`)
	})

	// #endregion

	event.recipes.tfc.anvil('afc:tree_tap', '#forge:ingots/copper', ["hit_last", "upset_second_last", "upset_third_last"])
		.tier(1)
		.bonus(false)
		.id('afc:anvil/tree_tap')

	event.recipes.gtceu.assembler('afc:tree_tap')
		.itemInputs('#forge:ingots/copper')
		.circuit(3)
		.itemOutputs('afc:tree_tap')
		.duration(50)
		.EUt(7)

	// TreeTap Heating
	event.recipes.tfc.heating('afc:tree_tap', 1080)
		.resultFluid(Fluid.of('gtceu:copper', 144))
		.id('tfg:heating/tree_tap')

	//Custom rubber and hevea tappings
	//Hevea is the most efficient but requires the warmest temperatures
	//Rubber fig requires average temperatures and its mildly efficient
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/hevea"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(22)
		.id("tfg:tree_tapping/latex/hevea")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_hevea"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(22)
		.id("tfg:tree_tapping/latex/ancient_hevea")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(12)
		.id("tfg:tree_tapping/latex/rubber_fig")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(12)
		.id("tfg:tree_tapping/latex/ancient_rubber_fig")

	//Kapok Grandfathered, least efficient but works as long as the temperature is not freezing
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/kapok"))
		.resultFluid(Fluid.of("tfg:latex", 1))
		.minTemp(1)
		.id("tfg:tree_tapping/kapok_latex")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_kapok"))
		.resultFluid(Fluid.of("tfg:latex", 1))
		.minTemp(1)
		.id("tfg:tree_tapping/ancient_kapok_latex")


	// Pine/etc resin
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.id("tfg:tree_tapping/aspen_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.id("tfg:tree_tapping/ancient_aspen_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.id("tfg:tree_tapping/spruce_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.id("tfg:tree_tapping/ancient_spruce_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.id("tfg:tree_tapping/white_cedar_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.id("tfg:tree_tapping/ancient_white_cedar_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/douglas_fir"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.id("tfg:tree_tapping/douglas_fir_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_douglas_fir"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.id("tfg:tree_tapping/ancient_douglas_fir_resin")

	//#region Выход: Сырая резиновая пыль

	// Из бревна капока
	event.recipes.gtceu.extractor('raw_rubber_from_log')
		.itemInputs('#tfg:latex_logs')
		.itemOutputs('gtceu:raw_rubber_dust')
		.duration(300)
		.EUt(2)

	// Из саженца капока
	event.recipes.gtceu.extractor('raw_rubber_from_sapling')
		.itemInputs('1x #tfg:rubber_saplings')
		.itemOutputs('gtceu:raw_rubber_dust')
		.duration(300)
		.EUt(2)

	// Из листвы капока
	event.recipes.gtceu.extractor('raw_rubber_from_leaves')
		.itemInputs('16x #tfg:rubber_leaves')
		.itemOutputs('gtceu:raw_rubber_dust')
		.duration(300)
		.EUt(2)

	event.replaceOutput({ id: 'gtceu:centrifuge/sticky_resin_separation' }, 'gtceu:raw_rubber_dust', 'gtceu:carbon_dust')

	//#endregion

	// Из бревна капока
	event.recipes.gtceu.centrifuge('rubber_log_separation')
		.itemInputs('#tfg:latex_logs')
		.chancedOutput('gtceu:raw_rubber_dust', 5000, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:sticky_resin', 2500, 600)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(200)
		.EUt(20)

	event.recipes.gtceu.centrifuge('conifer_log_separation')
		.itemInputs('#tfg:rosin_logs')
		.chancedOutput('tfg:conifer_rosin', 7500, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:sticky_resin', 2500, 600)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(200)
		.EUt(20)

	event.recipes.gtceu.centrifuge('maple_syrup_log_separation')
		.itemInputs('#tfc:maple_logs')
		.chancedOutput('afc:maple_sugar', 7500, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60), Fluid.of('afc:maple_syrup', 100))
		.duration(200)
		.EUt(20)

	event.recipes.gtceu.centrifuge('birch_syrup_log_separation')
		.itemInputs('#tfc:birch_logs')
		.chancedOutput('afc:birch_sugar', 7500, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60), Fluid.of('afc:birch_syrup', 100))
		.duration(200)
		.EUt(20)

	//#endregion

	event.recipes.gtceu.fluid_solidifier('maple_syrup')
		.inputFluids(Fluid.of('afc:maple_syrup', 100))
		.itemOutputs('afc:maple_sugar')
		.duration(500)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_solidifier('birch_syrup')
		.inputFluids(Fluid.of('afc:birch_syrup', 100))
		.itemOutputs('afc:birch_sugar')
		.duration(500)
		.EUt(GTValues.VA[GTValues.ULV])
}