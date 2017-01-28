function toggleMenu() {
	var siteNav = document.getElementById('site-nav');
	if(siteNav.className == "open") {
		siteNav.className = "";
	} else {
		siteNav.className = "open";
	}
}