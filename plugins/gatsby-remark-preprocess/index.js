/*

(theme "theme")
(tn "translator's note")
(sn "study note")
(vs 1)
(xr "Book 3:23")

*/

exports.rules = [
  // image
  //{
  //  regex: /!\[([^[]+)\]\(([^)]+)\)/g,
  //  replacement: "<img src='$2' alt='$1'>",
  //},
  { regex: /\(vs ([0-9]+?)\)/g, replacement: '<small><sup>$1</sup></small>' },
  { regex: /\(theme "(.*?)"\)/g, replacement: '<span class="theme">$1</span>' },
  { regex: /\(tn "(.*?)"\)/g, replacement: '[^ *$1*]' },
  { regex: /\(sn "(.*?)"\)/g, replacement: '[^{-} $1]' },
  {
    regex: /\(xr "(([1-3]?[ ]?[a-zA-Z ]+?) ([0-9]+?):([0-9]+?[0-9\-]*?))"\)/g,
    replacement: '',
    //   '<label class="margin-toggle"></label>' +
    //   '<input type="checkbox" class="margin-toggle"/>' +
    //   '<span class="marginnote">[See also *$1*](https://www.bible.com/bible/116/$2.$3.$4)</span>',
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