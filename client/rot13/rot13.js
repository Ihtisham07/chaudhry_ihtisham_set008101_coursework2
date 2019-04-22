function rot13(c) {
	let offset = 0;

	let charCodeNumber = c.charCodeAt();

	if (charCodeNumber >= 97 && charCodeNumber <= 122) offset = 97;
	if (charCodeNumber >= 65 && charCodeNumber <= 90) offset = 65;

	if (offset) {
		return String.fromCharCode(((charCodeNumber - offset + 13) % 26) + offset);
	}
	return c;
}

$(document).ready(function () {
	$('#decrypted').on("input", function () {
		$('#encrypted').text(this.value.split('').map(function (element) {
			return rot13(element);
		}).join(''))
	});
});
