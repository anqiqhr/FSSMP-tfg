const registerGTCEuMaterials = (event) => {

}

const registerGTCEuMaterialModification = (event) => {

	//const TFGPropertyKey = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.TFGPropertyKeys')
	const $TFC_PROPERTY = Java.loadClass('su.terrafirmagreg.core.compat.gtceu.properties.TFCProperty')
	const $ORE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
	const $ITEM_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ItemPipeProperties')
	const $FLUID_PIPE_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties')
	const $HAZARD_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.HazardProperty')

	const $MATERIAL_FLAGS = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')

	const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')

	const {
		HAS_TFC_TOOL,
		HAS_TFC_ARMOR,
		HAS_TFC_UTILITY,
		HAS_PLATED_BLOCK,
		CAN_BE_UNMOLDED,
		GENERATE_BELL,
		GENERATE_DOUBLE_INGOTS,
		GENERATE_FIRMALIFE_GREENHOUSE_BLOCKS,
		HAS_SMALL_TFC_ORE,
		HAS_SMALL_NATIVE_TFC_ORE,
	} = TFGMaterialFlags

	const {
		GENERATE_ROD,
		GENERATE_LONG_ROD,
		GENERATE_BOLT_SCREW,
		GENERATE_ROTOR,
		GENERATE_SPRING,
		GENERATE_SMALL_GEAR,
		GENERATE_GEAR,
		GENERATE_FRAME,
		GENERATE_PLATE,
		GENERATE_RING
	} = $MATERIAL_FLAGS

	var metalTooling = [
		GTToolType.AXE,
		GTToolType.PICKAXE,
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.SAW,
		GTToolType.SHOVEL,
		GTToolType.SHOVEL,
		GTToolType.SPADE,
		GTToolType.MINING_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER,
		GTToolType.DRILL_LV,
		GTToolType.DRILL_MV,
		GTToolType.DRILL_HV,
		GTToolType.DRILL_EV,
		GTToolType.DRILL_IV,
		GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
		GTToolType.WRENCH_HV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
	]

	/* TFC Проперти для материалов */

	// TFC_PROPERTY = (forging temp, welding temp, melt temp, material, tier, percent of material)

	GTMaterials.Copper.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 1080, 1));
	GTMaterials.BismuthBronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(591, 788, 985, 2));
	GTMaterials.Bronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 760, 950, 2));
	GTMaterials.BlackBronze.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(642, 856, 1070, 2));
	GTMaterials.WroughtIron.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3));
	GTMaterials.Steel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 4));
	GTMaterials.BlackSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(891, 1188, 1485, 5));
	GTMaterials.BlueSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));
	GTMaterials.RedSteel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(924, 1232, 1540, 6));

	GTMaterials.Gold.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(636, 848, 1060, 1));
	GTMaterials.Bismuth.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(162, 216, 270, 1));
	GTMaterials.Brass.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(558, 744, 930, 2));
	GTMaterials.Nickel.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(872, 1162, 1453, 1));
	GTMaterials.RoseGold.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(576, 768, 960, 1));
	GTMaterials.Silver.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(577, 769, 961, 1));
	GTMaterials.Tin.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, 1));
	GTMaterials.Zinc.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(252, 336, 420, 1));
	GTMaterials.SterlingSilver.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 760, 950, 1));
	GTMaterials.Iron.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, 3));

	GTMaterials.Hematite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.YellowLimonite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Magnetite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Pyrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Goethite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(921, 1228, 1535, GTMaterials.Iron, 3, 90));
	GTMaterials.Malachite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Tetrahedrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Chalcopyrite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 85));
	GTMaterials.Chalcocite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 95));
	GTMaterials.Bornite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1080, GTMaterials.Copper, 1, 90));
	GTMaterials.Cassiterite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(648, 864, 230, GTMaterials.Tin, 1, 100));
	GTMaterials.CassiteriteSand.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 230, GTMaterials.Tin, 1, 85));
	GTMaterials.Sphalerite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 420, GTMaterials.Zinc, 1, 90));
	GTMaterials.Garnierite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1453, GTMaterials.Nickel, 1, 100));
	GTMaterials.Pentlandite.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(138, 184, 1453, GTMaterials.Nickel, 1, 85));


	GTMaterials.Redstone.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(240, 320, 460, 1));
	GTMaterials.RedAlloy.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(570, 650, 740, 2));
	GTMaterials.TinAlloy.setProperty(TFGPropertyKey.TFC_PROPERTY, new $TFC_PROPERTY(1000, 1100, 1250, 3));

	GTMaterials.Gold.addFlags(GENERATE_BELL);
	GTMaterials.Brass.addFlags(GENERATE_BELL);
	GTMaterials.Bronze.addFlags(GENERATE_BELL);

	//
	//
	//        /* Имеют двойные слитки */
	GTMaterials.Iron.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Gold.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Bismuth.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Brass.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Nickel.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.RoseGold.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Silver.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Tin.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.Zinc.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.SterlingSilver.addFlags(GENERATE_DOUBLE_INGOTS);
	//
	//        /* Имеют инструменты, броню TFC, двойные слитки */
	GTMaterials.Copper.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
	GTMaterials.BismuthBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
	GTMaterials.Bronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
	GTMaterials.BlackBronze.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY, CAN_BE_UNMOLDED);
	GTMaterials.WroughtIron.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.Steel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlackSteel.addFlags(GENERATE_DOUBLE_INGOTS, GENERATE_ROTOR, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.RedSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	GTMaterials.BlueSteel.addFlags(GENERATE_DOUBLE_INGOTS, HAS_TFC_TOOL, HAS_TFC_ARMOR, HAS_TFC_UTILITY);
	//
	//        /* Имеют маленькие куски руды TFC */
	GTMaterials.Bismuth.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Cassiterite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Garnierite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Hematite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.YellowLimonite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Magnetite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Malachite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Sphalerite.addFlags(HAS_SMALL_TFC_ORE);
	GTMaterials.Tetrahedrite.addFlags(HAS_SMALL_TFC_ORE);
	//
	//        /* Имеют маленькие чистые куски руды TFC */
	GTMaterials.Copper.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	GTMaterials.Gold.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	GTMaterials.Silver.addFlags(HAS_SMALL_NATIVE_TFC_ORE);
	//
	//        /* Имеют двойные слитки */
	GTMaterials.RedAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
	GTMaterials.TinAlloy.addFlags(GENERATE_DOUBLE_INGOTS);
	//
	//        /* Другое */

	// TODO: Exception needs to check the wizardry
	GTMaterials.Bismuth.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	GTMaterials.EXT2_METAL.forEach(tag => GTMaterials.Bismuth.addFlags(tag))

	GTMaterials.Borax.setProperty(PropertyKey.ORE, new $ORE_PROPERTY());
	
	GTMaterials.CertusQuartz.addFlags(GENERATE_ROD);
	GTMaterials.NetherQuartz.addFlags(GENERATE_ROD);

	GTMaterials.Copper.addFlags(GENERATE_FRAME);
	GTMaterials.BlackBronze.addFlags(GENERATE_FRAME);
	GTMaterials.BismuthBronze.addFlags(GENERATE_FRAME);

	GTMaterials.Wood.addFlags(GENERATE_SMALL_GEAR);
	GTMaterials.Brass.addFlags(GENERATE_SMALL_GEAR, GENERATE_RING);
	GTMaterials.BismuthBronze.addFlags(GENERATE_GEAR);
	
	GTMaterials.Nickel.addFlags(GENERATE_ROD, GENERATE_LONG_ROD);
	GTMaterials.BlackSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.BlueSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.RedSteel.addFlags(GENERATE_LONG_ROD, GENERATE_BOLT_SCREW);
	GTMaterials.WroughtIron.addFlags(GENERATE_ROTOR, GENERATE_SPRING, GENERATE_SMALL_GEAR);
	
	GTMaterials.Copper.addFlags(GENERATE_BOLT_SCREW);
	GTMaterials.DamascusSteel.addFlags(GENERATE_BOLT_SCREW);
	GTMaterials.Duranium.addFlags(GENERATE_BOLT_SCREW);

	GTMaterials.IronMagnetic.addFlags(GENERATE_PLATE)
	
	GTMaterials.TreatedWood.addFlags(GENERATE_LONG_ROD);

	GTMaterials.Stone.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(1.2, 1.0, 8, 1, [
		GTToolType.AXE,
		GTToolType.HARD_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.SHOVEL
	]).build());

	GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.0, 1.5, 132, 2, metalTooling).build());
	GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.5, 2.0, 178, 2, metalTooling).build());
	GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.3, 2.0, 204, 2, metalTooling).build());
	GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5, 4.5, 1228, 3, metalTooling).build());
	GTMaterials.Iron.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5, 4.5, 1228, 3, metalTooling).build());

	for (var material of GTCEuAPI.materialManager.getRegisteredMaterials()) {
		var toolProperty = material.getProperty(PropertyKey.TOOL);
		if (toolProperty == null)
			continue;

		toolProperty.setDurability(toolProperty.getDurability() * 6);
	}

	// Bismuth item pipe - same stats as tin
	GTMaterials.Bismuth.setProperty(PropertyKey.ITEM_PIPE, new $ITEM_PIPE_PROPERTY(4096, 0.5));
	// Bis bronze fluid pipe - same stats as bronze
	GTMaterials.BismuthBronze.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(1696, 20, true, false, false, false));
	// Red steel fluid pipe - same flow rate as aluminium, bad heat tolerance (same as PE) but can do cryo
	GTMaterials.RedSteel.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(370, 75, true, false, true, false));
	// Blue steel fluid pipe - same flow rate as aluminium, same temp tolerance as tungsten
	GTMaterials.BlueSteel.setProperty(PropertyKey.FLUID_PIPE, new $FLUID_PIPE_PROPERTY(4618, 75, true, false, false, false));

	// Add some hazards back
	GTMaterials.Realgar.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.ARSENICOSIS, 1, false));
	GTMaterials.Cobaltite.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.ARSENICOSIS, 1, false));
	GTMaterials.Galena.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.INHALATION, GTMedicalConditions.WEAK_POISON, 1, false));
	GTMaterials.Chromite.setProperty(PropertyKey.HAZARD, new $HAZARD_PROPERTY($HAZARD_PROPERTY.HazardTrigger.SKIN_CONTACT, GTMedicalConditions.CARCINOGEN, 1, false));

	// Color Adjustments
	GTMaterials.BismuthBronze.setMaterialARGB(0x5A966E)
	GTMaterials.BismuthBronze.setMaterialSecondaryARGB(0x203E2A)
	GTMaterials.BlackBronze.setMaterialARGB(0x9D789D)
	GTMaterials.BlackBronze.setMaterialSecondaryARGB(0x5B425B)
	GTMaterials.Steel.setMaterialARGB(0x9AA9AB)
	GTMaterials.SteelMagnetic.setMaterialARGB(0x9AA9AB)
	GTMaterials.RedSteel.setMaterialARGB(0xDE7B80)
	GTMaterials.RedSteel.setMaterialSecondaryARGB(0xE12323)
	GTMaterials.BlueSteel.setMaterialARGB(0xA0B6EC)
	GTMaterials.BlueSteel.setMaterialSecondaryARGB(0x2B5CD8)
	
	GTMaterials.Bismuth.setMaterialARGB(0x66847E)
	GTMaterials.Bismuth.setMaterialSecondaryARGB(0x25465B)
	GTMaterials.Iron.setMaterialARGB(0x503d32)
	GTMaterials.Iron.setMaterialSecondaryARGB(0x131212)
	GTMaterials.IronMagnetic.setMaterialARGB(0x503d32)
	GTMaterials.IronMagnetic.setMaterialSecondaryARGB(0x131212)
	GTMaterials.Zinc.setMaterialARGB(0xd6ffdc)
	GTMaterials.Zinc.setMaterialSecondaryARGB(0x213b3f)
	GTMaterials.Graphite.setMaterialARGB(0x889BA8)
	GTMaterials.Graphite.setMaterialSecondaryARGB(0x30383E)
	GTMaterials.Amethyst.setMaterialARGB(0xCC9EF0)
	GTMaterials.Amethyst.setMaterialSecondaryARGB(0x6F4AB3)
	GTMaterials.Cobalt.setMaterialARGB(0xC9E4FB)
	GTMaterials.Cobalt.setMaterialSecondaryARGB(0x1D2688)
	GTMaterials.CertusQuartz.setMaterialARGB(0xB8D8FC)
	GTMaterials.CertusQuartz.setMaterialSecondaryARGB(0x466580)
	GTMaterials.Vanadium.setMaterialARGB(0xD8D4E7)
	GTMaterials.Vanadium.setMaterialSecondaryARGB(0x7E988F)
	GTMaterials.Brass.setMaterialSecondaryARGB(0x791905)
	GTMaterials.Aluminium.setMaterialARGB(0xb6e5ff)
	GTMaterials.Aluminium.setMaterialSecondaryARGB(0x7ca29b)
	GTMaterials.Titanium.setMaterialARGB(0xe8b1fa)
	GTMaterials.Titanium.setMaterialSecondaryARGB(0xd8d5d9)
	GTMaterials.TungstenSteel.setMaterialARGB(0xadb8df)
	GTMaterials.TungstenSteel.setMaterialSecondaryARGB(0x03192f)
	GTMaterials.RoseGold.setMaterialARGB(0xFCE4D8)
	GTMaterials.RoseGold.setMaterialSecondaryARGB(0xAB675A)

	
	global.MINECRAFT_DYE_NAMES.forEach(colorName =>
	{
		var material = GTCEuAPI.materialManager.getMaterial(`gtceu:${colorName}_dye`);
		var property = material.getProperty(PropertyKey.FLUID);
		property.getStorage().store($FluidStorageKeys.LIQUID, () => Fluid.of(`tfc:${colorName}_dye`).fluid, null);
	});
}