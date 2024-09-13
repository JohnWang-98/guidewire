export let introduction = {
    title: "Introduction",
    content: "Guidewires were initially invented and used by Dotter and Judkins to cross a disease segment of the artery for further intervention. However, the initial wire used for coronary intervention was a spring coil guidewire over which a series of large rigid dilators were advanced.\n\n" +
        "Andreas Grüntzig replaced these dilators with inflatable balloons, which were introduced percutaneously, hence pioneering the era of percutaneous coronary angioplasty. " +
        "After Grüntzig pioneered the first angioplasty, a group of cardiologists met and formed a registry under The National Heart, Lung, and Blood Institute. Since then, significant improvement in different types of equipment and techniques were made.\n\n" +
        "The original dilatation catheter with a short tip of guidewire could not be modified once the catheter was introduced, providing the operator with no control to maneuver the catheter/wire inside the vessel. In 1981, Dr. Simpson developed a new catheter system with an independently steerable guidewire located in the balloon catheter’s central lumen, replacing the short fixed non-steerable wire tip (5 mm) manufactured by Andreas Grüntzig.[1] The introduction of the coaxial steerable guidewire was the first revolution in the history of coronary angioplasty.\n\n" +
        "Compared to the early version of guidewires, modern guidewires are designed to combine tip softness, trackability around curves, and precise torque control, which allow the guidewire to be steered through tortuous vessels and side branches.\n"
};

export let charAndFunctionality = [
    {
        components: "Core",
        functions: "Stability, give tactile feedback, continuous force transmission and tip control"
    },
    {
        components: "Tip",
        functions: "Steerability, provide direct force transmission and maneuvering"
    },
    {
        components: "Body",
        functions: "Trackability"
    },
    {
        components: "Coating",
        functions: "Hydrophilicity and trackability"
    },
    {
        components: "No Coating",
        functions: "Tactile feedback"
    }
];

export let wireTypes = {
    workhorse: [
        {
            name: "Nitinol",
            items: ["BMW", "Runthrough", "Turntrac", "Versaturn", "Cougar"]
        },
        {
            name: "Composite Core",
            items: ["Sion Blue"]
        },
        {
            name: "Dual Coil",
            items: ["Samurai RC"]
        },
        {
            name: "Stainless Steel",
            items: ["HI-Torque Floppy", "Forte Floppy", "Choice Floppy"]
        },
    ],

    polymer: [
        {
            name: "Soft, Non-tapered",
            items: ["Whisper", "Pilot 50", "Fielder", "Sion Black"]
        },
        {
            name: "Soft, Tapered",
            items: ["Fielder XT, XT-A, XT-R", "Fighter", "Bandit"]
        },
        {
            name: "Stiff",
            items: ["Pilot 200", "Gladius Mongo", "Raider"]
        }
    ],

    stiff: ["Gaia/Gaia Next", "Confianza Pro 12", "Miracle", "Ultimate", "Hornet 14", "Provia", "Astato 20, 40"],
    extraSupport: ["Grand Slam", "Iron Man", "Mailman", "CHOICE Extra Support", "HT Balance Heavyweight", "HT All Star"],
    other: ["Wiggle", "Suoh 03", "Externalization wires (RG3, R350)", "Rotawire Floppy", "ViperWire"],
};

export let atherectomy = [
    {
        title: "Rotational Atherectomy:",
        content: [
            "Rotawire has entirely different physical properties compared to conventional guidewires. It is a thinner device with its 0.009-inch diameter (except for the more distal radio-opaque segment, which is 0.014 inches). [10]",
            "This wire’s most crucial requirement is to provide an excellent and stable support function for the rotating burr.",
            "It is made of homogeneous stainless steel to have a stable support function with decreased wire manipulative properties (flexibility and torquability).",
            "Two types of Rotawires are available",
            "Rotawire Drive Floppy (one with moderate support but better trackability)",
            "Rotawire Drive Extra Support (one with extra support but poorer trackability)\n"
        ]
    },
    {
        title: "Orbital Atherectomy:",
        sub: "Orbital Atherectomy is performed over a 0.014” guidewire, in contrast to a 0.009” wire with rotational Atherectomy.",
        content: [
            "Viperwire is made of stainless steel to have a better support, silicone coating, and a radiopaque distal spring tip.",
            "Two Viperwires are available",
            "Viperwire Advance (stainless steel core: better support)",
            "Viperwire Advance with Flex Tip (Nitinol with stainless steel support coil) > better to navigate in complex anatomy.\n"
        ]
    },
];

