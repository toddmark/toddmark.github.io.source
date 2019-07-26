import * as d3 from "d3";
const node = document.createElement("div");

const rectSize = 50;
const lines = 16;
const columns = 16;
const defaultColor = "#eee";
const width = columns * rectSize;
const height = lines * rectSize;
const x = width / rectSize;
const y = height / rectSize;

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
    .attr("width", rectSize)
    .attr("height", rectSize)
    .style("stroke", "#eff")
    .style("fill", defaultColor);
}

function update() {
  console.log(d3.select("svg").selectAll("rect"));
  d3.select("svg")
    .selectAll("rect")
    .data(d3.range(x * y))
    .attr("transform", translate)
    .attr("width", rectSize)
    .attr("height", rectSize)
    .style("stroke", "#eff")
    .style("fill", defaultColor);
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
  return `translate(${(d % x) * rectSize},${Math.floor(d / x) * rectSize})`;
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
