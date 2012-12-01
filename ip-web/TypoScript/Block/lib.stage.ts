lib.stage = COA
lib.stage {
	wrap = <section class="m-stage"><div class="inner-wrap">|</div></section>

	10 = TEXT
	10 {
		dataWrap = <h2><span class="firstline">{page:title}</span><span class="secondline">###subtitle</span></h2>
		outerWrap = <section class="wrapper grid-6633"><div class="col1">|
	}
	20 =< lib.searchbox
	20 {
		stdWrap.outerWrap = </div>|</section>
		stdWrap.innerWrap = <div class="col2">|</div>
	}
}
