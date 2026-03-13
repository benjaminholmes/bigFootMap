//Script file for d3.js map visualisation

// Define projection for the map
const projection = d3.geoAlbersUsa()
.translate([3000, 2100])
.scale(8000);

// Define SVG container
const svg = d3.select("#map");

// Load US map data
d3.json("https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json").then(function(us) {
// Draw map features
svg.append("path")
    .datum(topojson.feature(us, us.objects.states))
    .attr("fill", "black")
    .attr("d", d3.geoPath(projection));

// Define marker types for each state
const markers = {
    "Oregon": "arrow",
    "Washington": "kokopelli",
    "California": "dreamcatcher",
    "Florida": "gecko",
    "West Virginia": "hummingbird",
    "Texas": "shamaneye",
    "Maine" : "tepee",
    "New Mexico" : "bear",
    "North Carolina" : "totem",
    "Connecticut" : "lightning",
    "Virginia" : "buffalo",
    "Illinois" : "snake",
    "Utah" : "cactus",
    "Georgia" : "homecoming",
    "Missouri" : "campfire",
    "Louisiana" : "healinghand",
    "Mississippi" : "dragonfly",
    "Pennsylvania" : "moon",
    "Tennessee" : "4ages",
    "Wisconsin" : "feather",
    "New York" : "fish",
    "Kansas" : "mountain",
    "Iowa" : "buffaloskull",
    "Montana" : "morningstar",
    "Indiana" : "bow&arrow",
    "Michigan" : "harmony",
    "Colorado" : "arrowhead",
    "Arizona" : "cross",
    "Arkansas" : "man",
    "Idaho" : "butterfly",
    "Oklahoma" : "peacepipe",
    "Alabama" : "turtle",
    "Minnesota" : "eightpointedstar",
    "South Carolina" : "drum",
    "Ohio" : "horse",
    "Kentucky" : "rainclouds",
    "North Dakota" : "flower",
    "Nebraska" : "sunsymbol",
    "South Dakota" : "eagle",
    "Delaware" : "dancer",
    "Nevada" : "sunrays",
    "Alaska" : "eaglefeathers",
    "Maryland" : "dryingrack",
    "Wyoming" : "headdress",
    "New Hampshire" : "lightningarrow",
    "Massachusetts" : "hogan",
    "Vermont" : "thunderbirdtrack",
    "Rhode Island" : "deadpeople",
    "New Jersey" : "crossedarrows"
};


// Load JSON data for the scattermap
d3.json("bigFootSightings.json").then(function(data) {
    console.log(data); // Log the JSON data

    // Draw markers for each state
    svg.selectAll(".marker")
        .data(data.filter(d => projection([d.longitude, d.latitude]) !== null)) // Filter out objects with null coordinates
        .enter().append("g")
        .attr("class", "marker")
        .attr("transform", d => {
            const coords = projection([d.longitude, d.latitude]);
            return `translate(${coords[0]}, ${coords[1]})`; 
        })
        .each(function(d) {
            const markerType = markers[d.state] || "dot"; 
            if (markerType === "arrow") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/arrow.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            }else if (markerType === "kokopelli") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/kokopelli.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "gecko") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/gecko.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "hummingbird") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/hummingbird.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "shamaneye") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/shamaneye.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "tepee") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/tepee.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "bear") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/bear-track.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "totem") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/totem.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "lightning") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/lightning.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "buffalo") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/buffalo.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "snake") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/snake.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "cactus") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/cactus.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "homecoming") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/homecoming.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "campfire") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/campfire.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "healinghand") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/healinghand.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "dragonfly") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/dragonfly.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "moon") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/moon.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "4ages") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/4ages.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "dreamcatcher") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/dreamcatcher.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "feather") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/feather.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "fish") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/fish.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "mountain") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/mountain.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "buffaloskull") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/buffalo-skull.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "morningstar") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/morningstar.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "bow&arrow") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/bow&arrow.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "harmony") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/harmony.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "arrowhead") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/arrowhead.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "cross") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/cross.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "man") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/man.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "butterfly") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/butterfly.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "peacepipe") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/peacepipe.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "turtle") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/turtle.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "eightpointedstar") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/eightpointedstar.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "drum") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/drum.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "horse") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/horse.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "rainclouds") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/rainclouds.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "flower") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/flower.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "sunsymbol") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/sunsymbol.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "eagle") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/eagle.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "dancer") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/dancer.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "sunrays") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/sunrays.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            }  else if (markerType === "eaglefeathers") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/eaglefeathers.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "dryingrack") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/dryingrack.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "headdress") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/headdress.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "lightningarrow") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/lightningarrow.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "hogan") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/hogan.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "thunderbirdtrack") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/thunderbirdtrack.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "deadpeople") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/deadpeople.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else if (markerType === "crossedarrows") {
                d3.select(this).append("image")
                    .attr("xlink:href", "img/crossedarrows.png")
                    .attr("x", 0) // X-coordinate of the top-left corner of the image
                    .attr("y", 0) // Y-coordinate of the top-left corner of the image
                    .attr("width", 30) // Width of the image
                    .attr("height", 30); // Height of the image
            } else {
                d3.select(this).append("circle")
                    .attr("class", "dot")
                    .attr("r", 3); // Draw a dot
            }
        });

});
});

