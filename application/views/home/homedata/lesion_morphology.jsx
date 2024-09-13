export const _simple = {
    Properties: [
        "To treat simple, concentric stenosis of the artery, the vital element of the wire is safety.",
        "As these wires are not required to go through difficulty or extreme anatomies, unique properties are not required.",
        "The wire should have an atraumatic tip, good torquability, and favorable trackability with a spring coiled nitinol wire."
    ],
    Examples: [
        {
            name: "Runthrough",
            linkItems: 1,
        },
        {
            name: "Balance Middleweight",
            linkItems: 2,
        },
        {
            name: "Sion Blue",
            linkItems: 3,
        },
    ],
    cases: [23]
};

export const tortuous = {
    Properties: [
        "In dealing with tortuous anatomy, the workhorse wires aren't designed to tackle this challenging lesion and often fail to navigate through the lesion.",
        "The wire’s flexibility, lubricity, and excellent trackability is essential in tackling these challenging anatomies.",
        "The optimal wire should have a soft tip, polymer/hydrophilic cover, moderate support, or a hybrid type with a hydrophilic body and hydrophobic distal tip."
    ],
    Examples: [
        {
            name: "Fielder",
            linkItems: 4,
        },
        {
            name: "Whisper",
            linkItems: 5,
        },
        {
            name: "Pilot 50",
            linkItems: 6,
        },
        {
            name: "CHOICE Floppy",
            linkItems: 7,
        }
    ],
    cases: [1,2, 22],
};

export const calcified = {
    Properties: [
        "Two distinct components are involved in a calcified lesion wiring:" +
        "\n" + "1: crossing the lesion.\n" + "2: delivering the devices.",
        "The ideal wire to cross a heavy calcified lesion should have a soft tip with polymer/hydrophilic cover or a hybrid type of wire (hydrophobic tip and hydrophilic body).",
        "The wire's crucial characteristics include high support, good tactile feedback, and excellent torquability/trackability for device delivery in a calcified lesion."
    ],
    Examples: [
        {
            name: "Crossing the lesion",
            linkItems: 0,
        },
        {
            name: "Runthrough",
            linkItems: 8,
        },
        {
            name: "Fielder",
            linkItems: 9,
        },
        {
            name: "Whisper",
            linkItems: 10,
        },
        {
            name: "Pilot 50",
            linkItems: 11,
        },
        {
            name: "Delivering the devices:",
            linkItems: 0,
        },
        {
            name: "Iron Man",
            linkItems: 12,
        },
        {
            name: "Mailman",
            linkItems: 13,
        },
        {
            name: "Hi-Torque Balance HeavyWeight",
            linkItems: 14,
        },
        {
            name: "Hi-Torque All-Star",
            linkItems: 15,
        },
        {
            name: "CHOICE Extra Support with the buddy wire technique",
            linkItems: 16,
        }
    ],
    cases: [3,9, 13, 19, 20, 24]
};

export const bifurcation = {
    Properties: [
        "The guidewire properties to tackle the lesion should include slipperiness, excellent trackability, and slightly stronger tip load. It is paramount not to choose those with a higher risk of wire retrieval damage (e.g., non-polymer-coated wires) as the wire might be jailed during the procedure.",
        "Occasionally, aggressive wire with more tip stiffness along with a microcatheter may be required to enter the side branch in a challenging case."
    ],
    Examples: [
        {
            name: "Workhorse wires (main branch)",
            linkItems: 0,
        },
        {
            name: "Runthrough",
            linkItems: 17,
        },
        {
            name: "BMW",
            linkItems: 18,
        },
        {
            name: "CHOICE Floppy",
            linkItems: 19,
        },
        {
            name: "Polymer-coated wire (jailed side branch)",
            linkItems: 0,
        },
        {
            name: "Fielder",
            linkItems: 20,
        },
        {
            name: "Whisper",
            linkItems: 21,
        },
        {
            name: "Pilot 50",
            linkItems: 22,
        },
        {
            name: "Challenging case (side branch)",
            linkItems: 0,
        },
        {
            name: "Gaia 2",
            linkItems: 23,
        },
        {
            name: "MiracleBros 3",
            linkItems: 24,
        },
        {
            name: "along with microcatheter",
            linkItems: 0,
        }
    ],
    cases: [3,4, 13, 19, 22]
}

export const thrombotic = {
    Properties: [
        "In a setting of an acute thrombotic lesion, the wire shouldn't have significant resistance while traversing a lesion.",
        "The main objective is to cross the occlusion and advance the wire to the distal lumen softly and atraumatically.",
        "A soft wire would be the choice rather than a stiffer one with the hydrophilic or coated property. The operator can use any workhorse wire in this situation.",
        "In subacute occlusions, the thrombus material could have become more organized and may require a stiffer tip and higher tip load to facilitate crossing the lesion."
    ],
    Examples: [
        {
            name: "Fielder",
            linkItems: 25,
        },
        {
            name: "Gaia series",
            linkItems: 26,
        },
        {
            name: "MiracleBros 3",
            linkItems: 27,
        }
    ],
    cases: [11]
}

export const angulated = {
    Properties: [
        "The wire properties to navigate the angulated lesion is torquability, trackability, and wire flexibility. The ideal wire would be a soft tip with polymer jacket and hydrophilic cover.",
        "However, we may require stiffer tip with hydrophobic coating at the tip to have a better tactile feedback with torquability.",
        "Sometimes, we may require additional devices to navigate an angulated lesion or when re-crossing a jailed side branch."
    ],
    Examples: [
        {
            name: "Fielder",
            linkItems: 28,
        },
        {
            name: "Whisper",
            linkItems: 29,

        },
        {
            name: "Pilot 50",
            linkItems: 30,
        },
        {
            name: "Better tactile feedback with torquability:",
            linkItems: 0,
        },
        {
            name: "MiracleBros",
            linkItems: 31,
        },
        {
            name: "Provia",
            linkItems: 32,
        },
        {
            name: "Additional devices:",
            linkItems: 0,
        },
        {
            name: "Angulated microcatheter",

        },
        {
            name: "Dual lumen catheter",

        }
    ],
    cases:[1,7, 8, 13, 22, 25],
}
