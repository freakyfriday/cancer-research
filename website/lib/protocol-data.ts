// Structured protocol data — maps to research articles via slugs

export interface Supplement {
  name: string;
  action: string;
  notes: string;
  slugs?: string[];
  badge?: { type: "new" | "moved" | "warn"; label: string };
}

export interface TherapyStep {
  name: string;
  why: string;
  duration: string;
  slugs?: string[];
}

export interface Synergy {
  pair: string;
  mechanism: string;
  timing: string;
  slugs?: string[];
}

export interface Interaction {
  pair: string;
  risk: string;
}

export interface TimingSeparation {
  pair: string;
  rule: string;
  why: string;
}

export interface MonitoringItem {
  item: string;
  monitor: string;
}

export interface BloodTest {
  test: string;
  why: string;
}

// ────────────────────────────────────────────────────
// LOCKED MEDICATIONS
// ────────────────────────────────────────────────────
export const lockedMedications: Supplement[] = [
  {
    name: "Ivermectin",
    action: "Signal T-cells",
    notes: "120 mg/day (10 × 12 mg). Take with ~50 g fat. Lipophilic — fat essential.",
    slugs: ["ivermectin_immune_activation"],
  },
  {
    name: "Fenbendazole",
    action: "Disrupt cancer metabolism",
    notes: "444 mg/day (2 × 222 mg). Mon/Wed/Fri nights with fat.",
    slugs: ["fenbendazole_metabolism_disruption"],
  },
  {
    name: "Mebendazole",
    action: "Starve cancer cells",
    notes: "500 mg (1 tablet). Tue/Thu nights with fat.",
    slugs: ["mebendazole-cancer-metabolism"],
  },
];

// ────────────────────────────────────────────────────
// ON WAKING
// ────────────────────────────────────────────────────
export const onWaking: Supplement[] = [
  {
    name: "Serrapeptase",
    action: "Dissolve biofilm & fibrin shield",
    notes: "120k–250k SPU enteric-coated. Strips tumour's fibrin cloak → exposes cancer to immune attack + HBOT oxygen.",
    slugs: ["serrapeptase-serratia-cancer"],
  },
  {
    name: "Nattovena (Nattokinase)",
    action: "Break down fibrin",
    notes: "Different mechanism (activates plasminogen→plasmin). Together = comprehensive shield destruction.",
    slugs: ["nattokinase-fibrinolysis-cancer"],
  },
  {
    name: "D-Serine",
    action: "Block cancer one-carbon metabolism",
    notes: "2–2.5 g (30 mg/kg) powder in water. Competitively blocks mitochondrial L-serine transport → depletes NADPH/GSH → cancer defenceless against Vit C/HBOT. Ramp: 1 g wk 1 → 1.5 g wk 2 → full dose wk 3.",
    slugs: ["d-serine-cancer-metabolism", "d-serine-mb-rlt-combined-synergy"],
    badge: { type: "new", label: "NEW" },
  },
];

// ────────────────────────────────────────────────────
// MORNING
// ────────────────────────────────────────────────────
export const morning: Supplement[] = [
  {
    name: "10× Chlorella / Spirulina",
    action: "Bind & detoxify",
    notes: "Take before sauna. ⚠️ Stop during platinum chemo.",
    slugs: ["chlorella-spirulina-cancer-research"],
  },
  {
    name: "Probiotic",
    action: "Restore gut flora",
    notes: "",
    slugs: ["therapeutic-yoghurt-probiotic-strains-cancer"],
  },
  {
    name: "Turkey Tail",
    action: "Boost immune surveillance",
    notes: "3 g/day PSK extract (clinical trial dose).",
    slugs: ["turkey-tail-mushroom-cancer"],
  },
  {
    name: "Astragalus",
    action: "Enhance NK cells",
    notes: "Full spectrum extract.",
  },
  {
    name: "Molybdenum",
    action: "Support SUOX detox",
    notes: "2×/week. May lower copper (monitor). Take ≥2 hrs from Quercetin.",
    slugs: ["molybdenum-suox-cancer"],
  },
  {
    name: "ImmunoGenex",
    action: "Activate immunity",
    notes: "",
  },
  {
    name: "Methylene Blue",
    action: "Reset mitochondria + photosensitiser",
    notes: "0.5–2 mg/kg oral. Water-soluble — no fat needed. 30 min before Red Light → photodynamic kill (665 nm).",
    slugs: ["methylene_blue_anticancer", "methylene_blue_red_light_mitochondria"],
  },
  {
    name: "Astaxanthin",
    action: "Guard cell membranes",
    notes: "12–24 mg/day with fat. Promotes Akkermansia growth.",
    slugs: ["astaxanthin-cancer-detox"],
  },
  {
    name: "Magnesium Citrate",
    action: "Cellular Mg + Krebs substrate",
    notes: "200 mg with food. Absorption-focused (AM). PM dose on empty stomach for peristalsis.",
    slugs: ["magnesium-citrate-peristalsis", "magnesium-glycinate-cancer"],
    badge: { type: "new", label: "NEW" },
  },
  {
    name: "Pasteurised Akkermansia",
    action: "Rebuild gut barrier",
    notes: "10B CFU/day with food. Astaxanthin amplifies colonisation.",
    slugs: ["akkermansia-muciniphila-colon-cancer"],
  },
  {
    name: "L. gasseri Yoghurt",
    action: "Repopulate microbiome",
    notes: "½ cup (120 mL). Ramp from ¼ cup in week 1.",
    slugs: ["therapeutic-yoghurt-probiotic-strains-cancer"],
  },
];

