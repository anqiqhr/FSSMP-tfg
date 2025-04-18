// priority: 0

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFCRecipes = (event) => {

	removeTFCRecipes(event)
	registerTFCMaterialsRecipes(event)
	registerTFCMetalsRecipes(event)
	registerTFCStoneRecipes(event)
	registerTFCSandRecipes(event)
	registerTFCDirtRecipes(event)
	registerTFCWoodRecipes(event)
	registerTFCKnappingRecipes(event)
	registerTFCMachineRecipes(event)
	registerTFCAlabasterRecipes(event)
	registerTFCDyeRecipes(event)

	//#region Рецепты порошков

	// Добавление рецептов
	global.TFC_QUERN_POWDER_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.macerator(`tfg:${element.name}`)
			.itemInputs(element.input)
			.itemOutputs(element.output)
			.duration(60)
			.EUt(2)

		event.recipes.tfc.quern(element.output, element.input)
			.id(`tfg:quern/${element.name}`)
	})

	//#endregion

	//#region Рецепты зерен

	global.TFC_QUERN_GRAIN_RECIPE_COMPONENTS.forEach(element => {

		event.recipes.gtceu.macerator(`tfg:${element.name}`)
			.itemInputs(element.input)
			.itemOutputs(element.output)
			.chancedOutput('tfc:straw', 7000, 500)
			.duration(200)
			.EUt(2)

		event.recipes.tfc.quern(element.output, element.input)
			.id(`tfg:quern/${element.name}`)
	})

	//#endregion

	//#region Рецепты муки

	global.TFC_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.macerator(`tfg:${element.name}`)
			.itemInputs(element.input)
			.itemOutputs(element.output)
			.duration(200)
			.EUt(2)
	})

	//#endregion

	//#region Рецепты обжарки мяса

	global.TFC_FURNACE_MEAT_RECIPE_COMPONENTS.forEach(element => {
		event.smelting(element.output, element.input)
			.id(`tfg:smelting/${element.name}`)
	})

	//#endregion

	//#region Рецепты обжарки форм

	global.TFC_FURNACE_MOLD_RECIPE_COMPONENTS.forEach(element => {
		event.smelting(element.output, element.input)
			.id(`tfg:smelting/${element.name}`)
	})

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.smelting(`tfc:ceramic/${dye}_glazed_vessel`, `tfc:ceramic/${dye}_unfired_vessel`)
			.id(`tfg:smelting/${dye}_glazed_vessel`)

		event.smelting(`tfc:ceramic/large_vessel/${dye}`, `tfc:ceramic/unfired_large_vessel/${dye}`)
			.id(`tfg:smelting/${dye}_large_vessel`)
	})

	//#endregion


	//#region Рецепты электрической теплицы

	// Дерево
	global.TFC_WOOD_TYPES.forEach(wood => {
		generateGreenHouseRecipe(event, `8x tfc:wood/sapling/${wood}`, 16000, `64x tfc:wood/log/${wood}`, `tfg:greenhouse/${wood}`)
	})

	global.AFC_SAPLINGS.forEach(x => {
		generateGreenHouseRecipe(event, `8x afc:wood/sapling/${x.sapling}`, 16000, `64x ${x.log}`, `tfg:greenhouse/${x.sapling}`)
	})

	// Семена фруктов
	global.TFC_GREENHOUSE_FRUIT_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name)
	})

	// Семена овощей
	global.TFC_GREENHOUSE_VEGETABLE_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name)
	})

	// Семена ягод
	global.TFC_GREENHOUSE_BERRY_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name)
	})

	// Растения
	Ingredient.of('#tfc:plants').stacks.forEach(element => {
		const itemId = element.id;
		const recipeId = `greenhouse_${itemId.replace(':', '_')}`;

		generateGreenHouseRecipe(event, itemId, 8000, `8x ${itemId}`, recipeId);
	});

	//#endregion

	//#region Рецепты хлеба

	global.TFC_FURNACE_BREAD_RECIPE_COMPONENTS.forEach(element => {
		event.smelting(element.output, element.input)
			.id(`tfg:smelting/${element.name}`)
	})

	//#endregion


	// Доменная печь
	event.shaped('tfc:blast_furnace', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: '#forge:double_plates/wrought_iron',
		B: 'tfc:crucible'
	}).id('tfc:crafting/blast_furnace')

	event.recipes.gtceu.macerator('recycle_tfc_blast_furnace')
		.itemInputs('tfc:blast_furnace')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 16))
		.duration(GTMaterials.WroughtIron.getMass() * 16)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.recipes.gtceu.arc_furnace('recycle_tfc_blast_furnace')
		.itemInputs('tfc:blast_furnace')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 16))
		.duration(GTMaterials.WroughtIron.getMass() * 16)
		.EUt(GTValues.VA[GTValues.LV])
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	// Тыква -> Кусочки тыквы
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('5x tfc:food/pumpkin_chunks').copyFood(),
		[TFC.ingredient.notRotten('tfc:pumpkin'), '#forge:tools/hammers'], 'tfc:pumpkin')
		.id(`tfc:crafting/pumpkin_chunks_hammer`)

	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('5x tfc:food/pumpkin_chunks').copyFood(),
		[TFC.ingredient.notRotten('tfc:pumpkin'), '#tfc:knives'], 'tfc:pumpkin')
		.id(`tfc:crafting/pumpkin_chunks_knife`)

	// Lime
	event.smelting('tfc:powder/lime', 'tfc:powder/flux')
		.id('tfg:smelting/lime')

	// Kaolinite Clay
	event.smelting('tfc:powder/kaolinite', 'tfc:kaolin_clay')
		.id('tfg:smelting/kaolinite_clay')

	// Fire Brick
	event.recipes.gtceu.alloy_smelter('tfg:cheaper_fire_brick')
		.itemInputs('#forge:dusts/graphite', 'tfc:kaolin_clay')
		.itemOutputs('tfc:fire_clay')
		.duration(600)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.alloy_smelter('tfg:oops_i_smelted_all_my_kaolin')
		.itemInputs('5x minecraft:clay_ball', 'tfc:powder/kaolinite')
		.itemOutputs('5x tfc:kaolin_clay')
		.duration(600)
		.EUt(GTValues.VA[GTValues.ULV])

	// Выпаривание соли
	event.recipes.tfc.pot([], Fluid.of('tfc:salt_water', 625), 300, 100)
		.itemOutput('gtceu:small_salt_dust')
		.id('tfg:tfc/pot/salt')

	// Salt Water
	generateMixerRecipe(event, ['#forge:dusts/salt'], Fluid.of('minecraft:water', 1000), [], null, Fluid.of('tfc:salt_water', 1000), 40, 7, 64, 'tfg:tfc/salt_water')


	// Seaweed and kelp
	event.recipes.tfc.heating('tfc:groundcover/seaweed', 200)
		.resultItem('tfc:food/dried_seaweed')
	event.recipes.tfc.heating('tfc:plant/leafy_kelp', 200)
		.resultItem('tfc:food/dried_kelp')
	event.recipes.tfc.heating('tfc:plant/winged_kelp', 200)
		.resultItem('tfc:food/dried_kelp')

	// Soda Ash
	event.smelting('3x tfc:powder/soda_ash', 'tfc:food/dried_seaweed').id('tfg:smelting/dried_seaweed_to_soda')
	event.smelting('3x tfc:powder/soda_ash', 'tfc:food/dried_kelp').id('tfg:smelting/dried_kelp_to_soda')

	//#region Обрушения

	event.recipes.tfc.collapse('#tfg:rock_slabs').id('tfg:collapse/rock_slabs')
	event.recipes.tfc.collapse('#tfg:rock_stairs').id('tfg:collapse/rock_stairs')
	event.recipes.tfc.collapse('#tfg:rock_walls').id('tfg:collapse/rock_walls')

	//#endregion

	//More accesible solar drier
	event.replaceInput({ id: 'firmalife:crafting/solar_drier' }, 'gtceu:stainless_steel_rod', 'gtceu:silver_rod')

	//Wood ash
	event.recipes.create.splashing([Item.of('tfc:powder/wood_ash').withChance(0.25), Item.of('minecraft:stick').withChance(0.25)], 'tfc:torch')
		.id('tfg:splashing/wash_torch')

	//Lye in mixer
	generateMixerRecipe(event, 'tfc:powder/wood_ash', Fluid.of('minecraft:water', 200), [], null, Fluid.of('tfc:lye', 200), 100, 2, 64, 'lye_in_mixer')

	// Brass Mechanism
	event.recipes.shapeless('gtceu:small_brass_gear', [ 'tfc:brass_mechanisms' ]).id('tfg:replace_brass_mechanisms')
	event.replaceInput({ input: 'tfc:brass_mechanisms' }, 'tfc:brass_mechanisms', 'gtceu:small_brass_gear')
}
