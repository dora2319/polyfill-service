Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({locale:"gd",categories:{cardinal:["one","two","few","other"],ordinal:["one","two","few","other"]},fn:function(e,o){var t=String(e).split("."),l=Number(t[0])==e;return o?1==e||11==e?"one":2==e||12==e?"two":3==e||13==e?"few":"other":1==e||11==e?"one":2==e||12==e?"two":l&&e>=3&&e<=10||l&&e>=13&&e<=19?"few":"other"}});