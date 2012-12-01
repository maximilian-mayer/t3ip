
lib.skip = TEXT
lib.skip {
	value (
	<a href="#search" class="ym-skip">Direkt zur Suche</a><span class="ym-hideme">.</span>
	<a href="#content" class="ym-skip">Direkt zum Inhalt</a><span class="ym-hideme">.</span>
	<a href="#navigation" class="ym-skip">Direkt zur Navigation</a><span class="ym-hideme">.</span>
	)
}


/**
 * insert lib.logo.ts
 */
lib.logo = COA
lib.logo {
	wrap = <h1 class="logo">|</h1>
	10 = IMAGE
	10 {
		file = {$filepaths.images}TYPO3-logo-new.png
		ext = svg
		altText = TYPO3 CMS Logo
		stdWrap.typolink {
			parameter = {$contentpage.homeID}
			title = back to home
		}
	}
}

[globalVar = TSFE:id = {$contentpage.homeID}
lib.logo.10.stdWrap.typolink >
[end]
