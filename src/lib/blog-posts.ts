export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  image?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hard-water-tampa-bay-guide",
    title: "Tampa Bay's Hard Water Problem: What Every Homeowner Needs to Know",
    excerpt:
      "Tampa Bay has some of Florida's hardest water — measuring 15–25 grains per gallon. Discover why it damages pipes, appliances, and skin, and what you can do about it.",
    date: "2026-01-15",
    author: "Jusi H2O Team",
    category: "Water Quality",
    readTime: "9 min read",
    tags: ["Hard Water", "Tampa Bay", "Water Quality"],
    content: `<p>If you've noticed chalky white deposits on your faucets, spotted glassware from the dishwasher, or scratchy towels that never feel soft, you're experiencing the effects of hard water — and you're not alone. The Tampa Bay region consistently ranks among Florida's highest for water hardness, with levels typically ranging from 15 to 25 grains per gallon (GPG). For context, the U.S. Geological Survey classifies anything above 10.5 GPG as "very hard."</p>

<h2>Why Tampa Bay Water Is So Hard</h2>

<p>The answer lies underground. Tampa Bay's water supply draws heavily from the Floridan Aquifer System, one of the world's most productive aquifer systems. As groundwater percolates through Florida's thick limestone and dolomite formations, it dissolves calcium and magnesium carbonate minerals. By the time that water reaches your tap, it's loaded with these dissolved minerals — the very definition of hard water.</p>

<p>The Tampa Bay Water authority blends water from multiple sources including groundwater wells, surface water from the Hillsborough River, and desalinated seawater from its Tampa Bay Desalination Plant (the largest in the Western Hemisphere). Despite this blending, the resulting water still tests in the 10–18 GPG range across most of Hillsborough, Pinellas, and Manatee counties — well into the "hard" to "very hard" category.</p>

<h2>The Real Cost of Hard Water in Your Home</h2>

<p>According to a 2019 study by the Water Quality Research Foundation, households with hard water pay significantly more in energy and maintenance costs than those with treated water. Here's what that looks like in practice:</p>

<p><strong>Water Heaters:</strong> Scale deposits from hard water act as an insulating layer on heating elements. Just 1/4 inch of scale buildup reduces water heater efficiency by up to 25%, according to the U.S. Department of Energy. Over a 10-year lifespan, this adds hundreds of dollars to your utility bills. Water heaters in hard-water areas also fail 30–50% earlier than those in soft-water areas.</p>

<p><strong>Appliances:</strong> Dishwashers, washing machines, and coffee makers all suffer from scale buildup. A University of New Mexico study found that washing machines operating with hard water showed significant drum damage after just 30 wash cycles — damage that took 100 cycles in soft water. Appliance lifespans shorten by 30–40% in hard-water households.</p>

<p><strong>Plumbing:</strong> Over years and decades, scale accumulates inside pipes, narrowing the interior diameter and reducing water pressure. This is particularly concerning with older cast-iron or galvanized steel plumbing still found in many Tampa Bay homes built before 1980.</p>

<p><strong>Soap and Cleaning Products:</strong> Hard water interferes with soap's ability to lather. Studies show that households with hard water use up to 75% more soap and detergent to achieve the same cleaning results as soft water. That's money down the drain — literally.</p>

<h2>Hard Water and Your Health</h2>

<p>The effects aren't limited to your home's infrastructure. Hard water has documented effects on skin and hair:</p>

<p>A 2017 study published in the Journal of Investigative Dermatology found that hard water exposure significantly impaired the skin barrier, increased sensitivity to common irritants, and worsened eczema symptoms in children. The calcium ions in hard water interact with fatty acids in soaps to form insoluble salt deposits on skin, blocking pores and stripping natural oils.</p>

<p>For hair, the mineral buildup coats each shaft, creating a dull, rough texture. Color-treated hair loses vibrancy faster — some stylists in Tampa Bay recommend their clients install water softeners specifically to protect hair color investments.</p>

<h2>Signs Your Tampa Bay Home Has a Hard Water Problem</h2>

<p>Look for these indicators:</p>

<p><strong>White or yellow-brown deposits</strong> on showerheads, faucet aerators, and around drains. This is calcium carbonate (limescale) and is the most visible sign of hard water.</p>

<p><strong>Spotty dishes and glassware</strong> even after running through the dishwasher. Those spots are mineral deposits left behind as water evaporates.</p>

<p><strong>Reduced water pressure</strong>, particularly in homes over 20 years old. Scale has likely narrowed your water supply lines.</p>

<p><strong>Soap scum</strong> on shower walls and bathtubs that requires significant scrubbing to remove.</p>

<p><strong>Stiff, rough laundry</strong> and towels that lose absorbency over time.</p>

<p><strong>Higher energy bills</strong> without an obvious cause — your water heater may be working harder than it should.</p>

<h2>Testing Your Water Hardness</h2>

<p>Knowing your exact hardness level is the first step. Options include:</p>

<ul>
<li><strong>Free in-home water testing</strong> from a qualified water treatment professional (Jusi H2O offers this at no charge)</li>
<li><strong>Mail-in testing kits</strong> from certified labs — these give the most comprehensive analysis</li>
<li><strong>Instant test strips</strong> — available at hardware stores for a quick estimate</li>
<li><strong>Annual Water Quality Reports</strong> from Tampa Bay Water (published online) show source water data, though finished water delivered to your home may vary</li>
</ul>

<h2>Solutions for Hard Water in Tampa Bay</h2>

<p>The most effective and permanent solution is a whole-home water softener. Ion exchange softeners replace calcium and magnesium ions with sodium ions, delivering genuinely soft water to every tap in your home. Modern high-efficiency systems use far less salt and water than older designs — and the ROI is substantial.</p>

<p>A quality water softener installation typically pays for itself in 2–4 years through savings on cleaning products, energy costs, extended appliance lifespans, and reduced plumbing repairs — and continues saving money for 15–20 years of system life.</p>

<p>For homeowners concerned about sodium, salt-free water conditioners (also called descalers) offer an alternative. These systems don't remove hardness minerals but change their crystalline structure so they can't adhere to surfaces. They're less effective for very hard water (above 15 GPG) but are a good option for those on low-sodium diets or who prefer a maintenance-free solution.</p>

<p>Ready to find out exactly what's in your Tampa Bay water? Schedule a free in-home water test with Jusi H2O and get a personalized treatment recommendation based on your actual water quality data.</p>`,
  },
  {
    slug: "well-water-treatment-hillsborough-county",
    title: "Well Water in Hillsborough County: What You're Not Testing For (But Should Be)",
    excerpt:
      "Over 80,000 private wells operate in Hillsborough County. While county health tests for bacteria and nitrates, most homeowners don't realize what else may be in their water — and it can affect their health.",
    date: "2026-01-22",
    author: "Jusi H2O Team",
    category: "Well Water",
    readTime: "10 min read",
    tags: ["Well Water", "Hillsborough County", "Water Testing"],
    content: `<p>Roughly 15% of Hillsborough County homes rely on private wells for their drinking water. If your home draws from a private well, the responsibility for your water quality falls entirely on you — the Hillsborough County Health Department only tests for coliform bacteria and nitrates, and only when you request it. What they don't test for may surprise you.</p>

<h2>What's Lurking in Hillsborough County Well Water?</h2>

<p>Florida's agricultural history, rapid suburban development, and unique geology create a complex mix of potential well water contaminants. A 2022 Florida Department of Health survey of private wells in the state found contamination in more than 30% of untested wells — for contaminants other than the two the county routinely screens for.</p>

<p><strong>Iron and Manganese:</strong> Hillsborough County's soil is rich in iron-bearing minerals. Well water iron concentrations in the county frequently exceed the EPA's secondary standard of 0.3 mg/L, which triggers the characteristic rust-staining on fixtures and laundry. Iron above 0.05 mg/L affects taste; levels above 0.3 mg/L stain everything they touch orange-brown. Manganese follows a similar pattern and is linked to neurological effects at elevated exposures.</p>

<p><strong>Hydrogen Sulfide:</strong> That rotten-egg smell in your well water? It's hydrogen sulfide gas, produced naturally by sulfur bacteria in aquifer sediments. While not directly toxic at typical residential concentrations, it corrodes plumbing, makes water unpalatable, and indicates sulfur-reducing bacteria activity.</p>

<p><strong>Arsenic:</strong> Naturally occurring arsenic is found in Hillsborough County's geological formations. The EPA maximum contaminant level (MCL) for arsenic is 10 parts per billion (ppb), but the agency acknowledges that any arsenic exposure carries some cancer risk. A 2020 analysis by the Environmental Working Group found arsenic in Florida groundwater at levels that exceed the health limit in multiple counties, including areas of Hillsborough.</p>

<p><strong>Pesticides and Herbicides:</strong> Hillsborough County's agricultural past — citrus, strawberries, tomatoes — left behind a legacy of pesticide use. Compounds like atrazine, ethylene dibromide (EDB), and various organophosphates have been detected in Florida groundwater samples. Some of these persist for decades in soil and groundwater.</p>

<p><strong>Nitrates:</strong> These do get tested during the standard county screening, but nitrate sources are worth understanding. Fertilizer runoff, septic system effluent, and animal waste all contribute nitrates to groundwater. The MCL is 10 mg/L as nitrogen; above this level poses serious risk to infants under 6 months (blue baby syndrome). Hillsborough County well surveys consistently find elevated nitrates in agricultural and densely developed residential areas.</p>

<p><strong>Pharmaceuticals and Emerging Contaminants:</strong> PFAS compounds (per- and polyfluoroalkyl substances) — the so-called "forever chemicals" — have been detected in Florida groundwater near military installations, airports, and industrial sites. Several such facilities operate within or near Hillsborough County. PFAS are linked to cancer, thyroid disruption, and immune system effects, and have no established safe level of exposure.</p>

<h2>How Often Should You Test Your Well?</h2>

<p>The Florida Department of Health and most water quality organizations recommend:</p>

<ul>
<li><strong>Coliform bacteria:</strong> Annually, or immediately after flooding, unusual odors/taste, or nearby land disturbance</li>
<li><strong>Nitrates:</strong> Annually if infants or pregnant women are in the household; otherwise every 2–3 years</li>
<li><strong>pH, hardness, iron, manganese, hydrogen sulfide:</strong> Every 3–5 years, or when noticing changes in taste, smell, or staining</li>
<li><strong>Comprehensive testing</strong> (pesticides, heavy metals, PFAS, VOCs): At least once for any well, especially in agricultural or industrial areas; repeat every 5–10 years</li>
</ul>

<h2>Understanding Your Test Results</h2>

<p>Water test reports can be overwhelming. Key things to understand:</p>

<p><strong>MCLs vs. Health Goals:</strong> EPA MCLs (Maximum Contaminant Levels) are the legal limits for public water systems. They're based on both health effects AND feasibility of treatment. The actual health goals (called MCLGs) for many contaminants are lower — sometimes zero. Well water has no legal MCL requirement, so your standard is entirely up to you.</p>

<p><strong>Secondary Standards:</strong> These are non-enforceable guidelines for aesthetic qualities like odor, taste, color, and corrosion. Iron, manganese, and hydrogen sulfide fall here. They won't make you sick in typical concentrations, but they cause property damage and indicate conditions that may affect primary contaminants.</p>

<h2>Treatment Options for Hillsborough County Well Water</h2>

<p>The right treatment depends entirely on your specific test results. Common scenarios and solutions include:</p>

<p><strong>Iron and Hydrogen Sulfide:</strong> Oxidizing filters (air injection, greensand, or birm media) effectively remove dissolved iron and oxidize hydrogen sulfide. For very high iron levels (&gt;5 mg/L), chemical oxidation (aeration or peroxide injection) followed by filtration works best.</p>

<p><strong>Hardness:</strong> Ion exchange water softeners remain the gold standard. Hillsborough County well water is typically very hard (15–30 GPG), making softening particularly beneficial.</p>

<p><strong>Bacteria and Arsenic:</strong> Reverse osmosis systems at the drinking water tap are highly effective against both. RO membranes reject &gt;95% of arsenic and &gt;99% of bacteria in combination with other treatment stages. UV disinfection provides additional protection against bacteria and viruses.</p>

<p><strong>PFAS and Organic Compounds:</strong> Activated carbon filtration and reverse osmosis are effective for most PFAS compounds and organic contaminants. This is best handled at the point of use (drinking water tap) due to the cost of whole-house PFAS treatment.</p>

<p>The most important first step is getting a comprehensive water test. Jusi H2O provides free in-home water testing for Hillsborough County well water customers, covering the most common concerns. From there, we design a treatment system specifically for your water's chemistry — not a one-size-fits-all package.</p>`,
  },
  {
    slug: "water-heater-scale-tampa-bay",
    title: "How Tampa Bay's Hard Water Is Silently Killing Your Water Heater",
    excerpt:
      "Scale buildup from hard water reduces water heater efficiency by up to 25% and cuts its lifespan nearly in half. Here's the science, the cost, and what to do about it.",
    date: "2026-02-01",
    author: "Jusi H2O Team",
    category: "Home Protection",
    readTime: "8 min read",
    tags: ["Water Heater", "Scale", "Hard Water"],
    content: `<p>Your water heater is probably the most expensive appliance you never think about — until it fails. In Tampa Bay, where water hardness regularly exceeds 15 grains per gallon, water heaters face an accelerated enemy: mineral scale. Understanding scale formation, its costs, and prevention is one of the most financially impactful things a homeowner can do.</p>

<h2>What Is Scale and How Does It Form?</h2>

<p>When hard water is heated, dissolved calcium and magnesium bicarbonates undergo a chemical transformation. The heat drives off carbon dioxide gas and converts the soluble bicarbonates into insoluble calcium carbonate — the same material as chalk and limestone. This precipitates out of solution and deposits on whatever surface it contacts first: the heating element in electric water heaters, the bottom of the tank in gas units, and the heat exchanger in tankless systems.</p>

<p>Scale formation is exponential: the warmer the water, the faster it forms. At Tampa Bay's typical groundwater temperature of 72°F, scale formation is slow. But inside a water heater set to 120°F, scale accumulates rapidly. A new water heater installed in a Tampa Bay home with untreated water will typically show measurable scale within 6–12 months.</p>

<h2>The Energy Cost of Scale</h2>

<p>Scale is an excellent thermal insulator. That's great in construction; it's terrible in water heaters. When a layer of scale coats the heating element or tank bottom, the heater must work harder and longer to heat the same volume of water.</p>

<p>The U.S. Department of Energy publishes specific efficiency loss data:</p>
<ul>
<li>1/16 inch (1.6mm) of scale: 12% efficiency loss</li>
<li>1/8 inch (3.2mm) of scale: 19% efficiency loss</li>
<li>1/4 inch (6.4mm) of scale: 25% efficiency loss</li>
</ul>

<p>For a typical Tampa Bay family running a 50-gallon water heater at roughly $600/year in energy costs, a 25% efficiency loss means $150/year in wasted energy — just from scale. Over a 10-year water heater lifespan, that's $1,500 in preventable energy costs, and the scale continues accumulating.</p>

<h2>The Lifespan Impact</h2>

<p>According to the Water Quality Research Foundation, water heaters operating in hard water areas (above 10.5 GPG) have service lives that are 30–50% shorter than manufacturers' rated lifespans. For a water heater with a 12-year rated life, that means real-world lifespan of 6–9 years in Tampa Bay's water conditions.</p>

<p>The failure mechanism is different for tank vs. tankless units:</p>

<p><strong>Tank water heaters:</strong> Scale accumulates on the glass-lined steel tank bottom and heating element (electric). As scale builds up on the tank bottom, the steel beneath experiences thermal stress from uneven heating. This causes the glass lining to crack, accelerating corrosion. Eventually the anode rod (sacrificial magnesium or aluminum rod designed to corrode instead of the tank) is consumed faster than normal, and the tank begins to rust from the inside out.</p>

<p><strong>Tankless water heaters:</strong> Tankless units have narrow heat exchanger passages that are especially vulnerable to scale. Even modest scale buildup drastically reduces flow through the heat exchanger, triggering error codes and reduced output. Many manufacturers void their warranties if evidence of scale damage is found — and in Tampa Bay water, scale will form within 1–3 years without treatment.</p>

<h2>Signs Your Water Heater Is Scaling</h2>

<ul>
<li><strong>Popping or rumbling sounds</strong> when the heater fires — this is water trapped under scale layers boiling</li>
<li><strong>Longer recovery times</strong> — it takes longer to heat water after use</li>
<li><strong>Higher energy bills</strong> without change in usage</li>
<li><strong>Reduced hot water capacity</strong> — the scale takes up tank volume</li>
<li><strong>Scale particles</strong> in the hot water line or on faucet aerators</li>
</ul>

<h2>The Tankless Complication</h2>

<p>Tankless (on-demand) water heaters have become increasingly popular in Tampa Bay for their energy efficiency and endless hot water supply. However, they require special consideration in hard water areas.</p>

<p>Most tankless manufacturer warranties explicitly require annual descaling/flushing in "hard water areas" — and most define hard water as above 11 GPG. At Tampa Bay's 15–25 GPG, annual professional flushing with citric acid solution is the minimum. Without it, many units fail within 3–5 years — sometimes outside the warranty period.</p>

<p>The cost of annual tankless maintenance runs $150–$250, adding $1,500–$2,500 over a 10-year period. Compare this to a one-time water softener installation that protects the tankless heater indefinitely while also protecting every other appliance and fixture in your home.</p>

<h2>Prevention: The Right Approach</h2>

<p>There are two main strategies for protecting water heaters from scale:</p>

<p><strong>Water Softening (best protection):</strong> Ion exchange softeners remove calcium and magnesium before they enter your plumbing system. This eliminates scale formation entirely — not just in the water heater, but in every pipe, fixture, and appliance throughout the home. Studies show water heaters operating on softened water meet or exceed their manufacturer-rated lifespan.</p>

<p><strong>Polyphosphate feeders / scale inhibitors:</strong> These devices add small amounts of polyphosphate to the water supply, which coats mineral ions and prevents them from forming hard scale. They're less expensive than water softeners and require no electricity or salt. However, they don't actually remove hardness minerals — they just modify the minerals' behavior. Effectiveness decreases significantly above 15 GPG.</p>

<p><strong>Template-Assisted Crystallization (TAC) systems:</strong> Salt-free conditioners that convert dissolved hardness minerals into microscopic crystals that pass through the system without adhering to surfaces. More effective than polyphosphate, though still not as reliable as true ion exchange softening at Tampa Bay hardness levels.</p>

<p>The math on water softener ROI for Tampa Bay homeowners is compelling: extended water heater life (saving $500–$1,200 on early replacement), reduced energy costs ($100–$200/year), and protection for dishwashers, washing machines, and plumbing add up to returns that typically exceed the system cost within 3–5 years.</p>

<p>Jusi H2O offers free in-home water hardness testing and a complete assessment of your current plumbing system's scale situation. Contact us to schedule your free consultation.</p>`,
  },
  {
    slug: "reverse-osmosis-benefits-tampa-bay",
    title: "Why Reverse Osmosis Drinking Water Is Worth It for Tampa Bay Families",
    excerpt:
      "RO systems remove 95–99% of contaminants including PFAS, chlorine byproducts, lead, and nitrates. Here's what you're drinking without one — and what life looks like with one.",
    date: "2026-02-12",
    author: "Jusi H2O Team",
    category: "Reverse Osmosis",
    readTime: "9 min read",
    tags: ["Reverse Osmosis", "Drinking Water", "PFAS"],
    content: `<p>The kitchen tap is where most water quality conversations start. You're cooking with it, drinking it, making coffee, filling the baby's bottle. What's actually in that water matters more here than anywhere else in your home. For Tampa Bay families, the answer to that question is complicated — and reverse osmosis is increasingly the solution they choose.</p>

<h2>What Comes Out of Tampa Bay Taps</h2>

<p>Tampa Bay Water's annual Consumer Confidence Reports are publicly available and show water that meets all EPA regulatory standards. But meeting standards and being optimal for daily consumption are different things. Here's what's actually in the water:</p>

<p><strong>Chlorine and Chloramines:</strong> Tampa Bay Water uses a combination of chlorination and chloramination (adding ammonia to chlorine) for distribution system disinfection. While effective at killing pathogens during the distribution journey, these disinfectants affect taste and odor at your tap and react with organic matter to form disinfection byproducts (DBPs) including trihalomethanes (THMs) and haloacetic acids (HAAs).</p>

<p>Total trihalomethanes in Tampa Bay municipal water have been recorded at levels approaching the EPA limit of 80 parts per billion (ppb). A 2020 Environmental Working Group analysis found that legal levels of THMs in drinking water are associated with increased risk of bladder cancer with long-term exposure.</p>

<p><strong>Lead:</strong> Tampa Bay Water's source water is essentially lead-free. The risk comes from your home's plumbing. Homes built before 1986 may have lead solder at pipe joints; older homes may have lead service lines. Lead leaches into water that sits in pipes overnight or after periods of non-use. The EPA's action level for lead is 15 ppb; however, the EPA's MCLG (health goal) for lead is zero — there is no safe level of lead exposure for children.</p>

<p><strong>PFAS (Per- and Polyfluoroalkyl Substances):</strong> The Environmental Working Group's national tap water database includes data showing PFAS detection in multiple Florida municipal water systems. In 2022, the EPA proposed health advisory levels for PFOA and PFOS at 0.004 parts per trillion — essentially zero. Many Florida systems have detected these at higher levels, though Tampa Bay Water has not reported PFAS exceedances under current standards.</p>

<p><strong>Nitrates:</strong> Agricultural and septic system runoff contributes nitrates to the regional water supply. Tampa Bay Water blends from multiple sources, and finished water typically shows nitrates well below the 10 mg/L MCL. But spot sampling during peak runoff events can show elevated readings.</p>

<p><strong>Hardness Minerals:</strong> As discussed in our hard water guide, Tampa Bay water is typically 10–18 GPG. While calcium and magnesium aren't health hazards, they affect taste and make water feel "heavy."</p>

<h2>What Reverse Osmosis Actually Does</h2>

<p>Reverse osmosis forces water under pressure through a semi-permeable membrane with pores so small (approximately 0.0001 microns) that virtually all dissolved solids are rejected. What passes through is water — the rest is flushed away in a waste stream.</p>

<p>A quality multi-stage RO system (typically 4–6 stages) includes:</p>

<ul>
<li><strong>Sediment pre-filter:</strong> Removes particles, dirt, and rust that could damage the membrane</li>
<li><strong>Carbon pre-filter:</strong> Removes chlorine and chloramines that would degrade the RO membrane</li>
<li><strong>RO membrane:</strong> The core filtration stage — removes 95–99% of dissolved contaminants</li>
<li><strong>Post-carbon filter:</strong> Final polishing to improve taste and remove any residual organics</li>
<li><strong>Storage tank:</strong> Most under-sink systems store 2–4 gallons of filtered water for instant delivery</li>
<li><strong>Optional remineralization stage:</strong> Adds back beneficial calcium and magnesium to improve taste and pH</li>
</ul>

<h2>What RO Removes</h2>

<p>RO is exceptionally broad-spectrum. Independent testing and NSF certification data confirm removal of:</p>

<ul>
<li><strong>Lead:</strong> &gt;95% removal — critical for older homes</li>
<li><strong>PFAS (PFOA/PFOS):</strong> &gt;94% removal per NSF P473 certification</li>
<li><strong>Nitrates:</strong> 83–95% removal</li>
<li><strong>Chlorine and chloramines:</strong> &gt;99% removal (via carbon stages)</li>
<li><strong>Arsenic:</strong> 90–95% removal</li>
<li><strong>Fluoride:</strong> 85–92% removal</li>
<li><strong>Hardness minerals:</strong> 95–99% removal</li>
<li><strong>Bacteria and viruses:</strong> &gt;99% removal (membrane physically blocks them)</li>
<li><strong>Microplastics:</strong> &gt;99% removal</li>
</ul>

<h2>The Taste Difference</h2>

<p>This sounds trivial, but it has real behavioral implications. Families who install RO systems consistently report stopping bottled water purchases within weeks. The average American family of four spends $1,200–$2,400/year on bottled water. RO water typically costs $0.25–$1.00 per gallon to produce (including filter replacement costs) versus $1–$3 per gallon for bottled water.</p>

<p>Over 10 years, the math is compelling. An under-sink RO system installed by Jusi H2O (typically $400–$800 installed) saves the average Tampa Bay family $8,000–$20,000 in bottled water costs over that period, while providing superior filtration to most bottled water brands.</p>

<h2>Whole-House RO vs. Point-of-Use RO</h2>

<p>Whole-house RO systems exist and are sometimes used in areas with severely contaminated water. For Tampa Bay, this isn't typically necessary or economical. Under-sink point-of-use RO covers drinking, cooking, and filling reusable bottles — the applications where water quality matters most.</p>

<p>For showering and bathing, a whole-house carbon filter combined with a water softener addresses chlorine absorption through skin and hard water effects — at a fraction of the cost of whole-house RO.</p>

<h2>Installation and Maintenance</h2>

<p>Under-sink RO systems are installed at your kitchen sink (and optionally connected to your refrigerator ice maker). Professional installation takes 1–2 hours. Filters require replacement every 6–12 months (pre and post carbon) and every 2–3 years (RO membrane), depending on your water quality and usage.</p>

<p>Jusi H2O includes a filter replacement reminder program and offers annual maintenance visits to keep your system performing at full capacity.</p>`,
  },
  {
    slug: "water-testing-guide-tampa-bay",
    title: "Complete Water Testing Guide for Tampa Bay Homeowners",
    excerpt:
      "What tests do you actually need, what do the results mean, and when should you worry? A practical guide to understanding your water from a Tampa Bay perspective.",
    date: "2026-02-20",
    author: "Jusi H2O Team",
    category: "Water Testing",
    readTime: "11 min read",
    tags: ["Water Testing", "Water Quality", "Homeowner Guide"],
    content: `<p>Water testing is simultaneously one of the most important things a homeowner can do and one of the most confusing. The number of possible tests, the alphabet soup of abbreviations, and the lack of clear "safe vs. unsafe" guidance for many parameters leaves most people paralyzed. This guide cuts through the complexity for Tampa Bay homeowners specifically.</p>

<h2>Why Test at All If Municipal Water Is "Safe"?</h2>

<p>Tampa Bay Water treats and tests its water to meet all EPA Safe Drinking Water Act standards. So why test your home's water? Four reasons:</p>

<p><strong>Your plumbing changes the water:</strong> Lead pipes and lead solder were legal in home construction until 1986. Homes built before then may leach lead into water that sits in pipes. Tampa Bay Water delivers essentially lead-free water — but it may pick up lead before it reaches your glass. The only way to know is to test at your tap, not at the treatment plant.</p>

<p><strong>Distribution issues are hyper-local:</strong> A main break, cross-connection, or pressure drop near your home can briefly introduce contaminants that never appear in the utility's testing (which samples at designated monitoring points, not your specific tap).</p>

<p><strong>Your specific location matters:</strong> If you live near agricultural land, industrial facilities, golf courses, dry cleaners, gas stations, or military bases, your groundwater (and possibly your tap water via infiltration) may carry contaminants not found in samples taken miles away.</p>

<p><strong>Context for treatment decisions:</strong> If you're considering a water softener, RO system, or whole-house filter, knowing your actual water chemistry allows you to size and select equipment correctly — rather than guessing.</p>

<h2>The Three Testing Tiers</h2>

<h3>Tier 1: The Basic Screen</h3>

<p>This is appropriate for most city water customers who want a baseline understanding. It covers:</p>

<ul>
<li>Total Hardness (calcium + magnesium)</li>
<li>Total Dissolved Solids (TDS)</li>
<li>pH</li>
<li>Chlorine / Chloramines (free and combined)</li>
<li>Iron (total)</li>
<li>Hydrogen Sulfide</li>
</ul>

<p>This can be done with a professional in-home test kit in 30–45 minutes. It gives you actionable data for the most common Tampa Bay water issues — hardness, chlorine, and occasional iron/sulfide from system or plumbing conditions.</p>

<h3>Tier 2: The Health Screen</h3>

<p>Appropriate for homes with older plumbing, near industrial or agricultural sites, or where someone in the household has immune compromise, is pregnant, or is under 5 years old. This adds:</p>

<ul>
<li>Lead and copper (requires "first draw" sampling — water collected after sitting in pipes overnight)</li>
<li>Nitrates and nitrites</li>
<li>Total coliform and E. coli</li>
<li>Trihalomethanes (THMs) and Haloacetic Acids (HAAs) — disinfection byproducts</li>
<li>Fluoride</li>
<li>Arsenic</li>
</ul>

<p>This requires lab analysis and typically takes 5–10 business days for results. Cost ranges from $100–$250 through certified labs or through water treatment companies offering comprehensive testing.</p>

<h3>Tier 3: The Comprehensive Panel</h3>

<p>For homes with unexplained health issues, very old plumbing, near Superfund sites or military facilities (MacDill AFB in Tampa is an example), or where you simply want complete knowledge:</p>

<ul>
<li>Full VOC (volatile organic compound) screen</li>
<li>Pesticide and herbicide panel</li>
<li>PFAS panel (PFOA, PFOS, and other compounds)</li>
<li>Heavy metals panel (lead, mercury, cadmium, chromium, barium, etc.)</li>
<li>Pharmaceutical compounds (emerging contaminant screen)</li>
</ul>

<p>This level of testing requires a certified analytical laboratory and costs $300–$800 depending on the panel size. It's not necessary for most Tampa Bay residents but is important in specific circumstances.</p>

<h2>Understanding Key Measurements</h2>

<p><strong>Total Dissolved Solids (TDS):</strong> Measured in milligrams per liter (mg/L) or parts per million (ppm). This is the aggregate of all dissolved minerals in your water. Tampa Bay municipal water typically reads 200–500 mg/L. The EPA secondary standard is 500 mg/L; above this, water may taste bitter or salty. TDS doesn't tell you what's in the water — just the total quantity of dissolved material.</p>

<p><strong>Hardness:</strong> Reported in mg/L as CaCO₃ or in grains per gallon (GPG). Divide mg/L by 17.1 to get GPG. Tampa Bay water is typically 200–400 mg/L (11–23 GPG) — firmly in the "hard" to "very hard" range:</p>
<ul>
<li>0–60 mg/L (0–3.5 GPG): Soft</li>
<li>61–120 mg/L (3.5–7 GPG): Moderately hard</li>
<li>121–180 mg/L (7–10.5 GPG): Hard</li>
<li>Above 180 mg/L (above 10.5 GPG): Very hard</li>
</ul>

<p><strong>pH:</strong> Measures acidity/alkalinity on a 0–14 scale (7 is neutral). The EPA recommends 6.5–8.5 for drinking water. Tampa Bay water typically runs 7.0–8.0 (slightly alkaline due to limestone mineral content), which is ideal. Below 6.5, water becomes corrosive and will leach metals from pipes.</p>

<p><strong>Lead:</strong> No safe level exists for children. EPA action level is 15 ppb (at which point utilities must act). Your household goal should be as close to zero as possible. If you have pre-1986 plumbing, test specifically for lead with a "first draw" sample taken after water has sat in pipes for at least 6 hours.</p>

<p><strong>Nitrates:</strong> Reported as NO3-N (as nitrogen) or as NO3 (as nitrate). Make sure you know which units your report uses — the MCL is 10 mg/L as nitrogen OR 45 mg/L as nitrate. These represent the same concentration but look very different numerically.</p>

<h2>The "First Draw" Lead Test: Do It Right</h2>

<p>Lead testing is uniquely dependent on sampling technique. To accurately assess lead risk:</p>
<ol>
<li>Don't use any water from the tested tap for 6–8 hours before sampling (overnight is ideal)</li>
<li>Collect the first 250mL from the tap (this is the water that sat in the service line and household plumbing — where lead exposure is highest)</li>
<li>Submit to a certified lab immediately</li>
</ol>

<p>Standard water filter pitcher tests and basic strips do not test for lead. You need a lab analysis.</p>

<h2>Acting on Your Results</h2>

<p>When you receive your results, don't panic at numbers above EPA MCLs — but don't ignore them either. For specific guidance:</p>

<p>Above-MCL lead: Run the tap for 2+ minutes before using water for drinking or cooking until a filter is installed. Point-of-use RO or NSF 53-certified lead-reduction filters are the right solution.</p>

<p>High hardness: Water softener or conditioner, sized to your actual hardness level and household water usage.</p>

<p>High chlorine/THMs: Whole-house activated carbon filtration or point-of-use carbon/RO for drinking water.</p>

<p>Above-MCL nitrates: RO at the drinking water tap, or bottled water for infants and pregnant women while treatment is arranged.</p>

<p>Jusi H2O offers free basic water testing and can provide a referral for certified lab analysis when Tier 2 or Tier 3 testing is appropriate. After testing, we provide a written treatment recommendation with no obligation to purchase.</p>`,
  },
  {"slug":"water-softener-cost-hillsborough-county-fl","title":"How Much Does Water Softener Cost in Hillsborough County, FL?","category":"Guide","excerpt":"Water softener pricing in Hillsborough County varies by system type, home size, and installation. Get a free quote from Jusi H2O.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"5 min read","tags":["Water Softener","Cost","Hillsborough County"],"content":""},
  {"slug":"whole-house-filtration-cost-hillsborough-county-fl","title":"How Much Does Whole-House Filtration Cost in Hillsborough County, FL?","category":"Guide","excerpt":"Whole-house filtration costs in Hillsborough County depend on water quality and system type. Learn what to expect from Jusi H2O.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"5 min read","tags":["Water Filtration","Cost","Hillsborough County"],"content":""},
  {"slug":"reverse-osmosis-cost-hillsborough-county-fl","title":"How Much Does Reverse Osmosis Cost in Hillsborough County, FL?","category":"Guide","excerpt":"Reverse osmosis system pricing for Hillsborough County homes. Free in-home assessment and quote from Jusi H2O.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"5 min read","tags":["Reverse Osmosis","Cost","Hillsborough County"],"content":""},
  {"slug":"water-filtration-cost-hillsborough-county-fl","title":"How Much Does Water Filtration Cost in Hillsborough County, FL?","category":"Guide","excerpt":"Water filtration system pricing for Hillsborough County. Jusi H2O offers free assessments with transparent quotes.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"5 min read","tags":["Water Filtration","Cost","Hillsborough County"],"content":""},
  {"slug":"water-testing-cost-hillsborough-county-fl","title":"How Much Does Water Testing Cost in Hillsborough County, FL?","category":"Guide","excerpt":"Free water testing in Hillsborough County from Jusi H2O. Learn what we test for and why it matters.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"5 min read","tags":["Water Testing","Cost","Hillsborough County"],"content":""},
  {"slug":"water-treatment-cost-hillsborough-county-fl","title":"How Much Does Water Treatment Cost in Hillsborough County, FL?","category":"Guide","excerpt":"Water treatment costs in Hillsborough County vary by system and water conditions. Get a free assessment from Jusi H2O.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"5 min read","tags":["Water Treatment","Cost","Hillsborough County"],"content":""},
  {"slug":"water-softener-vs-water-conditioner","title":"Water Softener vs. Water Conditioner: Which Is Right for Your Home?","category":"Guide","excerpt":"Compare water softeners and water conditioners to find the best hard water solution for your Tampa Bay home.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"6 min read","tags":["Water Softener","Water Conditioner","Comparison"],"content":""},
  {"slug":"winter-water-tips-hillsborough-county-fl","title":"Winter Water System Tips for Hillsborough County, FL Homeowners","category":"Guide","excerpt":"Protect your water system during Florida winters. Tips from Jusi H2O for Hillsborough County homeowners.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"4 min read","tags":["Winter Tips","Hillsborough County","Maintenance"],"content":""},
  {"slug":"summer-water-guide-hillsborough-county-fl","title":"Summer Water Quality Guide for Hillsborough County, FL Homeowners","category":"Guide","excerpt":"Summer water quality challenges in Hillsborough County and how to keep your water clean and safe.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"5 min read","tags":["Summer Guide","Hillsborough County","Water Quality"],"content":""},
  {"slug":"hard-water-guide-hillsborough-county","title":"Hard Water in Hillsborough County: A Complete Homeowner's Guide","category":"Water Quality","excerpt":"Learn how hard water affects your plumbing, appliances, and health in Hillsborough County, FL. Expert advice from Jusi H2O on testing and treatment options.","date":"2026-04-05","author":"Jusi H2O Team","readTime":"8 min read","tags":["Hard Water","Hillsborough County","Guide"],"content":""},
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
