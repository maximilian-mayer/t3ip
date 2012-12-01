# Add the following uncommented line, to the root sys_template Setup to include this file
# <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/setup.ts">


# Read in the templates for changes in tt_content, lib.stdHeader etc.
 #<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/System/CssStyledContent/setup.ts">
 <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/System/CssStyledContent/csc-new.ts">

# Read in the templates for the extensions.
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Extension/FeLogin/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Extension/IndexedSearch/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Extension/TtNews/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Extension/JqueryColorbox/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Extension/WtSpamshield/setup.ts">

# Read in the templates for the menu parts, like the default menu setup, language menu, header- and footermenu's.
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Menu/menu.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Menu/menu.firstlevel.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Menu/menu.secondlevel.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Menu/menu.top.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Menu/menu.language.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Menu/menu.breadcrumb.ts">

# Read in the Lib (Blocks) templates containing TypoScript to generate the building blocks for your website, except menu's.
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Block/lib.logo.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Block/lib.content.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Block/lig.contentleft.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Block/lib.contentright.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Block/lib.searchbox.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Block/lib.sitetitle.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Block/lib.stage.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Block/lib.footer.ts">

# Read in the templates for the page, like page setup, config and header data.
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Page/page.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Page/page.config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Page/page.meta.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Page/page.headerData.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Page/page.includeCSS.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/responsive/TypoScript/Page/page.footerData.ts">

// temp
plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >
