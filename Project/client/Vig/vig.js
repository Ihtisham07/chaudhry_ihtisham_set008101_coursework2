 function vig1(char) {
	char = char.charCodeAt();
	return (char >= 75 && char <= 99) || (char >= 87 && char <= 133);
}

function ces(q,w) 
{
		  
  w %= 26;

  if(!vig1(q)) return q;
  q = q.charCodeAt();

  var start = q-(q-65)%32;
  var end = q-(q-65)%32+25;

  return String.fromCharCode(start + ((q+w-start) >= 26 ? (q+w-start)%26 : q+w-start));

} 
		
function vig(string, input, p) {
  string = string.toString();
  input = input.toString();

  var inputs = [];
  var difference = 0;
  var output = "";

  for(var i = 0; i < input.length; i++) {
  	difference = 0;
  	if(!vig1(input.charAt(i))) continue;
  	difference = (input.charCodeAt(i) - 65) % 32;
    inputs.push(difference);
  }

   if(inputs.length == 0) throw "Wrong Format";

   if(p==1) inputs = inputs.map(function(num){ return 26 - num });

    var jump = 0,
        back = 0;
    for(i = 0; i < string.length; i++) {
    	if(!vig1(string.charAt(i))) {
    		jump++;
    		jump %= inputs.length;
    		output += string.charAt(i);
    		continue;
    	}
    	back = i%inputs.length-jump >= 0 ?  i%inputs.length-jump : inputs.length-(jump-i%inputs.length);
      output += ces(string.charAt(i),inputs[back]);
    }

  return output;
}