function ucbheader(){
	document.write('<img src="ucb.png" border="0" usemap="#UCBMap" /><map name="UCBMap" id="UCBMap"><area shape="rect" coords="11,3,298,27" href="http://www.colorado.edu/" alt="University of Colorado at Boulder" target="_blank" /><area shape="rect" coords="794,7,828,25" href="http://www.colorado.edu/" alt="CU Home" target="_blank" /><area shape="rect" coords="835,7,873,25" href="http://www.colorado.edu/search/" alt="CU Search" target="_blank"  /><area shape="rect" coords="880,7,916,25" href="http://www.colorado.edu/atoz/" alt="CU A to Z" target="_blank"  /><area shape="rect" coords="925,7,949,25" href="http://www.colorado.edu/campusmap/" alt="Campus Map" target="_blank" /></map>');
}

function ucbfooter(){
	document.write('<a target="_blank" href="http://www.colorado.edu"><img src="wordmark.png" alt="University of Colorado at Boulder" /></a>');	
}

function nav() {
	document.write(' \
		<div id="nav"> \
		<ul> \
			<li><a href="index.html">Home</a></li> \
			<!--<li><a href="page1.html">Teaching</a></li>--> \
			<li><a href="CV.html">CV</a></li> \
			<li><a href="Projects.html">Projects</a></li> \
			<li><a href="People.html">People</a></li> \
			<!--<li><a href="page5.html">Contact</a></li>-->\
		</ul> \
		</div> \
		');
}

function banner(){
	document.write(' \
	    <div id="banner"> \
    	<div id="name"> \
    	<h1>Dr. Sherri Cook</h1> \
    	<p>Assistant Professor</p> \
    	<p>Department of Civil, Environmental</p> \
    	<p>and Architectural Engineering</p> \
    	</div> \
    </div> \
	');
}
