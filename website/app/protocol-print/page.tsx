import {
  lockedMedications,
  onWaking,
  morning,
  therapySteps,
  lunch,
  nightMWF,
  nightTTS,
  injections,
  baselineTests,
  ongoingTests,
  synergies,
  hardContraindications,
  timingSeparations,
  monitoringItems,
  type Supplement,
  type Injection,
} from "@/lib/protocol-data";

/* tiny helper – strips slugs to plain text */
function Name({ item }: { item: { name: string } }) {
  return <strong>{item.name}</strong>;
}

function Badge({ item }: { item: Supplement }) {
  if (!item.badge) return null;
  const cls =
    item.badge.type === "new"
      ? "badge-new"
      : item.badge.type === "moved"
        ? "badge-move"
        : "badge-warn";
  return <span className={`badge ${cls}`}>{item.badge.label}</span>;
}

/* count research .md files dynamically would need fs, but we can derive from data */
const articleCount = 33;

export default function ProtocolPrintPage() {
  return (
    <div className="print-page">
      <style>{printStyles}</style>

      <div className="print-header">
        <h1>
          Cancer Protocol
          <small>
            Weekly Schedule · Updated March 2026 · Based on {articleCount}{" "}
            research documents
          </small>
        </h1>
        <button className="no-print print-btn" onClick={undefined}>
          🖨️ Print
        </button>
      </div>

      <hr />

      {/* LOCKED MEDICATIONS */}
      <h2>💊 Locked Medications</h2>
      <table>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Action</th>
            <th>Dose</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {lockedMedications.map((s) => (
            <tr key={s.name}>
              <td>
                <Name item={s} />
              </td>
              <td>{s.action}</td>
              <td>{s.notes.match(/[\d.]+\s*(?:mg|g)/i)?.[0] || "—"}</td>
              <td>{s.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* ON WAKING */}
      <h2>💧 On Waking — Empty Stomach (30 min before food)</h2>
      <div className="note">
        <strong>Why empty stomach:</strong> Proteolytic enzymes are digested by
        food proteins if taken with meals. Empty stomach → systemic absorption →
        whole-body fibrinolytic and anti-inflammatory effects.
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Supplement</th>
            <th>Action</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {onWaking.map((s, i) => (
            <tr key={s.name}>
              <td>{i + 1}</td>
              <td>
                <Name item={s} /> <Badge item={s} />
              </td>
              <td>{s.action}</td>
              <td>{s.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="warning">
        ⚠️ <strong>Serrapeptase &amp; Nattovena thin blood.</strong> Stop both{" "}
        <strong>2 weeks before any surgery</strong>. Avoid with warfarin/aspirin
        without medical oversight. D-serine does not affect coagulation.
      </div>

      <hr />

      {/* MORNING */}
      <h2>☀️ Morning — With Breakfast (Mon–Sat)</h2>
      <div className="note">
        Take Chlorella/Spirulina <strong>30 min before sauna</strong> to bind
        mobilised toxins.
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Supplement</th>
            <th>Action</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {morning.map((s, i) => (
            <tr key={s.name}>
              <td>{i + 1}</td>
              <td>
                <Name item={s} /> <Badge item={s} />
              </td>
              <td>{s.action}</td>
              <td>{s.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* THERAPY SEQUENCE */}
      <h2>🔬 Daily Therapy Sequence (Mon–Sat)</h2>
      <div className="note">Order matters — each step primes the next.</div>
      <div className="therapy-flow">
        {therapySteps.map((s, i) => (
          <span key={s.name} style={{ display: "contents" }}>
            {s.name}
            {i < therapySteps.length - 1 && (
              <span className="arrow"> → </span>
            )}
          </span>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Therapy</th>
            <th>Why This Order</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {therapySteps.map((s, i) => (
            <tr key={s.name}>
              <td>{i + 1}</td>
              <td>
                <strong>{s.name}</strong>
              </td>
              <td>{s.why}</td>
              <td>{s.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="warning">
        ⚠️ <strong>2–3 hour gap</strong> between sauna and night medications.
        Eye protection for Red Light. Do NOT apply Red Light over tumour without
        MB.
        <br />
        <strong>Spooky2:</strong> Phase 1 = Terrain detox (10–15 days). Phase 2
        = Cancer frequency sets. Avoid during chemo. Hydrate well.
      </div>

      <hr />

      {/* LUNCH */}
      <h2>🍽️ Lunch — Polyphenol Synergy Cluster (Mon–Sat)</h2>
      <div className="note">
        <strong>Why together:</strong> Quercetin inhibits COMT → ↑ EGCG levels.
        Vit C stabilises EGCG. Anthogenol OPCs amplify EGCG + Quercetin.
        Resveratrol + Quercetin share SIRT1/AMPK pathways. 5 polyphenols ={" "}
        <strong>multi-target metabolic siege</strong>.
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Supplement</th>
            <th>Action</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {lunch.map((s, i) => (
            <tr key={s.name}>
              <td>{i + 1}</td>
              <td>
                <Name item={s} /> <Badge item={s} />
              </td>
              <td>{s.action}</td>
              <td>{s.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* NIGHT */}
      <h2>🌙 Night — Take with Fat</h2>
      <div className="two-col">
        <div className="section-night">
          <h3>Mon / Wed / Fri</h3>
          <NightTable items={nightMWF} />
        </div>
        <div className="section-night">
          <h3>Tue / Thu / Sat</h3>
          <NightTable items={nightTTS} />
        </div>
      </div>
      <div className="note">
        Sunday is a rest day — no supplements scheduled.
      </div>

      <hr />

      {/* INJECTIONS */}
      <h2>💉 Injections</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Injection</th>
            <th>Action</th>
            <th>Dose</th>
            <th>Frequency</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {injections.map((inj, i) => (
            <tr key={inj.name}>
              <td>{i + 1}</td>
              <td>
                <strong>{inj.name}</strong>
              </td>
              <td>{inj.action}</td>
              <td>{inj.dose}</td>
              <td>{inj.frequency}</td>
              <td>{inj.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* BLOOD TESTS */}
      <h2>🩸 Blood Test Schedule</h2>
      <h3>Baseline (One-Time, Before Starting)</h3>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          {baselineTests.map((t) => (
            <tr key={t.test}>
              <td>
                <strong>{t.test}</strong>
              </td>
              <td>{t.why}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Every 6 Weeks (Ongoing)</h3>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>What You&apos;re Watching</th>
          </tr>
        </thead>
        <tbody>
          {ongoingTests.map((t) => (
            <tr key={t.test}>
              <td>
                <strong>{t.test}</strong>
              </td>
              <td>{t.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="note">
        <strong>The two key numbers:</strong> <strong>CEA</strong> (tumour
        marker) and <strong>CRP</strong> (inflammation). If both are trending
        down, the protocol is working.
      </div>

      <hr />

      {/* SYNERGY MAP */}
      <h2>🔗 Synergy Map</h2>
      <table>
        <thead>
          <tr>
            <th>Synergy</th>
            <th>Mechanism</th>
            <th>Timing</th>
          </tr>
        </thead>
        <tbody>
          {synergies.map((s) => (
            <tr key={s.pair}>
              <td>
                <strong>{s.pair}</strong>
              </td>
              <td>{s.mechanism}</td>
              <td>{s.timing}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* CONTRAINDICATIONS */}
      <h2>❌ Hard Contraindications</h2>
      <table>
        <thead>
          <tr>
            <th>Interaction</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {hardContraindications.map((c) => (
            <tr key={c.pair}>
              <td>
                <strong>{c.pair}</strong>
              </td>
              <td>{c.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TIMING SEPARATIONS */}
      <h2>⚠️ Timing Separations</h2>
      <table>
        <thead>
          <tr>
            <th>Pair</th>
            <th>Rule</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          {timingSeparations.map((t) => (
            <tr key={t.pair}>
              <td>
                <strong>{t.pair}</strong>
              </td>
              <td>{t.rule}</td>
              <td>{t.why}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MONITORING */}
      <h2>⚠️ Monitoring Required</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Monitor</th>
          </tr>
        </thead>
        <tbody>
          {monitoringItems.map((m) => (
            <tr key={m.item}>
              <td>
                <strong>{m.item}</strong>
              </td>
              <td>{m.monitor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer-line">
        Protocol compiled March 2026 · Based on {articleCount} research
        documents · For medical professional review
      </div>

      {/* client-side print trigger */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.querySelector('.print-btn')?.addEventListener('click', function() { window.print(); });`,
        }}
      />
    </div>
  );
}

function NightTable({ items }: { items: Supplement[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Supplement</th>
          <th>Action</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {items.map((s, i) => (
          <tr key={s.name}>
            <td>{i + 1}</td>
            <td>
              <Name item={s} /> <Badge item={s} />
            </td>
            <td>{s.action}</td>
            <td>{s.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ─────────────────── Print-Friendly Styles ─────────────────── */
const printStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .print-page {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 11px;
    line-height: 1.45;
    color: #1a1a2e;
    background: #fff;
    padding: 20px 28px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .print-page h1 {
    font-size: 20px;
    font-weight: 700;
    color: #0f0f23;
    margin-bottom: 2px;
  }

  .print-page h1 small {
    font-size: 11px;
    font-weight: 400;
    color: #666;
    display: block;
    margin-top: 2px;
  }

  .print-page h2 {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    background: #1a1a2e;
    padding: 5px 10px;
    border-radius: 4px;
    margin: 14px 0 6px 0;
    page-break-after: avoid;
  }

  .print-page h3 {
    font-size: 11px;
    font-weight: 600;
    color: #4a3d8f;
    margin: 8px 0 4px 0;
    page-break-after: avoid;
  }

  .print-page hr { border: none; border-top: 1px solid #ddd; margin: 10px 0; }

  .print-page table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 8px;
    font-size: 10.5px;
    page-break-inside: avoid;
  }

  .print-page th {
    background: #f0eef8;
    color: #2d2a5e;
    font-weight: 600;
    text-align: left;
    padding: 4px 6px;
    border: 1px solid #d5d0ec;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .print-page td {
    padding: 3px 6px;
    border: 1px solid #e0e0e0;
    vertical-align: top;
  }

  .print-page tr:nth-child(even) td { background: #fafafa; }

  .print-page .note {
    background: #f8f7ff;
    border-left: 3px solid #6c5ce7;
    padding: 5px 8px;
    margin: 5px 0 8px 0;
    font-size: 10px;
    color: #444;
    border-radius: 0 4px 4px 0;
  }

  .print-page .warning {
    background: #fff8f0;
    border-left: 3px solid #e67e22;
    padding: 5px 8px;
    margin: 5px 0 8px 0;
    font-size: 10px;
    color: #7a4a0a;
    border-radius: 0 4px 4px 0;
  }

  .print-page .therapy-flow {
    background: #1a1a2e;
    color: #e0e0ff;
    padding: 8px 12px;
    border-radius: 6px;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 11px;
    text-align: center;
    margin: 6px 0;
    letter-spacing: 0.3px;
  }

  .print-page .therapy-flow .arrow { color: #6c5ce7; font-weight: 700; }

  .print-page .badge {
    display: inline-block;
    color: #fff;
    font-size: 8px;
    font-weight: 600;
    padding: 1px 5px;
    border-radius: 3px;
    vertical-align: middle;
    margin-left: 4px;
  }
  .print-page .badge-new { background: #e74c3c; }
  .print-page .badge-move { background: #00b894; }
  .print-page .badge-warn { background: #e67e22; }

  .print-page strong { font-weight: 600; }

  .print-page .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .print-page .section-night { page-break-inside: avoid; }

  .print-page .footer-line {
    text-align: center;
    margin-top: 16px;
    color: #999;
    font-size: 9px;
  }

  .print-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .print-btn {
    background: #1a1a2e;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 4px;
    font-family: inherit;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    margin-top: 4px;
  }

  @media (max-width: 640px) {
    .print-page .two-col { grid-template-columns: 1fr; }
  }

  @media print {
    .print-page { padding: 10px 15px; font-size: 10px; }
    .print-page h2 { font-size: 11px; padding: 4px 8px; }
    .print-page table { font-size: 9.5px; }
    .print-page th { font-size: 9px; padding: 3px 5px; }
    .print-page td { padding: 2px 5px; }
    .print-page .note, .print-page .warning { font-size: 9px; padding: 3px 6px; }
    .no-print { display: none !important; }
    @page { margin: 12mm 10mm; }
  }
`;
