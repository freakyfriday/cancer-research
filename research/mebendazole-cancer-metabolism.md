# Mebendazole & Cancer Metabolism Disruption

> **Research compiled**: 14 March 2026
> **Status**: Active area of investigation — promising preclinical data, mixed early clinical results

---

## 1. Background

Mebendazole (MBZ) is an FDA-approved benzimidazole anthelmintic (anti-parasitic) drug that has been in clinical use since the 1970s. It is primarily prescribed for intestinal worm infections (pinworm, roundworm, hookworm, whipworm). Over the past decade, MBZ has emerged as one of the most promising candidates in **drug repurposing for oncology** due to its multi-modal anti-cancer activity, established safety profile, low cost, and oral bioavailability.

**Chemical class**: Benzimidazole carbamate
**Molecular target (primary)**: β-tubulin subunit of microtubules
**FDA status**: Approved (anthelmintic); investigational for cancer

---

## 2. Mechanisms of Cancer Metabolism Disruption

MBZ disrupts cancer metabolism through at least **seven distinct but interconnected mechanisms**. This multi-target profile is what makes it particularly interesting — cancer cells cannot easily develop resistance to a drug attacking multiple metabolic and structural vulnerabilities simultaneously.

### 2.1 Microtubule Disruption (Primary Mechanism)

MBZ binds to the **colchicine-binding domain of β-tubulin**, preventing tubulin polymerisation into microtubules. Cancer cells — characterised by rapid, uncontrolled division — are critically dependent on microtubule dynamics for:

- **Mitotic spindle formation** → MBZ causes G2/M cell cycle arrest
- **Intracellular transport** → disrupts vesicular trafficking, including glucose transporter (GLUT) recycling
- **Cellular structural integrity** → leads to cytoskeletal collapse

This mechanism is analogous to established chemotherapy agents like vincristine (vinca alkaloids) and paclitaxel (taxanes), but MBZ has a significantly lower toxicity profile.

**Metabolic consequence**: By disrupting microtubule-dependent transport, MBZ impairs the trafficking of glucose transporters to the cell surface, reducing glucose uptake in cancer cells. This directly starves cells that are dependent on the Warburg effect (aerobic glycolysis).

### 2.2 Glycolysis Modulation (Warburg Effect Disruption)

Cancer cells reprogram their metabolism to favour **glycolysis over oxidative phosphorylation** even in the presence of oxygen — the Warburg effect. MBZ directly targets this metabolic hallmark:

| Glycolytic Target | Effect of MBZ | Consequence |
|---|---|---|
| **SLC2A1** (GLUT1 transporter) | Downregulated mRNA expression | Reduced glucose uptake |
| **HK1** (Hexokinase 1) | Modulated expression | Impaired first step of glycolysis |
| **GAPDH** | Modulated expression | Disrupted glycolytic flux |
| **LDHA** (Lactate Dehydrogenase A) | Reduced LDH enzymatic activity | Impaired lactate production |

**Net result**: Reduced glucose uptake, decreased ATP production via glycolysis, and metabolic crisis in glycolysis-dependent cancer cells. Demonstrated in gastric cancer cells, with evidence extending to other cancer types.

MBZ can also **reduce the number of cell-surface GLUT-1 glucose receptors**, further compounding the glucose starvation effect. Related benzimidazoles (e.g., fenbendazole) show similar glycolysis-inhibiting properties, suggesting a class-wide metabolic effect.

### 2.3 Mitochondrial Dysfunction & OXPHOS Impairment

MBZ induces **mitochondrial injury** in cancer cells through multiple mechanisms:

- **Depolarisation of mitochondrial membrane potential (ΔΨm)** → loss of the proton gradient required for oxidative phosphorylation
- **Cytochrome c release** → triggers the intrinsic (mitochondrial) apoptotic pathway
- **Disruption of electron transport chain integrity** → impairs ATP generation via OXPHOS

