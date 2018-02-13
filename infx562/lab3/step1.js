var width = 750;
var height = 450;
var margin = {top: 20, right: 15, bottom: 30, left: 40};
    var w = width - margin.left - margin.right;
    var h = height - margin.top - margin.bottom;

var dataset;
var maxVol;
var maxPrice;
var maxeValue;
var volRange;
 //start with the type set to all, changes this variable everytime the dropdown for type is changed

console.log('Reading Data')
d3.csv("stocks.csv", function(error, stocks) {
//read in the data
  if (error) return console.warn(error);
     stocks.forEach(function(d) {
     	d.price = +d.price;
     	d.eValue = +d.eValue;
     	d.vol = +d.vol;
     	d.delta = +d.delta;
  });
//dataset is the full dataset -- maintain a copy of this at all times
  dataset = stocks;
//max of different variables for sliders
  maxVol = d3.max(dataset.map(function(d) {return d.vol;}));
  maxPrice = d3.max(dataset.map(function(d) {return d['price'];}));
  maxeValue = d3.max(dataset.map(function(d) {return d['eValue'];}));


//all the data is now loaded, so draw the initial vis
  console.log('Drawing Visualization')
  drawVis(dataset);

});



//none of these depend on the data being loaded so fine to define here

var col = d3.scaleOrdinal(d3.schemeCategory10);

var colLightness = d3.scaleLinear()
	.domain([0, 1200])
	.range(["#FFFFFF", "#000000"])

var svg = d3.select("body").append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var chart = d3.select(".chart")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom+15)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var x = d3.scaleLinear()
        .domain([0, 1000])
        .range([0, w]);

var y = d3.scaleLinear()
        .domain([0, 1000])
        .range([h, 0]);


 chart.append("g")
      .attr("transform", "translate(0," + h + ")")
      .call(d3.axisBottom(x))
     .append("text")
      .attr("x", w)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Price");

      chart.append("g")
       .call(d3.axisLeft(y))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("True Value");


function drawVis(dataset) { //draw the circles initially and on each interaction with a control

	var circle = chart.selectAll("circle")
	   .data(dataset);

  var tooltipText = function(d) {return "Price: " + d.price + "<br/>eValue: "  + d.eValue + "<br/>Vol: " + d.vol + "<br/>Delta: " + d.delta}

  console.log('Update')
	circle
    	  .attr("cx", function(d) { return x(d.price);  })
    	  .attr("cy", function(d) { return y(d.eValue);  })
     	  .style("fill", function(d) { return col(d.type); })
        .on("mouseover", function(d) {    
            tooltip.transition()    
                .duration(200)    
                .style("opacity", .9);    
            tooltip.html(tooltipText(d))  
                .style("left", (d3.event.pageX +5) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");  
            })          
        .on("mouseout", function(d) {   
            tooltip.transition()    
                .duration(500)    
                .style("opacity", 0); 
        });;

  console.log('Exit')
	circle.exit().remove();

  console.log('Enter')
	circle.enter().append("circle")
    	  .attr("cx", function(d) { return x(d.price);  })
    	  .attr("cy", function(d) { return y(d.eValue);  })
    	  .attr("r", 4)
    	  .style("stroke", "black")
     	  .style("fill", function(d) { return col(d.type); })
    	  .style("opacity", 0.5)
        .on("mouseover", function(d) {    
            tooltip.transition()    
                .duration(200)    
                .style("opacity", .9);    
            tooltip.html(tooltipText(d))  
                .style("left", (d3.event.pageX +5) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");  
            })          
        .on("mouseout", function(d) {   
            tooltip.transition()    
                .duration(500)    
                .style("opacity", 0); 
        });


} //End Draw Vis

          

function filterType(mtype) {

}
