import React, { useEffect } from "react";
import * as f3 from "family-chart";
import "family-chart/styles/family-chart.css";

export default function FamilyChart({ data, chartRef }) {
  useEffect(() => {
    if (!chartRef || !chartRef.current) return;

    const container = chartRef.current;

    // Remove previous chart inside container
    const old = container.querySelector(".f3-tree-container");
    if (old) old.remove();

    // ⭐ IMPORTANT: Force mount using selector string so chart renders in the correct container
    const chart = f3
      .createChart(`#${container.id}`, data)
      .setTransitionTime(800)
      .setCardXSpacing(250)
      .setCardYSpacing(150);

    chart
      .setCardHtml()
      .setCardDisplay([["firstName", "lastName", "birthday"]])
      .setCardDim({ h: 70 });

    chart.updateMainId("1");
    chart.updateTree({ initial: true });

    // Expose chart instance
    chartRef.current.f3Chart = chart;

    // ⭐ Get tooltip element
    const tooltip = document.getElementById("FamilyTooltip");
    if (!tooltip) {
      console.warn("Tooltip element #FamilyTooltip not found.");
      return;
    }

    // Tooltip behavior
    const showTooltip = (event, person) => {
      tooltip.innerHTML = `
        <strong>${person.data.firstName} ${person.data.lastName}</strong><br/>
        DOB: ${person.data.birthday || "N/A"}<br/>
      `;
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
    };

    const moveTooltip = (event) => {
      tooltip.style.top = event.clientY + 12 + "px";
      tooltip.style.left = event.clientX + 12 + "px";
    };

    const hideTooltip = () => {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
    };

    // ⭐ Attach hover events to dynamically rendered cards
    const attachHoverEvents = () => {
      console.log("ATTACH HOVER EVENTS RUNNING!");

      // Correct selector for cards
      const cards = container.querySelectorAll(".card-label");
      console.log("Found cards:", cards.length, cards);

      cards.forEach((card) => {
        // Find person ID from closest node group
        const parent = card.closest("[data-id]");
        if (!parent) {
          console.log("No parent [data-id] for card:", card);
          return;
        }

        const pid = parent.getAttribute("data-id");
        const person = data.find((p) => p.id === pid);
        if (!person) {
          console.log("No matching person for id:", pid);
          return;
        }

        // Hover events
        card.addEventListener("mouseenter", (e) => {
          console.log("HOVER:", person.data.firstName);
          card.classList.add("hover-highlight");
          showTooltip(e, person);
        });

        card.addEventListener("mousemove", moveTooltip);

        card.addEventListener("mouseleave", () => {
          card.classList.remove("hover-highlight");
          hideTooltip();
        });
      });
    };

    // ⭐ Ensure F3 finished rendering before attaching events
    let attempts = 0;
    const interval = setInterval(() => {
      console.log("Checking for cards (attempt):", attempts);

      const cards = container.querySelectorAll(".card-label");

      if (cards.length > 0 || attempts > 20) {
        clearInterval(interval);
        attachHoverEvents();
      }

      attempts++;
    }, 200);

    return () => clearInterval(interval);

  }, [data, chartRef]);

  return null;
}
