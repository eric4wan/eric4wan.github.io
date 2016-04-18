var c0 = c3.generate({
    bindto: '#c0',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      axes: {
        data2: 'y2' // ADD
      }
    },
    axis: {
      y2: {
        show: true // ADD
      }
    }
});

c3.generate({
    bindto: '#c1',
    data: {
      columns: [
        ['data1', 5, 5, 6, 2, 5, 250]
      ]
    },
    axis: {
      y2: {
        show: true // ADD
      }
    }
});
