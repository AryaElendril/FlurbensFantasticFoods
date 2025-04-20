Platform.mods.kubejs.name = "Flurben's Fantastic Foods";

// Produced by Arya the Elf
// Updated and made recipes automatable by JoaquinDG
// Help with various textures by Derpesore

TFCEvents.data((event) => {
  event.knappingType(
    "kubejs:raw_dough", //item for knapping type
    1, //Ingredient count
    1, //Number of consumed ingredients
    "minecraft:block.mud.place", //sound effect for knapping
    false,
    true,
    false,
    "kubejs:raw_dough",
    "kubejs:dough_knapping"
  );

  event.climateRange((climate) => {
    //set the climate range for the cucumber plant
    climate.maxHydration(95);
    climate.minHydration(23);
    climate.minTemperature(5);
    climate.maxTemperature(33);
  }, "kubejs:cucumber");

  event.climateRange((climate) => {
    //set the climate range for the mustard plant
    climate.maxHydration(95);
    climate.minHydration(23);
    climate.minTemperature(5);
    climate.maxTemperature(33);
  }, "kubejs:mustard");

  event.climateRange((climate) => {
    //set the climate range for the cassava plant
    climate.maxHydration(95);
    climate.minHydration(23);
    climate.minTemperature(12);
    climate.maxTemperature(40);
  }, "kubejs:cassava");

  event.firmalifePlantable(
    "kubejs:cucumber_seeds",
    "large",
    0,
    7,
    0.3,
    "kubejs:cucumber_seeds",
    "kubejs:cucumber_fruit",
    "potassium",
    [
      "fff:block/crop/cucumber_0",
      "fff:block/crop/cucumber_1",
      "fff:block/crop/cucumber_2",
      "fff:block/crop/cucumber_3",
      "fff:block/crop/cucumber_4",
      "fff:block/crop/cucumber_5",
      "fff:block/crop/cucumber_6",
      "fff:block/crop/cucumber_7",
    ],
    null
  );

  event.firmalifePlantable(
    "kubejs:mustard_seeds",
    "large",
    0,
    7,
    0,
    "kubejs:mustard_seeds",
    "kubejs:mustard_seed_pod",
    "potassium",
    [
      "fff:block/crop/mustard_0",
      "fff:block/crop/mustard_1",
      "fff:block/crop/mustard_2",
      "fff:block/crop/mustard_3",
      "fff:block/crop/mustard_4",
      "fff:block/crop/mustard_5",
      "fff:block/crop/mustard_6",
      "fff:block/crop/mustard_7",
    ],
    null
  );

  event.firmalifePlantable(
    "kubejs:cassava_seeds",
    "large",
    0,
    7,
    0.5,
    "kubejs:cassava_seeds",
    "kubejs:cassava_root",
    "potassium",
    [
      "fff:block/crop/cassava_0",
      "fff:block/crop/cassava_1",
      "fff:block/crop/cassava_2",
      "fff:block/crop/cassava_3",
      "fff:block/crop/cassava_4",
      "fff:block/crop/cassava_5",
      "fff:block/crop/cassava_6",
      "fff:block/crop/cassava_7",
    ],
    null
  );
  
});

