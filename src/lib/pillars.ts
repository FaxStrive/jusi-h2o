/**
 * Pillar page data for /water-treatment/[slug].
 *
 * Each pillar is 1,800+ word long-form content rendered through a shared
 * template. Authors: Marquis Pendergrass (verified founder, 2011).
 */

export type PillarFaq = { q: string; a: string };

export type PillarSection = {
  heading: string;
  // Paragraphs rendered as <p>. Use markdown-style links: [text](/path).
  paragraphs: string[];
  // Optional structured table inside the section.
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
  // Optional unordered list inside the section.
  list?: string[];
};

export type Pillar = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  bluf: string;
  heroImage: string;
  sections: PillarSection[];
  professionalSection: {
    heading: string;
    bullets: string[];
  };
  faqs: PillarFaq[];
  lastUpdated: string;
};

export const pillars: Pillar[] = [
  // ---------------------------------------------------------------------------
  // 1. HARD WATER TAMPA BAY
  // ---------------------------------------------------------------------------
  {
    slug: "hard-water-tampa-bay",
    title: "Hard Water in Tampa Bay: A Complete Treatment Guide",
    metaTitle: "Hard Water in Tampa Bay: Complete Treatment Guide (2026)",
    metaDescription:
      "Tampa Bay water runs 11 to 18 grains per gallon, well into the very hard range. Learn why, what it does to your home, and how to fix it. By Jusi H2O.",
    bluf: "Tampa Bay tap water typically tests between 11 and 18 grains per gallon (about 180 to 300 mg/L as calcium carbonate), placing it firmly in the very hard category by USGS standards. The cause is the Floridan Aquifer limestone substrate. The fix is a cation-exchange water softener sized to your tested hardness, usually paired with whole-house carbon filtration for chloramines.",
    heroImage: "/images/service-hero/whole-house-filtration.jpg",
    lastUpdated: "2026-05-14",
    sections: [
      {
        heading: "What hard water actually is (and what it is not)",
        paragraphs: [
          "Hard water is water that carries elevated dissolved calcium and magnesium. The USGS classifies anything above 10.5 grains per gallon as very hard, and most Tampa Bay neighborhoods exceed that threshold by a wide margin. It is not unsafe to drink, and your municipal utility is not failing any EPA primary standard by delivering it. Hardness is regulated only as an aesthetic concern in the United States.",
          "Tampa Bay water hardness traces directly to geology. The [Floridan Aquifer](/water-treatment/florida-well-water) lies under a thick layer of limestone and dolomite, both of which slowly dissolve as groundwater percolates through them. Tampa Bay Water blends aquifer supply with surface water from the Hillsborough River, the Tampa Bypass Canal, and the Alafia River, but the blended product still tests well above the very-hard threshold for most homes in Hillsborough, Pinellas, and Manatee counties.",
          "Hard water is distinct from contaminated water. It does not mean lead, PFAS, or bacteria are present. Those are separate conversations addressed by [reverse osmosis](/water-treatment/reverse-osmosis-drinking-water) at the kitchen tap and, for private wells, by [a full well-water treatment package](/water-treatment/florida-well-water).",
        ],
      },
      {
        heading: "How to know if your Tampa Bay home has hard water",
        paragraphs: [
          "You almost certainly do. The diagnostic question is not whether you have hard water, it is how hard. A quick self-check takes about thirty seconds.",
          "Look at your shower glass after the next normal use. If you see white film that wipes off with a fingernail but rebuilds within a week, you are seeing calcium carbonate scale. Check faucet aerators for the same chalky white buildup. Pull the dishwasher lower rack and look at the heating element: a thin gray-white crust is scale that is actively reducing the appliance's efficiency.",
          "For a measured number, use a hardness test strip from any hardware store, request a free in-home test from Jusi H2O ([schedule one here](/contact)), or pull your most recent water utility report. Test strips read in grains per gallon (gpg) or parts per million (ppm). Convert by dividing ppm by 17.1 to get gpg. Most Tampa Bay homes land between 11 and 18 gpg.",
        ],
        list: [
          "White film on shower glass and shower heads",
          "Chalky buildup on faucet aerators",
          "Spots on dishes and glassware out of the dishwasher",
          "Soap that never quite lathers, even with extra product",
          "Stiff, scratchy laundry and towels that lose absorbency",
          "Water heater that gurgles or recovers slower than rated",
        ],
      },
      {
        heading: "What hard water costs you in a Tampa Bay home",
        paragraphs: [
          "Water heaters take the heaviest hit. The U.S. Department of Energy has documented that a quarter inch of scale on a heating element reduces efficiency by as much as 25 percent. In a Tampa Bay home heating water from a starting temperature of around 75 degrees Fahrenheit year-round, that translates to noticeable monthly bill increases, plus an early failure. Conventional tank heaters in this region commonly fail in eight to ten years on untreated hard water, versus twelve to fifteen with softening upstream.",
          "Dishwashers, washing machines, and ice makers all carry small heating or pumping elements that scale up the same way. Replacement cycles shorten by roughly 30 to 40 percent in Tampa Bay homes without softeners, according to long-running Water Quality Research Foundation studies.",
          "Detergent use climbs sharply, too. A 2009 Battelle Memorial Institute study found that soft water reduces detergent use by up to 50 percent for laundry and dishwashing, and households using soft water reported cleaner outcomes at lower wash temperatures. That is fuel, soap, and time, all on the wrong side of the ledger when hard water is left untreated.",
        ],
      },
      {
        heading: "Three approaches that actually work in Tampa Bay",
        paragraphs: [
          "There are three legitimate hard-water treatment paths and one popular path that does not work for this region.",
          "Salt-based cation-exchange softeners are the standard recommendation across the Tampa Bay metro. They remove calcium and magnesium and replace them with a small amount of sodium, regenerate on a salt cycle, and reliably produce zero-hardness water at every fixture in the home.",
          "Template-assisted crystallization, often marketed as salt-free conditioners, can reduce visible scale buildup in many homes but does not produce true soft water. They are appropriate for households with sodium-restricted occupants who cannot use any softener, or as a partial solution where a softener will not fit. They do not give you the lather, the laundry softness, or the appliance-life benefits of a real softener.",
          "Magnetic and electronic descalers, despite widespread marketing, have never produced consistent results in independent testing. We do not install them.",
        ],
        table: {
          caption: "Hard-water treatment options for Tampa Bay homes",
          headers: ["Approach", "Mechanism", "Outcome at the tap", "Typical installed cost"],
          rows: [
            ["Cation-exchange softener", "Resin bed swaps calcium and magnesium for sodium", "Zero hardness; full softener benefits", "$1,800 to $3,800"],
            ["Template-assisted crystallization", "Catalyst converts hardness to insoluble crystals", "Hardness still present; reduced visible scale", "$1,200 to $2,500"],
            ["Whole-house carbon plus softener", "Carbon for chloramines plus softener stage", "Soft water plus chloramine-free shower water", "$3,200 to $6,500"],
            ["Magnetic or electronic descaler", "Marketing claim; no measurable mechanism", "No verified hardness reduction", "Not recommended"],
          ],
        },
      },
      {
        heading: "Recommended Method: a decision table",
        paragraphs: [
          "Match the symptom on the left to the recommended action on the right. This is the same decision rubric our technicians use during free in-home water tests.",
        ],
        table: {
          caption: "Symptom to action table",
          headers: ["Condition", "Recommended action", "Service link"],
          rows: [
            ["Scale on shower glass and aerators, soap won't lather", "Install a cation-exchange water softener", "[Water Softener](/services/water-softeners)"],
            ["Chlorine or chloramine smell at the shower", "Install whole-house carbon ahead of the softener", "[Whole-House Filtration](/services/water-filtration)"],
            ["Want crisp drinking water and pure ice", "Add a kitchen-tap reverse osmosis system", "[Reverse Osmosis](/services/reverse-osmosis)"],
            ["Private well with orange staining or rotten-egg smell", "Full well-water treatment package", "[Well Water Treatment](/services/well-water)"],
            ["Not sure where to start", "Schedule a free in-home water test", "[Free Water Test](/contact)"],
          ],
        },
      },
      {
        heading: "What our install looks like",
        paragraphs: [
          "Most Tampa Bay softener installs take two to four hours. Our technician shuts off the main, plumbs in a bypass loop so future service is easy, mounts the resin tank and brine tank, runs a drain line to your nearest standard plumbing drain or laundry standpipe, programs the head to your tested hardness, and verifies zero hardness at a tested fixture before leaving. Permitting is included where required by your municipality.",
          "Pricing for a standard installed cation-exchange softener in Tampa Bay falls in the $1,800 to $3,800 range for residential. A whole-house carbon and softener combination runs $3,200 to $6,500. These ranges are typical industry pricing for installed systems with a manufacturer warranty; we provide a precise written quote after a free in-home water test.",
          "Maintenance is light. Add salt every four to eight weeks (Jusi H2O can deliver and load it as part of [JusiCare+](/services/jusicare)). The resin itself typically lasts 12 to 20 years on Tampa Bay water, with a longer service life when chlorinated municipal water passes through a carbon stage first.",
        ],
      },
      {
        heading: "Maintenance tips for Tampa Bay homeowners",
        paragraphs: [
          "Softeners are forgiving but they reward small habits. Keep the brine tank at least one third full of salt at all times; running dry is the most common cause of hardness breakthrough. Inspect the salt for crusted bridging once per quarter and break it up with a broom handle if needed.",
        ],
        list: [
          "Check salt level monthly; refill when below the half-full line",
          "Break up any salt bridge in the brine tank quarterly",
          "Verify zero hardness at the kitchen tap with a test strip every six months",
          "Schedule resin cleaner injection every two to three years on chloraminated supply",
          "Replace pre-filters on whole-house carbon systems every 6 to 12 months",
          "If you leave the house for more than two weeks, set the softener to bypass to prevent stale water in the resin tank",
        ],
      },
      {
        heading: "When to call a professional",
        paragraphs: [
          "Most homeowners can handle salt refills and basic salt-bridge breakup. Anything that touches the control valve, the resin, or the plumbing should go to a certified installer.",
        ],
      },
    ],
    professionalSection: {
      heading: "Call a professional if...",
      bullets: [
        "You see hardness on a test strip even when the brine tank is full",
        "Your water suddenly smells like chlorine or sulfur at the tap",
        "The softener cycles continuously or fails to cycle on the timer",
        "Water pressure drops noticeably after the softener install",
        "You are on a private well and have not yet had a comprehensive iron, sulfide, and bacteria test",
        "You are considering DIY plumbing and your municipality requires a permit (most do)",
      ],
    },
    faqs: [
      {
        q: "How hard is Tampa water really?",
        a: "Tampa, St. Petersburg, Brandon, and most surrounding municipalities test between 11 and 18 grains per gallon (about 180 to 300 mg/L as calcium carbonate), which the USGS classifies as very hard. The exact number varies by neighborhood and source-water blend, so we always test before sizing a system.",
      },
      {
        q: "Will a salt softener make my water salty?",
        a: "No. A residential softener adds a small amount of sodium proportional to your hardness, generally 30 to 60 milligrams per quart, well below the taste threshold. Households on a low-sodium diet typically pair the softener with a [reverse osmosis system](/services/reverse-osmosis) at the kitchen tap that removes that sodium.",
      },
      {
        q: "Is hard water dangerous?",
        a: "Hard water is not regulated as a health hazard under the EPA Safe Drinking Water Act. Calcium and magnesium are nutrients, not toxins. The concern is purely economic and aesthetic: shortened appliance life, scale buildup, soap waste, and stiff laundry. None of those are health threats, but they add up financially over years.",
      },
      {
        q: "Do I need a whole-house filter and a softener?",
        a: "If your home is on Tampa Bay Water or any chloraminated municipal source, pairing them produces noticeably better water than a softener alone. Carbon removes the chloramines that cause shower smell and dry skin; the softener removes hardness. They sit in series on the main line and each does a job the other cannot.",
      },
      {
        q: "How long does a softener last in Tampa Bay?",
        a: "Resin typically lasts 12 to 20 years on Tampa Bay water. Control valves run 10 to 15 years. Replacement is usually cheaper than a new unit because the brine tank and plumbing stay in place. Jusi H2O services every brand we install, and our [JusiCare+](/services/jusicare) plan covers parts and labor on systems we sold and installed.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. FLORIDA WELL WATER
  // ---------------------------------------------------------------------------
  {
    slug: "florida-well-water",
    title: "Florida Well Water Treatment: A Tampa Bay Region Guide",
    metaTitle: "Florida Well Water Treatment: Tampa Bay Guide (2026)",
    metaDescription:
      "Iron, sulfur, low pH, and bacteria are common in Tampa Bay private wells. Learn how to test, what to install, and when to call a professional. By Jusi H2O.",
    bluf: "Private wells in the Tampa Bay region typically need a multi-stage treatment train: air-injection oxidation for iron and hydrogen sulfide, neutralization for low pH, softening for hardness, and UV disinfection where coliform bacteria are present. Sizing depends on your tested water chemistry, well flow rate, and household demand, not a generic product spec.",
    heroImage: "/images/service-hero/well-water-treatment.jpg",
    lastUpdated: "2026-05-14",
    sections: [
      {
        heading: "Why Florida well water is different",
        paragraphs: [
          "Roughly 12 percent of Florida households draw from private wells, with concentrations highest in rural Pasco, eastern Hillsborough, Polk, and rural Manatee counties. These wells tap the Floridan Aquifer, the same source that feeds many municipal utilities, but the water arrives at your tap completely untreated. Iron, hydrogen sulfide, hardness, and low pH that the utility would remove at the plant land directly in your pressure tank.",
          "The five issues we encounter most often on Tampa Bay regional wells are dissolved iron, hydrogen sulfide gas, low pH (acidity), high hardness, and occasional coliform bacteria intrusion. The right treatment train addresses each issue in the correct stage order. The wrong order ruins downstream equipment, often the softener.",
        ],
      },
      {
        heading: "The five contaminants you actually need to test for",
        paragraphs: [
          "Florida Department of Health recommends private wells be tested annually for coliform bacteria, nitrates, pH, and total dissolved solids. The EPA echoes that recommendation. We add iron and hydrogen sulfide to the baseline test because of how common they are across the Tampa Bay region.",
        ],
        list: [
          "Iron: dissolved (clear iron) and oxidized (ferric iron) tested separately; staining typically begins above 0.3 parts per million",
          "Hydrogen sulfide: the rotten-egg smell; usually noticeable above 0.5 parts per million, treatable with air injection",
          "pH: low pH below 6.8 corrodes copper pipes and produces blue-green stains on porcelain",
          "Hardness: calcium and magnesium; tested in grains per gallon or mg/L as calcium carbonate",
          "Coliform bacteria: indicator organisms for fecal contamination; presence triggers UV or chlorination",
          "Nitrates: agricultural and septic indicator; over 10 ppm is an EPA action level",
        ],
      },
      {
        heading: "The treatment stage order that works",
        paragraphs: [
          "Stage order matters more than any individual piece of equipment. A backwards train wastes money and ruins resin. The proven order for Tampa Bay regional wells, from inlet toward the house, is sediment pre-filtration first, then oxidation for iron and sulfide, then pH neutralization, then softening, then optional UV disinfection, then optional [point-of-use reverse osmosis](/services/reverse-osmosis) at the kitchen sink.",
          "We design the train from your specific tested water. Many homes need only three of the six stages. A well that tests at 1 ppm iron, no detectable sulfide, pH 7.2, and 18 gpg hardness needs a sediment filter and a softener, nothing else. A well at 6 ppm iron with 2 ppm sulfide and pH 6.4 needs air injection, neutralization, and softening, in that order.",
        ],
        table: {
          caption: "Treatment stage selection by tested water chemistry",
          headers: ["Tested condition", "Recommended stage", "Typical media or method"],
          rows: [
            ["Iron above 0.3 ppm, sulfide present or absent", "Air-injection oxidation", "Pyrolox or catalytic carbon with air pocket"],
            ["Sulfide above 0.5 ppm, no iron", "Air-injection or activated carbon", "Catalytic carbon, air-injection AIO"],
            ["pH below 6.8", "Neutralization", "Calcite media tank, periodic refill"],
            ["Hardness above 5 gpg", "Cation-exchange softener", "Standard resin, sized to flow"],
            ["Coliform bacteria detected", "UV disinfection", "Class A UV with intensity monitor"],
            ["Nitrates above 5 ppm or PFAS concern", "Reverse osmosis at kitchen tap", "Multi-stage RO under sink"],
          ],
        },
      },
      {
        heading: "Why air-injection oxidation beats older iron treatments",
        paragraphs: [
          "For decades the dominant iron treatment was chemical injection: a pump dosed chlorine or potassium permanganate ahead of a filter tank, oxidizing the iron, then a carbon polishing stage caught the leftover oxidant. The systems worked but they required constant chemical refilling, periodic pump rebuilds, and careful pH management.",
          "Air-injection oxidation eliminates the chemistry. A small air pocket sits at the top of a single tank. As water passes upward through the air pocket, dissolved iron and hydrogen sulfide oxidize on contact. The oxidized particles are trapped in the catalytic media below. The system backwashes itself and refreshes the air pocket on a timed cycle.",
          "For typical Tampa Bay regional wells with iron under 8 ppm and sulfide under 4 ppm, air injection is the right answer. It is also the quietest option, with no compressor and no scheduled chemistry to mix.",
        ],
      },
      {
        heading: "Recommended Method: well-treatment decision table",
        paragraphs: [
          "Use this table to map your tested water to the recommended treatment train. If your test results do not match any row cleanly, that is exactly why we offer free in-home consultations.",
        ],
        table: {
          caption: "Well water symptom to action table",
          headers: ["Symptom", "Recommended action", "Service link"],
          rows: [
            ["Orange staining on toilets and sinks", "Air-injection iron filter plus softener", "[Well Water Treatment](/services/well-water)"],
            ["Rotten-egg smell at hot tap only", "Replace water heater anode; consider AIO", "[Water Heater](/services/water-heater-installation)"],
            ["Rotten-egg smell at every tap", "Air-injection oxidation stage", "[Well Water Treatment](/services/well-water)"],
            ["Blue-green stains on porcelain", "pH neutralizer (calcite tank)", "[Well Water Treatment](/services/well-water)"],
            ["Coliform bacteria detected on test", "UV disinfection plus shock chlorination", "[Well Water Treatment](/services/well-water)"],
            ["Concerns about PFAS or nitrates in drinking water", "Point-of-use reverse osmosis at kitchen", "[Reverse Osmosis](/services/reverse-osmosis)"],
          ],
        },
      },
      {
        heading: "What a typical Tampa Bay regional well install looks like",
        paragraphs: [
          "A complete three-stage well train (sediment, air injection, softener) installs in a single day for most homes, four to six hours of labor. We tie the new equipment into your existing well pressure tank, plumb a backwash drain to your nearest waste line or to an outdoor splash pad if no drain is available, and run standard electrical to the AIO and softener control valves.",
          "Installed cost for a complete air-injection-plus-softener system runs $3,800 to $6,500 in the Tampa Bay region for typical well chemistry. A four-stage system with neutralization and UV runs $5,500 to $9,500. These ranges reflect industry-standard installed pricing; we quote precisely after a free water test.",
          "After install we run a 48-hour break-in cycle, then retest at the kitchen tap to verify iron, sulfide, and hardness all read clean. If your well also tested positive for coliform we shock-chlorinate the well casing as a separate billable service and verify negative on a follow-up test before declaring the system complete.",
        ],
      },
      {
        heading: "Maintenance schedule for a typical well train",
        paragraphs: [
          "Well systems need more periodic attention than municipal-water systems, but the work is predictable and easy to schedule. Most of it is annual.",
        ],
        list: [
          "Annual comprehensive well test (iron, sulfide, hardness, coliform, pH)",
          "Air-injection oxidation: media check every 5 to 7 years, full media replacement at 7 to 10 years depending on iron load",
          "Neutralization tank: calcite refill every 12 to 18 months",
          "Softener: salt every 4 to 8 weeks, resin cleaner annually on heavy-iron wells",
          "UV bulb replacement annually, sleeve cleaning every 6 months",
          "Shock chlorination after any well repair, lightning strike, or positive coliform result",
        ],
      },
      {
        heading: "When to call a professional",
        paragraphs: [
          "DIY well treatment is genuinely tempting in Florida; the equipment is available online and the plumbing looks straightforward. We see the failures often enough to have a clear opinion: any system that touches your pressure tank or your potable water plumbing should be installed and commissioned by a licensed contractor.",
        ],
      },
    ],
    professionalSection: {
      heading: "Call a professional if...",
      bullets: [
        "Your well test shows coliform bacteria or E. coli (immediate UV plus shock chlorination)",
        "You see colored water, brown sediment, or sudden taste changes (well casing or pump issue)",
        "Iron staining persists after a softener is installed (wrong stage order)",
        "pH below 6.5 with copper pipes (active corrosion risk)",
        "Sulfide smell only at the hot tap (typically a water heater anode issue, not the well)",
        "You have not tested annually for nitrates, coliform, and pH",
      ],
    },
    faqs: [
      {
        q: "How often should I test my Florida well?",
        a: "The Florida Department of Health and the EPA both recommend annual testing for coliform bacteria, nitrates, pH, and total dissolved solids. Test immediately after any flooding, lightning strike, well repair, or change in water taste, odor, or color. Jusi H2O provides free comprehensive well water testing across the Tampa Bay region.",
      },
      {
        q: "Can a water softener handle iron in my well water?",
        a: "Softeners can hold small amounts of clear iron (under 3 parts per million) but they are the wrong tool when iron exceeds that threshold or when hydrogen sulfide is present. The resin fouls quickly and the brine never fully removes the iron. We stage [air-injection oxidation](/services/well-water) upstream of the softener whenever iron is the primary issue.",
      },
      {
        q: "How loud is an air-injection iron filter?",
        a: "Quieter than a refrigerator. The only moving parts during normal operation are the control valve during a brief weekly or every-other-day backwash. There is no compressor, no chemical pump, and no scheduled chemistry to mix. Most homeowners do not notice the system after installation.",
      },
      {
        q: "What does well treatment cost in Tampa Bay?",
        a: "A complete three-stage system (sediment, air injection, softener) typically runs $3,800 to $6,500 installed in the Tampa Bay region. A four-stage system with pH neutralization and UV disinfection runs $5,500 to $9,500. We provide a precise written quote after a free in-home water test, with [JusiCare+ maintenance coverage](/services/jusicare) available.",
      },
      {
        q: "Do I need UV disinfection on my well?",
        a: "Only if your annual coliform test comes back positive, or your well casing is shallow (under 50 feet) in a high-risk area, or the well sits near septic, agricultural runoff, or surface water. UV is excellent insurance for vulnerable wells; it is overkill for deep cased wells in clean geology with consistent negative tests.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. REVERSE OSMOSIS DRINKING WATER
  // ---------------------------------------------------------------------------
  {
    slug: "reverse-osmosis-drinking-water",
    title: "Reverse Osmosis Drinking Water in Tampa Bay: A Complete Guide",
    metaTitle: "Reverse Osmosis Drinking Water in Tampa Bay (2026 Guide)",
    metaDescription:
      "Tampa Bay water carries chloramines, hardness, and elevated TDS. Point-of-use reverse osmosis removes them at the kitchen tap. Sizing, cost, and install by Jusi H2O.",
    bluf: "Point-of-use reverse osmosis installed under the kitchen sink removes up to 99 percent of dissolved solids, lead, arsenic, fluoride, nitrates, chloramines, and PFAS, producing bottled-water-quality drinking water for $300 to $1,200 installed. For Tampa Bay homes with chloramine-disinfected municipal supply, RO is the standard fix for taste, odor, and emerging contaminants.",
    heroImage: "/images/service-hero/reverse-osmosis.jpg",
    lastUpdated: "2026-05-14",
    sections: [
      {
        heading: "How reverse osmosis actually works",
        paragraphs: [
          "Reverse osmosis pushes pressurized water through a semi-permeable membrane with pores small enough to block dissolved ions and most organic molecules. Water molecules pass; salts, metals, and most organics do not. The result on the far side is essentially distilled water, minus the energy cost of boiling.",
          "A modern under-sink residential RO system stacks four or five stages: a sediment pre-filter to protect the membrane, one or two carbon pre-filters to remove chlorine or chloramine that would shorten membrane life, the RO membrane itself, a storage tank, and a polishing carbon post-filter that ensures the water at the tap tastes neutral. Some systems add a remineralization stage for taste preference.",
          "RO is the only residential technology that consistently removes dissolved solids at the sub-PPM level. Pitcher filters, refrigerator filters, and standard whole-house carbon do not touch dissolved sodium, fluoride, lead at trace levels, or PFAS at the new EPA action thresholds.",
        ],
      },
      {
        heading: "Why RO matters specifically for Tampa Bay",
        paragraphs: [
          "Tampa Bay Water (the regional wholesale utility) uses chloramines rather than free chlorine for residual disinfection. Chloramines are more persistent than chlorine, which is the point at the distribution scale but it also means standard pitcher filters and refrigerator filters do not remove them effectively. Catalytic carbon at the whole-house stage handles the shower water; RO at the kitchen tap handles the drinking and cooking water.",
          "Tampa Bay supply also runs high on total dissolved solids relative to many U.S. metros, typically 300 to 500 mg/L. That is the dissolved-mineral signature of the [Floridan Aquifer](/water-treatment/florida-well-water) limestone substrate, and it is what gives Tampa water its distinctive flavor. Many Tampa Bay residents prefer the lower TDS of RO water for drinking, coffee, and cooking.",
          "Then there is the PFAS conversation. The 2024 EPA final rule sets enforceable maximum contaminant levels for PFOA and PFOS at 4 parts per trillion. Utilities are working toward compliance with a 2029 enforcement deadline, but for the next several years many systems will still have detectable PFAS in finished water. RO is one of the few residential technologies that reliably removes PFAS to below the new MCL.",
        ],
      },
      {
        heading: "What an RO system removes and what it does not",
        paragraphs: [
          "Confidence comes from knowing what the technology actually does. RO is excellent at most things and incomplete at a few. Here is the honest breakdown.",
        ],
        table: {
          caption: "RO contaminant removal at typical residential operating pressure",
          headers: ["Contaminant", "Typical RO removal", "Notes"],
          rows: [
            ["Total dissolved solids (TDS)", "95 to 99 percent", "Taste improvement is immediate"],
            ["Lead", "95 to 99 percent", "Verified by NSF/ANSI 58"],
            ["Arsenic (As V)", "95 to 98 percent", "Lower removal of As III; pre-oxidation helps"],
            ["Fluoride", "85 to 95 percent", "Depending on membrane and feed pressure"],
            ["Nitrate", "85 to 95 percent", "Verified by NSF/ANSI 58"],
            ["PFAS (PFOA, PFOS)", "95 to 99 percent", "Verified by NSF/ANSI 58 P473"],
            ["Chloramines", "90 to 99 percent", "Mostly removed by the carbon pre-filters"],
            ["Bacteria and viruses", "Not certified", "Use UV or pre-treat well water separately"],
            ["Calcium and magnesium (hardness)", "95 to 99 percent", "Easier on membrane when softened upstream"],
          ],
        },
      },
      {
        heading: "Pairing RO with a whole-house softener",
        paragraphs: [
          "Reverse osmosis works hard on hard water. The membrane is the same kind of resin chemistry that would scale up a water heater, and Tampa Bay hardness shortens membrane life dramatically when RO operates on raw municipal supply.",
          "The standard Tampa Bay configuration is a whole-house softener feeding the entire home (including the kitchen cold line that supplies the RO), then RO at the kitchen tap. The softener takes the hardness load; the RO membrane sees soft water and lasts three to five years rather than 12 to 24 months. For households on a low-sodium diet, this is also the safe configuration: the RO removes the small amount of sodium added by the softener, leaving drinking water below the taste threshold.",
        ],
      },
      {
        heading: "Recommended Method: RO decision table",
        paragraphs: [
          "If your goal is bottled-water-quality drinking water in your Tampa Bay kitchen, RO is almost always the right answer. Where the conversation gets interesting is what else you need around it.",
        ],
        table: {
          caption: "RO configuration decision table",
          headers: ["Situation", "Recommended setup", "Service link"],
          rows: [
            ["Municipal water, hardness present, no softener yet", "Install softener plus standard 4-stage RO", "[Water Softener](/services/water-softeners)"],
            ["Municipal water, softener already installed", "Standard 4-stage RO under sink", "[Reverse Osmosis](/services/reverse-osmosis)"],
            ["Private well, high iron or sulfide", "Treat well first, then add RO downstream", "[Well Water Treatment](/services/well-water)"],
            ["Concerned about PFAS specifically", "5-stage RO certified to NSF/ANSI 58 P473", "[Reverse Osmosis](/services/reverse-osmosis)"],
            ["Want fridge water and ice on RO", "RO with permeate pump or tankless RO", "[Reverse Osmosis](/services/reverse-osmosis)"],
            ["Sodium-restricted diet plus softener", "Softener plus RO at every drinking point", "[Whole-House Filtration](/services/water-filtration)"],
          ],
        },
      },
      {
        heading: "What a Tampa Bay RO install looks like",
        paragraphs: [
          "A standard under-sink RO install takes 90 minutes to two hours for our crew. We drill a quarter-inch hole in the sink or counter for the dedicated faucet (we can match most kitchen faucet finishes), mount the RO unit and storage tank in the under-sink cabinet, tee into the cold water supply and the drain (with a proper air-gap), and run the connection tubing. We then run the system through a flush cycle, test the output TDS to verify the membrane is performing, and walk you through filter replacement.",
          "Installed cost for a residential RO system in Tampa Bay runs $300 to $1,200 depending on the number of stages, whether a permeate pump or tankless design is included, and whether a refrigerator tee-off is added. NSF-certified high-end systems with PFAS-specific membrane certification land in the upper end of the range. JusiCare+ includes annual filter replacements on RO systems we install.",
          "Filter replacement intervals: pre-filters every 6 to 12 months, post-filter every 12 months, membrane every 3 to 5 years on softened municipal supply. We notify you ahead of each interval with a calendar reminder.",
        ],
      },
      {
        heading: "Maintenance and habit notes",
        paragraphs: [
          "RO is genuinely low-maintenance once installed correctly. Most homeowners forget the system is there between filter replacements.",
        ],
        list: [
          "Replace sediment and carbon pre-filters every 6 to 12 months",
          "Replace polishing carbon post-filter annually",
          "Replace the RO membrane every 3 to 5 years on softened supply",
          "Sanitize the storage tank annually with the manufacturer-recommended solution",
          "Check the dedicated faucet base for slow drips every quarter",
          "If TDS at the dedicated faucet rises above 25 mg/L, the membrane is failing; replace it",
        ],
      },
      {
        heading: "When to call a professional",
        paragraphs: [
          "Filter replacement is genuinely DIY-friendly. Membrane replacement and system commissioning are not.",
        ],
      },
    ],
    professionalSection: {
      heading: "Call a professional if...",
      bullets: [
        "Output TDS exceeds 25 mg/L at the dedicated faucet (membrane failing)",
        "Slow flow at the dedicated faucet even after fresh filters (tank pressure or membrane issue)",
        "Visible water under the cabinet (compression fitting or air-gap drain issue)",
        "Fridge water and ice taste different after the RO install (tee-off pressure or routing issue)",
        "You are switching from softened to unsoftened feed water (membrane life drops sharply)",
        "You are installing RO on a private well that has not been comprehensively tested",
      ],
    },
    faqs: [
      {
        q: "How much water does a Tampa Bay residential RO waste?",
        a: "Older systems wasted four gallons to make one. Modern Jusi H2O installs use permeate-pump or tankless designs that run a one-to-one or better recovery ratio. Over a year of typical kitchen use, the waste is comparable to one or two extra dishwasher cycles, well within Tampa Bay water budgets.",
      },
      {
        q: "Does RO remove PFAS in Tampa Bay water?",
        a: "Yes, when the RO membrane is certified to NSF/ANSI 58 P473 (the PFAS-specific protocol). Removal is 95 to 99 percent for PFOA and PFOS, well below the 2024 EPA final-rule MCL of 4 parts per trillion. See our [PFAS in Tampa Bay article](/blog/pfas-tampa-bay-drinking-water-2026) for the full regulatory picture.",
      },
      {
        q: "Will RO water harm my health by removing minerals?",
        a: "No mainstream medical or public-health body has identified mineral intake from drinking water as a meaningful nutritional source. Calcium and magnesium come overwhelmingly from food. If you prefer mineral taste, we install RO systems with a remineralization stage that adds back trace calcium and magnesium for flavor.",
      },
      {
        q: "Can RO run my refrigerator water and ice maker?",
        a: "In most kitchens, yes. We tee off the RO storage tank to feed the fridge ice maker and water dispenser when the run is short enough to maintain pressure. On longer runs we add a permeate pump so the fridge dispenser flows at full rate. Ice from RO water is noticeably clearer and free of mineral haze.",
      },
      {
        q: "What does an RO system cost installed in Tampa Bay?",
        a: "Standard 4-stage RO with a tank runs $300 to $700 installed in most Tampa Bay homes. 5-stage systems with PFAS-specific certification, remineralization, or tankless designs run $700 to $1,200. We provide a precise quote after a free in-home water test, and [JusiCare+](/services/jusicare) covers ongoing filter changes.",
      },
    ],
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
