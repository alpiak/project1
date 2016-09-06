
$(function() {

	// 控制左导航条折叠子菜单行为

	function menuScrollToggle() {
		var $this = $(this);

		$this.toggleClass("open").children("ul").stop(1, 0).slideToggle();
		if ($this.hasClass("open")) {
			$this.siblings(".open").removeClass("open")
			.children("ul").stop(1, 0).slideUp();
		}
	}

	function menuToggle() {
		$(this).children("ul").toggle();
	}

	$("#menu").delegate(".parent.scroll", "click", menuScrollToggle);
	$("#menu").delegate(".parent.toggle", "mouseenter mouseleave", menuToggle);

	// 弹出缩小左导航条

	$("#nav-button").click(function() {
		$("#left-column").toggleClass("active");
		$("#menu").children(".parent").toggleClass("scroll").toggleClass("toggle");
		$("#menu").find("ul").css("display", "none");
		$(".open").removeClass("open");
	})
});