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
  var allCats = [];
  var bindStr = '#c';

  for (var i = 0; i < 23; i++) {
    var arrFiddy = d[1];
    for (var j = 2; j < 51; j++) {
        arrFiddy = arrFiddy.SumArray(d[j]);
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
        ['d0'].concat(allCats[0]),
        ['d1'].concat(allCats[1]),
        ['d2'].concat(allCats[2]),
        ['d3'].concat(allCats[3]),
        ['d4'].concat(allCats[4]),
        ['d5'].concat(allCats[5]),
        ['d6'].concat(allCats[6]),
        ['d7'].concat(allCats[7]),
        ['d8'].concat(allCats[8]),
        ['d9'].concat(allCats[9]),
        ['d10'].concat(allCats[10]),
        ['d11'].concat(allCats[11]),
        ['d12'].concat(allCats[12]),
        ['d13'].concat(allCats[13]),
        ['d14'].concat(allCats[14]),
        ['d15'].concat(allCats[15]),
        ['d16'].concat(allCats[16]),
        ['d17'].concat(allCats[17]),
        ['d18'].concat(allCats[18]),
        ['d19'].concat(allCats[19]),
        ['d20'].concat(allCats[20]),
        ['d21'].concat(allCats[21]),
        ['d22'].concat(allCats[22])
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
