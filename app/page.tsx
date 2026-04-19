export default function Page() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "48px 24px",
        maxWidth: "960px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>DNF KIDS</h1>

      <p style={{ fontSize: "20px", marginBottom: "24px" }}>
        Protecting children through advocacy, support, and trusted referral.
      </p>

      <div
        style={{
          background: "#111827",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "32px",
        }}
      >
        <strong>Important:</strong> DNF KIDS is not a law enforcement agency,
        does not conduct criminal investigations, and does not determine guilt
        or innocence. If a child is in immediate danger, call 911.
      </div>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>About</h2>
        <p>
          DNF KIDS is a nonprofit initiative focused on child protection through
          advocacy, victim support, prevention education, and disciplined
          referral of information to the proper authorities.
        </p>
      </section>

      <section style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>What We Do</h2>
        <ul>
          <li>Victim advocacy and support</li>
          <li>Structured referral of information</li>
          <li>Prevention and education</li>
          <li>Non-investigative agency support</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Contact</h2>
        <p>Email: info@dnfkids.com</p>
      </section>
    </main>
  );
}
