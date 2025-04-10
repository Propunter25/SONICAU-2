function bbscriptOnClick() {
  var allowedHistorylength = 2;

  if (history.length < allowedHistorylength) {
    history.pushState(null, null, '#');
  }

  window.onpopstate = function (e) {
    if (e.state !== null) {
      document.title = e.state.title;
      load(e.state.url);
    } else {
      location.replace("https://stransensilions.com/410b7762-912d-4a8e-bf10-fa6e0e675d86");
    }
  }
}
