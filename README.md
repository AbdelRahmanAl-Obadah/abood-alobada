# abood alobada

> abood alobada — built with HTML

## Tech Stack

- **Language:** HTML
- **Databases:** Firebase

## Installation

```bash
git clone https://github.com/YOUR_USERNAME/abood alobada.git
cd abood alobada
```

## License

See [LICENSE](LICENSE) for details.

## 🔐 Environment Variables

This repository originally contained hard-coded secrets. They were
automatically detected and **replaced with placeholders** before upload —
nothing sensitive was pushed to GitHub.

| Variable | Type detected |
|----------|---------------|
| `APIKEY` | Google API Key |

### How to run this project

1. Copy the example env file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in your own real values for the variables above.
3. Make sure your code reads them from the environment (e.g. `os.environ["APIKEY"]` in Python, or `process.env.APIKEY` in Node) instead of the hard-coded values that were removed.
4. `.env` is already git-ignored — never commit your real secrets.
