// priority: 0

function registerGTCEURecyclingRecipes(event) {

	// Tantalum Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/tantulum_capacitor')
		.itemInputs('gtceu:tantalum_capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Tantalum, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Polyethylene, 1)
	)
		.duration(GTMaterials.Tantalum.getMass() * 1)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/tantulum_capacitor')
		.itemInputs('gtceu:tantalum_capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Tantalum, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Ash, 1)
	)
		.duration(GTMaterials.Tantalum.getMass() * 1)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/capacitor')
		.itemInputs('gtceu:capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Polyethylene, 1)
	)
		.duration(GTMaterials.Polyethylene.getMass() * 1)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/capacitor')
		.itemInputs('gtceu:capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Ash, 1)
	)
		.duration(GTMaterials.Ash.getMass() * 1)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier I Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ultimet, 6)
	)
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ultimet, 6)
	)
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.outputFluids(Fluid.of('gtceu:ultimet', 864))
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier II Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ruridit, 6)
	)
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ruridit, 6)
	)
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.outputFluids(Fluid.of('gtceu:ruridit', 864))
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier III Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Neutronium, 6)
	)
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Neutronium, 6)
	)
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.outputFluids(Fluid.of('gtceu:neutronium', 864))
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}