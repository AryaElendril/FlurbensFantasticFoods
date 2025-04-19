//Produced by Arya The Elf
//Updated and made recipes automatable by JoaquinDG

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("fff:choking")
    .harmful()
    .effectTick((entity, level) => {
      if (entity.age % 20 == 0) entity.attack(1);
    });
});

StartupEvents.registry("block", (e) => {

  e.create("kubejs:cucumber", "tfc:crop") // initialize the cucumber plant
    .nutrient("potassium")
    .productItem("kubejs:cucumber_fruit")
    .tag("tfc:crop")
    .tag("tfc:plants")
    .noCollision()
    .notSolid()
    .model("kubejs:block/cucumber_age_7");

  e.create("kubejs:mustard", "tfc:crop") // initialize the mustard plant
    .nutrient("potassium")
    .productItem("kubejs:mustard_seed_pod")
    .tag("tfc:crop")
    .tag("tfc:plants")
    .noCollision()
    .notSolid()
    .model("kubejs:block/mustard_age_7");

  e.create("kubejs:cassava", "tfc:crop") // initialize the cassava plant
    .nutrient("potassium")
    .productItem("kubejs:cassava_root")
    .tag("tfc:crop")
    .tag("tfc:plants")
    .noCollision()
    .notSolid()
    .model("kubejs:block/cassava_age_7");

});

StartupEvents.registry("fluid", (e) => {
  e.create("white_liquor") // initialize the white liquor fluid
    .thinTexture(0xdbeca4)
    .bucketColor(0xdbeca4)
    .displayName("White Liquor")
    .tag("tfc:usable_in_barrel");

  e.create("taro_milk") // initialize the taro milk fluid
    .thinTexture(0xf7f0ff)
    .bucketColor(0xf7f0ff)
    .displayName("Taro Milk")
    .tag("tfc:usable_in_barrel");
});

// Register custom items and recipes

