var width = 750;
var height = 450;
var margin = {top: 20, right: 15, bottom: 30, left: 40};
    var w = width - margin.left - margin.right;
    var h = height - margin.top - margin.bottom;


d3.csv("stocks.csv", function(error, stocks) {
//read in the data
  if (error) return console.warn(error);
     stocks.forEach(function(d) {
     	d.price = +d.price;
     	d.tValue = +d.tValue;
     	d.vol = +d.vol;
  });
//dataset is the full dataset -- maintain a copy of this at all times
  dataset = stocks;


//all the data is now loaded, so draw the initial vis
  drawVis(dataset);

});



//none of these depend on the data being loaded so fine to define here

var col = d3.scaleOrdinal(d3.schemeCategory10);


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

var xAxis = d3.axisBottom()
    .ticks(4)
    .scale(x);

chart.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + h + ")")
    .call(xAxis)
     .append("text")
      .attr("x", w)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Price");

var yAxis = d3.axisLeft()
    .scale(y);

chart.append("g")
   .attr("class", "axis")
   .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("True Value");



function drawVis(dataset) { //draw the circiles initially and on each interaction with a control

	var circle = chart.selectAll("circle")
	   .data(dataset);

	circle
    	  .attr("cx", function(d) { return x(d.price);  })
    	  .attr("cy", function(d) { return y(d.tValue);  })
     	  .style("fill", function(d) { return col(d.type); })
    	  .on("mouseover", function(d){
        	d3.select(this).attr("r", 8);
        	tooltip.transition()
               	 .duration(200)
               	 .style("opacity", 1);
       		tooltip.html("Stock <b>"+d.name + "</b>: " + "price="+d.price + ", trueValue="+d.tValue+"<br>"+"type="+d.type+", volume="+d.vol)
               	 .style("left", (d3.event.pageX + 5) + "px")
               	 .style("top", (d3.event.pageY - 28) + "px");
	})
    .	on("mouseout", function(d){
        	d3.select(this).attr("r", 4);
        	tooltip.transition()
                 .duration(500)
                 .style("opacity", 0.5);
        });

	circle.exit().remove();

	circle.enter().append("circle")
    	  .attr("cx", function(d) { return x(d.price);  })
    	  .attr("cy", function(d) { return y(d.tValue);  })
    	  .attr("r", 4)
    	  .style("stroke", "black")
     	   .style("fill", function(d) { return col(d.type); })
    	   .style("opacity", 0.5)
    	   .on("mouseover", function(d){ 
		d3.select(this).attr("r", 8); 
		tooltip.transition()
               	 .duration(200)
               	 .style("opacity", 1);
       		tooltip.html("Stock <b>"+d.name + "</b>: " + "price="+d.price + ", trueValue="+d.tValue+"<br>"+"type="+d.type+", volume="+d.vol)
                 .style("left", (d3.event.pageX + 5) + "px")
                 .style("top", (d3.event.pageY - 28) + "px");
    	    })
    	   .on("mouseout", function(d){ 
		d3.select(this).attr("r", 4); 
        	tooltip.transition()
                 .duration(500)
                .style("opacity", 0.5);
     	    });
}





function filterType(mtype) {
}

