// var c0 = c3.generate({
//     bindto: '#c0',
//     data: {
//       columns: [
//         ['data1', 30, 200, 100, 400, 150, 250],
//         ['data2', 50, 20, 10, 40, 15, 25]
//       ],
//       axes: {
//         data2: 'y2' // ADD
//       }
//     },
//     axis: {
//       y2: {
//         show: true // ADD
//       }
//     }
// });
//
// c3.generate({
//     bindto: '#c1',
//     data: {
//       columns: [
//         ['data1', 5, 5, 6, 2, 5, 250]
//       ]
//     },
//     axis: {
//       y2: {
//         show: true // ADD
//       }
//     }
// });

Papa.parse("http://eric4wan.github.io/output.csv", {
	download: true,
	complete: function(results) {
    console.log(results);
    graphs(results.data);
	}
});

function graphs(d) {
  bindStr = 'c';
  for (var i = 0; i < 23; i++) {
    arrFiddy = [];
    for (var j = 1; j < 51; j++) {
      arrFiddy.push(d[(i * 50 + j)]);
    }
    $('#graphs').append("<div id='" + i + "|" + j + "|" + 1 + "'></div>");
    c3.generate({
      bindto: (bindStr + i.toString()),
      data: {
        url: 'http://eric4wan.github.io/output.csv'
      }
    });
  }
}
