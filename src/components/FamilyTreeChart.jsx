import { useEffect } from "react";
import * as f3 from "family-chart";
import familyData from "../data/familyData.json";

export default function FamilyTreeChart({ onSelectPerson }) {
  useEffect(() => {
    const containerId = "#family-chart";
    const el = document.querySelector(containerId);

    // Cleanup any previous SVG if component remounts
    if (el) {
      el.innerHTML = "";
    }

    // Create chart
    const chart = f3.createChart(containerId, familyData);

    const card = chart
      .setCardHtml()
      .setCardDisplay([["first name", "last name"], ["birthday"]]);

    // Click handler on cards
    card.setOnCardClick((e, d) => {
      // d is TreeDatum; d.data should be the original node we provided
      if (d && d.data) {
        onSelectPerson(d.data);
      }
    });

    chart.editTree().setFields(["first name", "last name", "birthday"]);
    chart.updateTree({ initial: true });

    return () => {
      const cleanupEl = document.querySelector(containerId);
      if (cleanupEl) cleanupEl.innerHTML = "";
      onSelectPerson(null);
    };
  }, [onSelectPerson]);

  return (
    <div
      id="family-chart"
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
