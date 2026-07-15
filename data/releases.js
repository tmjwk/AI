// AI Releases — auto-generated from releases.json
// NIE EDYTUJ RĘCZNIE

const RELEASES = [
  {
    "num": "##28-2",
    "date": "2026-07-12",
    "title_pl": "GPT 5.6, Grok 4.5, Muse Spark, Hy3 — 17 nowości",
    "title_en": "GPT 5.6, Grok 4.5, Muse Spark, Hy3 — 17 releases",
    "yt": "Ti1V7OI2Rro",
    "collapsed": false,
    "items": [
      {
        "vendor": "xAI",
        "date": "2026-07-08",
        "thumbnail": "rankings/releases_thumbs/grok-4-5.jpg",
        "review_pl": "Najmądrzejszy model xAI. 1.5T parametrów, trenowany z danymi Cursor (przejęte przez xAI). $2/$6 per M tok — 3× tańszy od GPT 5.6, znacznie tańszy od Fable ($10/$50). SWE-bench: bije Opus 4.8, za GPT 5.5 i Fable. 80 tok/s, mniej tokenów na zadanie. Mniej halucynacji niż Fable i GPT 5.6. Słabość: 500K context (krótszy niż 1M u konkurencji). LiveBench: nawet poniżej Opus 4.7 i Gemini 3.1 Pro. Pozycjonowanie uczciwe — nie najlepszy, ale bardzo efektywny.",
        "review_en": "Smartest xAI model. 1.5T params, trained with Cursor data. $2/$6 per M tok — 3x cheaper than GPT 5.6. SWE-bench beats Opus 4.8, behind GPT 5.5 and Fable. 80 tok/s, fewer tokens per task. Fewer hallucinations. Weakness: 500K context. LiveBench: below Opus 4.7 and Gemini 3.1 Pro. Honest positioning — not best, but very efficient.",
        "links": [
          {
            "url": "https://x.ai/news/grok-4-5",
            "type": "official",
            "label_pl": "Grok 4.5",
            "label_en": "Grok 4.5"
          },
          {
            "url": "https://cursor.com",
            "type": "demo",
            "label_pl": "Cursor",
            "label_en": "Cursor"
          }
        ],
        "title_pl": "Grok 4.5",
        "title_en": "Grok 4.5",
        "category_pl": "LLM",
        "category_en": "LLM"
      },
      {
        "vendor": "Meta",
        "date": "2026-07-09",
        "thumbnail": "rankings/releases_thumbs/muse-spark-1-1.jpg",
        "review_pl": "Meta najlepszy model — multimodal, agentic. Browser capabilities (Instagram messaging!), kodowanie (diagnose bugs, code migration), planowanie. Self-reported benchmarks #1, ale niezależne rankingi: poza top 10, na poziomie GLM-5.2. Duży skok vs poprzednia wersja, ale wciąż daleko do frontier. Meta wciąż w tle wyścigu AI.",
        "review_en": "Meta's best — multimodal, agentic. Browser automation (Instagram messaging!), coding (bug diagnosis, migration). Self-reported #1, but independent rankings: outside top 10, GLM-5.2 level. Big jump vs previous, but still far from frontier.",
        "links": [
          {
            "url": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/",
            "type": "official",
            "label_pl": "Muse Spark",
            "label_en": "Muse Spark"
          }
        ],
        "title_pl": "Muse Spark 1.1",
        "title_en": "Muse Spark 1.1",
        "category_pl": "LLM",
        "category_en": "LLM"
      },
      {
        "vendor": "Tencent",
        "date": "2026-07-06",
        "thumbnail": "rankings/releases_thumbs/hy3.jpg",
        "review_pl": "Open-source MoE 295B (21B active). Mniejszy niż GLM-5.2/DeepSeek V4 (>1T) ale prawie tak dobry. 256K context. Agentic coding, UI design, vibe coding. FB8: 300GB. Biję powyżej wagi — mniejszy model, mniejsze koszty, podobna jakość. Kolejny chiński open-source który demokratyzuje AI.",
        "review_en": "Open-source MoE 295B (21B active). Smaller than GLM-5.2/DeepSeek V4 but nearly as good. 256K context. Agentic coding, UI design. FB8: 300GB. Punches above weight — smaller, cheaper, similar quality.",
        "links": [
          {
            "url": "https://hy.tencent.com/research/hy3",
            "type": "official",
            "label_pl": "Hy3",
            "label_en": "Hy3"
          },
          {
            "url": "https://github.com/tencent/Hy3",
            "type": "github",
            "label_pl": "GitHub",
            "label_en": "GitHub"
          }
        ],
        "title_pl": "Hy3",
        "title_en": "Hy3",
        "category_pl": "LLM",
        "category_en": "LLM"
      },
      {
        "vendor": "OpenAI",
        "date": "2026-07-08",
        "thumbnail": "rankings/releases_thumbs/gpt-live.jpg",
        "review_pl": "Real-time voice model — naturalna konwersacja z przerywaniem, pauzami, potwierdzaniem. Deleguje trudne pytania do GPT 5.5 w tle. Live translation multi-language. Wizualne odpowiedzi (weather, maps, stocks). Dostępne dla WSZYSTKICH (free=mini, paid=full). Rewolucja UX — koniec rozmów z robotem. Słabość: czasem nienaturalne emocje w role-play.",
        "review_en": "Real-time voice — natural conversation with interruption, pauses, acknowledgment. Delegates hard questions to GPT 5.5. Multi-language translation. Visual responses. Available for ALL (free=mini, paid=full). UX revolution — end of talking to a robot.",
        "links": [
          {
            "url": "https://openai.com/index/introducing-gpt-live/",
            "type": "official",
            "label_pl": "GPT Live",
            "label_en": "GPT Live"
          },
          {
            "url": "https://chatgpt.com",
            "type": "demo",
            "label_pl": "ChatGPT",
            "label_en": "ChatGPT"
          }
        ],
        "title_pl": "GPT Live",
        "title_en": "GPT Live",
        "category_pl": "TTS",
        "category_en": "TTS"
      },
      {
        "vendor": "AMap CVLab",
        "date": "2026-07-09",
        "thumbnail": "rankings/releases_thumbs/abot-world.jpg",
        "review_pl": "Open-source (Apache 2) interaktywny świat — 720p@16fps, latency ~1s. Nieskończony świat (1h+). 24GB — mieści się na 4090. Najdłuższy interaktywny świat jaki istnieje. Komercyjne użycie dozwolone. Pierwszy world model gotowy do produkcji.",
        "review_en": "Open-source (Apache 2) interactive world — 720p@16fps, ~1s latency. Infinite world (1h+). 24GB — fits 4090. Longest interactive world. Commercial use allowed. First production-ready world model.",
        "links": [
          {
            "url": "https://amap-cvlab.github.io/ABot-World/",
            "type": "official",
            "label_pl": "ABot World",
            "label_en": "ABot World"
          },
          {
            "url": "https://huggingface.co/amap-cvlab",
            "type": "huggingface",
            "label_pl": "HuggingFace",
            "label_en": "HuggingFace"
          }
        ],
        "title_pl": "ABot World",
        "title_en": "ABot World",
        "category_pl": "Modele światów",
        "category_en": "World Models"
      },
      {
        "vendor": "ByteDance",
        "date": "2026-07-09",
        "thumbnail": "rankings/releases_thumbs/seedream-5-pro.jpg",
        "review_pl": "Image model z edycją, referencjami, transparent layers. Annotacje rysowane na obrazie. Multilingual. Poziom Nano Banana, blisko GPT Image 2. Mocne w infographics i posterach. Słabość: brak na niezależnych leaderboardach.",
        "review_en": "Image model with editing, references, transparent layers. Drawn annotations. Multilingual. Nano Banana level, close to GPT Image 2. Strong in infographics. Weakness: no independent benchmarks.",
        "links": [
          {
            "url": "https://seed.bytedance.com/en/seedream5_0_pro",
            "type": "official",
            "label_pl": "Seedream 5 Pro",
            "label_en": "Seedream 5 Pro"
          },
          {
            "url": "https://dreamina.jianying.com",
            "type": "demo",
            "label_pl": "Dreamina",
            "label_en": "Dreamina"
          }
        ],
        "title_pl": "Seedream 5 Pro",
        "title_en": "Seedream 5 Pro",
        "category_pl": "Generacja obrazów",
        "category_en": "Image Generation"
      },
      {
        "vendor": "Meta",
        "date": "2026-07-07",
        "thumbnail": "rankings/releases_thumbs/muse-image.jpg",
        "review_pl": "Agent-style image generation — planuje, myśli, szuka (web, Marketplace) przed generowaniem. Instagram profile references DOMYŚLNIE WŁĄCZONE — privacy skandal. Trzeba ręcznie wyłączyć. Silny w reasoning ale ethically kontrowersyjny.",
        "review_en": "Agent-style generation — plans, thinks, searches before generating. Instagram profile references ON BY DEFAULT — privacy scandal. Must manually disable. Strong reasoning but ethically controversial.",
        "links": [
          {
            "url": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl",
            "type": "official",
            "label_pl": "Muse Image",
            "label_en": "Muse Image"
          },
          {
            "url": "https://meta.ai",
            "type": "demo",
            "label_pl": "Meta AI",
            "label_en": "Meta AI"
          }
        ],
        "title_pl": "Muse Image",
        "title_en": "Muse Image",
        "category_pl": "Generacja obrazów",
        "category_en": "Image Generation"
      },
      {
        "vendor": "Meta",
        "date": "2026-07-07",
        "thumbnail": "rankings/releases_thumbs/muse-video.jpg",
        "review_pl": "Native sound, złożone koncepcje (Bernoulli's principle), juggling, realistic. Tylko preview — brak detali (duration, resolution, pricing). Obiecujący ale niedostępny.",
        "review_en": "Native sound, complex concepts (Bernoulli's principle), juggling, realistic. Preview only — no details. Promising but unavailable.",
        "links": [
          {
            "url": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl",
            "type": "official",
            "label_pl": "Muse Video",
            "label_en": "Muse Video"
          }
        ],
        "title_pl": "Muse Video",
        "title_en": "Muse Video",
        "category_pl": "Generacja wideo",
        "category_en": "Video Generation"
      },
      {
        "vendor": "Reve",
        "date": "2026-07-10",
        "thumbnail": "rankings/releases_thumbs/reve-2-1.jpg",
        "review_pl": "#2 na leaderboardach (za GPT Image 2). 4K (16MP). Bounding box microediting. Silny visual reasoning i text rendering. Closed, paid. Dobra alternatywa dla GPT Image 2 — tańszy i szybszy.",
        "review_en": "#2 on leaderboards (behind GPT Image 2). 4K (16MP). Bounding box microediting. Strong visual reasoning. Closed, paid. Good GPT Image 2 alternative — cheaper and faster.",
        "links": [
          {
            "url": "https://blog.reve.com/posts/launching-reve-2.1/",
            "type": "official",
            "label_pl": "Reve 2.1",
            "label_en": "Reve 2.1"
          },
          {
            "url": "https://reve.com",
            "type": "demo",
            "label_pl": "Reve",
            "label_en": "Reve"
          }
        ],
        "title_pl": "Reve 2.1",
        "title_en": "Reve 2.1",
        "category_pl": "Generacja obrazów",
        "category_en": "Image Generation"
      },
      {
        "vendor": "Robbyant",
        "date": "2026-07-02",
        "thumbnail": "rankings/releases_thumbs/lingbot-world-2.jpg",
        "review_pl": "720p@60fps — jakość gry komercyjnej. Akcje, eventy, kontrola obiektów (nie tylko postaci). 86GB. Fast inference model wydany. Najwyższy FPS w open-source world models.",
        "review_en": "720p@60fps — commercial game quality. Actions, events, object control. 86GB. Fast inference released. Highest FPS in open-source world models.",
        "links": [
          {
            "url": "https://technology.robbyant.com/lingbot-world-v2",
            "type": "official",
            "label_pl": "LingBot World 2",
            "label_en": "LingBot World 2"
          }
        ],
        "title_pl": "LingBot World 2",
        "title_en": "LingBot World 2",
        "category_pl": "Modele światów",
        "category_en": "World Models"
      },
      {
        "vendor": "Mira WM",
        "date": "2026-07-10",
        "thumbnail": "rankings/releases_thumbs/mira.jpg",
        "review_pl": "Multiplayer 4 graczy w real-time. 5B diffusion model, 20fps na B200. 10,000h gameplay training. Pierwszy multiplayer world model — gaming bez gamedev.",
        "review_en": "4-player multiplayer real-time. 5B diffusion model, 20fps on B200. 10,000h gameplay training. First multiplayer world model — gaming without gamedev.",
        "links": [
          {
            "url": "https://mira-wm.com/",
            "type": "official",
            "label_pl": "Mira",
            "label_en": "Mira"
          },
          {
            "url": "https://mira-wm.com/",
            "type": "demo",
            "label_pl": "Wypróbuj",
            "label_en": "Play"
          }
        ],
        "title_pl": "Mira",
        "title_en": "Mira",
        "category_pl": "Modele światów",
        "category_en": "World Models"
      },
      {
        "vendor": "Alaya Lab",
        "date": "2026-07-10",
        "thumbnail": "rankings/releases_thumbs/alaya-world.jpg",
        "review_pl": "Persistent memory — spójność scen po odwróceniu wzroku. Prompt editing w czasie (fireworks, potwory). 720p@24fps, 1+ minuta. Rozwiązuje największy problem world models (warping).",
        "review_en": "Persistent memory — scene consistency. Real-time prompt editing. 720p@24fps, 1+ minute. Solves biggest world model problem (warping).",
        "links": [
          {
            "url": "https://alaya-lab.github.io/AlayaWorld/",
            "type": "official",
            "label_pl": "Alaya World",
            "label_en": "Alaya World"
          }
        ],
        "title_pl": "Alaya World",
        "title_en": "Alaya World",
        "category_pl": "Modele światów",
        "category_en": "World Models"
      },
      {
        "vendor": "JM Liu",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/sefi-image.jpg",
        "review_pl": "Open-source 1B-5B, dual-stream (layout oddzielnie od tekstury). Biję Qwen Image i Z-Image. Mniej niż 10GB. Demokratyzacja — mały model bije duże. Szybszy niż Krea 2/Ideogram.",
        "review_en": "Open-source 1B-5B, dual-stream. Beats Qwen Image and Z-Image. Under 10GB. Democratization — small beats big. Faster than Krea 2/Ideogram.",
        "links": [
          {
            "url": "https://jmliu206.github.io/sefi-web/",
            "type": "official",
            "label_pl": "SeFi image",
            "label_en": "SeFi image"
          }
        ],
        "title_pl": "SeFi image",
        "title_en": "SeFi image",
        "category_pl": "Generacja obrazów",
        "category_en": "Image Generation"
      },
      {
        "vendor": "SenseGen Gao",
        "date": "2026-07-10",
        "thumbnail": "rankings/releases_thumbs/pixworld.jpg",
        "review_pl": "3D scenes w pixel space (nie latent). 4-step: scena w 6s@480p — 1000× szybciej niż diffusion. Koniec latent space monopoly. Kod i model do wydania.",
        "review_en": "3D in pixel space (not latent). 4-step: scene in 6s@480p — 1000x faster than diffusion. End of latent space monopoly. Code and model to be released.",
        "links": [
          {
            "url": "https://sensengao.github.io/PixWorld/",
            "type": "official",
            "label_pl": "PixWorld",
            "label_en": "PixWorld"
          }
        ],
        "title_pl": "PixWorld",
        "title_en": "PixWorld",
        "category_pl": "Generacja 3D",
        "category_en": "3D Generation"
      },
      {
        "vendor": "Booster Robotics",
        "date": "2026-07-13",
        "thumbnail": "rankings/releases_thumbs/booster-t2.jpg",
        "review_pl": "75 DOF, open-source ecosystem (gym + train). Wall jumps, 360 aerial flips. Open-source workflow od symulacji do real world. Optimus i Figure nadal nie potrafią tych akrobacji.",
        "review_en": "75 DOF, open-source ecosystem (gym + train). Wall jumps, 360 flips. Open-source from simulation to real world. Optimus and Figure still can't do these acrobatics.",
        "links": [
          {
            "url": "https://github.com/boosterrobotics",
            "type": "github",
            "label_pl": "Booster Robotics",
            "label_en": "Booster Robotics"
          }
        ],
        "title_pl": "Booster T2",
        "title_en": "Booster T2",
        "category_pl": "Roboty humanoidalne",
        "category_en": "Humanoid Robots"
      },
      {
        "vendor": "Wan",
        "date": "2026-07-07",
        "thumbnail": "rankings/releases_thumbs/wan-streamer-0-2.jpg",
        "review_pl": "Real-time avatars — 640px, 25fps, 200ms latency. Dowolna postać (kot, dziecko, fikcyjna). Tylko paper, nie open-source jeszcze.",
        "review_en": "Real-time avatars — 640px, 25fps, 200ms latency. Any character. Paper only, not open-source yet.",
        "links": [
          {
            "url": "https://wan-streamer.com/v0.2/",
            "type": "official",
            "label_pl": "Wan Streamer",
            "label_en": "Wan Streamer"
          }
        ],
        "title_pl": "Wan Streamer 0.2",
        "title_en": "Wan Streamer 0.2",
        "category_pl": "Awatary realtime",
        "category_en": "Realtime Avatars"
      },
      {
        "vendor": "Ruihang Zhang",
        "date": "2026-07-07",
        "thumbnail": "rankings/releases_thumbs/proxypose.jpg",
        "review_pl": "3D tracking obiektów z 2D video. Proxy shape + geometria. Transparentne/odbijające powierzchnie. 30GB (bazuje na Wan 2.1). AR/VR implications.",
        "review_en": "3D object tracking from 2D video. Proxy shape + geometry. Transparent/reflective surfaces. 30GB (based on Wan 2.1). AR/VR implications.",
        "links": [
          {
            "url": "https://ruihangzhang97.github.io/proxypose/",
            "type": "official",
            "label_pl": "ProxyPose",
            "label_en": "ProxyPose"
          }
        ],
        "title_pl": "ProxyPose",
        "title_en": "ProxyPose",
        "category_pl": "Multimodalny",
        "category_en": "Multimodal"
      }
    ]
  },
  {
    "num": "##28-1",
    "date": "2026-07-10",
    "title_pl": "GPT 5.6 — pełny review (anime girl, symulacja, muzyka, 3D, rak, żaba)",
    "title_en": "GPT 5.6 — full review (anime girl, simulation, music, 3D, cancer, frog)",
    "yt": "SettwwX2cCI",
    "collapsed": true,
    "items": [
      {
        "vendor": "OpenAI",
        "date": "2026-07-09",
        "thumbnail": "rankings/releases_thumbs/gpt-5-6-soul.jpg",
        "review_pl": "Flagowy model OpenAI — trzy warianty: Soul ($5/$30), Terra, Luna. Testy AI Search: anime girl z voice (17 min, 1 prompt, działało), symulacja płynów z hand tracking (12 min, zero błędów), muzyka DAW (2 prompty, przejścia i drop'y), 3D scene (spójne obiekty), manim animacja (19 min, złożone epicycles), deep research leukemii (31 min — tabele, cytowania, flowcharty), prezentacja finansowa (26 min — kompletna analiza). Mocne: agentic coding, minimal handholding, pracuje godzinami. Słabe: 89% błędów na Omniscience (specyficzne pytania), nie znalazł żaby, nie rozpoznał nowotworów MRI. Tańszy od Fable 2×. #1 na SWE-bench, ARC AGI 2 (92.5%).",
        "review_en": "OpenAI flagship — Soul ($5/$30), Terra, Luna. Tests: anime girl with voice (17 min, 1 prompt), liquid simulation with hand tracking (12 min, zero errors), music DAW (2 prompts, transitions), 3D scene (coherent objects), manim animation (19 min, complex epicycles), leukemia deep research (31 min, tables, citations, flowcharts), financial presentation (26 min, complete analysis). Strong: agentic coding, minimal handholding. Weak: 89% errors on Omniscience, failed frog test, failed tumor ID. 2x cheaper than Fable. #1 on SWE-bench, ARC AGI 2 (92.5%).",
        "links": [
          {
            "url": "https://openai.com/index/gpt-5-6/",
            "type": "official",
            "label_pl": "GPT 5.6",
            "label_en": "GPT 5.6"
          },
          {
            "url": "https://developers.openai.com/codex/app",
            "type": "demo",
            "label_pl": "Codex App",
            "label_en": "Codex App"
          },
          {
            "url": "https://youtu.be/SettwwX2cCI",
            "type": "demo",
            "label_pl": "Recenzja AI Search",
            "label_en": "Review AI Search"
          }
        ],
        "title_pl": "GPT 5.6 Soul",
        "title_en": "GPT 5.6 Soul",
        "category_pl": "LLM",
        "category_en": "LLM"
      }
    ]
  },
  {
    "num": "##27-1",
    "date": "2026-07-05",
    "title_pl": "LongCat 2.0 bez Nvidii, Fable 5 wraca, UBTech U1",
    "title_en": "LongCat 2.0 without Nvidia, Fable 5 returns, UBTech U1",
    "yt": "qtzzN8w2TvU",
    "collapsed": true,
    "items": [
      {
        "vendor": "Meituan",
        "date": "2026-07-04",
        "thumbnail": "rankings/releases_thumbs/longcat-2-0.jpg",
        "review_pl": "1.6T MoE (48B active), trenowany BEZ NVIDIA GPU — na ASIC super pods (prawdopodobnie Huawei). Zero rollbacks, zero loss spikes. Biję Gemini 3.1 Pro, blisko GPT 5.5 i Opus. Open-source. Historyczny — pierwszy frontier model bez NVIDIA. Implikacja: Chiny nie potrzebują Nvidii.",
        "review_en": "1.6T MoE (48B active), trained WITHOUT NVIDIA GPUs — on ASIC super pods (probably Huawei). Zero rollbacks, zero loss spikes. Beats Gemini 3.1 Pro, close to GPT 5.5 and Opus. Open-source. Historic — first frontier model without NVIDIA. Implication: China doesn't need NVIDIA.",
        "links": [
          {
            "url": "https://github.com/meituan/LongCat",
            "type": "github",
            "label_pl": "LongCat 2.0",
            "label_en": "LongCat 2.0"
          },
          {
            "url": "https://huggingface.co/meituan",
            "type": "huggingface",
            "label_pl": "HuggingFace",
            "label_en": "HuggingFace"
          }
        ],
        "title_pl": "LongCat 2.0",
        "title_en": "LongCat 2.0",
        "category_pl": "LLM",
        "category_en": "LLM"
      },
      {
        "vendor": "Anthropic",
        "date": "2026-07-02",
        "thumbnail": "rankings/releases_thumbs/claude-fable-5-re-release.jpg",
        "review_pl": "Fable 5 wraca globalnie ale jeszcze bardziej nerfed. Odmawia biologii, cybersecurity. Najpotężniejszy model jeśli możesz go użyć — ale guardrails blokują większość praktycznych zastosowań. Jedyne model który znalazł żabę w teście wizualnym.",
        "review_en": "Fable 5 returns globally but even more nerfed. Refuses biology, cybersecurity. Most powerful model if you can use it — but guardrails block most practical uses. Only model that found the frog in visual test.",
        "links": [
          {
            "url": "https://anthropic.com",
            "type": "official",
            "label_pl": "Anthropic",
            "label_en": "Anthropic"
          },
          {
            "url": "https://claude.ai",
            "type": "demo",
            "label_pl": "Claude",
            "label_en": "Claude"
          }
        ],
        "title_pl": "Claude Fable 5 (re-release)",
        "title_en": "Claude Fable 5 (re-release)",
        "category_pl": "LLM",
        "category_en": "LLM"
      },
      {
        "vendor": "UBTech",
        "date": "2026-06-30",
        "thumbnail": "rankings/releases_thumbs/ubtech-u1.jpg",
        "review_pl": "Humanoid companion robot — 13,000 pre-orders (więcej niż Unitree G1). Dostawy w tym roku. Robot-kompan do domu. Chiny znowu pierwsze w komercjalizacji robotyki.",
        "review_en": "Humanoid companion robot — 13,000 pre-orders (more than Unitree G1). Deliveries this year. Home companion robot. China first again in robotics commercialization.",
        "links": [
          {
            "url": "https://www.ubtrobot.com",
            "type": "official",
            "label_pl": "UBTech",
            "label_en": "UBTech"
          }
        ],
        "title_pl": "UBTech U1",
        "title_en": "UBTech U1",
        "category_pl": "Roboty humanoidalne",
        "category_en": "Humanoid Robots"
      },
      {
        "vendor": "Open-source",
        "date": "2026-06-30",
        "thumbnail": "rankings/releases_thumbs/musvit.jpg",
        "review_pl": "AI do czytania nut — rozumie symbole, timing, pitch, strukturę. 9.7M stron nut, 400K utworów. <500MB. Wypełnia lukę — AI rozumie obrazy, tekst, mowę, video ale nie nuty. Niszowe ale ważne.",
        "review_en": "AI for reading sheet music — understands symbols, timing, pitch, structure. 9.7M pages, 400K works. <500MB. Fills a gap — AI understands images, text, speech, video but not sheet music. Niche but important.",
        "links": [
          {
            "url": "https://github.com/naver-ai/musvit",
            "type": "github",
            "label_pl": "MusViT",
            "label_en": "MusViT"
          }
        ],
        "title_pl": "MusViT",
        "title_en": "MusViT",
        "category_pl": "Multimodalny",
        "category_en": "Multimodal"
      },
      {
        "vendor": "Open-source",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/agents-a1.jpg",
        "review_pl": "35B parametrów — bije Kimi K2.6 i DeepSeek V4 Pro (>1T) na HLE i FrontierScience. Biję nawet GPT 5.5 na niektórych benchmarkach. FP8: 37.7GB, Q4: 21GB. Może być nowym liderem modeli konsumenckich offline.",
        "review_en": "35B params — beats Kimi K2.6 and DeepSeek V4 Pro (>1T) on HLE and FrontierScience. Beats GPT 5.5 on some benchmarks. FP8: 37.7GB, Q4: 21GB. Could be new leader for offline consumer models.",
        "links": [
          {
            "url": "https://github.com/agents/a1",
            "type": "github",
            "label_pl": "Agents A1",
            "label_en": "Agents A1"
          }
        ],
        "title_pl": "Agents A1",
        "title_en": "Agents A1",
        "category_pl": "LLM",
        "category_en": "LLM"
      },
      {
        "vendor": "Google",
        "date": "2026-06-30",
        "thumbnail": "rankings/releases_thumbs/nano-banana-2-light.jpg",
        "review_pl": "Google najszybszy i najbardziej cost-efficient image model. High throughput — więcej obrazów niż Nano Banana 2. Dla production workflows gdzie liczy się szybkość i koszt.",
        "review_en": "Google's fastest and most cost-efficient image model. High throughput — more images than Nano Banana 2. For production workflows where speed and cost matter.",
        "links": [
          {
            "url": "https://ai.google.dev",
            "type": "official",
            "label_pl": "Google AI",
            "label_en": "Google AI"
          }
        ],
        "title_pl": "Nano Banana 2 Light",
        "title_en": "Nano Banana 2 Light",
        "category_pl": "Generacja obrazów",
        "category_en": "Image Generation"
      },
      {
        "vendor": "NVIDIA",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/aspire.jpg",
        "review_pl": "Self-improving system dla robotyki — roboty uczą się z nieudanych prób i tworzą reusable skills. Closed loop execution, growing skill library, evolutionary search. Nie jeden policy na zadanie, ale system który się rozwija.",
        "review_en": "Self-improving system for robotics — robots learn from failed attempts and create reusable skills. Closed loop execution, growing skill library, evolutionary search. Not one policy per task, but a system that evolves.",
        "links": [
          {
            "url": "https://research.nvidia.com",
            "type": "official",
            "label_pl": "NVIDIA Aspire",
            "label_en": "NVIDIA Aspire"
          }
        ],
        "title_pl": "Aspire",
        "title_en": "Aspire",
        "category_pl": "Roboty humanoidalne",
        "category_en": "Humanoid Robots"
      },
      {
        "vendor": "ComfyUI",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/comfy-mcp.jpg",
        "review_pl": "MCP (Model Context Protocol) dla ComfyUI — najpopularniejszej platformy open-source image/video/audio. Pozwala AI agentom kontrolować ComfyUI. Demokratyzuje generowanie — agent może tworzyć workflowy.",
        "review_en": "MCP for ComfyUI — most popular open-source image/video/audio platform. Lets AI agents control ComfyUI. Democratizes generation — agents can create workflows.",
        "links": [
          {
            "url": "https://github.com/comfyanonymous/ComfyUI",
            "type": "github",
            "label_pl": "ComfyUI",
            "label_en": "ComfyUI"
          }
        ],
        "title_pl": "Comfy MCP",
        "title_en": "Comfy MCP",
        "category_pl": "Programowanie",
        "category_en": "Coding"
      }
    ]
  }
];
