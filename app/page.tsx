export default function DNFKidsWebsite() {
  const nav = [
    { label: 'About', href: '#about' },
    { label: 'What We Do', href: '#services' },
    { label: 'Resources', href: '#resources' },
    { label: 'Report Information', href: '#report' },
    { label: 'Support', href: '#support' },
    { label: 'Contact', href: '#contact' },
  ];

  const cards = [
    {
      title: 'Victim Advocacy',
      text: 'Support, guidance, and resource navigation for children and families impacted by sexual abuse and exploitation.',
    },
    {
      title: 'Structured Referral',
      text: 'Professionally organized intake and referral of information to the appropriate authorities and child-protection channels.',
    },
    {
      title: 'Prevention & Education',
      text: 'Clear public education aimed at prevention, awareness, and the lawful protection of children.',
    },
    {
      title: 'Agency Support',
      text: 'Non-investigative support that respects active cases and preserves the authority of law enforcement and prosecutors.',
    },
  ];

  const principles = [
    'Child-centered and trauma-informed',
    'Disciplined, lawful, and non-investigative',
    'Confidential and referral-focused',
    'Built to support, not interfere',
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-sm">
              DNF
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">DNF KIDS</div>
              <div className="text-xs text-slate-500">Protect. Support. Refer.</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.08),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">
                Child Advocacy and Structured Support
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-7xl">
                Protecting children through advocacy, support, and trusted referral.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                DNF KIDS is a nonprofit initiative focused on child protection through advocacy, victim support, prevention education, and disciplined referral of information to the appropriate authorities.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#report" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
                  Share Information
                </a>
                <a href="#support" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5">
                  Support the Mission
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {principles.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="rounded-[1.5rem] bg-slate-950 p-7 text-white">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-300">Important Notice</div>
                  <p className="mt-4 text-base leading-7 text-slate-100">
                    DNF KIDS is not a law enforcement agency, does not conduct criminal investigations, and does not determine guilt or innocence.
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    If a child is in immediate danger, call 911.
                  </p>
                </div>
                <div className="mt-6 rounded-[1.5rem] bg-slate-100 p-6">
                  <div className="text-sm font-semibold text-slate-900">Mission</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    To strengthen child protection through advocacy, victim support, public education, and lawful, non-investigative coordination that helps information reach the proper authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About DNF KIDS</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Built to protect children without compromising investigations.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                DNF KIDS is designed as a structured nonprofit response for child advocacy. The organization is intended to support children and families, promote prevention, and help route information appropriately and responsibly.
              </p>
              <p>
                The model is referral-focused and non-investigative. That means the organization supports child-protection efforts without acting as law enforcement, without conducting surveillance, and without interfering with active cases.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">What We Do</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Focused services with clear legal boundaries.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {cards.map((card) => (
                <div key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Resources</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Support, guidance, and next steps.</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                This section can be expanded with jurisdiction-specific hotlines, victim-support services, reporting guidance, and educational materials for families, caregivers, and community members.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-900 p-7 text-white shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Emergency</div>
              <p className="mt-4 text-base leading-8 text-slate-100">If a child is in immediate danger, contact 911 or the appropriate emergency authorities immediately.</p>
            </div>
          </div>
        </section>

        <section id="report" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Report Information</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Share information through a disciplined, structured intake process.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Use this section to gather basic facts, urgency, and consent to share information with the proper authorities. The process should document, not investigate.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl shadow-black/20">
              <div className="grid gap-5 md:grid-cols-2">
                <input className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0" placeholder="Name (optional)" />
                <input className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0" placeholder="Email or phone (optional)" />
                <input className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 md:col-span-2" placeholder="Location or agency involved (if known)" />
                <textarea className="min-h-[140px] rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 md:col-span-2" placeholder="Summary of concern" />
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-slate-100 p-4 text-sm text-slate-600">
                <input type="checkbox" className="mt-1" />
                <span>I understand DNF KIDS is not a law enforcement agency and may share submitted information with the appropriate authorities.</span>
              </div>
              <button className="mt-6 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white">Submit</button>
            </div>
          </div>
        </section>

        <section id="support" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Support the Mission</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">Help strengthen lawful child advocacy and protection efforts.</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  This section can be connected to donation tools, sponsorship information, or volunteer interest once all solicitation and compliance requirements are in place.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-7">
                <div className="text-sm font-semibold text-slate-900">Suggested launch actions</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>Activate charitable registration before public fundraising.</li>
                  <li>Publish the organization disclaimer prominently.</li>
                  <li>Use a secure intake and referral workflow.</li>
                  <li>Maintain board oversight and policy discipline.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Ready for launch on DNFKIDS.com</h2>
            </div>
            <div className="text-sm leading-7 text-slate-600">
              <div>Email: info@dnfkids.com</div>
              <div>Website: DNFKIDS.com</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
