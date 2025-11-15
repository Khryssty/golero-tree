import React from "react";
import * as d3 from "d3"; 
import * as f3 from "family-chart"; 
import "family-chart/styles/family-chart.css";
import familyData from "../data/familyData.json";

export default class FamilyTree extends React.Component {
  cont = React.createRef();
  


  componentDidMount() {
    if (!this.cont.current) return;

    // Instead of fetch
    create(familyData);

    function create(data) {

      
      const f3Chart = f3
        .createChart("#FamilyChart", data)
        .setTransitionTime(1000)
        .setCardXSpacing(250)
        .setCardYSpacing(150);
        
    

      f3Chart
        .setCardHtml()
        .setCardDisplay([["firstName", "lastName"]])
        .setCardDim({ h: 70 });

      f3Chart.updateMainId("1"); // Periano



      f3Chart.updateTree({ initial: true });

      // with person_id this function will update the tree
      function updateTreeWithNewMainPerson(
        person_id,
        animation_initial = true
      ) {
        f3Chart.updateMainId(person_id);
        f3Chart.updateTree({ initial: animation_initial });
      }

      // random person

      d3.select(document.querySelector("#FamilyChart"))
        .append("button")
        .text("Random Person")
        .attr(
          "style",
          "position: absolute; top: 10px; right: 10px; z-index: 1000;"
        )
        .on("click", () => {
          const random_person = data[Math.floor(Math.random() * data.length)];
          const person_id = random_person["id"];
          updateTreeWithNewMainPerson(person_id, false);
        });

      // setup search dropdown
      // this is basic showcase, please use some autocomplete component and style it as you want

      const all_select_options = [];
      data.forEach((d) => {
        if (all_select_options.find((d0) => d0.value === d["id"])) return;
        all_select_options.push({
          label: `${d.data["firstName"]} ${d.data["lastName"]}`,
          value: d["id"],
        });
      });

      const search_cont = d3
        .select(document.querySelector("#FamilyChart"))
        .append("div")
        .attr(
          "style",
          "position: absolute; top: 10px; left: 10px; width: 150px; z-index: 1000;"
        )
        .on("focusout", () => {
          setTimeout(() => {
            if (!search_cont.node().contains(document.activeElement)) {
              updateDropdown([]);
            }
          }, 200);
        });

      const search_input = search_cont
        .append("input")
        .style("width", "100%")
        .style("padding", "6px")
        .style("border-radius", "8px")
        .style("border", "1px solid #444")
        .style("background", "#222222")
        .style("color", "#fff")
        .attr("type", "text")
        .attr("placeholder", "Search")
        .on("focus", activateDropdown)
        .on("input", activateDropdown);

      const dropdown = search_cont
        .append("div")
        .attr(
          "style",
          "overflow-y: auto; max-height: 300px; background-color: #beb0b0ff;"
        )
        .attr("tabindex", "0")
        .on("wheel", (e) => {
          e.stopPropagation();
        });

      function activateDropdown() {
        const search_input_value = search_input.property("value");
        const filtered_options = all_select_options.filter((d) =>
          d.label.toLowerCase().includes(search_input_value.toLowerCase())
        );
        updateDropdown(filtered_options);
      }

      function updateDropdown(filtered_options) {
        dropdown
          .selectAll("div")
          .data(filtered_options)
          .join("div")
          .attr(
            "style",
            "padding: 5px;cursor: pointer;border-bottom: .5px solid currentColor;"
          )
          .on("click", (e, d) => {
            updateTreeWithNewMainPerson(d.value, true);
          })
          .text((d) => d.label);
      }
    }
  }

  render() {
    return (
      <div
        className="f3"
        id="FamilyChart"
        ref={this.cont}
        style={{
          width: "100%",
          height: "900px",
          margin: "auto",
          backgroundColor: "rgb(33,33,33)",
          color: "#171616ff",
        }}
        
      >
        

      </div>
    );
  }
}
