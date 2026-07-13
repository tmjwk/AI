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
        "title": "Grok 4.5",
        "vendor": "xAI",
        "category": "LLM",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/grok-4-5.svg",
        "review_pl": "Najmądrzejszy model xAI. 1.5T parametrów, trenowany z danymi Cursor (przejęte przez xAI). $2/$6 per M tok — 3× tańszy od GPT 5.6, znacznie tańszy od Fable ($10/$50). SWE-bench: bije Opus 4.8, za GPT 5.5 i Fable. 80 tok/s, mniej tokenów na zadanie. Mniej halucynacji niż Fable i GPT 5.6. Słabość: 500K context (krótszy niż 1M u konkurencji). LiveBench: nawet poniżej Opus 4.7 i Gemini 3.1 Pro. Pozycjonowanie uczciwe — nie najlepszy, ale bardzo efektywny.",
        "review_en": "Smartest xAI model. 1.5T params, trained with Cursor data. $2/$6 per M tok — 3x cheaper than GPT 5.6. SWE-bench beats Opus 4.8, behind GPT 5.5 and Fable. 80 tok/s, fewer tokens per task. Fewer hallucinations. Weakness: 500K context. LiveBench: below Opus 4.7 and Gemini 3.1 Pro. Honest positioning — not best, but very efficient.",
        "links": [
          {
            "label": "Grok 4.5",
            "url": "https://x.ai/news/grok-4-5",
            "type": "official"
          },
          {
            "label": "Cursor",
            "url": "https://cursor.com",
            "type": "demo"
          }
        ]
      },
      {
        "title": "Muse Spark 1.1",
        "vendor": "Meta",
        "category": "LLM",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/muse-spark-1-1.jpg",
        "review_pl": "Meta najlepszy model — multimodal, agentic. Browser capabilities (Instagram messaging!), kodowanie (diagnose bugs, code migration), planowanie. Self-reported benchmarks #1, ale niezależne rankingi: poza top 10, na poziomie GLM-5.2. Duży skok vs poprzednia wersja, ale wciąż daleko do frontier. Meta wciąż w tle wyścigu AI.",
        "review_en": "Meta's best — multimodal, agentic. Browser automation (Instagram messaging!), coding (bug diagnosis, migration). Self-reported #1, but independent rankings: outside top 10, GLM-5.2 level. Big jump vs previous, but still far from frontier.",
        "links": [
          {
            "label": "Muse Spark",
            "url": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/",
            "type": "official"
          }
        ]
      },
      {
        "title": "Hy3",
        "vendor": "Tencent",
        "category": "LLM",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/hy3.svg",
        "review_pl": "Open-source MoE 295B (21B active). Mniejszy niż GLM-5.2/DeepSeek V4 (>1T) ale prawie tak dobry. 256K context. Agentic coding, UI design, vibe coding. FB8: 300GB. Biję powyżej wagi — mniejszy model, mniejsze koszty, podobna jakość. Kolejny chiński open-source który demokratyzuje AI.",
        "review_en": "Open-source MoE 295B (21B active). Smaller than GLM-5.2/DeepSeek V4 but nearly as good. 256K context. Agentic coding, UI design. FB8: 300GB. Punches above weight — smaller, cheaper, similar quality.",
        "links": [
          {
            "label": "Hy3",
            "url": "https://hy.tencent.com/research/hy3",
            "type": "official"
          },
          {
            "label": "GitHub",
            "url": "https://github.com/tencent/Hy3",
            "type": "github"
          }
        ]
      },
      {
        "title": "GPT Live",
        "vendor": "OpenAI",
        "category": "TTS",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/gpt-live.svg",
        "review_pl": "Real-time voice model — naturalna konwersacja z przerywaniem, pauzami, potwierdzaniem. Deleguje trudne pytania do GPT 5.5 w tle. Live translation multi-language. Wizualne odpowiedzi (weather, maps, stocks). Dostępne dla WSZYSTKICH (free=mini, paid=full). Rewolucja UX — koniec rozmów z robotem. Słabość: czasem nienaturalne emocje w role-play.",
        "review_en": "Real-time voice — natural conversation with interruption, pauses, acknowledgment. Delegates hard questions to GPT 5.5. Multi-language translation. Visual responses. Available for ALL (free=mini, paid=full). UX revolution — end of talking to a robot.",
        "links": [
          {
            "label": "GPT Live",
            "url": "https://openai.com/index/introducing-gpt-live/",
            "type": "official"
          },
          {
            "label": "ChatGPT",
            "url": "https://chatgpt.com",
            "type": "demo"
          }
        ]
      },
      {
        "title": "ABot World",
        "vendor": "AMap CVLab",
        "category": "World Models",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/abot-world.jpg",
        "review_pl": "Open-source (Apache 2) interaktywny świat — 720p@16fps, latency ~1s. Nieskończony świat (1h+). 24GB — mieści się na 4090. Najdłuższy interaktywny świat jaki istnieje. Komercyjne użycie dozwolone. Pierwszy world model gotowy do produkcji.",
        "review_en": "Open-source (Apache 2) interactive world — 720p@16fps, ~1s latency. Infinite world (1h+). 24GB — fits 4090. Longest interactive world. Commercial use allowed. First production-ready world model.",
        "links": [
          {
            "label": "ABot World",
            "url": "https://amap-cvlab.github.io/ABot-World/",
            "type": "official"
          },
          {
            "label": "HuggingFace",
            "url": "https://huggingface.co/amap-cvlab",
            "type": "huggingface"
          }
        ]
      },
      {
        "title": "Seedream 5 Pro",
        "vendor": "ByteDance",
        "category": "Image Generation",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/seedream-5-pro.svg",
        "review_pl": "Image model z edycją, referencjami, transparent layers. Annotacje rysowane na obrazie. Multilingual. Poziom Nano Banana, blisko GPT Image 2. Mocne w infographics i posterach. Słabość: brak na niezależnych leaderboardach.",
        "review_en": "Image model with editing, references, transparent layers. Drawn annotations. Multilingual. Nano Banana level, close to GPT Image 2. Strong in infographics. Weakness: no independent benchmarks.",
        "links": [
          {
            "label": "Seedream 5 Pro",
            "url": "https://seed.bytedance.com/en/seedream5_0_pro",
            "type": "official"
          },
          {
            "label": "Dreamina",
            "url": "https://dreamina.jianying.com",
            "type": "demo"
          }
        ]
      },
      {
        "title": "Muse Image",
        "vendor": "Meta",
        "category": "Image Generation",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/muse-image.jpg",
        "review_pl": "Agent-style image generation — planuje, myśli, szuka (web, Marketplace) przed generowaniem. Instagram profile references DOMYŚLNIE WŁĄCZONE — privacy skandal. Trzeba ręcznie wyłączyć. Silny w reasoning ale ethically kontrowersyjny.",
        "review_en": "Agent-style generation — plans, thinks, searches before generating. Instagram profile references ON BY DEFAULT — privacy scandal. Must manually disable. Strong reasoning but ethically controversial.",
        "links": [
          {
            "label": "Muse Image",
            "url": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl",
            "type": "official"
          },
          {
            "label": "Meta AI",
            "url": "https://meta.ai",
            "type": "demo"
          }
        ]
      },
      {
        "title": "Muse Video",
        "vendor": "Meta",
        "category": "Video Generation",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/muse-video.jpg",
        "review_pl": "Native sound, złożone koncepcje (Bernoulli's principle), juggling, realistic. Tylko preview — brak detali (duration, resolution, pricing). Obiecujący ale niedostępny.",
        "review_en": "Native sound, complex concepts (Bernoulli's principle), juggling, realistic. Preview only — no details. Promising but unavailable.",
        "links": [
          {
            "label": "Muse Video",
            "url": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl",
            "type": "official"
          }
        ]
      },
      {
        "title": "Reve 2.1",
        "vendor": "Reve",
        "category": "Image Generation",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/reve-2-1.jpg",
        "review_pl": "#2 na leaderboardach (za GPT Image 2). 4K (16MP). Bounding box microediting. Silny visual reasoning i text rendering. Closed, paid. Dobra alternatywa dla GPT Image 2 — tańszy i szybszy.",
        "review_en": "#2 on leaderboards (behind GPT Image 2). 4K (16MP). Bounding box microediting. Strong visual reasoning. Closed, paid. Good GPT Image 2 alternative — cheaper and faster.",
        "links": [
          {
            "label": "Reve 2.1",
            "url": "https://blog.reve.com/posts/launching-reve-2.1/",
            "type": "official"
          },
          {
            "label": "Reve",
            "url": "https://reve.com",
            "type": "demo"
          }
        ]
      },
      {
        "title": "LingBot World 2",
        "vendor": "Robbyant",
        "category": "World Models",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/lingbot-world-2.jpg",
        "review_pl": "720p@60fps — jakość gry komercyjnej. Akcje, eventy, kontrola obiektów (nie tylko postaci). 86GB. Fast inference model wydany. Najwyższy FPS w open-source world models.",
        "review_en": "720p@60fps — commercial game quality. Actions, events, object control. 86GB. Fast inference released. Highest FPS in open-source world models.",
        "links": [
          {
            "label": "LingBot World 2",
            "url": "https://technology.robbyant.com/lingbot-world-v2",
            "type": "official"
          }
        ]
      },
      {
        "title": "Mira",
        "vendor": "Mira WM",
        "category": "World Models",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/mira.svg",
        "review_pl": "Multiplayer 4 graczy w real-time. 5B diffusion model, 20fps na B200. 10,000h gameplay training. Pierwszy multiplayer world model — gaming bez gamedev.",
        "review_en": "4-player multiplayer real-time. 5B diffusion model, 20fps on B200. 10,000h gameplay training. First multiplayer world model — gaming without gamedev.",
        "links": [
          {
            "label": "Mira",
            "url": "https://mira-wm.com/",
            "type": "official"
          },
          {
            "label": "Play",
            "url": "https://mira-wm.com/",
            "type": "demo"
          }
        ]
      },
      {
        "title": "Alaya World",
        "vendor": "Alaya Lab",
        "category": "World Models",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/alaya-world.jpg",
        "review_pl": "Persistent memory — spójność scen po odwróceniu wzroku. Prompt editing w czasie (fireworks, potwory). 720p@24fps, 1+ minuta. Rozwiązuje największy problem world models (warping).",
        "review_en": "Persistent memory — scene consistency. Real-time prompt editing. 720p@24fps, 1+ minute. Solves biggest world model problem (warping).",
        "links": [
          {
            "label": "Alaya World",
            "url": "https://alaya-lab.github.io/AlayaWorld/",
            "type": "official"
          }
        ]
      },
      {
        "title": "SeFi image",
        "vendor": "JM Liu",
        "category": "Image Generation",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/sefi-image.svg",
        "review_pl": "Open-source 1B-5B, dual-stream (layout oddzielnie od tekstury). Biję Qwen Image i Z-Image. Mniej niż 10GB. Demokratyzacja — mały model bije duże. Szybszy niż Krea 2/Ideogram.",
        "review_en": "Open-source 1B-5B, dual-stream. Beats Qwen Image and Z-Image. Under 10GB. Democratization — small beats big. Faster than Krea 2/Ideogram.",
        "links": [
          {
            "label": "SeFi image",
            "url": "https://jmliu206.github.io/sefi-web/",
            "type": "official"
          }
        ]
      },
      {
        "title": "PixWorld",
        "vendor": "SenseGen Gao",
        "category": "3D Generation",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/pixworld.jpg",
        "review_pl": "3D scenes w pixel space (nie latent). 4-step: scena w 6s@480p — 1000× szybciej niż diffusion. Koniec latent space monopoly. Kod i model do wydania.",
        "review_en": "3D in pixel space (not latent). 4-step: scene in 6s@480p — 1000x faster than diffusion. End of latent space monopoly. Code and model to be released.",
        "links": [
          {
            "label": "PixWorld",
            "url": "https://sensengao.github.io/PixWorld/",
            "type": "official"
          }
        ]
      },
      {
        "title": "Booster T2",
        "vendor": "Booster Robotics",
        "category": "Humanoid Robots",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/booster-t2.jpg",
        "review_pl": "75 DOF, open-source ecosystem (gym + train). Wall jumps, 360 aerial flips. Open-source workflow od symulacji do real world. Optimus i Figure nadal nie potrafią tych akrobacji.",
        "review_en": "75 DOF, open-source ecosystem (gym + train). Wall jumps, 360 flips. Open-source from simulation to real world. Optimus and Figure still can't do these acrobatics.",
        "links": [
          {
            "label": "Booster Robotics",
            "url": "https://github.com/boosterrobotics",
            "type": "github"
          }
        ]
      },
      {
        "title": "Wan Streamer 0.2",
        "vendor": "Wan",
        "category": "Realtime Avatars",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/wan-streamer-0-2.jpg",
        "review_pl": "Real-time avatars — 640px, 25fps, 200ms latency. Dowolna postać (kot, dziecko, fikcyjna). Tylko paper, nie open-source jeszcze.",
        "review_en": "Real-time avatars — 640px, 25fps, 200ms latency. Any character. Paper only, not open-source yet.",
        "links": [
          {
            "label": "Wan Streamer",
            "url": "https://wan-streamer.com/v0.2/",
            "type": "official"
          }
        ]
      },
      {
        "title": "ProxyPose",
        "vendor": "Ruihang Zhang",
        "category": "Multimodal",
        "date": "2026-07-12",
        "thumbnail": "rankings/releases_thumbs/proxypose.jpg",
        "review_pl": "3D tracking obiektów z 2D video. Proxy shape + geometria. Transparentne/odbijające powierzchnie. 30GB (bazuje na Wan 2.1). AR/VR implications.",
        "review_en": "3D object tracking from 2D video. Proxy shape + geometry. Transparent/reflective surfaces. 30GB (based on Wan 2.1). AR/VR implications.",
        "links": [
          {
            "label": "ProxyPose",
            "url": "https://ruihangzhang97.github.io/proxypose/",
            "type": "official"
          }
        ]
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
        "title": "GPT 5.6 Soul",
        "vendor": "OpenAI",
        "category": "LLM",
        "date": "2026-07-10",
        "thumbnail": "rankings/releases_thumbs/gpt-5-6-soul.jpg",
        "review_pl": "Flagowy model OpenAI — trzy warianty: Soul ($5/$30), Terra, Luna. Testy AI Search: anime girl z voice (17 min, 1 prompt, działało), symulacja płynów z hand tracking (12 min, zero błędów), muzyka DAW (2 prompty, przejścia i drop'y), 3D scene (spójne obiekty), manim animacja (19 min, złożone epicycles), deep research leukemii (31 min — tabele, cytowania, flowcharty), prezentacja finansowa (26 min — kompletna analiza). Mocne: agentic coding, minimal handholding, pracuje godzinami. Słabe: 89% błędów na Omniscience (specyficzne pytania), nie znalazł żaby, nie rozpoznał nowotworów MRI. Tańszy od Fable 2×. #1 na SWE-bench, ARC AGI 2 (92.5%).",
        "review_en": "OpenAI flagship — Soul ($5/$30), Terra, Luna. Tests: anime girl with voice (17 min, 1 prompt), liquid simulation with hand tracking (12 min, zero errors), music DAW (2 prompts, transitions), 3D scene (coherent objects), manim animation (19 min, complex epicycles), leukemia deep research (31 min, tables, citations, flowcharts), financial presentation (26 min, complete analysis). Strong: agentic coding, minimal handholding. Weak: 89% errors on Omniscience, failed frog test, failed tumor ID. 2x cheaper than Fable. #1 on SWE-bench, ARC AGI 2 (92.5%).",
        "links": [
          {
            "label": "GPT 5.6",
            "url": "https://openai.com/index/gpt-5-6/",
            "type": "official"
          },
          {
            "label": "Codex App",
            "url": "https://developers.openai.com/codex/app",
            "type": "demo"
          },
          {
            "label": "Review AI Search",
            "url": "https://youtu.be/SettwwX2cCI",
            "type": "demo"
          }
        ]
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
        "title": "LongCat 2.0",
        "vendor": "Meituan",
        "category": "LLM",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/longcat-2-0.jpg",
        "review_pl": "1.6T MoE (48B active), trenowany BEZ NVIDIA GPU — na ASIC super pods (prawdopodobnie Huawei). Zero rollbacks, zero loss spikes. Biję Gemini 3.1 Pro, blisko GPT 5.5 i Opus. Open-source. Historyczny — pierwszy frontier model bez NVIDIA. Implikacja: Chiny nie potrzebują Nvidii.",
        "review_en": "1.6T MoE (48B active), trained WITHOUT NVIDIA GPUs — on ASIC super pods (probably Huawei). Zero rollbacks, zero loss spikes. Beats Gemini 3.1 Pro, close to GPT 5.5 and Opus. Open-source. Historic — first frontier model without NVIDIA. Implication: China doesn't need NVIDIA.",
        "links": [
          {
            "label": "LongCat 2.0",
            "url": "https://github.com/meituan/LongCat",
            "type": "github"
          },
          {
            "label": "HuggingFace",
            "url": "https://huggingface.co/meituan",
            "type": "huggingface"
          }
        ]
      },
      {
        "title": "Claude Fable 5 (re-release)",
        "vendor": "Anthropic",
        "category": "LLM",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/claude-fable-5-re-release.jpg",
        "review_pl": "Fable 5 wraca globalnie ale jeszcze bardziej nerfed. Odmawia biologii, cybersecurity. Najpotężniejszy model jeśli możesz go użyć — ale guardrails blokują większość praktycznych zastosowań. Jedyne model który znalazł żabę w teście wizualnym.",
        "review_en": "Fable 5 returns globally but even more nerfed. Refuses biology, cybersecurity. Most powerful model if you can use it — but guardrails block most practical uses. Only model that found the frog in visual test.",
        "links": [
          {
            "label": "Anthropic",
            "url": "https://anthropic.com",
            "type": "official"
          },
          {
            "label": "Claude",
            "url": "https://claude.ai",
            "type": "demo"
          }
        ]
      },
      {
        "title": "UBTech U1",
        "vendor": "UBTech",
        "category": "Humanoid Robots",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/ubtech-u1.jpg",
        "review_pl": "Humanoid companion robot — 13,000 pre-orders (więcej niż Unitree G1). Dostawy w tym roku. Robot-kompan do domu. Chiny znowu pierwsze w komercjalizacji robotyki.",
        "review_en": "Humanoid companion robot — 13,000 pre-orders (more than Unitree G1). Deliveries this year. Home companion robot. China first again in robotics commercialization.",
        "links": [
          {
            "label": "UBTech",
            "url": "https://www.ubtrobot.com",
            "type": "official"
          }
        ]
      },
      {
        "title": "MusViT",
        "vendor": "Open-source",
        "category": "Multimodal",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/musvit.jpg",
        "review_pl": "AI do czytania nut — rozumie symbole, timing, pitch, strukturę. 9.7M stron nut, 400K utworów. <500MB. Wypełnia lukę — AI rozumie obrazy, tekst, mowę, video ale nie nuty. Niszowe ale ważne.",
        "review_en": "AI for reading sheet music — understands symbols, timing, pitch, structure. 9.7M pages, 400K works. <500MB. Fills a gap — AI understands images, text, speech, video but not sheet music. Niche but important.",
        "links": [
          {
            "label": "MusViT",
            "url": "https://github.com/naver-ai/musvit",
            "type": "github"
          }
        ]
      },
      {
        "title": "Agents A1",
        "vendor": "Open-source",
        "category": "LLM",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/agents-a1.jpg",
        "review_pl": "35B parametrów — bije Kimi K2.6 i DeepSeek V4 Pro (>1T) na HLE i FrontierScience. Biję nawet GPT 5.5 na niektórych benchmarkach. FP8: 37.7GB, Q4: 21GB. Może być nowym liderem modeli konsumenckich offline.",
        "review_en": "35B params — beats Kimi K2.6 and DeepSeek V4 Pro (>1T) on HLE and FrontierScience. Beats GPT 5.5 on some benchmarks. FP8: 37.7GB, Q4: 21GB. Could be new leader for offline consumer models.",
        "links": [
          {
            "label": "Agents A1",
            "url": "https://github.com/agents/a1",
            "type": "github"
          }
        ]
      },
      {
        "title": "Nano Banana 2 Light",
        "vendor": "Google",
        "category": "Image Generation",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/nano-banana-2-light.jpg",
        "review_pl": "Google najszybszy i najbardziej cost-efficient image model. High throughput — więcej obrazów niż Nano Banana 2. Dla production workflows gdzie liczy się szybkość i koszt.",
        "review_en": "Google's fastest and most cost-efficient image model. High throughput — more images than Nano Banana 2. For production workflows where speed and cost matter.",
        "links": [
          {
            "label": "Google AI",
            "url": "https://ai.google.dev",
            "type": "official"
          }
        ]
      },
      {
        "title": "Aspire",
        "vendor": "NVIDIA",
        "category": "Humanoid Robots",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/aspire.jpg",
        "review_pl": "Self-improving system dla robotyki — roboty uczą się z nieudanych prób i tworzą reusable skills. Closed loop execution, growing skill library, evolutionary search. Nie jeden policy na zadanie, ale system który się rozwija.",
        "review_en": "Self-improving system for robotics — robots learn from failed attempts and create reusable skills. Closed loop execution, growing skill library, evolutionary search. Not one policy per task, but a system that evolves.",
        "links": [
          {
            "label": "NVIDIA Aspire",
            "url": "https://research.nvidia.com",
            "type": "official"
          }
        ]
      },
      {
        "title": "Comfy MCP",
        "vendor": "ComfyUI",
        "category": "Coding",
        "date": "2026-07-05",
        "thumbnail": "rankings/releases_thumbs/comfy-mcp.jpg",
        "review_pl": "MCP (Model Context Protocol) dla ComfyUI — najpopularniejszej platformy open-source image/video/audio. Pozwala AI agentom kontrolować ComfyUI. Demokratyzuje generowanie — agent może tworzyć workflowy.",
        "review_en": "MCP for ComfyUI — most popular open-source image/video/audio platform. Lets AI agents control ComfyUI. Democratizes generation — agents can create workflows.",
        "links": [
          {
            "label": "ComfyUI",
            "url": "https://github.com/comfyanonymous/ComfyUI",
            "type": "github"
          }
        ]
      }
    ]
  }
];
