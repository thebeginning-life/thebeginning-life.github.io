# Notes

## Tweak project to use Hoplon:

https://yogthos.net/posts/2016-06-06-WorkingWithHoplon.html


## Git implementation

```html
<script src="https://unpkg.com/@isomorphic-git/lightning-fs"></script>
<script src="https://unpkg.com/isomorphic-git@1.7.8"></script>
<script type="module">

import http from 'https://unpkg.com/isomorphic-git@beta/http/web/index.js'

// Initialize isomorphic-git with a file system
window.fs = new LightningFS('fs')
// I prefer using the Promisified version honestly
window.pfs = window.fs.promises
window.dir = '/beginning'
console.log(dir);
await pfs.mkdir(dir);
// Behold - it is empty!
await pfs.readdir(dir);
await git.clone({
  fs,
  http,
  dir,
  corsProxy: 'https://cors.isomorphic-git.org',
  url: 'https://github.com/thebeginning-life/thebeginning-life.github.io',
  ref: 'master',
  singleBranch: true,
  depth: 10
});

// Now it should not be empty...
await pfs.readdir(dir);
await git.log({fs, dir})
await git.status({fs, dir, filepath: 'README.md'})
await pfs.writeFile(`${dir}/README.md`, 'Very short README', 'utf8')
await git.status({fs, dir, filepath: 'README.md'})
await git.add({fs, dir, filepath: 'README.md'})
await git.status({fs, dir, filepath: 'README.md'})

let sha = await git.commit({
  fs,
  dir,
  message: 'Delete package.json and overwrite README.',
  author: {
    name: 'Mr. Test',
    email: 'mrtest@example.com'
  }
})

console.log(sha)
</script>
```

https://isomorphic-git.org/docs/en/quickstart.html
