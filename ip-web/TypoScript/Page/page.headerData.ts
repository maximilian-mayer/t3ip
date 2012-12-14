/*
The PAGE HEADERDATA template.

All config.headerData contents goes in here. This could be almost everything
that belongs in the <head>, but does not have any configuration like
page.config, page.includeCSS or page.includeJS or needs special
configuration, like dynamic handling.
*/


page.headTag = <head><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

#page.headerData.1 = TEXT
#page.headerData.1.value = <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

page.headerData {
	199 = TEXT
	199.wrap = <style>|</style>
	199.value (

@font-face {
    font-family: 'Share-Regular';
    src: url('/fileadmin/responsive/fonts/Share-Regular-webfont.eot');
    src: url('/fileadmin/responsive/fonts/Share-Regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fileadmin/responsive/fonts/Share-Regular-webfont.woff') format('woff'),
         url('/fileadmin/responsive/fonts/Share-Regular-webfont.ttf') format('truetype'),
         url('/fileadmin/responsive/fonts/Share-Regular-webfont.svg#Share-Regular') format('svg');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'Share-Bold';
    src: url('/fileadmin/responsive/fonts/Share-Bold-webfont.eot');
    src: url('/fileadmin/responsive/fonts/Share-Bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fileadmin/responsive/fonts/Share-Bold-webfont.woff') format('woff'),
         url('/fileadmin/responsive/fonts/Share-Bold-webfont.ttf') format('truetype'),
         url('/fileadmin/responsive/fonts/Share-Bold-webfont.svg#Share-BoldRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}

	)
	200 = TEXT
	200.dataWrap = <script src="{$filepaths.scripts}vendor/modernizr-2.6.1.min.js">|</script>

}


