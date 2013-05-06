chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('modules/home.html', {
    id: 'embedder',
    bounds: {
      width: 600,
      height: 600
    }
  });
});