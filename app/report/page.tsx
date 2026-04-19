export default function Report() {
  return (
    <main style={{ padding: "60px" }}>
      <h1>Report Information</h1>

      <p>If a child is in immediate danger, call 911.</p>

      <form style={{ marginTop: "30px", maxWidth: "400px" }}>
        <input placeholder="Name (optional)" style={{ width: "100%", marginBottom: "10px" }} />
        <input placeholder="Contact (optional)" style={{ width: "100%", marginBottom: "10px" }} />
        <textarea placeholder="Details" style={{ width: "100%", height: "120px" }} />

        <button style={{ marginTop: "15px" }}>Submit</button>
      </form>
    </main>
  );
}
