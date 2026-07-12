// AI Weekly Summary — auto-generated from weekly.json
// Schema: WEEKLY = [{num, date, collapsed, title_en, title_pl, headline_en, headline_pl, sections[{title_en, title_pl, body_en, body_pl, quotes[{author, text_en, text_pl}]}], sources[]}]

const WEEKLY = [
  {
    "num": 2,
    "date": "2026-07-12",
    "collapsed": true,
    "title_pl": "AI Tydzień #2 — GPT 5.6 zrzuca Fable z tronu, Grok 4.5 zabija ceną, a AI projektuje chipy AI",
    "title_en": "AI Week #2 — GPT 5.6 Dethrones Fable, Grok 4.5 Kills on Price, and AI Designs AI Chips",
    "headline_pl": "OpenAI wydał GPT 5.6 — tańszy i mądrzejszy od Fable 5. xAI odpowiedziało Grok 4.5 za ułamek ceny. Anthropic odkrył JSpace — mechanizm świadomego myślenia w Claude. Sam Altman zaproponował oddanie 5% OpenAI rządowi USA. DeepSeek DSpark przyspieszył inferencję o 80%. AI z Princeton projektuje chipy RF 10,000× szybciej. Sąd Najwyższy Japonii orzekł że AI nie może być wynalazcą patentu.",
    "headline_en": "OpenAI released GPT 5.6 — cheaper and smarter than Fable 5. xAI responded with Grok 4.5 at a fraction of the price. Anthropic discovered JSpace — a mechanism of conscious thought in Claude. Sam Altman proposed giving 5% of OpenAI to the US government. DeepSeek DSpark accelerated inference by 80%. Princeton AI designs RF chips 10,000x faster. Japan Supreme Court ruled AI cannot be a patent inventor.",
    "sections": [
      {
        "title_pl": "GPT 5.6 — nowy król benchmarków",
        "title_en": "GPT 5.6 — the new benchmark king",
        "body_pl": "OpenAI wydał GPT 5.6 w trzech wariantach: Soul (flagowy, $5/$30 per M tokens), Terra (średni) i Luna (najszybszy). Model od razu zajął #1 na SWE-bench, ARC AGI 2 (92.5%) i Agents Last Exam. Jest tańszy od Claude Fable 5 ponad dwukrotnie, przy minimalnym handholdingu — potrafi pracować godzinami nad jednym zadaniem.\n\nRecenzje AI Search potwierdziły: w teście Flappy Bird koszt GPT 5.6 był ułamek ceny Fable. W deep research (raport o leukemii) — 31 minut pracy, profesjonalne tabele, cytowania, flowcharty. W financial presentation (Q1 2026 Alphabet/Nvidia/Amazon) — 26 minut, kompletna prezentacja z analizą.\n\nSłabości: na benchmarku Omniscience 89% błędnych odpowiedzi (ale to specyficzne pytania, nie ogólny wskaźnik). Nie znalazł żaby w teście wizualnym (Fable 5 jedyny który znalazł). Nie rozpoznał typów nowotworów na skanach MRI.",
        "body_en": "OpenAI released GPT 5.6 in three variants: Soul (flagship, $5/$30 per M tokens), Terra (medium), and Luna (fastest). It immediately took #1 on SWE-bench, ARC AGI 2 (92.5%), and Agents Last Exam. It's over 2x cheaper than Claude Fable 5 with minimal handholding — can work for hours on a single task.\n\nAI Search review confirmed: Flappy Bird game cost was a fraction of Fable's price. Deep research (leukemia report) — 31 minutes, professional tables, citations, flowcharts. Financial presentation (Q1 2026 Alphabet/Nvidia/Amazon) — 26 minutes, complete presentation with analysis.\n\nWeaknesses: 89% wrong answers on Omniscience benchmark (specific questions, not overall rate). Failed the frog test (Fable 5 is the only one that found it). Failed tumor identification on MRI scans.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "GPT 5.6 — recenzje doskonałe. Soul, Terra i Luna. Tańszy od Fable.",
            "text_en": "GPT 5.6 — excellent reviews. Soul, Terra and Luna. Cheaper than Fable."
          },
          {
            "author": "AI Search",
            "text_pl": "GPT 5.6 to jeden z najmądrzejszych modeli jakie możesz używać. Bardziej kosztowo efektywny niż Claude Fable 5.",
            "text_en": "GPT 5.6 is one of the smartest models you can use. More cost-efficient than Claude Fable 5."
          }
        ]
      },
      {
        "title_pl": "Grok 4.5 — xAI zabija ceną",
        "title_en": "Grok 4.5 — xAI kills on price",
        "body_pl": "xAI (SpaceX) wydało Grok 4.5 — model 1.5T parametrów trenowany z danymi z Cursor (przejętego przez xAI). $2/$6 per M tokens — ponad 3× tańszy od GPT 5.6, znacznie tańszy od Fable ($10/$50).\n\nNa SWE-bench bije Opus 4.8 ale jest za GPT 5.5 i Fable. 80 tokens/s, używa mniej tokenów na zadanie. 500K context (krótszy niż 1M u konkurencji). Mniej halucynacji niż Fable i GPT 5.6.\n\nLev Selector: \"jeśli nie potrzebujesz AI do ekstremalnie trudnych zadań, Grok 4.5 może być lepszą opcją.\" Dostępny w Grok Build i Cursor.",
        "body_en": "xAI (SpaceX) released Grok 4.5 — 1.5T parameter model trained with Cursor data (acquired by xAI). $2/$6 per M tokens — over 3x cheaper than GPT 5.6, much cheaper than Fable ($10/$50).\n\nOn SWE-bench beats Opus 4.8 but behind GPT 5.5 and Fable. 80 tokens/s, uses fewer tokens per task. 500K context (shorter than 1M competitors). Fewer hallucinations than Fable and GPT 5.6.\n\nLev Selector: \"if you don't need AI for extremely hard tasks, Grok 4.5 might be the better option.\" Available in Grok Build and Cursor.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "Jeśli nie potrzebujesz AI do ekstremalnie trudnych zadań, Grok 4.5 może być lepszą opcją.",
            "text_en": "If you don't need AI for extremely hard tasks, Grok 4.5 might be the better option."
          },
          {
            "author": "AI Search",
            "text_pl": "Grok 4.5 nie jest najlepszy w inteligencji, ale jest bardzo szybki i tani.",
            "text_en": "Grok 4.5 is not the best in intelligence, but it's very fast and cheap."
          }
        ]
      },
      {
        "title_pl": "Anthropic odkrywa JSpace — mechanizm świadomego myślenia",
        "title_en": "Anthropic discovers JSpace — mechanism of conscious thought",
        "body_pl": "Anthropic opublikował paper 'A Global Workspace in Language Models' — odkryli JSpace (od Jacobian) w środkowych warstwach Claude. To wzorce aktywności które model może opisać słowami — jak \"myśli\" które nie są wypowiadane.\n\nEksperymenty: Claude potrafi kontrolować JSpace (myśleć o Golden Gate Bridge podczas innego zadania), ale nie perfekcyjnie — nie potrafi nie myśleć o czymś. Wyłączenie JSpace: Claude odpowiada prosto ale nie potrafi reasonować. JSpace sam zorganizował się podczas treningu — nie był zaprogramowany.\n\nAlex Friedman (AWG): \"Superinteligencja będzie po prostu compression-induced phase transition. Śledź kompresję — to prowadzi do końca tęczy.\" Dave Blundin: \"Innowacje z biologii napędziły neural networks — teraz AI uczy nas o mózgu. Kierunek odkryć się odwrócił.\"",
        "body_en": "Anthropic published 'A Global Workspace in Language Models' — discovered JSpace (from Jacobian) in Claude's middle layers. These are activity patterns the model can describe in words — like \"thoughts\" that aren't spoken.\n\nExperiments: Claude can control JSpace (think about Golden Gate Bridge during another task), but imperfectly — can't not think about something. Disabling JSpace: Claude answers simply but can't reason. JSpace self-organized during training — wasn't programmed.\n\nAlex Friedman (AWG): \"Superintelligence will just be a compression-induced phase transition. Follow the compression — it leads to the end of the rainbow.\" Dave Blundin: \"Innovations from biology drove neural networks — now AI teaches us about the brain. Direction of discovery has reversed.\"",
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
          }
        ]
      },
      {
        "title_pl": "Altman 5% dla rządu + globalne zarządzanie AI",
        "title_en": "Altman 5% for government + global AI governance",
        "body_pl": "Sam Altman opublikował op-ed w Financial Times proponując US-led international forum dla zarządzania AI. Rozmawiał z Trump, Lutnik, Bessant i Bernie Sanders o 5% udziale w OpenAI ($42.6B = $135 na obywatela).\n\nAlex Friedman nazwał to \"hyper-tithe\" — fixed equity contribution od singularity companies do sovereign wealth fund. \"To baby UBE.\" Dave Blundin: \"Irrelewantne — rząd ma power of taxation. Social Security był podobną ideą i się nie udało.\"\n\nPeter Diamandis: \"Trump accounts dla dorosłych — 10% od hyperscalers. Trump jest negocjatorem, skończymy na 10%.\" Demis Hassabis i Dario Amodei na Davos proponowali IAEA-style mechanism. Alex: \"Chiny brakuje w tej dyskusji — drugi słoń w pokoju. Bez Chin to się nie uda.\"",
        "body_en": "Sam Altman published an op-ed in Financial Times proposing a US-led international forum for AI governance. He talked to Trump, Lutnik, Bessant, and Bernie Sanders about 5% stake in OpenAI ($42.6B = $135 per citizen).\n\nAlex Friedman called it \"hyper-tithe\" — fixed equity contribution from singularity companies to sovereign wealth fund. \"This is baby UBE.\" Dave Blundin: \"Irrelevant — government has power of taxation. Social Security was a similar idea and it failed.\"\n\nPeter Diamandis: \"Trump accounts for adults — 10% from hyperscalers. Trump is a negotiator, we'll end up at 10%.\" Demis Hassabis and Dario Amodei at Davos proposed IAEA-style mechanism. Alex: \"China is missing from this discussion — the second elephant in the room. Without China this won't work.\"",
        "quotes": [
          {
            "author": "Alex Friedman",
            "text_pl": "Hyper-tithe: fixed equity contribution od singularity companies do sovereign wealth fund. To baby UBE.",
            "text_en": "Hyper-tithe: fixed equity contribution from singularity companies to sovereign wealth fund. This is baby UBE."
          },
          {
            "author": "Dave Blundin",
            "text_pl": "Irrelewantne — rząd ma power of taxation. Social Security był podobną ideą i się nie udało.",
            "text_en": "Irrelevant — government has power of taxation. Social Security was a similar idea and it failed."
          }
        ]
      },
      {
        "title_pl": "DeepSeek DSpark + model routing — rewolucja kosztów",
        "title_en": "DeepSeek DSpark + model routing — cost revolution",
        "body_pl": "DeepSeek wydał DSpark — speculative decoding przyspiesza generację o 80%, zwiększa output o 700% bez utraty jakości. Działa z GLM-5.2 — 85% szybciej. Open source.\n\nTest kosztów tworzenia gry Flappy Bird: Fable 5 = $0.42, GLM-5.2 = $0.05, DeepSeek = $0.001. Strona coffee shop: Sonnet 5 = $11, DeepSeek = $0.08.\n\nModel routing — oszczędność 60-90%: używaj drogiego modelu (Fable) do planowania, taniego (DeepSeek/Sonnet) do wykonania. Output tokens droższe niż input. Wszyscy agenci to robią. Sync (twórca llama.cpp): \"połowa zadań coding nie wymaga dużego modelu — 32B/27B wystarczy.\"\n\nTencent wydał Hy3 — open-source MoE 295B (21B active). Mniejszy niż GLM-5.2/DeepSeek V4 (>1T) ale prawie tak dobry. 256K context. Agentic coding, UI design, vibe coding.",
        "body_en": "DeepSeek released DSpark — speculative decoding accelerates generation by 80%, increases output by 700% without quality loss. Works with GLM-5.2 — 85% faster. Open source.\n\nCost test for Flappy Bird game: Fable 5 = $0.42, GLM-5.2 = $0.05, DeepSeek = $0.001. Coffee shop website: Sonnet 5 = $11, DeepSeek = $0.08.\n\nModel routing — 60-90% savings: use expensive model (Fable) for planning, cheap model (DeepSeek/Sonnet) for execution. Output tokens cost more than input. Everyone does it. Sync (llama.cpp creator): \"half of coding tasks don't need large model — 32B/27B suffices.\"\n\nTencent released Hy3 — open-source MoE 295B (21B active). Smaller than GLM-5.2/DeepSeek V4 (>1T) but nearly as good. 256K context. Agentic coding, UI design, vibe coding.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "DeepSeek to prawie ulubiony model każdego. Chińskie modele — dlatego tak popularne.",
            "text_en": "DeepSeek is almost everyone's favorite. Chinese models — that's why so popular."
          },
          {
            "author": "Sync (llama.cpp)",
            "text_pl": "Połowa zadań coding nie wymaga dużego modelu — 32B lub 27B wystarczy.",
            "text_en": "Half of coding tasks don't need large model — 32B or 27B suffices."
          }
        ]
      },
      {
        "title_pl": "AI projektuje chipy AI + Palantir sovereign AI",
        "title_en": "AI designs AI chips + Palantir sovereign AI",
        "body_pl": "Princeton + IIT Madras: AI projektuje RF circuits. CNN przewiduje fizykę (EM fields) bez solving Maxwell's equations — ms zamiast minut. AI loop 10,000× invents non-intuitive shapes — \"wyglądają jak QR codes, nie jak projekty ludzkie.\" Wynik: tygodnie → minuty. Dave Blundin: \"Inference chips będą 100-10,000× szybsze. Hard takeoff nieunikniony.\"\n\nAlex Friedman: \"AI-optimized designs wyglądają organic, noisy, information-dense — jak obcy. Interpretability tax będzie wszędzie.\" Anthropic partneruje z Samsung (jedyne bez własnych chipsów).\n\nPalantir × Nvidia: sovereign AI architecture — Neotron open models wewnątrz platformy Palantir. On-prem dla defense i banks. Alex Karp: \"klienci są livid — płacą za tokens które nie tworzą wartości, oddają alpha.\" Nvidia commoditizes software by selling more GPUs.",
        "body_en": "Princeton + IIT Madras: AI designs RF circuits. CNN predicts physics (EM fields) without solving Maxwell's equations — ms instead of minutes. AI loop 10,000x invents non-intuitive shapes — \"look like QR codes, not human designs.\" Result: weeks → minutes. Dave Blundin: \"Inference chips will be 100-10,000x faster. Hard takeoff inevitable.\"\n\nAlex Friedman: \"AI-optimized designs look organic, noisy, information-dense — alien. Interpretability tax will be everywhere.\" Anthropic partnering with Samsung (only one without own chips).\n\nPalantir × Nvidia: sovereign AI architecture — Neotron open models inside Palantir platform. On-prem for defense and banks. Alex Karp: \"clients are livid — paying for tokens that create no value, giving away alpha.\" Nvidia commoditizes software by selling more GPUs.",
        "quotes": [
          {
            "author": "Dave Blundin",
            "text_pl": "Inference chips będą 100-10,000× szybsze. Hard takeoff nieunikniony po wdrożeniu.",
            "text_en": "Inference chips will be 100-10,000x faster. Hard takeoff inevitable after deployment."
          },
          {
            "author": "Alex Karp (Palantir)",
            "text_pl": "Klienci są livid — płacą za tokens które nie tworzą wartości, oddają alpha.",
            "text_en": "Clients are livid — paying for tokens that create no value, giving away alpha."
          }
        ]
      },
      {
        "title_pl": "World models eksplozja + robotyka",
        "title_en": "World models explosion + robotics",
        "body_pl": "Cztery nowe open-source world models tego tygodnia:\n\nABot World (Apache 2) — 720p@16fps, nieskończony świat (1h+), 24GB, działa na RTX 5090/4090.\nLingBot World 2 — 720p@60fps, akcje i eventy, kontrola obiektów. 86GB.\nMira — multiplayer 4 graczy, 5B diffusion model, 20fps na B200.\nAlaya World — persistent memory, prompt editing w czasie (fireworks, potwory), 720p@24fps.\n\nRobotyka: Boston Dynamics 5th gen Atlas (Hyundai) — do 30,000 sztuk rocznie. UB humanoid robots od $18,000 (lifelike silicon skin). Booster T2 — 75 DOF, open-source ecosystem (gym + train), wall jumps i 360 flips. Unitree G1 wykonał chirurgię (teleoperated, UC San Diego).\n\nChiny: 140 firm robotycznych, 300+ modeli, 85% globalnych instalacji.",
        "body_en": "Four new open-source world models this week:\n\nABot World (Apache 2) — 720p@16fps, infinite world (1h+), 24GB, runs on RTX 5090/4090.\nLingBot World 2 — 720p@60fps, actions and events, object control. 86GB.\nMira — 4-player multiplayer, 5B diffusion model, 20fps on B200.\nAlaya World — persistent memory, real-time prompt editing (fireworks, monsters), 720p@24fps.\n\nRobotics: Boston Dynamics 5th gen Atlas (Hyundai) — up to 30,000 units/year. UB humanoid robots from $18,000 (lifelike silicon skin). Booster T2 — 75 DOF, open-source ecosystem (gym + train), wall jumps and 360 flips. Unitree G1 performed surgery (teleoperated, UC San Diego).\n\nChina: 140 robot companies, 300+ models, 85% of global installations.",
        "quotes": [
          {
            "author": "Lev Selector",
            "text_pl": "Chiny: 140 firm robotycznych, 300+ modeli robotów, 85% globalnych instalacji.",
            "text_en": "China: 140 robot companies, 300+ robot models, 85% of global installations."
          },
          {
            "author": "Peter Diamandis",
            "text_pl": "11 największych firm w świecie robi dokładnie to samo — designuje chipy AI. Bezprecedensowy moment.",
            "text_en": "11 biggest companies doing exactly the same thing — designing AI chips. Unprecedented moment."
          }
        ]
      },
      {
        "title_pl": "Na co uważać w przyszłym tygodniu",
        "title_en": "What to watch next week",
        "body_pl": "Gemini 3.5 Pro — premiera 17 lipca (opóźnione z czerwca). Fable 5 promo kończy się 13 lipca — po tym płatne API. China może restrict openweight exports — podział na dwa bloki superinteligencji. AI-designed chips nadchodzą — 100-10,000× performance. Patent system pod presją AI-generated IP.\n\nMojo language (Chris Lattner) przejęty przez Qualcomm — zagrożenie dla NVIDIA CUDA monopoly. Google OKF zastępuje RAG — structured markdown z interlinks, bez vector database. GPT Live — naturalna konwersacja voice (przerywanie, pauzy, translation, visual responses).\n\nMuse Image i Muse Video (Meta) — agent-style image generation (web search, Marketplace). Reve 2.1 — #2 na leaderboardach (za GPT Image 2).",
        "body_en": "Gemini 3.5 Pro — release July 17 (delayed from June). Fable 5 promo ends July 13 — paid API after. China may restrict openweight exports — split into two superintelligence blocks. AI-designed chips coming — 100-10,000x performance. Patent system under pressure from AI-generated IP.\n\nMojo language (Chris Lattner) acquired by Qualcomm — threat to NVIDIA CUDA monopoly. Google OKF replaces RAG — structured markdown with interlinks, no vector database. GPT Live — natural voice conversation (interruption, pauses, translation, visual responses).\n\nMuse Image and Muse Video (Meta) — agent-style image generation (web search, Marketplace). Reve 2.1 — #2 on leaderboards (behind GPT Image 2).",
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
    "num": 1,
    "date": "2026-07-05",
    "collapsed": true,
    "title_en": "AI Weekly #1 — China Breaks Nvidia's Grip, Fable Returns Broken, and Your Robot Companion Is Here",
    "title_pl": "AI Tydzień #1 — Chiny łamią monopol Nvidii, Fable wraca okaleczony, a Twój robot-kompan już tu jest",
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
