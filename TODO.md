# Content

* Add wheat graphic to sidebar with appropriate media queries and sizing constraints
* Hook up TOC / chapter / about pages
* Process parenthesis directives in text for verse numbers, sidebar notes, etc.
* Generate TOC from (theme directives in the text

# UX improvements

* Turn into a PWA (Progressive Webapp)
* Move all Github interaction into the background service worker / cache

# New reader features

* Highlighting
* User-defined topics
  * (Basically tags)
  * Can have parents/children
  * (Maybe parent topics can be called topic groups?  UX concerns here...)
* Bookmarks
  * Can be assigned topics
* Notes documents.
  * Again, assign a topic or few
  * Real-time shared editing when Social services are implemented.
* Add your own sidebar notes.  Threaded once social is implemented.
  * Each sidebar note thread is assigned a topic when it's created.  (Can be created in-place)
  * Show and hide sidebar notes by topic
* Backup/restore your own sidebar notes/highlights/documents to your PC/tablet/phone
* Indexed keyword / topical search
  * Searching for a parent topic in the topic graph also searches for child topics
  * Sharing a parent topic shares child topics also

# Social

* Privacy first.
* All personal data is encrypted in transit and at rest.
* p2p using (Gun | IPFS/libp2p | ???)
  * If IPFS then prompt to install IPFS server browser plugin and use the user's browser as the pinning service for their data.
  * But identity services are *hard* on IPFS

## Identity services

* Add contact via QR code scanner (for phones).
* Or Matrix integration for identity services?
  * (Integrate with a Matrix mobile app for social p2p services?)
* Or some other already-social p2p service?
* Store your public key (public inbox) in one or more of your social media profiles
* Social OAuth login & import contacts if desired (Facebook, Twitter, Google, etc.)?

## Features

* Share highlights/notes/documents
  * Individually
  * All highlights/notes/documents with some topic (tag) or topics
* Threaded discussion on other peoples' shared highlights/notes
