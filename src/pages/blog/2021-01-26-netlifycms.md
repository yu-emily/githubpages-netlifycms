---
template: post-template
title: NetlifyCMS
date: 2021-01-26T19:35:39.622Z
author: Emily Yu
feature-image: ../images/netlifycms.png
alt-text: NetlifyCMS logo
excerpt: Talking about implementing NetlifyCMS.
---
From **Gatsby - Sourcing from Netlify CMS**\
\
Netlify CMS is an open source, single page app written in React that lets you edit content and data files in your Git repository. Storing raw content right in the static site repository is an ideal approach, allowing both code and content to be versioned together, but that requires non-technical editors to interact with a service like GitHub. Netlify CMS was created specifically to bridge this gap, providing a solid interface that works well for technical and non-technical users alike, and interacts with your static site repository via API so that every change results in a commit.

A primary focus of Netlify CMS is to work well with modern site generators like Gatsby. Installation typically requires just an index.html file and a YAML configuration file, but you’re going to leverage the Gatsby plugin for Netlify CMS to automatically install and build the CMS along with a static site.