This creates a metabolic "double hit": MBZ simultaneously impairs both glycolysis (Section 2.2) and oxidative phosphorylation, leaving cancer cells with no viable ATP production pathway. Normal cells, with more metabolic flexibility and lower energy demands, are comparatively spared.

### 2.4 HIF-1α / HIF-2α Inhibition (Hypoxia Response Disruption)

**Key research**: Johns Hopkins University (Riggins, Gilkes labs)

Solid tumours frequently outgrow their blood supply, creating **hypoxic regions**. Cancer cells adapt to hypoxia through Hypoxia-Inducible Factors (HIF-1α, HIF-2α), master transcription factors that drive:

- Upregulation of glycolytic enzymes (supporting the Warburg effect)
- Upregulation of GLUT1 (glucose uptake)
- VEGF expression (angiogenesis)
- Survival/proliferation genes
- Chemotherapy/radiotherapy resistance

**MBZ's effect**: MBZ inhibits the transcriptional activity of both HIF-1α and HIF-2α in breast cancer cells. It prevents the induction of HIF-1α, HIF-2α, and HIF-1β protein under hypoxic conditions, and decreases the overall expression of the hypoxic gene signature across multiple breast cancer cell lines.

**Metabolic significance**: This is arguably MBZ's most impactful metabolic mechanism. By suppressing HIF signalling, MBZ:
1. Prevents cancer cells from adapting their metabolism to low-oxygen conditions
2. Reduces GLUT1 expression (indirect glycolysis inhibition)
3. Disables the transcriptional program that drives chemoresistance
4. Inhibits VEGF-driven angiogenesis (see Section 2.5)

### 2.5 Anti-Angiogenesis (Tumour Nutrient Supply)

MBZ inhibits **VEGFR2 kinase activity**, blocking VEGF-driven angiogenesis — the formation of new blood vessels that supply tumours with oxygen and nutrients.

**Metabolic consequence**: Without adequate vascularisation, tumours experience:
- Glucose/nutrient deprivation
- Increased hypoxia (but MBZ also blocks the HIF-mediated escape from hypoxia)
- Reduced capacity for growth and metastasis

This creates a synergistic metabolic trap: MBZ starves the tumour of external nutrient supply while simultaneously disabling the cell's internal metabolic adaptation mechanisms.

### 2.6 Nucleotide Metabolism Impairment

A February 2026 study (NIH) revealed that MBZ **impairs the expression and function of enzymes involved in nucleotide metabolism**, pathways essential for DNA and RNA synthesis. Rapidly dividing cancer cells have dramatically elevated nucleotide demands compared to normal cells.

This represents a distinct metabolic vulnerability: even if cancer cells find alternative energy sources, they cannot replicate their genetic material without functional nucleotide biosynthesis.

### 2.7 Signalling Pathway Modulation (Metabolic Regulators)

MBZ modulates multiple signalling cascades that act as **upstream metabolic controllers**:

| Pathway | MBZ Effect | Metabolic Impact |
|---|---|---|
| **MEK/ERK** | Inhibited | Reduced cell proliferation signalling |
| **AKT/mTOR** | Inhibited | Major regulator of cell growth, survival, and metabolism |
| **STAT3** | Inhibited | Transcription factor for proliferation and survival |
| **MYC/MAX** | Inhibited | MYC is a master regulator of cancer cell metabolism |
| **NF-κB** | Inhibited | Inflammatory/survival signalling |
| **Hedgehog (Hh)** | Inhibited (via primary cilium suppression) | Drives CSC metabolism and maintenance |
| **Wnt/β-catenin** | Inhibited (via TNIK kinase) | Stem cell maintenance, metabolic reprogramming via Akt-mTOR, TCF/LEF, c-Myc |

> [!IMPORTANT]
> MBZ's inhibition of the **Hedgehog pathway** is particularly notable because it works even in cells resistant to clinical Hh inhibitors like vismodegib (SMO-mutant resistance). MBZ bypasses this resistance by targeting the primary cilium structure itself rather than the SMO receptor.