// ────────────────────────────────────────────────────
// THERAPY SEQUENCE
// ────────────────────────────────────────────────────
export const therapySteps: TherapyStep[] = [
  {
    name: "Methylene Blue",
    why: "MB needs 30 min to reach blood before Red Light activates it.",
    duration: "—",
    slugs: ["methylene_blue_anticancer"],
  },
  {
    name: "Red Light Therapy",
    why: "660+850 nm activates MB (photodynamic kill). Primes mitochondria for HBOT.",
    duration: "10–20 min",
    slugs: ["red_light_therapy_anticancer"],
  },
  {
    name: "Resistance Training",
    why: "Activate myokines. Train before sauna (heat amplifies recovery).",
    duration: "20–30 min, 2–3×/wk",
    slugs: ["resistance-training-anticancer"],
  },
  {
    name: "Melatonin 3–6 mg (pre-HBOT)",
    why: "Protects healthy cells from HBOT oxidative stress while leaving cancer vulnerable. Peak plasma at ~30 min.",
    duration: "30 min before HBOT",
    slugs: ["melatonin_anticancer", "hbot-hyperbaric-oxygen-therapy-cancer"],
  },
  {
    name: "HBOT",
    why: "Flood exposed tumour with O₂ (Serrapeptase stripped fibrin shield). Hospital-grade, 100% O₂.",
    duration: "30–60 min at 3 ATA",
    slugs: ["hbot-hyperbaric-oxygen-therapy-cancer"],
  },
  {
    name: "Far-Infrared Sauna",
    why: "Deep heat detox. Mobilises toxins Chlorella binds. Synergy with Ivermectin.",
    duration: "30 min at 54–60°C",
    slugs: ["sauna-therapy-cancer-detox"],
  },
  {
    name: "Shower",
    why: "Wash off mobilised toxins.",
    duration: "—",
  },
  {
    name: "Bio-Resonance — Spooky2",
    why: "Shatter cancer cells with targeted frequencies. Can run during rest/work.",
    duration: "30–60 min",
    slugs: ["rife-bioresonance-frequency-cancer"],
  },
];

// ────────────────────────────────────────────────────
// LUNCH — POLYPHENOL CLUSTER
// ────────────────────────────────────────────────────
export const lunch: Supplement[] = [
  {
    name: "Green Tea (EGCG)",
    action: "Inhibit cancer growth",
    notes: "Take at start of meal. Avoid dairy (casein blocks EGCG). ≤800 mg/day. Monitor liver enzymes.",
    slugs: ["egcg_green_tea_anticancer"],
  },
  {
    name: "Vitamin C + D3/K2",
    action: "Pro-oxidant kill + stabilise EGCG",
    notes: "Oral liposomal Vit C (3–10 g/day) on non-IV days.",
    slugs: ["vitamin-c-cancer"],
  },
  {
    name: "Quercetin",
    action: "Block cancer metabolism",
    notes: "With some fat. ⚠️ CYP3A4/CYP2C19 inhibitor.",
    slugs: ["quercetin-cancer-metabolism"],
    badge: { type: "warn", label: "⚠️ CYP" },
  },
  {
    name: "Resveratrol",
    action: "Suppress tumour pathways",
    notes: "≤1 g/day. Complements Quercetin.",
    slugs: ["resveratrol-cancer"],
    badge: { type: "moved", label: "★ MOVED" },
  },
  {
    name: "Anthogenol",
    action: "Anti-angiogenic OPCs",
    notes: "Grape seed extract. Amplifies EGCG + Quercetin.",
    slugs: ["anthogenol-grape-seed-opc-cancer"],
    badge: { type: "moved", label: "★ MOVED" },
  },
  {
    name: "10× Chlorella/Spirulina",
    action: "Bind & detoxify",
    notes: "2nd dose.",
    slugs: ["chlorella-spirulina-cancer-research"],
  },
  {
    name: "Zinc 15 mg",
    action: "Restore apoptosis",
    notes: "Zinc-L-Carnosine for colon. Synergy with Butyrate.",
    slugs: ["zinc-l-carnosine-cancer"],
  },
  {
    name: "Butyrate",
    action: "Feed colon lining cells",
    notes: "Supports peristalsis. PD-L1 reduction complements Ivermectin.",
    slugs: ["butyrate-colon-cancer-ens"],
  },
];

