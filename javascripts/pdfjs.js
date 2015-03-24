/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

'use strict';
//LOOK AT THIS FANCY ASS JS I LEARNED LIKE WHAT EVEN ARE PROMISES
//fetch using promises!
PDFJS.getDocument('EWanResume.pdf').then(function(pdf) {
  pdf.getPage(1).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);

//prepare the-canvas from resume.html
    var canvas = document.getElementById('the-canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

//render pdf into canvas
    var renderContest = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});