StartupEvents.registry("item", (e) => {

  const rawHotDog = e
    .create("raw_hot_dog")
    .displayName("Raw Hot Dog")
    .texture("fff:item/raw_hot_dog")
    .tag("tfc:foods")
    .tag("firmalife:foods/heatable")
    .food((food) => {
      food.hunger(3); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(true); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const cookedHotDog = e
    .create("cooked_hot_dog")
    .displayName("Cooked Hot Dog")
    .texture("fff:item/cooked_hot_dog")
    .food((food) => {
      food.hunger(4); // Amount of hunger restored
      food.saturation(4); // Saturation restored
      food.meat(true); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const mustardSeedPod = e
    .create("mustard_seed_pod")
    .displayName("Mustard Seed Pod")
    .texture("fff:item/mustard_seed_pod");

  const groundMustard = e
    .create("ground_mustard")
    .displayName("Ground Mustard Seed")
    .texture("fff:item/ground_mustard");

  const yellowMustard = e
    .create("yellow_mustard")
    .displayName("Yellow Mustard")
    .texture("fff:item/yellow_mustard");

  const hotDogCasing = e
    .create("hot_dog_casing")
    .displayName("Hot Dog Casing")
    .texture("fff:item/hot_dog_casing");

  const cellulosePulp = e
    .create("cellulose_pulp")
    .displayName("Cellulose Pulp")
    .texture("fff:item/cellulose_pulp");

  const tapiocaStarch = e
    .create("tapioca_starch")
    .displayName("Tapioca Starch")
    .texture("fff:item/tapioca_starch");

  const tapiocaDough = e
    .create("tapioca_dough")
    .displayName("Tapioca Dough")
    .texture("fff:item/tapioca_dough");

  const rawBoba = e
    .create("unboiled_boba_pearls")
    .displayName("Unboiled Boba Pearls")
    .texture("fff:item/unboiled_boba_pearls");

  const cookedBoba = e
    .create("boiled_boba_pearls")
    .displayName("Boiled Boba Pearls")
    .texture("fff:item/boiled_boba_pearls");

  const emptyCup = e
    .create("empty_cup")
    .displayName("Empty Cup")
    .texture("fff:item/empty_boba_cup");

  const rawDough = e
    .create("raw_dough")
    .displayName("Raw Dough")
    .texture("fff:item/raw_dough")
    .tag("tfc:any_knapping");

  const raspberryBoba = e
    .create("raspberry_boba")
    .displayName("Raspberry Boba Tea")
    .texture("fff:item/raspberry_boba")
    .tag("tfc:foods")
    .tooltip(["§7A refreshingly sweet treat!"])
    .useAnimation("drink")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(true); // Whether it can be eaten when the player is not hungry
      food.eaten((ctx) => {
        const random = Math.random(); // Generate a random number between 0 and 1
        const probability = 0.1; // Set the desired probability (in this case, 25%)
        if (["Dragonium10190", "Angelic_Arya"].includes(ctx.player.username) && random <= probability) {
          ctx.player.potionEffects.add(
            "fff:choking",
            40,
            0,
            false,
            true
          );
        }
      });
    });

  const taroBoba = e
    .create("taro_boba")
    .displayName("Dragoniums Delectable Taro Milk Tea")
    .texture("fff:item/taro_boba")
    .tag("tfc:foods")
    .tooltip(["§7A refreshingly sweet treat!"])
    .useAnimation("drink")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(true); // Whether it can be eaten when the player is not hungry
      food.eaten((ctx) => {
        const random = Math.random(); // Generate a random number between 0 and 1
        const probability = 0.25; // Set the desired probability (in this case, 25%)
        if (["Dragonium10190", "Angelic_Arya"].includes(ctx.player.username) && random <= probability) {
          ctx.player.potionEffects.add(
            "fff:choking",
            40,
            0,
            false,
            true
          );
        }
      });
    });

  const rawHotDogBun = e
    .create("raw_hot_dog_bun")
    .displayName("Raw Hot Dog Bun")
    .texture("fff:item/raw_hot_dog_bun")
    .tag("tfc:foods")
    .tag("tfc:foods/dough")
    .tag("firmalife:foods/extra_dough")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(1); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const hotDogBun = e
    .create("uncut_hot_dog_bun")
    .displayName("Uncut Hot Dog Bun")
    .texture("fff:item/uncut_hot_dog_bun")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(1); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const cutHotDogBun = e
    .create("cut_hot_dog_bun")
    .displayName("Hot Dog Bun")
    .texture("fff:item/cut_hot_dog_bun")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(1); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const choppedOnion = e
    .create("chopped_onion")
    .displayName("Chopped Onion")
    .texture("fff:item/chopped_onion")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(3); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const pickle = e
    .create("pickle")
    .displayName("Pickle")
    .texture("fff:item/pickle")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const cucumberFruit = e
    .create("cucumber_fruit")
    .displayName("Cucumber")
    .texture("fff:item/cucumber")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const cassavaRoot = e
    .create("cassava_root")
    .displayName("Cassava Root")
    .texture("fff:item/cassava_root")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const pickleSpear = e
    .create("pickle_spear")
    .displayName("Pickle Spear")
    .texture("fff:item/pickle_spear")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(1); // Amount of hunger restored
      food.saturation(1); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const sweetRelish = e
    .create("sweet_relish")
    .displayName("Sweet Relish")
    .texture("fff:item/sweet_relish")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const tomatoWedge = e
    .create("tomato_wedge")
    .displayName("Tomato Wedge")
    .texture("fff:item/tomato_wedge")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(3); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const flurbensTastyGlizzy = e
    .create("flurbens_tasty_glizzy")
    .displayName("Flurben's Tasty Glizzy")
    .texture("fff:item/flurbens_tasty_glizzy")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(8); // Amount of hunger restored
      food.saturation(0.8); // Saturation restored
      food.meat(true); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    })
    .tooltip(["§7A delicious and satisfying treat!"]);

});

StartupEvents.modifyCreativeTab("minecraft:food_and_drinks", (e) => {
  e.addAfter("minecraft:rabbit_stew", "kubejs:chopped_onion");
  e.addAfter("kubejs:chopped_onion", "kubejs:flurbens_tasty_glizzy");
});