// ────────────────────────────────────────────────────
// NIGHT — MON/WED/FRI
// ────────────────────────────────────────────────────
export const nightMWF: Supplement[] = [
  {
    name: "Fenbendazole + Ivermectin",
    action: "Disrupt & signal",
    notes: "With ~50 g fat. Two-front war.",
    slugs: ["fenbendazole_metabolism_disruption", "ivermectin_immune_activation"],
  },
  {
    name: "Turkey Tail",
    action: "Boost immune",
    notes: "Stacks with Ivermectin ICD.",
    slugs: ["turkey-tail-mushroom-cancer"],
  },
  {
    name: "10× Chlorella/Spirulina",
    action: "Bind & detoxify",
    notes: "3rd dose.",
    slugs: ["chlorella-spirulina-cancer-research"],
  },
  {
    name: "Butyrate",
    action: "Feed colon lining",
    notes: "Synergy with Marshmallow.",
    slugs: ["butyrate-colon-cancer-ens"],
  },
  {
    name: "Marshmallow",
    action: "Soothe + prebiotic",
    notes: "Feeds butyrate bacteria.",
    slugs: ["marshmallow-root-cancer"],
  },
  {
    name: "Magnesium Citrate",
    action: "Enzyme repair + peristalsis",
    notes: "200–300 mg on empty stomach + water. Osmotic laxative → morning elimination. AM dose with food for absorption.",
    slugs: ["magnesium-citrate-peristalsis", "magnesium-glycinate-cancer"],
    badge: { type: "moved", label: "★ CHANGED" },
  },
  {
    name: "Melatonin 3–6 mg",
    action: "Suppress tumour",
    notes: "Nightly dose. Take with evening Mg Citrate. Separate from pre-HBOT dose.",
    slugs: ["melatonin_anticancer"],
  },
];

// ────────────────────────────────────────────────────
// NIGHT — TUE/THU/SAT
// ────────────────────────────────────────────────────
export const nightTTS: Supplement[] = [
  {
    name: "Mebendazole (not Sat) + Ivermectin",
    action: "Starve & signal",
    notes: "With ~50 g fat.",
    slugs: ["mebendazole-cancer-metabolism", "ivermectin_immune_activation"],
  },
  {
    name: "Turkey Tail",
    action: "Boost immune",
    notes: "2nd dose.",
    slugs: ["turkey-tail-mushroom-cancer"],
  },
  {
    name: "10× Chlorella/Spirulina",
    action: "Bind & detoxify",
    notes: "3rd dose.",
    slugs: ["chlorella-spirulina-cancer-research"],
  },
  {
    name: "Butyrate",
    action: "Feed colon lining",
    notes: "",
    slugs: ["butyrate-colon-cancer-ens"],
  },
  {
    name: "Marshmallow",
    action: "Soothe + prebiotic",
    notes: "",
    slugs: ["marshmallow-root-cancer"],
  },
  {
    name: "Magnesium Citrate",
    action: "Enzyme repair + peristalsis",
    notes: "200–300 mg on empty stomach + water. Osmotic laxative → morning elimination.",
    slugs: ["magnesium-citrate-peristalsis", "magnesium-glycinate-cancer"],
    badge: { type: "moved", label: "★ CHANGED" },
  },
  {
    name: "Melatonin 3–6 mg",
    action: "Suppress tumour",
    notes: "Nightly dose. Take with evening Mg Citrate. Separate from pre-HBOT dose.",
    slugs: ["melatonin_anticancer"],
  },
];

