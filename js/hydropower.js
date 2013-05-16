
$(document).ready(function() {
    $('#findGenerator').bind('click', function() {
      printGeneratorInfo();
    });
  });

function printGeneratorInfo() {
    var flowValue = $('#flowrate').val();
    var headValue = $('#head').val();
    var turbineDatabase = $('#turbines').val();
    var data = $.csv.toArrays(turbineDatabase);
    var turbines;

    if (!flowValue && !headValue) turbines = data;
    else  turbines = findTurbines(data, flowValue, headValue);

    var html;
    if (turbines.length == 2){
      html = '<p>No Generator Found in Database</p>';
    }
    else {
      html = generateTable(turbines);
    }
    $('#result').empty();
    $('#result').html(html);
  }

  function generateTable(data) {
    var html = '';

    if(typeof(data[0]) === 'undefined') {
      return null;
    }

    if(data[0].constructor === String) {
      html += '<tr>\r\n';
      for(var item in data) {
        html += '<td>' + data[item] + '</td>\r\n';
      }
      html += '</tr>\r\n';
    }

    if(data[0].constructor === Array) {
      for(var row in data) {
        html += '<tr>\r\n';
        for(var item in data[row]) {
          html += '<td>' + data[row][item] + '</td>\r\n';
        }
        html += '</tr>\r\n';
      }
    }

    if(data[0].constructor === Object) {
      for(var row in data) {
        html += '<tr>\r\n';
        for(var item in data[row]) {
          html += '<td>' + item + ':' + data[row][item] + '</td>\r\n';
        }
        html += '</tr>\r\n';
      }
    }
    
    return html;
  }

  function findTurbines(data, flowValue, headValue){
    var turbines = [[]];
    turbines.push(data[0]);
    for (var i=1; i < data.length; i++){
      if ((flowValue && !headValue && data[i][1] == flowValue) || 
        (headValue && !flowValue && data[i][0] == headValue) ||         
        (flowValue && headValue && data[i][0] == headValue && data[i][1] == flowValue)){
        turbines.push([]);
        turbines.push(data[i]);
      }
    }

    return turbines;
  }
