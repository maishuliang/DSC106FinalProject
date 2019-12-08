am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
// Themes end

/**
 * This is a copy of a chart created by Antti Lipponen: https://twitter.com/anttilip?lang=en Thanks a lot!
 */

// disclaimer: this data is not accuarate, don't use it for any puroposes
// first temperature is average for 1973-1980 period

var temperatures = {
    "EUROPE": [
        ["Denmark", 7.89, 0.48, 0.31, 0.68, 0.06, -0.47, -0.04, -0.97, -0.21, -0.19, 0.36, -0.01, 0.31, -0.82, -0.49, -0.97, 0.36, 0.92, 1.38, 0.5, 0.96, -0.43, 0.19, -0.13, -0.83, 0.61, -0.09, 0.31, 0.78, 0.62, 1.59, 0.41, 0.83, 1.39, 1.49, 1.18, 1.27, 0.83, -0.84, 1.14, 0.46, 0.56, 1.95, 1.49, 1.33],
        ["France", 11.96, -0.44, -0.22, -0.02, 0.04, -0.32, 0.05, -0.43, -0.79, -0.09, 0.92, 0.28, -0.27, -0.29, -0.24, 0.16, 0.58, 0.79, 1.21, 0.4, 0.68, 0.03, 1.33, 0.78, -0.22, 0.92, 0.44, 0.91, 0.82, 0.63, 0.64, 1.56, 0.38, 0.48, 1.17, 0.72, 0.31, 0.92, 0.02, 1.44, 0.69, -0.01, 1.33, 1.06, 0.64],
        ["Italy", 13.05, 0.19, -0.27, 0.19, -0.63, 0.19, -0.1, -0.08, -0.39, -0.14, 0.53, 0.55, 0.17, 0.29, 0.28, 1.19, 1.04, 0.51, 1.39, 0.62, -0.33, 0.42, 1.34, 0.24, -2.41, 0.47, 0.25, -1.22, 2.13, 2.22, 1.87, 1.93, 1.14, -0.64, 1.51, 1.66, 1.96, 2.14, 1.63, 2.24, 2.47, 1.83, 2.09, 2.22, 2.3],
        ["Norway", 3.73, 0.82, 1.53, 0.01, 0.16, -0.23, -0.53, -0.72, -0.7, 0.04, 0.33, -0.67, 0.96, -1.09, -0.43, -0.71, -0.01, 0.98, 1.48, 0.76, 0.86, 0.09, 0.13, 0.08, -0.22, -0.16, 0.56, 1.16, 1.47, 0.69, 1.38, 0.77, 1.38, 1.19, 1.42, 1.17, 1.11, 1.01, -0.53, 1.8, 0.59, 1.09, 2.02, 1.65, 1.53],
        ["Poland", 8.64, 0.89, 0.77, 1.59, -0.71, -0.42, -0.37, -0.89, -1.73, 0.14, -0.06, 0.49, -0.18, -0.63, 0.34, -1.34, 0.82, 1.9, 1.4, 0.42, -0.89, 0.21, 1.07, 0.76, -1.04, 0.33, 0.42, 1.22, 1.52, 0.42, 1.67, 0.82, 0.41, 0.73, 0.93, 1.74, 1.54, 0.46, -1.14, 0.64, 0.22, -0.07, 1.16, 0.87, 1.39],
        ["Russia", 0.51, 0.51, -0.63, 1.69, -1.09, -0.62, -0.16, -0.33, -0.8, 0.69, 0.06, 0.7, -0.47, -0.67, -0.14, -0.92, 0.5, 0.53, 1.01, 0.45, 0.26, 0.13, -0.03, 1.58, -0.29, 0.5, 0.02, 0.17, 0.01, 0.48, 0.74, 0.81, 0.46, 0.77, -0.14, 1.57, 1.27, 0.27, 0.33, 0.89, 1.51, -2.22, -2.98, 2.25, 0.13],
        ["Spain", 17.29, -1.64, -1.48, -0.84, -0.82, 0.54, 0.69, 0.78, 0.34, 0.78, 0.43, 0.18, -0.78, 0.17, -0.61, 0.02, -0.27, 1.15, 0.42, -0.21, -0.16, -1.08, 0.55, 0.64, -0.39, 1.33, 0.22, 0.07, 0.11, 0.46, 0.38, 1.07, 0.64, 1.36, 1.51, -0.62, -0.89, 0.75, 0.57, 0.73, 0.34, 0.38, 1.37, 0.64, 1.74],
        ["Sweden", 5.67, 0.84, 1.23, 1.9, -0.27, 0.33, -0.72, -1.16, -1.03, -0.88, 0.01, 0.36, 0.41, -1.97, -0.76, -1.9, 0.09, 1.21, 1.43, 0.27, 1.01, -0.27, 0.06, -1.02, -0.46, 1.06, 0.29, 1.09, 1.73, 0.59, 1.48, 0.82, 0.86, 1.22, 1.43, 1.2, 0.38, 0.13, -1.55, 0.85, 0.11, 0.42, 1.59, 1.42, -0.29],
        ["Switzerland", 9.73, -0.3, 0.37, 0.16, 0.27, 0.45, -0.75, -0.15, -0.68, -0.25, 0.46, 0.43, -0.44, -0.74, -0.46, -0.5, 0.55, 0.73, 1.02, 0.01, 0.64, 0.26, 1.59, 0.44, -0.64, 0.67, 0.73, 0.85, 1.63, 0.74, 1.33, 1.41, 0.54, 0.39, 0.96, 1.24, 0.76, 1.08, -0.13, 1.65, 0.86, 0.21, 1.81, 1.7, 0.34],
    ],
    "AFRICA": [
        ["Egypt", 22.71, -0.54, -0.06, -0.88, 0.35, -0.27, 2.35, 0.56, -0.34, 0.74, -0.34, -0.55, -0.19, 1.07, -1.12, -0.37, -0.2, -0.16, -0.59, -0.19, -0.85, -0.44, 0.79, -0.03, 0.46, -0.87, 0.68, 1.25, -1.59, 0.1, 0.23, 0.72, 0.71, -0.01, 0.91, 0.68, 0.93, 0.79, 2.17, 0.14, 0.57, -0.01, 1.56, 1.43, 1.1],
        ["Ethiopia", 19.63, 0.43, -0.53, -0.37, -0.21, -0.04, -0.12, -0.07, 0.41, -0.18, 0.28, 0.42, -0.16, -0.72, 0.11, 0.59, 0.45, -1.68, 0.52, 0.86, 0.96, 1.11, -0.24, 0.79, 0.31, 0.8, 0.73, 0.86, 1.22, 0.17, 4.5, 4.5, 4.5, -5.07, 0.97, -1.89, -2.05, 1.61, 1.18, 2.43, 1.51, 1.88, 1.49, 1.84, 1.54],
        ["Libya", 21.54, -0.77, 0.08, 1.01, -0.04, -0.41, 0.47, 1.54, -0.86, 0.23, 0.2, -1.32, -0.53, 0.28, -1.55, -0.13, 0.63, 0.08, 0.32, -0.83, -0.55, 0.52, -0.47, 0.26, 1.73, 0.42, 0.98, 0.55, -0.17, 0.49, -1.42, 0.04, 2.46, 1.01, 0.23, 0.75, 0.72, 0.57, 1.13, -7.21, 3.03, 1.2, -1.33, 1.39, -0.68],
        ["South Africa", 17.03, -0.29, -0.54, 0.45, -0.05, 0.03, -0.53, -0.21, 0.31, -0.73, -0.19, 0.74, 0.79, 1.51, 0.36, 0.96, 0.35, 0.44, 2.13, -0.26, 1.02, 1.31, 0.47, 1.36, 0.42, 0.02, 0.5, 1.83, 0.71, 0.31, 1.28, 1.45, 1.57, 1.11, 1.08, 0.51, 0.58, 0.86, 1.29, 0.56, 1.16, 1.59, 0.97, 1.63, 1.73],
    ],
    "AMERICA": [
        ["Canada", 3.37, 0.29, -0.05, -0.65, 0.04, 0.34, -0.82, -0.21, -0.02, 1.24, -0.92, 0.62, 0.31, -0.33, 0.53, 1.84, 1.11, 0.46, 0.9, 1.21, -1.33, 0.51, 0.06, 0.03, -0.78, 0.31, 1.57, 0.73, -0.14, 0.72, -0.45, 0.08, -0.28, 0.54, 1.04, 0.12, -0.32, -0.44, 1.03, 0.04, 0.63, -0.19, -0.31, 0.67, 1.03],
        ["Chile", 13.37, -0.54, -0.44, -0.69, -0.35, 0.34, 0.05, 0.03, 0.25, 0.26, 0.32, 1.14, 0.56, 1.92, 0.5, 1, 0.74, 0.94, 0.98, 0.66, 1.19, 0.61, 0.67, 0.29, 0.42, 1.16, 1.33, 0.04, -0.37, 1.08, 0.61, 1.05, 1.53, 2.13, 2.56, 1.22, 2.06, 2.06, 1.2, 1.04, 1.56, 1.28, 1, 1.74, 1.76],
        ["Colombia", 25.89, 1.04, -0.03, -0.28, 0.24, -0.21, -0.36, -0.21, -0.1, -0.25, -0.35, 0.51, -0.73, -0.62, -0.81, -0.47, -0.56, -2.44, -0.48, -0.48, -0.32, -0.31, -0.43, -0.36, -0.51, 0.08, 0.26, -1.09, -1.03, -0.31, -0.26, -0.03, -0.45, 0.01, -0.58, -0.48, -0.66, -3.99, 0.06, -0.17, 0.12, 0.27, 0.42, 0.83, 0.62],
        ["Costa Rica", 24.8, 1.47, 0.89, 0.9, -0.58, -0.42, -0.34, -0.36, -0.12, -0.33, 0.05, 0.49, 0.22, 0.3, 0.32, 1.06, 0.5, 0.24, 0.61, 0.83, 0.6, 0.6, 0.67, 0.72, 0.41, 1.18, 1.19, 0.17, 0.59, 0.98, 1.02, 1.07, 0.72, 0.55, 0.73, 0.86, 0.63, 1.16, 1.12, 0.46, 0.79, 1.07, 1.21, 1.51, 1.16],
        ["Cuba", 26.64, -0.24, -0.6, -0.09, -0.64, -0.15, -0.45, 0.06, 0.28, 0.23, 0.38, 1.22, 0.84, 0.93, 0.91, 1.6, 1.46, 1.12, 1.52, 1.54, 1.16, 0.77, 1.41, 0.83, 0.06, 0.37, 0.42, -0.55, -0.65, -0.02, 0.12, 0.44, -0.29, -0.22, 0.02, 0, -0.28, 0.12, 0.07, -0.27, -0.12, -0.73, 0.67, 1.81, 1.19],
        ["Greenland", -5.08, -1.37, -2.73, -3.02, 1.58, 1.73, 1.53, 2.04, 2.67, 0.01, 0.05, -1.31, -0.49, 1.59, 0.69, 0.12, 1.03, -0.87, 0.25, 0.48, 0.34, 0, 0.62, 1.76, 2.58, 2.03, 1.88, 0.06, 1.74, 1.63, 1.44, 2.53, 1.86, 2.32, 1.66, 1.71, 1.52, 1.59, 2.81, 1.11, 0.68, 0.88, 1.44, 1.14, 2.75],
        ["Jamaica", 26.98, 0.33, -0.43, -0.37, -0.11, 0.34, 0.04, -0.25, 0.12, -0.02, -0.08, 0.42, -0.17, -0.21, -0.06, 0.55, 0.44, 0.24, 0.43, 0.49, 0.64, 0.75, 0.85, 0.94, 0.62, 1.11, 1.19, 0.59, 0.57, 0.86, 0.97, 1.02, 0.93, 1.04, 0.94, 0.91, 0.21, 1.16, 0.84, 0.31, 0.97, 1.14, 1.31, 1.41, 1.32],
        ["Mexico", 21.24, -0.5, 1.04, 0.06, -1.08, -0.12, 0.12, -0.27, 0.08, 0.27, -0.02, 0.03, -0.63, -0.54, -0.48, -0.49, -0.14, 0.78, 0.71, 0.8, 0.58, 0.75, 1.27, 0.88, 1.04, 0.29, 1.94, -1.11, 1.34, 1.16, 1.17, 1.67, 1.24, 1.29, 1.76, 1.39, 1.08, 1.79, 1.17, 1.95, 1.63, 1.6, 1.64, 1.96, 2.07],
    ],
    "ASIA": [
        ["China", 9.47, 0.16, -0.31, 0.38, -0.59, -0.11, 0.13, 0.04, -0.24, 0.04, 0.34, 0.18, -0.5, -0.34, -0.13, 0.29, 0.29, 0.42, 0.65, 0.42, 0.18, 0.17, 0.78, 0.59, 0.21, 0.67, 1.46, 1.07, 0.51, 0.88, 1.11, 0.91, 1.01, 0.73, 1.34, 1.47, 0.96, 1.09, 0.88, 0.68, 0.52, 0.01, 1.06, 0.81, -0.18], ["Georgia", 12.99, -1.18, -3.01, 0.21, -0.1, 0.41, 0.09, 0.84, 1.76, -0.25, 0.63, -0.78, -5.57, 0.06, -3.45, 1.1, -1.41, -4.07, 0, 1.69, 1.23, -0.86, 5.93, -0.06, 3.27, -1.46, -3.82, 0.44, 0.44, 2.17, 2.08, 0.88, 1.77, 0.89, 0.57, -1.65, -1.06, 0.08, 1.46, -0.01, 0.46, -0.38, 0.72, -0.58, -0.94],
        ["India", 25.69, -0.61, -0.42, -0.46, -0.24, 0.16, 0.42, 1.16, 0.36, 0.06, 0.14, -0.48, 0.33, 0.37, -0.54, 0.39, 0.64, -0.32, -0.61, 0.21, -0.05, 0.23, 0.27, 0.27, 0.35, -0.18, 0.87, 0.46, 0.27, 0.53, 0.75, 0.59, 0.59, -0.07, 1.03, 0.48, 0.47, 0.56, 0.86, 0.7, 0.94, 0.81, 0.86, -1.73, -0.16],
        ["Indonesia", 26.99, 0, 0, 0, -0.58, -0.58, -0.58, 0.09, 0.08, -0.07, -1.54, -0.33, -0.17, -0.23, -0.04, 0.36, 0.18, -0.09, 0.01, 0.06, 0.08, -0.01, -0.07, -0.04, -0.04, -0.03, 0.54, -0.12, -0.05, 0.07, 0.34, 0.4, 0.36, 0.48, 0.24, 0.27, 0.11, 0.44, 0.55, 0.21, 0.34, 0.66, 0.56, 0.58, 0.98],
        ["Thailand", 27.27, 0.03, -0.43, -0.27, -0.44, 0.01, 0.19, 0.5, 0.4, -0.16, 0.01, 0.21, -0.74, 0.04, 0.01, 0.57, 0.28, 0.32, 0.63, 0.68, 0.47, 0.37, 0.44, 0.58, 0.29, 0.72, 1.37, 0.27, 0.38, 0.73, 0.84, 0.67, 0.67, 0.72, 0.79, 0.65, 0.39, 0.72, 1.38, 0.34, 1.22, 0.98, 1.01, 1.4, 1.58],
        ["Turkey", 13.63, -0.26, -0.89, -2.68, 0.54, 1.04, 0.79, 0.99, 0.63, 1.4, 0.29, -0.52, -0.06, 0.14, 0.09, -0.4, 0.04, 0.33, 0.47, 0.24, -0.87, -0.33, 1.29, 0.48, 0.77, -0.2, 1.19, 1.27, 0.31, 1.7, 0.68, 1.49, 0.59, 0.38, 0.91, 1.87, 1.12, 1.49, 2.94, 0.57, 1.61, 2.14, 2.77, 2.43, -3.67],
        ["Vietnam", 25.36, 1.97, -0.97, 0.52, -0.05, 0.17, 0.38, -2.68, -2.68, -2.68, 1.51, 0.83, 1.3, 0.97, 0.99, 1.99, 1.77, 0.93, 1.23, 1.28, 0.19, 0.54, 0.48, 0.26, 0.08, 0.12, 1.03, 0.22, 0.12, 0.24, 0.42, 0.73, 0.05, 0.11, 0.53, 0.24, -0.14, 0.41, 0.76, -0.47, 0.45, 0.29, 0.31, -1.95, 1.08]
    ],
    "OCEANIA": [
        ["Australia", 18.38, 0.36, -0.34, -0.14, -0.48, -0.08, -0.34, 0.3, 0.57, 0.12, -0.11, 0.1, -0.62, -0.21, -0.44, -0.13, 0.56, -0.31, -0.26, -0.18, -0.66, -0.38, -0.44, -0.61, -0.59, -0.35, -0.11, -0.29, -0.29, -0.21, 0.19, 0.11, -0.02, 0.28, -0.06, 0.26, -0.21, 0.41, 0.01, -0.18, -0.18, 0.56, 0.48, 0.27, 0.41]
    ]
}

