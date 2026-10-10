> **This repository is archived.** The Foundation's current home is
> [www.aigovops-foundation.com](https://www.aigovops-foundation.com/).

# AiGovOps Foundation

> **Governance that ships with code, not after it ships.**

Open-source rebuild of [aigovopsfoundation.org](https://www.aigovopsfoundation.org/) using only Google AI tools — and published as a free, public GitHub Pages site.

## Live site
https://aigovops-foundation.github.io/aigovops-foundation/

## Built entirely with Google AI tools
| Tool | Role |
|------|------|
| **NotebookLM** | Messaging brief, FAQ, briefing doc, mind map, infographic, Episode 0 Audio Overview |
| **Pomelli** | Brand DNA extraction + 4 launch campaign creatives |
| **Stitch** | Full responsive design system + exportable HTML/CSS/JS |
| **Flow (Veo 3.1)** | 8-second cinematic hero videos |
| **GitHub Pages** | Free public hosting via Actions workflow |

See [`TOOL_WORKFLOW.md`](./TOOL_WORKFLOW.md) for the evidence trail of which Google tool produced each artifact — making this repo itself an example of *evidence over intent*.

## Four Pillars
1. **Governance as Code** — policy, controls, and approvals expressed as versioned code.
2. **AI Technical Debt Elimination** — find and retire shadow models, undocumented prompts, untested agents.
3. **Operational Compliance** — EU AI Act, NIST AI RMF, ISO 42001 as continuous controls.
4. **Community-Driven Standards** — open reference implementations, neutral interoperability.

## Develop locally
```bash
git clone https://github.com/bobrapp/aigovops-foundation.git
cd aigovops-foundation
python3 -m http.server 8000
```

## Deploy
Push to `main` → GitHub Actions → Pages auto-publishes within ~60 seconds.

## License
MIT — see [LICENSE](./LICENSE).
