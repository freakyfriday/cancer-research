---
description: How to add and verify references in research articles
---

# Reference Linking Standard

## Golden Rule

**NEVER trust a PMID from memory or generation. ALWAYS verify by loading the PubMed page and confirming the title matches.**

## Step-by-Step Process

### 1. Find the paper on PubMed

Search PubMed using author + key title words:
```
https://pubmed.ncbi.nlm.nih.gov/?term=AuthorLastName+keyword1+keyword2+year&sort=relevance
```

### 2. Verify the PMID

// turbo
- Open `https://pubmed.ncbi.nlm.nih.gov/PMID/` 
- **Confirm the page title matches** the paper you're referencing
- If the title does NOT match → the PMID is WRONG. Search again.

### 3. Link Format

**If found on PubMed** — use PubMed link:
```markdown
N. Author A, et al. *"[Exact paper title.](https://pubmed.ncbi.nlm.nih.gov/VERIFIED_PMID/)"* Journal Name. Year. (NIH/PubMed)
```

**If NOT on PubMed** — use Google Scholar search:
```markdown
N. Author A, et al. *"[Exact paper title.](https://scholar.google.com/scholar?q=key+words+from+title)"* Journal Name. Year.
```

**If on a publisher site** (ACS, ScienceDirect, Springer, etc.) — use the direct publisher URL:
```markdown
N. Author A, et al. *"[Exact paper title.](https://publisher-url/path)"* Journal Name. Year. (Publisher Name)
```

### 4. Priority Order for Links

1. **PubMed** (preferred — verified PMID, stable, free access to abstract)
2. **Publisher direct link** (DOI-based, e.g., ACS, ScienceDirect, Springer)
3. **Google Scholar search** (fallback when no PubMed entry and no direct publisher link)

### 5. Verification Checklist

Before committing any reference:

- [ ] PMID verified by loading the actual PubMed page
- [ ] Page title matches the claimed paper title
- [ ] Author names match
- [ ] Journal and year are correct
- [ ] If no PubMed entry exists, Google Scholar or publisher link is used instead

### 6. Common Mistakes to Avoid

- **NEVER hallucinate PMIDs** — they will almost certainly point to wrong papers
- **NEVER assume a PMID is correct** without loading the page
- **NEVER copy PMIDs from AI-generated text** without verification
- When a PubMed search returns the paper as the top result, get the PMID from the search results page (look for `cauthor_id=XXXXXXX` or `PMID: XXXXXXX` in the page content)
