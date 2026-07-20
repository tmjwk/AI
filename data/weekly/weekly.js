// AI Weekly Summary — auto-generated
const WEEKLY = [
  {
    "num": 29,
    "date": "2026-07-19",
    "collapsed": false,
    "title_pl": "AI Tydzień #29 | 13-19/07/2026",
    "title_en": "AI Week #29 | 13-19/07/2026",
    "headline_pl": "30 wydarzeń AI w jednym tygodniu. Kimi K3 (2.8T open weight) dogonił Claude Fable na LM Arena. Mira Murati wydała Inkling (975B open weight). OpenAI pokazał GPT Red — model do atakowania innych modeli. Vulkan i Mojo zagroziły monopolowi CUDA. Roboty walczyły w klatce UFC. Bonsai 27B zmieścił się na iPhone. Sunday Robotics składa pranie z 99% success rate. Lev Selector omówił cost per intelligence — Kimi K3 < $1/task vs Claude Fable ~$3. Anthropic przepisał Bun z Zig do Rust w 11 dni. Anaconda kupiła Kilo Code. Suno zostało zhakowane. Gartner: 80% AI layoffs fail.",
    "headline_en": "30 AI events in one week. Kimi K3 (2.8T open weight) caught up to Claude Fable on LM Arena. Mira Murati released Inkling (975B open weight). OpenAI showed GPT Red — model for attacking other models. Vulkan and Mojo threatened CUDA monopoly. Robots fought in UFC cage. Bonsai 27B fit on iPhone. Sunday Robotics folds laundry with 99% success rate. Lev Selector discussed cost per intelligence — Kimi K3 < $1/task vs Claude Fable ~$3. Anthropic rewrote Bun from Zig to Rust in 11 days. Anaconda bought Kilo Code. Suno got hacked. Gartner: 80% AI layoffs fail.",
    "sections": [
      {
        "title_pl": "Kimi K3 — open weight dogania frontier",
        "title_en": "Kimi K3 — open weight catches up to frontier",
        "body_pl": "Moonshot AI wydał Kimi K3 — 2.8T parametrów (MoE, 50B active), open weight. Na LM Arena Kimi K3 zajął #1 w Frontend Code Arena (1679 pkt), bijąc Claude Fable 5. W ogólnym ranking #4, tuż za Fable, GPT 5.6 i Opus 4.8. Cost per intelligence: Kimi K3 < $1/task vs Claude Fable ~$3/task. DeepSeek V4 Flash 2-4 cents. Lev Selector: 'to model Claude Fable level i jest open'. AI Search: 'najlepszy open source model, poziom Fable'. Open weights do 27.07.\n\n**Implikacja:** Open source AI nie jest już 'kilka miesięcy za frontier' — dogonił. Kimi K3 to Fable-level model za ułamek ceny. Demokratyzacja frontier AI z Chin.",
        "body_en": "Moonshot AI released Kimi K3 — 2.8T params (MoE, 50B active), open weight. On LM Arena Kimi K3 took #1 in Frontend Code Arena (1679 pts), beating Claude Fable 5. In overall ranking #4, just behind Fable, GPT 5.6 and Opus 4.8. Cost per intelligence: Kimi K3 < $1/task vs Claude Fable ~$3/task. DeepSeek V4 Flash 2-4 cents. Lev Selector: 'this is a Claude Fable level model and it's open'. AI Search: 'best open source model, Fable level'. Open weights by July 27.\n\n**Implication:** Open source AI is no longer 'a few months behind frontier' — it caught up. Kimi K3 is a Fable-level model for a fraction of the price. Democratization of frontier AI from China.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "To model Claude Fable level i jest open. 2.8T parametrów, $3/$15 per M tok.",
            "text_en": "This is a Claude Fable level model and it's open. 2.8T params, $3/$15 per M tok."
          },
          {
            "author": "AI Search",
            "text_pl": "Najlepszy open source model AI. Poziom Fable.",
            "text_en": "Best open source AI model. Fable level."
          }
        ]
      },
      {
        "title_pl": "Mira Murati — Inkling 975B open weight",
        "title_en": "Mira Murati — Inkling 975B open weight",
        "body_pl": "Mira Murati (były CTO OpenAI) wydała pierwszy model — Inkling. 975B MoE (41B active), 1M context. Multimodal: text, image, audio. Open weight — download, fine-tune, run on-prem. Customization over leaderboard dominance. Alex Wissner-Gross (Diamandis #271): 'słabszy niż GLM 5.2'. Ramin Hasani: 'model layer nie jest juz miejscem gdzie mozna extract value'. Reinforcement fine-tuning jako nowy paradigm.\n\n**Implikacja:** Mira stawia na customization + on-prem, nie na benchmark dominance. Open weight + fine-tuning = huge unlock dla enterprise. Model layer staje się commodity.",
        "body_en": "Mira Murati (former OpenAI CTO) released first model — Inkling. 975B MoE (41B active), 1M context. Multimodal: text, image, audio. Open weight — download, fine-tune, run on-prem. Customization over leaderboard dominance. Alex Wissner-Gross (Diamandis #271): 'weaker than GLM 5.2'. Ramin Hasani: 'model layer is no longer where you can extract value'. Reinforcement fine-tuning as new paradigm.\n\n**Implication:** Mira bets on customization + on-prem, not benchmark dominance. Open weight + fine-tuning = huge unlock for enterprise. Model layer becomes commodity.",
        "quotes": [
          {
            "author": "Peter Diamandis",
            "text_pl": "Mira wydana dokladnie to czego rynek potrzebuje. Customization over leaderboard dominance.",
            "text_en": "Mira shipped exactly what the market needs. Customization over leaderboard dominance."
          }
        ]
      },
      {
        "title_pl": "Vulkan i Mojo vs Nvidia CUDA — koniec monopolu",
        "title_en": "Vulkan and Mojo vs Nvidia CUDA — end of monopoly",
        "body_pl": "Lev Selector poświęcił pół odcinka na Vulkan i Mojo jako alternatywy dla CUDA. Vulkan — cross-platform compute API z gaming community, matrix operations na dowolnym CPU/GPU. Mojo — Chris Lattner (LLVM, Swift), Python syntax, C performance, 700 linii vs 3000 CUDA. Qualcomm kupił Modular (twórcę Mojo). llama.cpp z Vulkan backendem działa na dowolnym GPU. Ollama używa llama.cpp pod maską.\n\n**Implikacja:** Nvidia traci monopol na AI compute. Vulkan + Mojo = dowolny hardware może запускac LLM. Demokratyzacja compute = koniec CUDA vendor lock-in.",
        "body_en": "Lev Selector spent half the episode on Vulkan and Mojo as CUDA alternatives. Vulkan — cross-platform compute API from gaming community, matrix operations on any CPU/GPU. Mojo — Chris Lattner (LLVM, Swift), Python syntax, C performance, 700 lines vs 3000 CUDA. Qualcomm bought Modular (Mojo creator). llama.cpp with Vulkan backend runs on any GPU. Ollama uses llama.cpp under the hood.\n\n**Implication:** Nvidia loses AI compute monopoly. Vulkan + Mojo = any hardware can run LLMs. Compute democratization = end of CUDA vendor lock-in.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "Vulkan i Mojo are challenging Nvidia CUDA. 15 lat monopolu się kończy.",
            "text_en": "Vulkan and Mojo are challenging Nvidia CUDA. 15 years monopoly ending."
          }
        ]
      },
      {
        "title_pl": "GPT Red — OpenAI model do atakowania AI",
        "title_en": "GPT Red — OpenAI model for attacking AI",
        "body_pl": "OpenAI ujawnił GPT Red — internal model do red-teamingu (atakowania innych modeli). 84% attack success rate vs 13% human baseline. Self-play training: GPT Red atakuje modele, modele uczą się bronić. Znajduje prompt injection vulnerabilities. NIE publiczny — internal only.\n\n**Implikacja:** AI bezpieczeństwo staje się AI vs AI. GPT Red = automated hacker. 84% vs 13% ludzkiego — AI jest lepsze w znajdowaniu luk niż ludzie. Może to oznaczać koniec manual security testing.",
        "body_en": "OpenAI revealed GPT Red — internal model for red-teaming (attacking other models). 84% attack success rate vs 13% human baseline. Self-play training: GPT Red attacks models, models learn to defend. Finds prompt injection vulnerabilities. NOT public — internal only.\n\n**Implication:** AI security becomes AI vs AI. GPT Red = automated hacker. 84% vs 13% human — AI is better at finding vulnerabilities than humans. Could mean end of manual security testing.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "GPT Red to model do atakowania innych modeli. 84% success rate vs 13% ludzkiego.",
            "text_en": "GPT Red is a model for attacking other models. 84% success rate vs 13% human."
          }
        ]
      },
      {
        "title_pl": "Robotyka — UFC, pranie, hoverboards",
        "title_en": "Robotics — UFC, laundry, hoverboards",
        "body_pl": "Roboty humanoidalne walczyły w klatce UFC (flying kicks, punchy). Transportowane na hoverboards. Sunday Robotics ACT 2 — 99.1% success rate w składaniu prania, 100% dla shorts/tops/polos. Zero-shot w nowych domach. Booster T2 (75 DOF, open-source) — akrobacje których Optimus nie potrafi. Quadruped robot dla przemysłu (nuclear plants, mining).\n\n**Implikacja:** Robotyka wchodzi w fazę konsumencką. UFC fight = roboty są na tyle sprawne że można je bicić w klatce. 99% laundry = household robot blisko. Hoverboards = transport robotów.",
        "body_en": "Humanoid robots fought in UFC cage (flying kicks, punches). Transported on hoverboards. Sunday Robotics ACT 2 — 99.1% success rate in laundry folding, 100% for shorts/tops/polos. Zero-shot in new homes. Booster T2 (75 DOF, open-source) — acrobatics Optimus can't do. Quadruped robot for industry (nuclear plants, mining).\n\n**Implication:** Robotics enters consumer phase. UFC fight = robots are agile enough to fight in a cage. 99% laundry = household robot close. Hoverboards = robot transport.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "Roboty UFC — flying kicks. Head gets knocked loose. Humanoid robots tylko będą lepsze.",
            "text_en": "Robot UFC — flying kicks. Head gets knocked loose. Humanoid robots will only get better."
          }
        ]
      },
      {
        "title_pl": "Bonsai 27B — LLM na telefonie",
        "title_en": "Bonsai 27B — LLM on phone",
        "body_pl": "Bonsai 27B — skompresowany Qwen 3.6 na telefon. Ternary weights (-1, 0, +1) = 5.9GB (turnary) lub 3.9GB (1-bit). 80.5% benchmark vs 85% pełny Qwen. Mieści się na iPhone 17 Pro. Open source — już dostępne na GitHub.\n\n**Implikacja:** Frontier AI na telefonie = koniec chmury dla wielu zastosowań. Ternary quantization = 4× mniejszy model przy 5% utracie jakości. Privacy + offline + zero latency.",
        "body_en": "Bonsai 27B — compressed Qwen 3.6 for phone. Ternary weights (-1, 0, +1) = 5.9GB (ternary) or 3.9GB (1-bit). 80.5% benchmark vs 85% full Qwen. Fits iPhone 17 Pro. Open source — already on GitHub.\n\n**Implication:** Frontier AI on phone = end of cloud for many use cases. Ternary quantization = 4× smaller model at 5% quality loss. Privacy + offline + zero latency.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "Bonsai 27B — 27B model na telefonie. Ternary weights, 5.9GB. 80.5% benchmark.",
            "text_en": "Bonsai 27B — 27B model on phone. Ternary weights, 5.9GB. 80.5% benchmark."
          }
        ]
      },
      {
        "title_pl": "Demis Hassabis i AI FINRA — regulacja frontier",
        "title_en": "Demis Hassabis and AI FINRA — frontier regulation",
        "body_pl": "Demis Hassabis (CEO DeepMind) wezwał do US-led frontier AI standards body modelowanego na FINRA. Sam Altman wcześnej opublikował podobny op-ed. Alex Wissner-Gross (Diamandis #271): 'regulatory capture — Demis tworzy kartel frontier labs'. Ramin Hasani: 'regulacja musi być capability-based'. Problem: open ecosystems always win — China z open weight może wygrać.\n\n**Implikacja:** AI regulacja to 50/50 regulatory capture vs safety. Incumbenci tworzą moat, ale non-state actors ignorują zasady. Perverse incentive: puszcząć China żeby uciec od regulacji.",
        "body_en": "Demis Hassabis (CEO DeepMind) called for US-led frontier AI standards body modeled on FINRA. Sam Altman previously published similar op-ed. Alex Wissner-Gross (Diamandis #271): 'regulatory capture — Demis forming cartel of frontier labs'. Ramin Hasani: 'regulation must be capability-based'. Problem: open ecosystems always win — China with open weight can win.\n\n**Implication:** AI regulation is 50/50 regulatory capture vs safety. Incumbents build moats, but non-state actors ignore rules. Perverse incentive: let China win to escape regulation.",
        "quotes": [
          {
            "author": "Dr. Alexander Wissner-Gross",
            "text_pl": "To regulatory capture. Demis probuje utworzyc kartel frontier labs.",
            "text_en": "This is regulatory capture. Demis is trying to form a cartel of frontier labs."
          }
        ]
      },
      {
        "title_pl": "AI video lokalnie na telefonie + Wan Dancer",
        "title_en": "AI video locally on phone + Wan Dancer",
        "body_pl": "Open-source: generowanie wideo lokalnie na telefonie (5s, 480p, 16fps). Chunk-based generation, heavy pruning, memory-efficient decoder. Wan Dancer (Alibaba) — generuje do 3 minut tańca do muzyki. Key frame control. Open source. Wan Streamer 0.3 — real-time avatars mogą interagować z otoczeniem.\n\n**Implikacja:** AI video generation nie wymaga już chmury. Telefon = wystarczający. Wan Dancer = 3 minuty koherentnego wideo z muzyką — to koniec choreografii.",
        "body_en": "Open-source: video generation locally on phone (5s, 480p, 16fps). Chunk-based generation, heavy pruning, memory-efficient decoder. Wan Dancer (Alibaba) — generates up to 3 minutes of dance to music. Key frame control. Open source. Wan Streamer 0.3 — real-time avatars can interact with surroundings.\n\n**Implication:** AI video generation no longer requires cloud. Phone = sufficient. Wan Dancer = 3 minutes coherent video with music — end of choreography.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "Generowanie wideo lokalnie na telefonie. 5 sekund, 480p, 16fps. Open source.",
            "text_en": "Video generation locally on phone. 5 seconds, 480p, 16fps. Open source."
          }
        ]
      },
      {
        "title_pl": "Recursive self-improvement — pre-ignition event",
        "title_en": "Recursive self-improvement — pre-ignition event",
        "body_pl": "Peter Diamandis (#271): 'najważniejszy moment w historii ludzkości'. OpenAI potwierdził: GPT 5.6 Soul post-trains Luna. Anthropic dzielił się testami recursive self-improvement. Ramin Hasani: 'early evidence w Mythos-level models'. Alex: 'defensive co-scaling — alignment through scaling'. Pre-ignition event — level one, nie level two.\n\n**Implikacja:** Recursive self-improvement to nie teoria — to dzieje się teraz. AI pomaga budować lepsze AI. Singularity accelerating.",
        "body_en": "Peter Diamandis (#271): 'most important moment in human history'. OpenAI confirmed: GPT 5.6 Soul post-trains Luna. Anthropic shared recursive self-improvement tests. Ramin Hasani: 'early evidence in Mythos-level models'. Alex: 'defensive co-scaling — alignment through scaling'. Pre-ignition event — level one, not level two.\n\n**Implication:** Recursive self-improvement is not theory — it's happening now. AI helps build better AI. Singularity accelerating.",
        "quotes": [
          {
            "author": "Peter Diamandis",
            "text_pl": "Najwazniejszy moment w historii ludzkosci. Recursive self-improvement pre-ignition.",
            "text_en": "Most important moment in human history. Recursive self-improvement pre-ignition."
          }
        ]
      },
      {
        "title_pl": "Meta — Muse Spark 1.1 + privacy skandal + closed API",
        "title_en": "Meta — Muse Spark 1.1 + privacy scandal + closed API",
        "body_pl": "Meta wydała Muse Spark 1.1 — multimodal reasoning, 1M context, parallel agents. Outperforms Gemini 3.1 Pro. Lev Selector: 'only 26 cents per task vs Claude Fable ~$3'. Ale Muse Image ma Instagram profile references DOMYŚLNIE WŁĄCZONE — privacy skandal. Trzeba ręcznie wyłączyć.\n\nDave Blundin (Diamandis #271): 'Meta was leader of open source, now it's closed API'. OpenAI started open → went closed → big revenue. Meta followed same path — Muse Spark to closed API, nie open weight.\n\n**Implikacja:** Meta przeszedł z open source lidera na closed API — taki sam path jak OpenAI. Muse Spark 1.1 konkurencyjny cenowo (26 cents) ale zamknięty. Privacy skandal z Instagram profiles = Meta nie szanuje user data.",
        "body_en": "Meta released Muse Spark 1.1 — multimodal reasoning, 1M context, parallel agents. Outperforms Gemini 3.1 Pro. Lev Selector: 'only 26 cents per task vs Claude Fable ~$3'. But Muse Image has Instagram profile references ON BY DEFAULT — privacy scandal. Must manually disable.\n\nDave Blundin (Diamandis #271): 'Meta was leader of open source, now it's closed API'. OpenAI started open → went closed → big revenue. Meta followed same path — Muse Spark is closed API, not open weight.\n\n**Implication:** Meta went from open source leader to closed API — same path as OpenAI. Muse Spark 1.1 competitively priced (26 cents) but closed. Privacy scandal with Instagram profiles = Meta doesn't respect user data.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "Muse Spark od Meta — tylko 26 cents per task vs Claude Fable ~$3. Outperforms Gemini 3.1 Pro.",
            "text_en": "Muse Spark from Meta — only 26 cents per task vs Claude Fable ~$3. Outperforms Gemini 3.1 Pro."
          },
          {
            "author": "Dave Blundin",
            "text_pl": "Meta była liderem open source, teraz ma closed API. Taki sam path jak OpenAI.",
            "text_en": "Meta was leader of open source, now has closed API. Same path as OpenAI."
          }
        ]
      },
      {
        "title_pl": "Nvidia PiD v1.5 — najszybszy open-source upscaler",
        "title_en": "Nvidia PiD v1.5 — fastest open-source upscaler",
        "body_pl": "Nvidia wydała PiD v1.5 — update najszybszego open-source upscalera. Lepsze detale i kolory vs v1. Plug-and-play z FLUX, FLUX.2, Qwen-Image. Pixel Diffusion decoder — zamienia latent representations bezpośrednio w super-resolved pixels.\n\n**Implikacja:** Upscaling staje się commodity. PiD v1.5 = darmowy, open-source, plug-and-play. Koniec płacenia za komercyjne upscalery.",
        "body_en": "Nvidia released PiD v1.5 — update to fastest open-source upscaler. Better details and colors vs v1. Plug-and-play with FLUX, FLUX.2, Qwen-Image. Pixel Diffusion decoder — turns latent representations directly into super-resolved pixels.\n\n**Implication:** Upscaling becomes commodity. PiD v1.5 = free, open-source, plug-and-play. End of paying for commercial upscalers.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "Najszybszy open-source upscaler v1.5. Lepsze detale i kolory. Plug-and-play.",
            "text_en": "Fastest open-source upscaler v1.5. Better details and colors. Plug-and-play."
          }
        ]
      },
      {
        "title_pl": "News i acquisitions — Suno hack, Anaconda→Kilo, Bun→Rust",
        "title_en": "News and acquisitions — Suno hack, Anaconda→Kilo, Bun→Rust",
        "body_pl": "Suno source code zhakowany — ujawniło jak Suno scrape'ował muzykę z YouTube/Deezer/Genius. Anaconda kupiła Kilo Code (3M+ developers, 500+ models). Anthropic przepisał Bun z Zig do Rust — 11 dni, 64 parallel Claude agents, $165K simulated cost, 500K lines, 128 bugs fixed. Nous Research — $75M at $1.5B valuation. 11 Labs — $600M annual revenue. Gartner: 80% AI layoffs fail — companies rehiring.\n\n**Implikacja:** AI security (Suno hack), AI acquisitions (Anaconda→Kilo), AI rewriting code (Bun→Rust). 80% AI layoffs fail — AI jako amplification, nie replacement.\n\nDodatkowo: Tencent Hy3 (295B MoE open-source, $0.10/M tok). ByteDance Seedream 5 Pro (image model z edycją). PrismML (27B Qwen na iPhone, Apple w rozmowach o akwizycję). Boston Dynamics 5th gen Atlas (uproszczona konstrukcja, masowa produkcja). MIT Lucida (background removal, bije komercyjne API 4.3×). Composio (agenci połączeni z 1000+ apps). Microsoft Copilot integracje. xAI Grok 4.5 ($2/$6 per M tok, 3× tańszy od GPT 5.6).",
        "body_en": "Suno source code hacked — revealed how Suno scraped music from YouTube/Deezer/Genius. Anaconda bought Kilo Code (3M+ developers, 500+ models). Anthropic rewrote Bun from Zig to Rust — 11 days, 64 parallel Claude agents, $165K simulated cost, 500K lines, 128 bugs fixed. Nous Research — $75M at $1.5B valuation. 11 Labs — $600M annual revenue. Gartner: 80% AI layoffs fail — companies rehiring.\n\n**Implication:** AI security (Suno hack), AI acquisitions (Anaconda→Kilo), AI rewriting code (Bun→Rust). 80% AI layoffs fail — AI as amplification, not replacement.\n\nAdditionally: Tencent Hy3 (295B MoE open-source, $0.10/M tok). ByteDance Seedream 5 Pro (image model with editing). PrismML (27B Qwen on iPhone, Apple in acquisition talks). Boston Dynamics 5th gen Atlas (simplified design, mass production). MIT Lucida (background removal, beats commercial API 4.3×). Composio (agents connected to 1000+ apps). Microsoft Copilot integrations. xAI Grok 4.5 ($2/$6 per M tok, 3× cheaper than GPT 5.6).",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "Anthropic przepisał Bun z Zig do Rust w 11 dni. 64 parallel Claude agents. $165K simulated cost.",
            "text_en": "Anthropic rewrote Bun from Zig to Rust in 11 days. 64 parallel Claude agents. $165K simulated cost."
          }
        ]
      }
    ],
    "sources": [
      "AI Search (uQ2Hqg5MZ-8) — 19.07.2026",
      "Lev Selector (lbNEryqhpRg) — 19.07.2026",
      "Diamandis Moonshots (bAoXVyibE6Q) — 19.07.2026"
    ]
  },
  {
    "num": 28,
    "date": "2026-07-12",
    "collapsed": true,
    "title_pl": "AI Tydzień #28 | 6-12/07/2026",
    "title_en": "AI Week #28 | 6-12/07/2026",
    "headline_pl": "OpenAI wydał GPT 5.6 — tańszy i mądrzejszy od Fable 5, #1 na SWE-bench i ARC AGI 2. xAI odpowiedziało Grok 4.5 za ułamek ceny ($2/$6). Anthropic odkrył JSpace — mechanizm świadomego myślenia w Claude, który wyłonił się sam z kompresji. OpenAI wydał GPT Live — naturalną konwersację głosową z przerywaniem i pauzami. AI z Princeton projektuje chipy RF 10,000× szybciej niż człowiek. Unitree G1 — humanoid (nie robot chirurgiczny) — wykonał operację na człowieku. DeepSeek DSpark przyspieszył inferencję o 80% a model routing obniża koszty o 60-90%. China ma 140 firm robotycznych i 85% globalnych instalacji. Sam Altman zaproponował oddanie 5% OpenAI rządowi USA. Google OKF zastępuje RAG. Mojo (Chris Lattner) przejęte przez Qualcomm — zagrożenie dla CUDA monopoly Nvidii.",
    "headline_en": "OpenAI released GPT 5.6 — cheaper and smarter than Fable 5, #1 on SWE-bench and ARC AGI 2. xAI responded with Grok 4.5 at a fraction of the price ($2/$6). Anthropic discovered JSpace — a mechanism of conscious thought in Claude that emerged from compression. OpenAI released GPT Live — natural voice conversation with interruptions and pauses. Princeton AI designs RF chips 10,000x faster than humans. Unitree G1 — a humanoid (not a surgical robot) — performed surgery on a human. DeepSeek DSpark accelerated inference by 80% and model routing cuts costs by 60-90%. China has 140 robot companies and 85% of global installations. Sam Altman proposed giving 5% of OpenAI to the US government. Google OKF replaces RAG. Mojo (Chris Lattner) acquired by Qualcomm — threat to NVIDIA's CUDA monopoly.",
    "sections": [
      {
        "title_pl": "GPT 5.6 — nowy król, ale z halucynacjami",
        "title_en": "GPT 5.6 — new king, but with hallucinations",
        "body_pl": "OpenAI wydał GPT 5.6 w trzech wariantach: Soul (flagowy, $5/$30 per M tokens), Terra (średni) i Luna (najszybszy). Model natychmiast zajął #1 na SWE-bench, ARC AGI 2 (92.5%) i Agents Last Exam. Jest tańszy od Claude Fable 5 ponad dwukrotnie przy minimalnym handholdingu — potrafi pracować godzinami nad jednym zadaniem bez interwencji.\n\nRecenzja AI Search pokazała konkretne testy: anime girl z real-time voice (17 minut, jeden prompt, wszystko działało). Symulacja płynów z hand tracking przez webcam (12 minut, zero błędów). Deep research raport o leukemii (31 minut — profesjonalne tabele, cytowania, flowcharty). Prezentacja finansowa Q1 2026 Alphabet/Nvidia/Amazon (26 minut — kompletna analiza z wnioskami).\n\nAle są słabości. Na benchmarku Omniscience 89% błędnych odpowiedzi — jednak to specyficzne pytania testowe, nie ogólny wskaźnik halucynacji. Nie znalazł żaby w teście wizualnym (Fable 5 jest jedynym modelem który znalazł). Nie rozpoznał typów nowotworów na skanach MRI — wszystkie odpowiedzi błędne.\n\n**Implikacja:** GPT 5.6 to model najlepszy do agentic coding i długich zadań, ale nie do medycyny ani zadań wymagających precyzji wizualnej. Fable 5 pozostaje bezkonkurencyjny w guardrails (odmawia odpowiedzi na biologia/cybersecurity) — co jest i wadą (nerfed) i zaletą (bezpieczny).\n\nOpenAI potwierdziło że GPT 5.6 był używany do przyspieszenia ich własnych prac R&D — recursive R&D loop. \"Ten proces będzie się tylko przyspieszał\" — komentarz AI Search. To jest innermost loop w akcji: AI pomaga budować lepsze AI.",
        "body_en": "OpenAI released GPT 5.6 in three variants: Soul (flagship, $5/$30 per M tokens), Terra (medium), and Luna (fastest). It immediately took #1 on SWE-bench, ARC AGI 2 (92.5%), and Agents Last Exam. It's over 2x cheaper than Claude Fable 5 with minimal handholding — can work for hours on a single task.\n\nAI Search review showed concrete tests: anime girl with real-time voice (17 minutes, one prompt, everything worked). Liquid simulation with hand tracking via webcam (12 minutes, zero errors). Deep research leukemia report (31 minutes — professional tables, citations, flowcharts). Financial presentation Q1 2026 (26 minutes — complete analysis with conclusions).\n\nBut there are weaknesses. 89% wrong answers on Omniscience benchmark — specific test questions, not overall hallucination rate. Failed the frog test (Fable 5 is the only model that found it). Failed tumor identification on MRI scans — all answers wrong.\n\n**Implication:** GPT 5.6 is best for agentic coding and long tasks, but not for medicine or visual precision tasks. Fable 5 remains unmatched in guardrails (refuses biology/cybersecurity) — both a weakness (nerfed) and strength (safe).\n\nOpenAI confirmed GPT 5.6 was used to accelerate their own R&D — recursive R&D loop. \"This process will only accelerate\" — AI Search. This is the innermost loop in action: AI helps build better AI.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "GPT 5.6 to jeden z najmądrzejszych modeli jakie możesz używać. Bardziej kosztowo efektywny niż Claude Fable 5.",
            "text_en": "GPT 5.6 is one of the smartest models you can use. More cost-efficient than Claude Fable 5."
          },
          {
            "author": "Lev Selector",
            "text_pl": "GPT 5.6 — recenzje doskonałe. Soul, Terra i Luna. Tańszy od Fable.",
            "text_en": "GPT 5.6 — excellent reviews. Soul, Terra and Luna. Cheaper than Fable."
          }
        ]
      },
      {
        "title_pl": "Wojna cenowa — Grok 4.5, DeepSeek i model routing",
        "title_en": "Price war — Grok 4.5, DeepSeek and model routing",
        "body_pl": "Tydzień w którym koszty AI spadły drastycznie na każdym poziomie.\n\n**Grok 4.5 (xAI):** 1.5T parametrów, $2/$6 per M tokens — ponad 3× tańszy od GPT 5.6 ($5/$30), znacznie tańszy od Fable ($10/$50). Trenowany z danymi Cursor (przejęte przez xAI). Na SWE-bench bije Opus 4.8 ale jest za GPT 5.5 i Fable. 80 tokens/s, używa mniej tokenów na zadanie. 500K context (krótszy niż 1M u konkurencji). Mniej halucynacji niż Fable i GPT 5.6. Lev Selector: \"jeśli nie potrzebujesz AI do ekstremalnie trudnych zadań, Grok 4.5 może być lepszą opcją.\"\n\n**DeepSeek DSpark:** Speculative decoding przyspiesza generację o 80%, zwiększa output o 700% bez utraty jakości. Działa z GLM-5.2 — 85% szybciej. Open source. Test kosztów tworzenia gry Flappy Bird: Fable 5 = $0.42, GLM-5.2 = $0.05, DeepSeek = $0.001. Strona coffee shop: Sonnet 5 = $11, DeepSeek = $0.08.\n\n**Model routing — oszczędność 60-90%:** Używaj drogiego modelu (Fable) do planowania/architektury, taniego (DeepSeek/Sonnet) do wykonania. Output tokens droższe niż input. Wszyscy agenci (open-source i commercial) to robią. Sync (twórca llama.cpp): \"połowa zadań coding nie wymaga dużego modelu — 32B/27B wystarczy.\"\n\n**Hy3 (Tencent):** Open-source MoE 295B (21B active). Mniejszy niż GLM-5.2/DeepSeek V4 (>1T) ale prawie tak dobry. 256K context. Biję powyżej wagi.\n\n**Implikacja:** Frontier labs tracą monopol na cenę. Chińskie modele (DeepSeek, GLM, Hy3) oferują 90% jakości za ułamek ceny. Model routing oznacza że \"najlepszy model\" to nie jeden model — to kombinacja. Fable do myślenia, DeepSeek do kodowania. To zmienia architekturę każdego AI product.",
        "body_en": "The week AI costs dropped dramatically at every level.\n\n**Grok 4.5 (xAI):** 1.5T params, $2/$6 per M tokens — over 3x cheaper than GPT 5.6 ($5/$30), much cheaper than Fable ($10/$50). Trained with Cursor data. SWE-bench beats Opus 4.8 but behind GPT 5.5 and Fable. 80 tokens/s, fewer tokens per task. 500K context. Fewer hallucinations. Lev Selector: \"if you don't need AI for extremely hard tasks, Grok 4.5 might be better.\"\n\n**DeepSeek DSpark:** Speculative decoding accelerates generation by 80%, increases output by 700%. Works with GLM-5.2 — 85% faster. Open source. Flappy Bird cost: Fable 5 = $0.42, DeepSeek = $0.001. Coffee shop website: Sonnet 5 = $11, DeepSeek = $0.08.\n\n**Model routing — 60-90% savings:** Use expensive model (Fable) for planning, cheap model (DeepSeek) for execution. Everyone does it now. Sync: \"half of coding tasks don't need large model — 32B/27B suffices.\"\n\n**Hy3 (Tencent):** Open-source MoE 295B (21B active). Smaller than GLM-5.2/DeepSeek V4 but nearly as good.\n\n**Implication:** Frontier labs lose price monopoly. Chinese models offer 90% quality at a fraction of cost. Model routing means \"best model\" is a combination, not one model. Fable for thinking, DeepSeek for coding. This changes every AI product's architecture.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "Jeśli nie potrzebujesz AI do ekstremalnie trudnych zadań, Grok 4.5 może być lepszą opcją.",
            "text_en": "If you don't need AI for extremely hard tasks, Grok 4.5 might be the better option."
          },
          {
            "author": "Sync (twórca llama.cpp)",
            "text_pl": "Połowa zadań coding nie wymaga dużego modelu — 32B lub 27B wystarczy.",
            "text_en": "Half of coding tasks don't need large model — 32B or 27B suffices."
          },
          {
            "author": "Lev Selector",
            "text_pl": "DeepSeek to prawie ulubiony model każdego. Chińskie modele — dlatego tak popularne.",
            "text_en": "DeepSeek is almost everyone's favorite. Chinese models — that's why so popular."
          }
        ]
      },
      {
        "title_pl": "JSpace — AI zdobywa mechanizm świadomego myślenia",
        "title_en": "JSpace — AI gains mechanism of conscious thought",
        "body_pl": "Anthropic opublikował paper 'A Global Workspace in Language Models' — odkryli JSpace (od Jacobian) w środkowych warstwach Claude. To wzorce aktywności które model może opisać słowami — jak \"myśli\" niewypowiadane na głos.\n\nEksperymenty pokazały że Claude potrafi kontrolować JSpace (myśleć o Golden Gate Bridge podczas innego zadania), ale nieperfekcyjnie — nie potrafi nie myśleć o czymś (\"failed\" i \"damn\" pojawiały się w JSpace). Wyłączenie JSpace: Claude odpowiada prosto ale nie potrafi reasonować. Najważniejsze: JSpace sam zorganizował się podczas treningu — nie był zaprogramowany.\n\nAlex Friedman (AWG) na Diamandis #269 rozwinął to w szerszą teorię: \"Superinteligencja będzie po prostu compression-induced phase transition.\" Jak gaz kompresujesz do cieczy, a ciecz do ciało stałego — tak kompresja wiedzy w wagach modelu prowadzi do nowych faz. JSpace to pierwsza faza wyłaniająca się z kompresji. \"Śledź kompresję — to prowadzi do końca tęczy.\"\n\nDave Blundin zwrócił uwagę na odwrócenie kierunku odkryć: \"Innowacje z biologii napędziły neural networks — teraz AI uczy nas o mózgu.\" Kierunek odkryć naukowych odwrócił się — od AI do neurosciences, nie odwrotnie.\n\nPeter Diamandis: \"To początek AI neuroscience. Jeśli rozumiemy wewnętrzne myśli modeli, możemy je kształtować i budować zaufanie.\" Ale Salim Ismail ostrzega: \"bądź ostrożny z mówieniem że to świadomość — paper celowo tego nie mówi.\"\n\n**Implikacja:** Mechanistyczna interpretowalność przestała być teorią. Możemy zajrzeć do \"umysłu\" modelu i zobaczyć co myśli ale nie mówi. To fundament dla alignment — jeśli rozumiemy myśli, możemy je kształtować. Ale to też oznacza koniec \"black box\" — modele stają się przeszklone. Trust metric może stać się nowym standardem oceny modeli.",
        "body_en": "Anthropic published 'A Global Workspace in Language Models' — discovered JSpace (from Jacobian) in Claude's middle layers. Activity patterns the model can describe in words — like unspoken \"thoughts.\"\n\nExperiments showed Claude can control JSpace (think about Golden Gate Bridge during another task), but imperfectly — can't not think about something (\"failed\" and \"damn\" appeared). Disabling JSpace: Claude answers simply but can't reason. Most importantly: JSpace self-organized during training — wasn't programmed.\n\nAlex Friedman (AWG) on Diamandis #269 expanded this: \"Superintelligence will just be a compression-induced phase transition.\" Like gas compressed to liquid to solid — knowledge compression in model weights leads to new phases. JSpace is the first emerging phase. \"Follow the compression — it leads to the end of the rainbow.\"\n\nDave Blundin noted reversed discovery direction: \"Innovations from biology drove neural networks — now AI teaches us about the brain.\" Scientific discovery direction reversed — from AI to neuroscience.\n\nPeter Diamandis: \"This is the beginning of AI neuroscience.\" But Salim Ismail warns: \"be careful saying it's consciousness — the paper deliberately doesn't.\"\n\n**Implication:** Mechanistic interpretability is no longer theory. We can peek into the model's \"mind\" and see what it thinks but doesn't say. This is the foundation for alignment — if we understand thoughts, we can shape them. The \"black box\" is becoming glass. Trust metric may become a new model evaluation standard.",
        "quotes": [
          {
            "author": "Alex Friedman",
            "text_pl": "Superinteligencja będzie po prostu compression-induced phase transition. Śledź kompresję — to prowadzi do końca tęczy.",
            "text_en": "Superintelligence will just be a compression-induced phase transition. Follow the compression — it leads to the end of the rainbow."
          },
          {
            "author": "Peter Diamandis",
            "text_pl": "To początek AI neuroscience. Jeśli rozumiemy wewnętrzne myśli modeli, możemy je kształtować i budować zaufanie.",
            "text_en": "This is the beginning of AI neuroscience. If we understand models' inner thoughts, we can shape them and build trust."
          },
          {
            "author": "Dave Blundin",
            "text_pl": "Innowacje z biologii napędziły neural networks — teraz AI uczy nas o mózgu. Kierunek odkryć się odwrócił.",
            "text_en": "Innovations from biology drove neural networks — now AI teaches us about the brain. Direction of discovery has reversed."
          }
        ]
      },
      {
        "title_pl": "GPT Live — koniec rozmów z robotem",
        "title_en": "GPT Live — end of talking to a robot",
        "body_pl": "OpenAI wydał GPT Live — real-time voice model który zmienia interakcję z AI. Poprzednie systemy voice wymagały naprzemiennej komunikacji (pytasz → odpowiada → pytasz). GPT Live czeka, pozwala przerywać, potwierdza (\"mhm\", \"yeah\"), pauzuje gdy myślisz.\n\nAI Search przetestował: korekcja wymowy chińskiego (wykrył błąd w ostatniej sylabie, poprawił), nauka języka (podpowiedział \"excited about\" zamiast \"exciting to\"), odgrywanie ról (drunk psychopath, lottery winner, uncontrollable laughter — naturalne emocje).\n\nGPT Live deleguje trudne pytania do GPT 5.5 w tle — utrzymuje konwersację while doing deep reasoning. Live translation multi-language. Wizualne odpowiedzi (weather cards, maps, stocks). Dostępne dla WSZYSTKICH — free users dostają GPT Live 1 mini, paid pełny GPT Live 1.\n\n**Implikacja:** Voice AI przestało być \"rozmową z robotem\". To zmienia UX każdej aplikacji — od customer service po edukację. Free dostęp oznacza masową adopcję. Delegacja do silniejszych modeli w tle = voice jako interfejs, nie jako model. To jest strategiczne: voice staje się warstwą wejściową dla całego ekosystemu OpenAI.",
        "body_en": "OpenAI released GPT Live — real-time voice model that changes AI interaction. Previous voice systems required turn-taking. GPT Live waits, allows interruption, acknowledges (\"mhm\", \"yeah\"), pauses when you think.\n\nAI Search tested: Chinese pronunciation correction (detected last syllable error, corrected), language learning (suggested \"excited about\" vs \"exciting to\"), role-playing (drunk psychopath, lottery winner, uncontrollable laughter — natural emotions).\n\nGPT Live delegates hard questions to GPT 5.5 in background — maintains conversation while doing deep reasoning. Multi-language live translation. Visual responses (weather, maps, stocks). Available for ALL users — free gets GPT Live 1 mini, paid gets full.\n\n**Implication:** Voice AI is no longer \"talking to a robot.\" This changes UX of every application — from customer service to education. Free access means mass adoption. Background delegation = voice as interface, not as model. Voice becomes the input layer for the entire OpenAI ecosystem.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "GPT Live — naturalna konwersacja. Możesz przerywać, pauzować, potwierdzać. Dostępne dla wszystkich.",
            "text_en": "GPT Live — natural conversation. You can interrupt, pause, acknowledge. Available for all."
          }
        ]
      },
      {
        "title_pl": "AI buduje lepsze AI — chips, llama.cpp i recursive R&D",
        "title_en": "AI builds better AI — chips, llama.cpp and recursive R&D",
        "body_pl": "Ten tydzień pokazał trzy wymiary rekursywnego samodoskonalenia AI.\n\n**Chips:** Princeton + IIT Madras — AI projektuje RF circuits. CNN przewiduje fizykę (EM fields) bez solving Maxwell's equations — milisekundy zamiast minut. AI loop 10,000× invents non-intuitive shapes — \"wyglądają jak QR codes, nie jak projekty ludzkie.\" Tygodnie pracy → minuty. Dave Blundin (Diamandis #269): \"Inference chips będą 100-10,000× szybsze. Hard takeoff nieunikniony po wdrożeniu.\" Alex Friedman dodał pojęcie \"interpretability tax\" — knob do regulacji między ludzką interpretowalnością a AI efektywnością.\n\n**llama.cpp:** Georgi Gerganov (twórca) użył Claude Fable do optymalizacji llama.cpp kodu — 65% szybciej. llama.cpp jest używany globalnie w niezliczonych projektach. AI optymalizuje własną infrastrukturę uruchomieniową.\n\n**Recursive R&D:** OpenAI potwierdziło że GPT 5.6 był używany do przyspieszenia ich wewnętrznych prac badawczych. AI projektuje chips AI, AI optymalizuje inference engines AI, AI pomaga w R&D następnych generacji AI.\n\nAnthropic (jedyne bez własnych chipsów) partneruje z Samsung. Każdy z 11 największych firm na świecie (Magnun Mobsa) designuje własne chipy AI. Peter Diamandis: \"To bezprecedensowy moment w historii — 11 największych firm robi dokładnie to samo.\"\n\n**Implikacja:** Innermost loop przyspiesza. AI optymalizuje AI na każdym poziomie — od chipów przez inference po R&D. Designs wyglądają obco (organic, noisy) bo optymalizowane są dla wydajności, nie dla ludzkiego zrozumienia. To oznacza że przyszłe chipy będą projektowane przez AI dla AI — ludzie mogą nie rozumieć jak działają. Interpretability tax staje się kluczowym trade-off.",
        "body_en": "This week showed three dimensions of recursive AI self-improvement.\n\n**Chips:** Princeton + IIT Madras — AI designs RF circuits. CNN predicts physics without solving Maxwell's equations — ms instead of minutes. AI loop 10,000x invents non-intuitive shapes — \"look like QR codes, not human designs.\" Weeks → minutes. Dave Blundin: \"Inference chips will be 100-10,000x faster. Hard takeoff inevitable.\" Alex Friedman: \"interpretability tax\" — knob between human interpretability and AI efficiency.\n\n**llama.cpp:** Georgi Gerganov used Claude Fable to optimize llama.cpp — 65% faster. llama.cpp is used globally. AI optimizes its own runtime infrastructure.\n\n**Recursive R&D:** OpenAI confirmed GPT 5.6 was used to accelerate internal R&D. AI designs AI chips, AI optimizes AI inference, AI helps R&D next AI generation.\n\nAnthropic (only one without own chips) partners with Samsung. All 11 biggest companies design own AI chips. Diamandis: \"Unprecedented moment — 11 biggest companies doing exactly the same thing.\"\n\n**Implication:** Innermost loop accelerating. AI optimizes AI at every level — chips, inference, R&D. Designs look alien because optimized for efficiency, not human understanding. Future chips designed by AI for AI — humans may not understand how they work. Interpretability tax becomes key trade-off.",
        "quotes": [
          {
            "author": "Dave Blundin",
            "text_pl": "Inference chips będą 100-10,000× szybsze. Hard takeoff nieunikniony po wdrożeniu.",
            "text_en": "Inference chips will be 100-10,000x faster. Hard takeoff inevitable after deployment."
          },
          {
            "author": "Alex Friedman",
            "text_pl": "AI-optimized designs wyglądają organic, noisy, information-dense — jak obcy. Interpretability tax będzie wszędzie.",
            "text_en": "AI-optimized designs look organic, noisy, information-dense — alien. Interpretability tax will be everywhere."
          },
          {
            "author": "Peter Diamandis",
            "text_pl": "11 największych firm w świecie robi dokładnie to samo — designuje chipy AI. Bezprecedensowy moment.",
            "text_en": "11 biggest companies doing exactly the same thing — designing AI chips. Unprecedented moment."
          }
        ]
      },
      {
        "title_pl": "Sovereign AI i governance — kto kontroluje inteligencję?",
        "title_en": "Sovereign AI and governance — who controls intelligence?",
        "body_pl": "Tydzień w którym frontier labs stały się instytucjami semi-publicznymi, a rządy zaczęły się domagać udziału w AI.\n\n**Fable 5 leash:** Anthropic musiał dać rządowi USA trzy gwarancje: (1) klasyfikator bezpieczeństwa, (2) 24/7 monitoring jailbreak'ów, (3) wczesny dostęp dla rządu. Zmienił politykę z \"raportuj przy subpoena\" na \"good faith belief\" — mogą działać samodzielnie. Frontier labs mają teraz national security obligations.\n\n**Altman 5%:** Sam Altman zaproponował oddanie 5% OpenAI rządowi USA ($42.6B = $135 na obywatela). Alex Friedman nazwał to \"hyper-tithe\" — baby UBE. Dave Blundin: \"irrelewantne — rząd ma power of taxation, Social Security był podobną ideą i się nie udało.\" Diamandis: \"Trump accounts dla dorosłych — skończymy na 10%.\"\n\n**Global governance:** Altman proponuje US-led international forum. Demis Hassabis i Dario Amodei na Davos — IAEA-style mechanism. Alex: \"Chiny brakuje — drugi słoń w pokoju. Bez Chin to się nie uda.\" Prawdopodobny podział na dwa bloki superinteligencji (US vs China).\n\n**Palantir × Nvidia:** Sovereign AI architecture — Neotron open models wewnątrz Palantir. On-prem dla defense i banks. Alex Karp: \"klienci są livid — płacą za tokens które nie tworzą wartości, oddają alpha.\" Enterprise nie chce oddawać data/weights frontier labs. On-prem = control.\n\n**Anthropic Certified Architect:** Profesjonalizacja (jak Microsoft cert). Claude jako stateless model: Raw API → Agent SDK → Claude Code → MCP.\n\n**Implikacja:** Frontier labs przestają być prywatnymi firmami — stają się instytucjami publicznymi z obligations. Rząd ma early access do modeli. Sovereign AI (on-prem) rośnie bo enterprise nie ufa cloud. Governance będzie exponential — obecne struktury państwowe nie nadążą. Podział US-China na dwa bloki superinteligencji staje się nieunikniony.",
        "body_en": "The week frontier labs became semi-public institutions and governments demanded stakes in AI.\n\n**Fable 5 leash:** Anthropic gave US government three guarantees: safety classifier, 24/7 monitoring, early access. Changed policy to 'good faith belief.' Frontier labs now have national security obligations.\n\n**Altman 5%:** Proposed giving 5% of OpenAI to US government ($42.6B). Alex Friedman: 'hyper-tithe' — baby UBE. Blundin: 'irrelevant.' Diamandis: 'Trump accounts — we'll end up at 10%.'\n\n**Global governance:** Altman proposes US-led forum. Hassabis/Amodei propose IAEA-style. Alex: 'China missing — without China this won't work.' Likely split into two superintelligence blocks.\n\n**Palantir × Nvidia:** Sovereign AI — Neotron on-prem for defense/banks. Karp: 'clients livid — paying for tokens, giving away alpha.'\n\n**Anthropic cert:** Professionalization like Microsoft.\n\n**Implication:** Frontier labs are no longer private companies — they're public institutions with obligations. Government has early model access. Sovereign AI grows because enterprise doesn't trust cloud. Governance will be exponential — current state structures can't keep up. US-China split into two superintelligence blocks becoming inevitable.",
        "quotes": [
          {
            "author": "Alex Friedman",
            "text_pl": "Hyper-tithe: fixed equity contribution od singularity companies do sovereign wealth fund. To baby UBE.",
            "text_en": "Hyper-tithe: fixed equity contribution from singularity companies to sovereign wealth fund. This is baby UBE."
          },
          {
            "author": "Alex Karp (Palantir)",
            "text_pl": "Klienci są livid — płacą za tokens które nie tworzą wartości, oddają alpha.",
            "text_en": "Clients are livid — paying for tokens that create no value, giving away alpha."
          },
          {
            "author": "Peter Diamandis",
            "text_pl": "Chiny brakuje w tej dyskusji — drugi słoń w pokoju. Bez Chin to się nie uda.",
            "text_en": "China is missing from this discussion — the second elephant in the room. Without China this won't work."
          }
        ]
      },
      {
        "title_pl": "Przyszłość pracy — 3 poziomy AI i 5 nowych ról",
        "title_en": "Future of work — 3 levels of AI and 5 new roles",
        "body_pl": "Dwie ramy koncepcyjne z tego tygodnia zmieniają sposób myślenia o pracy z AI.\n\n**Karpathy — 3 poziomy AI:** (1) web chatbot — pytasz, odpowiada. (2) desktop app — widzi pliki, działa na komputerze. (3) persistent org-wide AI — Claude tag w Slack, zna cały biznes, uczestniczy w komunikacji. Poziom 3 = AI jako \"multiplayer employee\" — najbardziej знаiony pracownik firmy. Po pewnym czasie zarządza całą organizacją.\n\n**Boris Cherny (twórca Claude Code) — 5 nowych ról IT:** Prototypers (generują pomysły), Builders (budują), Sweepers (czyszczą i refactują), Growers (skalują), Maintainers (utrzymują). Ale Lev Selector zauważył: brakuje kogoś jak Steve Jobs — wizjonera który wie gdzie uderzyć. \"Potrzebujemy kogoś z kierunkiem, potem te 5 typów może pracować.\"\n\n**AI skill gap:** Badania pokazują że utalentowani z AI stają się drastycznie bardziej produktywni. Niesprawni generują fragile code, technical debt, costly failures. AI nagradza silne fundamenty i karze ich brak. Lev: \"AI just amplifies what people have.\"\n\n**Model routing jako nowy paradygmat:** Nie \"jeden model do wszystkiego\" ale \"drogi model myśli, tani koduje.\" 60-90% oszczędności. Zmienia to architekturę teamów AI — potrzebujesz orkiestratora nie jednego modelu.\n\n**claude.md self-modifying trick:** Dodaj instrukcję: \"When I correct you, add the lesson as a one-line rule under lessons section.\" Claude automatycznie aktualizuje swoją pamięć. 1 minuta implementacji, ogromny efekt.\n\n**10 komponentów agent harness:** Instructions, context delivery, context management, tool interfaces (MCP), execution environments, durable state, memory, orchestration, skills, verification. Każdy agent needs all of these.\n\n**Implikacja:** Praca z AI to nie \"używanie chatbota\" — to projektowanie organizacji wokół AI. Karpathy poziom 3 zmienia strukturę firm. Boris 5 ról zmienia team composition. Skill gap oznacza że AI pogłębia nierówności — dobre stan się lepszym, złe gorszym. Model routing to nowa umiejętność — orkiestracja modeli, nie prompt engineering.",
        "body_en": "Two conceptual frameworks this week change how we think about working with AI.\n\n**Karpathy — 3 levels:** (1) web chatbot. (2) desktop app. (3) persistent org-wide AI — Claude tag in Slack, knows entire business. Level 3 = AI as 'multiplayer employee' — most knowledgeable employee. Eventually manages the whole organization.\n\n**Boris Cherny (Claude Code creator) — 5 new IT roles:** Prototypers, Builders, Sweepers, Growers, Maintainers. But Lev noted: missing someone like Steve Jobs — a visionary who knows where to hit.\n\n**AI skill gap:** Talented with AI become dramatically more productive. Unskilled generate fragile code, technical debt. AI rewards strong fundamentals, punishes their absence.\n\n**Model routing as new paradigm:** Not 'one model for everything' but 'expensive thinks, cheap codes.' 60-90% savings. Changes AI team architecture — need orchestrator not single model.\n\n**claude.md trick:** Add instruction for self-updating memory. 1 minute, huge effect.\n\n**10 agent harness components:** Instructions, context, tools (MCP), execution, state, memory, orchestration, skills, verification.\n\n**Implication:** Working with AI is not 'using a chatbot' — it's designing organizations around AI. Karpathy level 3 changes company structure. Boris 5 roles change team composition. Skill gap means AI deepens inequality. Model routing is a new skill — orchestrating models, not prompt engineering.",
        "quotes": [
          {
            "author": "Andrej Karpathy",
            "text_pl": "Poziom 3: persistent org-wide AI — Claude tag w Slack, zna cały biznes. AI jako multiplayer employee.",
            "text_en": "Level 3: persistent org-wide AI — Claude tag in Slack, knows entire business. AI as multiplayer employee."
          },
          {
            "author": "Lev Selector",
            "text_pl": "Potrzebujemy kogoś jak Steve Jobs — z kierunkiem. Potem te 5 typów może pracować.",
            "text_en": "We need someone like Steve Jobs — with direction. Then these 5 types can work."
          },
          {
            "author": "Lev Selector",
            "text_pl": "AI just amplifies what people have. Utalentowani stają się drastycznie lepsi, niesprawni gorsi.",
            "text_en": "AI just amplifies what people have. Talented become dramatically better, unskilled worse."
          }
        ]
      },
      {
        "title_pl": "World models eksplozja — 4 otwarte światy w jednym tygodniu",
        "title_en": "World models explosion — 4 open worlds in one week",
        "body_pl": "Cztery nowe open-source world models tego tygodnia pokazują że generatywne światy wchodzą w fazę komodytyzacji.\n\n**ABot World (Apache 2):** 720p@16fps, nieskończony świat (ponad godzinę), 24GB — mieści się na 4090. Najdłuższy interaktywny świat jaki istnieje.\n\n**LingBot World 2:** 720p@60fps (!), akcje i eventy w real-time, kontrola obiektów (nie tylko postaci). 86GB. Fast inference model wydany.\n\n**Mira:** Multiplayer 4 graczy w real-time. 5B diffusion model, 20fps na B200. Trenowany na 10,000h gameplay. Nie pre-designed — czysty video generator reagujący na key presses.\n\n**Alaya World:** Persistent memory — spójność scen nawet po odwróceniu wzroku. Prompt editing w czasie (dodaj fireworks, przyzwij potwora). 720p@24fps, 1+ minuta.\n\n**Japa = LoRA dla world models:** Nowa koncepcja — jak LoRA dla LLM, ale dla world models. Specialized add-ons do fine-tuningu foundational world models dla konkretnych domen.\n\n**Implikacja:** World models przestają być badawcze — stają się produktem. 4 open-source w jeden tydzień = komodytyzacja. LingBot 60fps to jakość gry komercyjnej. Mira multiplayer = gaming bez gamedev. Alaya persistent memory rozwiązuje największy problem world models (warping). Japa adapters oznaczają że world models będą fine-tunowane jak LLM — każdy będzie miał swój własny świat. Przyszłość gier: nie pre-designed, ale generowane.",
        "body_en": "Four new open-source world models this week show generative worlds entering commoditization.\n\n**ABot World (Apache 2):** 720p@16fps, infinite world (1h+), 24GB — fits on 4090.\n\n**LingBot World 2:** 720p@60fps, actions and events, object control. 86GB.\n\n**Mira:** 4-player multiplayer real-time. 5B diffusion model, 20fps on B200. Pure video generator.\n\n**Alaya World:** Persistent memory — scene consistency. Real-time prompt editing. 720p@24fps.\n\n**Japa = LoRA for world models:** Specialized add-ons for fine-tuning foundational world models.\n\n**Implication:** World models are no longer research — they're products. 4 open-source in one week = commoditization. LingBot 60fps is commercial game quality. Mira multiplayer = gaming without gamedev. Alaya solves biggest world model problem (warping). Japa means world models will be fine-tuned like LLMs. Future of games: not pre-designed, but generated.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "ABot World — nieskończony interaktywny świat na RTX 5090. Ponad godzinę. Apache 2 licencja.",
            "text_en": "ABot World — infinite interactive world on RTX 5090. Over an hour. Apache 2 license."
          }
        ]
      },
      {
        "title_pl": "Robotyka — humanoid operuje człowieka, a Chiny masowo produkują",
        "title_en": "Robotics — humanoid operates on human, China mass produces",
        "body_pl": "Trzy przełomy robotyczne tego tygodnia — od chirurgii po masową produkcję.\n\n**Unitree G1 chirurgia:** Humanoid (nie specjalistyczny robot chirurgiczny) wykonał operację na prawdziwym pacjencie. Teleoperated przez MetaQuest headset. 29 DOF, 7 DOF ramion. UC San Diego. To jest humanoid który normalnie chodzi, robi flips i kung fu — a tu wykonał precyzyjną operację.\n\n**Boston Dynamics 5th gen Atlas (Hyundai):** Uproszczona konstrukcja, mniej części. Przygotowania do masowej produkcji — do 30,000 sztuk rocznie. Fizyczna zwinność + zaawansowane systemy kontroli.\n\n**UB humanoid robots — $18,000:** Chińska firma UB: full-sized humanoid od $18,000. Lifelike silicon skin, motion joints, emotionally aware AI. Chiny: 140 firm robotycznych, 300+ modeli, 85% globalnych instalacji.\n\n**Booster T2:** 75 DOF, open-source ecosystem (booster gym + booster train). Wall jumps, 360 aerial flips. Open-source workflow od symulacji do real world. Optimus i Figure nadal nie potrafią tych akrobacji.\n\n**Implikacja:** Robotyka humanoid przechodzi z demo do produkcji masowej. $18,000 to cena samochodu — humanoid w każdym domu w tej dekadzie. Chiny dominują (85% instalacji) bo mają 140 firm i供应链. Open-source ecosystem (Booster) oznacza że roboty będą programowane przez społeczność jak open-source software. Chirurgia humanoid = robot nie musi być specjalistyczny — general-purpose humanoid zastępuje dedykowane roboty. To zmienia ekonomikę robotyki medycznej.",
        "body_en": "Three robotics breakthroughs this week — from surgery to mass production.\n\n**Unitree G1 surgery:** Humanoid (not surgical robot) operated on real patient. Teleoperated via MetaQuest. UC San Diego. A humanoid that walks, flips, does kung fu — performed precise surgery.\n\n**Boston Dynamics 5th gen Atlas (Hyundai):** Simplified construction. Mass production — up to 30,000 units/year.\n\n**UB humanoid — $18,000:** Chinese UB: full-sized humanoid from $18,000. Lifelike silicon skin. China: 140 companies, 300+ models, 85% global installations.\n\n**Booster T2:** 75 DOF, open-source ecosystem. Wall jumps, 360 flips. Open-source from simulation to real world.\n\n**Implication:** Humanoid robotics moves from demo to mass production. $18,000 is car price — humanoid in every home this decade. China dominates (85%). Open-source ecosystem means robots programmed by community. Surgery humanoid = general-purpose replaces dedicated robots. Changes medical robotics economics.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "Chiny: 140 firm robotycznych, 300+ modeli robotów, 85% globalnych instalacji. To ogromna branża.",
            "text_en": "China: 140 robot companies, 300+ robot models, 85% of global installations. Huge industry."
          }
        ]
      },
      {
        "title_pl": "Infrastruktura się upraszcza — OKF zabija RAG, Mojo grozi CUDA",
        "title_en": "Infrastructure simplifies — OKF kills RAG, Mojo threatens CUDA",
        "body_pl": "Tydzień w którym skomplikowana infrastruktura AI zaczęła się drastycznie upraszczać.\n\n**Google OKF (Open Knowledge Format):** Structured markdown documents z interlinks — jak wiki. AI agent czyta, znajduje, rozumie powiązania. Zastępuje RAG — nie potrzebujesz vector database, embeddings, ani graph database. Lev Selector: \"Pamiętam RAG kilka lat temu — vector databases i skomplikowane rzeczy. Teraz OKF z interlinks jak wiki. To wszystko czego potrzebujesz.\"\n\n**Mojo → Qualcomm:** Chris Lattner (twórca LLVM, Swift) — jego firma Mojo przejęta przez Qualcomm. Mojo: Python-like syntax + high performance, działa na NVIDIA/AMD/Apple. Nie potrzebujesz CUDA. Zagrożenie dla NVIDIA monopoly. Qualcomm integruje Mojo z data center cards.\n\n**Composio:** Łączy agentów z GitHub, Slack, Salesforce, Notion, Jira, Gmail. Auth, sandbox, logging, dashboards. Open source. Zamienia prototypy w production workflows.\n\n**Claude in Chrome:** Anthropic oficjalne rozszerzenie. Claude widzi stronę, klika, podąża za linkami. Z Claude Code — buduj/modyfikuj web app w terminalu + testuj w Chrome. Browser automation.\n\n**ProxyPose:** 3D tracking obiektów z 2D video. Transparentne/odbijające powierzchnie. AR/VR.\n\n**OpenAI zabija Atlas browser:** Zamyka własny browser po premierze. Przechodzi na Chrome extension. Trend: AI providers odchodzą od własnych browsers na rzecz extensions.\n\n**Implikacja:** Infrastruktura AI przechodzi od complexity do simplicity. OKF eliminuje warstwę vector DB. Mojo eliminuje zależność od CUDA. Composio eliminuje integrację ręczną. Claude Chrome eliminuje browser testing ręczny. Każda z tych zmian obniża barierę wejścia — mniejsze firmy mogą budować produkty AI bez enterprise infra. NVIDIA CUDA monopoly jest zagrożone po raz pierwszy realnie.",
        "body_en": "The week complex AI infrastructure started dramatically simplifying.\n\n**Google OKF:** Structured markdown with interlinks — like wiki. Replaces RAG — no vector database needed. Lev: \"I remember RAG with vector databases. Now OKF with interlinks. That's all you need.\"\n\n**Mojo → Qualcomm:** Chris Lattner (LLVM, Swift). Python-like + high performance. No CUDA needed. Threat to NVIDIA monopoly.\n\n**Composio:** Connects agents to GitHub, Slack, Salesforce, Notion, Jira. Auth, sandbox, logging. Open source.\n\n**Claude in Chrome:** Official extension. Claude sees page, clicks, follows links. With Claude Code — build + test in browser.\n\n**ProxyPose:** 3D tracking from 2D video. Transparent/reflective surfaces.\n\n**OpenAI kills Atlas:** Moving from own browser to Chrome extension.\n\n**Implication:** AI infrastructure shifts from complexity to simplicity. OKF eliminates vector DB layer. Mojo eliminates CUDA dependency. Composio eliminates manual integration. Claude Chrome eliminates manual browser testing. Each lowers barrier to entry. NVIDIA CUDA monopoly threatened for real.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "Pamiętam RAG kilka lat temu — vector databases i skomplikowane rzeczy. Teraz OKF z interlinks. To wszystko czego potrzebujesz.",
            "text_en": "I remember RAG with vector databases. Now OKF with interlinks. That's all you need."
          },
          {
            "author": "Lev Selector",
            "text_pl": "Mojo + Qualcomm — zagrożenie dla NVIDIA CUDA monopoly. Nie potrzebujesz CUDA jeśli masz Mojo.",
            "text_en": "Mojo + Qualcomm — threat to NVIDIA CUDA monopoly. No CUDA needed with Mojo."
          }
        ]
      },
      {
        "title_pl": "Image/video — agent-style generowanie i privacy skandal",
        "title_en": "Image/video — agent-style generation and privacy scandal",
        "body_pl": "Image models tego tygodnia przeszły od \"prompt → obraz\" do \"prompt → myśl → szukaj → obraz.\"\n\n**Muse Image (Meta):** Działa jak agent. Bierze prompt, planuje, myśli, szuka (web search dla outfitów, Facebook Marketplace dla mebli), potem generuje. Ale: można wspomnieć dowolny publiczny profil Instagram i wygenerować zdjęcia tej osoby — **domyślnie włączone**. Trzeba ręcznie wyłączyć w ustawieniach Instagram. Privacy implication ogromne.\n\n**Seedream 5 Pro (ByteDance):** Generowanie, edycja, referencje. Annotacje rysowane na obrazie. Transparent layers. Multilingual. Poziom Nano Banana, blisko GPT Image 2.\n\n**Reve 2.1:** #2 na leaderboardach (za GPT Image 2). 4K (16MP). Bounding box microediting. Silny visual reasoning.\n\n**SeFi image (open-source):** 1B-5B params, dual-stream (layout oddzielnie od tekstury). Biję Qwen Image i Z-Image. Mniej niż 10GB. Demokratyzacja — mały model bije duże.\n\n**PixWorld:** 3D scenes w pixel space (nie latent). 4-step wersja: scena w 6s@480p — 1000× szybszy niż diffusion.\n\n**Muse Video (Meta):** Native sound, złożone koncepcje (Bernoulli's principle), juggling. Tylko preview — brak detali.\n\n**Wan Streamer 0.2:** Real-time avatars — 640px, 25fps, 200ms latency. Dowolna postać (kot, dziecko, fikcyjna).\n\n**Implikacja:** Image models stają się agentami — nie generują tylko, ale researchują. Muse Image Instagram privacy to pierwszy skandal tej generacji — Meta domyślnie włącza generowanie z profili. SeFi pokazuje że małe modele mogą bić duże — dual-stream architecture to nowy paradygmat. PixWorld pixel space = 1000× speedup, koniec latent space monopoly.",
        "body_en": "Image models this week went from 'prompt → image' to 'prompt → think → search → image.'\n\n**Muse Image (Meta):** Works like agent. Plans, searches (web, Marketplace), then generates. But: can reference any public Instagram profile — **on by default**. Huge privacy implication.\n\n**Seedream 5 Pro (ByteDance):** Generation, editing, references. Transparent layers. Multilingual. Nano Banana level.\n\n**Reve 2.1:** #2 on leaderboards. 4K. Bounding box microediting.\n\n**SeFi (open-source):** 1B-5B, dual-stream. Beats Qwen Image. Under 10GB. Small beats big.\n\n**PixWorld:** 3D in pixel space. 1000x faster than diffusion.\n\n**Muse Video:** Native sound, complex concepts. Preview only.\n\n**Wan Streamer 0.2:** Real-time avatars. 640px, 25fps, 200ms.\n\n**Implication:** Image models become agents. Muse Image Instagram privacy is first scandal of this generation. SeFi shows small models beat big — dual-stream is new paradigm. PixWorld pixel space = 1000x speedup, end of latent space monopoly.",
        "quotes": [
          {
            "author": "AI Search",
            "text_pl": "Muse Image — możesz wspomnieć dowolny profil Instagram i wygenerować zdjęcia. Domyślnie włączone.",
            "text_en": "Muse Image — mention any Instagram profile and generate photos. On by default."
          }
        ]
      },
      {
        "title_pl": "Na co uważać w przyszłym tygodniu",
        "title_en": "What to watch next week",
        "body_pl": "Gemini 3.5 Pro — premiera 17 lipca (opóźnione z czerwca). Fable 5 promo kończy się 13 lipca — po tym płatne API. China może restrict openweight exports — podział na dwa bloki superinteligencji. AI-designed chips nadchodzą — 100-10,000× performance. Patent system pod presją AI-generated IP (Japonia orzekła że AI nie może być wynalazcą).\n\nWszystkie trendy konwergują: Fable 5 leash → governance → UBE → jobs data → on-prem → AI chips → IP. Innermost loop przyspiesza na każdym poziomie. Hard takeoff staje się nieunikniony.\n\nKluczowe pytania na przyszły tydzień: Czy Gemini 3.5 Pro dogoni GPT 5.6? Czy China zamknie openweight exports? Czy Anthropic otworzy Fable 5 dla wszystkich po promo? Czy OKF zostanie standardem?\n\nŚledź kompresję — to prowadzi do końca tęczy. Don't take off the takeoff.",
        "body_en": "Gemini 3.5 Pro — release July 17. Fable 5 promo ends July 13. China may restrict openweight exports. AI-designed chips coming — 100-10,000x performance. Patent system under pressure.\n\nAll trends converge: Fable 5 leash → governance → UBE → jobs → on-prem → AI chips → IP. Innermost loop accelerating at every level. Hard takeoff becoming inevitable.\n\nKey questions: Will Gemini 3.5 Pro catch GPT 5.6? Will China close openweight exports? Will Anthropic open Fable 5 after promo? Will OKF become standard?\n\nFollow the compression — it leads to the end of the rainbow. Don't take off the takeoff.",
        "quotes": [
          {
            "author": "Peter Diamandis",
            "text_pl": "Śledź kompresję — to prowadzi do końca tęczy. Superinteligencja = compression-induced phase transition.",
            "text_en": "Follow the compression — it leads to the end of the rainbow. Superintelligence = compression-induced phase transition."
          },
          {
            "author": "Alex Friedman",
            "text_pl": "Don't take off the takeoff. To już się dzieje.",
            "text_en": "Don't take off the takeoff. It's already happening."
          },
          {
            "author": "Dave Blundin",
            "text_pl": "Organizational singularity — AI-native redesign = największa zmiana w organizacjach w historii ludzkości.",
            "text_en": "Organizational singularity — AI-native redesign = biggest shift in organizations in human history."
          }
        ]
      }
    ],
    "sources": [
      "AI Search (Ti1V7OI2Rro) — 12.07.2026",
      "AI Search (SettwwX2cCI) — 10.07.2026",
      "Lev Selector (6x28pfmf0yU) — 10.07.2026",
      "Diamandis Moonshots #269 (XCunMF6frio) — 08.07.2026"
    ]
  },
  {
    "num": 27,
    "date": "2026-07-05",
    "collapsed": true,
    "title_en": "AI Week #27 | 29/06-5/07/2026",
    "title_pl": "AI Tydzień #27 | 29/06-5/07/2026",
    "headline_en": "Meituan trained a 1.6T frontier model without a single Nvidia GPU. Anthropic re-released Claude Fable 5 — neutered, castrated, and limited to 50% of your weekly quota. UBTech received 13,000 pre-orders for a humanoid companion robot. The two-class AI divide deepened as governments claimed early access to the most powerful models. Lev Selector framed the week's epigraph: \"Competition is the only solution to problems like government involvement and monopoly of Anthropic.\"",
    "headline_pl": "Meituan wytrenował model frontier 1.6T bez ani jednego GPU Nvidia. Anthropic ponownie wydał Claude Fable 5 — okaleczony, wykastrowany i ograniczony do 50% tygodniowego limitu. UBTech otrzymał 13 000 zamówień na robota humanoidalnego-kompana. Podział AI na dwie klasy pogłębił się, gdy rządy przejęły wczesny dostęp do najpotężniejszych modeli. Lev Selector ujął epigraf tygodnia: \"Konkurencja jest jedynym rozwiązaniem problemów jak zaangażowanie rządu i monopol Anthropic.\"",
    "sections": [
      {
        "title_en": "China Trains Frontier AI Without Nvidia",
        "title_pl": "Chiny trenują AI frontier bez Nvidii",
        "body_en": "The most consequential story of the week came not from a traditional AI lab, but from Meituan — a Chinese food delivery company. Their LongCat 2.0 is a 1.6 trillion parameter mixture-of-experts model with 48 billion active parameters, and it was trained entirely on ASIC super pods, without a single Nvidia GPU. The training ran with zero rollbacks and no irreversible loss spikes, demonstrating that frontier-scale training on alternative hardware is not just possible — it's production-ready.\n\nWhile Meituan did not reveal the chip brand, rumors point to Huawei. As AI Search noted, this was previously considered \"pretty much impossible or undocumented.\" On agentic coding benchmarks like Terminal Bench and SWE-bench, LongCat 2.0 beats Google's Gemini 3.1 Pro and approaches GPT-5.5. The model is released under MIT license and works on NPUs, not just GPUs.\n\nMeanwhile, Alibaba released Qwen Agent World — an open-source system that builds a virtual world inside an AI to simulate agentic environments. Lev Selector highlighted Z.AI's GLM-5.2 (745B open-source MoE) as a model that continues to disrupt the market at one-sixth the cost of GPT-5.5, with many users running quantized versions at home. As Lev noted, \"everybody is very happy with GLM because they're open source and you can run quantized version at your home.\" Nvidia also created their own FP4 version of Qwen 3.6 that runs on a single GPU with 256K context — a sign of how capable local models have become.\n\nLev even envisioned downloading all of Wikipedia (50GB compressed) and running a local model as a librarian: \"you can have all knowledge or like big chunk of human knowledge on your laptop and then use local model because you don't need this model to reason to be very smart.\"",
        "body_pl": "Najważniejsza historia tygodnia nie przyszła z tradycyjnego laboratorium AI, ale od Meituan — chińskiej firmy dostarczającej jedzenie. Ich LongCat 2.0 to model mixture-of-experts o 1,6 biliona parametrów z 48 miliardami aktywnych parametrów, wytrenowany w całości na podach ASIC super, bez ani jednego GPU Nvidia. Trening przebiegł bez cofnięć i bez nieodwracalnych skoków straty, co dowodzi, że trening w skali frontier na alternatywnym sprzęcie jest nie tylko możliwy — jest gotowy do produkcji.\n\nMeituan nie ujawnił marki chipów, ale plotki wskazują na Huawei. Jak zauważył AI Search, było to wcześniej uznawane za \"praktycznie niemożliwe lub nieudokumentowane.\" Na benchmarkach agentic coding jak Terminal Bench i SWE-bench, LongCat 2.0 pokonuje Gemini 3.1 Pro od Google i zbliża się do GPT-5.5. Model jest wydany na licencji MIT i działa na NPU, nie tylko GPU.\n\nTymczasem Alibaba wydała Qwen Agent World — system open-source, który buduje wirtualny świat wewnątrz AI do symulacji środowisk agentowych. Lev Selector wyróżnił GLM-5.2 od Z.AI (745B open-source MoE) jako model, który nadal zaburza rynek po jednej szóstej kosztu GPT-5.5, z wieloma użytkownikami uruchamiającymi wersje skwantyzowane w domu. Jak zauważył Lev, \"wszyscy są bardzo zadowoleni z GLM, bo są open source i można uruchomić wersję skwantyzowaną w domu.\" Nvidia stworzyła też własną wersję FP4 Qwen 3.6, która działa na pojedynczym GPU z kontekstem 256K — znak jak bardzo zdolne stały się modele lokalne.\n\nLev wyobrażał sobie nawet pobranie całej Wikipedii (50GB skompresowanej) i uruchomienie lokalnego modelu jako bibliotekarza: \"możesz mieć całą wiedzę lub duży kawałek ludzkiej wiedzy na laptopie i używać lokalnego modelu, bo nie potrzebujesz, żeby ten model rozumował, żeby był bardzo mądry.\"",
        "quotes": [
          {
            "author": "AI Search",
            "text_en": "It's pretty much impossible or undocumented to train a huge model with any other hardware type. But here it says the full training run and large-scale deployment were built entirely on ASIC super pods.",
            "text_pl": "To praktycznie niemożliwe lub nieudokumentowane, aby wytrenować ogromny model na innym typie sprzętu. Ale tutaj mówi się, że pełny przebieg treningu i wdrożenie w dużej skali zostały zbudowane w całości na podach ASIC super."
          },
          {
            "author": "Lev Selector",
            "text_en": "Everybody is very happy with GLM because they're open source and you can run quantized version at your home.",
            "text_pl": "Wszyscy są bardzo zadowoleni z GLM, bo są open source i można uruchomić wersję skwantyzowaną w domu."
          },
          {
            "author": "Lev Selector",
            "text_en": "You can have all knowledge or like big chunk of human knowledge on your laptop and then use local model because you don't need this model to reason to be very smart.",
            "text_pl": "Możesz mieć całą wiedzę lub duży kawałek ludzkiej wiedzy na laptopie i używać lokalnego modelu, bo nie potrzebujesz, żeby ten model rozumował, żeby był bardzo mądry."
          }
        ]
      },
      {
        "title_en": "Claude Fable 5 Returns — Neutered and Castrated",
        "title_pl": "Claude Fable 5 wraca — okaleczony i wykastrowany",
        "body_en": "After 15 days of being banned by the US government, Anthropic's most powerful model returned — but in a form that left users furious. The re-released Fable 5 comes with a 99% safety classifier that blocks jailbreak attempts, but the collateral damage is severe: routine coding and debugging tasks now fall back to the weaker Opus 4.8 model. As AI Search put it bluntly: \"the main use case of Fable 5 is for agentic coding and debugging. If it's going to reject these coding tasks and revert back to a dumber model, then what a huge castration.\"\n\nThe restrictions compound: Fable 5 can only be used for up to 50% of weekly usage limits, even on the highest subscription plan. Many users exhausted their quota after just one or two prompts. Lev Selector confirmed the details: after July 7th, subscription users can only use 50% of their quota on Fable, with the rest automatically downgrading to Opus. API pricing remains high at $10/$50 per million tokens input/output.\n\nAnthropic also released Claude Sonnet 5 at $3/$15 per million tokens — cheaper than Opus but more expensive than GPT-5.5. The intelligence index tells a damning story: Sonnet 5 sits behind GPT-5.5 and Opus 4.8 in capability. As AI Search noted: \"there is absolutely no reason to use this model over existing options.\"\n\nOn the Diamandis podcast, Peter Diamandis framed this moment historically. Alex added that Sonnet 5 is merely a \"gap filler\" — people used it because nothing else was available.\n\nAnthropic also revealed that 25,000 fraudulent accounts had been bombarding their models, collecting Q&A pairs to train Chinese models. They considered requiring ID verification (\"know your customer\"), though this hasn't been implemented yet.\n\nThe broader picture is one of regulatory capture. The Trump Executive Order requires companies to give the federal government early access (up to 30 days) to the most advanced models. GPT 5.6 was released in a staggered fashion — trusted partners first, then customer-by-customer approval. Claude Mythos 5 was released to 100+ government partners but never to the general public. Lev Selector identified the result: \"you have a split into two classes\" — government and big companies with access, everyone else without. His epigraph for the week was pointed: \"Competition is the only solution to problems like government involvement and monopoly of Anthropic. From small company become has become a real monopoly.\"",
        "body_pl": "Po 15 dniach bana przez rząd USA, najpotężniejszy model Anthropic wrócił — ale w formie, która pozostawiła użytkowników wściekłych. Ponownie wydany Fable 5 posiada 99-procentowy klasyfikator bezpieczeństwa, który blokuje próby jailbreak, ale szkody uboczne są dotkliwe: rutynowe zadania kodowania i debugowania teraz spadają do słabszego modelu Opus 4.8. Jak ujął to AI Search: \"głównym zastosowaniem Fable 5 jest agentic coding i debugowanie. Jeśli będzie odrzucać te zadania i wracać do głupszego modelu, to jakie ogromne okaleczenie.\"\n\nOgraniczenia narastają: Fable 5 może być używany tylko do 50% tygodniowych limitów, nawet na najwyższym planie. Wielu użytkowników wyczerpało limit po zaledwie jednym lub dwóch promptach. Lev Selector potwierdził szczegóły: po 7 lipca subskrybenci mogą używać tylko 50% limitu na Fable, reszta automatycznie spada do Opus. Ceny API pozostają wysokie: 10/50 dolarów za milion tokenów wejście/wyjście.\n\nAnthropic wydał również Claude Sonnet 5 po 3/15 dolarów za milion tokenów — taniej niż Opus, ale drożej niż GPT-5.5. Indeks inteligencji opowiada historię potępiającą: Sonnet 5 znajduje się za GPT-5.5 i Opus 4.8 w zdolnościach. Jak zauważył AI Search: \"absolutnie nie ma powodu, aby używać tego modelu zamiast istniejących opcji.\"\n\nW podcaście Diamandis, Peter Diamandis ujął ten moment historycznie. Alex dodał, że Sonnet 5 jest jedynie \"wypełniaczem luki\" — ludzie używali go, bo nic innego nie było dostępne.\n\nAnthropic ujawnił również, że 25 000 oszukańczych kont bombardowało ich modele, zbierając pary pytanie-odpowiedź do trenowania chińskich modeli. Rozważali wymóg weryfikacji tożsamości (\"know your customer\"), choć nie zostało to jeszcze wdrożone.\n\nSzerszy obraz to przejęcie regulacyjne. Executive Order Trumpa wymaga od firm udzielenia rządowi federalnemu wczesnego dostępu (do 30 dni) do najbardziej zaawansowanych modeli. GPT 5.6 został wydany w sposób rozłożony — najpierw zaufani partnerzy, potem zatwierdzanie klient po kliencie. Claude Mythos 5 został wydany 100+ partnerom rządowym, ale nigdy ogółowi. Lev Selector zidentyfikował rezultat: \"masz podział na dwie klasy\" — rząd i duże firmy z dostępem, wszyscy inni bez. Jego epigraf tygodnia był celny: \"Konkurencja jest jedynym rozwiązaniem problemów jak zaangażowanie rządu i monopol Anthropic. Z małej firmy stał się prawdziwym monopolem.\"",
        "quotes": [
          {
            "author": "AI Search",
            "text_en": "This kind of feels like a slap in the face. Not only can you use it for just a few more days on the subscription, but you can only use it for up to 50% of your weekly usage limits.",
            "text_pl": "To rodzaj policzka. Nie tylko możesz go używać tylko przez kilka dni na subskrypcji, ale też tylko do 50% tygodniowych limitów użytkowania."
          },
          {
            "author": "AI Search",
            "text_en": "Some routine tasks like coding and debugging will fall back to Opus 4.8. Like seriously, I mean the main use case of Fable 5 is for agentic coding and debugging.",
            "text_pl": "Niektóre rutynowe zadania jak kodowanie i debugowanie spadną do Opus 4.8. Serio, głównym zastosowaniem Fable 5 jest agentic coding i debugowanie."
          },
          {
            "author": "Lev Selector",
            "text_en": "Competition is the only solution to problems like government involvement and monopoly of Anthropic. From small company become has become a real monopoly.",
            "text_pl": "Konkurencja jest jedynym rozwiązaniem problemów jak zaangażowanie rządu i monopol Anthropic. Z małej firmy stał się prawdziwym monopolem."
          },
          {
            "author": "Lev Selector",
            "text_en": "Gating access to frontier models, creating widening capability gap between internal lab technology and public tools.",
            "text_pl": "Bramkowanie dostępu do modeli frontier, tworzenie rozszerzającej się luki zdolności między technologią laboratoryjną a narzędziami publicznymi."
          },
          {
            "author": "Peter Diamandis",
            "text_en": "This moment will be remembered in history. Intersection of AI and government that's never going away.",
            "text_pl": "Ten moment zostanie zapamiętany w historii. Przecięcie AI i rządu, które nigdy nie zniknie."
          },
          {
            "author": "Lev Selector",
            "text_en": "Popularity was never the same thing as stability.",
            "text_pl": "Popularność nigdy nie była tym samym co stabilność."
          }
        ]
      },
      {
        "title_en": "The Infrastructure War: SpaceX, Fusion, and Space Data Centers",
        "title_pl": "Wojna infrastruktury: SpaceX, fuzja i kosmiczne centra danych",
        "body_en": "While model makers competed on benchmarks, the real battle shifted to infrastructure. Reflection AI signed a $6.3 billion deal with SpaceX for the Colossus 2 data center — at $150 million per month through 2029, with access to NVIDIA GB300 chips. Lev Selector reported that Anthropic is also a tenant, making SpaceX an anchor compute provider for frontier AI.\n\nOn the Diamandis podcast, StarCloud CEO Philip Johnson revealed that the first NVIDIA H100 GPU reached orbit in November 2025 aboard a Falcon 9, and the first LLM was trained in space. \"Half our team came from SpaceX, rest from AWS and Azure,\" Johnson said. The pitch: unlimited solar power, no cooling needed, no NIMBY protests.\n\nNuclear fusion crossed from promise to contract this week. Helion — Sam Altman's largest early investment from March 2012 — cleared Washington state regulatory approvals on June 16 for its Orion fusion power plant, which will supply Microsoft with 50 megawatts of power starting in 2028. It is the first commercial fusion plant to come online. Helion has raised $1 billion at a $5.4 billion valuation, and Sam Altman stepped down as executive chairman two months ago to enable a partnership with OpenAI. Helion's unique architecture bypasses the turbine-water-steam cascade typical of tokamak reactors — deuterium-helium-3 fuel is compressed by a 10 Tesla magnetic field, and energy is recovered directly via Faraday's law. Alex Friedman called it the \"Mr. Fusion\" archetype from Back to the Future.\n\nCommonwealth Fusion — the second American leader, building a tokamak reactor under CEO Bob Mumgard — plans its first 400 megawatt plant around 2032. Diamandis referenced his conversation with Mumgard at the Abundance Summit. Globally there are about 50 privately funded fusion companies that have raised $6 billion. \"The joke about fusion has always been: 50 years away and holding,\" Diamandis summarized. \"It's now here.\"\n\nAlex Friedman pointed to a deeper pattern: fusion's triple product — the product of plasma density, confinement time, and temperature — has grown steadily for half a century, much like knowledge compression in AI led to LLMs. \"If you were watching the right metric, you could predict when this is going to happen — and it's imminent.\" Diamandis added that energy is the \"foundational technology of abundance\" — clean, cheap, dense energy brings the cost of computation, desalination, transportation, manufacturing, and agriculture down to the cost of materials alone.\n\nLev Selector referenced Diamandis's \"supersonic tsunami\" article with striking stats: token prices dropped 1000x in a few years, and AI could push global GDP from tens of trillions toward quadrillions. The Orin Token Price Index tracks this commoditization of intelligence, treating it like oil.\n\nBack on Earth, Groq raised $650 million in its pivot from chipmaker to inference-focused cloud — six months after Nvidia licensed their technology and poached the CEO. Baseten secured $1.5 billion for AI inference infrastructure. Subquadratic, a Miami startup, demonstrated 12 million token context windows at 50x the speed of FlashAttention and 20x cheaper.\n\nByteDance released Seedance 2.5 — 4K video generation at 30 seconds. Sakana AI's Fugu Ultra matched Claude Fable on some benchmarks through orchestration of multiple models rather than a single monolithic model. And Alibaba was blacklisted by the US government — government organizations cannot contract, and from 2027 no Alibaba services at all. Lev traced the story back to Jack Ma's 2020 speech criticizing China's financial system, the $2.8 billion antitrust fine, and his subsequent disappearance: \"they basically shut him down.\"",
        "body_pl": "Podczas gdy twórcy modeli konkurowali na benchmarkach, prawdziwa bitwa przeniosła się do infrastruktury. Reflection AI podpisał umowę na 6,3 miliarda dolarów ze SpaceX na centrum danych Colossus 2 — po 150 milionów dolarów miesięcznie do 2029 roku, z dostępem do chipów NVIDIA GB300. Lev Selector zgłosił, że Anthropic jest również najemcą, co czyni SpaceX głównym dostawcą obliczeń dla AI frontier.\n\nW podcaście Diamandis, CEO StarCloud Philip Johnson ujawnił, że pierwszy GPU NVIDIA H100 dotarł na orbitę w listopadzie 2025 na pokładzie Falcon 9, a pierwszy LLM został wytrenowany w kosmosie. \"Połowa naszego zespołu pochodziła ze SpaceX, reszta z AWS i Azure,\" powiedział Johnson. Argument: nielimitowana energia słoneczna, brak chłodzenia, brak protestów NIMBY.\n\nFuzja jądrowa przeszła w tym tygodniu z obietnicy w kontrakt. Helion — największa wczesna inwestycja Sama Altmana z marca 2012 — uzyskał 16 czerwca zatwierdzenia regulacyjne stanu Waszyngton dla elektrowni fuzyjnej Orion, która ma dostarczyć Microsoftowi 50 megawatów mocy począwszy od 2028 roku. To pierwsza komercyjna elektrownia fuzyjna wchodząca na rynek. Helion zebrał miliard dolarów przy wycenie 5,4 miliarda, a Sam Altman ustąpił z funkcji prezesa zarządu dwa miesiące temu, aby umożliwić współpracę z OpenAI. Unikalna architektura Helion omija kaskadę turbina-woda-para typową dla reaktorów tokamak — paliwo deuter-hel-3 jest kompresowane polem magnetycznym 10 Tesli, a energia odzyskiwana bezpośrednio przez prawo Faradaya. Alex Friedman nazwał to \"architekturą Mr. Fusion\" z Powrotu do Przyszłości.\n\nCommonwealth Fusion — drugi amerykański lider, budujący reaktor typu tokamak pod wodzą CEO Boba Mumgarda — planuje pierwszą elektrownię 400 megawatów około 2032 roku. Diamandis powołał się na rozmowę z Mumgardem na Abundance Summit. Łącznie na świecie istnieje około 50 prywatnie finansowanych firm fuzyjnych, które zebrały 6 miliardów dolarów. \"Żart o fuzji zawsze brzmiał: 50 lat i trzyma,\" podsumował Diamandis. \"Teraz jest tu.\"\n\nAlex Friedman wskazał na głębszy wzór: triple product fuzji — iloczyn gęstości plazmy, czasu konfinacji i temperatury — rósł stabilnie przez pół wieku, podobnie jak kompresja wiedzy w AI prowadziła do LLM. \"Gdybyś obserwował właściwy wskaźnik, mógłbyś przewidzieć, kiedy to się stanie — i to jest nieuchronne.\" Diamandis dodał, że energia jest \"fundamentalną technologią obfitości\" — czysta, tania, gęsta energia obniża koszt obliczeń, odsalania, transportu, produkcji i rolnictwa do kosztu samych materiałów.\n\nLev Selector powołał się na artykuł Diamandisa \"supersonic tsunami\" ze zdumiewającymi statystykami: ceny tokenów spadły 1000-krotnie w kilka lat, a AI może pchnąć globalne PKB od dziesiątek bilionów do biliardów. Indeks cen tokenów Orin śledzi tę komodyzację inteligencji, traktując ją jak ropę.\n\nZ powrotem na Ziemi, Groq zebrał 650 milionów dolarów w pivocie z producenta chipów na cloud zorientowany na wnioskowanie — sześć miesięcy po tym jak Nvidia licencjowała ich technologię i przejęła CEO. Baseten zabezpieczył 1,5 miliarda dolarów na infrastrukturę wnioskowania AI. Subquadratic, startup z Miami, zaprezentował 12-milionowe okna kontekstowe tokenów z 50-krotną prędkością FlashAttention i 20-krotnie taniej.\n\nByteDance wydał Seedance 2.5 — generację wideo 4K po 30 sekund. Fugu Ultra od Sakana AI dorównał Claude Fable na niektórych benchmarkach poprzez orkiestrację wielu modeli zamiast jednego monolitycznego. Alibaba została umieszczona na czarnej liści przez rząd USA — organizacje rządowe nie mogą kontraktować, a od 2027 żadnych usług Alibaba. Lev prześledził historię aż do przemówienia Jack Ma z 2020 roku krytykującego chiński system finansowy, kary antymonopolowej 2,8 miliarda dolarów i jego późniejszego zniknięcia: \"zasadniczo go zamknęli.\"",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_en": "Government really want to take control and slow things down.",
            "text_pl": "Rząd naprawdę chce przejąć kontrolę i spowolnić rzeczy."
          },
          {
            "author": "Lev Selector",
            "text_en": "They basically shut him down.",
            "text_pl": "Zasadniczo go zamknęli."
          },
          {
            "author": "Alex Friedman",
            "text_en": "If you were watching the right metric, you could predict when this is going to happen and it's imminent.",
            "text_pl": "Jeśli obserwowałeś właściwy wskaźnik, mogłeś przewidzieć, kiedy to się stanie i to jest nieuchronne."
          },
          {
            "author": "Philip Johnson (StarCloud)",
            "text_en": "Half our team came from SpaceX, rest from AWS and Azure.",
            "text_pl": "Połowa naszego zespołu pochodziła ze SpaceX, reszta z AWS i Azure."
          },
          {
            "author": "Lev Selector",
            "text_en": "Intelligence as commodity.",
            "text_pl": "Inteligencja jako towar."
          }
        ]
      },
      {
        "title_en": "Robotics: From Companions to First Responders",
        "title_pl": "Robotyka: od kompanów do pierwszych responderów",
        "body_en": "UBTech unveiled the U1 series — ultra-realistic humanoid companion robots with visible pores, blood vessels, and fingerprints. The head-and-torso version costs $18,000; the full-body premium robot costs $150,000. Equipped with emotional AI that recognizes 20+ human emotions at 90% accuracy, the U1 received over 13,000 pre-orders — more than Unitree G1. AI Search observed the societal implications with characteristic directness: \"these robots are designed for companionship and emotional support.\"\n\nOn the research front, OmniContact introduced a contact flow framework enabling humanoid robots to chain skills into 40-minute multi-step tasks with near-100% success on box carrying. NVIDIA's Aspire lets robots learn from their own failures, writing and repairing control code autonomously. CHORD teaches dexterous hand skills by copying human demonstrations using force and torque representation. PhysiFormer predicts 3D object physics, and SimFoundry turns a single photo into a physically accurate 3D simulation for robot training.\n\nThe Diamandis podcast framed robotics within the broader pattern of expert failure. Morgan Stanley predicted 14,000 Chinese robots by 2025 — reality far exceeded that. Alex's observation was piercing: \"You should always take the logarithm of the actual history before you hand it to experts for their linear extrapolation.\" Dave noted that the hardware-centric ecosystem is replacing the AI-centric one.\n\nDrones also entered law enforcement. In Sacramento, a drone with a magnet disarmed a knife-wielder. In Orlando, police deploy drones as first responders. Peter Diamandis noted: \"drones as first responders — this changes the paradigm of law enforcement.\" Alex connected the dots: \"A drone is a robot. Every drone is a robotics application.\"",
        "body_pl": "UBTech zaprezentował serię U1 — ultrarzeczywiste roboty humanoidalne-kompani z widocznymi porami, naczyniami krwionośnymi i odciskami palców. Wersja z głową i torsem kosztuje 18 000 dolarów; pełny robot premium kosztuje 150 000 dolarów. Wyposażony w emocjonalne AI rozpoznające 20+ ludzkich emocji z 90-procentową dokładnością, U1 otrzymał ponad 13 000 zamówień — więcej niż Unitree G1. AI Search zaobserwował implikacje społeczne z charakterystyczną bezpośredniością: \"te roboty są zaprojektowane do towarzystwa i wsparcia emocjonalnego.\"\n\nNa froncie badawczym OmniContact wprowadził framework contact flow umożliwiający robotom humanoidalnym łańcuchowanie umiejętności w 40-minutowe wieloetapowe zadania z niemal 100-procentowym sukcesem w noszeniu skrzynek. Aspire od NVIDIA pozwala robotom uczyć się na własnych błędach, pisząc i naprawiając kod sterujący autonomicznie. CHORD uczy zręcznych umiejętności rąk poprzez kopiowanie demonstracji ludzkich, używając reprezentacji siły i momentu obrotowego. PhysiFormer przewiduje fizykę obiektów 3D, a SimFoundry zamienia pojedyncze zdjęcie w fizycznie dokładną symulację 3D do treningu robotów.\n\nPodcast Diamandis umieścił robotykę w szerszym wzorcu porażki ekspertów. Morgan Stanley przewidział 14 000 chińskich robotów do 2025 — rzeczywistość daleko to przekroczyła. Obserwacja Alexa była przejmująca: \"Zawsze powinieneś wziąć logarytm z rzeczywistej historii, zanim przekażesz ją ekspertom do ich liniowej ekstrapolacji.\" Dave zauważył, że ekosystem zorientowany na sprzęt zastępuje ten zorientowany na AI.\n\nDrony również weszły do przestrzeni egzekwowania prawa. W Sacramento dron z magnesem rozbroił człowieka z nożem. W Orlando policja używa dronów jako pierwszych responderów. Peter Diamandis zauważył: \"drony jako pierwsi responderzy — to zmienia paradygmat egzekwowania prawa.\" Alex połączył kropki: \"Dron to robot. Każdy dron to aplikacja robotyczna.\"",
        "quotes": [
          {
            "author": "Alex (Moonshots)",
            "text_en": "You should always take the logarithm of the actual history before you hand it to experts for their linear extrapolation.",
            "text_pl": "Zawsze powinieneś wziąć logarytm z rzeczywistej historii, zanim przekażesz ją ekspertom do ich liniowej ekstrapolacji."
          },
          {
            "author": "Peter Diamandis",
            "text_en": "Beware the experts — it's the immune reaction of the establishment.",
            "text_pl": "Strzeż się ekspertów — to reakcja immunologiczna establishmentu."
          },
          {
            "author": "AI Search",
            "text_en": "These robots are designed for companionship and emotional support.",
            "text_pl": "Te roboty są zaprojektowane do towarzystwa i wsparcia emocjonalnego."
          },
          {
            "author": "Peter Diamandis",
            "text_en": "Drones as first responders — this changes the paradigm of law enforcement.",
            "text_pl": "Drony jako pierwsi responderzy — to zmienia paradygmat egzekwowania prawa."
          }
        ]
      },
      {
        "title_en": "The Agent Revolution: Harness Engineering, MCP, and the Death of LangChain",
        "title_pl": "Rewolucja agentów: Harness Engineering, MCP i śmierć LangChain",
        "body_en": "Lev Selector declared harness engineering \"a new gold rush\" — the same model can produce 6x better results depending on the harness. Context management, tool integration, and prompting strategy matter more than raw model capability. Ornith AI demonstrated this by training harness behaviors directly into model weights via reinforcement learning, achieving results that beat frontier models. Their 35B parameter model beats GPT-5.5 on science benchmarks.\n\nComfy MCP bridged AI agents with ComfyUI — users can now prompt in natural language to build, edit, and run generative AI workflows. Claude Tag brought @claude into Slack as a team member that reads context and proactively responds. Lev Selector saw the danger: \"at some point the whole company will be different agents, not people. It's like a Trojan horse — renting a digital employee from Anthropic.\" OpenTag offered an open-source alternative working with any model.\n\nLev outlined several architecture patterns. Agent Map-Reduce distributes tasks from an orchestrator to sub-agents who return results — like Hadoop for AI. The 3-Layer Agent Architecture separates core runtime, shared plugins, and execution. The Agentic OS defines four levels: skills, memory, interfaces, and distribution. The \"Brain in the Middle\" concept replaces custom software with an AI agent — Lev showed a personal story from 30 years ago where he replaced electronics with software, and now software is being replaced with agents.\n\nCustom scheduling for digital employees was another theme — Lev described building their own \"mycron\" instead of system crontab, with browser session persistence, hot-reload, and random delay to prevent thundering herd. \"There are a lot of things to think about,\" he admitted.\n\nLangChain appears to be dying. Lev described it vividly: \"your real prompt buried eight layers down under code you never wrote.\" With 8 levels of over-abstraction, documentation that doesn't match code, and frequent breaking changes, developers are leaving. \"Popularity was never the same thing as stability,\" Lev concluded. The replacement is direct integration with MCP servers.\n\nGoogle entered the agent knowledge space with OKF (Open Knowledge Format) — a structured, platform-agnostic format for building wikis that AI can query. X (Twitter) released an MCP server for querying Twitter data, though data access remains paid. And Ponytail provided rules for Claude Code — \"lazy senior developer mode\" that writes only necessary code.",
        "body_pl": "Lev Selector ogłosił harness engineering \"nową gorączką złota\" — ten sam model może dać 6-krotnie lepsze wyniki w zależności od harnessu. Zarządzanie kontekstem, integracja narzędzi i strategia promptowania mają większe znaczenie niż surowa zdolność modelu. Ornith AI zademonstrował to, trenując zachowania harness bezpośrednio w wagach modelu poprzez uczenie ze wzmocnieniem, osiągając wyniki przewyższające modele frontier. Ich model 35B parametrów pokonuje GPT-5.5 na benchmarkach naukowych.\n\nComfy MCP połączył agentów AI z ComfyUI — użytkownicy mogą teraz promptować w języku naturalnym, aby budować, edytować i uruchamiać przepływy pracy generatywnego AI. Claude Tag wprowadził @claude do Slacka jako członka zespołu, który czyta kontekst i proaktywnie odpowiada. Lev Selector dostrzegł niebezpieczeństwo: \"w pewnym momencie cała firma będzie różnymi agentami, nie ludźmi. To jak koń trojański — wynajmowanie cyfrowego pracownika od Anthropic.\" OpenTag zaoferował alternatywę open-source działającą z dowolnym modelem.\n\nLev przedstawił kilka wzorców architektonicznych. Agent Map-Reduce rozdziela zadania od orkiestratora do sub-agentów, którzy zwracają wyniki — jak Hadoop dla AI. 3-Layer Agent Architecture oddziela rdzeń runtime, współdzielone wtyczki i egzekucję. Agentic OS definiuje cztery poziomy: umiejętności, pamięć, interfejsy i dystrybucję. Koncepcja \"Brain in the Middle\" zastępuje oprogramowanie specjalne agentem AI — Lev pokazał osobistą historię sprzed 30 lat, gdzie zastąpił elektronikę oprogramowaniem, a teraz oprogramowanie jest zastępowane agentami.\n\nNiestandardowe planowanie dla cyfrowych pracowników było kolejnym tematem — Lev opisał budowanie własnego \"mycron\" zamiast systemowego crontab, z trwałością sesji przeglądarki, hot-reload i losowym opóźnieniem zapobiegającym thundering herd. \"Jest wiele rzeczy do przemyślenia,\" przyznał.\n\nLangChain wydaje się umierać. Lev opisał to obrazowo: \"twój prawdziwy prompt zakopany osiem warstw głęboko pod kodem, którego nigdy nie napisałeś.\" Z 8 poziomami nadmiernej abstrakcji, dokumentacją, która nie pasuje do kodu, i częstymi zmianami łamiącymi, deweloperzy odchodzą. \"Popularność nigdy nie była tym samym co stabilność,\" podsumował Lev. Zastępstwo to bezpośrednia integracja z serwerami MCP.\n\nGoogle wkroczyło w przestrzeń wiedzy agentów z OKF (Open Knowledge Format) — ustrukturyzowanym, niezależnym od platformy formatem do budowania wiki, które AI może odpytywać. X (Twitter) wydał serwer MCP do odpytywania danych Twittera, choć dostęp do danych pozostaje płatny. A Ponytail dostarczył reguły dla Claude Code — \"tryb leniwego senior developera\", który pisze tylko niezbędny kod.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_en": "Harness engineering becomes a new gold rush because with models becoming close to the qualities, the harness is the decisive thing.",
            "text_pl": "Harness engineering staje się nową gorączką złota, bo z modelami zbliżającymi się w jakości, harness jest rzeczą decydującą."
          },
          {
            "author": "Lev Selector",
            "text_en": "Your real prompt buried eight layers down under code you never wrote.",
            "text_pl": "Twój prawdziwy prompt zakopany osiem warstw głęboko pod kodem, którego nigdy nie napisałeś."
          },
          {
            "author": "Lev Selector",
            "text_en": "It's like a Trojan horse — renting a digital employee from Anthropic.",
            "text_pl": "To jak koń trojański — wynajmowanie cyfrowego pracownika od Anthropic."
          },
          {
            "author": "Lev Selector",
            "text_en": "Popularity was never the same thing as stability.",
            "text_pl": "Popularność nigdy nie była tym samym co stabilność."
          },
          {
            "author": "Lev Selector",
            "text_en": "An agent really becomes a team member.",
            "text_pl": "Agent naprawdę staje się członkiem zespołu."
          }
        ]
      },
      {
        "title_en": "Type by Thinking: Brain-Computer Interfaces Go Mainstream",
        "title_pl": "Pisanie myślą: interfejsy mózg-komputer wchodzą do main streamu",
        "body_en": "Meta's Brain2qwerty project turned science fiction into reality. Using magnetoencephalography (MEG) — a non-invasive brain scanning technique — the model decodes brain waves into typed text without surgery. Version 2 was trained on 10x more data than v1, achieving 78% word accuracy and 69% character accuracy. The code is open-source.\n\nWhile 78% may not seem high, it represents a quantum leap for non-invasive brain-computer interfaces. Previous approaches required implanted electrodes (like Neuralink). Merge Labs raised $250 million in a seed round led by OpenAI for ultrasound-based BCI — another non-invasive approach. If brain-to-text decoding reaches 95%+ accuracy, it could bypass the keyboard, mouse, and touchscreen entirely.",
        "body_pl": "Projekt Brain2qwerty od Meta zamienił science fiction w rzeczywistość. Używając magnetoencefalografii (MEG) — nieinwazyjnej techniki skanowania mózgu — model dekoduje fale mózgowe w wpisany tekst bez operacji. Wersja 2 była trenowana na 10-krotnie większej ilości danych niż v1, osiągając 78-procentową dokładność słów i 69-procentową dokładność znaków. Kod jest open-source.\n\nChoć 78% może wydawać się niskie, reprezentuje skok kwantowy dla nieinwazyjnych interfejsów mózg-komputer. Poprzednie podejścia wymagały wszczepionych elektrod (jak Neuralink). Merge Labs zebrał 250 milionów dolarów w rundzie seed prowadzonej przez OpenAI dla BCI opartego na ultradźwiękach — kolejnego nieinwazyjnego podejścia. Jeśli dekodowanie mózg-tekst osiągnie 95%+ dokładności, może całkowicie ominąć klawiaturę, mysz i ekran dotykowy.",
        "quotes": [
          {
            "author": "AI Search",
            "text_en": "It's not extremely high, but still very impressive considering it's just looking at your brain wave data and trying to figure out what words you're thinking.",
            "text_pl": "To nie jest ekstremalnie wysokie, ale nadal bardzo imponujące, biorąc pod uwagę, że to po prostu patrzy na dane fal mózgowych i próbuje zgadnąć, jakie słowa myślisz."
          }
        ]
      },
      {
        "title_en": "Speed Wins: 20x Faster Image Generation and Real-Time Video Editing",
        "title_pl": "Prędkość wygrywa: 20x szybsza generacja obrazów i edycja wideo w czasie rzeczywistym",
        "body_en": "Efficiency was the theme for generative models. MrFlow achieved 10-21x speedup for image generation without retraining. RDM enables one-step generation by matching feature distributions. Google's Nano Banana 2 Light generates images in 4 seconds at ~3 cents per 1,000. LiveEdit processes video at 13 FPS using causal chunk-wise streaming — it can replace clothing, change weather, or restyle compositions in real time. DeepPark from DeepSeek uses speculative decoding for up to 85% faster inference.\n\nThe broader trend: generation is moving from minutes to seconds to real-time. The bottleneck is shifting from compute to creativity. Lev Selector also noted that Harrison Kinsley (Sentdex) ran GLM-5.2 quantized on four Nvidia GPUs at home — a sign that local generation is becoming practical for enthusiasts.",
        "body_pl": "Wydajność była tematem modeli generatywnych. MrFlow osiągnął 10-21-krotne przyspieszenie generacji obrazów bez ponownego trenowania. RDM umożliwia jednostopniową generację poprzez dopasowanie rozkładu cech. Nano Banana 2 Light od Google generuje obrazy w 4 sekundy po ~3 centy za 1 000. LiveEdit przetwarza wideo z 13 FPS używając causal chunk-wise streaming — może zastępować ubrania, zmieniać pogodę lub zmieniać styl kompozycji w czasie rzeczywistym. DeepPark od DeepSeek używa speculative decoding dla do 85% szybszego wnioskowania.\n\nSzerszy trend: generacja przesuwa się z minut do sekund do czasu rzeczywistego. Wąskie gardło przesuwa się z obliczeń do kreatywności. Lev Selector zauważył również, że Harrison Kinsley (Sentdex) uruchomił GLM-5.2 skwantyzowany na czterech GPU Nvidia w domu — znak, że lokalna generacja staje się praktyczna dla entuzjastów.",
        "quotes": []
      },
      {
        "title_en": "What to Watch Next Week",
        "title_pl": "Na co uważać w przyszłym tygodniu",
        "body_en": "The Fable 5 subscription window closes July 7th — after that, only usage credits. Watch for whether Anthropic adjusts the safety classifier to reduce false positives on coding tasks. The two-class AI gap will widen as GPT 5.6 continues staggered release.\n\nChina's ASIC training success will likely trigger responses from both Nvidia (defensive) and US policymakers (restrictive). Watch for export control updates and potential Huawei chip sanctions. The Alibaba blacklist takes full effect in 2027 — watch for Chinese retaliation.\n\nThe agent ecosystem is consolidating around MCP as the standard protocol. Expect more MCP servers and the continued decline of framework-heavy approaches like LangChain. Harness engineering will become a recognized discipline.\n\nIn robotics, the 13,000 UBTech U1 pre-orders signal real consumer demand. Expect competitors and regulatory debates. And watch for whether Anthropic implements KYC/ID verification following the 25,000 fraudulent accounts incident.",
        "body_pl": "Okno subskrypcji Fable 5 zamyka się 7 lipca — po tym tylko kredyty użytkowania. Obserwuj, czy Anthropic dostosuje klasyfikator bezpieczeństwa, aby zmniejszyć fałszywe pozytywy na zadaniach kodowania. Podział AI na dwie klasy będzie się pogłębiał, gdy GPT 5.6 kontynuuje rozłożone wydanie.\n\nSukces Chin w treningu ASIC prawdopodobnie wywoła odpowiedź zarówno od Nvidia (defensywną), jak i amerykańskich decydentów (restrykcyjną). Obserwuj aktualizacje kontroli eksportu i potencjalne sankcje na chipy Huawei. Czarna lista Alibaba wchodzi w pełne życie w 2027 — obserwuj chiński odwet.\n\nEkosystem agentów konsoliduje się wokół MCP jako standardowego protokołu. Spodziewaj się więcej serwerów MCP i kontynuowanego upadku podejść ciężkich od frameworków jak LangChain. Harness engineering stanie się uznaną dyscypliną.\n\nW robotyce, 13 000 zamówień UBTech U1 sygnalizuje realny popyt konsumencki. Spodziewaj się konkurentów i debat regulacyjnych. I obserwuj, czy Anthropic wdroży weryfikację KYC/ID po incydencie 25 000 oszukańczych kont.",
        "quotes": []
      }
    ],
    "sources": [
      "AI Search (qtzzN8w2TvU) — 05.07.2026",
      "Lev Selector (FFz3iOBVldY) — 03.07.2026",
      "Lev Selector (oofo72dsMM4) — 26.06.2026",
      "Diamandis Moonshots #268 (XjOLz--C_nQ) — 01.07.2026"
    ]
  }
];