ServerEvents.recipes((event) => {
  // Add crafting recipe for "Flurben's Tasty Glizzy"
  event.shapeless(
    Item.of("kubejs:flurbens_tasty_glizzy", 1), // arg 1: output
    [
      "kubejs:cut_hot_dog_bun",
      "kubejs:chopped_onion",
      "kubejs:sweet_relish",
      "kubejs:pickle_spear",
      "kubejs:tomato_wedge",
      "kubejs:yellow_mustard",
      "kubejs:cooked_hot_dog",
    ]
  );

  event.shapeless(
    Item.of("kubejs:chopped_onion", 4), //chopped onion recipe
    ["tfc:food/onion", "#forge:tools/knives"]
  );

  event.recipes.gtceu.cutter("kubejs:chopped_onion") // chopped onion recipe, gregtech cutter
		.itemInputs("tfc:food/onion")
		.itemOutputs("4x kubejs:chopped_onion")
		.duration(20)
		.EUt(3);

  event.shapeless(
    Item.of("kubejs:tomato_wedge", 4), // tomato wedge recipe
    ["tfc:food/tomato", "#forge:tools/knives"]
  );

  event.recipes.gtceu.cutter("kubejs:tomato_wedge") // tomato wedge recipe, gregtech cutter
		.itemInputs("tfc:food/tomato")
		.itemOutputs("4x kubejs:tomato_wedge")
		.duration(20)
		.EUt(3);

  event.shapeless(
    Item.of("kubejs:pickle_spear", 4), // pickle spear recipe
    ["kubejs:pickle", "#forge:tools/knives"]
  );

  event.recipes.gtceu.cutter("kubejs:pickle_spear") // pickle spear recipe, gregtech cutter
    .itemInputs("kubejs:pickle")
    .itemOutputs("4x kubejs:pickle_spear")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("kubejs:mustard_seeds", 4), // mustard seed recipe from pods
    ["kubejs:mustard_seed_pod"]
  );

  event.shapeless(
    Item.of("kubejs:ground_mustard", 1), // ground mustard recipe
    ["kubejs:mustard_seeds", "#forge:tools/mortars"]
  );

  event.recipes.gtceu.macerator("kubejs:ground_mustard") // ground mustard recipe, gregtech macerator
    .itemInputs("kubejs:mustard_seeds")
    .itemOutputs("kubejs:ground_mustard")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("kubejs:tapioca_starch", 1), // tapioca starch recipe
    ["kubejs:cassava_root", "#forge:tools/mortars"]
  );

  event.recipes.gtceu.macerator("kubejs:tapioca_starch") // tapioca starch recipe, gregtech macerator
    .itemInputs("kubejs:cassava_root")
    .itemOutputs("kubejs:tapioca_starch")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("kubejs:mustard_seeds", 1), // mustard seed recipe
    ["tfc:seeds/tomato", "#forge:dyes/yellow"]
  );

  event.shapeless(
    Item.of("kubejs:cassava_seeds", 1), // cassava seed recipe
    ["tfc:seeds/potato", "#forge:dyes/brown"]
  );
/*
  event.shapeless(
    Item.of("kubejs:yellow_mustard", 1), // yellow mustard recipe, tfc buckets
    [
      "kubejs:ground_mustard",
      Item.of("tfc:wooden_bucket", {fluid:{Amount:1000,FluidName:"firmalife:yeast_starter"}})
    ]
  );
*/
  event.recipes.gtceu.mixer("kubejs:yellow_mustard") // yellow mustard recipe, gregtech mixer
		.inputFluids(Fluid.of("tfc:vinegar", 100))
    .itemInputs("kubejs:ground_mustard")
    .itemOutputs("kubejs:yellow_mustard")
    .duration(20)
    .EUt(3);
