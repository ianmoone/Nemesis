// charts color palette
// BLUE
//     50      #E3F2FD
//     100     #BBDEFB
//     200     #90CAF9
//     300     #64B5F6
//     400     #42A5F5
//     500     #2196F3
//     600     #1E88E5
//     700     #1976D2
//     800     #1565C0
//     900     #0D47A1
// GREEN
//     50      #E8F5E9
//     100     #C8E6C9
//     200     #A5D6A7
//     300     #81C784
//     400     #66BB6A
//     500     #4CAF50
//     600     #43A047
//     700     #388E3C
//     800     #2E7D32
//     900     #1B5E20
// RED
//     50      #FFEBEE
//     100     #FFCDD2
//     200     #EF9A9A
//     300     #E57373
//     400     #EF5350
//     500     #F44336
//     600     #E53935
//     700     #D32F2F
//     800     #C62828
//     900     #B71C1C
// YELLOW
//     50      #FFFDE7
//     100     #FFF9C4
//     200     #FFF59D
//     300     #FFF176
//     400     #FFEE58
//     500     #FFEB3B
//     600     #FDD835
//     700     #FBC02D
//     800     #F9A825
//     900     #F57F17

var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000);
};
// desktop reservations barchart
var chart = c3.generate({
    bindto: '#bar-desktop',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            '2018-01-06',
            '2018-01-07',
            '2018-01-08',
            '2018-01-09',
            '2018-01-10',
            '2018-01-11',
            '2018-01-12',
            '2018-01-13',
            '2018-01-14',
            '2018-01-15',
            '2018-01-16',
            '2018-01-17',
            '2018-01-18',
            '2018-01-19',
            '2018-01-20',
            '2018-01-21',
            '2018-01-22',
            '2018-01-23',
            '2018-01-24',
            '2018-01-25',
            '2018-01-26',
            '2018-01-27',
            '2018-01-28',
            '2018-01-29',
            '2018-01-30'
            ],
            ['data1',
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
            ['data2',
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
        ],
        type: 'bar',
        labels: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false
    },
    axis: {
        x: {
            show: false,
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        },
        y: {
            show: false,
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 60,
    },
    // padding: {
    //     left: 40,
    //     right: 20
    // },
    color: {
        pattern: ['#cccccc', '#589442']
    },
    transition: {
        duration: 100
    },
    bar: {
        width: {
            ratio: 0.8 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000);
};
// mobile reservations barchart
var chart = c3.generate({
    bindto: '#bar-mobile',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            '2018-01-06',
            '2018-01-07',
            '2018-01-08',
            '2018-01-09',
            '2018-01-10',
            '2018-01-11',
            '2018-01-12',
            '2018-01-13',
            '2018-01-14',
            '2018-01-15',
            '2018-01-16',
            '2018-01-17',
            '2018-01-18',
            '2018-01-19',
            '2018-01-20',
            '2018-01-21',
            '2018-01-22',
            '2018-01-23',
            '2018-01-24',
            '2018-01-25',
            '2018-01-26',
            '2018-01-27',
            '2018-01-28',
            '2018-01-29',
            '2018-01-30'
            ],
            ['data1',
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
            ['data2',
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
        ],
        type: 'bar',
        labels: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false
    },
    axis: {
        x: {
            show: false,
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        },
        y: {
            show: false,
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 60,
    },
    // padding: {
    //     left: 40,
    //     right: 20
    // },
    color: {
        pattern: ['#dedede', '#589442']
    },
    transition: {
        duration: 100
    },
    bar: {
        width: {
            ratio: 0.8 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000);
};
// customer creations barchart
var chart = c3.generate({
    bindto: '#bar-customers',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            '2018-01-06',
            '2018-01-07',
            '2018-01-08',
            '2018-01-09',
            '2018-01-10',
            '2018-01-11',
            '2018-01-12',
            '2018-01-13',
            '2018-01-14',
            '2018-01-15',
            '2018-01-16',
            '2018-01-17',
            '2018-01-18',
            '2018-01-19',
            '2018-01-20',
            '2018-01-21',
            '2018-01-22',
            '2018-01-23',
            '2018-01-24',
            '2018-01-25',
            '2018-01-26',
            '2018-01-27',
            '2018-01-28',
            '2018-01-29',
            '2018-01-30'
            ],
            ['data1',
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
            ['data2',
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
        ],
        type: 'bar',
        labels: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false
    },
    axis: {
        x: {
            show: false,
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        },
        y: {
            show: false,
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 60,
    },
    // padding: {
    //     left: 40,
    //     right: 20
    // },
    color: {
        pattern: ['#dedede', '#589442']
    },
    transition: {
        duration: 100
    },
    bar: {
        width: {
            ratio: 0.8 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 500);
};
// linechart
var chart = c3.generate({
    bindto: '#line',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            ],
            ['data1',
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
            ],
            ['data2',
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
            ]
        ],
        type: 'line'
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 200
    },
    padding: {
        left: 40,
        right: 20
    },
    color: {
        pattern: ['#0088cc', '#89C4F4']
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000);
};
// releases barchart
var chart = c3.generate({
    bindto: '#bar-releases',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            '2018-01-06',
            '2018-01-07',
            '2018-01-08',
            '2018-01-09',
            '2018-01-10',
            '2018-01-11',
            '2018-01-12',
            '2018-01-13',
            '2018-01-14',
            '2018-01-15',
            '2018-01-16',
            '2018-01-17',
            '2018-01-18',
            '2018-01-19',
            '2018-01-20',
            '2018-01-21',
            '2018-01-22',
            '2018-01-23',
            '2018-01-24',
            '2018-01-25',
            '2018-01-26',
            '2018-01-27',
            '2018-01-28',
            '2018-01-29',
            '2018-01-30'
            ],
            ['data1',
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
        ],
        type: 'bar',
        labels: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false
    },
    axis: {
        x: {
            show: true,
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        },
        y: {
            show: true,
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    // padding: {
    //     left: 40,
    //     right: 20
    // },
    color: {
        pattern: ['#0088cc']
    },
    transition: {
        duration: 100
    },
    bar: {
        width: {
            ratio: 0.8 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100000);
};

// analytics area chart
var chart = c3.generate({
    bindto: '#analytics',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            '2018-01-06',
            '2018-01-07',
            '2018-01-08',
            '2018-01-09',
            '2018-01-10',
            '2018-01-11',
            '2018-01-12',
            '2018-01-13',
            '2018-01-14',
            '2018-01-15',
            '2018-01-16',
            '2018-01-17',
            '2018-01-18',
            '2018-01-19',
            '2018-01-20',
            '2018-01-21',
            '2018-01-22',
            '2018-01-23',
            '2018-01-24',
            '2018-01-25',
            '2018-01-26',
            '2018-01-27',
            '2018-01-28',
            '2018-01-29',
            '2018-01-30'
            ],
            ['data1',
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
        ],
        type: 'area',
        labels: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: true
    },
    axis: {
        x: {
            show: true,
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        },
        y: {
            show: true,
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    // padding: {
    //     left: 40,
    //     right: 20
    // },
    color: {
        pattern: ['#0088cc']
    },
    transition: {
        duration: 100
    },
    bar: {
        width: {
            ratio: 0.8 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 50000);
};

// areachart
var chart = c3.generate({
    bindto: '#area',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            ],
            ['data1',
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
            ],
            ['data2',
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
            ]
        ],
        type: 'area'
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 200
    },
    padding: {
        left: 40,
        right: 20
    },
    color: {
        pattern: ['#0088cc', '#89C4F4']
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 500000);
};
// areachart w/ bezier curves
var chart = c3.generate({
    bindto: '#spline',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            ],
            ['data1',
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
            ],
            ['data2',
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
            ]
        ],
        type: 'spline'
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 200
    },
    padding: {
        left: 40,
        right: 20
    },
    color: {
        pattern: ['#4CAF50', '#1B5E20']
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 200);
};
// areachart w/ bezier curves
var chart = c3.generate({
    bindto: '#donut',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            ],
            ['data1',
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
            ],
            ['data2',
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
            ]
        ],
        type: 'donut'
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y'
            }
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 200
    },
    donut: {
        label: {
            show: false,
        },
        width: 10,
    },
    padding: {
        left: 40,
        right: 20
    },
    color: {
        pattern: ['#4CAF50', '#1B5E20']
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000);
};
var randomScalingFactorNegative = function() {
    return Math.round(Math.random() * -2000);
};
// stackedbarchart
var chart = c3.generate({
    bindto: '#bar-yums',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            '2018-01-06',
            '2018-01-07',
            '2018-01-08',
            '2018-01-09',
            '2018-01-10',
            '2018-01-11',
            '2018-01-12',
            '2018-01-13',
            '2018-01-14',
            '2018-01-15',
            '2018-01-16',
            '2018-01-17',
            '2018-01-18',
            '2018-01-19',
            '2018-01-20',
            '2018-01-21',
            '2018-01-22',
            '2018-01-23',
            '2018-01-24',
            '2018-01-25',
            '2018-01-26',
            '2018-01-27',
            '2018-01-28',
            '2018-01-29',
            '2018-01-30',
            '2018-01-31',
            ],
            ['Yums distributed',
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
            ['Yums spent',
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative(),
            randomScalingFactorNegative()
            ]
        ],
        type: 'bar',
        groups: [
            ['Yums distributed', 'Yums spent']
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y',
                // rotate: -45,
            }
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 200
    },
    // padding: {
    //     left: 40,
    //     right: 40
    // },
    color: {
        pattern: ['#4CAF50', '#E57373']
    },
    bar: {
        width: {
            ratio: 0.6 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////
var randomScalingFactor = function() {
    return Math.round(Math.random() * 1000);
};
// zoomable combined chart
var chart = c3.generate({
    bindto: '#combined',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            '2018-01-06',
            '2018-01-07',
            '2018-01-08',
            '2018-01-09',
            '2018-01-10',
            '2018-01-11',
            '2018-01-12',
            '2018-01-13',
            '2018-01-14',
            '2018-01-15',
            '2018-01-16',
            '2018-01-17',
            '2018-01-18',
            '2018-01-19',
            '2018-01-20',
            '2018-01-21',
            '2018-01-22',
            '2018-01-23',
            '2018-01-24',
            '2018-01-25',
            '2018-01-26',
            '2018-01-27',
            '2018-01-28',
            '2018-01-29',
            '2018-01-30',
            '2018-01-31',
            ],
            ['data1',
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
            ['data2',
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
        ],
        type: 'bar',
        types: {
            data2: 'line',
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y',
                // rotate: -45,
            }
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 300
    },
    // padding: {
    //     left: 40,
    //     right: 40
    // },
    color: {
        pattern: ['#4CAF50', '#2196F3']
    },
    subchart: {
        show: true,
        size: {
            height: 20
        }
    },
    legend: {
        position: 'right'
    },
    bar: {
        width: {
            ratio: 0.6 // this makes bar width 50% of length between ticks
        }
    }
});

// ===========
// ===SCRUM===
// ===========

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var randomScalingFactorMini = function() {
    return Math.round(Math.random() * 5);
};
// velocity
var chart = c3.generate({
    bindto: '#bar-velocity',
    data: {
        x:'x',
        columns: [
            ['x',
            '#40',
            '#41',
            '#42',
            '#43',
            '#44',
            '#45'
            ],
            ['data1',
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            ['data2',
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            ['data3',
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        ],
        type: 'bar',
        types: {
            data1: 'bar',
            data2: 'bar',
            data3: 'line'
        },
        labels: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: true
    },
    axes: {
        data1: 'y',
        data2: 'y',
        data3: 'y2',
    },
    axis: {
        x: {
            show: true,
            type: 'category',
        },
        y: {
            show: true,
            default: [0, 100]
        },
        y2: {
            tick: {count: 5},
            show: true,
            max: 5,
            default: [0, 5]
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 212,
    },
    color: {
        pattern: ['#eeeeee', '#81C784', '0088cc']
    },
    transition: {
        duration: 100
    },
    bar: {
        width: {
            ratio: 0.4 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////

// cumulative flow
var chart = c3.generate({
    bindto: '#bar-cumulative',
    data: {
        x:'x',
        columns: [
            ['x',
            '2018-01-01',
            '2018-01-02',
            '2018-01-03',
            '2018-01-04',
            '2018-01-05',
            '2018-01-06',
            '2018-01-07',
            '2018-01-08',
            '2018-01-09',
            '2018-01-10'
            ],
            ['closed',
                0,
                0,
                1,
                4,
                4,
                6,
                6,
                12,
                12,
                16,
            ],
            ['in progress',
                3,
                7,
                7,
                5,
                9,
                8,
                8,
                2,
                8,
                6
            ],
            ['open',
                24,
                20,
                19,
                18,
                14,
                13,
                13,
                13,
                7,
                5
            ]
        ],
        type: 'bar',
        groups: [
            ['closed', 'in progress', 'open']
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d-%m-%Y',
                // rotate: -45,
            }
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 200
    },
    color: {
        pattern: ['#4CAF50', '#FFEB3B', '#2196F3']
    },
    bar: {
        width: {
            ratio: 0.6 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////

// throughput
var chart = c3.generate({
    bindto: '#bar-throughput',
    data: {
        x:'x',
        columns: [
            ['x',
            '#40',
            '#41',
            '#42',
            '#43',
            '#44',
            '#45'
            ],
            ['User stories',
                13,
                15,
                10,
                8,
                5
            ],
            ['Tasks',
                2,
                1,
                1,
                0,
                0
            ],
            ['Bugs',
                0,
                3,
                0,
                10,
                1
            ]
        ],
        type: 'bar',
        groups: [
            ['User stories', 'Tasks', 'Bugs']
        ]
    },
    axis: {
        x: {
            type: 'category',
            tick: {
                format: '%d-%m-%Y',
                // rotate: -45,
            }
        }
    },
    grid: {
        focus: {
          show: false
        }
    },
    size: {
        height: 200
    },
    color: {
        pattern: ['#2196F3', '#FFEB3B', '#F44336']
    },
    bar: {
        width: {
            ratio: 0.6 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
////
