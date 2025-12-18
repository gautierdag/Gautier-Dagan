# Gautier Dagan - Personal Website

A minimal single-page personal website. Publications are auto-fetched from Semantic Scholar.

## Local Development

```bash
# Preview locally
python -m http.server 8000
```

## Structure

```
├── index.html         # The website (edit this)
├── style.css          # Minimal CSS (dark mode, responsive, print-friendly)
├── assets/
│   ├── images/        # Profile photo, favicon
│   └── pdfs/          # CV and other documents
├── CNAME              # Custom domain (gautier.tech)
└── robots.txt
```

## Deployment

Just push to GitHub. Enable GitHub Pages in repo settings (Settings → Pages → Source: main branch).

## Updating

- **Content**: Edit `index.html` directly
- **Publications**: Auto-fetched from Semantic Scholar API on page load
- **CV**: Replace `assets/pdfs/Gautier_Dagan_CV.pdf`

- **Bio/Experience**: Edit `template.html`
- **Publications**: Run `FETCH_PUBLICATIONS=true python build.py` or let GitHub Actions update weekly
- **CV**: Replace `assets/pdfs/Gautier_Dagan_CV.pdf`