export let typesMicroCatheter = [
    {
        name: "1)\tSingle lumen (based on size of catheter):",
        detail: [
            "Provide guidewire support in tortuous anatomy",
            "Facilitate guidewire placement and exchange\n"
        ]
    },
    {
        name: "2)\tDual lumen (Twin-Pass Torque & Twin-Pass, Sasuke, Crusade, Fine Duo, NHancer Rx, ReCross):",
        detail: [
            "Useful for guidewire exchange in difficult wiring cases and acts like two micro catheters",
            "Provide support in tortuous anatomy",
            "Help to steer the wire through the side branch",
            "Facilitate to wire the bifurcation lesion",
            "Collateral access in CTO-PCI\n"
        ]
    },
    {
        name: "3)\tAngulated (SuperCross, Venture, Swift Ninja):",
        detail: [
            "Facilitate crossing the severely angulated side branch",
            "Provide great back up wire support",
        ]
    },
];

export let wireSelection = {
    intro: "Knowing the properties of guidewire and the specifics of the different types are crucial in selecting appropriate guidewire. However, it is strongly recommended to choose and master only a few wires instead of having superficial knowledge about multiple wires.",
    wire_tip_config: {
        name: "a)  Wire tip configuration and manipulation:",
        content: "The majority of guidewires are straight tipped and can be modified/shaped according to the vessel contour. The tip can be shaped with either the introducer needle or the shaping needle that comes along with the wire. Usually, a simple J shaped curve at the wire’s distal end will help track the wire through the vessel. The wire should be advanced gently through the stenosed segment. Forceful pushing of the wire can result in plaque disruption, leading to acute thrombus formation and occlusion of the vessel. It is recommended that 180-degree clockwise or counterclockwise rotations of the wire should be performed during advancement in order to avoid wire advancement into smaller branches.[5] However, 360-degree rotations should be avoided, particularly when a second wire is required to prevent entanglement.\n\n" +
            "The wire tip should be placed as distal as possible, so the wire’s stiff part is across the lesion, providing adequate support to advance interventional devices.\n"
    },
    tip_wire_specific: {
        name: "b)  Tip to wire specific blood vessel (LAD, LCx, RCA):",
        types: [
            {
                name: "1.\tLeft anterior descending (LAD):",
                content: "The left anterior oblique (LAO) caudal view is the best initial view to wire the LAD. Once the wire position is confirmed in the proximal LAD, further advancement into the mid and distal LAD should be carried out in the right anterior oblique (RAO) cranial view."
            },
            {
                name: "2.\tLeft Circumflex (LCx):",
                content: "A broader tip helps with entry into the LCx, and a smaller curve supports advancement into the Obtuse marginal (OM)."
            },
            {
                name: "3.\tRight Coronary Artery (RCA):",
                content: "If the RCA’s origin is relatively normal, a conventional soft wire with good steerability to avoid side branches is chosen first."
            }
        ],
    },
    characteristics: [
        {
            workhorse: "Safety",
            frontline_finesse: "1:1 torque",
            support: "Provide more support for tortuous anatomy & distal lesions",
            specialty: "Variety of tip stiffness and/or tip tapers for excellent crossability",
        },
        {
            workhorse: "1:1 torque",
            frontline_finesse: "Excellent trackability through tortuosity",
            support: "Does not spring back",
            specialty: "Tip shape retention",
        },
        {
            workhorse: "Moderate support",
            frontline_finesse: "Single core",
            support: "Soft gentle tip",
            specialty: "Moderate support",
        },
        {
            workhorse: "Excellent tip shape retention",
            frontline_finesse: "Moderate support",
            support: "",
            specialty: "Low frequency of perforation",
        },
        {
            workhorse: "Durable / resist tip breakage",
            frontline_finesse: "Low frequency of perforation",
            support: "",
            specialty: "",
        },
        {
            workhorse: "",
            frontline_finesse: "Avoid subintimal passage",
            support: "",
            specialty: "",
        },
        {
            workhorse: "",
            frontline_finesse: "Lubricity with tactile feedback",
            support: "",
            specialty: "",
        },
    ],
    non_cto : {
        name: "d)  Non-CTO guidewire selection:",
        types: [
            {
                name: "1.\tSimple/Uncomplicated Lesion:",
                content: [
                    "To treat simple, concentric stenosis of the artery, the vital element of the wire is safety.",
                    "As these wires are not required to go through difficult or extreme anatomies, unique properties are not required.",
                    "The wire should have an atraumatic tip, good torquability, and favorable trackability with a spring coiled nitinol wire.",
                    "The choice of wires can include Runthrough, Balance Middleweight, and Sion Blue.\n",
                ]
            },
            {
                name: "2.\tTortuous Vessel:",
                content: [
                    "In dealing with tortuous anatomy, the workhorse wires aren’t designed to tackle this challenging lesion and often fail to navigate through the lesion.",
                    "The presence of wire’s flexibility, lubricity, and excellent trackability is essential to tackle this challenging anatomy.",
                    "The optimal wire should have a soft tip, polymer/hydrophilic cover, moderate support, or a hybrid type with a hydrophilic body and hydrophobic distal tip.",
                    "The choice of wires can includes Fielder, Whisper, Pilot 50 and CHOICE Floppy.\n"
                ]
            },
            {
                name: "3.\tCalcified Lesion:",
                content: [
                    "Two distinct components are involved in wiring a calcific lesion: 1) crossing the lesion and 2) delivering the devices.",
                    "The ideal wire to cross a heavy calcified lesion should have a soft tip with polymer/hydrophilic cover or a hybrid type of wire (hydrophobic tip and hydrophilic body). The wire choice can be Runthrough, Fielder, Whisper, and Pilot 50.",
                    "To deliver PCI devices through a calcified lesion, the wire’s crucial characteristics include high support, good tactile feedback, and excellent torquability/trackability.",
                    "The wires selection includes Iron Man, Mailman, Hi-Torque Balance Heavyweight, the Hi-Torque All-Star, or the CHOICE Extra Support with the buddy wire technique.\n",
                ]
            },
            {
                name: "4.\tBifurcation Lesion:",
                content: [
                    "The guidewire properties to tackle a bifurcation lesion should include slipperiness, excellent trackability, and slightly stronger tip load. It is paramount not to choose those with a higher risk of wire retrieval damage (e.g., non-polymer-coated wires) as the wire might be jailed during the procedure.[9]",
                    "The choice of wires for bifurcation intervention can include a workhorse wire (Runthrough, BMW, CHOICE Floppy) in the main branch and polymer-coated wire in the jailed side branch (Fielder, Pilot 50, Whisper MS).",
                    "Occasionally, an aggressive wire with more tip stiffness (Gaia 2 or MiracleBros 3) along with a microcatheter may be required to enter the side branch in a challenging case.\n"
                ]
            },
            {
                name: "5.\tThrombotic Occlusion:",
                content: [
                    "In a setting of an acute thrombotic lesion, the wire shouldn’t have significant resistance while traversing a lesion.",
                    "The main objective is to cross the occlusion and advance the wire to the distal lumen softly and atraumatically.",
                    "A soft wire would be the choice rather than a stiffer one with the hydrophilic or coated property. The operator can use any workhorse wire in this situation.",
                    "In subacute occlusions, the thrombus material could have become more organized and may require a stiffer tip and higher tip load to facilitate crossing the lesion. The wires choice can be Fielder, Gaia series, and MiracleBros 3.\n",
                ]
            },
            {
                name: "6.\tAngulated Lesion:",
                content: [
                    "The wire properties to navigate the angulated lesion is torquability, trackability, and wire flexibility. The ideal wire would be a soft tip with polymer jacket and hydrophilic cover.",
                    "Our choice of wires are Fielder, Whisper, and Pilot 50.",
                    "However, we may require a stiffer tip with hydrophobic coating at the tip to have a better tactile feedback with torquability such as MiracleBros and Provia.",
                    "Sometimes, we may require additional devices (i.e., angulated microcatheter or dual lumen catheter) to navigate an angulated lesion or when re-crossing a jailed side branch.\n"
                ]
            },
        ],
    },
};

