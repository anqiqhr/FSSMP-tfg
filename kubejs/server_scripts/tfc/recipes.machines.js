﻿// priority: 0

function registerTFCMachineRecipes(event) {
	
	// Бумага
	event.recipes.gtceu.cutter('tfg:unrefined_paper')
		.itemInputs('tfc:unrefined_paper')
		.itemOutputs('minecraft:paper')
		.duration(100)
		.EUt(7)

	// Limewater
	event.recipes.gtceu.mixer('tfg:limewater_from_lime')
		.itemInputs('tfc:powder/lime')
		.inputFluids(Fluid.of('water', 500))
		.outputFluids(Fluid.of('tfc:limewater', 500))
		.duration(20)
		.EUt(16)

	event.recipes.gtceu.mixer('tfg:limewater_from_flux')
		.itemInputs('tfc:powder/flux')
		.inputFluids(Fluid.of('water', 500))
		.outputFluids(Fluid.of('tfc:limewater', 500))
		.duration(20)
		.EUt(16)

	// Tannin
	event.recipes.gtceu.chemical_bath('tfg:tannin')
		.itemInputs('#tfc:makes_tannin')
		.inputFluids(Fluid.of('water', 1000))
		.outputFluids(Fluid.of('tfc:tannin', 1000))
		.duration(2400)
		.EUt(16)

	// Soaked hides
	event.recipes.gtceu.chemical_bath('tfg:small_soaked_hide')
		.itemInputs('tfc:small_raw_hide')
		.inputFluids(Fluid.of('tfc:limewater', 300))
		.itemOutputs('tfc:small_soaked_hide')
		.duration(1600)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:medium_soaked_hide')
		.itemInputs('tfc:medium_raw_hide')
		.inputFluids(Fluid.of('tfc:limewater', 400))
		.itemOutputs('tfc:medium_soaked_hide')
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:large_soaked_hide')
		.itemInputs('tfc:large_raw_hide')
		.inputFluids(Fluid.of('tfc:limewater', 500))
		.itemOutputs('tfc:large_soaked_hide')
		.duration(3200)
		.EUt(16)

	// Scraped Hides
	event.recipes.gtceu.cutter('tfg:small_scraped_hide')
		.itemInputs('tfc:small_soaked_hide')
		.itemOutputs('tfc:small_scraped_hide')
		.duration(100)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:medium_scraped_hide')
		.itemInputs('tfc:medium_soaked_hide')
		.itemOutputs('tfc:medium_scraped_hide')
		.duration(100)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:large_scraped_hide')
		.itemInputs('tfc:large_soaked_hide')
		.itemOutputs('tfc:large_scraped_hide')
		.duration(100)
		.EUt(7)

	// Prepared hides
	event.recipes.gtceu.chemical_bath('tfg:small_prepared_hide')
		.itemInputs('tfc:small_soaked_hide')
		.inputFluids(Fluid.of('water', 300))
		.itemOutputs('tfc:small_prepared_hide')
		.duration(1600)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:medium_prepared_hide')
		.itemInputs('tfc:medium_soaked_hide')
		.inputFluids(Fluid.of('water', 400))
		.itemOutputs('tfc:medium_prepared_hide')
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:large_prepared_hide')
		.itemInputs('tfc:large_soaked_hide')
		.inputFluids(Fluid.of('water', 500))
		.itemOutputs('tfc:large_prepared_hide')
		.duration(3200)
		.EUt(16)

	// Leather
	event.recipes.gtceu.chemical_bath('tfg:small_leather')
		.itemInputs('tfc:small_prepared_hide')
		.inputFluids(Fluid.of('tfc:tannin', 300))
		.itemOutputs('minecraft:leather')
		.duration(1600)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:medium_leather')
		.itemInputs('tfc:medium_prepared_hide')
		.inputFluids(Fluid.of('tfc:tannin', 400))
		.itemOutputs('2x minecraft:leather')
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:large_leather')
		.itemInputs('tfc:large_prepared_hide')
		.inputFluids(Fluid.of('tfc:tannin', 500))
		.itemOutputs('3x minecraft:leather')
		.duration(3200)
		.EUt(16)

	//#region Рецепты плоского теста

	global.TFC_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.mixer(element.name)
			.itemInputs(element.input)
			.inputFluids(Fluid.of('minecraft:water', 100))
			.itemOutputs(element.output)
			.duration(300)
			.EUt(16)
			.circuit(3)
	})

	//#endregion

	//#region Молды в ассемблере

	for (let i = 0; i < global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS.length; i++) {
		let element = global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS[i];

		event.recipes.gtceu.assembler(`tfg:tfc/${element.name}`)
			.itemInputs(element.input)
			.circuit(i)
			.itemOutputs(element.output)
			.duration(450)
			.EUt(2)
	}

	//#endregion

	//#region Стеклянные смеси в бутылки в ассемблере

	global.TFC_BATCH_TO_BOTTLE_ASSEMBLING_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.alloy_smelter(`tfg:tfc/${element.name}`)
			.itemInputs(element.input)
			.notConsumable('gtceu:bottle_casting_mold')
			.itemOutputs(element.output)
			.duration(100)
			.EUt(2)
	})

	//#endregion

	//#region СЫЫЫР 0_0

	// Rennet
	event.recipes.gtceu.fermenter('tfg:fermenter/vegetable_rennet')
		.itemInputs('#tfg:ferments_to_rennet')
		.itemOutputs('firmalife:rennet')
		.duration(400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/biomass_rennet')
		.inputFluids(Fluid.of('gtceu:fermented_biomass', 100))
		.itemOutputs('firmalife:rennet')
		.duration(2400)
		.EUt(16)

	// Curdled milk
	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_milk')
		.inputFluids(Fluid.of('minecraft:milk', 1000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('tfc:curdled_milk'))
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_yak_milk')
		.inputFluids(Fluid.of('firmalife:yak_milk', 1000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('firmalife:curdled_yak_milk'))
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_goat_milk')
		.inputFluids(Fluid.of('firmalife:goat_milk', 1000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('firmalife:curdled_goat_milk'))
		.duration(2400)
		.EUt(16)

	//Curds
	event.recipes.gtceu.fermenter('tfg:fermenter/milk_curd')
		.inputFluids(Fluid.of('tfc:curdled_milk', 1000))
		.itemOutputs('firmalife:food/milk_curd')
		.duration(1200)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/yak_curd')
		.inputFluids(Fluid.of('firmalife:curdled_yak_milk', 1000))
		.itemOutputs('firmalife:food/yak_curd')
		.duration(1200)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/goat_curd')
		.inputFluids(Fluid.of('firmalife:curdled_goat_milk', 1000))
		.itemOutputs('firmalife:food/goat_curd')
		.duration(1200)
		.EUt(16)

	// Cheese wheels
	event.recipes.gtceu.fermenter('tfg:fermenter/gouda_wheel')
		.inputFluids(Fluid.of('tfc:salt_water', 750))
		.itemInputs('3x firmalife:food/milk_curd')
		.itemOutputs('firmalife:gouda_wheel')
		.duration(12000)
		.EUt(24)

	event.recipes.gtceu.fermenter('tfg:fermenter/shosha_wheel')
		.inputFluids(Fluid.of('tfc:salt_water', 750))
		.itemInputs('3x firmalife:food/yak_curd')
		.itemOutputs('firmalife:shosha_wheel')
		.duration(12000)
		.EUt(24)

	event.recipes.gtceu.fermenter('tfg:fermenter/feta_wheel')
		.inputFluids(Fluid.of('tfc:salt_water', 750))
		.itemInputs('3x firmalife:food/goat_curd')
		.itemOutputs('firmalife:feta_wheel')
		.duration(12000)
		.EUt(24)

	// Cutting
	event.recipes.gtceu.cutter('tfg:cutter/gouda')
		.itemInputs('firmalife:gouda_wheel')
		.itemOutputs('4x firmalife:food/gouda')
		.duration(40)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:cutter/shosha')
		.itemInputs('firmalife:shosha_wheel')
		.itemOutputs('4x firmalife:food/shosha')
		.duration(40)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:cutter/feta')
		.itemInputs('firmalife:feta_wheel')
		.itemOutputs('4x firmalife:food/feta')
		.duration(40)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:cutter/cheddar')
		.itemInputs('firmalife:cheddar_wheel')
		.itemOutputs('4x firmalife:food/cheddar')
		.duration(40)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:cutter/chevre')
		.itemInputs('firmalife:chevre_wheel')
		.itemOutputs('4x firmalife:food/chevre')
		.duration(40)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:cutter/rajya_metok')
		.itemInputs('firmalife:rajya_metok_wheel')
		.itemOutputs('4x firmalife:food/rajya_metok')
		.duration(40)
		.EUt(7)

	// Misc
	global.TFC_MILKS.forEach(milk => {
		event.recipes.gtceu.fermenter(`tfg:fermenter/cream_from_${milk.id.replace(':', '_')}`)
			.inputFluids(Fluid.of(milk.id, 1000))
			.outputFluids(Fluid.of('firmalife:cream'))
			.circuit(6)
			.duration(1200)
			.EUt(24)
	})

	event.recipes.gtceu.mixer('tfg:mixer/tomato_sauce')
		.itemInputs('firmalife:food/tomato_sauce_mix')
		.inputFluids(Fluid.of('minecraft:water', 200))
		.itemOutputs('firmalife:food/tomato_sauce')
		.duration(200)
		.EUt(24)

	//#endregion

	//#region Оливки

	event.recipes.gtceu.macerator(`tfg:tfc/olive_paste`)
		.itemInputs('tfc:food/olive')
		.itemOutputs('2x tfc:olive_paste')
		.duration(60)
		.EUt(2)

	event.recipes.gtceu.mixer('tfg:tfc/olive_oil_water')
		.inputFluids(Fluid.of('water', 200))
		.itemInputs('2x tfc:olive_paste')
		.outputFluids(Fluid.of('tfc:olive_oil_water', 200))
		.duration(200)
		.EUt(28)

	event.recipes.gtceu.distillery('tfg:tfc/olive_oil')
		.inputFluids(Fluid.of('tfc:olive_oil_water', 250))
		.outputFluids(Fluid.of('tfc:olive_oil', 50))
		.duration(600)
		.EUt(28)

	//#endregion

	// Lamp Glass
	event.recipes.gtceu.alloy_smelter(`tfg:tfc/lamp_glass`)
		.itemInputs('#tfc:glass_batches')
		.notConsumable('#tfg:unfinished_lamps')
		.itemOutputs('tfc:lamp_glass')
		.duration(100)
		.EUt(2)

	// Glass lens
	event.recipes.gtceu.alloy_smelter(`tfg:tfc/glass_lens`)
		.itemInputs('tfc:silica_glass_batch')
		.notConsumable('#forge:lenses')
		.itemOutputs('tfc:lens')
		.duration(100)
		.EUt(2)

	// Empty Jar
	event.recipes.gtceu.alloy_smelter('tfc:jar_alloying')
		.itemInputs('#tfc:glass_batches_tier_2')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('tfc:empty_jar')
		.duration(100)
		.EUt(2)

	event.recipes.gtceu.fluid_solidifier('tfc:jar_solidification')
		.inputFluids(Fluid.of('gtceu:glass', 144))
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('tfc:empty_jar')
		.duration(100)
		.EUt(2)

	event.recipes.gtceu.extractor('tfc:jar_extraction')
		.itemInputs('#tfc:jars')
		.outputFluids(Fluid.of('gtceu:glass', 144))
		.duration(50)
		.EUt(2)

	event.recipes.gtceu.extractor('tfc:glass_batch_extraction')
		.itemInputs('#tfc:glass_batches')
		.outputFluids(Fluid.of('gtceu:glass', 144))
		.duration(50)
		.EUt(2)

	// Wool Yarn
	event.recipes.gtceu.macerator('macerate_wool')
		.itemInputs('#minecraft:wool')
		.itemOutputs('tfc:wool_yarn')
		.chancedOutput('tfc:wool_yarn', 9000, 0)
		.chancedOutput('tfc:wool_yarn', 5000, 0)
		.chancedOutput('tfc:wool_yarn', 2000, 0)
		.duration(200)
		.EUt(2)

	// LimeWater + Sand -> Mortar
	event.recipes.gtceu.centrifuge('mortar')
		.itemInputs('#forge:sand')
		.inputFluids(Fluid.of('tfc:limewater', 100))
		.itemOutputs('16x tfc:mortar')
		.duration(800)
		.EUt(8)


	// 1x Small SheepSkin -> 1x Wool
	event.recipes.gtceu.assembler('tfg:tfc/wool_1')
		.itemInputs('tfc:small_sheepskin_hide')
		.itemOutputs('tfc:wool')
		.duration(100)
		.EUt(4)

	// 1x Medium SheepSkin -> 1x Wool
	event.recipes.gtceu.assembler('tfg:tfc/wool_2')
		.itemInputs('tfc:medium_sheepskin_hide')
		.itemOutputs('2x tfc:wool')
		.duration(100)
		.EUt(4)

	// 1x Large SheepSkin -> 1x Wool
	event.recipes.gtceu.assembler('tfg:tfc/wool_3')
		.itemInputs('tfc:large_sheepskin_hide')
		.itemOutputs('3x tfc:wool')
		.duration(100)
		.EUt(4)

	// Wool Yarn
	event.recipes.gtceu.wiremill('tfg:tfc/wool_yarn')
		.itemInputs('tfc:wool')
		.itemOutputs('8x tfc:wool_yarn')
		.duration(100)
		.EUt(4)

	// Burlap Cloth
	event.recipes.gtceu.assembler('tfg:tfc/burlap_cloth')
		.itemInputs('12x tfc:jute_fiber')
		.circuit(0)
		.itemOutputs('tfc:burlap_cloth')
		.duration(100)
		.EUt(4)

	// Silk Cloth
	event.recipes.gtceu.assembler('tfg:tfc/silk_cloth')
		.itemInputs('24x minecraft:string')
		.circuit(0)
		.itemOutputs('tfc:silk_cloth')
		.duration(100)
		.EUt(4)

	// Wool Cloth
	event.recipes.gtceu.assembler('tfg:tfc/wool_cloth')
		.itemInputs('16x tfc:wool_yarn')
		.circuit(0)
		.itemOutputs('tfc:wool_cloth')
		.duration(100)
		.EUt(4)

	// Cloths to Wool
	event.recipes.gtceu.assembler('tfg:tfc/cloth_to_wool')
		.itemInputs('4x #tfc:sewing_light_cloth')
		.itemOutputs('8x minecraft:white_wool')
		.circuit(16)
		.duration(100)
		.EUt(4)

	// Jute Fiber
	generateMixerRecipe(event, 'tfc:jute', Fluid.of('minecraft:water', 200), 'tfc:jute_fiber', null, [], 100, 4, 16, 'tfg:tfc/jute_fiber')
}