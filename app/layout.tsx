import Image from "next/image";
export const metadata = {
  title: "DNF KIDS",
  description: "Protect Children. Zero Exceptions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#0b1220", color: "white" }}>
        
        {/* NAVBAR */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "#0f172a",
          borderBottom: "1px solid #1e293b"
        }}>
     <img
  src="/Logo.png"
  alt="DNF Kids Logo"
  style={{ height: "50px" }}
/>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/" style={{ color: "white" }}>Home</a>
            <a href="/about" style={{ color: "white" }}>About</a>
            <a href="/report" style={{ color: "white" }}>Report</a>
            <a href="/donate" style={{ color: "white" }}>Donate</a>
            <a href="/contact" style={{ color: "white" }}>Contact</a>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer style={{
          marginTop: "60px",
          padding: "40px",
          background: "#020617",
          borderTop: "1px solid #1e293b"
        }}>
          <p>DNF KIDS — Protect. Support. Refer.</p>
          <p style={{ fontSize: "12px", opacity: 0.6 }}>
            Not a law enforcement agency. If a child is in danger, call 911.
          </p>
        </footer>

      </body>
    </html>
  );
}
