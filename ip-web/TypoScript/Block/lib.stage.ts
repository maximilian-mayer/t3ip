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
    <li class="icon-ok-circle"> Yes, it‘s responsive</li>
    <li class="icon-ok-circle"> Change the language</li>
    <li class="icon-ok-circle"> New standard theme</li>
    <li class="icon-ok-circle"> HTML5/CSS3 featured</li>
</ul>
		)
	}
}
[end]
