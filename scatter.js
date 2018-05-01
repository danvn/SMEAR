var chart = c3.generate({
    bindto:"#scatter",
    data: {
        xs: {
            rockies: 'rockiesSalary',
            dodgers: 'dodgersSalary',
        },
        // iris data from R
        columns: [
            ["rockiesSalary", 22000000, 17750000, 16000000, 12333333, 10000000, 8500000, 7500000, 7000000],
            ["dodgersSalary", 35571428, 18000000, 11333333, 7900000, 7833333, 6000000, 3125000, 2600000],
            ["rockies", 50000, 50000, 50000, 86700, 85600, 50000, 50000, 50000],
            ["dodgers", 93000, 523000, 67800, 125000, 112000, 105000, 299000, 448000]
        ],
        type: 'scatter'
    },
    axis: {
        x: {
            label: 'Sepal.Width',
            tick: {
                fit: false
            }
        },
        y: {
            label: 'Petal.Width'
        }
    }
});

var playerNames = [
  ["Ian Desmond","Nolan Arenado", "Wade Davis", "Charlie Blackmon", "Gerardo Parra", "D.J. LeMahieu", "Bryan Shaw", "Michael Dunn"],
  []
]

// setTimeout(function () {
//     chart.load({
//         xs: {
//             virginica: 'virginica_x'
//         },
//         columns: [
//             ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
//             ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
//         ]
//     });
// }, 1000);

// setTimeout(function () {
//     chart.unload({
//         ids: 'rockies'
//     });
// }, 2000);
