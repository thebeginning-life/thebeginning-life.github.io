# Notes

## Tweak project to use Hoplon:

https://yogthos.net/posts/2016-06-06-WorkingWithHoplon.html


## Git implementation

```html
<script src="https://unpkg.com/@isomorphic-git/lightning-fs"></script>
<script src="https://unpkg.com/isomorphic-git@beta"></script>
<script type="module">
import http from 'https://unpkg.com/isomorphic-git@beta/http/web/index.js'
// Initialize isomorphic-git with a file system
window.fs = new LightningFS('fs')
// I prefer using the Promisified version honestly
window.pfs = window.fs.promises
</script>
```

https://isomorphic-git.org/docs/en/quickstart.html
