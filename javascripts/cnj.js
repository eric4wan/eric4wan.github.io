Array.prototype.SumArray = function (arr) {
    var sum = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 2; i < arr.length; i++) {
            sum.push(this[i] + arr[i]);
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
    arrFiddy = d[1]
    for (var j = 1; j < 51; j++) {
      arrFiddy.SumArray(d[(i * 50 + j)]);
    }
    arrFiddy = arrFiddy.DivFiddy();
    $('#graphs').append("<div id='" + i + "|" + j + "|" + 1 + "'></div>");
    c3.generate({
      bindto: (bindStr + i.toString()),
      data: {
        columns: [
          ['data'].concat(arrFiddy)
        ]
      }
    });
  }
}
