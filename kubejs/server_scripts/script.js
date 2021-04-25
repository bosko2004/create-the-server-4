/*  adzuki_curry').displayN
	lightning_lili_mixture'lor(0x3393ff)
	mooshroom_stew').displa
	melted_neapolitan_ice_ccream')
	banana_cream').displayN
	melted_passionfruit_sorbet')
	sopa_de_macaco').displa
	beef_stew').displayName
	adzuki_curry').displayN
	squid_ink_risotuo').dis
	vanilla_pudding').displ
	ambrosia').displayName(
	melted_chocolate_ice_cream')
	melted_mint_ice_cream')
	rabbit_stew').displayNa
	frost_lili_mixture').di
	melted_vanilla_ice_crea)
	melted_strawberry_ice_cream
	fire_lily_mixture
*/

onEvent('recipes', event => {

    /* TEAS   */
    function craftTea (type,ingridient){
        event.recipes.create.mixing(Fluid.of('kubejs:'+type+'_tea',250),[
            Fluid.of('minecraft:water',250),
            ingridient
        ]).heated()
        event.recipes.create.filling('simplytea:cup_tea_'+type, [
            'simplytea:cup',
            Fluid.of('kubejs:'+type+'_tea',250)
        ])
    }
    craftTea('black','simplytea:black_tea')
    craftTea('green','simplytea:tea_leaf')
    craftTea('chorus','simplytea:chorus_petal')
    craftTea('floral','minecraft:dandelion')
    craftTea('chai',['simplytea:black_tea','simplytea:tea_stick'])

    /*Hot chocolate*/
    event.recipes.create.filling('simplytea:cup_cocoa', [
        'simplytea:cup',
        Fluid.of('create:chocolate',250)
    ])

    /* COPPER PATCH */ 
    event.remove({output: 'create_stuff_additions:copper_armor_boots'})
    event.remove({output: 'create_stuff_additions:copper_armor_helmet'})
    event.remove({output: 'create_stuff_additions:copper_armor_chestplate'})
    event.remove({output: 'create_stuff_additions:copper_armor_leggings'})
    
    /* Soups and stuff */
    function addBowlFluid (ingridients, result_fluid,result){
    	event.recipes.create.mixing(Fluid.of('kubejs:'+result_fluid,250),ingridients).heated()
        if(result!='\0'){
        	event.reciped.create.filling(result,[
        		'minecraft:bowl',
            	Fluid.of('kubejs:'+result_fluid,250,ingridients)
        	])
        }
    }
    addBowlFluid('6x minecraft:beetroot', 'beetroot_soup', 'minecraft:beetroot_soup')
    addBowlFluid(['farmersdelight:pumpkin_slice',Fluid.of('minecraft:milk',225)],'pumpkin_soup', 'minecraft:pumpkin_soup')
    addBowlFluid(['2x autuminity:foul_berries','minecraft:spider_eye','farmersdlight:onion'],'foul_soup','autuminity:foul_soup')
    addBowlFluid(['#forge:salad_ingredinets','#forge:vegetables','minecraft:carrot','#forge:raw_chicken'],'chicken_soup'.'farmersdelight:chicken_soup')
    addBowlFluid(['#forge:salad_ingredients','minecraft:carrot','minecraft:potato','minecraft:potato','minecraft:beetroot'], 'vegetable_soup','farmersdelight:vegetable_soup')
    addBowlFluid(['farmersdelight:raw_pasta','#forge:cooked_eggs','minecraft:dried_kelp','#forge:raw_pork'],'noodle_soup','farmersdelight:noodle_soup')
    
  
}) 
