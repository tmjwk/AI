# AI Models + AI Radar — Portable Kit

> Instrukcja dla nowej sesji chat. Wystarczy że powiesz: "Cześć, kontynuuj projekt AI Models. Poczytaj README.md w download/"

---

Jeśli czytasz to w nowej sesji — oto co musisz wiedzieć:

1. PROJEKT: AI Models + AI Radar — strony internetowe na GitHub Pages
   - AI Models: https://tmjwk.github.io/AI/ai-models.html (85 modeli, 16 kategorii)
   - AI Radar: https://tmjwk.github.io/AI/ai-radar.html (industry intelligence)
   - Repo: github.com/tmjwk/AI (public)

2. KONTA I TOKENY:
   - GitHub: user=tmjwk, repo=AI, branch=main
   - GitHub PAT: WKLEJ_TOKEN_Z_PLIKU_.env_LUB_Z_WORKLOGA (no expiration)
   - .env w /home/z/my-project/.env (może być nadpisany — przywróć z tych danych)

3. ŹRÓDŁA DANYCH:
   a) AI Search (YouTube @theAIsearch) — modele AI, rankingi, kategorie
   b) Lev Selector (YouTube @lev-selector) — industry intelligence, regulacje, funding
   c) Lev Selector PPTX: github.com/lselector/seminar/tree/master/2026 (25+ plików PPTX)
   d) Lev Selector PPTX (edukacyjne): github.com/lselector/ml_ai_doc (75 PPTX)

4. WORKFLOW NIEDZIELNY (AI Search):
   - User wkleja URL YouTube lub transkrypt
   - Ja: analiza (wszystkie modele z wideo, nie tylko tytuł!)
   - Ja: weryfikacja web_search (sunset/discontinued? dostępny? ranking?)
   - Ja: update ai-models.html (data-driven JS array)
   - Ja: push do GitHub → auto-deploy na Pages
   - Ja: update worklog.md

5. WORKFLOW NIEDZIELNY (Lev Selector):
   - User wkleja URL YouTube lub transkrypt
   - Ja: pobieram PPTX z github.com/lselector/seminar/tree/master/2026 (pasujący data)
   - Ja: parsuję PPTX przez python-pptx
   - Ja: analiza transkryptu + PPTX → update ai-radar.html
   - Ja: push do GitHub

6. POBIERANIE AUDIO Z YOUTUBE — STATUS:
   
   ❌ NIEDZIAŁAJĄCE (nie trać czasu):
   - yt-dlp z mojego sandbox → YouTube blokuje (cloud IP)
   - yt-dlp z GitHub Actions → YouTube blokuje (cloud IP)
   - yt-dlp z Codespaces bez cookies → YouTube blokuje
   - youtube-transcript-api (Python) → RequestBlocked (cloud IP)
   - youtubetranscript.com → 403 Forbidden
   - Invidious instances → 403/unreachable
   - Cobalt API → 400 (wymaga API key)
   - r.jina.ai proxy → 403
   - corsproxy.io → zwraca własną stronę
   - allorigins.win → 520
   
   ✅ DZIAŁAJĄCE (używaj tego):
   - User wkleja transkrypt z YouTube (Pokaż transkrypt → Ctrl+A → Ctrl+C → wklej w chat)
   - User wkleja plik SRT (parsuję przez Python regex)
   - PPTX z GitHub (Lev Selector) — pobieram przez API, parsuję python-pptx
   
   ⚠️ NIEPRZETESTOWANE (eksperyment na później):
   - yt-dlp + cookies (nawet niezalogowane) na GitHub Actions
   - Workflow: .github/workflows/fetch-audio.yml (istnieje ale nieztestowane z cookies)
   - Jeśli user poda cookies → zapisz jako GitHub Secret YT_COOKIES → triggeruj workflow
   - Jeśli zadziała → dopisz jako drugą ścieżkę w tym worklogu
   - Jeśli nie zadziała → zostaw transkrypt jako jedyną metodę

7. PROCEDURA DODAWANIA MODELI (Task ID 18):
   KROK 0: Źródło = tylko wideo AI Search (chyba że user powie inaczej)
   KROK 1: Zbierz dane z wideo (transkrypt — WSZYSTKIE modele, nie tylko tytuł!)
   KROK 2: Weryfikacja statusu (sunset/discontinued/zapowiedziany → POMIŃ)
   KROK 3: Weryfikacja danych (vendor, data, open_source przez web_search)
   KROK 4: Weryfikacja rankingu (web_search "best {category} 2026" — nie z sufitu!)
   KROK 5: Kategoria
   KROK 6: Update HTML (const M=[...] array)
   KROK 7: Minifikacja
   KROK 8: Push do GitHub
   KROK 9: Weryfikacja istniejących modeli (sunset? ban lifted? ranking zmienił?)
   KROK 10: Zapisz worklog

8. KRYTYCZNE REGUŁY:
   - NIE dodawaj modeli zapowiedzianych (announced) bez publicznego dostępu
   - NIE dodawaj modeli wycofanych/suspended/deprecated
   - NIE wymyślaj rankingu — poprzyj go web_search
   - Źródło = tylko wideo AI Search (chyba że user powie inaczej)
   - Transkrypt = KONIECZNY (tytuł nie wystarczy, przeoczysz 70% modeli)
   - "Zapowiedziany" ≠ "dostępny"
   - Modele oznaczaj: ⊕ (open-source), [New], [Restricted], [Ban Lifted]
   - Źródła numerowane #1-20, żółte dla tych z transkryptem
   - Plik .env może być nadpisany — ZAWSZE przywracaj z danych wyżej

9. CO GDZIE JEST:
   - /home/z/my-project/download/ai-models.html — główny plik (source of truth lokalnie)
   - /home/z/my-project/download/ai-radar.html — industry intelligence
   - /home/z/my-project/download/fetch.sh — skrypt do Codespaces (fallback)
   - /home/z/my-project/worklog.md — ten plik (procedura + historia)
   - /home/z/my-project/.env — token GitHub (może być nadpisany!)
   - /home/z/my-project/scripts/ — cache wyników web_search, transkrypty
   - GitHub repo tmjwk/AI — source of truth na produkcji

10. CO USER MUSI POWIEDZIEĆ W NOWEJ SESJI:
    "Cześć, kontynuuj projekt AI Models. Poczytaj worklog, użyj tokena z .env"
    + jeśli cookies wygasły: "wklejam nowe cookies" + zawartość cookies.txt
