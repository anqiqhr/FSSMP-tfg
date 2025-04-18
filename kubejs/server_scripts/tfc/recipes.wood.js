﻿// priority: 0

function registerTFCWoodRecipes(event) {

	// Какие то рецепты дерева
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.remove({ id: `tfc:crafting/wood/${wood}_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_bladed_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_encased_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_clutch` })
		event.remove({ id: `tfc:crafting/wood/${wood}_gear_box` })
		event.remove({ id: `tfc:crafting/wood/${wood}_water_wheel` })

		// Бревна -> Пиломатериалы
		generateCutterRecipe(event, `#tfc:${wood}_logs`, `16x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_log`)

		// Доски -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}`, `4x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_planks`)

		// Ступень -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}_stairs`, `3x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_stairs`)


		// Плита -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}_slab`, `2x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_slab`)

		// ? -> Деревянная нажимная пластина
		event.shaped(`tfc:wood/planks/${wood}_pressure_plate`, [
			'ABA',
			'CDC',
			'AEA'
		], {
			A: '#forge:screws/wood',
			B: '#tfc:hammers',
			C: `tfc:wood/planks/${wood}_slab`,
			D: '#forge:springs',
			E: '#forge:tools/screwdrivers'
		}).id(`tfc:crafting/wood/${wood}_pressure_plate`)

		event.recipes.gtceu.assembler(`${wood}_pressure_plate`)
			.itemInputs('#forge:springs', `2x tfc:wood/planks/${wood}_slab`)
			.circuit(0)
			.itemOutputs(`2x tfc:wood/planks/${wood}_pressure_plate`)
			.duration(50)
			.EUt(2)

		// ? -> Деревянная кнопка
		event.remove({ id: `tfc:crafting/wood/${wood}_button` })

		generateCutterRecipe(event, `tfc:wood/planks/${wood}_pressure_plate`, `6x tfc:wood/planks/${wood}_button`, 50, 7, `${wood}_button`)

	})
}