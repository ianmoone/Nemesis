//desktop reservations :: bar chart
var randomScalingFactor = function() {
    return Math.round(Math.random() * 15000);
};
new Chart(document.getElementById("bar-desktop"), {
    type: 'bar',
        data: {
          labels: [
                  "01",
                  "02",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30"
          ],
          datasets: [
            {
              label: "reservations",
              backgroundColor: "#cccccc",
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
          },
            {
              label: "reservations m-1",
              backgroundColor: "#26a65b",
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
            }
          ]
        },
    options: {
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                }
            }]
        },
      title: {
        display: false,
        text: 'title'
        }
    }
});

//mobile reservations :: bar chart
var randomScalingFactor = function() {
    return Math.round(Math.random() * 15000);
};
new Chart(document.getElementById("bar-mobile"), {
    type: 'bar',
        data: {
          labels: [
                  "01",
                  "02",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30"
          ],
          datasets: [
            {
              label: "reservations",
              backgroundColor: "#cccccc",
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
          },
            {
              label: "reservations m-1",
              backgroundColor: "#26a65b",
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
            }
          ]
        },
    options: {
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                }
            }]
        },
      title: {
        display: false,
        text: 'title'
        }
    }
});

//new customers :: line chart
var randomScalingFactor = function() {
    return Math.round(Math.random() * 200);
};
new Chart(document.getElementById("line-customer"), {
  type: 'line',
  data: {
    labels: [
            "01",
            "02",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30"
        ],
    datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
        label: "xoxo",
        borderColor: "#0088cc",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: 'a title'
    },
    elements: {
        line: {
            tension: 0, // disables bezier curves
        },
        point: {
            radius: 0, // hide points
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            display: false,
            gridLines: {
                display: false,
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                display: true,
            }
        }]
    },
    legend: {
        display: false,
    }
  }
});

//bugs creation :: line chart
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
new Chart(document.getElementById("line-bugs"), {
  type: 'line',
  data: {
      labels: [
          "01",
          "02",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
      ],
      datasets: [{
          label: "b2b",
          // fill: true,
          backgroundColor: "rgba(44, 130, 190, 0)",
          borderColor: "rgba(44, 130, 190, 1)",
          data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
          ],
      }, {
          label: "b2c",
          // fill: true,
          backgroundColor: "rgba(118, 221, 251, 0)",
          borderColor: "rgba(118, 221, 251, 1)",
          data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
          ],
      }, {
          label: "Internal tools",
          // fill: true,
          backgroundColor: "rgba(83, 168, 226, 0)",
          borderColor: "rgba(83, 168, 226, 1)",
          data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
          ],
      }]
  },
  options: {
    title: {
      display: false,
      text: 'a title'
    },
    animation: {
      // duration: 5000,
      // easing: 'easeInCubic',
    },
    elements: {
        line: {
            tension: 0, // disables bezier curves
        },
        point: {
            radius: 0, // hide points
        }
    },
    legend: {
        position: 'bottom',
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Month'
            },
            gridLines: {
                display: false,
            }
        }],
        yAxes: [{
            display: true,
            // stacked: true,
            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    }
  }
});

//releases :: bar chart
var randomScalingFactor = function() {
    return Math.round(Math.random() * 20);
};
new Chart(document.getElementById("bar-releases"), {
    type: 'bar',
        data: {
          labels: [
                  "01",
                  "02",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30"
          ],
          datasets: [
            {
              label: "releases",
              backgroundColor: "#0088cc",
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
            }
          ]
        },
    options: {
        legend: { display: false },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
            text: 'title'
        }
    }
});

//bugs creation :: line chart
var randomScalingFactor = function() {
    return Math.round(Math.random() * 180000);
};
new Chart(document.getElementById("line-visitors"), {
  type: 'line',
  data: {
      labels: [
          "01",
          "02",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
      ],
      datasets: [{
          label: "unique visitors",
          fill: true,
          backgroundColor: "rgba(44, 130, 190, 0.2)",
          borderColor: "rgba(44, 130, 190, 1)",
          pointBackgroundColor: "rgba(44, 130, 190, 1)",
          data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
          ],
      }]
  },
  options: {
    title: {
      display: false,
      text: 'a title'
    },
    tooltips: {
      enabled: true
    },
    elements: {
        point: {
            radius: 3, // hide points
        }
    },
    legend: {
        display: false,
        position: 'bottom'
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Day'
            },
            gridLines: {
                display: false,
            }
        }],
        yAxes: [{
            display: true,
            // stacked: true,
            scaleLabel: {
                display: true,
                labelString: 'Unique visitors'
            }
        }]
    }
  }
});

//yums :: bar chart
var randomScalingFactor = function() {
    return Math.round(Math.random() * 5000);
};
new Chart(document.getElementById("bar-yums"), {
    type: "bar",
        data: {
          labels: [
                  "01",
                  "02",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30"
          ],
          datasets: [
            {
              label: "yums distributed",
              backgroundColor: "#F9AF20",
              type: "bar",
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
            },
            {
              label: "yums spent",
              backgroundColor: "#E67E22",
              // borderColor: "#E67E22",
              // type: "line",
              fill: "false",
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
            }
          ]
        },
        options: {
            legend: {
                display: true,
                position: 'bottom'
            },
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: false,
                text: 'title'
            },
            scales: {
                xAxes: [{
                    display: true,
                    stacked: true,
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    // id: "yums distributed",
                    stacked: true,
                    type: "linear",
                    display: true,
                    stacked: true,
                    gridLines: {
                        display: true,}
                }],
            }
        }
});
