
$(function() {
	function menuToggle() {
		var $that = $(this);

		$that.toggleClass("open").nextAll("ul").slideToggle(null, function() {
			$that.one("click", menuToggle);
		});
	}
	
	$(".parent").one("click", menuToggle);
});