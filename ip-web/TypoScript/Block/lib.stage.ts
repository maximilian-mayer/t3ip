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
    <li><i class="icon ico-tick" aria-hidden="true"></i> Yes, it‘s responsive</li>
    <li><i class="icon ico-tick" aria-hidden="true"></i> Change the language</li>
    <li><i class="icon ico-tick" aria-hidden="true"></i> New standard theme</li>
    <li><i class="icon ico-tick" aria-hidden="true"></i> HTML5/CSS3 featured</li>
</ul>
		)
	}
}
[end]