var startYear = 1990;
var endYear = 2016;
var currentYear = 1990;
var colorSet = new am4core.ColorSet();

var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.numberFormatter.numberFormat = "+#.0°C|#.0°C|0.0°C";
chart.hiddenState.properties.opacity = 0;

chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;

chart.padding(5,15,5,10)
chart.radius = am4core.percent(65);
chart.innerRadius = am4core.percent(40);

// year label goes in the middle
var yearLabel = chart.radarContainer.createChild(am4core.Label);
yearLabel.horizontalCenter = "middle";
yearLabel.verticalCenter = "middle";
yearLabel.fill = am4core.color("#673AB7");
yearLabel.fontSize = 30;
yearLabel.text = String(currentYear);

// zoomout button
var zoomOutButton = chart.zoomOutButton;
zoomOutButton.dx = 0;
zoomOutButton.dy = 0;
zoomOutButton.marginBottom = 15;
zoomOutButton.parent = chart.rightAxesContainer;

// scrollbar
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.rightAxesContainer;
chart.scrollbarX.orientation = "vertical";
chart.scrollbarX.align = "center";
chart.scrollbarX.exportable = false;

// vertical orientation for zoom out button and scrollbar to be positioned properly
chart.rightAxesContainer.layout = "vertical";
chart.rightAxesContainer.padding(120, 20, 120, 20);