// ────────────────────────────────────────────────────
// INJECTIONS
// ────────────────────────────────────────────────────
export interface Injection {
  name: string;
  action: string;
  dose: string;
  frequency: string;
  notes: string;
  slugs?: string[];
}

export const injections: Injection[] = [
  {
    name: "IV Vitamin C",
    action: "Pro-oxidant flood",
    dose: "25–75 g (1–1.5 g/kg)",
    frequency: "Fortnightly (Day 1)",
    notes: "G6PD test MANDATORY. Synergy with HBOT.",
    slugs: ["vitamin-c-cancer", "vitamin-c-glutathione-iv-cancer"],
  },
  {
    name: "IV Glutathione",
    action: "Detox & protect organs",
    dose: "600–2,000 mg",
    frequency: "Fortnightly (Day 2)",
    notes: "≥24 hrs AFTER Vit C. Neutralises pro-oxidant kill if same day.",
    slugs: ["vitamin-c-glutathione-iv-cancer"],
  },
  {
    name: "Methylcobalamin (B12)",
    action: "DNA repair + nerve protection",
    dose: "1–2 mg IM injection",
    frequency: "Weekly → monthly",
    notes: "Active form — no liver conversion needed. Supports methylation.",
    slugs: ["methylcobalamin-b12-cancer"],
  },
];

// ────────────────────────────────────────────────────
// BLOOD TESTS
// ────────────────────────────────────────────────────
export const baselineTests: BloodTest[] = [
  { test: "G6PD screen", why: "Clears for IV Vit C + Methylene Blue" },
  { test: "Full Blood Count (FBC)", why: "Red/white cells, platelets baseline" },
  { test: "Liver Function (LFTs)", why: "ALT, AST, GGT — baseline before EGCG + drug load" },
  { test: "Kidney Function (U&E)", why: "Creatinine, eGFR — baseline before IV Vit C" },
  { test: "CEA (tumour marker)", why: "Tracking number for colon cancer" },
  { test: "CRP", why: "Inflammation marker — tracks overall progress" },
  { test: "Copper + Zinc levels", why: "Baseline before Molybdenum + Zinc supplementation" },
  { test: "Vitamin D", why: "Baseline for D3/K2 dosing (target 60–80 ng/mL)" },
  { test: "RBC Magnesium", why: "Serum Mg is unreliable — RBC test is accurate" },
  { test: "Coagulation (INR/PT)", why: "Baseline before Serrapeptase + Nattovena" },
  { test: "B12 + Folate", why: "Baseline before Methylcobalamin injections" },
];

export const ongoingTests: BloodTest[] = [
  { test: "CEA", why: "↓ Trending down = protocol working. ↑ Rising = reassess." },
  { test: "CRP", why: "↓ Dropping = inflammation reducing. ↑ Rising = investigate." },
  { test: "FBC", why: "Platelets OK? (Serrapeptase/Nattovena). Red cells OK?" },
  { test: "LFTs", why: "Liver coping with EGCG + Ivermectin + FBZ + MBZ?" },
  { test: "Kidney Function", why: "Handling the supplement + IV load?" },
  { test: "Copper", why: "Molybdenum may lower it (monitor — low copper is anti-angiogenic)" },
  { test: "Vitamin D", why: "Maintaining therapeutic range?" },
];

