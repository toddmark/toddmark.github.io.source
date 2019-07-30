import * as d3 from "d3";
import { ROW, COLUMNS, RECTSIZE } from "./constant";
const node = document.createElement("div");

const defaultColor = "#eee";
const width = COLUMNS * RECTSIZE;
const height = ROW * RECTSIZE;
const x = width / RECTSIZE;
const y = height / RECTSIZE;

let isPress = false;

// create rect
function initStage() {
  d3.select(node)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#000")
    .selectAll("rect")
    .data(d3.range(x * y))
    .enter()
    .append("rect")
    .attr("transform", translate)
    .attr("width", RECTSIZE)
    .attr("height", RECTSIZE)
    .style("stroke", "#eff")
    .style("fill", defaultColor);
}

function update(type) {
  if (type === "reset") {
    d3.select("svg")
      .selectAll("rect")
      .data(d3.range(x * y))
      .attr("transform", translate)
      .attr("width", RECTSIZE)
      .attr("height", RECTSIZE)
      .attr("data-choosed", false)
      .style("stroke", "#eff")
      .style("fill", defaultColor);
  }
}

initStage();

const allGrids = d3
  .select(node)
  .select("svg")
  .selectAll("rect");

allGrids.on("mousedown", function() {
  paintSquare(this);
});

allGrids.on("mouseenter", function() {
  d3.select(this)
    .style("cursor", "pointer")
    .style("opacity", "0.9");
  if (isPress) {
    paintSquare(this);
  }
});
allGrids.on("mouseleave", function() {
  d3.select(this)
    .style("cursor", "pointer")
    .style("opacity", "1");
});

document.addEventListener("mousedown", function() {
  isPress = true;
});
document.addEventListener("mouseup", function() {
  isPress = false;
});

function translate(d) {
  console.log(d);
  return `translate(${(d % x) * RECTSIZE},${Math.floor(d / x) * RECTSIZE})`;
}

function paintSquare(item) {
  if (d3.select(item).attr("data-choosed") == "true" && !isPress) {
    d3.select(item)
      .style("fill", defaultColor)
      .attr("data-choosed", false);
  } else {
    d3.select(item)
      .style("fill", "#000")
      .attr("data-choosed", true);
  }
}

export default { node, update };