---

## 3. Cancer Stem Cell (CSC) Targeting

Cancer stem cells are a subpopulation responsible for tumour initiation, drug resistance, and relapse. They have distinct metabolic profiles and are regulated by Hedgehog and Wnt signalling — both of which MBZ inhibits.

MBZ effects on CSCs:
- Reduces **integrin β4 (ITGβ4)** expression
- Diminishes CSC phenotype markers in triple-negative breast cancer (TNBC)
- Induces mitochondrial dysfunction specifically in CSCs
- Inhibits glycolysis-dependent CSC survival

---

## 4. Immunomodulation & Tumour Microenvironment

MBZ modulates the immune landscape of the tumour microenvironment:

- **M2 → M1 macrophage polarisation**: shifts tumour-associated macrophages from immunosuppressive (M2) to anti-tumour (M1) phenotype
- **PD-1/PD-L1 modulation**: can synergise with immune checkpoint inhibitors (anti-PD-1, anti-CTLA-4)
- **Immunogenic cell death (ICD)**: MBZ-induced cell death releases damage-associated molecular patterns that stimulate immune recognition
- **Enhanced NK cell cytotoxicity**: augments natural killer cell-mediated killing of tumour cells, especially with radiotherapy
- **In silico studies** (metastatic TNBC): dual checkpoint blockade + MBZ + ivermectin showed improved PFS, OS, and response rates

---

## 5. Cancers with Demonstrated MBZ Activity

| Cancer Type | Evidence Level | Key Findings |
|---|---|---|
| **Glioblastoma** | Phase I/II clinical trials | Well-tolerated with TMZ; Phase II showed 57.9% 9-month OS in lomustine-MBZ subgroup (good PS) |
| **Colorectal** | Clinical data | Polyp prevention; PFS improved from 3 to 9.25 months with standard chemo |
| **Pancreatic** | Clinical data | Slowed progression; potential recurrence prevention post-surgery |
| **Breast (TNBC)** | Preclinical | CSC targeting; HIF inhibition (Johns Hopkins) |
| **Medulloblastoma** | Preclinical | Hedgehog pathway inhibition; overcomes vismodegib resistance |
| **Melanoma** | Preclinical | Multiple pathway inhibition |
| **Lung** | Preclinical | Apoptosis and anti-angiogenesis |
| **Gastric** | Preclinical | Glycolysis disruption (SLC2A1, HK1, GAPDH, LDHA) |
| **Adrenocortical** | Case report | Long-term disease control |
| **Ovarian** | Preclinical | Multi-mechanism activity |
| **Thyroid** | Preclinical | Tubulin and pathway modulation |

---

## 6. Pharmacokinetics & Formulation

### Oral Bioavailability
- Standard MBZ: **5–20%** systemic bioavailability (poor absorption, extensive first-pass metabolism)
- BCS Class II drug (high permeability, low solubility)
- Enhanced absorption with **fatty foods**

### Polymorphic Forms

| Form | Solubility | Oncology Suitability |
|---|---|---|
| **Polymorph A** | Lower | Less effective |
| **Polymorph B** | Lower | Less effective |
| **Polymorph C** | 35.4 µg/mL | **Preferred** — optimal bioavailability, superior tumour penetration |

**Polymorph C** (patented by Johns Hopkins) features:
- Superior blood-brain barrier penetration (AUC brain:plasma ratio of **0.82**)
- Maintains effective brain concentrations for hours
- Efficacy boost when combined with a **P-glycoprotein inhibitor**
- Susceptible to heat/moisture-induced conversion to less effective polymorphs A/B

> [!WARNING]
> Commercial MBZ tablets may contain **mixtures of polymorphs** rather than pure polymorph C. Quality control is essential for oncology applications.

### Dosing in Cancer
- Anthelmintic dose: 100 mg once or twice daily for 3–5 days
- Cancer trials: up to **200 mg/kg/day** (Phase I glioblastoma) and **4 g/day** in other contexts
- Typically administered in 2–3 divided doses with meals

