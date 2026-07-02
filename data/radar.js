// AI Radar data — V4 extracted from ai-radar.html
// Schema:
//   SECTIONS: [{
//     id, num, icon, title, type,
//     cards: [{ title, desc, tags: [{color, text}], code, list: [{dot_color, html}] }]  // type=cards
//     items: [{ dot_color, html }]                                                       // type=list
//     headers: [...], rows: [[cell | {tag: {color, text}}]], note                        // type=table
//   }]
// Auto-generated — nie edytuj ręcznie, zregeneruj z ai-radar.html

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
        "desc": "Wypuścił GLM 5.2 — open-source MoE 745B, bije frontier modele w coding. 1/6 kosztu GPT-5.5. Zcode (analog Claude Code) wciąż ustępuje Anthropic.",
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
        "full_width": false
      },
      {
        "title": "ByteDance",
        "desc": "3 releasy w 1 tygodniu: Seedance 2.5 (4K video), Seed 2.1 (productivity agent), Dance OPD (unified image). Najbardziej aktywna firma tygodnia.",
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
        "full_width": false
      },
      {
        "title": "Sakana AI",
        "desc": "Fugu Ultra — orchestration layer (nie base model). Koordynuje wiele modeli przez 1 API. Bije Claude Fable na niektórych benchmarkach. $5/$30 API.",
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
        "full_width": false
      },
      {
        "title": "Reflection AI",
        "desc": "$6.3B deal z SpaceX — Colossus 2 data center, $150M/miesiąc do 2029. Dostęp do NVIDIA GB300. Dołącza do Anthropic, Google, Cursor.",
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
      },
      {
        "title": "Subquadratic",
        "desc": "Miami startup — 12M token context, 50x szybszy niż FlashAttention, 20x tańszy. SSA architecture. Hosted API.",
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
        "full_width": false
      },
      {
        "title": "Lev Selector",
        "desc": "Ph.D., 40+ lat w software. Weekly AI updates co piątek. 6.96K subs, 293 videos. Slides na GitHub (75 PPTX) + Google Drive.",
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
        "html": "<strong>Uruchomić GLM 5.2 lokalnie</strong> — 1-bit quantized (86% mniejszy), na consumer GPU. Unsloth GGUF versions."
      },
      {
        "dot_color": "green",
        "html": "<strong>Tłumaczyć w czasie rzeczywistym</strong> — Gemini 3.5 Live Translate, darmowe, API + Google Translate mobile."
      },
      {
        "dot_color": "green",
        "html": "<strong>Generować 4K wideo 30s</strong> — Seedance 2.5, do 50 referencji, cinematic clips. Premiera lipiec 2026."
      },
      {
        "dot_color": "green",
        "html": "<strong>Voice cloning z 2B model</strong> — Dot TTS, Apache 2, few-shot, bije leaderboardy."
      },
      {
        "dot_color": "green",
        "html": "<strong>Mapować mózg bez chirurgii</strong> — Olive, ultrasound, 100x lepsza rozdzielczość niż CT, open-source pipeline."
      },
      {
        "dot_color": "green",
        "html": "<strong>Mieć humanoida za $4,900</strong> — Unitree R1, 123cm, kung-fu, fikołki, chód po schodach."
      },
      {
        "dot_color": "yellow",
        "html": "<strong>GPT 5.6 Sol</strong> — ograniczony dostęp, trusted partners only, gov approval customer-by-customer."
      },
      {
        "dot_color": "yellow",
        "html": "<strong>Claude Mythos 5</strong> — ban lifted 27.06, tylko ~100 trusted US partners."
      },
      {
        "dot_color": "yellow",
        "html": "<strong>AI Glasses</strong> — Google + Gentle Monster + Warby Parker, launch fall 2026."
      },
      {
        "dot_color": "red",
        "html": "<strong>Claude Fable 5</strong> — zawieszony przez US gov, brak timeline na powrót."
      },
      {
        "dot_color": "red",
        "html": "<strong>Jalapeno chip</strong> — ogłoszony (OpenAI + Broadcom), brak dostępu, gigawatt scale planowany."
      },
      {
        "dot_color": "red",
        "html": "<strong>IBM Nano Stack</strong> — research, 100B tranzystorów na paznokciu, lata od komercjalizacji."
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
        "desc": "Pivot z chipmakera na inference-focused cloud. 6 miesięcy po tym jak NVIDIA licencjowała technologię i przejęła CEO.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "Baseten — $1.5B",
        "desc": "Infrastructure dla AI inference. Działa na Google Cloud z NVIDIA GPUs. ~60 pracowników, założona 2019, San Francisco.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "Reflection AI + SpaceX",
        "desc": "$150M/miesiąc za Colossus 2 data center. Umowa do 2029. NVIDIA GB300 chips. Obok Anthropic, Google, Cursor.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "Merge Labs — $250M",
        "desc": "Seed round prowadzony przez OpenAI. Ultrasound BCI, nieinwazyjny. Alternatywa dla Neuralink.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "📈 Orin Token Price Index — inteligencja jako towar",
        "desc": "Cena tokenów spadła ~1000x w kilka lat. Od GPT-3 (175B, 2020) do multi-trillion param models (2026). AI może podnieść globalny GDP z dziesiątek bilionów do setek bilionów lub kwadrylionów dolarów.<br><br><strong>GLM 5.2</strong> kosztuje 1/6 GPT-5.5 przy podobnej jakości w coding.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": true
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
        "desc": "Firma musi dać federal government early access (do ~30 dni) do najbardziej zaawansowanych modeli przed publicznym wdrożeniem.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "Anthropic Fable 5 + Mythos 5 — ban",
        "desc": "US gov zakazał dostępu 12.06.2026 (export control). Mythos ban zdjęty 27.06 (trusted partners). Fable nadal offline, brak timeline.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "OpenAI GPT 5.6 — staggered release",
        "desc": "Gov poprosił o opóźnienie. Najpierw trusted partners, customer-by-customer approval. Nie dla broad deployment.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "Alibaba — US blacklist",
        "desc": "Gov orgs nie mogą kontraktować. Od 2027 żadnych usług Alibaba. Powód: kontrola CCP. Jack Ma — $2.8B antitrust fine, IPO suspended, \"disappeared\". Inwestorzy stracili zaufanie do chińskiego biznesu.",
        "tags": [],
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
        "desc": "Orchestrator (conductor) rozdaje zadania sub-agents, ci wysyłają wyniki. Jak Hadoop/Spark dla agentów. Znany też jako: LLM MapReduce, Agentic MapReduce, Fan-out/fan-in, Agentic wide search.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "3-Layer Agent Architecture",
        "desc": "1. Core runtime (capability-agnostic, MCP, lazy loading)<br>2. Shared plugins (skills, MCP servers, hooks)<br>3. Per-client config (thin, bez forków)",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "Agentic OS — 4 poziomy",
        "desc": "1. Skills & Automation (workflow audit)<br>2. Memory & State (Obsidian, structured map)<br>3. Interface (visual wrapper/dashboard)<br>4. Distribution (packaging dla teams/clients)",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "Brain in the Middle",
        "desc": "Klasyczna app: input → custom software → output.<br>Agent app: input → AI agent (skills, MCP) → output. Agent zastępuje całe custom software.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "💡 Fable Brain Prompting — 8 instrukcji od Anthropic",
        "desc": "<strong>Limit:</strong> To działa dla komunikacji, ale nie tworzy judgment. Model może pewnie podać złą odpowiedź. Nie daje agency (brak tools/internet).",
        "tags": [],
        "code": "<span class=\"kw\">1. Act, do not overplan</span> — commit to recommendation<br>\n<span class=\"kw\">2. Lead with the outcome</span> — bottom line first<br>\n<span class=\"kw\">3. Ground every claim</span> — audit against evidence<br>\n<span class=\"kw\">4. Stop only at real boundaries</span><br>\n<span class=\"kw\">5. Assess, do not act uninvited</span><br>\n<span class=\"kw\">6. Give the reason</span><br>\n<span class=\"kw\">7. Provide the context</span><br>\n<span class=\"kw\">8. Match effort to the task</span>",
        "list": [],
        "full_width": true
      },
      {
        "title": "🔧 Harness Engineering — x6 różnica",
        "desc": "Ten sam model może dać <strong>6x lepsze wyniki</strong> zależnie od harness. Kluczowe: context management, memory as hint, tool validation, feedback loops.",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
      },
      {
        "title": "⏰ Custom Scheduling dla Digital Employee",
        "desc": "Custom \"mycron\" zamiast system crontab. Browser session persistence, hot-reload (60s), RAND_DELAY (anti-thundering herd), per-minute dedup, isolated per-user logging.",
        "tags": [],
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
    "title": "LM ARENA — RANKINGI (25.06.2026)",
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
        "desc": "Wszystkie materiały edukacyjne darmowe na <a href=\"https://github.com/lselector/ml_ai_doc\" style=\"color:var(--bl)\">github.com/lselector/ml_ai_doc</a>",
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
        "full_width": false
      },
      {
        "title": "Weekly AI Updates — GitHub (seminar/2026)",
        "desc": "30 plików PPTX z weekly updates 2026: <a href=\"https://github.com/lselector/seminar/tree/master/2026\" style=\"color:var(--bl)\">github.com/lselector/seminar/tree/master/2026</a>",
        "tags": [],
        "code": "",
        "list": [],
        "full_width": false
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
