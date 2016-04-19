Array.prototype.SumArray = function (arr) {
    var sum = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 0; i < arr.length; i++) {
            sum.push(parseFloat(this[i]) + parseFloat(arr[i]));
        }
    }
    return sum;
}

Array.prototype.DivFiddy = function () {
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i] / 50;
  }
  return this;
}

Array.prototype.Trunc = function() {
  var short = [];
  for (var i = 2; i < this.length; i++) {
    short.push(this[i]);
  }
  return short;
}

Papa.parse("http://eric4wan.github.io/output.csv", {
	download: true,
	complete: function(results) {
    console.log(results);
    graphs(results.data);
	}
});

function graphs(d) {

  c3.generate({
    bindto: '#other',
    data: {
      columns: [
        ['IBM', 0.215, 0.522, 0.0, 0.525, 0.929, 0.787, 0.813, 0.119],
        ['BBC', 0.483, 0.308, 0.214, 0.79, 0.418, 0.581, 0.263, 0.1],
        ['BF', 0.136, 0.217, 0.187, 0.554, 0.682, 0.662, 0.618, 0.324]
      ]
    },
    axis: {
      x: {
        type: 'category',
        categories: ["Analytical", "Confident", "Tentative", "Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional Range"]
      },
      y: {
        max: 0.7
      }
    },
    legend: {
      position: 'right'
    }
  });

  var allCats = [];
  var bindStr = '#c';

  for (var i = 0; i < 23; i++) {
    var arrFiddy = d[1 + 50 * i];
    for (var j = 1; j < 50; j++) {
        arrFiddy = arrFiddy.SumArray(d[i + j]);
    }
    arrFiddy = arrFiddy.DivFiddy();
    arrFiddy = arrFiddy.Trunc();
    allCats.push(arrFiddy);
    var resStr = bindStr + i;

    c3.generate({
      bindto: resStr,
      data: {
        columns: [
          ['data'].concat(arrFiddy)
        ]
      },
      axis: {
        x: {
          type: 'category',
          categories: ["Analytical", "Confident", "Tentative", "Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional Range"]
        }
      },
      legend: {
        position: 'right'
      }
    });
  }

  c3.generate({
    bindto: '#all',
    data: {
      columns: [
        ['Business'].concat(allCats[0]),
        ['Weather'].concat(allCats[1]),
        ['Utilities'].concat(allCats[2]),
        ['Travel'].concat(allCats[3]),
        ['Sports'].concat(allCats[4]),
        ['Social Networking'].concat(allCats[5]),
        ['Reference'].concat(allCats[6]),
        ['Productivity'].concat(allCats[7]),
        ['Photo & Video'].concat(allCats[8]),
        ['News'].concat(allCats[9]),
        ['Navigation'].concat(allCats[10]),
        ['Music'].concat(allCats[11]),
        ['Lifestyle'].concat(allCats[12]),
        ['Health & Fitness'].concat(allCats[13]),
        ['Games'].concat(allCats[14]),
        ['Finance'].concat(allCats[15]),
        ['Entertainment'].concat(allCats[16]),
        ['Education'].concat(allCats[17]),
        ['Books'].concat(allCats[18]),
        ['Food & Drink'].concat(allCats[19]),
        ['Medical'].concat(allCats[20]),
        ['Newsstand'].concat(allCats[21]),
        ['Catalogs'].concat(allCats[22])
      ]
    },
    axis: {
      x: {
        type: 'category',
        categories: ["Analytical", "Confident", "Tentative", "Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional Range"]
      }
    },
    legend: {
      position: 'right'
    }
  });

}
