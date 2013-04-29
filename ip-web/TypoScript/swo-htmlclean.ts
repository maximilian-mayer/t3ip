/**
 * xhtml
 *
 * @description:	markup cleanings for better HTML output
 *
 * @author:				Sven Wolfermann <sven@maddesigns.de>
 * @dependencies:
 * @required:
 * @constants:
 * @version:			1.0
 */


/**
 * remove additional CSS classes in header
 */
lib.stdheader.3 = LOAD_REGISTER
lib.stdheader.3.headerClass =
lib.stdheader.3.headerClass.noTrimWrap = |
lib.stdheader.stdWrap.dataWrap = |

/**
 * header tags
 */
#lib.stdheader.stdWrap.dataWrap = |
#lib.stdheader.10.1.dataWrap = <h1>|</h1>
#lib.stdheader.10.2.dataWrap = <h2>|</h2>
#lib.stdheader.10.3.dataWrap = <h3>|</h3>
#lib.stdheader.10.4.dataWrap = <h4>|</h4>
#lib.stdheader.10.5.dataWrap = <h5>|</h5>

/**
 * remove comments and unnecessary stuff
 */
tt_content.stdWrap.dataWrap >
tt_content.stdWrap.prepend.dataWrap >
tt_content.stdWrap.prefixComment >
tt_content.header.20.dataWrap >
tt_content.header.20.prefixComment >
tt_content.default.prefixComment >
tt_content.text.stdWrap.prefixComment >
tt_content.text.20.prefixComment >
tt_content.textpic.20.stdWrap.prefixComment >
tt_content.table.20.stdWrap.prefixComment >
tt_content.mailform.20.stdWrap.wrap >
tt_content.menu.20.stdWrap.prefixComment >
tt_content.image.20.stdWrap.prefixComment >
tt_content.list.20.stdWrap.prefixComment >

/**
 * remove cleargif and spaces
 */
tt_content.image.20.spaceBelowAbove = 0
tt_content.header.stdWrap.space = 0|0
tt_content.stdWrap.space = 0|0
tt_content.stdWrap.spaceBefore = 0
tt_content.stdWrap.spaceAfter = 0
lib.stdheader.stdWrap.space = 0|0
lib.stdheader.10.stdWrap.wrap = |
tt_content.textpic.20.spaceBelowAbove = 0
tt_content.image.20.spaceBelowAbove = 0
tt_content.textpic.20.noStretchAndMarginCells = 1
tt_content.image.20.noStretchAndMarginCells = 1
tt_content.text.20.parseFunc.tags.typohead.stdWrap.space = 0|0

/**
 * <typolist> and <typohead>
 */
tt_content.text.20.parseFunc.tags.typolist.breakoutTypoTagContent = 1
tt_content.text.20.parseFunc.tags.typohead.breakoutTypoTagContent = 1
tt_content.text.20.parseFunc.tags.typohead.stdWrap.wrap >
tt_content.text.20.parseFunc.nonTypoTagStdWrap >
tt_content.text.20.parseFunc.nonTypoTagStdWrap.encapsLines {
addAttributes {
  P.style =
  PRE.style =
}
encapsTagList = div, p, script
remapTag.DIV = P
wrapNonWrappedLines = |

innerStdWrap_all.ifEmpty =
innerStdWrap_all.textStyle < tt_content.text.20.textStyle
}

tt_content.text.20.textStyle >
tt_content.text.20.wrap >



/**
 * RTE tuning
 */
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.remapTag >
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.DIV.class >

/**
 * Activate constants in parseFunc
 */
#lib.parseFunc_RTE.constants = 1

/**
 * don' wrap these tags with p tag
 */
#lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.encapsTagList = script, div, p, h1, h2, h3, h4, h5, h6, hr, blockquote

/**
 * remove newline in headlines
 */
#lib.parseFunc_RTE.externalBlocks.blockquote.callRecursive.tagStdWrap.HTMLparser.tags.blockquote.overrideAttribs =
#lib.parseFunc_RTE.externalBlocks = table,hr,ul,ol,blockquote,h1,h2,h3,h4,h5,h6,script,address
#lib.parseFunc_RTE.externalBlocks.hr.stripNL = 1
#lib.parseFunc_RTE.externalBlocks.h1.stripNL = 1
#lib.parseFunc_RTE.externalBlocks.h2.stripNL = 1
#lib.parseFunc_RTE.externalBlocks.h3.stripNL = 1
#lib.parseFunc_RTE.externalBlocks.h4.stripNL = 1
#lib.parseFunc_RTE.externalBlocks.h5.stripNL = 1
#lib.parseFunc_RTE.externalBlocks.h6.stripNL = 1
#lib.parseFunc_RTE.externalBlocks.h6.stripNL = 1
#lib.parseFunc_RTE.externalBlocks.address.stripNL = 1

#lib.parseFunc.allowTags < lib.parseFunc.allowTag_RTE
#lib.parseFunc.externalBlocks = table,hr,ul,ol,blockquote,h1,h2,h3,h4,h5,h6,script,div,script, noscript, address
