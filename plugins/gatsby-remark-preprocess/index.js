/*

(theme "theme")
(tn "translator's note")
(sn "study note")
(vs 1)
(xr "Book 3:23")

*/

exports.rules = [
  { regex: /\(vs ([0-9]+?)\)/g, replacement: '<small><sup>$1<a name="$1"></a></sup></small>' },
  { regex: /\(theme "(.*?)"\)/g, replacement: '<span class="theme">$1</span>' },
  { regex: /\(tn "(.*?)"\)/g, replacement: '[^ *$1*]' },
  { regex: /\(sn "(.*?)"\)/g, replacement: '[^{-} $1]' },
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
  },
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
