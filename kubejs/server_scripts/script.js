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

    /* COPPER PATCH */ /*needs to get fixed */
    event.remove({output: 'create_stuff_additions:copper_armor_boots'})
    event.remove({output: 'create_stuff_additions:copper_armor_helmet'})
    event.remove({output: 'create_stuff_additions:copper_armor_chestplate'})
    event.remove({output: 'create_stuff_additions:copper_armor_leggings'})
    
    /* Soups and stuff */
 /*   function addBowlFluid (ingridients, result){
    	event.
    }*/
  
}) 