export let anteGradApproach = [
    {
        name: "Our choice of wires for Antegrade Wire Escalation (AWE) (Stepwise approach) includes:",
        content: [
            "Fielder (Non tapered polymer jacket tip), Fielder XT/XT-A/XT-R (Tapered polymer jacket tip)",
            "MiracleBros (Open Coil, Straight tip, high tip stiffness > facilitates drilling and can create a curve) or Gaia/Gaia Next series (Tapered, hydrophilic coating, composite core with 1:1 torque, high tip stiffness)",
            "Confianza 9/12 (Tapered, hydrophilic coating, high tip stiffness)\n"
        ]
    },
    {
        name: "Wire for microchannel tracking:",
        content: [
            "Fielder, Fielder XT, Fielder XT-A",
            "Gaia/Gaia Next series",
            "High Torque Pilot 50/150\n"
        ]
    },
    {
        name: "Wire for Drilling:",
        content: [
            "MiracleBros 6/12",
            "Confianza Pro 9, 12",
            "Pilot 200",
            "Progress 200T\n"
        ]
    },
    {
        name: "If the vessel course is ambiguous:",
        content: [
            "Pilot 200",
            "Confianza Pro",
            "Hornet 10, 14\n"
        ]
    },
    {
        name: "Wire selection based on the location",
        sub: "Crossing the proximal cap:",
        content: [
            "Fielder, Fielder XT/XT-A/XT-R (find microchannel)",
            "Gaia/Gaia Next series",
            "MiracleBros 3, 4.5, 6",
            "Confianza Pro\n"
        ]
    },
    {
        name: "Navigating through the vessel:",
        content: [
            "Gaia/Gaia Next series",
            "MiracleBros 4.5, 6",
            "Confianza Pro",
            "Ultimatebros 3",
            "Progress 140T, 200T\n"
        ]
    },
    {
        name: "Distal entry into the lumen:",
        content: [
            "Confianza Pro 12 (calcified distal cap)",
            "Progress 200T",
            "Hornet 14",
            "Astato 20, 40 (calcified distal cap)\n"
        ]
    },
];

