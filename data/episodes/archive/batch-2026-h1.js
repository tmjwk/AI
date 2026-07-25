// AI Pulse episodes — V4 Etap 2 lazy loading
// Generowane z episodes.json przez generate_episodes_lazy.py
// NIE EDYTUJ RĘCZNIE

const ARCHIVE_EPISODES = [
  {
    "num": "#267",
    "collapsed": true,
    "channel": "Peter Diamandis · Moonshots & Millionaires",
    "title": "US Government Blocks GPT-5.6, Alibaba's AI Theft, and Why OpenAI Is Stalling Their IPO | #267",
    "date": "2026-06-30",
    "duration": "2h31m",
    "hosts_count_pl": "4 gospodarzy",
    "hosts_count_en": "4 hosts",
    "topics_count_pl": "7 tematów",
    "topics_count_en": "7 topics",
    "yt": "https://www.youtube.com/watch?v=-H7J_-zr7pA",
    "hosts": [
      {
        "name": "Peter Diamandis",
        "dot_color": "var(--hp)",
        "role_pl": "<strong>Główny host</strong> · „abundance evangelist\" — fundator XPRIZE, Singularity University. Perspektywa wizjonerska i rynkowa.",
        "role_en": "<strong>Main host</strong> · „abundance evangelist\" — founder of XPRIZE, Singularity University. Visionary and market perspective.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dr. Alexander Wissner-Gross",
        "dot_color": "var(--hp)",
        "role_pl": "<strong>Computer scientist and investor</strong>. Perspektywa techniczna, deep tech, quantum photonics, orbital compute.",
        "role_en": "<strong>Computer scientist and investor</strong>. Technical perspective, deep tech, quantum photonics, orbital compute.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dave Blundin",
        "dot_color": "var(--hp)",
        "role_pl": "<strong>Co-founder of Link Ventures</strong>. Perspektywa biznesowa, rynki, wyceny, kapitał ryzyka.",
        "role_en": "<strong>Co-founder of Link Ventures</strong>. Business perspective, markets, valuations, venture capital.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Immad Mustach",
        "dot_color": "var(--ba)",
        "role_pl": "Gość",
        "role_en": "guest",
        "is_guest": true,
        "is_absent": false
      },
      {
        "name": "Salim Ismail",
        "dot_color": "var(--hp)",
        "role_pl": "Nieobecny",
        "role_en": "absent",
        "is_guest": false,
        "is_absent": true
      }
    ],
    "topics": [
      {
        "num": "01",
        "title": "US Government blocks GPT-5.6 i Mythos",
        "time": "00:00 – 35:00",
        "fakty_pl": "Po raz pierwszy w historii US, egzekutywa nałożyła <strong>national security hold</strong> na modele AI. GPT-5.6 dostępny tylko dla 20 wybranych firm. Mythos 5 po dealu z Trump admin — tylko US citizens z allow list.",
        "fakty_en": "For the first time in US history, the executive branch placed a <strong>national security hold</strong> on AI models. GPT-5.6 available only to 20 selected companies. Mythos 5 after deal with Trump admin — only US citizens on allow list.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "Po raz pierwszy w historii USA, egzekutywa nałożyła blokadę bezpieczeństwa narodowego na modele AI. GPT-5.6 dostępny tylko dla 20 firm, Mythos tylko dla obywateli USA z listy uprawnionych. Rząd jest teraz w pętli wydawniczej — decyduje kto dostaje dostęp.",
            "text_en": "For the first time in US history, the executive branch has placed a national security hold on commercial AI products. The government is now in the release loop."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "To prawda, że modele są niebezpieczne, ale to też <strong>historia przykrywka</strong> — pretekst do tłumienia chińskiego AI. USA potrzebuje wymówki, a luki cybernetyczne dają im właśnie to. To droga drugiej zimnej wojny.",
            "text_en": "These are just cover stories and excuses. This will be the excuse that the US and Europe use to suppress Chinese AI somehow."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "To jest <strong>moment Sputnika</strong>, ale niespodzianka przyszła od wewnątrz — to nie ZSRR nas zaskoczył, tylko nasz własny model. Mythos potrafi odpowiedzieć na pytanie „czy potrafisz pomóc mnie zbudować?\" w 4.8 sekundy — Opus 4.8 nie potrafi. To jest granica samodoskonalenia. <strong>Jesteśmy w fazie końcowej</strong> — Chiny mają już prędkość ucieczkową.",
            "text_en": "This is a Sputnik moment, but the surprise came from within. Mythos can answer 'can you help me build yourself?' in 4.8 seconds. We're in the endgame — China has escape velocity."
          },
          {
            "host": "Immad",
            "dot_color": "var(--ba)",
            "text_pl": "Zamiast tylko blokować, trzeba budować <strong>kompetentną otwartą inteligencję</strong> — bezpieczne AI, które jest dostępne. Blokowanie modeli nie zatrzyma Chin, tylko spowolni Zachód.",
            "text_en": "I'm very pro actually competent open intelligence. We can build that in an aligned way."
          }
        ],
        "wniosek_pl": "Chiny osiągnęły <strong>prędkość ucieczkową samodoskonalenia</strong> — blokowanie modeli w USA nie zatrzyma Chińczyków, tylko spowolni Zachód.",
        "wniosek_en": "China has achieved <strong>escape velocity of self-improvement</strong> — blocking models in the US won't stop the Chinese, only slow down the West.",
        "kontekst_pl": "<strong>Mythos 5</strong> może odpowiedzieć na pytanie \"can you help me build yourself?\" — Opus 4.8 nie może. To jest granica, którą Mythos i GPT-5.6 przekraczają: samodoskonalenie. 4.8 sekundy wystarczyło Mythosowi do odpowiedzi. <strong>Andrej Karpathy</strong> (Kanadyjczyk) nie może używać Mythos, bo nie jest obywatelem USA. <strong>GLM 5.2</strong> bije GPT-5.5 na SWE-bench Pro — Chińczycy już nie potrzebują kopiować, mają własny model graniczny. Mythos przeszedł ćwiczenia red team z US DoD (Project Glass Wing) — włamał się do systemów tajnych w godzinach, nie tygodniach. Senator Mark Warner: „To narzędzie włamało się do prawie wszystkich naszych systemów tajnych, nie w tygodniach, ale w godzinach.\"",
        "kontekst_en": "<strong>Mythos 5</strong> can answer the question \"can you help me build yourself?\" — Opus 4.8 cannot. This is the boundary that Mythos and GPT-5.6 cross: self-improvement. 4.8 seconds was enough for Mythos to respond. <strong>Andrej Karpathy</strong> (Canadian) cannot use Mythos because he's not a US citizen. <strong>GLM 5.2</strong> beats GPT-5.5 on SWE-bench Pro — the Chinese no longer need to copy, they have their own frontier model. Mythos went through red team exercises with US DoD (Project Glass Wing) — it broke into classified systems in hours, not weeks. Senator Mark Warner: \"This tool broke into almost all of our classified systems, not in weeks, but in hours.\"",
        "title_pl": "US Government blocks GPT-5.6 i Mythos",
        "title_en": "US Government blocks GPT-5.6 i Mythos"
      },
      {
        "num": "02",
        "title": "OpenAI cofa IPO",
        "time": "42:00 – 53:00",
        "fakty_pl": "OpenAI leadership pulls back from near-term IPO. SpaceX IPO comparison — Elon „got out quickly” z liquid stock.",
        "fakty_en": "OpenAI leadership pulls back from near-term IPO. SpaceX IPO comparison — Elon „got out quickly” with liquid stock.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "OpenAI cofa bliskie IPO. Blokada rządowa obniża ich wycenę — nagle zdają sobie sprawę, że to <strong>inny świat</strong> niż bycie spółką prywatną. IPO SpaceX poszło szybko, OpenAI się waha.",
            "text_en": "It's just a different world from being a private company. They're suddenly realizing, wow."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "SpaceX akcje spadły z maksimum $202 do $153 — IPO po $135, otworzyło na $150. OpenAI podnieśli $122B, ale blisko tempa wypalania — będą musieli zrobić rundę albo IPO.",
            "text_en": "SpaceX stock slid from a high of $202 to $153 — IPO at $135, opened at $150. OpenAI raised $122B but closer to burn rate."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "Elon stracił przewagę na modelach granicznych, więc jego strategia to <strong>orbitalne centra danych</strong> — kontrola infrastruktury, nie modele. Daario, Sam, Elon — tylko Elon zdecydował się szybko na wejście na giełdę.",
            "text_en": "Elon lost his edge on the frontier model. His way to become relevant is get into space, get orbital data centers up."
          }
        ],
        "wniosek_pl": "Going public w erze regulatory uncertainty = ryzyko. Elon wybrał SpaceX IPO zamiast AI — chce kontrolować <strong>infrastrukturę</strong> (orbital data centers), nie modele.",
        "wniosek_en": "Going public in an era of regulatory uncertainty = risk. Elon chose SpaceX IPO over AI — he wants to control <strong>infrastructure</strong> (orbital data centers), not models.",
        "kontekst_pl": "SpaceX: maksimum $202, spadek do $153. IPO po $135/akcję, otwarłо na $150 — utrzymują wycenę $2 biliony. <strong>Daario</strong> (DeepMind), <strong>Sam</strong> (OpenAI), <strong>Elon</strong> — tylko Elon zdecydował się szybko na giełdę. OpenAI podnieśli $122B, ale blisko tempa wypalania. Anthropic też blisko burn rate — będą musieli zrobić rundę albo IPO. Elon „stracił przewagę na modelach granicznych\" — jego strategia to kontrola infrastruktury (orbitalne centra danych), nie modele.",
        "kontekst_en": "SpaceX: high of $202, slid to $153. IPO at $135/share, opened at $150 — maintaining $2 trillion valuation. <strong>Daario</strong> (DeepMind), <strong>Sam</strong> (OpenAI), <strong>Elon</strong> — only Elon decided to go public quickly. OpenAI raised $122B, but close to burn rate. Anthropic also close to burn rate — they'll need to do a round or IPO. Elon \"lost his edge on frontier models\" — his strategy is controlling infrastructure (orbital data centers), not models.",
        "title_pl": "OpenAI cofa IPO",
        "title_en": "OpenAI cofa IPO"
      },
      {
        "num": "04",
        "title": "Neuralink telepathy",
        "time": "55:23 – 62:00",
        "fakty_pl": "Elon announces first direct <strong>human-to-human telepathic communications</strong> via Neuralink. Neocortex to cloud by early 2030s.",
        "fakty_en": "Elon announces first direct <strong>human-to-human telepathic communications</strong> via Neuralink. Neocortex to cloud by early 2030s.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "Elon ogłasza pierwszą bezpośrednią telepatyczną komunikację między ludźmi przez Neuralink. Neocortex do chmury na początku lat 30. To <strong>jedno z największych osiągnięć ludzkości</strong>, jeśli zadziała.",
            "text_en": "One of biggest achievements in humanity if it works. Neocortex to cloud by early 2030s."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "Jeśli hipokamp jest zasadniczo <strong>przestrzenią osadzeń transformera tylko-kodującego</strong>, to telepatia będzie znacznie łatwiejsza niż się wydaje. Nie potrzebujesz słów — aktywujesz wspólną przestrzeń ukrytą. To jest transfer osadzeń między mózgami.",
            "text_en": "If hippocampus is basically an encoder-only transformer embedding space, telepathy is going to be a lot easier than one might suspect."
          },
          {
            "host": "Immad",
            "dot_color": "var(--ba)",
            "text_pl": "Popyt na <strong>nieinwazyjne interfejsy mózg-komputer</strong> będzie ogromny — Elon może skierować Neuralink w stronę mniej inwazyjnych rozwiązań. To może stać się bardzo popularnym produktem.",
            "text_en": "Enormous demand for non-invasive BCIs. I wouldn't be surprised if this becomes a hugely popular product."
          }
        ],
        "wniosek_pl": "Telepathy może być łatwiejsza niż się wydaje — jeśli mózg używa <strong>embedding space</strong> podobnego do LLM, komunikacja brain-to-brain to transfer latents, nie słów.",
        "wniosek_en": "Telepathy may be easier than it seems — if the brain uses an <strong>embedding space</strong> similar to LLMs, brain-to-brain communication is a transfer of latents, not words.",
        "kontekst_pl": "Teoria Alexa: <strong>hipokamp</strong> działa jak transformer tylko-kodujący. Jeśli to prawda, telepatia = transfer osadzeń między mózgami. „Nie potrzebujesz wszystkich słów. Używasz jak najmniej słów, aby aktywować wspólną przestrzeń ukrytą.\" Immad przewiduje, że popyt na nieinwazyjne interfejsy mózg-komputer zmusi Neuralink do zmiany kierunku. Elon planuje komunikację neocortex-chmura na początku lat 30.",
        "kontekst_en": "Alex's theory: the <strong>hippocampus</strong> works like an encoder-only transformer. If true, telepathy = embedding transfer between brains. \"You don't need all the words. You use as few words as possible to activate a shared latent space.\" Immad predicts that demand for non-invasive brain-computer interfaces will force Neuralink to change direction. Elon plans neocortex-to-cloud communication by the early 2030s.",
        "title_pl": "Neuralink telepathy",
        "title_en": "Neuralink telepathy"
      },
      {
        "num": "03",
        "title": "Alibaba distillation campaign",
        "time": "79:34 – 90:00",
        "fakty_pl": "Anthropic oskarża chińską firmę Alibaba o prowadzenie masowej <strong>kampanii destylacji</strong> przeciwko Claude.",
        "fakty_en": "Anthropic accuses Chinese company Alibaba of running a massive <strong>distillation campaign</strong> against Claude.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "Anthropic oskarża Alibaba o masową kampanię destylacji przeciwko Claude. To jest druga zimna wojna — USA kontra Chiny w AI.",
            "text_en": "The world seems to be on a path, sort of a second cold war type path."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>To będzie wymówka</strong>, której USA i Europa użyją do tłumienia chińskiego AI. Potrzebują pretekstu, destylacja go daje.",
            "text_en": "This will be the excuse that the US and Europe and maybe South America use cuz they need to suppress Chinese AI somehow."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>Ktokolwiek jest tym zszokowany jest całkowicie poza kontaktem</strong> z tym, co Chiny naprawdę robią. Destylacja to wojna asymetryczna — nie trzeba kraść wag, wystarczy dostęp do API.",
            "text_en": "Anyone who's shocked by this is way out of touch with what China's actually doing."
          }
        ],
        "wniosek_pl": "Distillation to <strong>wojna asymetryczna</strong> — Chińczycy nie muszą trenować od zera, kopiują wnioskowanie traces z western models. Regulacje export control nie powstrzymają tego.",
        "wniosek_en": "Distillation is <strong>asymmetric warfare</strong> — the Chinese don't have to train from scratch, they copy reasoning traces from western models. Export control regulations won't stop this.",
        "kontekst_pl": "<strong>Destylacja</strong> polega na tym, że model A (Claude) generuje odpowiedzi, a model B (Alibaba) uczy się na tych odpowiedziach. Nie trzeba kraść wag — wystarczy dostęp do API. Dlatego Anthropic ogranicza API dla chińskich firm. Ale Chińczycy mogą używać pośredników (VPN, spółki fasadowe). 12 wzmianek o destylacji w tym odcinku — to główny temat geopolityczny.",
        "kontekst_en": "<strong>Distillation</strong> means model A (Claude) generates responses, and model B (Alibaba) learns from those responses. You don't need to steal weights — API access is enough. That's why Anthropic restricts API for Chinese companies. But the Chinese can use intermediaries (VPN, shell companies). 12 mentions of distillation in this episode — it's the main geopolitical topic.",
        "title_pl": "Alibaba distillation campaign",
        "title_en": "Alibaba distillation campaign"
      },
      {
        "num": "05",
        "title": "Quantum computing executive order",
        "time": "90:35 – 103:00",
        "fakty_pl": "Trump signs executive order to supercharge US quantum computing. $100M each to D-Wave, Rigetti, Inflection. $140M to Sai Quantum.",
        "fakty_en": "Trump signs executive order to supercharge US quantum computing. $100M each to D-Wave, Rigetti, Inflection. $140M to Sai Quantum.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "Trump podpisuje rozporządzenie wykonawcze — $100M każdy dla D-Wave, Rigetti, Inflection. $140M dla Sai Quantum. Biały Dom chroni badania kwantowe przed obcym szpiegostwem.",
            "text_en": "Trump signs executive order — $100M each for D-Wave, Rigetti, Inflection."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>Przyspieszenie nauki przez komputery kwantowe po prostu nie działa dobrze.</strong> Problem zwijania białek został rozwiązany przez AI (AlphaFold), nie komputery kwantowe. Wielu agresywnie promuje quantum, ale realne wyniki są słabe.",
            "text_en": "Quantum for science acceleration just hasn't worked that well. Protein folding was solved by AI, not quantum."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>Fotonika kwantowa, nie komputery kwantowe</strong> — to jest prawdziwy przełom. Pracuję nad Quantum.AI od 9 miesięcy — wysoce skwantyzowane sieci neuronowe zbliżają się do pewności. Obliczenia fotoniczne przy 1/100 masy chipów Nvidia. <strong>Do grudnia będziemy rozmawiać o starcie obliczeń fotonicznych.</strong>",
            "text_en": "Quantum photonics, not quantum computers. I'd be shocked if by next December we're not talking about photonic compute launch."
          },
          {
            "host": "Immad",
            "dot_color": "var(--ba)",
            "text_pl": "Komputery kwantowe są <strong>znacznie trudniejsze do zbudowania</strong> niż GPU. Chiny doganiają na GPU (Huawei 950s), ale kwantowe są trudniejsze. Czujniki kwantowe „prawie na pewno zadziałają\" — w przeciwieństwie do komputerów kwantowych.",
            "text_en": "Quantum computers are vastly more complicated to build than GPUs. Quantum sensing almost certainly going to work."
          }
        ],
        "wniosek_pl": "Quantum computing w obecnej formie jest <strong>overhyped</strong>. Prawdziwy przełom to <strong>quantum photonics</strong> — photonic compute at 1/100th mass for same computation. AI odkryje algorytmy kwantowe szybciej niż ludzie.",
        "wniosek_en": "Quantum computing in its current form is <strong>overhyped</strong>. The real breakthrough is <strong>quantum photonics</strong> — photonic compute at 1/100th mass for the same computation. AI will discover quantum algorithms faster than humans.",
        "kontekst_pl": "Alex pracuje 9 miesięcy nad <strong>Quantum.AI</strong> — „wysoce skwantyzowane sieci neuronowe\" zbliżają się do pewności. Obliczenia fotoniczne = 1/100 masy chipów Nvidia dla tej samej mocy → mogłyby być wyniesione na SpaceX zamiast ciężkich GPU. Dave: problem zwijania białek został rozwiązany przez AI (AlphaFold), nie kwanty — „wielu agresywnie promuje komputery kwantowe.\" Immad: czujniki kwantowe „prawie na pewno zadziałają\" — w przeciwieństwie do komputerów kwantowych. Konwergencja: AI znajdzie algorytmy kwantowe, których ludzie nie potrafią.",
        "kontekst_en": "Alex has been working on <strong>Quantum.AI</strong> for 9 months — \"highly quantized neural networks\" are approaching certainty. Photonic compute = 1/100 the mass of Nvidia chips for the same power → could be put on SpaceX instead of heavy GPUs. Dave: protein folding was solved by AI (AlphaFold), not quantum — \"many aggressively promote quantum computers.\" Immad: quantum sensors \"almost certainly going to work\" — unlike quantum computers. Convergence: AI will find quantum algorithms that humans cannot.",
        "title_pl": "Quantum computing executive order",
        "title_en": "Quantum computing executive order"
      },
      {
        "num": "06",
        "title": "Orbital data centers",
        "time": "118:00 – 133:00",
        "fakty_pl": "Elon flipped the bit 9 months ago — <strong>orbital data centers</strong>. SpaceX constellation jako „Dyson Swarm brand”.",
        "fakty_en": "Elon flipped the bit 9 months ago — <strong>orbital data centers</strong>. SpaceX constellation as a \"Dyson Swarm brand\".",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "Elon <strong>zmienił nastawienie</strong> 9 miesięcy temu — orbitalne centra danych. Konstelacja SpaceX jako „marka Roju Dysona\". Star Pipe jako nowa ropa.",
            "text_en": "Elon's way to become relevant is get into space, get orbital data centers up."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "Jeśli start fotoniki na osi 1-2 lat, orbitalne centra mogą być <strong>niepotrzebne</strong> — obliczenia fotoniczne przy 1/100 masy oznaczają, że nie trzeba lecieć w kosmos po moc obliczeniową.",
            "text_en": "If photonic takeoff on 1-2 year timeline, orbital may be unnecessary."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "Obawy bezpieczeństwa — <strong>kto kontroluje wiązkę, kto podsłuchuje za tobą</strong>. Upewnij się, że nikt nie wchodzi za tobą słuchając tej samej wiązki.",
            "text_en": "Security concerns — be sure there's no one coming in behind you listening to the same beam."
          }
        ],
        "wniosek_pl": "Orbital data centers mogą być <strong>niepotrzebne</strong>, jeśli photonic computing zadziała — 1/100th mass means you don't need to go to space for compute. Ale Elon potrzebuje narracji dla SpaceX.",
        "wniosek_en": "Orbital data centers may be <strong>unnecessary</strong> if photonic computing works — 1/100th mass means you don't need to go to space for compute. But Elon needs a narrative for SpaceX.",
        "kontekst_pl": "Elon „zmienił nastawienie\" 9 miesięcy temu — nikt nie mówił o orbitalnych centrach danych zanim on nie zaczął. Alex: jeśli fotonika na osi 1-2 lat → orbitalne centra mogą być niepotrzebne. Dave: bezpieczeństwo — „upewnij się, że nikt nie wchodzi za tobą podsłuchując tej samej wiązki.\" <strong>Star Pipe</strong> = „nowa ropa\" SpaceX — infrastruktura orbitalna jako marka Roju Dysona.",
        "kontekst_en": "Elon \"flipped the bit\" 9 months ago — no one was talking about orbital data centers before he started. Alex: if photonics on a 1-2 year timeline → orbital centers may be unnecessary. Dave: security — \"be sure there's no one coming in behind you listening to the same beam.\" <strong>Star Pipe</strong> = SpaceX's \"new oil\" — orbital infrastructure as a Dyson Swarm brand.",
        "title_pl": "Orbital data centers",
        "title_en": "Orbital data centers"
      },
      {
        "num": "07",
        "title": "Future of humanity — space colonization",
        "time": "2:13:00 – 2:26:00",
        "fakty_pl": "Discussion about ocean colonies, orbital habitats, <strong>heterogeneous vs homogeneous future</strong>.",
        "fakty_en": "Discussion about ocean colonies, orbital habitats, <strong>heterogeneous vs homogeneous future</strong>.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>Przyszłość będzie heterogeniczna</strong> — za 100 lat zobaczysz ludzi, którzy wyglądają niemal tak samo jak dziś, ale też postludzi. Nie jednorodna, nie jedna ścieżka.",
            "text_en": "You're going to see humans who look substantially the same 100 years from now. Heterogeneous, not homogeneous."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "Gerard K. O'Neil — koncepcja kolonii kosmicznych z lat 70/80 (The High frontier). <strong>Błyskotliwy człowiek, który odszedł zbyt wcześnie.</strong>",
            "text_en": "Gerard K. O'Neil — brilliant individual who left us too early."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "Nawet przy masowym bezrobociu, ludzie znajdą sens przez <strong>tworzenie firm, tworzenie sensu w życiu</strong>. Bezwarunkowy dochód podstawowy nie musi oznaczać końca przedsiębiorczości.",
            "text_en": "Even with mass unemployment, meaning in life through creating companies."
          }
        ],
        "wniosek_pl": "Przyszłość będzie <strong>heterogeniczna</strong> — część ludzi zostanie na Ziemi (prawie niezmieniona), część pójdzie w kosmos. Nie ma jednej ścieżki.",
        "wniosek_en": "The future will be <strong>heterogeneous</strong> — some humans will stay on Earth (nearly unchanged), some will go to space. There is no single path.",
        "kontekst_pl": "Peter: „Zobaczysz ludzi, którzy wyglądają niemal tak samo za 100 lat. Jednocześnie zobaczysz postludzi.\" Heterogeniczna, nie jednorodna. Alex powołuje się na <strong>Gerarda K. O'Neila</strong> — koncepcję kolonii kosmicznych z lat 70/80 (The High frontier). Dave: nawet przy masowym bezrobociu od AI, ludzie znajdą sens przez przedsiębiorczość. Zakończenie Petera: newsletter metatrends na dmandis.com/metatrends.",
        "kontekst_en": "Peter: \"You're going to see humans who look substantially the same 100 years from now. At the same time you'll see post-humans.\" Heterogeneous, not homogeneous. Alex references <strong>Gerard K. O'Neil</strong> — the space colony concept from the 70s/80s (The High Frontier). Dave: even with mass unemployment from AI, people will find meaning through entrepreneurship. Peter's closing: metatrends newsletter at dmandis.com/metatrends.",
        "title_pl": "Future of humanity — space colonization",
        "title_en": "Future of humanity — space colonization"
      }
    ],
    "title_pl": "US Government Blocks GPT-5.6, Alibaba's AI Theft, and Why OpenAI Is Stalling Their IPO | #267",
    "title_en": "US Government Blocks GPT-5.6, Alibaba's AI Theft, and Why OpenAI Is Stalling Their IPO | #267"
  }
];
