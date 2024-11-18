let g = new dagreD3.graphlib.Graph().setGraph({}).setDefaultEdgeLabel(function() {return {};});

g.setNode("cs101", {label: "CS101", width: 100, height:100, style: "node"});
g.setNode("cs201", {label: "CS201", width: 100, height:100, style: "node"});
g.setNode("cs230", {label: "CS230", width: 100, height:100, style: "node"});
g.setNode("cs326", {label: "CS236", width: 100, height:100, style: "node"});
g.setNode("math210", {label: "MATH210", width: 100, height:100, style: "node"});
g.setNode("cs410", {label: "CS410", width: 100, height:100, style: "node"});
g.setNode("cs320", {label: "CS320", width: 100, height:100, style: "node"});
g.setNode("cs240", {label: "CS240", width: 100, height:100, style: "node"});
g.setNode("cs450", {label: "CS450", width: 100, height:100, style: "node"});
g.setNode("cs370", {label: "CS370", width: 100, height:100, style: "node"});

g.setEdge("cs101","cs201");
g.setEdge("cs101","cs230");
g.setEdge("cs201","cs326");

g.setEdge("cs201","cs410");
g.setEdge("math210","cs410");

g.setEdge("cs201","cs320");
g.setEdge("cs230","cs320");

g.setEdge("cs201","cs240");

g.setEdge("cs410","cs450");
g.setEdge("math210","cs450");

g.setEdge("cs230","cs370");

let render = new dagreD3.render();
let svg = d3.select("svg"),svgGroup = svg.append("g");
d3.select("svg g").call(render,g);

// function redirectUrl()
// svg.selectAll("g.node").on("click", redirectUrl);

let xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
svg.attr("height", g.graph().height + 40);