// category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";

var categoryAxisRenderer = categoryAxis.renderer;
var categoryAxisLabel = categoryAxisRenderer.labels.template;
categoryAxisLabel.location = 0.5;
categoryAxisLabel.radius = 28;
categoryAxisLabel.relativeRotation = 90;

categoryAxisRenderer.fontSize = 11;
categoryAxisRenderer.minGridDistance = 10;
categoryAxisRenderer.grid.template.radius = -25;
categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
categoryAxisRenderer.grid.template.interactionsEnabled = false;

categoryAxisRenderer.ticks.template.disabled = true;
categoryAxisRenderer.axisFills.template.disabled = true;
categoryAxisRenderer.line.disabled = true;

categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxis.tooltip.defaultState.properties.opacity = 0;

// value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = -3;
valueAxis.max = 6;
valueAxis.strictMinMax = true;
valueAxis.tooltip.defaultState.properties.opacity = 0;
valueAxis.tooltip.animationDuration = 0;
valueAxis.cursorTooltipEnabled = true;
valueAxis.zIndex = 10;

var valueAxisRenderer = valueAxis.renderer;
valueAxisRenderer.axisFills.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxisRenderer.minGridDistance = 20;
valueAxisRenderer.grid.template.strokeOpacity = 0.05;


// series
var series = chart.series.push(new am4charts.RadarColumnSeries());
series.columns.template.width = am4core.percent(90);
series.columns.template.strokeOpacity = 0;
series.dataFields.valueY = "value" + currentYear;
series.dataFields.categoryX = "country";
series.tooltipText = "{categoryX}:{valueY.value}";

