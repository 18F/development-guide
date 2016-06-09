## 18F Guides Template

18F is promoting team best practices across speciality areas through guilds. These guilds support their members in whatever way deemed most appropriate by those members themselves. [This branch](https://github.com/18F/frontend/tree/research) houses guild research into its membership needs.

## Guides
These guides are in different points in the review process.

- Published guides: https://pages.18f.gov/frontend/
- Unpublished guides: [pages](pages/)
- Drafts: [pulls](https://github.com/18F/frontend/pulls?q=is%3Aopen+label%3Adraft+is%3Apr)

## How to track what we're doing, and how you can be involved!

We use issues in this repo to track work. They are accessible in a nice visual, prioritized form on [our waffle board](https://waffle.io/18F/frontend).

Also, the Frontend Guild Roadmap is in [the wiki](https://github.com/18F/frontend/wiki), and research into what the guild should be doing to support frontend practice at 18F is kept in [this branch](https://github.com/18F/frontend/tree/research).

### How Guild best practices are developed

1. Team members suggest needs in issues, and guild leads identify issues through [research](https://github.com/18F/frontend/tree/research).
2. If resolving these issues requires documentation, a draft document is created in an internal Google Doc that is open to comment and announced to #frontend for contribution. NB: You can see all in-process docs in [this internal folder](https://drive.google.com/drive/u/1/#folders/0B84F26FpUP0lR1B2VVNGSi1MMVk/0B0C6PKlzps2JV3pqX3NJdm5WejA/0B5HeQa_YQ6-VTTlkVEFNZ2VWZEU/0B2CjDILjK8_jfmp1c2ZJM2d0eEtGSHFEeS1CenlHWEQ0S01jcWJfZXNObElUQV9Yei0wZ2s).
3. Once a relatively clear and stable version emerges, an alert is posted to #dev, #frontend and #design for more review and comment.
4. Once comments are resolved, the guide is posted publicly (location dependent on content).
5. The best practice or guide is announced to the entire 18F Team via #news and email.

### How to create a new guide

1. Fork or clone the frontend repo. `git clone git@github.com:18F/frontend.git`
2. Create a new branch for your guide, prefixed with `draft-`. `git checkout -b draft-a_new_guide`
3. Create a markdown(md) file in the pages directory for your guide. `touch pages/draft-a_new_guide.md`
4. After editing add, commit and push changes. `git add pages && git commit && git push origin draft-a_new_guide`
5. Create a pull request on github.
6. Label your pull request with `draft`.
7. Post in #frontend slack channel for comment.

If ready for publishing, you or someone else can move your guide to the 18f-pages branch so it appears on pages.18f.gov/frontend.

### How to edit or suggest changes to an existing guide

The frontend space is rapidly changing and all our guides are living documents. Once they are published as guides on 18F Guides, please suggest edits or changes via pull request.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

> All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
