// priority: 0

function removeGreateRecipes(event) {

	global.GREATE_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.remove({ mod: 'greate', input: 'create:andesite_alloy' });
	
	event.remove({ id: 'greate:shapeless/large_andesite_alloy_cogwheel_from_little' })
	event.remove({ id: 'greate:shapeless/large_steel_cogwheel_from_little' })
	event.remove({ id: 'greate:shapeless/large_aluminium_cogwheel_from_little' })
	event.remove({ id: 'greate:shapeless/large_stainless_steel_cogwheel_from_little' })
	event.remove({ id: 'greate:shapeless/large_titanium_cogwheel_from_little' })

	// Until we got a fix from Greate for recipes in a cleanroom
	event.remove({ id: 'greate:shaped/stainless_steel_mechanical_saw' })	
	event.remove({ id: 'greate:shaped/titanium_mechanical_saw' })

	event.remove({ id: 'greate:splashing/dough' })

	event.remove({ mod: 'greate', type: 'create:deploying' });
	event.remove({ mod: 'greate', type: 'create:sequenced_assembly' });
	event.remove({ mod: 'greate', type: 'gtceu:assembler' });
}
