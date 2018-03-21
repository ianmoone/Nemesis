var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    var lineChartData = {
        labels : ["","","","","","","","","","","","","","","","","","","","",""],
        datasets : [
            {
                label: "My First dataset",
                fillColor : "rgba(40, 189, 114,0.5)",
                strokeColor : "",
                pointColor : "",
                pointStrokeColor : "",
                pointHighlightFill : "",
                pointHighlightStroke : "",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
        ]

    }
    var lineChartData2 = {
        labels : ["","","","","","","","","","","","","","","","","","","","",""],
        datasets : [
            {
                label: "My second dataset",
                fillColor : "rgba(52, 152, 219,0.5)",
                strokeColor : "rgba(52, 152, 219,0.5)",
                pointColor : "",
                pointStrokeColor : "",
                pointHighlightFill : "",
                pointHighlightStroke : "",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
        ]

    }
    var barChartData = {
        labels : ["","","","","","","","","",""],
        datasets : [
            {
                fillColor : "rgba(204,204,204,0.5)",
                strokeColor : "rgba(204,204,204,0)",
                highlightFill: "rgba(204,204,204,0.75)",
                highlightStroke: "rgba(204,204,204,0)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
        ]
    }
window.onload = function(){

    var ctx = document.getElementById("canvas").getContext("2d");

    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true,
        scaleShowGridLines : false,
        pointDot : false,
        maintainAspectRatio : false,
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
        //scaleShowLabels: false,
        scaleShowVerticalLines: false
    });

    var ctx2 = document.getElementById("bar1").getContext("2d");

    window.myBar = new Chart(ctx2).Bar(barChartData, {
        scaleShowGridLines : false,
        maintainAspectRatio : false,
        scaleShowVerticalLines: false,
        showScale: false,
        responsive : true
    });

    var ctx3 = document.getElementById("bar2").getContext("2d");

    window.myBar = new Chart(ctx3).Bar(barChartData, {
        scaleShowGridLines : false,
        maintainAspectRatio : false,
        scaleShowVerticalLines: false,
        showScale: false,
        responsive : true
    });

    var ctx6 = document.getElementById("canvas2").getContext("2d");

    window.myLine = new Chart(ctx6).Line(lineChartData2, {
        responsive: true,
        scaleShowGridLines : false,
        pointDot : false,
        maintainAspectRatio : false,
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
        //scaleShowLabels: false,
        scaleShowVerticalLines: false
    });

    var ctx7 = document.getElementById("canvas3").getContext("2d");

    window.myLine = new Chart(ctx7).Line(lineChartData2, {
        responsive: true,
        scaleShowGridLines : false,
        showScale : false,
        pointDot : false,
        maintainAspectRatio : false,
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
        //scaleShowLabels: false,
        scaleShowVerticalLines: false
    });

    var ctx8 = document.getElementById("canvas4").getContext("2d");

    window.myLine = new Chart(ctx8).Line(lineChartData2, {
        responsive: true,
        scaleShowGridLines : false,
        showScale : false,
        pointDot : false,
        maintainAspectRatio : false,
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
        //scaleShowLabels: false,
        scaleShowVerticalLines: false
    });
};