export let commonlyUsedGuideWires = {
    polymer_jacket: [
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "0.6",
            "properties": "Stainless steel core, Tapered tip, Hydrophilic",
            "title": "Fielder XT-R"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "0.8",
            "properties": "Stainless steel core, Tapered tip, Hydrophilic",
            "title": "Fielder XT"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "0.8",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Fielder FC"
        },
        {

            "manufacturer": "Asahi Intecc",
            "tip_load": "0.8",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Sion Black"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "1",
            "properties": "Stainless steel core, Tapered tip, Hydrophilic",
            "title": "Fielder XT-A"
        },
        {
            "manufacturer": "Boston Scientifc",
            "tip_load": "1.2",
            "properties": "Stainless steel core, Tapered tip, Hydrophilic",
            "title": "Fighter"
        },
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "0.8, 1.0, 1.2",
            "properties": "Durasteel core, Hydrophilic",
            "title": "Whisper LS, MS, ES"
        },
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "1.5",
            "properties": "Durasteel core, Hydrophilic",
            "title": "Pilot 50"
        },
        {
            "manufacturer": "Boston Scientific",
            "tip_load": "1.7",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "PT Graphix Intermediate"
        },
        {
            "manufacturer": "Boston Scientific",
            "tip_load": "2.1",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Choice PT Floppy"
        },
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "2.7/4.4",
            "properties": "Durasteel core, Hydrophilic",
            "title": "Pilot 150/200"
        },
        {
            "manufacturer": "Boston Scientific",
            "tip_load": "2.9",
            "properties": "Nitinol core, Hydrophilic",
            "title": "PT2 Moderate support"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "3",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Gladius"
        },
        {
            "manufacturer": "Cordis",
            "tip_load": "6.8",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Shinobi Plus"
        },
        {
            "manufacturer": "Cordis",
            "tip_load": "7",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Shinobi"
        },
        {
            "manufacturer": "Terumo",
            "tip_load": "7.7",
            "properties": "Nitinol core, Hydrophilic",
            "title": "Crosswire NT"
        }
    ],
    non_polymer_jacket: [
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "0.3",
            "properties": "Stainless Steel core, Hydrophilic",
            "title": "Suoh 03"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "0.5",
            "properties": "Stainless steel core with hybrid coating",
            "title": "SION Blue"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "0.7",
            "properties": "Stainless Steel core, Hydrophilic",
            "title": "SION (hydrophilic)"
        },
        {
            "manufacturer": "Terumo",
            "tip_load": "1",
            "properties": "Duo Core, hydrophilic and uncoated distal tip",
            "title": "Runthrough NS tapered (0.008”)"
        },
        {
            "manufacturer": "Boston Scientific",
            "tip_load": "1.2",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Samurai RC"
        },
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "1.7",
            "properties": "Stainless steel core, Hydrophophic",
            "title": "Cross-It 100XT (0.010”)"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "1.7, 3.5, 4.5",
            "properties": "Stainless steel core, hydrophilic and uncoated distal tip",
            "title": "Gaia 1st (0.010”), 2nd (0.011”), and 3rd (0.012”)"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "2, 4, 6",
            "properties": "Stainless steel core, hydrophilic and uncoated distal tip",
            "title": "Gaia Next 1 (0.011”), Gaia Next 2 (0.012”), Gaia Next 3 (0.012”)"
        },
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "3",
            "properties": "Stainless steel core, hydrophilic and uncoated distal tip",
            "title": "Ultimate 3"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "3, 6, 12",
            "properties": "Stainless steel core, Hydrophobic",
            "title": "MiracleBros 3, 6, 12"
        },
        {
            "manufacturer": "Medtronic",
            "tip_load": "5.1, 8.0",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Persuader 3 (-philic), 6 (-phobic)"
        },
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "5.5, 9.7, 13.9",
            "properties": "Stainless steel core, Hydrophilic and uncoated distal tip",
            "title": "PROGRESS 40, 80, 120"
        },
        {
            "manufacturer": "Medtronic",
            "tip_load": "8.3, 9.1",
            "properties": "Stainless steel core, Hydrophilic and uncoated distal tip",
            "title": "ProVia 3 (-philic), 6 (-phobic)"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "8.6, 12",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Confianza 9 and 12 (-phobic)"
        },
        {
            "manufacturer": "Medtronic",
            "tip_load": "9.1",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Persuader 9 (0.011”)"
        },
        {
            "manufacturer": "Medtronic",
            "tip_load": "9.1",
            "properties": "Stainless steel core",
            "title": "Persuader 9 (-phobic)"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "9.3, 12.4",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Confianza Pro 9, 12 (0.009”)"
        },
        {
            "manufacturer": "Boston Scientific",
            "tip_load": "10, 14",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Hornet 10, 14 (0.008”)"
        },
        {
            "manufacturer": "Medtronic",
            "tip_load": "11.8, 13.5",
            "properties": "Stainless steel core",
            "title": "ProVia 9, 12 (-phobic) (0.009”)"
        },
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "12.5, 13.3",
            "properties": "Durasteel core, Hydrophilic, tapered tip",
            "title": "PROGRESS 140T, 200T (0.0105”, 0.009”)"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "20",
            "properties": "Stainless steel core, tapered tip, hydrophilic and uncoated distal tip",
            "title": "Astato 20 (0.008”)"
        },
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "40",
            "properties": "Stainless steel core, tapered tip, hydrophilic and uncoated distal tip",
            "title": 'Astato XS 40 (0.014")'
        }
    ],
    externalization_wires: [
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "3",
            "properties": "Stainless Steel core, distal hydrophobic with proximal hydrophilic coating",
            "title": "RG3"
        },
        {
            "manufacturer": "Teleflex",
            "tip_load": "3",
            "properties": "Nitinol core, hydrophilic coating",
            "title": "R350"
        }
    ],
    wiggle_wire: [
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "1",
            "properties": "Stainless steel core, Hydrophilic",
            "title": "Wiggle"
        }
    ],
    extra_support_wires: [
        {
            "manufacturer": "Asahi Intecc",
            "tip_load": "0.7",
            "properties": "Stainless steel core, Hydrophobic",
            "title": "Grand Slam"
        },
        {
            "manufacturer": "Abbott Vascular",
            "tip_load": "1",
            "properties": "Stainless steel core, Hydrophobic",
            "title": "Iron Man"
        },
        {
            "manufacturer": "Boston Scientific",
            "tip_load": "0.8",
            "properties": "Stainless steel core, Hydrophilic and uncoated distal tip",
            "title": "Mailman"
        }
    ]
};

