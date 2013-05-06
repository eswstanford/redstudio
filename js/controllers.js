/*
	functions for RED Studio
*/


function gotoMap(){
	chrome.app.window.create('../modules/map.html', {
    'width': 400,
    'height': 400,
    'left': 400,
    'top': 0
  });
});
}
