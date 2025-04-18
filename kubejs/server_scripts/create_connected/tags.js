const registerCreateConnectedItemTags = (event) => {
	// Removes tags from the Cherry and Bamboo wooden panes added by Create Connected
	event.removeAllTagsFrom("create_connected:cherry_window_pane")
	event.add("c:hidden_from_recipe_viewers", "create_connected:cherry_window_pane")
	event.removeAllTagsFrom("create_connected:bamboo_window_pane")
	event.add("c:hidden_from_recipe_viewers", "create_connected:bamboo_window_pane")
	event.removeAllTagsFrom('create_connected:control_chip')
	event.add('c:hidden_from_recipe_viewers', 'create_connected:control_chip')

	event.remove('minecraft:creeper_drop_music_discs', ['create_connected:music_disc_elevator', 'create_connected:music_disc_interlude'])
}