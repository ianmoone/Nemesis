var chart = AmCharts.makeChart("chartdiv",
                {
                    "type": "serial",
                    "pathToImages": "http://cdn.amcharts.com/lib/3/images/",
                    "categoryField": "category",
                    "colors": [
                        "#3498db",
                        "#27ae60",
                        "#e67e22",
                        "#e74c3c",
                        "#2980b9",
                        "#c0392b"
                    ],
                    "startDuration": 1,
                    "categoryAxis": {
                        "gridPosition": "start"
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "fillAlphas": 1,
                            "id": "AmGraph-1",
                            "title": "graph 1",
                            "type": "column",
                            "valueField": "Column 1"
                        },
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "columnWidth": 1,
                            "fillAlphas": 1,
                            "id": "AmGraph-2",
                            "title": "graph 2",
                            "type": "column",
                            "valueField": "Column 2"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "title": "Nb de réservations"
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "useGraphSettings": true
                    },
                    "titles": [
                        {
                            "id": "Title-1",
                            "size": 15,
                            "text": ""
                        }
                    ],
                    "dataProvider": [
                        {
                            "category": "1",
                            "Column 1": "9",
                            "Column 2": "5"
                        },
                        {
                            "category": "2",
                            "Column 1": "5",
                            "Column 2": "19"
                        },
                        {
                            "category": "3",
                            "Column 1": "3",
                            "Column 2": "13"
                        },
                        {
                            "category": "4",
                            "Column 1": "10",
                            "Column 2": "12"
                        },
                        {
                            "category": "5",
                            "Column 1": "9",
                            "Column 2": "18"
                        },
                        {
                            "category": "6",
                            "Column 1": "21",
                            "Column 2": "19"
                        },
                        {
                            "category": "7",
                            "Column 1": "6",
                            "Column 2": "19"
                        },
                        {
                            "category": "8",
                            "Column 1": "14",
                            "Column 2": "16"
                        },
                        {
                            "category": "9",
                            "Column 1": "3",
                            "Column 2": "16"
                        },
                        {
                            "category": "10",
                            "Column 1": "20",
                            "Column 2": "10"
                        },
                        {
                            "category": "11",
                            "Column 1": "13",
                            "Column 2": "11"
                        },
                        {
                            "category": "12",
                            "Column 1": "9",
                            "Column 2": "22"
                        },
                        {
                            "category": "13",
                            "Column 1": "4",
                            "Column 2": "13"
                        },
                        {
                            "category": "14",
                            "Column 1": "11",
                            "Column 2": "21"
                        },
                        {
                            "category": "15",
                            "Column 1": "11",
                            "Column 2": "12"
                        },
                        {
                            "category": "16",
                            "Column 1": "2",
                            "Column 2": "14"
                        },
                        {
                            "category": ""
                        }
                    ]
                }
            );