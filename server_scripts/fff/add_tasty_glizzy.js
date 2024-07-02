Platform.mods.kubejs.name = "Flurben's Fantastic Foods";

// Produced by Arya the Elf
ItemEvents.foodEaten((event) => {
  //Get the player
  const player = event.getEntity();

  // Get the item that was used
  const item = event.getItem();
  if (
    player.name.getString() == "Angelic_Arya" &&
    item.name.getString() == "kubejs:chopped_onion"
  ) {
    player.effect("kubejs:choking", 20);
  }
});

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
    //set the climate range for the cucumber plant
    climate.maxHydration(95);
    climate.minHydration(23);
    climate.minTemperature(5);
    climate.maxTemperature(33);
  }, "kubejs:mustard");

  event.climateRange((climate) => {
    //set the climate range for the cucumber plant
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

  event.shapeless(
    Item.of("kubejs:tomato_wedge", 4), // tomato wedge recipe
    ["tfc:food/tomato", "#forge:tools/knives"]
  );

  event.shapeless(
    Item.of("kubejs:pickle_spear", 4), // pickle spear recipe
    ["kubejs:pickle", "#forge:tools/knives"]
  );

  event.shapeless(
    Item.of("kubejs:mustard_seeds", 4), // mustard seed recipe from pods
    ["kubejs:mustard_seed_pod"]
  );

  event.shapeless(
    Item.of("kubejs:ground_mustard", 1), // ground mustard recipe
    ["kubejs:mustard_seeds", "#forge:tools/mortars"]
  );

  event.shapeless(
    Item.of("kubejs:tapioca_starch", 1), // tapioca starch recipe
    ["kubejs:cassava_root", "#forge:tools/mortars"]
  );

  event.shapeless(
    Item.of("kubejs:mustard_seeds", 1), // mustard seed recipe
    ["tfc:seeds/tomato", "#forge:dyes/yellow"]
  );

  event.shapeless(
    Item.of("kubejs:cassava_seeds", 1), // mustard seed recipe
    ["tfc:seeds/potato", "#forge:dyes/brown"]
  );

  event.shapeless(
    Item.of("kubejs:yellow_mustard", 1), // yellow mustard recipe, tfc buckets
    [
      "kubejs:ground_mustard",
      Item.of("tfc:wooden_bucket", {
        fluid: { FluidName: "tfc:vinegar" },
      }).weakNBT(),
    ]
  );

  event.shapeless(
    Item.of("kubejs:tapioca_dough", 4), // tapioca dough recipe, tfc buckets
    [
      "kubejs:tapioca_starch",
      Item.of("tfc:wooden_bucket", {
        fluid: { FluidName: "minecraft:water" },
      }).weakNBT(),
      "#tfc:sweetener",
    ]
  );

  event.shapeless(
    Item.of("kubejs:tapioca_dough", 4), // tapioca dough recipe, tfc buckets
    ["kubejs:tapioca_starch", "minecraft:water_bucket", "#tfc:sweetener"]
  );

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

  event.shapeless(
    Item.of("kubejs:yellow_mustard", 1), // yellow mustard recipe, vanilla bucket
    ["kubejs:ground_mustard", "tfc:bucket/vinegar"]
  );

  event.shapeless(
    Item.of("kubejs:raw_dough", 1), // raw dough recipe
    ["#tfc:foods/dough"]
  );

  event.shapeless(
    Item.of("kubejs:cut_hot_dog_bun", 1), // cut hot dog bun recipe
    ["kubejs:uncut_hot_dog_bun", "#forge:tools/knives"]
  );

  event.smelting(
    Item.of("kubejs:uncut_hot_dog_bun", 1), // uncut hot dog bun recipe
    "kubejs:raw_hot_dog_bun"
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

  event.recipes.tfc
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

  event.recipes.tfc
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

  event.recipes.tfc //1x boba
    .pot(
      Item.of("1x kubejs:unboiled_boba_pearls"),
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput(Item.of("kubejs:boiled_boba_pearls"))
    .id("kubejs:boiled1x");

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
    .duration(100)
    .EUt(32);

  event.recipes.gtceu
    .extruder("empty_cup") // empty cup recipe
    .notConsumable("gtceu:bottle_extruder_mold")
    .itemInputs("kubejs:cellulose_pulp")
    .itemOutputs("kubejs:empty_cup")
    .duration(100)
    .EUt(32);

  event.recipes.gtceu
    .extruder("kubejs:raw_hot_dog") // raw hot dog recipe
    .itemInputs("gtceu:meat_dust", "kubejs:hot_dog_casing")
    .itemOutputs("kubejs:raw_hot_dog")
    .duration(100)
    .EUt(32);

  event.recipes.gtceu
    .forming_press("kubejs:unboiled_boba_pearls") // umboiled boba recipe
    .notConsumable("gtceu:ball_casting_mold")
    .itemInputs("kubejs:tapioca_dough")
    .itemOutputs("kubejs:unboiled_boba_pearls")
    .duration(80)
    .EUt(7);

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
