export default function Home() {
  return (
    <main style={{ padding: "60px" }}>
      <h1 style={{ fontSize: "48px" }}>
        Protect Children.<br />Zero Exceptions.
      </h1>

      <p style={{ marginTop: "20px", fontSize: "18px", maxWidth: "600px" }}>
        DNF KIDS supports child protection through advocacy, support,
        and structured referral to appropriate authorities.
      </p>

      <div style={{ marginTop: "30px" }}>
        <a href="/report">
          <button style={{ marginRight: "15px" }}>Report Abuse</button>
        </a>

        <a href="/donate">
          <button>Donate</button>
        </a>
      </div>
    </main>
  );
}
