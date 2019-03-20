const debounced = function(f, milliseconds) {
  let defer;

  return function() {
    if (defer) {
      clearTimeout(defer);
    }

    defer = setTimeout(f, milliseconds)
  }
}
