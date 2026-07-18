// AI Radar — auto-generated from radar.json
const episodes = [
  {
    "id": "ep-2026-07-17",
    "date": "2026-07-17",
    "title_pl": "Vulkan i Mojo vs Nvidia CUDA, Kimi K3, Nous Research $75M, PrismML, Thinking Machines Inkling",
    "title_en": "Vulkan and Mojo vs Nvidia CUDA, Kimi K3, Nous Research $75M, PrismML, Thinking Machines Inkling",
    "collapsed": true,
    "sections": [
      {
        "id": "s0",
        "num": "00",
        "icon": "📊",
        "title_pl": "LM Arena Leaderboard (stan: 16.07.2026)",
        "title_en": "LM Arena Leaderboard (as of: July 16, 2026)",
        "type": "table",
        "headers": [
          "#",
          "Model",
          "Vendor",
          "Score",
          "Zmiana"
        ],
        "rows": [
          [
            "1",
            "Claude Fable 5",
            "Anthropic",
            "1425",
            "—"
          ],
          [
            "2",
            "GPT 5.6 Soul",
            "OpenAI",
            "1418",
            "↑2"
          ],
          [
            "3",
            "Claude Opus 4.8",
            "Anthropic",
            "1402",
            "↓1"
          ],
          [
            "4",
            "Kimi K3",
            "Moonshot AI",
            "1395",
            "🆕"
          ],
          [
            "5",
            "Grok 4.5",
            "xAI",
            "1389",
            "↑3"
          ],
          [
            "6",
            "Muse Spark 1.1",
            "Meta",
            "1372",
            "↑1"
          ],
          [
            "7",
            "DeepSeek V4 Pro",
            "DeepSeek",
            "1365",
            "↓2"
          ],
          [
            "8",
            "GLM-5.2",
            "Z.AI/Zhipu",
            "1358",
            "—"
          ],
          [
            "9",
            "Gemini 3.1 Pro",
            "Google",
            "1345",
            "↓3"
          ],
          [
            "10",
            "Qwen 3.6 Plus",
            "Alibaba",
            "1338",
            "—"
          ]
        ],
        "notes_pl": "Kimi K3 #1 w Frontend Code Arena (1679 pkt) — bije Claude Fable 5. Open weight, 2.8T params. Źródło: lmarena.ai, 16.07.2026",
        "notes_en": "Kimi K3 #1 in Frontend Code Arena (1679 pts) — beats Claude Fable 5. Open weight, 2.8T params. Source: lmarena.ai, July 16, 2026"
      },
      {
        "id": "s1",
        "num": "01",
        "icon": "📊",
        "title_pl": "LM Arena Leaderboard + Cost Per Intelligence",
        "title_en": "LM Arena Leaderboard + Cost Per Intelligence",
        "type": "cards",
        "cards": [
          {
            "title": "LM Arena — Kimi K3 na poziomie Claude Fable",
            "desc_pl": "Kimi K3 (2.8T parametrów) na pierwszym miejscu w niektórych rankingach. Claude Fable wciąż prowadzi ogólnie.",
            "desc_en": "Kimi K3 (2.8T params) first place in some rankings. Claude Fable still leads overall.",
            "tags": [
              "kimi",
              "k3",
              "lm-arena"
            ],
            "date": "2026-07-16",
            "links": [
              {
                "label": "LM Arena",
                "url": "https://lmarena.ai"
              },
              {
                "label": "BenchLM",
                "url": "https://benchlm.ai"
              }
            ],
            "id": "ep-2026-07-17-lm-arena-kimi-k3-na-poziomie-claude-fabl"
          },
          {
            "title": "Cost Per Intelligence Index",
            "desc_pl": "artificialanalysis.ai: Kimi K3 < $1/task, Claude Fable ~$3/task. DeepSeek V4 Flash 2-4 cents. Ten sam intelligence, 10× tańszy.",
            "desc_en": "artificialanalysis.ai: Kimi K3 < $1/task, Claude Fable ~$3/task. DeepSeek V4 Flash 2-4 cents. Same intelligence, 10× cheaper.",
            "tags": [
              "cost",
              "benchmark"
            ],
            "date": "2026-07-17",
            "links": [
              {
                "label": "Artificial Analysis",
                "url": "https://artificialanalysis.ai"
              }
            ],
            "id": "ep-2026-07-17-cost-per-intelligence-index"
          }
        ]
      },
      {
        "id": "s2",
        "num": "02",
        "icon": "🚀",
        "title_pl": "Nowe modele i narzędzia",
        "title_en": "New models and tools",
        "type": "cards",
        "cards": [
          {
            "title": "Meta Muse Spark 1.1 dla agentów",
            "desc_pl": "Multimodal reasoning, 1M context, parallel agents. Outperforms Gemini 3.1 Pro. Tańszy niż Claude.",
            "desc_en": "Multimodal reasoning, 1M context, parallel agents. Outperforms Gemini 3.1 Pro. Cheaper than Claude.",
            "tags": [
              "meta",
              "muse-spark"
            ],
            "date": "2026-07-09",
            "links": [
              {
                "label": "Meta AI",
                "url": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/"
              }
            ],
            "id": "ep-2026-07-17-meta-muse-spark-1-1-dla-agent-w"
          },
          {
            "title": "Hermes Cloud — VPS agents w 60 sekund",
            "desc_pl": "Segmented tool batch dispatch — parallel agents workflows. Zamiast sekwencyjnie, działają równolegle.",
            "desc_en": "Segmented tool batch dispatch — parallel agents workflows. Instead of sequential, they run in parallel.",
            "tags": [
              "hermes",
              "agents"
            ],
            "date": "2026-07-15",
            "links": [
              {
                "label": "Hermes",
                "url": "https://github.com/nousresearch/hermes"
              }
            ],
            "id": "ep-2026-07-17-hermes-cloud-vps-agents-w-60-sekund"
          },
          {
            "title": "PrismML — 27B Qwen na iPhone",
            "desc_pl": "Kompresja 27B modelu do 4-6GB. iPhone 11+ token/s. Speculative decoding via Spark. Apple w rozmowach o akwizycję.",
            "desc_en": "27B model compressed to 4-6GB. iPhone 11+ token/s. Speculative decoding via Spark. Apple in acquisition talks.",
            "tags": [
              "prismml",
              "iphone",
              "apple"
            ],
            "date": "2026-07-15",
            "links": [
              {
                "label": "PrismML",
                "url": "https://prismlm.com"
              }
            ],
            "id": "ep-2026-07-17-prismml-27b-qwen-na-iphone"
          },
          {
            "title": "Thinking Machines Inkling — open weight LLM",
            "desc_pl": "Mira Murati (były CTO OpenAI). 975B MoE (41B active), 1M context. Multimodal, self-tuning. Open weights.",
            "desc_en": "Mira Murati (former OpenAI CTO). 975B MoE (41B active), 1M context. Multimodal, self-tuning. Open weights.",
            "tags": [
              "thinking-machines",
              "inkling",
              "mira-murati"
            ],
            "date": "2026-07-16",
            "links": [
              {
                "label": "Thinking Machines",
                "url": "https://thinkingmachines.ai"
              },
              {
                "label": "Inkling model",
                "url": "https://www.thinkingmachines.ai/blog/inkling"
              }
            ],
            "id": "ep-2026-07-17-thinking-machines-inkling-open-weight-ll"
          },
          {
            "title": "Kimi K3 2.8T-A50B Open Weight",
            "desc_pl": "Moonshot AI. 2.8T params, $3/$15 per M tok. Open weight. Poziom Claude Fable. Z Chin.",
            "desc_en": "Moonshot AI. 2.8T params, $3/$15 per M tok. Open weight. Claude Fable level. From China.",
            "tags": [
              "kimi",
              "k3",
              "moonshot"
            ],
            "date": "2026-07-16",
            "links": [
              {
                "label": "Kimi",
                "url": "https://www.kimi.com"
              },
              {
                "label": "API",
                "url": "https://platform.moonshot.ai"
              }
            ],
            "id": "ep-2026-07-17-kimi-k3-2-8t-a50b-open-weight"
          }
        ]
      },
      {
        "id": "s3",
        "num": "03",
        "icon": "💰",
        "title_pl": "Pieniądze — kto ma, kto wydaje",
        "title_en": "Money — who has, who spends",
        "type": "cards",
        "cards": [
          {
            "title": "Nous Research — $75M at $1.5B valuation",
            "desc_pl": "Open-source AI lab. Robot Ventures lead. 20-person team. Distributed training over internet.",
            "desc_en": "Open-source AI lab. Robot Ventures lead. 20-person team. Distributed training over internet.",
            "tags": [
              "nous",
              "funding"
            ],
            "date": "2026-07-14",
            "links": [
              {
                "label": "Nous Research",
                "url": "https://nousresearch.org"
              }
            ],
            "id": "ep-2026-07-17-nous-research-75m-at-1-5b-valuation"
          }
        ]
      },
      {
        "id": "s4",
        "num": "04",
        "icon": "⚔️",
        "title_pl": "Vulkan i Mojo vs Nvidia CUDA",
        "title_en": "Vulkan and Mojo vs Nvidia CUDA",
        "type": "cards",
        "cards": [
          {
            "title": "Vulkan — cross-platform compute API",
            "desc_pl": "Z gaming community. Matrix operations na dowolnym CPU/GPU. Khronos Group, Oregon. Koniec monopolu CUDA.",
            "desc_en": "From gaming community. Matrix operations on any CPU/GPU. Khronos Group, Oregon. End of CUDA monopoly.",
            "tags": [
              "vulkan",
              "khronos",
              "cuda"
            ],
            "date": "2026-07-10",
            "links": [
              {
                "label": "Khronos Group",
                "url": "https://www.khronos.org/vulkan/"
              },
              {
                "label": "GitHub",
                "url": "https://github.com/KhronosGroup"
              }
            ],
            "id": "ep-2026-07-17-vulkan-cross-platform-compute-api"
          },
          {
            "title": "Mojo — Chris Lattner (LLVM, Swift)",
            "desc_pl": "Python syntax, C performance. 700 linii vs 3000 CUDA. Modular company. Beta → production this fall.",
            "desc_en": "Python syntax, C performance. 700 lines vs 3000 CUDA. Modular company. Beta → production this fall.",
            "tags": [
              "mojo",
              "modular",
              "chris-lattner"
            ],
            "date": "2026-07-10",
            "links": [
              {
                "label": "Modular",
                "url": "https://www.modular.com/mojo"
              },
              {
                "label": "GitHub",
                "url": "https://github.com/modularml/mojo"
              }
            ],
            "id": "ep-2026-07-17-mojo-chris-lattner-llvm-swift"
          },
          {
            "title": "llama.cpp vs Ollama vs vLLM",
            "desc_pl": "llama.cpp (Georgi Gerganov, C++) — portable, GPU/CPU. Ollama — user-friendly, uses llama.cpp. vLLM — production, long context.",
            "desc_en": "llama.cpp (Georgi Gerganov, C++) — portable, GPU/CPU. Ollama — user-friendly, uses llama.cpp. vLLM — production, long context.",
            "tags": [
              "llama-cpp",
              "ollama",
              "vllm"
            ],
            "date": "2026-07-17",
            "links": [
              {
                "label": "llama.cpp",
                "url": "https://github.com/ggerganov/llama.cpp"
              },
              {
                "label": "Ollama",
                "url": "https://ollama.ai"
              },
              {
                "label": "vLLM",
                "url": "https://github.com/vllm-project/vllm"
              }
            ],
            "id": "ep-2026-07-17-llama-cpp-vs-ollama-vs-vllm"
          }
        ]
      },
      {
        "id": "s5",
        "num": "05",
        "icon": "📰",
        "title_pl": "News i事件",
        "title_en": "News and events",
        "type": "cards",
        "cards": [
          {
            "title": "Suno source code hack",
            "desc_pl": "Haker ukradł source code Suno. Ujawnił jak Suno scrape'ował muzykę z YouTube, Deezer, Genius.",
            "desc_en": "Hacker stole Suno source code. Revealed how Suno scraped music from YouTube, Deezer, Genius.",
            "tags": [
              "suno",
              "hack",
              "security"
            ],
            "date": "2026-07-16",
            "links": [
              {
                "label": "Suno",
                "url": "https://suno.com"
              },
              {
                "label": "Variety article",
                "url": "https://variety.com"
              }
            ],
            "id": "ep-2026-07-17-suno-source-code-hack"
          },
          {
            "title": "Anaconda kupuje Kilo Code",
            "desc_pl": "Open-source AI coding agent, 3M+ developers. Anaconda z Texas. VS Code, JetBrains, CLI. 500+ models.",
            "desc_en": "Open-source AI coding agent, 3M+ developers. Anaconda from Texas. VS Code, JetBrains, CLI. 500+ models.",
            "tags": [
              "anaconda",
              "kilo-code",
              "acquisition"
            ],
            "date": "2026-07-16",
            "links": [
              {
                "label": "Anaconda",
                "url": "https://www.anaconda.com"
              },
              {
                "label": "Kilo Code",
                "url": "https://github.com/anthropics/kilo-code"
              }
            ],
            "id": "ep-2026-07-17-anaconda-kupuje-kilo-code"
          },
          {
            "title": "Anthropic przepisał Bun z Zig do Rust",
            "desc_pl": "11 dni, 64 parallel Claude agents. 500K lines of code. $165K simulated cost. 128 bugs fixed.",
            "desc_en": "11 days, 64 parallel Claude agents. 500K lines of code. $165K simulated cost. 128 bugs fixed.",
            "tags": [
              "anthropic",
              "bun",
              "rust"
            ],
            "date": "2026-07-10",
            "links": [
              {
                "label": "Bun",
                "url": "https://bun.sh"
              },
              {
                "label": "Anthropic",
                "url": "https://anthropic.com"
              }
            ],
            "id": "ep-2026-07-17-anthropic-przepisa-bun-z-zig-do-rust"
          },
          {
            "title": "11 Labs — $600M annual revenue",
            "desc_pl": "Voice cloning, TTS. Najlepszy system multi-language. Szybki wzrost.",
            "desc_en": "Voice cloning, TTS. Best multi-language system. Fast growth.",
            "tags": [
              "11labs",
              "tts",
              "revenue"
            ],
            "date": "2026-07-15",
            "links": [
              {
                "label": "11 Labs",
                "url": "https://elevenlabs.io"
              }
            ],
            "id": "ep-2026-07-17-11-labs-600m-annual-revenue"
          }
        ]
      },
      {
        "id": "s6",
        "num": "06",
        "icon": "📋",
        "title_pl": "Rynek pracy — layoffs",
        "title_en": "Job market — layoffs",
        "type": "cards",
        "cards": [
          {
            "title": "Xbox cut 50% jobs — 14 layers of management",
            "desc_pl": "Flatten org structure. 14 warstw zarządzania w niektórych działach.",
            "desc_en": "Flatten org structure. 14 layers of management in some divisions.",
            "tags": [
              "xbox",
              "layoffs"
            ],
            "date": "2026-07-15",
            "links": [
              {
                "label": "News",
                "url": "https://www.theverge.com"
              }
            ],
            "id": "ep-2026-07-17-xbox-cut-50-jobs-14-layers-of-management"
          },
          {
            "title": "Gartner: 80% AI layoffs fail",
            "desc_pl": "Firmy które zwolniły ludzi dla AI — rehiring. AI jako amplification, nie replacement.",
            "desc_en": "Companies that fired people for AI — rehiring. AI as amplification, not replacement.",
            "tags": [
              "gartner",
              "layoffs",
              "ai"
            ],
            "date": "2026-07-15",
            "links": [
              {
                "label": "Gartner",
                "url": "https://www.gartner.com"
              }
            ],
            "id": "ep-2026-07-17-gartner-80-ai-layoffs-fail"
          }
        ]
      }
    ]
  },
  {
    "id": "ep-2026-07-10",
    "date": "2026-07-10",
    "title_pl": "Odcinek 10.07.2026",
    "title_en": "Episode 07/10/2026",
    "collapsed": true,
    "sections": [
      {
        "id": "s0",
        "num": "00",
        "icon": "📊",
        "title_pl": "LM Arena Leaderboard (stan: 10.07.2026)",
        "title_en": "LM Arena Leaderboard (as of: July 10, 2026)",
        "type": "table",
        "headers": [
          "#",
          "Model",
          "Vendor",
          "Score",
          "Zmiana"
        ],
        "rows": [
          [
            "1",
            "Claude Fable 5",
            "Anthropic",
            "1425",
            "—"
          ],
          [
            "2",
            "Claude Opus 4.8",
            "Anthropic",
            "1402",
            "—"
          ],
          [
            "3",
            "GPT 5.6 Soul",
            "OpenAI",
            "1395",
            "🆕"
          ],
          [
            "4",
            "DeepSeek V4 Pro",
            "DeepSeek",
            "1365",
            "—"
          ],
          [
            "5",
            "Grok 4.5",
            "xAI",
            "1350",
            "🆕"
          ],
          [
            "6",
            "Muse Spark 1.1",
            "Meta",
            "1345",
            "🆕"
          ],
          [
            "7",
            "GLM-5.2",
            "Z.AI/Zhipu",
            "1338",
            "—"
          ],
          [
            "8",
            "Gemini 3.1 Pro",
            "Google",
            "1345",
            "↓"
          ],
          [
            "9",
            "Qwen 3.6 Plus",
            "Alibaba",
            "1330",
            "—"
          ],
          [
            "10",
            "Kimi K2.7",
            "Moonshot AI",
            "1320",
            "—"
          ]
        ],
        "notes_pl": "Claude Fable 5 prowadzi. GPT 5.6, Grok 4.5, Muse Spark — nowe w tym tygodniu. Źródło: lmarena.ai, 10.07.2026",
        "notes_en": "Claude Fable 5 leads. GPT 5.6, Grok 4.5, Muse Spark — new this week. Source: lmarena.ai, July 10, 2026"
      },
      {
        "id": "week-2026-07-10",
        "num": 1,
        "icon": "📅",
        "title_pl": "TYDZIEŃ: 04.07 – 10.07",
        "title_en": "WEEK: 07.04 – 07.10",
        "type": "cards",
        "cards": [
          {
            "title": "GPT 5.6 oficjalnie wydany",
            "desc_pl": "OpenAI wydał GPT 5.6 — trzy warianty: Soul (flagowy, $5/$30 per M tok), Terra (średni), Luna (najszybszy). Recenzje doskonałe. #1 na SWE-bench, ARC AGI 2 (92.5%). Tańszy od Fable 5 (ponad 2×).",
            "desc_en": "OpenAI released GPT 5.6 — three variants: Soul (flagship), Terra, Luna. Excellent reviews. #1 on SWE-bench, ARC AGI 2 (92.5%). Cheaper than Fable 5 (over 2x).",
            "tags": [
              {
                "color": "green",
                "text": "OpenAI"
              }
            ],
            "date": "2026-07-09",
            "links": [
              {
                "label": "OpenAI",
                "url": "https://openai.com/index/gpt-5-6/"
              },
              {
                "label": "API",
                "url": "https://developers.openai.com"
              }
            ],
            "id": "ep-2026-07-10-gpt-5-6-oficjalnie-wydany"
          },
          {
            "title": "Grok (xAI) — konkurent Claude",
            "desc_pl": "xAI wydał Grok — 1.5T parametrów, $2/$6 per M tokens (vs Opus $5/$25, Fable $10/$50). xAI przejęło Cursor — dane coding do treningu. Pierwsze recenzje bardzo dobre.",
            "desc_en": "xAI released Grok — 1.5T params, $2/$6 per M tokens. xAI acquired Cursor for training data. Early reviews very good.",
            "tags": [
              {
                "color": "blue",
                "text": "xAI"
              }
            ],
            "date": "2026-07-10",
            "links": [
              {
                "label": "xAI",
                "url": "https://x.ai/news/grok-4-5"
              },
              {
                "label": "Grok",
                "url": "https://grok.com"
              }
            ],
            "id": "ep-2026-07-10-grok-xai-konkurent-claude"
          },
          {
            "title": "Fable 5 dostępny (promo kończy się 12.07)",
            "desc_pl": "Anthropic Fable 5 dostępny w ramach Claude Max subscription. Promo kończy się 12 lipca — po tym trzeba płacić za tokeny API. Model bardzo dobry, ale drogi.",
            "desc_en": "Anthropic Fable 5 available with Claude Max subscription. Promo ends July 12 — after that API token costs apply.",
            "tags": [
              {
                "color": "orange",
                "text": "Anthropic"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-fable-5-dost-pny-promo-ko-czy-si-12-07"
          },
          {
            "title": "Muse Spark (Meta) — ulepszony",
            "desc_pl": "Meta zaktualizowała Muse Spark — lepszy reasoning, coding, video captioning. Na LM Arena coding leaderboard wysoko, obok Claude.",
            "desc_en": "Meta updated Muse Spark — improved reasoning, coding, video captioning. High on LM Arena coding leaderboard.",
            "tags": [
              {
                "color": "green",
                "text": "Meta"
              }
            ],
            "date": "2026-07-09",
            "id": "ep-2026-07-10-muse-spark-meta-ulepszony"
          },
          {
            "title": "Gemini 3.5 Pro — opóźniony do 17.07",
            "desc_pl": "Google opóźniło release Gemini 3.5 Pro z czerwca na 17 lipca. Preview dostępny. Flash model (z maja) nadal bardzo dobry i niedrogi.",
            "desc_en": "Google delayed Gemini 3.5 Pro release to July 17. Preview available. Flash model (from May) still very good and affordable.",
            "tags": [
              {
                "color": "blue",
                "text": "Google"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-gemini-3-5-pro-op-niony-do-17-07"
          }
        ]
      },
      {
        "id": "who-2026-07-10",
        "num": 2,
        "icon": "🏢",
        "title_pl": "KTO ROBI CIEKAWE RZECZY",
        "title_en": "WHO IS BUILDING INTERESTING THINGS",
        "type": "cards",
        "cards": [
          {
            "title": "DeepSeek DSpark — speculative decoding",
            "desc_pl": "DeepSeek wydał DSpark — speculative decoding przyspiesza generację o 80%, zwiększa output o 700% bez utraty jakości. Działa nie tylko z DeepSeek ale też z GLM-5.2 — 85% szybciej. Open source.",
            "desc_en": "DeepSeek released DSpark — speculative decoding accelerates generation by 80%, increases output by 700%. Works with GLM-5.2 too — 85% faster. Open source.",
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
            "date": "2026-07-08",
            "links": [
              {
                "label": "DeepSeek",
                "url": "https://github.com/deepseek-ai/DSpark"
              },
              {
                "label": "Paper",
                "url": "https://arxiv.org/abs/2507.00123"
              }
            ],
            "id": "ep-2026-07-10-deepseek-dspark-speculative-decoding"
          },
          {
            "title": "HY3 Open MoE LLM — $0.10",
            "desc_pl": "HY3: mixture of experts, 295B parametrów, 25.21B active per token. 256K context. Fast vs deep configuration. Silny na benchmarkach, koszt wydajny.",
            "desc_en": "HY3: mixture of experts, 295B params, 25.21B active. 256K context. Strong on benchmarks, cost efficient.",
            "tags": [
              {
                "color": "green",
                "text": "Open-source"
              }
            ],
            "date": "2026-07-10",
            "links": [
              {
                "label": "Tencent",
                "url": "https://hy.tencent.com/research/hy3"
              },
              {
                "label": "GitHub",
                "url": "https://github.com/tencent/Hy3"
              }
            ],
            "id": "ep-2026-07-10-hy3-open-moe-llm-0-10"
          },
          {
            "title": "DeepSeek V4 Pro vs Fable 5 — koszt Flappy Bird",
            "desc_pl": "Test: tworzenie gry Flappy Bird. Fable 5: $0.42, GLM-5.2: $0.05, DeepSeek: $0.001. DeepSeek użył mniej tokenów + tańszy. Tworzenie strony coffee shop: Sonnet 5 $11, DeepSeek $0.08.",
            "desc_en": "Test: creating Flappy Bird game. Fable 5: $0.42, GLM-5.2: $0.05, DeepSeek: $0.001. DeepSeek used fewer tokens + cheaper.",
            "tags": [
              {
                "color": "blue",
                "text": "Chiny"
              },
              {
                "color": "orange",
                "text": "Cost"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-deepseek-v4-pro-vs-fable-5-koszt-flappy-"
          },
          {
            "title": "Boston Dynamics 5th gen Atlas",
            "desc_pl": "Hyundai (właściciel BD) uprościł konstrukcję, zmniejszył liczbę części. Przygotowania do masowej produkcji — do 30,000 sztuk rocznie. Fizyczna zwinność + zaawansowane systemy kontroli.",
            "desc_en": "Hyundai simplified Atlas construction. Preparing for mass production — up to 30,000 units/year. Physical agility + advanced control systems.",
            "tags": [
              {
                "color": "orange",
                "text": "Robotyka"
              }
            ],
            "date": "2026-07-07",
            "links": [
              {
                "label": "Boston Dynamics",
                "url": "https://bostondynamics.com/atlas"
              }
            ],
            "id": "ep-2026-07-10-boston-dynamics-5th-gen-atlas"
          },
          {
            "title": "UB humanoid robots — $18,000",
            "desc_pl": "Chińska firma UB: full-sized humanoid robots do masowej produkcji od $18,000. Lifelike silicon skin, motion joints, emotionally aware AI. Chiny: 140 firm robotycznych, 300+ modeli, 85% globalnych instalacji.",
            "desc_en": "Chinese UB: full-sized humanoid robots for mass production from $18,000. Lifelike silicon skin, emotionally aware AI. China: 140 robot companies, 300+ models.",
            "tags": [
              {
                "color": "blue",
                "text": "Chiny"
              },
              {
                "color": "orange",
                "text": "Robotyka"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-ub-humanoid-robots-18-000"
          },
          {
            "title": "Mojo language → Qualcomm",
            "desc_pl": "Chris Lattner (twórca LLVM, Swift) — jego firma (Mojo) przejęta przez Qualcomm. Mojo: Python-like syntax + high performance, działa na NVIDIA/AMD/Apple. Zagrożenie dla NVIDIA CUDA monopoly.",
            "desc_en": "Chris Lattner (LLVM, Swift creator) — Mojo company acquired by Qualcomm. Mojo: Python-like + high performance. Threat to NVIDIA CUDA monopoly.",
            "tags": [
              {
                "color": "green",
                "text": "Qualcomm"
              }
            ],
            "date": "2026-07-10",
            "links": [
              {
                "label": "Modular",
                "url": "https://www.modular.com"
              },
              {
                "label": "Qualcomm",
                "url": "https://www.qualcomm.com"
              }
            ],
            "id": "ep-2026-07-10-mojo-language-qualcomm"
          }
        ]
      },
      {
        "id": "arch-2026-07-10",
        "num": 3,
        "icon": "⚙️",
        "title_pl": "ARCHITEKTURY I WZORCE",
        "title_en": "ARCHITECTURES AND PATTERNS",
        "type": "cards",
        "cards": [
          {
            "title": "Claude.md self-modifying trick",
            "desc_pl": "Dodaj instrukcję w claude.md: 'When I correct you, add the lesson as a one-line rule under lessons section'. Claude automatycznie aktualizuje swój plik pamięci. Proste, 1 minuta, bardzo efektywne.",
            "desc_en": "Add instruction in claude.md: 'When I correct you, add lesson as one-line rule'. Claude auto-updates its memory file. Simple, 1 minute, very effective.",
            "tags": [
              {
                "color": "orange",
                "text": "Tip"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-claude-md-self-modifying-trick"
          },
          {
            "title": "Model routing — oszczędność 60-90%",
            "desc_pl": "Wzorzec: używaj drogiego modelu (Fable) do planowania/architektury, taniego (DeepSeek/Sonnet) do wykonania. Output tokens droższe niż input — oszczędność ogromna. Wszyscy agenci to robią.",
            "desc_en": "Pattern: use expensive model (Fable) for planning, cheap model (DeepSeek) for execution. Output tokens cost more — huge savings.",
            "tags": [
              {
                "color": "orange",
                "text": "Cost"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-model-routing-oszcz-dno-60-90"
          },
          {
            "title": "Karpathy: 3 poziomy AI — web → desktop → org-wide",
            "desc_pl": "Andrej Karpathy: (1) web chatbot, (2) desktop app (widzi pliki), (3) persistent org-wide AI (Claude tag w Slack — zna cały biznes). Poziom 3 = AI jako multiplayer employee.",
            "desc_en": "Andrej Karpathy: (1) web chatbot, (2) desktop app, (3) persistent org-wide AI (Claude tag in Slack — knows whole business). Level 3 = AI as multiplayer employee.",
            "tags": [
              {
                "color": "blue",
                "text": "Agents"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-karpathy-3-poziomy-ai-web-desktop-org-wi"
          },
          {
            "title": "Google OKF — Open Knowledge Format",
            "desc_pl": "Google OKF: structured markdown documents z interlinks (jak wiki). AI agent czyta, znajduje, rozumie powiązania. Zastępuje RAG — nie potrzeba vector database. Proste, szybkie, efektywne.",
            "desc_en": "Google OKF: structured markdown with interlinks (like wiki). AI agent reads, finds, understands connections. Replaces RAG — no vector database needed.",
            "tags": [
              {
                "color": "green",
                "text": "Google"
              }
            ],
            "date": "2026-06-26",
            "links": [
              {
                "label": "Google Cloud",
                "url": "https://cloud.google.com/okf"
              }
            ],
            "id": "ep-2026-07-10-google-okf-open-knowledge-format"
          },
          {
            "title": "Composio — agenci połączeni z 100+ apps",
            "desc_pl": "Composio: łączy agentów z GitHub, Slack, Salesforce, Notion, Jira, Gmail. Obsługuje auth, sandbox, logging, dashboards. Open source. Zamienia prototypy w production workflows.",
            "desc_en": "Composio: connects agents to GitHub, Slack, Salesforce, Notion, Jira, Gmail. Handles auth, sandbox, logging. Open source.",
            "tags": [
              {
                "color": "green",
                "text": "Open-source"
              }
            ],
            "date": "2026-07-10",
            "links": [
              {
                "label": "Composio",
                "url": "https://composio.dev"
              }
            ],
            "id": "ep-2026-07-10-composio-agenci-po-czeni-z-100-apps"
          },
          {
            "title": "Japa = LoRA dla world models",
            "desc_pl": "Japa adapters — jak LoRA dla LLM, ale dla world models. Specjalizowane add-ons do fine-tuningu foundational world models dla konkretnych domen.",
            "desc_en": "Japa adapters — like LoRA for LLMs but for world models. Specialized add-ons for fine-tuning foundational world models.",
            "tags": [
              {
                "color": "blue",
                "text": "Research"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-japa-lora-dla-world-models"
          },
          {
            "title": "10 komponentów AI agent harness",
            "desc_pl": "Instructions, context delivery, context management, tool interfaces (MCP), execution environments (sandbox), durable state, memory, orchestration, skills/procedures, verification & observability.",
            "desc_en": "Instructions, context delivery, context management, tool interfaces (MCP), execution environments, durable state, memory, orchestration, skills, verification.",
            "tags": [
              {
                "color": "orange",
                "text": "Architecture"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-10-komponent-w-ai-agent-harness"
          }
        ]
      },
      {
        "id": "regs-2026-07-10",
        "num": 4,
        "icon": "⚖️",
        "title_pl": "REGULACJE I GEOPOLITYKA",
        "title_en": "REGULATION AND GEOPOLITICS",
        "type": "cards",
        "cards": [
          {
            "title": "Chiny: 140 firm robotycznych, 300+ modeli",
            "desc_pl": "Chiny dominują w robotyce humanoid — 140 firm, 300+ modeli robotów. Główni gracze: Unitree, AGbot, UB. 85% globalnych instalacji. Chiny = lider robotyki.",
            "desc_en": "China dominates humanoid robotics — 140 companies, 300+ robot models. Key players: Unitree, AGbot, UB. 85% of global installations.",
            "tags": [
              {
                "color": "blue",
                "text": "Chiny"
              },
              {
                "color": "orange",
                "text": "Robotyka"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-chiny-140-firm-robotycznych-300-modeli"
          },
          {
            "title": "OpenAI zabija Atlas browser",
            "desc_pl": "OpenAI zamyka Atlas browser po premierze. Przechodzi na Chrome extension + inne technologie. Trend: AI providers tworzą własne browsery, ale konsolidacja.",
            "desc_en": "OpenAI kills Atlas browser after launch. Moving to Chrome extension + other technologies.",
            "tags": [
              {
                "color": "green",
                "text": "OpenAI"
              }
            ],
            "date": "2026-07-10",
            "links": [
              {
                "label": "OpenAI",
                "url": "https://openai.com"
              }
            ],
            "id": "ep-2026-07-10-openai-zabija-atlas-browser"
          },
          {
            "title": "Anthropic Certified Architect exam",
            "desc_pl": "Anthropic uruchomił certyfikację (jak Microsoft). Claude jako stateless model: Raw API → Agent SDK → Claude Code → MCP. Kursy prep już dostępne.",
            "desc_en": "Anthropic launched certification (like Microsoft). Claude as stateless model: Raw API → Agent SDK → Claude Code → MCP.",
            "tags": [
              {
                "color": "orange",
                "text": "Anthropic"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-anthropic-certified-architect-exam"
          },
          {
            "title": "AI pogłębia lukę kompetencyjną",
            "desc_pl": "Badanie: utalentowani z AI stają się drastycznie bardziej produktywni. Niesprawni generują fragile code, technical debt, costly failures. AI nagradza silne fundamenty, karze ich brak.",
            "desc_en": "Study: talented with AI become dramatically more productive. Unskilled generate fragile code, technical debt. AI rewards strong fundamentals.",
            "tags": [
              {
                "color": "orange",
                "text": "Jobs"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-ai-pog-bia-luk-kompetencyjn"
          }
        ]
      },
      {
        "id": "edu-2026-07-10",
        "num": 5,
        "icon": "📚",
        "title_pl": "ZASOBY EDUKACYJNE",
        "title_en": "EDUCATIONAL RESOURCES",
        "type": "cards",
        "cards": [
          {
            "title": "Joe Rogan × Aravind Srinivas (Perplexity)",
            "desc_pl": "2-godzinny wywiad. Aravind Srinivas — CEO Perplexity. Oryginalne myślenie, energia. Wiele tematów. Wysoko rekomendowane.",
            "desc_en": "2-hour interview. Aravind Srinivas — CEO Perplexity. Original thinking, energy. Highly recommended.",
            "tags": [
              {
                "color": "blue",
                "text": "Podcast"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-joe-rogan-aravind-srinivas-perplexity"
          },
          {
            "title": "Sync — DeepSeek V4 Flash lokalnie",
            "desc_pl": "Sync (twórca llama.cpp) rekomenduje DeepSeek V4 Flash do lokalnego uruchamiania. Bardzo szybki, tani. Połowa zadań coding nie wymaga dużego modelu — 32B/27B wystarczy.",
            "desc_en": "Sync recommends DeepSeek V4 Flash for local execution. Very fast, cheap. Half of coding tasks don't need large model — 32B/27B suffices.",
            "tags": [
              {
                "color": "green",
                "text": "Open-source"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-sync-deepseek-v4-flash-lokalnie"
          },
          {
            "title": "Llama.cpp zoptymalizowany Claude Fable (65% szybciej)",
            "desc_pl": "Georgi Gerganov (twórca llama.cpp) użył Claude Fable do optymalizacji llama.cpp — 65% szybszy. Llama.cpp używany globalnie — podwójne przyspieszenie ogromne.",
            "desc_en": "Georgi Gerganov used Claude Fable to optimize llama.cpp — 65% faster. Globally used — doubling speed is huge.",
            "tags": [
              {
                "color": "green",
                "text": "Open-source"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-llama-cpp-zoptymalizowany-claude-fable-6"
          },
          {
            "title": "Computational archaeology — zwoje z Wezuwiusza",
            "desc_pl": "2000-letnie zwój węglowe z Wezuwiusza rozszyfrowane: X-ray microCT + virtual unwrapping + deep learning. Od pojedynczych słów do pełnych tekstów.",
            "desc_en": "2000-year-old carbonized Vesuvius scrolls decoded: X-ray microCT + virtual unwrapping + deep learning. From single words to full texts.",
            "tags": [
              {
                "color": "blue",
                "text": "AI Science"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-computational-archaeology-zwoje-z-wezuwi"
          },
          {
            "title": "Claude in Chrome — oficjalne rozszerzenie",
            "desc_pl": "Anthropic wydał Chrome extension. Claude widzi stronę, rozumie strukturę, klika, podąża za linkami. Z Claude Code — buduj/modyfikuj web app + testuj w Chrome.",
            "desc_en": "Anthropic released Chrome extension. Claude sees page, understands structure, clicks, follows links. With Claude Code — build/modify web app + test in Chrome.",
            "tags": [
              {
                "color": "orange",
                "text": "Anthropic"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-claude-in-chrome-oficjalne-rozszerzenie"
          },
          {
            "title": "OpenClaw — Android + iOS",
            "desc_pl": "OpenClaw (open agent) teraz działa na Android i iOS. Mowa, zdjęcia, kontakty, kalendarz, powiadomienia, stan urządzenia.",
            "desc_en": "OpenClaw (open agent) now works on Android and iOS. Voice, photos, contacts, calendar, notifications, device state.",
            "tags": [
              {
                "color": "green",
                "text": "Open-source"
              }
            ],
            "date": "2026-07-10",
            "id": "ep-2026-07-10-openclaw-android-ios"
          }
        ]
      },
      {
        "id": "jobs-2026-07-10",
        "num": 6,
        "icon": "💼",
        "title_pl": "RYNEK PRACY — LAYOFFS",
        "title_en": "JOB MARKET — LAYOFFS",
        "type": "table",
        "headers": [
          "Firma/Okres",
          "Liczba",
          "Data",
          "Komentarz"
        ],
        "rows": [
          [
            "2026 (do 10.07)",
            "131,500",
            "YTD",
            "layoffs.fyi"
          ],
          [
            "2025",
            "124,000",
            "Rok",
            "layoffs.fyi"
          ],
          [
            "2024",
            "153,000",
            "Rok",
            "layoffs.fyi"
          ],
          [
            "2023",
            "264,000",
            "Rok",
            "layoffs.fyi"
          ],
          [
            "2022",
            "165,000",
            "Rok",
            "layoffs.fyi"
          ],
          [
            "Microsoft",
            "~5,000",
            "06.07.2026",
            "Kolejna runda zwolnień"
          ],
          [
            "OpenAI (Atlas)",
            "N/A",
            "07.2026",
            "Zamknięcie Atlas browser"
          ]
        ],
        "note": "Źródło: Lev Selector (6x28pfmf0yU) · Data: 10.07.2026"
      }
    ]
  },
  {
    "id": "ep-2026-07-03",
    "date": "2026-07-03",
    "collapsed": true,
    "sections": [
      {
        "id": "week-latest",
        "num": 0,
        "icon": "📅",
        "type": "cards",
        "cards": [
          {
            "title": "Qwen Agent World (Alibaba)",
            "desc_pl": "Open-source od Alibaba — buduje wirtualny świat wewnątrz AI do symulacji środowiska agentowego.",
            "desc_en": "Open-source from Alibaba — builds virtual world inside AI to simulate agentic environment.",
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
            "date": "2026-07-01",
            "episode_id": "ep-2026-07-03",
            "links": [
              {
                "label": "Qwen",
                "url": "https://qwen.ai"
              },
              {
                "label": "Alibaba",
                "url": "https://github.com/QwenLM"
              }
            ],
            "id": "ep-2026-07-03-qwen-agent-world-alibaba"
          },
          {
            "title": "Nano Banana v2 Light",
            "desc_pl": "Nowsza, szybsza i tańsza wersja generatora obrazów Nano Banana.",
            "desc_en": "Newer, faster and cheaper version of Nano Banana image generator.",
            "tags": [
              {
                "color": "blue",
                "text": "Image Gen"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-06-30",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-nano-banana-v2-light"
          },
          {
            "title": "Ornith AI",
            "desc_pl": "Otwartoźródłowy, agentowy model MoE do kodowania (9B-397B), obudowa (harness) wbudowana w wagi modelu. Pokonuje najnowocześniejsze modele komercyjne. 100 milionów dolarów finansowania, Santa Clara.",
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
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-ornith-ai"
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
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-coreweave-area"
          },
          {
            "title": "Anthropic KYC — 25,000 fraudulent accounts",
            "desc_pl": "25,000 oszustów bombardsowali modele Anthropic, zbierając Q&A pary do treningu chińskich modeli. Anthropic rozważa 'know your customer' — ID wymagane dla darmowych kont. Nie wdrożone jeszcze.",
            "desc_en": "25,000 fraudsters bombarded Anthropic models, collecting Q&A pairs for training Chinese models. Anthropic considers 'know your customer' — ID required for free accounts. Not implemented yet.",
            "tags": [
              {
                "color": "red",
                "text": "Bezpieczeństwo"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "links": [
              {
                "label": "Anthropic",
                "url": "https://anthropic.com"
              }
            ],
            "id": "ep-2026-07-03-anthropic-kyc-25-000-fraudulent-accounts"
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
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-two-class-ai-gap"
          },
          {
            "title": "6 Power Phrases dla Claude Code",
            "desc_pl": "1. Uruchom podagenty 2. Napisz mi specyfikację wdrożeniową 3. Przeprowadź ze mną wywiad na temat projektu 4. Zweryfikuj, zanim zbudujesz 5. Zbuduj mi umiejętność 6. Zautomatyzuj to. Najczęstszy błąd: brak kontekstu lub planu.",
            "desc_en": "1. Launch sub agents  2. Write me an implementation spec  3. Interview me about the project  4. Verify before you build  5. Build me a skill  6. Automate this. Most common mistake: lack of context or plan.",
            "tags": [
              {
                "color": "green",
                "text": "Claude Code"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-6-power-phrases-dla-claude-code"
          },
          {
            "title": "Google Open Knowledge Format (OKF)",
            "desc_pl": "OKF — ustrukturyzowany format wiedzy od Google. Platform-agnostic (git, filesystem). Buduj wiki z plików OKF = pamięć dla agenta. Google Knowledge Catalog ingestuje OKF.",
            "desc_en": "OKF — structured knowledge format from Google. Platform-agnostic (git, filesystem). Build wiki from OKF files = agent memory. Google Knowledge Catalog ingests OKF.",
            "tags": [
              {
                "color": "blue",
                "text": "Google"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-google-open-knowledge-format-okf"
          },
          {
            "title": "LangChain umiera — Deep Agents",
            "desc_pl": "LangChain: over-abstraction (8 poziomów), docs nie matchują kodu, breaking changes. Programiści odchodzą. Ale LangChain Deep Agents (open-source, LangGraph) — agent harness z planowaniem i sub-agentami.",
            "desc_en": "LangChain: over-abstraction (8 levels), docs don't match code, breaking changes. Developers leaving. But LangChain Deep Agents (open-source, LangGraph) — agent harness with planning and sub-agents.",
            "tags": [
              {
                "color": "yellow",
                "text": "Trend"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "links": [
              {
                "label": "LangChain",
                "url": "https://langchain.com"
              },
              {
                "label": "Deep Agents",
                "url": "https://github.com/langchain-ai/deep-agents"
              }
            ],
            "id": "ep-2026-07-03-langchain-umiera-deep-agents"
          },
          {
            "title": "Claude Tag — @claude w Slacku",
            "desc_pl": "Anthropic Tag — @claude w Slacku, agent jako team member. Czyta Slack, zna kulturę firmy, proaktywny. Zagrożenie: wszystkie firmy zależne od Claude.",
            "desc_en": "Anthropic Tag — @claude in Slack, agent as team member. Reads Slack, knows company culture, proactive. Risk: all companies dependent on Claude.",
            "tags": [
              {
                "color": "yellow",
                "text": "Anthropic"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-claude-tag-claude-w-slacku"
          },
          {
            "title": "OpenTag — open-source Claude Tag",
            "desc_pl": "Open-source alternatywa dla Claude Tag — działa ze Slack, WhatsApp i dowolnym modelem (nie tylko Claude). Własny copilot.",
            "desc_en": "Open-source alternative to Claude Tag — works with Slack, WhatsApp and any model (not just Claude). Own copilot.",
            "tags": [
              {
                "color": "green",
                "text": "Open-source"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-opentag-open-source-claude-tag"
          },
          {
            "title": "Ponytail — rules dla Claude Code",
            "desc_pl": "Rules dla Claude Code — 'lazy senior developer mode'. Agent pisze tylko niezbędny kod, unika verbose overengineering. OPUS 4.8: 71% szybciej, 53% mniej linii kodu.",
            "desc_en": "Rules for Claude Code — 'lazy senior developer mode'. Agent writes only necessary code, avoids verbose overengineering. OPUS 4.8: 71% faster, 53% fewer lines of code.",
            "tags": [
              {
                "color": "green",
                "text": "Claude Code"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-ponytail-rules-dla-claude-code"
          },
          {
            "title": "Harness Training (Ornith)",
            "desc_pl": "Otoczka wbijana w wagi modelu przez RLHF. Model uczy się strategii rozwiązywania zadań, nie tylko predykcji tokenu. Wyniki biją modele klasy frontier.",
            "desc_en": "Harness trained into model weights via RL. Model learns problem-solving strategies, not just token prediction. Results beat frontier models.",
            "tags": [
              {
                "color": "green",
                "text": "Breakthrough"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-harness-training-ornith"
          },
          {
            "title": "DeepPark — speculative decoding",
            "desc_pl": "Open-source narzędzie DeepSeek — draft model przewiduje bloki tokenów naraz. Do 85% szybciej dla DeepSeek v4, działa z Qwen i Gemma.",
            "desc_en": "Open-source tool from DeepSeek — draft model predicts a block of tokens at once. Up to 85% faster for DeepSeek v4, works with Qwen and Gemma.",
            "tags": [
              {
                "color": "green",
                "text": "Open-source"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-deeppark-speculative-decoding"
          },
          {
            "title": "X (Twitter) MCP Server",
            "desc_pl": "X wydał serwer MCP (Model Context Protocol) do zapytań o dane z Twittera. Oprogramowanie jest darmowe, ale dostęp do danych jest płatny.",
            "desc_en": "X released MCP server for querying Twitter data. Software free, but data access paid.",
            "tags": [
              {
                "color": "green",
                "text": "MCP"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-x-twitter-mcp-server"
          },
          {
            "title": "Google Gemini SQL 2",
            "desc_pl": "Text-to-SQL — tłumaczy język naturalny na wykonywalne zapytania SQL uwzględniające strukturę bazy danych (schema-aware).",
            "desc_en": "Text-to-SQL — translates natural language into executable, schema-aware SQL queries.",
            "tags": [
              {
                "color": "blue",
                "text": "Google"
              }
            ],
            "code": "",
            "list": [],
            "full_width": false,
            "date": "2026-07-03",
            "episode_id": "ep-2026-07-03",
            "id": "ep-2026-07-03-google-gemini-sql-2"
          }
        ],
        "title_pl": "TYDZIEŃ: 26.06 – 03.07",
        "title_en": "WEEK: 06.26 – 07.03"
      },
      {
        "id": "who",
        "num": 1,
        "icon": "🏢",
        "type": "cards",
        "cards": [],
        "title_pl": "KTO ROBI CIEKAWE RZECZY",
        "title_en": "WHO IS BUILDING INTERESTING THINGS"
      },
      {
        "id": "rules",
        "num": 4,
        "icon": "🏛️",
        "type": "cards",
        "cards": [],
        "title_pl": "REGULACJE I GEOPOLITYKA",
        "title_en": "REGULATION & GEOPOLITICS"
      },
      {
        "id": "how",
        "num": 5,
        "icon": "🏗️",
        "type": "cards",
        "cards": [],
        "title_pl": "ARCHITEKTURY I WZORCE",
        "title_en": "ARCHITEKTURY I WZORCE"
      },
      {
        "id": "jobs",
        "num": 8,
        "icon": "📊",
        "type": "table",
        "headers": [
          "Rok",
          "Layoffs (US)",
          "Źródło"
        ],
        "rows": [
          [
            "2026 (do 03.07)",
            "126,500",
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
        "note": "Źródło: layoffs.fyi · Aktualizacja: 03.07.2026",
        "title_pl": "RYNEK PRACY — LAYOFFS",
        "title_en": "RYNEK PRACY — LAYOFFS"
      }
    ],
    "title_pl": "Odcinek 03.07.2026",
    "title_en": "Episode 07/03/2026"
  },
  {
    "id": "ep-2026-06-26",
    "date": "2026-06-26",
    "collapsed": true,
    "sections": [
      {
        "id": "week-latest",
        "num": 0,
        "icon": "📅",
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
            "desc_pl": "Wydano GLM 5.2 — open-sourceowy MoE 745B, który przewyższa flagowe modele w programowaniu. Kosztuje 1/6 ceny GPT-5.5. Zcode (odpowiednik Claude Code) wciąż ustępuje Anthropic.",
            "desc_en": "Released GLM 5.2 — open-source MoE 745B, beats frontier models in coding. 1/6 the cost of GPT-5.5. Zcode (Claude Code analog) still lags Anthropic.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-z-ai-zhipu-ai"
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
            "desc_en": "3 releases in 1 week: Seedance 2.5 (4K video), Seed 2.1 (productivity agent), Dance OPD (unified image). Most active company of the week.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-bytedance"
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
            "desc_en": "Fugu Ultra — orchestration layer (not base model). Coordinates multiple models via 1 API. Beats Claude Fable on some benchmarks. $5/$30 API.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-sakana-ai"
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
            "desc_pl": "6,3 mld dolarów umowa ze SpaceX — centrum danych Colossus 2, 150 mln dolarów miesięcznie do 2029. Dostęp do GPU NVIDIA GB300. Dołącza do Anthropic, Google, Cursor.",
            "desc_en": "$6.3B deal with SpaceX — Colossus 2 data center, $150M/month until 2029. Access to NVIDIA GB300. Joins Anthropic, Google, Cursor.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-reflection-ai"
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
            "desc_pl": "Miami startup — 12M token kontekst, 50x szybszy niż FlashAttention, 20x tańszy. Architektura SSA. Hostowane API.",
            "desc_en": "Miami startup — 12M token context, 50x faster than FlashAttention, 20x cheaper. SSA architecture. Hosted API.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-subquadratic"
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
            "desc_pl": "Ph.D., 40+ lat w oprogramowaniu. Cotygodniowe aktualizacje AI w piątki. 6,96K subskrybentów, 293 filmy. Slides na GitHubie (75 PPTX) + Google Drive.",
            "desc_en": "Ph.D., 40+ years in software. Weekly AI updates every Friday. 6.96K subs, 293 videos. Slides on GitHub (75 PPTX) + Google Drive.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-lev-selector"
          },
          {
            "title": "Groq — $650M",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Pivot z producenta chipów na chmurę skoncentrowaną na wnioskowaniu. 6 miesięcy po tym, jak NVIDIA licencjonowała technologię i przejęła CEO.",
            "desc_en": "Pivot from chipmaker to inference-focused cloud. 6 months after NVIDIA licensed the technology and poached the CEO.",
            "date": "2026-06-20",
            "episode_id": "ep-2026-06-26",
            "links": [
              {
                "label": "Groq",
                "url": "https://groq.com"
              }
            ],
            "id": "ep-2026-06-26-groq-650m"
          },
          {
            "title": "Baseten — $1.5B",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Infrastructure dla AI wnioskowanie. Działa na Google Cloud z NVIDIA GPUs. ~60 pracowników, założona 2019, San Francisco.",
            "desc_en": "Infrastructure for AI inference. Runs on Google Cloud with NVIDIA GPUs. ~60 employees, founded 2019, San Francisco.",
            "date": "2026-06-18",
            "episode_id": "ep-2026-06-26",
            "links": [
              {
                "label": "Baseten",
                "url": "https://baseten.co"
              }
            ],
            "id": "ep-2026-06-26-baseten-1-5b"
          },
          {
            "title": "Reflection AI + SpaceX",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "$150M/miesiąc za Colossus 2 data center. Umowa do 2029. NVIDIA GB300 chips. Obok Anthropic, Google, Cursor.",
            "desc_en": "$150M/month for Colossus 2 data center. Contract until 2029. NVIDIA GB300 chips. Alongside Anthropic, Google, Cursor.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-reflection-ai-spacex"
          },
          {
            "title": "Merge Labs — $250M",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Seed round prowadzony przez OpenAI. Ultrasound BCI, nieinwazyjny. Alternatywa dla Neuralink.",
            "desc_en": "Seed round led by OpenAI. Ultrasound BCI, non-invasive. Alternative to Neuralink.",
            "date": "2026-06-15",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-merge-labs-250m"
          },
          {
            "title": "📈 Orin Token Price Index — inteligencja jako towar",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": true,
            "desc_pl": "Cena tokenów spadła ~1000x w kilka lat. Od GPT-3 (175B, 2020) do multi-trillion param models (2026). AI może podnieść globalny GDP z dziesiątek bilionów do setek bilionów lub kwadrylionów dolarów.<br><br><strong>GLM 5.2</strong> kosztuje 1/6 GPT-5.5 przy podobnej jakości w programowanie.",
            "desc_en": "Token prices dropped ~1000x in a few years. From GPT-3 (175B, 2020) to multi-trillion param models (2026). AI could raise global GDP from tens of trillions to hundreds of trillions or quadrillions of dollars. <strong>GLM 5.2</strong> costs 1/6 of GPT-5.5 at similar coding quality.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-orin-token-price-index-inteligencja-jako"
          },
          {
            "title": "Trump Executive Order",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Firma musi dać federal government early access (do ~30 dni) do najbardziej zaawansowanych modeli przed publicznym wdrożeniem.",
            "desc_en": "Companies must give federal government early access (up to ~30 days) to most advanced models before public deployment.",
            "date": "2026-06-23",
            "episode_id": "ep-2026-06-26",
            "links": [
              {
                "label": "White House",
                "url": "https://www.whitehouse.gov"
              }
            ],
            "id": "ep-2026-06-26-trump-executive-order"
          },
          {
            "title": "Anthropic Fable 5 + Mythos 5 — ban",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "US gov zakazał dostępu 12.06.2026 (export control). Mythos ban zdjęty 27.06 (zaufani partnerzy). Fable nadal offline, brak timeline.",
            "desc_en": "US gov banned access 06.12.2026 (export control). Mythos ban lifted 06.27 (trusted partners). Fable still offline, no timeline.",
            "date": "2026-06-20",
            "episode_id": "ep-2026-06-26",
            "links": [
              {
                "label": "Anthropic",
                "url": "https://anthropic.com"
              }
            ],
            "id": "ep-2026-06-26-anthropic-fable-5-mythos-5-ban"
          },
          {
            "title": "OpenAI GPT 5.6 — staggered release",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Gov poprosił o opóźnienie. Najpierw zaufani partnerzy, customer-by-customer approval. Nie dla broad wdrożenie.",
            "desc_en": "Gov requested delay. First trusted partners, customer-by-customer approval. Not for broad deployment.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-openai-gpt-5-6-staggered-release"
          },
          {
            "title": "Alibaba — US blacklist",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Gov orgs nie mogą kontraktować. Od 2027 żadnych usług Alibaba. Powód: kontrola CCP. Jack Ma — $2.8B antitrust fine, IPO suspended, \"disappeared\". Inwestorzy stracili zaufanie do chińskiego biznesu.",
            "desc_en": "Gov orgs cannot contract. From 2027 no Alibaba services. Reason: CCP control. Jack Ma — $2.8B antitrust fine, IPO suspended, \"disappeared\". Investors lost trust in Chinese business.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-alibaba-us-blacklist"
          },
          {
            "title": "Agent Map-Reduce",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Orchestrator (dyrygent) rozdziela zadania do podagentów, którzy odsyłają wyniki z powrotem. Coś jak Hadoop/Spark dla agentów. Znane również jako: LLM MapReduce, Agentic MapReduce, Fan-out/fan-in, Agentic wide search.",
            "desc_en": "Orchestrator (conductor) distributes tasks to sub-agents, who send results back. Like Hadoop/Spark for agents. Also known as: LLM MapReduce, Agentic MapReduce, Fan-out/fan-in, Agentic wide search.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-agent-map-reduce"
          },
          {
            "title": "3-Layer Agent Architecture",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "1. Core runtime (możliwości-agnostic, MCP, lazy loading)<br>2. Shared plugins (skills, MCP servers, hooks)<br>3. Per-client config (thin, bez forków)",
            "desc_en": "1. Core runtime (capability-agnostic, MCP, lazy loading)<br>2. Shared plugins (skills, MCP servers, hooks)<br>3. Per-client config (thin, no forks)",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-3-layer-agent-architecture"
          },
          {
            "title": "Agentic OS — 4 poziomy",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "1. Umiejętności & Automatyzacja (audyt przepływu pracy)<br>2. Pamięć & Stan (Obsidian, strukturalna mapa)<br>3. Interfejs (wizualna otoczka/panel)<br>4. Dystrybucja (pakowanie dla zespołów/klientów)",
            "desc_en": "1. Skills & Automation (workflow audit)<br>2. Memory & State (Obsidian, structured map)<br>3. Interface (visual wrapper/dashboard)<br>4. Distribution (packaging for teams/clients)",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-agentic-os-4-poziomy"
          },
          {
            "title": "Brain in the Middle",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Klasyczna app: input → custom software → output.<br>Agent app: input → AI agent (skills, MCP) → output. Agent zastępuje całe custom software.",
            "desc_en": "Classic app: input → custom software → output.<br>Agent app: input → AI agent (skills, MCP) → output. Agent replaces entire custom software.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-brain-in-the-middle"
          },
          {
            "title": "💡 Fable Brain Prompting — 8 instrukcji od Anthropic",
            "tags": [],
            "code": "<span class=\"kw\">1. Act, do not overplan</span> — commit to recommendation<br>\n<span class=\"kw\">2. Lead with the outcome</span> — bottom line first<br>\n<span class=\"kw\">3. Ground every claim</span> — audit against evidence<br>\n<span class=\"kw\">4. Stop only at real boundaries</span><br>\n<span class=\"kw\">5. Assess, do not act uninvited</span><br>\n<span class=\"kw\">6. Give the reason</span><br>\n<span class=\"kw\">7. Provide the context</span><br>\n<span class=\"kw\">8. Match effort to the task</span>",
            "list": [],
            "full_width": true,
            "desc_pl": "Fable Brain Prompting — 8 instrukcji od Anthropic dotyczących skutecznej komunikacji z AI.",
            "desc_en": "Fable Brain Prompting — 8 instructions from Anthropic for effective AI communication.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-fable-brain-prompting-8-instrukcji-od-an"
          },
          {
            "title": "🔧 Harness Engineering — x6 różnica",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Ten sam model może dać <strong>6x lepsze wyniki</strong> zależnie od otoczka. Kluczowe: kontekst management, memory as hint, tool validation, feedback loops.",
            "desc_en": "The same model can give <strong>6x better results</strong> depending on the harness. Key: context management, memory as hint, tool validation, feedback loops.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-harness-engineering-x6-r-nica"
          },
          {
            "title": "⏰ Custom Scheduling dla Digital Employee",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "Custom \"mycron\" zamiast system crontab. Browser session persistence, hot-reload (60s), RAND_DELAY (anti-thundering herd), per-minute dedup, isolated per-user logging.",
            "desc_en": "Custom \"mycron\" instead of system crontab. Browser session persistence, hot-reload (60s), RAND_DELAY (anti-thundering herd), per-minute dedup, isolated per-user logging.",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-custom-scheduling-dla-digital-employee"
          },
          {
            "title": "Lev Selector — GitHub (75 PPTX)",
            "tags": [],
            "code": "",
            "list": [
              {
                "dot_color": "blue",
                "html_pl": "ML_Attention_Transformers_BERT.pptx",
                "html_en": "ML_Attention_Transformers_BERT.pptx"
              },
              {
                "dot_color": "blue",
                "html_pl": "ML_AGI_Artificial_General_Intelligence.pptx",
                "html_en": "ML_AGI_Artificial_General_Intelligence.pptx"
              },
              {
                "dot_color": "blue",
                "html_pl": "ML_NLP_Natural_Language_Processing.pptx",
                "html_en": "ML_NLP_Natural_Language_Processing.pptx"
              },
              {
                "dot_color": "blue",
                "html_pl": "ML_Reinforcement_Learning.pptx",
                "html_en": "ML_Reinforcement_Learning.pptx"
              },
              {
                "dot_color": "blue",
                "html_pl": "ML_Recommender_Systems.pptx",
                "html_en": "ML_Recommender_Systems.pptx"
              },
              {
                "dot_color": "blue",
                "html_pl": "ML_MLOps_AIOps.pptx",
                "html_en": "ML_MLOps_AIOps.pptx"
              },
              {
                "dot_color": "blue",
                "html_pl": "ML_Time_Series_Forecasting.pptx",
                "html_en": "ML_Time_Series_Forecasting.pptx"
              },
              {
                "dot_color": "blue",
                "html_pl": "...i 68 innych",
                "html_en": "...i 68 innych"
              }
            ],
            "full_width": false,
            "desc_pl": "Wszystkie materiały edukacyjne darmowe na <a href=\"https://github.com/lselector/ml_ai_doc\" style=\"color:var(--bl)\">github.com/lselector/ml_ai_doc</a>",
            "desc_en": "All educational materials free on <a href=\"https://github.com/lselector/ml_ai_doc\" style=\"color:var(--bl)\">github.com/lselector/ml_ai_doc</a>",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-lev-selector-github-75-pptx"
          },
          {
            "title": "Weekly AI Updates — GitHub (seminar/2026)",
            "tags": [],
            "code": "",
            "list": [],
            "full_width": false,
            "desc_pl": "30 plików PPTX z weekly updates 2026: <a href=\"https://github.com/lselector/seminar/tree/master/2026\" style=\"color:var(--bl)\">github.com/lselector/seminar/tree/master/2026</a>",
            "desc_en": "30 PPTX files with weekly updates 2026: <a href=\"https://github.com/lselector/seminar/tree/master/2026\" style=\"color:var(--bl)\">github.com/lselector/seminar/tree/master/2026</a>",
            "date": "2026-06-26",
            "episode_id": "ep-2026-06-26",
            "id": "ep-2026-06-26-weekly-ai-updates-github-seminar-2026"
          }
        ],
        "title_pl": "TYDZIEŃ: 26.06 – 03.07",
        "title_en": "WEEK: 06.26 – 07.03"
      },
      {
        "id": "who",
        "num": 1,
        "icon": "🏢",
        "type": "cards",
        "cards": [],
        "title_pl": "KTO ROBI CIEKAWE RZECZY",
        "title_en": "WHO IS BUILDING INTERESTING THINGS"
      },
      {
        "id": "money",
        "num": 3,
        "icon": "💰",
        "type": "cards",
        "cards": [],
        "title_pl": "PIENIĄDZE — KTO MA, KTO WYDAJE",
        "title_en": "MONEY — WHO HAS, WHO SPENDS"
      },
      {
        "id": "rules",
        "num": 4,
        "icon": "🏛️",
        "type": "cards",
        "cards": [],
        "title_pl": "REGULACJE I GEOPOLITYKA",
        "title_en": "REGULATION & GEOPOLITICS"
      },
      {
        "id": "how",
        "num": 5,
        "icon": "🏗️",
        "type": "cards",
        "cards": [],
        "title_pl": "ARCHITEKTURY I WZORCE",
        "title_en": "ARCHITEKTURY I WZORCE"
      },
      {
        "id": "learn",
        "num": 7,
        "icon": "🎓",
        "type": "cards",
        "cards": [],
        "title_pl": "ZASOBY EDUKACYJNE",
        "title_en": "ZASOBY EDUKACYJNE"
      }
    ],
    "title_pl": "Odcinek 26.06.2026",
    "title_en": "Episode 06/26/2026"
  }
];
