import Link from "next/link";
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

function SupplementCard({
  item,
  index,
}: {
  item: Supplement;
  index: number;
}) {
  const nameContent =
    item.slugs && item.slugs.length > 0 ? (
      <Link href={`/research/${item.slugs[0]}`}>{item.name}</Link>
    ) : (
      item.name
    );

  return (
    <div className="supplement-card" id={`s-${item.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
      <div className="card-number">{index + 1}</div>
      <div className="card-body">
        <div className="card-name">
          {nameContent}
          {item.badge && (
            <span className={`badge badge-${item.badge.type}`} style={{ marginLeft: 8 }}>
              {item.badge.label}
            </span>
          )}
        </div>
        <div className="card-action">{item.action}</div>
        {item.notes && <div className="card-notes">{item.notes}</div>}
        {item.slugs && item.slugs.length > 0 && (
          <div className="card-research">
            {item.slugs.length === 1 ? (
              <Link href={`/research/${item.slugs[0]}`}>📄 Research</Link>
            ) : (
              <>
                📄{" "}
                {item.slugs.map((slug, i) => (
                  <span key={slug}>
                    {i > 0 && ", "}
                    <Link href={`/research/${slug}`}>
                      Research {i + 1}
                    </Link>
                  </span>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function InjectionCard({ item }: { item: Injection }) {
  const nameContent =
    item.slugs && item.slugs.length > 0 ? (
      <Link href={`/research/${item.slugs[0]}`}>{item.name}</Link>
    ) : (
      item.name
    );

  return (
    <div className="supplement-card">
      <div className="card-body" style={{ gridColumn: "1 / -1" }}>
        <div className="card-name">{nameContent}</div>
        <div className="card-action">{item.action}</div>
        <div className="card-notes">
          <strong>Dose:</strong> {item.dose} · <strong>Frequency:</strong>{" "}
          {item.frequency}
          {item.notes && <> · {item.notes}</>}
        </div>
        {item.slugs && item.slugs.length > 1 && (
          <div className="card-notes" style={{ marginTop: 4 }}>
            📖{" "}
            {item.slugs.map((slug, i) => (
              <span key={slug}>
                {i > 0 && ", "}
                <Link href={`/research/${slug}`} style={{ fontSize: 12 }}>
                  Research {i + 1}
                </Link>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProtocolPage() {
  const flowSteps = [
    "MB with breakfast",
    "Red Light",
    "Resistance Training",
    "HBOT",
    "Sauna",
    "Shower",
    "Spooky2",
  ];

  return (
    <main className="site-container">
      <section className="hero">
        <h1>Cancer Protocol</h1>
        <p className="subtitle">
          Weekly Schedule · Updated March 2026 · Based on 33 research documents
        </p>
        <a
          href="/protocol-print.html?print=1"
          target="_blank"
          rel="noopener noreferrer"
          className="download-pdf-btn"
        >
          🖨️ Download PDF
        </a>
      </section>

      {/* LOCKED MEDICATIONS */}
      <section className="protocol-section" id="locked-medications">
        <div className="section-header">
          <span className="emoji">💊</span>
          <h2>Locked Medications</h2>
        </div>
        {lockedMedications.map((item, i) => (
          <SupplementCard key={item.name} item={item} index={i} />
        ))}
      </section>

      {/* ON WAKING */}
      <section className="protocol-section" id="on-waking">
        <div className="section-header">
          <span className="emoji">💧</span>
          <h2>On Waking — Empty Stomach</h2>
        </div>
        <div className="callout callout-note">
          <strong>Why empty stomach:</strong> Proteolytic enzymes are digested by
          food proteins if taken with meals. Empty stomach → systemic absorption →
          whole-body fibrinolytic and anti-inflammatory effects.
        </div>
        {onWaking.map((item, i) => (
          <SupplementCard key={item.name} item={item} index={i} />
        ))}
        <div className="callout callout-warning">
          ⚠️ <strong>Serrapeptase &amp; Nattovena thin blood.</strong> Stop both{" "}
          <strong>2 weeks before any surgery</strong>. Avoid with
          warfarin/aspirin without medical oversight. D-serine does not affect
          coagulation.
        </div>
      </section>

      {/* MORNING */}
      <section className="protocol-section" id="morning">
        <div className="section-header">
          <span className="emoji">☀️</span>
          <h2>Morning — With Breakfast (Mon–Sat)</h2>
        </div>
        <div className="callout callout-note">
          Take Chlorella/Spirulina <strong>30 min before sauna</strong> to bind
          mobilised toxins.
        </div>
        {morning.map((item, i) => (
          <SupplementCard key={item.name} item={item} index={i} />
        ))}
      </section>

      {/* THERAPY SEQUENCE */}
      <section className="protocol-section" id="therapy-sequence">
        <div className="section-header">
          <span className="emoji">🔬</span>
          <h2>Daily Therapy Sequence (Mon–Sat)</h2>
        </div>
        <div className="callout callout-note">
          Order matters — each step primes the next.
        </div>

        <div className="therapy-flow">
          {flowSteps.map((step, i) => (
            <span key={step} style={{ display: "contents" }}>
              <span className="flow-step">{step}</span>
              {i < flowSteps.length - 1 && <span className="flow-arrow">→</span>}
            </span>
          ))}
          <div className="flow-label">
            (2–3×/wk) · · · · · · · · · · (5×/wk) · · · · · · · · · · · · · · ·
            · (daily)
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Therapy</th>
              <th>Why This Order</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {therapySteps.map((step, i) => (
              <tr key={step.name}>
                <td>{i + 1}</td>
                <td>
                  <strong>
                    {step.slugs ? (
                      <Link href={`/research/${step.slugs[0]}`}>{step.name}</Link>
                    ) : (
                      step.name
                    )}
                  </strong>
                </td>
                <td>{step.why}</td>
                <td>{step.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="callout callout-warning">
          ⚠️ <strong>2–3 hour gap</strong> between sauna and night medications.
          Eye protection for Red Light. Do NOT apply Red Light over tumour without
          MB.
          <br />
          <strong>Spooky2:</strong> Phase 1 = Terrain detox (10–15 days). Phase 2
          = Cancer frequency sets. Avoid during chemo. Hydrate well.
        </div>
      </section>

      {/* LUNCH */}
      <section className="protocol-section" id="lunch">
        <div className="section-header">
          <span className="emoji">🍽️</span>
          <h2>Lunch — Polyphenol Synergy Cluster (Mon–Sat)</h2>
        </div>
        <div className="callout callout-note">
          <strong>Why together:</strong> Quercetin inhibits COMT → ↑ EGCG levels.
          Vit C stabilises EGCG. Anthogenol OPCs amplify EGCG + Quercetin.
          Resveratrol + Quercetin share SIRT1/AMPK pathways. 5 polyphenols ={" "}
          <strong>multi-target metabolic siege</strong>.
        </div>
        {lunch.map((item, i) => (
          <SupplementCard key={item.name} item={item} index={i} />
        ))}
      </section>

      {/* NIGHT */}
      <section className="protocol-section" id="night">
        <div className="section-header">
          <span className="emoji">🌙</span>
          <h2>Night — Take with Fat</h2>
        </div>
        <div className="two-col">
          <div>
            <div className="col-header">Mon / Wed / Fri</div>
            {nightMWF.map((item, i) => (
              <SupplementCard key={`mwf-${item.name}`} item={item} index={i} />
            ))}
          </div>
          <div>
            <div className="col-header">Tue / Thu / Sat</div>
            {nightTTS.map((item, i) => (
              <SupplementCard key={`tts-${item.name}`} item={item} index={i} />
            ))}
          </div>
        </div>
        <div className="callout callout-note" style={{ marginTop: 16 }}>
          Sunday is a rest day — no supplements scheduled.
        </div>
      </section>

      {/* INJECTIONS */}
      <section className="protocol-section" id="injections">
        <div className="section-header">
          <span className="emoji">💉</span>
          <h2>Injections</h2>
        </div>
        {injections.map((item) => (
          <InjectionCard key={item.name} item={item} />
        ))}
      </section>

      {/* BLOOD TEST SCHEDULE */}
      <section className="protocol-section" id="blood-tests">
        <div className="section-header">
          <span className="emoji">🩸</span>
          <h2>Blood Test Schedule</h2>
        </div>

        <h3 style={{ color: "var(--accent-light)", marginBottom: 12, fontSize: 15 }}>
          Baseline (One-Time, Before Starting)
        </h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            {baselineTests.map((t) => (
              <tr key={t.test}>
                <td><strong>{t.test}</strong></td>
                <td>{t.why}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ color: "var(--accent-light)", margin: "24px 0 12px", fontSize: 15 }}>
          Every 6 Weeks (Ongoing)
        </h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>What You&apos;re Watching</th>
            </tr>
          </thead>
          <tbody>
            {ongoingTests.map((t) => (
              <tr key={t.test}>
                <td><strong>{t.test}</strong></td>
                <td>{t.why}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="callout callout-note">
          <strong>The two key numbers:</strong> <strong>CEA</strong> (tumour
          marker) and <strong>CRP</strong> (inflammation). If both are trending
          down, the protocol is working.
        </div>
      </section>

      {/* SYNERGY MAP */}
      <section className="protocol-section" id="synergy-map">
        <div className="section-header">
          <span className="emoji">🔗</span>
          <h2>Synergy Map</h2>
        </div>
        <table className="data-table">
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
                  <strong>
                    {s.slugs && s.slugs.length > 0 ? (
                      <Link href={`/research/${s.slugs[0]}`}>{s.pair}</Link>
                    ) : (
                      s.pair
                    )}
                  </strong>
                  {s.slugs && s.slugs.length > 0 && (
                    <div style={{ marginTop: 4, fontSize: 12 }}>
                      📄{" "}
                      {s.slugs.map((slug, i) => (
                        <span key={slug}>
                          {i > 0 && ", "}
                          <Link href={`/research/${slug}`}>
                            Research {i + 1}
                          </Link>
                        </span>
                      ))}
                    </div>
                  )}
                </td>
                <td>{s.mechanism}</td>
                <td>{s.timing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CONTRAINDICATIONS */}
      <section className="protocol-section" id="contraindications">
        <div className="section-header">
          <span className="emoji">❌</span>
          <h2>Hard Contraindications</h2>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Interaction</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {hardContraindications.map((c) => (
              <tr key={c.pair}>
                <td><strong>{c.pair}</strong></td>
                <td>{c.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* TIMING SEPARATIONS */}
      <section className="protocol-section" id="timing">
        <div className="section-header">
          <span className="emoji">⚠️</span>
          <h2>Timing Separations</h2>
        </div>
        <table className="data-table">
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
                <td><strong>{t.pair}</strong></td>
                <td>{t.rule}</td>
                <td>{t.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* MONITORING */}
      <section className="protocol-section" id="monitoring">
        <div className="section-header">
          <span className="emoji">⚠️</span>
          <h2>Monitoring Required</h2>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Monitor</th>
            </tr>
          </thead>
          <tbody>
            {monitoringItems.map((m) => (
              <tr key={m.item}>
                <td><strong>{m.item}</strong></td>
                <td>{m.monitor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