// this makes columns to be of a different color, depending on value
series.heatRules.push({ target: series.columns.template, property: "fill", minValue: -3, maxValue: 6, min: am4core.color("#673AB7"), max: am4core.color("#F44336"), dataField: "valueY" });

// cursor
var cursor = new am4charts.RadarCursor();
chart.cursor = cursor;
cursor.behavior = "zoomX";

cursor.xAxis = categoryAxis;
cursor.innerRadius = am4core.percent(40);
cursor.lineY.disabled = true;

cursor.lineX.fillOpacity = 0.2;
cursor.lineX.fill = am4core.color("#000000");
cursor.lineX.strokeOpacity = 0;
cursor.fullWidthLineX = true;

// year slider
var yearSliderContainer = chart.createChild(am4core.Container);
yearSliderContainer.layout = "vertical";
yearSliderContainer.padding(0, 38, 0, 38);
yearSliderContainer.width = am4core.percent(100);

var yearSlider = yearSliderContainer.createChild(am4core.Slider);
yearSlider.events.on("rangechanged", function () {
    updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
})
yearSlider.orientation = "horizontal";
yearSlider.start = 0.5;
yearSlider.exportable = false;

chart.data = generateRadarData();

function generateRadarData() {
    var data = [];
    var i = 0;
    for (var continent in temperatures) {
        var continentData = temperatures[continent];

        continentData.forEach(function (country) {
            var rawDataItem = { "country": country[0] }

            for (var y = 2; y < country.length; y++) {
                rawDataItem["value" + (startYear + y - 2)] = country[y];
            }

            data.push(rawDataItem);
        });

        createRange(continent, continentData, i);
        i++;

    }
    return data;
}