// ────────────────────────────────────────────────────
// SYNERGY MAP
// ────────────────────────────────────────────────────
export const synergies: Synergy[] = [
  { pair: "D-serine → IV Vit C / HBOT", mechanism: "D-serine depletes NADPH/GSH via 1C metabolism block → cancer defenceless", timing: "D-serine waking, Vit C/HBOT ≥3 hrs later", slugs: ["d-serine-cancer-metabolism", "vitamin-c-cancer", "hbot-hyperbaric-oxygen-therapy-cancer"] },
  { pair: "D-serine + FBZ/MBZ", mechanism: "Serine blockade + glucose blockade = dual metabolic starvation", timing: "D-serine morning, FBZ/MBZ night", slugs: ["d-serine-cancer-metabolism", "fenbendazole_metabolism_disruption", "mebendazole-cancer-metabolism"] },
  { pair: "D-serine + EGCG", mechanism: "1C input blocked (D-serine) + folate output blocked (EGCG)", timing: "D-serine morning, EGCG lunch", slugs: ["d-serine-cancer-metabolism", "egcg_green_tea_anticancer"] },
  { pair: "D-serine + MB + RLT", mechanism: "GSH depletion → ¹O₂ not quenched → amplified photodynamic kill", timing: "D-serine waking, MB breakfast, RLT +30 min", slugs: ["d-serine-mb-rlt-combined-synergy"] },
  { pair: "MB → Red Light", mechanism: "MB absorbs 665 nm → singlet oxygen → photodynamic kill", timing: "MB 30 min before RLT", slugs: ["methylene_blue_red_light_mitochondria"] },
  { pair: "Serrapeptase → HBOT", mechanism: "Strip fibrin shield → O₂ floods exposed tumour", timing: "Waking → mid-morning", slugs: ["serrapeptase-serratia-cancer", "hbot-hyperbaric-oxygen-therapy-cancer"] },
  { pair: "RLT → HBOT", mechanism: "Red light primes mitochondria → HBOT maximises ROS", timing: "RLT before HBOT", slugs: ["red_light_therapy_anticancer", "hbot-hyperbaric-oxygen-therapy-cancer"] },
  { pair: "HBOT + Melatonin", mechanism: "Melatonin selectively protects healthy cells from HBOT ROS; cancer cells remain vulnerable. Combo studied in CRC.", timing: "3–6 mg 30 min pre-HBOT + 3–6 mg nightly", slugs: ["hbot-hyperbaric-oxygen-therapy-cancer", "melatonin_anticancer"] },
  { pair: "Chlorella → Sauna", mechanism: "Chlorella binds toxins mobilised by sweating", timing: "Chlorella 30 min before", slugs: ["chlorella-spirulina-cancer-research", "sauna-therapy-cancer-detox"] },
  { pair: "EGCG + Vit C", mechanism: "Vitamin C stabilises EGCG → better absorption", timing: "Same meal (lunch)", slugs: ["egcg_green_tea_anticancer", "vitamin-c-cancer"] },
  { pair: "Quercetin + EGCG", mechanism: "Quercetin inhibits COMT → ↑ intracellular EGCG", timing: "Same meal (lunch)", slugs: ["quercetin-cancer-metabolism", "egcg_green_tea_anticancer"] },
  { pair: "Anthogenol + polyphenols", mechanism: "OPCs amplify EGCG + Quercetin + Resveratrol", timing: "Same meal (lunch)", slugs: ["anthogenol-grape-seed-opc-cancer"] },
  { pair: "Resveratrol + Quercetin", mechanism: "Both activate SIRT1/AMPK; complementary epigenetics", timing: "Same meal (lunch)", slugs: ["resveratrol-cancer", "quercetin-cancer-metabolism"] },
  { pair: "Zinc + Butyrate", mechanism: "Zinc heals mucosa + Butyrate feeds colon lining", timing: "Same meal (lunch)", slugs: ["zinc-l-carnosine-cancer", "butyrate-colon-cancer-ens"] },
  { pair: "Butyrate + Marshmallow", mechanism: "Marshmallow feeds butyrate-producing bacteria", timing: "Same meal (night)", slugs: ["butyrate-colon-cancer-ens", "marshmallow-root-cancer"] },
  { pair: "Astaxanthin + Akkermansia", mechanism: "Astaxanthin promotes Akkermansia colonisation", timing: "Same meal (morning)", slugs: ["astaxanthin-cancer-detox", "akkermansia-muciniphila-colon-cancer"] },
  { pair: "Ivermectin + Butyrate", mechanism: "IVM triggers ICD; Butyrate reduces PD-L1", timing: "Both at night", slugs: ["ivermectin_immune_activation", "butyrate-colon-cancer-ens"] },
  { pair: "Fenbendazole + Ivermectin", mechanism: "Metabolic starvation + immune activation", timing: "Same meal (night)", slugs: ["fenbendazole_metabolism_disruption", "ivermectin_immune_activation"] },
  { pair: "Serrapeptase + Nattovena", mechanism: "Different fibrinolytic mechanisms = synergy", timing: "Together (on waking)", slugs: ["serrapeptase-serratia-cancer", "nattokinase-fibrinolysis-cancer"] },
  { pair: "Nattovena → Vit C IV", mechanism: "Improved microcirculation → H₂O₂ reaches tumour better", timing: "On waking → IV day", slugs: ["nattokinase-fibrinolysis-cancer", "vitamin-c-glutathione-iv-cancer"] },
  { pair: "Molybdenum + Butyrate", mechanism: "SUOX clears sulfite → supports butyrate metabolism", timing: "Morning + lunch/night", slugs: ["molybdenum-suox-cancer", "butyrate-colon-cancer-ens"] },
  { pair: "Sauna + Ivermectin", mechanism: "Published hyperthermia + IVM synergy", timing: "Sauna AM, IVM PM", slugs: ["sauna-therapy-cancer-detox", "ivermectin_immune_activation"] },
  { pair: "D-serine + Mag Citrate (not Glycinate)", mechanism: "Citrate avoids glycine → no bypass of 1C metabolism block. Citrate feeds TCA cycle instead", timing: "D-serine waking, Mg citrate AM + PM", slugs: ["d-serine-cancer-metabolism", "magnesium-citrate-peristalsis"] },
];

