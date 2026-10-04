# Radiag Board — Static UI

Static product shell for **Radiag Board** (framework deferred).

## Open locally

```bash
python3 -m http.server 8080 --directory radiag-board
```

Open `http://localhost:8080/`.

## Pages

| File | Role |
|---|---|
| `index.html` | Splash: circular logo spin → auto to login |
| `login.html` | Email/username + password login |
| `overview.html` | Placeholder Board entry after login |
| `assets/logo.png` | Official Radiag Board product logo |

Append `?preview=1` to the intro URL to keep the splash without redirect.
