// AI Radar data — V4 auto-generated from radar.json (Nurt 2: bilingual)
// Schema: SECTIONS = [{id, num, icon, title, type, cards[{desc_pl, desc_en}]/items[{html_pl, html_en}]/headers+rows}]
// NIE EDYTUJ RĘCZNIE — użyj: python3 scripts/data_cli.py

const SECTIONS = [
  {
    "id": "who",
    "num": 1,
    "icon": "🏢",
    "title": "KTO ROBI CIEKAWE RZECZY",
    "type": "cards",
    "cards": [
      {
        "title": "Z.AI (Zhipu AI)",
        "tags": [
          {
            "color": "green",
            "text": "Open-source"
          },
          {
            "color": "blue",
            "text": "Chiny"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Wypuścił GLM 5.2 — open-source MoE 745B, bije frontier modele w programowanie. 1/6 kosztu GPT-5.5. Zcode (analog Claude Code) wciąż ustępuje Anthropic.",
        "desc_en": "Released GLM 5.2 — open-source MoE 745B, beats frontier models in coding. 1/6 the cost of GPT-5.5. Zcode (Claude Code analog) still lags Anthropic."
      },
      {
        "title": "ByteDance",
        "tags": [
          {
            "color": "yellow",
            "text": "3 releasy"
          },
          {
            "color": "blue",
            "text": "Chiny"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "3 releasy w 1 tygodniu: Seedance 2.5 (4K video), Seed 2.1 (productivity agent), Dance OPD (unified image). Najbardziej aktywna firma tygodnia.",
        "desc_en": "3 releases in 1 week: Seedance 2.5 (4K video), Seed 2.1 (productivity agent), Dance OPD (unified image). Most active company of the week."
      },
      {
        "title": "Sakana AI",
        "tags": [
          {
            "color": "blue",
            "text": "Japonia"
          },
          {
            "color": "yellow",
            "text": "Paid"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Fugu Ultra — orchestration layer (nie base model). Koordynuje wiele modeli przez 1 API. Bije Claude Fable na niektórych benchmarkach. $5/$30 API.",
        "desc_en": "Fugu Ultra — orchestration layer (not base model). Coordinates multiple models via 1 API. Beats Claude Fable on some benchmarks. $5/$30 API."
      },
      {
        "title": "Reflection AI",
        "tags": [
          {
            "color": "green",
            "text": "Funded"
          },
          {
            "color": "blue",
            "text": "USA"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "$6.3B deal z SpaceX — Colossus 2 data center, $150M/miesiąc do 2029. Dostęp do NVIDIA GB300. Dołącza do Anthropic, Google, Cursor.",
        "desc_en": "$6.3B deal with SpaceX — Colossus 2 data center, $150M/month until 2029. Access to NVIDIA GB300. Joins Anthropic, Google, Cursor."
      },
      {
        "title": "Subquadratic",
        "tags": [
          {
            "color": "green",
            "text": "Startup"
          },
          {
            "color": "blue",
            "text": "USA"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Miami startup — 12M token kontekst, 50x szybszy niż FlashAttention, 20x tańszy. SSA architecture. Hosted API.",
        "desc_en": "Miami startup — 12M token context, 50x faster than FlashAttention, 20x cheaper. SSA architecture. Hosted API."
      },
      {
        "title": "Lev Selector",
        "tags": [
          {
            "color": "green",
            "text": "Edukacja"
          },
          {
            "color": "blue",
            "text": "USA"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Ph.D., 40+ lat w software. Weekly AI updates co piątek. 6.96K subs, 293 videos. Slides na GitHub (75 PPTX) + Google Drive.",
        "desc_en": "Ph.D., 40+ years in software. Weekly AI updates every Friday. 6.96K subs, 293 videos. Slides on GitHub (75 PPTX) + Google Drive."
      },
      {
        "title": "Ornith AI",
        "desc_pl": "Open-source agentic coding MoE (9B-397B), harness training wbita w wagi modelu. Bije modele klasy frontier. $100M funding, Santa Clara.",
        "desc_en": "Open-source agentic coding MoE (9B-397B), harness trained into model weights. Beats frontier models. $100M funding, Santa Clara.",
        "tags": [
          {
            "color": "green",
            "text": "Open-source"
          },
          {
            "color": "blue",
            "text": "USA"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "CoreWeave AREA",
        "desc_pl": "Agent badawczy AI — formuje hipotezy, uruchamia eksperymenty, analizuje wyniki. Dla badań naukowych.",
        "desc_en": "AI research agent — forms hypotheses, triggers experiments, evaluates results. For scientific research.",
        "tags": [
          {
            "color": "green",
            "text": "Funded"
          },
          {
            "color": "blue",
            "text": "USA"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false
      }
    ]
  },
  {
    "id": "possible",
    "num": 2,
    "icon": "⚡",
    "title": "CO JEST OBECNIE MOŻLIWE",
    "type": "list",
    "items": [
      {
        "dot_color": "green",
        "html_pl": "<strong>Uruchomić GLM 5.2 lokalnie</strong> — 1-bit quantized (86% mniejszy), na consumer GPU. Unsloth GGUF versions.",
        "html_en": "<strong>Run GLM 5.2 locally</strong> — 1-bit quantized (86% smaller), on consumer GPU. Unsloth GGUF versions."
      },
      {
        "dot_color": "green",
        "html_pl": "<strong>Tłumaczyć w czasie rzeczywistym</strong> — Gemini 3.5 Live Translate, darmowe, API + Google Translate mobile.",
        "html_en": "<strong>Real-time translation</strong> — Gemini 3.5 Live Translate, free, API + Google Translate mobile."
      },
      {
        "dot_color": "green",
        "html_pl": "<strong>Generować 4K wideo 30s</strong> — Seedance 2.5, do 50 referencji, cinematic clips. Premiera lipiec 2026.",
        "html_en": "<strong>Generate 4K 30s video</strong> — Seedance 2.5, up to 50 references, cinematic clips. Premiere July 2026."
      },
      {
        "dot_color": "green",
        "html_pl": "<strong>Voice cloning z 2B model</strong> — Dot TTS, Apache 2, few-shot, bije leaderboardy.",
        "html_en": "<strong>Voice cloning with 2B model</strong> — Dot TTS, Apache 2, few-shot, beats leaderboards."
      },
      {
        "dot_color": "green",
        "html_pl": "<strong>Mapować mózg bez chirurgii</strong> — Olive, ultrasound, 100x lepsza rozdzielczość niż CT, open-source pipeline.",
        "html_en": "<strong>Map the brain without surgery</strong> — Olive, ultrasound, 100x better resolution than CT, open-source pipeline."
      },
      {
        "dot_color": "green",
        "html_pl": "<strong>Mieć humanoida za $4,900</strong> — Unitree R1, 123cm, kung-fu, fikołki, chód po schodach.",
        "html_en": "<strong>Have a humanoid for $4,900</strong> — Unitree R1, 123cm, kung-fu, flips, stair walking."
      },
      {
        "dot_color": "yellow",
        "html_pl": "<strong>GPT 5.6 Sol</strong> — ograniczony dostęp, zaufani partnerzy only, gov approval customer-by-customer.",
        "html_en": "<strong>GPT 5.6 Sol</strong> — restricted access, trusted partners only, gov approval customer-by-customer."
      },
      {
        "dot_color": "yellow",
        "html_pl": "<strong>Claude Mythos 5</strong> — ban lifted 27.06, tylko ~100 zaufani partnerzy US.",
        "html_en": "<strong>Claude Mythos 5</strong> — ban lifted 06.27, only ~100 trusted US partners."
      },
      {
        "dot_color": "yellow",
        "html_pl": "<strong>AI Glasses</strong> — Google + Gentle Monster + Warby Parker, launch fall 2026.",
        "html_en": "<strong>AI Glasses</strong> — Google + Gentle Monster + Warby Parker, launch fall 2026."
      },
      {
        "dot_color": "red",
        "html_pl": "<strong>Claude Fable 5</strong> — zawieszony przez US gov, brak timeline na powrót.",
        "html_en": "<strong>Claude Fable 5</strong> — suspended by US gov, no timeline for return."
      },
      {
        "dot_color": "red",
        "html_pl": "<strong>Jalapeno chip</strong> — ogłoszony (OpenAI + Broadcom), brak dostępu, gigawatt scale planowany.",
        "html_en": "<strong>Jalapeno chip</strong> — announced (OpenAI + Broadcom), no access, gigawatt scale planned."
      },
      {
        "dot_color": "red",
        "html_pl": "<strong>IBM Nano Stack</strong> — research, 100B tranzystorów na paznokciu, lata od komercjalizacji.",
        "html_en": "<strong>IBM Nano Stack</strong> — research, 100B transistors on a fingernail, years from commercialization."
      }
    ]
  },
  {
    "id": "money",
    "num": 3,
    "icon": "💰",
    "title": "PIENIĄDZE — KTO MA, KTO WYDAJE",
    "type": "cards",
    "cards": [
      {
        "title": "Groq — $650M",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Pivot z chipmakera na wnioskowanie-focused cloud. 6 miesięcy po tym jak NVIDIA licencjowała technologię i przejęła CEO.",
        "desc_en": "Pivot from chipmaker to inference-focused cloud. 6 months after NVIDIA licensed the technology and poached the CEO."
      },
      {
        "title": "Baseten — $1.5B",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Infrastructure dla AI wnioskowanie. Działa na Google Cloud z NVIDIA GPUs. ~60 pracowników, założona 2019, San Francisco.",
        "desc_en": "Infrastructure for AI inference. Runs on Google Cloud with NVIDIA GPUs. ~60 employees, founded 2019, San Francisco."
      },
      {
        "title": "Reflection AI + SpaceX",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "$150M/miesiąc za Colossus 2 data center. Umowa do 2029. NVIDIA GB300 chips. Obok Anthropic, Google, Cursor.",
        "desc_en": "$150M/month for Colossus 2 data center. Contract until 2029. NVIDIA GB300 chips. Alongside Anthropic, Google, Cursor."
      },
      {
        "title": "Merge Labs — $250M",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Seed round prowadzony przez OpenAI. Ultrasound BCI, nieinwazyjny. Alternatywa dla Neuralink.",
        "desc_en": "Seed round led by OpenAI. Ultrasound BCI, non-invasive. Alternative to Neuralink."
      },
      {
        "title": "📈 Orin Token Price Index — inteligencja jako towar",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": true,
        "desc_pl": "Cena tokenów spadła ~1000x w kilka lat. Od GPT-3 (175B, 2020) do multi-trillion param models (2026). AI może podnieść globalny GDP z dziesiątek bilionów do setek bilionów lub kwadrylionów dolarów.<br><br><strong>GLM 5.2</strong> kosztuje 1/6 GPT-5.5 przy podobnej jakości w programowanie.",
        "desc_en": "Token prices dropped ~1000x in a few years. From GPT-3 (175B, 2020) to multi-trillion param models (2026). AI could raise global GDP from tens of trillions to hundreds of trillions or quadrillions of dollars. <strong>GLM 5.2</strong> costs 1/6 of GPT-5.5 at similar coding quality."
      },
      {
        "title": "Microsoft layoffs — 5,000",
        "desc_pl": "Microsoft zwolnił ~5,000 pracowników. Poza tym nic dużego na rynku pracy.",
        "desc_en": "Microsoft laid off ~5,000 employees. Otherwise not much happening in the job market.",
        "tags": [
          {
            "color": "yellow",
            "text": "Layoffs"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false
      }
    ]
  },
  {
    "id": "rules",
    "num": 4,
    "icon": "🏛️",
    "title": "REGULACJE I GEOPOLITYKA",
    "type": "cards",
    "cards": [
      {
        "title": "Trump Executive Order",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Firma musi dać federal government early access (do ~30 dni) do najbardziej zaawansowanych modeli przed publicznym wdrożeniem.",
        "desc_en": "Companies must give federal government early access (up to ~30 days) to most advanced models before public deployment."
      },
      {
        "title": "Anthropic Fable 5 + Mythos 5 — ban",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "US gov zakazał dostępu 12.06.2026 (export control). Mythos ban zdjęty 27.06 (zaufani partnerzy). Fable nadal offline, brak timeline.",
        "desc_en": "US gov banned access 06.12.2026 (export control). Mythos ban lifted 06.27 (trusted partners). Fable still offline, no timeline."
      },
      {
        "title": "OpenAI GPT 5.6 — staggered release",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Gov poprosił o opóźnienie. Najpierw zaufani partnerzy, customer-by-customer approval. Nie dla broad wdrożenie.",
        "desc_en": "Gov requested delay. First trusted partners, customer-by-customer approval. Not for broad deployment."
      },
      {
        "title": "Alibaba — US blacklist",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Gov orgs nie mogą kontraktować. Od 2027 żadnych usług Alibaba. Powód: kontrola CCP. Jack Ma — $2.8B antitrust fine, IPO suspended, \"disappeared\". Inwestorzy stracili zaufanie do chińskiego biznesu.",
        "desc_en": "Gov orgs cannot contract. From 2027 no Alibaba services. Reason: CCP control. Jack Ma — $2.8B antitrust fine, IPO suspended, \"disappeared\". Investors lost trust in Chinese business."
      },
      {
        "title": "Two-class AI gap",
        "desc_pl": "Rząd i duże firmy mają dostęp do najnowszych modeli (GPT 5.6, Mythos 5), reszta otrzymuje modele później lub wcale. Mythos 5 wydany w kwietniu, nadal niepubliczny. Chińczycy odwrotnie — najlepsze modele w open-source.",
        "desc_en": "Government and big companies have access to latest models (GPT 5.6, Mythos 5), everyone else receives models later or never. Mythos 5 released in April, still not public. Chinese do the opposite — best models in open-source.",
        "tags": [
          {
            "color": "yellow",
            "text": "Regulacje"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false
      }
    ]
  },
  {
    "id": "how",
    "num": 5,
    "icon": "🏗️",
    "title": "ARCHITEKTURY I WZORCE",
    "type": "cards",
    "cards": [
      {
        "title": "Agent Map-Reduce",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Orchestrator (conductor) rozdaje zadania sub-agents, ci wysyłają wyniki. Jak Hadoop/Spark dla agentów. Znany też jako: LLM MapReduce, agentowy MapReduce, Fan-out/fan-in, agentowy wide search.",
        "desc_en": "Orchestrator (conductor) distributes tasks to sub-agents, who send results back. Like Hadoop/Spark for agents. Also known as: LLM MapReduce, Agentic MapReduce, Fan-out/fan-in, Agentic wide search."
      },
      {
        "title": "3-Layer Agent Architecture",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "1. Core runtime (możliwości-agnostic, MCP, lazy loading)<br>2. Shared plugins (skills, MCP servers, hooks)<br>3. Per-client config (thin, bez forków)",
        "desc_en": "1. Core runtime (capability-agnostic, MCP, lazy loading)<br>2. Shared plugins (skills, MCP servers, hooks)<br>3. Per-client config (thin, no forks)"
      },
      {
        "title": "Agentic OS — 4 poziomy",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "1. Skills & Automation (workflow audit)<br>2. Memory & State (Obsidian, structured map)<br>3. Interface (visual wrapper/dashboard)<br>4. Distribution (packaging dla teams/clients)",
        "desc_en": "1. Skills & Automation (workflow audit)<br>2. Memory & State (Obsidian, structured map)<br>3. Interface (visual wrapper/dashboard)<br>4. Distribution (packaging for teams/clients)"
      },
      {
        "title": "Brain in the Middle",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Klasyczna app: input → custom software → output.<br>Agent app: input → AI agent (skills, MCP) → output. Agent zastępuje całe custom software.",
        "desc_en": "Classic app: input → custom software → output.<br>Agent app: input → AI agent (skills, MCP) → output. Agent replaces entire custom software."
      },
      {
        "title": "💡 Fable Brain Prompting — 8 instrukcji od Anthropic",
        "tags": [],
        "code": "<span class=\"kw\">1. Act, do not overplan</span> — commit to recommendation<br>\n<span class=\"kw\">2. Lead with the outcome</span> — bottom line first<br>\n<span class=\"kw\">3. Ground every claim</span> — audit against evidence<br>\n<span class=\"kw\">4. Stop only at real boundaries</span><br>\n<span class=\"kw\">5. Assess, do not act uninvited</span><br>\n<span class=\"kw\">6. Give the reason</span><br>\n<span class=\"kw\">7. Provide the context</span><br>\n<span class=\"kw\">8. Match effort to the task</span>",
        "list": [],
        "full_width": true,
        "desc_pl": "<strong>Limit:</strong> To działa dla komunikacji, ale nie tworzy judgment. Model może pewnie podać złą odpowiedź. Nie daje agency (brak tools/internet).",
        "desc_en": "Fable Brain Prompting — 8 instructions from Anthropic for effective AI communication."
      },
      {
        "title": "🔧 Harness Engineering — x6 różnica",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Ten sam model może dać <strong>6x lepsze wyniki</strong> zależnie od otoczka. Kluczowe: kontekst management, memory as hint, tool validation, feedback loops.",
        "desc_en": "The same model can give <strong>6x better results</strong> depending on the harness. Key: context management, memory as hint, tool validation, feedback loops."
      },
      {
        "title": "⏰ Custom Scheduling dla Digital Employee",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "Custom \"mycron\" zamiast system crontab. Browser session persistence, hot-reload (60s), RAND_DELAY (anti-thundering herd), per-minute dedup, isolated per-user logging.",
        "desc_en": "Custom \"mycron\" instead of system crontab. Browser session persistence, hot-reload (60s), RAND_DELAY (anti-thundering herd), per-minute dedup, isolated per-user logging."
      },
      {
        "title": "Harness Training (Ornith)",
        "desc_pl": "Otoczka (harness) wbijana w wagi modelu przez RL. Model uczy się strategii rozwiązywania zadań, nie tylko predykcji tokenu. Wyniki biją modele klasy frontier.",
        "desc_en": "Harness trained into model weights via RL. Model learns problem-solving strategies, not just token prediction. Results beat frontier models.",
        "tags": [
          {
            "color": "green",
            "text": "Breakthrough"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "DeepPark — speculative decoding",
        "desc_pl": "Open-source narzędzie DeepSeek — draft model przewiduje blok tokenów naraz. Do 85% szybciej dla DeepSeek v4, działa z Qwen i Gemma.",
        "desc_en": "Open-source tool from DeepSeek — draft model predicts a block of tokens at once. Up to 85% faster for DeepSeek v4, works with Qwen and Gemma.",
        "tags": [
          {
            "color": "green",
            "text": "Open-source"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "X (Twitter) MCP Server",
        "desc_pl": "X wydał MCP server do zapytań o dane Twittera. Software darmowy, ale dostęp do danych płatny.",
        "desc_en": "X released MCP server for querying Twitter data. Software free, but data access paid.",
        "tags": [
          {
            "color": "green",
            "text": "MCP"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "Google Gemini SQL 2",
        "desc_pl": "Text-to-SQL — tłumaczy język naturalny na wykonywalne, schema-aware zapytania SQL.",
        "desc_en": "Text-to-SQL — translates natural language into executable, schema-aware SQL queries.",
        "tags": [
          {
            "color": "blue",
            "text": "Google"
          }
        ],
        "code": "",
        "list": [],
        "full_width": false
      }
    ]
  },
  {
    "id": "benchmarks",
    "num": 6,
    "icon": "🏆",
    "title": "LM ARENA — RANKINGI (01.07.2026)",
    "type": "table",
    "headers": [
      "#",
      "Model",
      "Score",
      "Status"
    ],
    "rows": [
      [
        "1",
        "Claude Fable 5",
        "1564",
        {
          "tag": {
            "color": "red",
            "text": "Offline"
          }
        }
      ],
      [
        "2",
        "Claude Opus 4.7 thinking",
        "1554",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "3",
        "Claude Opus 4.6 thinking",
        "1551",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "4",
        "Claude Opus 4.7",
        "1550",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "5",
        "Claude Opus 4.6",
        "1547",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "6",
        "Claude Opus 4.8",
        "1538",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "7",
        "Claude Opus 4.8 thinking",
        "1537",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "10",
        "Qwen 3.7 max preview",
        "1526",
        {
          "tag": {
            "color": "green",
            "text": "Open"
          }
        }
      ],
      [
        "12",
        "GLM 5.1",
        "1525",
        {
          "tag": {
            "color": "green",
            "text": "Open"
          }
        }
      ],
      [
        "13",
        "GLM 5.2 (max)",
        "1525",
        {
          "tag": {
            "color": "green",
            "text": "Open"
          }
        }
      ],
      [
        "16",
        "Gemini 3.1 Pro",
        "1523",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "17",
        "GPT 5.4 high",
        "1521",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "21",
        "GPT 5.5 high",
        "1518",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ],
      [
        "25",
        "GPT 5.5 instant",
        "1513",
        {
          "tag": {
            "color": "green",
            "text": "Active"
          }
        }
      ]
    ],
    "note": "Źródło: lmarena.ai · Data: 25.06.2026 · PPT: Lev Selector"
  },
  {
    "id": "learn",
    "num": 7,
    "icon": "🎓",
    "title": "ZASOBY EDUKACYJNE",
    "type": "cards",
    "cards": [
      {
        "title": "Lev Selector — GitHub (75 PPTX)",
        "tags": [],
        "code": "",
        "list": [
          {
            "dot_color": "blue",
            "html": "ML_Attention_Transformers_BERT.pptx"
          },
          {
            "dot_color": "blue",
            "html": "ML_AGI_Artificial_General_Intelligence.pptx"
          },
          {
            "dot_color": "blue",
            "html": "ML_NLP_Natural_Language_Processing.pptx"
          },
          {
            "dot_color": "blue",
            "html": "ML_Reinforcement_Learning.pptx"
          },
          {
            "dot_color": "blue",
            "html": "ML_Recommender_Systems.pptx"
          },
          {
            "dot_color": "blue",
            "html": "ML_MLOps_AIOps.pptx"
          },
          {
            "dot_color": "blue",
            "html": "ML_Time_Series_Forecasting.pptx"
          },
          {
            "dot_color": "blue",
            "html": "...i 68 innych"
          }
        ],
        "full_width": false,
        "desc_pl": "Wszystkie materiały edukacyjne darmowe na <a href=\"https://github.com/lselector/ml_ai_doc\" style=\"color:var(--bl)\">github.com/lselector/ml_ai_doc</a>",
        "desc_en": "All educational materials free on <a href=\"https://github.com/lselector/ml_ai_doc\" style=\"color:var(--bl)\">github.com/lselector/ml_ai_doc</a>"
      },
      {
        "title": "Weekly AI Updates — GitHub (seminar/2026)",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false,
        "desc_pl": "30 plików PPTX z weekly updates 2026: <a href=\"https://github.com/lselector/seminar/tree/master/2026\" style=\"color:var(--bl)\">github.com/lselector/seminar/tree/master/2026</a>",
        "desc_en": "30 PPTX files with weekly updates 2026: <a href=\"https://github.com/lselector/seminar/tree/master/2026\" style=\"color:var(--bl)\">github.com/lselector/seminar/tree/master/2026</a>"
      }
    ]
  },
  {
    "id": "jobs",
    "num": 8,
    "icon": "📊",
    "title": "RYNEK PRACY — LAYOFFS",
    "type": "table",
    "headers": [
      "Rok",
      "Layoffs (US)",
      "Źródło"
    ],
    "rows": [
      [
        "2026 (do 26.06)",
        "121,500",
        "layoffs.fyi"
      ],
      [
        "2025",
        "124,000",
        "layoffs.fyi"
      ],
      [
        "2024",
        "153,000",
        "layoffs.fyi"
      ],
      [
        "2023",
        "264,000",
        "layoffs.fyi"
      ],
      [
        "2022",
        "165,000",
        "layoffs.fyi"
      ]
    ],
    "note": "Trend: spadek w 2026 vs 2023-2024. Mniej zwolnień w czerwcu vs maj."
  }
];
