import React, { useEffect } from "react";
import * as f3 from "family-chart";
import "family-chart/styles/family-chart.css";

export default function FamilyChart({ data, chartRef }) {
  useEffect(() => {
    if (!chartRef || !chartRef.current) {
      console.log("FamilyChart effect: chartRef not ready", chartRef);
      return;
    }

    const container = chartRef.current;
    console.log("FamilyChart effect: running, container =", container);

    // Remove ONLY previous f3 content if any
    const old = container.querySelector(".f3-tree-container");
    if (old) {
      console.log("FamilyChart effect: removing old chart");
      old.remove();
    }

    // IMPORTANT: use the DOM element, not "#FamilyChart" selector
    const chart = f3
      .createChart(container, data)
      .setTransitionTime(800)
      .setCardXSpacing(250)
      .setCardYSpacing(150);

    chart
      .setCardHtml()
      .setCardDisplay([["firstName", "lastName", "birthday"]])
      .setCardDim({ h: 70 });

    chart.updateMainId("1");
    chart.updateTree({ initial: true });

    // Expose chart instance for SearchBox & Random button
    chartRef.current.f3Chart = chart;
    console.log("FamilyChart effect: chart created and attached");

  }, [data, chartRef]);

  return null;
}
