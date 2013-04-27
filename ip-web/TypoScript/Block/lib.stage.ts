lib.stage = COA
lib.stage {
	10 = TEXT
	10.dataWrap = <h2><span class="firstline">{page:title}</span><span class="secondline">{page:subtitle}</span></h2>
}


[globalVar = TSFE:id = 1]
lib.stage {
	20 = TEXT
	20 {
		value (
			<ul class="m-featurelist">
			    <li class="icon-checkmark">Yes, it‘s responsive</li>
			    <li class="icon-checkmark">New modern theme</li>
			    <li class="icon-checkmark">HTML5 Markup, CSS3 Styles</li>
			    <li class="icon-checkmark">free to use</li>
			</ul>
		)
	}
}
[end]
