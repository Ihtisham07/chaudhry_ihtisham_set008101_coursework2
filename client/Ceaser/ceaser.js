function ceaser(){
  var q = document.getElementById("input").value;
  var w = document.getElementById("text").value;
  var collection = Number(q)
  console.log(collection);
  var output='';
  for (var i = 0, len = w.length; i < len; i++) {
    if (w[i] == w[i].toUpperCase()){
      var l = w[i].charCodeAt(0);
      var k = (((l - 65 + collection) % 26) + 97);
      output = output + String.fromCharCode(k).toUpperCase();
    }
    else if (w[i] == w[i].toLowerCase()){
      var l = w[i].charCodeAt(0);
      var k = (((l - 97 + collection) % 26) + 97);
      output = output + String.fromCharCode(k);
    }
    else {
      output = output + w[i];
    }
  }
  document.getElementById('output').value = output ;
}