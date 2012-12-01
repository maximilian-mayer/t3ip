/*
The PAGE OBJECT template.

Tells the PAGE object to use the parsed HTML template from the automaketemplate extension.
*/

# Make the PAGE object
page = PAGE
page {
	# Regular pages always have typeNum = 0
	typeNum = 0

	# Add the icon that will appear in front of the url in the browser
	# This icon will also be used for the bookmark menu in browsers
	shortcutIcon = {$filepaths.images}favicon.ico

	# Add a FLUIDTEMPLATE object to the page
  10 = FLUIDTEMPLATE
  10 {
    layoutRootPath = {$filepaths.layouts}
    #partialRootPath = {$filepaths.partials}
    file.cObject = CASE
    file.cObject {
      key.field = backend_layout
      key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
      default = TEXT
      default.value = {$filepaths.templates}main-template.html
      2 = TEXT
      2.value = {$filepaths.templates}index-template.html
  }

}