export let ctoApproach = [
    {
        appearance_cto: require("../../../assets/basics_images/image30.png"),
        appearance_cto_text: "Tapered Stump",
        first_choice: "Fielder\n" +
            "Fielder XT",
        second_choice: "MiracleBros 6",
        third_choice: "Confianza Pro 9\n" +
            "Confianza Pro 12",
    },
    {
        appearance_cto: require("../../../assets/basics_images/image31.png"),
        appearance_cto_text: "Blunt Stump",
        first_choice: "MiracleBros 6",
        second_choice: "Confianza Pro 9\n" +
            "Confianza Pro 12",
        third_choice: "Progress 140\n" +
            "Progress 200",
    },
    {
        appearance_cto: require("../../../assets/basics_images/image32.png"),
        appearance_cto_text: "Functional CTO",
        first_choice: "Fielder\n" +
            "Fielder XT",
        second_choice: "MiracleBros 6",
        third_choice: "Confianza Pro 9\n" +
            "Confianza Pro 12",
    },
    {
        appearance_cto: require("../../../assets/basics_images/image33.png"),
        appearance_cto_text: "Bridging collaterals",
        first_choice: "Fielder\n" +
            "Fielder XT",
        second_choice: "Confianza Pro 9\n" +
            "Confianza Pro 12",
        third_choice: "Progress 200",
    },
    {
        appearance_cto: require("../../../assets/basics_images/image34.png"),
        appearance_cto_text: "Severe calcification",
        first_choice: "MiracleBros 6",
        second_choice: "Progress 200",
        third_choice: "Confianza Pro 9\n" +
            "Confianza Pro 12",
    },
];