// ────────────────────────────────────────────────────
// CONTRAINDICATIONS
// ────────────────────────────────────────────────────
export const hardContraindications: Interaction[] = [
  { pair: "Methylene Blue + SSRIs", risk: "Serotonin syndrome — potentially fatal." },
  { pair: "Methylene Blue + G6PD deficiency", risk: "Haemolytic anaemia. G6PD test mandatory." },
  { pair: "IV Vitamin C + G6PD deficiency", risk: "Haemolytic anaemia. G6PD test mandatory." },
  { pair: "Red Light over tumour (without MB)", risk: "May stimulate tumour growth. Only with MB photosensitiser." },
];

export const timingSeparations: TimingSeparation[] = [
  { pair: "D-serine ↔ Oral Vit C", rule: "D-serine ≥3 hrs before Vit C", why: "Let NADPH depletion establish before pro-oxidant strike" },
  { pair: "D-serine ↔ Food", rule: "Take on empty stomach with Serrapeptase", why: "Avoid L-serine competition from dietary amino acids" },
  { pair: "Serrapeptase / Nattovena", rule: "Empty stomach — 30 min before food", why: "With food they digest proteins instead of absorbing" },
  { pair: "Molybdenum ↔ Quercetin", rule: "Different meals (AM vs lunch)", why: "Quercetin inhibits xanthine oxidase (Mo-dependent)" },
  { pair: "Zinc ↔ Magnesium Citrate", rule: "4+ hrs apart (lunch zinc, AM + PM mag citrate)", why: "Divalent cation competition for absorption" },
  { pair: "IV Vit C ↔ IV Glutathione", rule: "≥24 hrs apart", why: "Glutathione neutralises Vit C's pro-oxidant kill" },
  { pair: "IV Vit C ↔ Chemo", rule: "24–48 hrs", why: "Coordinate with oncologist" },
  { pair: "Sauna ↔ Night meds", rule: "2–3 hr gap", why: "Sweating may reduce drug absorption" },
  { pair: "EGCG", rule: "Start of meal, before main food", why: "Avoid dairy (casein blocks EGCG)" },
];

export const monitoringItems: MonitoringItem[] = [
  { item: "Serrapeptase + Nattovena", monitor: "Blood-thinning — stop 2 wks pre-surgery. Avoid with anticoagulants." },
  { item: "Anthogenol", monitor: "Enhances anticoagulant effects. Monitor on blood thinners." },
  { item: "Quercetin + Resveratrol", monitor: "Both inhibit CYP3A4/CYP2C19 → may ↑ drug levels." },
  { item: "Chlorella + Platinum chemo", monitor: "Chelation may bind cisplatin. Stop during platinum chemo." },
  { item: "EGCG ≥600 mg/day", monitor: "Monitor liver enzymes." },
  { item: "Molybdenum", monitor: "May lower copper — beneficial but monitor." },
  { item: "Ivermectin 120 mg/day", monitor: "Above standard dose. Fat essential. Medical supervision required." },
  { item: "Melatonin 3–6 mg (×2/day on HBOT days)", monitor: "Pre-HBOT dose (30 min before) + nightly dose. May cause vivid dreams or morning grogginess initially — usually resolves within a week." },
  { item: "Serrapeptase + Drugs", monitor: "May ↑ blood levels of co-administered drugs." },
  { item: "Resveratrol >1 g/day", monitor: "GI discomfort; CYP3A4 effects increase." },
  { item: "D-serine", monitor: "Renally excreted — monitor creatinine + eGFR. If eGFR < 60, reduce or stop. Ramp: 1 g wk 1 → 2.5 g wk 3." },
];