/*
  event.shapeless(
    Item.of("kubejs:tapioca_dough", 4), // tapioca dough recipe, tfc buckets
    [
      "kubejs:tapioca_starch",
      Item.of("tfc:wooden_bucket", '{fluid:{Amount:1000,FluidName:"firmalife:yeast_starter"}}'),
      "#tfc:sweetener",
    ]
  );
*/
  event.shapeless(
    Item.of("kubejs:tapioca_dough", 4), // tapioca dough recipe, minecraft buckets
    ["kubejs:tapioca_starch", "minecraft:water_bucket", "#tfc:sweetener"]
  );
  
  event.recipes.gtceu.mixer("kubejs:tapioca_dough") // tapioca dough recipe, gregtech mixer
		.inputFluids(Fluid.of("minecraft:water", 250))
    .itemInputs("#tfc:sweetener", "kubejs:tapioca_starch")
    .itemOutputs("4x kubejs:tapioca_dough")
    .duration(20)
    .EUt(3);
  
  event.shapeless(
    Item.of("kubejs:cucumber_seeds", 1), // cucumber seed recipe
    ["tfc:seeds/squash", "#forge:dyes/green"]
  );

  event.shapeless(
    Item.of("kubejs:cucumber_seeds", 1), // cucumber seed recipe
    ["kubejs:cucumber_fruit"]
  );

  event.shapeless(
    Item.of("kubejs:sweet_relish", 4), // sweet relish recipe
    ["kubejs:pickle_spear", "#forge:tools/knives", "#tfc:sweetener"]
  );

  event.recipes.gtceu.cutter("kubejs:sweet_relish") // sweet relish recipe, gregtech cutter
    .itemInputs("kubejs:pickle_spear")
    .itemOutputs("4x kubejs:sweet_relish")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("kubejs:yellow_mustard", 1), // yellow mustard recipe, vanilla bucket
    ["kubejs:ground_mustard", "tfc:bucket/vinegar"]
  );

  event.shapeless(
    Item.of("kubejs:raw_dough", 1), // raw dough recipe
    ["#firmalife:foods/extra_dough"]
  );

  event.shapeless(
    Item.of("kubejs:cut_hot_dog_bun", 1), // cut hot dog bun recipe
    ["kubejs:uncut_hot_dog_bun", "#forge:tools/knives"]
  );

  event.recipes.gtceu.cutter("kubejs:cut_hot_dog_bun") // cut hot dog bun recipe, gregtech cutter
    .itemInputs("kubejs:uncut_hot_dog_bun")
    .itemOutputs("kubejs:cut_hot_dog_bun")
    .duration(20)
    .EUt(3);

  event.smelting(
    Item.of("kubejs:uncut_hot_dog_bun", 1), // uncut hot dog bun recipe
    "kubejs:raw_hot_dog_bun"
  );

  event.smelting(
    Item.of("tfc:powder/wood_ash",1), // Wood ash recipe from charcoal powder
    "gtceu:wood_dust"
  );

  event.smelting(Item.of("kubejs:cooked_hot_dog", 1), "kubejs:raw_hot_dog"); // cooked hot dog recipe, vanilla-style

  event.recipes.tfc
    .knapping("3x kubejs:raw_hot_dog_bun", "kubejs:dough_knapping", [
      // raw hot dog bun recipe
      "xxxxx",
      "     ",
      "xxxxx",
      "     ",
      "xxxxx",
    ])
    .ingredient("kubejs:raw_dough")
    .id("kubejs:dough_knapping/horizontal_raw_hot_dog_bun");

  event.recipes.tfc
    .knapping("3x kubejs:raw_hot_dog_bun", "kubejs:dough_knapping", [
      // raw hot dog bun recipe
      "x x x",
      "x x x",
      "x x x",
      "x x x",
      "x x x",
    ])
    .ingredient("kubejs:raw_dough")
    .id("kubejs:dough_knapping/vertical_raw_hot_dog_bun");

  event.recipes.tfc
    .heating("kubejs:raw_hot_dog", 200) // cooked hot dog recipe, tfc-style
    .resultItem(TFC.isp.of("1x kubejs:cooked_hot_dog"));

  event.recipes.tfc
    .barrel_sealed(72000) // pickle recipe
    .inputs("kubejs:cucumber_fruit", TFC.fluidStackIngredient("tfc:brine", 125))
    .outputItem(TFC.isp.of("1x kubejs:pickle"))
    .id("kubejs:barrel_sealed/pickle");

  event.recipes.tfc
    .barrel_sealed(3600) // cellulose pulp recipe
    .inputs(
      "#minecraft:logs",
      TFC.fluidStackIngredient("kubejs:white_liquor", 125)
    )
    .outputItem(TFC.isp.of("2x kubejs:cellulose_pulp"))
    .id("kubejs:barrel_cellulose_pulp");

  event.recipes.tfc
    .barrel_instant() // white liquor recipe
    .outputFluid(Fluid.of("kubejs:white_liquor", 1000))
    .inputFluid(TFC.fluidStackIngredient("tfc:lye", 1000))
    .inputItem("tfc:powder/sulfur");

  event.recipes.gtceu.chemical_reactor('kubejs:white_liquor') // white liquor recipe, gregtech chemical reactor
    .itemInputs('tfc:powder/sulfur')
    .inputFluids(Fluid.of("tfc:lye",2000))
    .outputFluids(Fluid.of("kubejs:white_liquor",2000))
    .EUt(32).duration(120);
  
  event.recipes.gtceu.chemical_reactor('tfc:lye') // lye chemical recipe, gregtech chemical reactor
    .itemInputs('4x tfc:powder/wood_ash')
    .inputFluids(Fluid.of("minecraft:water",1000))
    .outputFluids(Fluid.of("tfc:lye",1000))
    .EUt(32).duration(120);

  event.recipes.tfc // raspberry boba recipe, pot
    .pot(
      [
        "tfc:jar/raspberry",
        "#tfc:sweetener",
        "kubejs:boiled_boba_pearls",
        "kubejs:empty_cup",
      ],
      Fluid.of("minecraft:milk", 1000),
      100,
      100
    )
    .itemOutput(Item.of("kubejs:raspberry_boba"));

  event.recipes.tfc // raspberry boba recipe, pot
    .pot(
      [
        "tfc:jar/raspberry_unsealed",
        "#tfc:sweetener",
        "kubejs:boiled_boba_pearls",
        "kubejs:empty_cup",
      ],
      Fluid.of("minecraft:milk", 1000),
      100,
      100
    )
    .itemOutput(Item.of("kubejs:raspberry_boba"));
  
  event.recipes.gtceu.mixer("kubejs:raspberry_boba_sealed") // raspberry boba recipe, gregtech mixer
    .itemInputs("tfc:jar/raspberry", "#tfc:sweetener", "kubejs:boiled_boba_pears", "kubejs:empty_cup")
    .inputFluids(Fluid.of("minecraft:milk",1000))
    .itemOutputs("kubejs:raspberry_boba")
    .duration(20)
    .EUt(3);
  
  event.recipes.gtceu.mixer("kubejs:raspberry_boba") // raspberry boba recipe, gregtech mixer
    .itemInputs("tfc:jar/raspberry_unsealed", "#tfc:sweetener", "kubejs:boiled_boba_pears", "kubejs:empty_cup")
    .inputFluids(Fluid.of("minecraft:milk",1000))
    .itemOutputs("kubejs:raspberry_boba")
    .duration(20)
    .EUt(3);
  
  event.recipes.tfc // taro boba recipe, pot
    .pot(
      [
        "#tfc:sweetener",
        "kubejs:boiled_boba_pearls",
        "kubejs:empty_cup",
      ],
      Fluid.of("kubejs:taro_milk",1000),
      100,
      100
    )
    .itemOutput(Item.of("kubejs:taro_boba"));
  
  event.recipes.gtceu.mixer("kubejs:taro_boba") // taro boba recipe, gregtech mixer
    .itemInputs('#tfc:sweetener', "kubejs:boiled_boba_pearls", "kubejs:empty_cup")
    .inputFluids(Fluid.of("kubejs:taro_milk",1000))
    .itemOutputs("kubejs:taro_boba")
    .duration(20)
    .EUt(3);
  
  event.recipes.tfc //1x boba
    .pot(
      Item.of("1x kubejs:unboiled_boba_pearls"),
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput(Item.of("kubejs:boiled_boba_pearls"))

  event.smelting("kubejs:boiled_boba_pearls","kubejs:unboiled_boba_pearls")
		.id("tfg:smelting/boiled_boba_pearls");

  event.recipes.tfc //2x boba
    .pot(
      [
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
      ],
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput([
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
    ]);

  event.recipes.tfc //3x boba
    .pot(
      [
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
      ],
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput([
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
    ]);

  event.recipes.tfc //4x boba
    .pot(
      [
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
      ],
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput([
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
    ]);

  event.recipes.tfc //5x boba
    .pot(
      [
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
        Item.of("1x kubejs:unboiled_boba_pearls"),
      ],
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput([
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
      Item.of("kubejs:boiled_boba_pearls"),
    ]);

  event.recipes.firmalife.oven({
    ingredient: { item: "kubejs:raw_hot_dog_bun" }, // oven recipe for uncut hot dog bun
    result_item: { item: "kubejs:uncut_hot_dog_bun" },
    duration: 200, // Adjust the cooking time as needed
    temperature: 300, // Adjust the temperature as needed
  });

  event.recipes.gtceu
    .extruder("hot_dog_casing") // hot dog casing recipe
    .notConsumable("gtceu:tiny_pipe_extruder_mold")
    .itemInputs("kubejs:cellulose_pulp")
    .itemOutputs("kubejs:hot_dog_casing")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .extruder("empty_cup") // empty cup recipe
    .notConsumable("gtceu:bottle_extruder_mold")
    .itemInputs("kubejs:cellulose_pulp")
    .itemOutputs("kubejs:empty_cup")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .extruder("kubejs:raw_hot_dog") // raw hot dog recipe
    .itemInputs("gtceu:meat_dust", "kubejs:hot_dog_casing")
    .itemOutputs("kubejs:raw_hot_dog")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .extruder("kubejs:raw_hot_dog_bun") // raw hot dog bun recipe
    .notConsumable("gtceu:normal_pipe_extruder_mold")
    .itemInputs("kubejs:raw_dough")
    .itemOutputs("kubejs:raw_hot_dog_bun")
    .duration(20)
    .EUt(3);  

  event.recipes.gtceu
    .forming_press("kubejs:unboiled_boba_pearls") // umboiled boba recipe
    .notConsumable("gtceu:ball_casting_mold")
    .itemInputs("kubejs:tapioca_dough")
    .itemOutputs("kubejs:unboiled_boba_pearls")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .brewery('firmalife:yeast_starter') // Brewery recipe for yeast starter 
    .itemInputs('#tfc:foods/flour')
    .inputFluids(Fluid.of('firmalife:yeast_starter', 100))
    .outputFluids(Fluid.of('firmalife:yeast_starter', 600))
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .brewery('tfc:vinegar') // Brewery recipe for vinegar
    .itemInputs('#tfc:sweetener')
    .inputFluids(Fluid.of("minecraft:water", 250))
    .outputFluids(Fluid.of('tfc:vinegar', 250))
    .circuit(1)
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .mixer('tfc:brine') // Mixer recipe for brine 
    .inputFluids(Fluid.of('tfc:vinegar', 1),Fluid.of('minecraft:water', 9))
    .outputFluids(Fluid.of('tfc:brine',10))
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .mixer('kubejs:cellulose_pulp') // Mixer recipe for cellulose           
    .itemInputs('#minecraft:logs')
    .inputFluids(Fluid.of('kubejs:white_liquor', 125))
    .itemOutputs('2x kubejs:cellulose_pulp')
    .duration(20)
    .EUt(3);

  event.recipes.gtceu.chemical_reactor("kubejs:pickle") // pickle recipe, gregtech chemical reactor
    .itemInputs("kubejs:cucumber_fruit")
    .inputFluids(Fluid.of("tfc:brine",125))
    .itemOutputs("kubejs:pickle")
    .duration(20)
    .EUt(3);


  event.recipes.gtceu
    .extractor('kubejs:taro_milk') // Extractor recipe for taro milk
    .itemInputs('tfc:food/taro_root')
    .outputFluids(Fluid.of('kubejs:taro_milk', 125))
    .duration(20)
    .EUt(3);

  event.recipes.create.crushing(
    Item.of("2x kubejs:tapioca_starch"),
    "kubejs:cassava_root"
  );

  event.recipes.create.milling(
    Item.of("2x kubejs:tapioca_starch"),
    "kubejs:cassava_root"
  );
  event.recipes.create.crushing(
    Item.of("2x kubejs:ground_mustard"),
    "kubejs:mustard_seeds"
  );
  event.recipes.create.milling(
    Item.of("2x kubejs:ground_mustard"),
    "kubejs:mustard_seeds"
  );
});

ItemEvents.foodEaten( event => {
  if(event.item.id=="kubejs:raspberry_boba" || event.item.id=="kubejs:taro_boba") {
      event.player.give(Item.of("kubejs:empty_cup",1))
  }
}) 
