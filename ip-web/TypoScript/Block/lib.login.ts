/*
TypoScript template which compiles the contents for the right column on the pages.
*/

lib.login = COA
lib.login {
	10 = TEXT
	10 {
		value = Login
		typolink {
			parameter= {$contentpage.loginpageID}
			ATagParams = class="m-login icon-locked"
			wrap = <span class="text">|</span>
			ATagBeforeWrap = 1
			}
	}
}

