import Overview from "./Overview.jsx";
import Legend from "./Legend.jsx";

export default function TopPanel() {
  return (
    <section
      className="w-full gap-4"   // Tailwind still fine for spacing
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "1rem",      // 16px gap
      }}
    >
      <Overview />
      <Legend />
    </section>
  );
}
