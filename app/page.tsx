export default function Home() {
  return (
    <main style={{ padding: "60px" }}>

      {/* HERO SECTION */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px"
      }}>

        {/* LEFT SIDE (TEXT) */}
        <div style={{ maxWidth: "600px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Protect Children.<br />Zero Exceptions.
          </h1>

          <p style={{ fontSize: "18px", opacity: 0.8 }}>
            DNF KIDS supports child protection through advocacy,
            support, and by assisting autorities with locating and prosecution of child predators.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a href="/report">
              <button style={{ marginRight: "15px" }}>Report Abuse</button>
            </a>

            <a href="/donate">
              <button>Donate</button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (BIG LOGO) */}
        <img
          src="/Logo.png"
          alt="DNF Kids Logo"
          style={{
            width: "350px",
            maxWidth: "100%",
            borderRadius: "10px"
          }}
        />

      </div>

    </main>
  );
}
