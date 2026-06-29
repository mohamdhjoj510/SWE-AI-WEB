# Paper & presentation files

Drop the PDF files for the "Papers" section in this folder. Files placed here
are served from the site root (e.g. a file named `2402.13521v2.pdf` here is
reachable at `/papers/2402.13521v2.pdf`).

Expected files for the "Test-Driven Development for Code Generation" group
(referenced in `src/data/papers.js`):

- `2402.13521v2.pdf` — the paper itself. Opened by the **קריאת המאמר** button.
- `tdd-for-code-generation.pdf` — the Hebrew slide deck by Mohammad Hajuj &
  Naief Hajuj. Opened by the **צפייה במצגת** button.

> The file names must match exactly (case-sensitive on most hosts). To use
> different names, update `paperUrl` / `presentationUrl` in `src/data/papers.js`.

To add another group's files: place the PDFs here and set their `paperUrl` /
`presentationUrl` to `papers/<file-name>.pdf`.
