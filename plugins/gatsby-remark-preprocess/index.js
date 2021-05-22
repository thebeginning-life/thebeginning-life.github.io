/*

(theme "theme")
(tn "translator's note")
(sn "study note")
(dig "dig-deeper note(/dig-deeper-note)")
(vs 1)
(mk "1:3")
(xr "Book 3:23")

*/

exports.rules = [
    { regex: /\(vs ([0-9]+?)\)/g, replacement:
      '<small><sup class="verse" id="$1">$1&nbsp;</sup></small>' },
    { regex: /\(theme "(.*?)"\)/g, replacement: '<span class="theme">$1</span>' },
    { regex: /\(tn "(.*?)"\)/g, replacement: '[^ *$1*]' },
    // cross-refernces within Mark
    {
        regex: /\(mk "([0-9]+?)"\)/g,
        replacement:
        '<label class="margin-toggle"></label>' +
            '<input type="checkbox" class="margin-toggle"/>' +
            '<span class="marginnote">Mark <a href="/mark-$1">$1</a></span>',
    },
    {
        regex: /\(mk "([0-9]+?):([0-9]+?)"\)/g,
        replacement:
        '<label class="margin-toggle"></label>' +
            '<input type="checkbox" class="margin-toggle"/>' +
            '<span class="marginnote">Mark <a href="/mark-$1#$2">$1:$2</a></span>',
    },
    {
        regex: /\(mk "([0-9]+?):([0-9]+?)-([0-9]+?):([0-9]+?)"\)/g,
        replacement:
        '<label class="margin-toggle"></label>' +
            '<input type="checkbox" class="margin-toggle"/>' +
            '<span class="marginnote">Mark <a href="/mark-$1#$2">$1:$2</a> - <a name="mkxr" href="/mark-$3#$4">$3:$4</a></span>',
    },
    { regex: /\(sn "(.*?)"\)/g, replacement: '[^{-} $1]' },
    // Dig deeper
    {
        regex: /\(key "([a-zA-Z'\.:!\(\) ]*?)\/(.*?)\"\)/g,
        replacement:
        '<label class="margin-toggle"></label>' +
            '<input type="checkbox" class="margin-toggle"/>' +
            '<span class="marginnote"><a href="$2">🔑 $1</a></span>',
    },
    // Chapter and verse (range)
    {
        regex: /\(xr "(([1-3]?[ ]?[a-zA-Z ]+?) ([0-9]+?):([0-9]+?[0-9\-]*?))"\)/g,
        replacement:
        '<label class="margin-toggle"></label>' +
            '<input type="checkbox" class="margin-toggle"/>' +
            '<span class="marginnote"><a target="xrefs" href="https://www.bible.com/bible/116/$2.$3.$4">*$1*</a></span>',
    },
    // Entire chapter
    {
        regex: /\(xr "(([1-3]?[ ]?[a-zA-Z ]+?) ([0-9]+?))"\)/g,
        replacement:
        '<label class="margin-toggle"></label>' +
            '<input type="checkbox" class="margin-toggle"/>' +
            '<span class="marginnote"><a target="xrefs" href="https://www.bible.com/bible/116/$2.$3.NLT">*$1*</a></span>',
    }
]

exports.mutateSource = ({ markdownNode }) => {
  this.rules.forEach((rule) => {
    markdownNode.internal.content = markdownNode.internal.content.replace(
      rule.regex,
      rule.replacement,
    )
  })
  return markdownNode.internal.content
}
