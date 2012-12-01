/*
The CSS template.

Includes all necessarry Cascading Style Sheets by referring to the file on the
server and configuring the media type.

Special condition comment wrap for including extra CSS file for Internet Explorer lower than IE9.
*/

page.includeCSS {
	style = {$filepaths.css}style.css

	ltIE9 = {$filepaths.css}ltIE9.css
	ltIE9.media = screen
	ltIE9.allWrap = <!--[if lt IE 9]>|<![endif]-->
}