function updateRadarData(year) {
    if (currentYear != year) {
        currentYear = year;
        yearLabel.text = String(currentYear);
        series.dataFields.valueY = "value" + currentYear;
        chart.invalidateRawData();
    }
}

function createRange(name, continentData, index) {

    var axisRange = categoryAxis.axisRanges.create();
    axisRange.axisFill.interactionsEnabled = true;
    axisRange.text = name;
    // first country
    axisRange.category = continentData[0][0];
    // last country
    axisRange.endCategory = continentData[continentData.length - 1][0];

    // every 3rd color for a bigger contrast
    axisRange.axisFill.fill = colorSet.getIndex(index * 3);
    axisRange.grid.disabled = true;
    axisRange.label.interactionsEnabled = false;
    axisRange.label.bent = true;

    var axisFill = axisRange.axisFill;
    axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
    axisFill.radius = -20; // negative radius means it is calculated from max radius
    axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
    axisFill.fillOpacity = 1;
    axisFill.togglable = true;

    axisFill.showSystemTooltip = true;
    axisFill.readerTitle = "click to zoom";
    axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    axisFill.events.on("hit", function (event) {
        var dataItem = event.target.dataItem;
        if (!event.target.isActive) {
            categoryAxis.zoom({ start: 0, end: 1 });
        }
        else {
            categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
        }
    })

    // hover state
    var hoverState = axisFill.states.create("hover");
    hoverState.properties.innerRadius = -10;
    hoverState.properties.radius = -25;

    var axisLabel = axisRange.label;
    axisLabel.location = 0.5;
    axisLabel.fill = am4core.color("#ffffff");
    axisLabel.radius = 3;
    axisLabel.relativeRotation = 0;
}

var slider = yearSliderContainer.createChild(am4core.Slider);
slider.start = 1;
slider.exportable = false;
slider.events.on("rangechanged", function () {
    var start = slider.start;

    chart.startAngle = 270 - start * 179 - 1;
    chart.endAngle = 270 + start * 179 + 1;

    valueAxis.renderer.axisAngle = chart.startAngle;
})