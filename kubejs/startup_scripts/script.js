// priority: 0

//console.info("KubeJS loading! Don't forget to look for errors!!!!")

/*onEvent('item.registry', event => {
	// Register new items here
})*/

onEvent('fluid.registry', event => {
	/* TEAS */
	event.create('green_tea').displayName('Green Tea').color(0x0000ff)
	event.create('black_tea').displayName('Black Tea').color(0x000000)
	event.create('green_tea').displayName('Green Tea').color(0x00ff00)
	event.create('floral_tea').displayName('Dandelion Tea').color(0xffff00)
	event.create('chai_tea').displayName('Chai Tea').color(0xffff55)
	event.create('chorus_tea').displayName('Chorus Tea').color(0x800008)
	
	/* SOUPS and other fluids that go in bowl*/
	event.create('beetroot_soup').displayName('Beetroot soup').color(0x80193b)
	event.create('pumpkin_soup').displayName('Pumpkin soup').color(0xff7518)
	event.create('foul_soup').displayName('Foul soup').color(0xf4bc1c)
	event.create('chicken_soup').displayName('Chicken soup').color(0xf4e8a4)
	event.create('vegetable_soup').displayName('Vegetable soup').color(0x97be11)
	event.create('noodle_soup').displayName('Noodle soup').color(0xffffff)
	event.create('adzuki_curry').displayName('Adzuku Curry').color(0x672422)
	event.create('lightning_lili_mixture').displayName('Lightning lili mixture').color(0x3393ff)
	event.create('mooshroom_stew').displayName('Mooshroom stew').color(0x3393ff)
	event.create('melted_neapolitan_ice_cream').displayName('Melted Neapolitan Ice-cream')
	event.create('banana_cream').displayName('Banana Ice-cream')
	event.create('melted_passionfruit_sorbet').displayName('Melten Passionfruit Sorbet')
	event.create('sopa_de_macaco').displayName('Sopa de Macaco')
	event.create('beef_stew').displayName('Beef Stew')
	event.create('adzuki_curry').displayName('Adzuki Curry')
	event.create('squid_ink_risotuo').displayName('Squid Ink Rissoto')
	event.create('vanilla_pudding').displayName('Vanilla Pudding')
	event.create('ambrosia').displayName('Ambrosia')
	event.create('melted_chocolate_ice_cream').displayName('Melted Chocolate Ice-cream')
	event.create('melted_mint_ice_cream').displayName('Melted Mint Ice-cream')
	event.create('rabbit_stew').displayName('Rabbit Stew')
	event.create('frost_lili_mixture').displayName('Frost Lili Mixture')
	event.create('melted_vanilla_ice_cream').displayName('Melted Vanilla Ice-cream')
	event.create('melted_strawberry_ice_cream').displayName('Melted Strawberry Ice-cream')
	event.create('fire_lily_mixture').displayName('Fire Lilly Mixture')


});