elements.sodium = {
    color: "#d1d1d1",
    behavior: behaviors.POWDER,
    category: "chemistry",
    state: "solid",
    density: 968,
    temp: 20,
    conduct: 0.8,
    burn: 100,
    burnTime: 50,
    fireColor: "#ffcc00",
    reactions: {
        "water": { elem1: "hydrogen", elem2: "lye", chance: 0.8, temp1: 100 },
        "acid": { elem1: "hydrogen", elem2: "salt_water", chance: 1, temp1: 200 },
        "chlorine": { elem1: "salt", elem2: null, chance: 0.5 }
    }
};

elements.chlorine = {
    color: "#d9f58c",
    behavior: behaviors.GAS,
    category: "chemistry",
    state: "gas",
    density: 3.2,
    temp: 20,
    viscosity: 0.1,
    reactions: {
        "water": { elem1: "acid", elem2: "oxygen", chance: 0.01 },
        "hydrogen": { elem1: "acid", elem2: null, chance: 0.1, temp1: 50 }
    }
};

elements.lye = {
    color: "#e8e8e8",
    behavior: behaviors.LIQUID,
    category: "chemistry",
    state: "liquid",
    density: 2130,
    viscosity: 10,
    reactions: {
        "acid": { elem1: "salt_water", elem2: "salt_water", chance: 0.8, temp1: 50 },
        "meat": { elem1: null, elem2: "slime", chance: 0.2 },
        "oil": { elem1: "soap", elem2: "soap", chance: 0.05 }
    }
};

elements.soap = {
    color: "#f0f0f0",
    behavior: behaviors.LIQUID,
    category: "chemistry",
    state: "liquid",
    density: 1010,
    viscosity: 50,
    reactions: {
        "water": { elem1: "foam", elem2: "foam", chance: 0.3 },
        "oil": { elem1: "dirty_water", elem2: null, chance: 0.5 }
    }
};

elements.magnesium = {
    color: "#e3e3e3",
    behavior: behaviors.POWDER,
    category: "chemistry",
    state: "solid",
    density: 1738,
    conduct: 0.9,
    tempHigh: 650,
    stateHigh: "fire",
    onBurn: function(pixel) {
        if (Math.random() < 0.2) {
            createPixel("white_glare", pixel.x, pixel.y);
        }
    },
    reactions: {
        "water": { elem1: "hydrogen", elem2: "oxide", chance: 0.001, temp1: 40 },
        "acid": { elem1: "hydrogen", elem2: "salt_water", chance: 0.9 }
    }
};

elements.oxide = {
    color: "#8c8c8c",
    behavior: behaviors.POWDER,
    category: "chemistry",
    state: "solid",
    density: 3580,
    tempHigh: 2800,
    stateHigh: "magma"
};

elements.copper_sulfate = {
    color: "#0077ff",
    behavior: behaviors.POWDER,
    category: "chemistry",
    state: "solid",
    density: 2284,
    reactions: {
        "water": { elem1: "blue_solution", elem2: "blue_solution", chance: 1 }
    }
};

elements.blue_solution = {
    color: "#4da6ff",
    behavior: behaviors.LIQUID,
    category: "chemistry",
    state: "liquid",
    density: 1100,
    reactions: {
        "iron": { elem1: "water", elem2: "copper", chance: 0.1 },
        "zinc": { elem1: "water", elem2: "copper", chance: 0.2 }
    }
};

elements.nitric_acid = {
    color: "#e1ff00",
    behavior: behaviors.LIQUID,
    category: "chemistry",
    state: "liquid",
    density: 1510,
    reactions: {
        "copper": { elem1: "nitrogen_dioxide", elem2: "blue_solution", chance: 0.1 },
        "silver": { elem1: "nitrogen_dioxide", elem2: "water", chance: 0.1 }
    }
};

elements.nitrogen_dioxide = {
    color: "#8b4513",
    behavior: behaviors.GAS,
    category: "chemistry",
    state: "gas",
    density: 1.5,
    tempHigh: 150,
    stateHigh: "fire"
};

elements.potassium_nitrate = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "chemistry",
    state: "solid",
    density: 2100,
    reactions: {
        "charcoal": { elem1: "fire", elem2: "carbon_dioxide", chance: 0.1, temp1: 300 },
        "sulfur": { elem1: "fire", elem2: "sulfur_dioxide", chance: 0.1, temp1: 300 }
    }
};

elements.sulfur_dioxide = {
    color: "#fcfca2",
    behavior: behaviors.GAS,
    category: "chemistry",
    state: "gas",
    density: 2.6,
    reactions: {
        "water": { elem1: "acid", elem2: null, chance: 0.05 }
    }
};

elements.catalyst = {
    color: "#444444",
    behavior: behaviors.POWDER,
    category: "chemistry",
    state: "solid",
    tick: function(pixel) {
        var neighbors = [
            [pixel.x+1, pixel.y], [pixel.x-1, pixel.y],
            [pixel.x, pixel.y+1], [pixel.x, pixel.y-1]
        ];
        for (var i = 0; i < neighbors.length; i++) {
            var neighbor = pixelMap[neighbors[i][0]]?.[neighbors[i][1]];
            if (neighbor && neighbor.element === "hydrogen_peroxide") {
                if (Math.random() < 0.8) {
                    changePixel(neighbor, "oxygen");
                    pixel.temp += 5;
                }
            }
        }
    }
};

elements.hydrogen_peroxide = {
    color: "#f0ffff",
    behavior: behaviors.LIQUID,
    category: "chemistry",
    state: "liquid",
    density: 1450,
    tempHigh: 150,
    stateHigh: ["steam", "oxygen"],
    reactions: {
        "blood": { elem1: "foam", elem2: "oxygen", chance: 0.5 }
    }
};
