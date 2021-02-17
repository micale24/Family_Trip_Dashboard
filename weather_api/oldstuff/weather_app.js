
//Changing Sample Id from user input in dropdown box
function optionChanged(id){
    demographicPanel(id);
    Charts(id);
}

function demographicPanel(id) {
    d3.json("./samples.json").then((data)=>{
        var result = data.metadata.filter(meta => meta.id.toString() === id)[0];

    var demographicPanel = d3.select("#sample-metadata");    

    demographicPanel.html("");

    Object.entries(result).forEach((key) =>{
        demographicPanel.append("h5").text(key[0].toLowerCase() + ":" + key[1] + "\n");});
    });
};

function Charts(id){
    d3.json("./samples.json").then((data)=>{
        //Bar Chart with top 10 OTU of samples

        //Filitering throught the sample data to match the id
        var chartSamples = data.samples.filter(s => s.id.toString() === id)[0];
        //Top ten samples ranging from highest to least
        var chartTopOTU = (chartSamples.sample_values.slice(0,10)).reverse();
        //X-axis label
        var OTUid = chartTopOTU.map(d => "OTU"+" "+ d);
        //Y-axis lables for top ten OTUs
        var labels = (chartSamples.otu_labels.slice(0, 10));

        var trace1 = {
            x: chartTopOTU,
            y: OTUid,
            text: labels,
            marker: 
            {
            color: "blue"},
            type:"bar",
            orientation: "h",
        };
        var data = [trace1];

        // Layout variable to set plots layout
        var layout = {
            title: "Top 10 OTU Samples",
            barmode: "group",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 150,
                r: 150,
                t: 90,
                b: 20
                }
            
            
            };
        Plotly.newPlot("bar", data, layout);

        // Bubble Chart
        var bubbleLayout = {
            margin: {t: 0},
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
            };
        var bubbleData = [
            {
            title: 'Overview of All Samples',
            x: chartSamples.otu_ids,
            y: OTUid,
            mode: "markers",
            text: labels,
            marker: 
                {
                size: chartSamples.sample_values,
                color: chartSamples.otu_ids,
                colorscale: "Electric"
                }
            }
            ];
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    });
}
//Initialization funcation to insert dropdown options and plot data and demographic info
function initialization() {
    // Selecting tag in index.html for dropdown menu
    var dropdown = d3.select("#selDataset");
    // Reading data from samples.json
    d3.json("./samples.json").then((data) => {
        console.log(data);
        //
        data.names.forEach((name) => {
                dropdown.append("option").text(name).property("value");
            });

        //Callback functions for plots and demographic inital sample
        var initalSample = data.names[0]
        demographicPanel(initalSample);
        Charts(initalSample)
    });
};
//Webpage rest to an inital value in dataset
initialization();