---

## 7. Safety & Toxicity Profile

### Common Side Effects (mild, transient)
- Abdominal pain, diarrhea, nausea, vomiting
- Headache, dizziness
- Gas/flatulence

### Uncommon/Rare (higher doses or prolonged use)
- Elevated liver enzymes (aminotransferases)
- Neutropenia, agranulocytosis (monitor blood counts)
- Reversible alopecia
- Rare hepatitis (caution with Gilbert's syndrome — reduced glucuronidation)

### Severe/Rare
- Stevens-Johnson syndrome / Toxic Epidermal Necrolysis (especially with concurrent metronidazole — **avoid co-administration**)
- Anaphylaxis
- Seizures (reported in infants < 1 year)

### Cancer-Specific Safety Notes
- Phase I glioblastoma trial: **well-tolerated at 200 mg/kg/day** with temozolomide
- Doses up to 4 g/day tolerated in adult cancer patients
- One small study in advanced GI cancer observed **possible disease acceleration** — requires further investigation

> [!CAUTION]
> A Phase 2a trial observed rapid disease progression (including hyperprogression) in all participating patients, with only 50% achieving target serum concentrations. Current evidence does not support MBZ as a standalone cancer treatment — it should be considered investigational and ideally used within clinical trial settings.

---

## 8. Multi-Target Metabolic Model

```
                    ┌─────────────────────────────┐
                    │      MEBENDAZOLE (MBZ)      │
                    └─────────────┬───────────────┘
                                  │
            ┌─────────────────────┼─────────────────────┐
            ▼                     ▼                     ▼
    ┌───────────────┐   ┌────────────────┐   ┌──────────────────┐
    │   STRUCTURAL  │   │   METABOLIC    │   │    SIGNALLING    │
    │   DISRUPTION  │   │   DISRUPTION   │   │    DISRUPTION    │
    └───────┬───────┘   └───────┬────────┘   └────────┬─────────┘
            │                   │                     │
    β-tubulin binding    Glycolysis ↓           MEK/ERK ↓
    Mitotic arrest       OXPHOS ↓              AKT/mTOR ↓
    GLUT trafficking ↓   HIF-1α/2α ↓          Hedgehog ↓
    Cytoskeletal         Nucleotide            Wnt/β-cat ↓
    collapse             synthesis ↓           STAT3/NF-κB ↓
            │                   │                     │
            └─────────────┬─────┘                     │
                          ▼                           │
                ┌──────────────────┐                  │
                │   TUMOUR MICRO-  │◄─────────────────┘
                │   ENVIRONMENT    │
                └────────┬─────────┘
                         │
                VEGF/Angiogenesis ↓
                M2→M1 macrophage shift
                PD-L1 modulation
                Immunogenic cell death
                         │
                         ▼
              ┌─────────────────────┐
              │  CANCER CELL DEATH  │
              │  (Apoptosis +       │
              │   Metabolic Crisis) │
              └─────────────────────┘
```

---

## 9. Combination Therapy Potential

| Combination Partner | Rationale | Evidence |
|---|---|---|
| **Temozolomide** | Standard glioblastoma chemo; MBZ adds multi-target activity | Phase I/II clinical data |
| **Lomustine** | Alternative glioblastoma chemo | Phase II — 57.9% 9-month OS in subgroup |
| **Anti-PD-1 / anti-CTLA-4** | MBZ sensitises TME to checkpoint blockade | In silico; preclinical |
| **Radiotherapy** | MBZ enhances radiosensitivity + NK cytotoxicity | Preclinical |
| **P-glycoprotein inhibitors** | Boost MBZ brain levels (polymorph C) | Preclinical |
| **Vismodegib** (Hh inhibitor) | Additive Hh pathway suppression | Preclinical |
| **Standard chemotherapy** (5-FU etc.) | MBZ overcomes chemoresistance | Colorectal clinical data |
| **Ivermectin** | Complementary anti-parasitic repurposing; ICD induction | In silico (TNBC) |

---

## 10. Key Research Groups & Institutions

- **Johns Hopkins University** (Gregory Riggins, Daniele M. Gilkes) — HIF inhibition, polymorph C development, brain cancer focus
- **NIH** — Nucleotide metabolism impairment (2026 study), multiple mechanistic reviews
- **ASCO** (American Society of Clinical Oncology) — Phase II glioblastoma trial reporting

---

## 11. Current Limitations & Open Questions

1. **Bioavailability remains a challenge** — even polymorph C has limited aqueous solubility (35.4 µg/mL). Nanoparticle formulations are under development.
2. **Clinical efficacy is not yet proven** — Phase II glioblastoma trial did not meet primary OS endpoint in the full cohort. One Phase 2a trial showed disease acceleration.
3. **Polymorph quality control** — commercial tablets may not contain pure polymorph C, undermining therapeutic potential.
4. **Optimal dosing** — cancer doses (up to 200 mg/kg/day) far exceed anthelmintic doses; long-term safety at these levels needs more data.
5. **Patient selection** — subgroup analyses suggest MBZ may work better in patients with good performance status (ECOG 0-1). Biomarkers for response prediction are needed.
6. **Combination optimisation** — which drug combinations and cancer types will benefit most is still being determined.

---

## 12. Summary

Mebendazole represents a compelling example of drug repurposing in oncology. Its ability to simultaneously disrupt cancer metabolism at multiple levels — **glycolysis, OXPHOS, HIF signalling, nucleotide synthesis, and upstream signalling pathways** — while also modifying the tumour microenvironment and immune response, makes it a uniquely multi-dimensional anti-cancer tool.

However, the transition from promising preclinical data to proven clinical efficacy remains incomplete. Current evidence supports further investigation in controlled clinical trials, particularly in combination therapy settings, rather than use as a standalone treatment.

---

## References & Sources

- Johns Hopkins University — *"[Mebendazole HIF-1α/HIF-2α inhibition in breast cancer; Polymorph C development.](https://scholar.google.com/scholar?q=Johns+Hopkins+mebendazole+HIF-1+HIF-2+inhibition+breast+cancer+polymorph+C)"*
- NIH/PubMed *"[— Multiple mechanistic studies on mitochondrial dysfunction, glycolysis, nucleotide metabolism.](https://scholar.google.com/scholar?q=mebendazole+cancer+mitochondrial+dysfunction+glycolysis+nucleotide+metabolism)"*
- ASCO Publications — *"[Phase II recurrent glioblastoma trial (MBZ + TMZ/Lomustine).](https://scholar.google.com/scholar?q=ASCO+mebendazole+Phase+II+recurrent+glioblastoma+temozolomide+lomustine)"*
- Frontiers in Oncology — *"[Comprehensive MBZ anticancer mechanism review (July 2025).](https://scholar.google.com/scholar?q=Frontiers+Oncology+mebendazole+anticancer+mechanism+review+2025)"*
- Research Journal of Pharmacy and Technology — *"[MBZ anticancer review (2025).](https://scholar.google.com/scholar?q=mebendazole+anticancer+review+Research+Journal+Pharmacy+Technology+2025)"*
- AACR Journals — *"[Apoptosis and mitochondrial membrane potential studies.](https://scholar.google.com/scholar?q=mebendazole+apoptosis+mitochondrial+membrane+potential+cancer)"*
- MDPI Cancers — *"[HIF pathway and Hedgehog signalling studies.](https://scholar.google.com/scholar?q=mebendazole+HIF+pathway+Hedgehog+signalling+cancer)"*
- ecancer — *"[Preclinical activity across multiple cancer types.](https://scholar.google.com/scholar?q=mebendazole+preclinical+anticancer+activity+multiple+cancer+types)"*
