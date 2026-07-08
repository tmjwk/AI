// AI Pulse episodes data — V4 auto-generated from episodes.json (już bilingual)
// Schema: {num, channel, title, date, duration, yt, collapsed, hosts[], topics[]}
// NIE EDYTUJ RĘCZNIE — użyj: python3 scripts/data_cli.py

const EPISODES = [
  {
    "num": "##269",
    "collapsed": true,
    "channel": "Diamandis Moonshots",
    "title": "Fable 5 Is Back & Govt-Leashed, Altman Offers 5% of OpenAI & AI Grows Conscious | #269",
    "date": "2026-07-07",
    "duration": "105 min",
    "hosts_count_pl": "4 gospodarzy",
    "hosts_count_en": "4 hosts",
    "topics_count_pl": "9 tematów",
    "topics_count_en": "9 topics",
    "yt": "XCunMF6frio",
    "hosts": [
      {
        "name": "Peter Diamandis",
        "role_pl": "<strong>Główny host</strong> · „abundance evangelist\" — fundator XPRIZE, Singularity University. Perspektywa wizjonerska i rynkowa.",
        "role_en": "<strong>Host</strong> · \"abundance evangelist\" — founder of XPRIZE, Singularity University. Visionary and market perspective.",
        "dot_color": "var(--hp)"
      },
      {
        "name": "Dr. Alexander Wissner-Gross",
        "role_pl": "<strong>„In-house ASI\"</strong>. Perspektywa techniczna, deep tech, quantum photonics, orbital compute.",
        "role_en": "<strong>\"In-house ASI\"</strong>. Technical perspective, deep tech, quantum photonics, orbital compute.",
        "dot_color": "var(--rk)"
      },
      {
        "name": "Dave Blundin",
        "role_pl": "<strong>Managing partner of Link Exponential Ventures</strong>. Perspektywa biznesowa, rynki, wyceny, kapitał ryzyka.",
        "role_en": "<strong>Managing partner of Link Exponential Ventures</strong>. Business perspective, markets, valuations, venture capital.",
        "dot_color": "var(--ac)"
      },
      {
        "name": "Salim Ismail",
        "role_pl": "<strong>CEO of OpenExo, global trotter</strong>. Perspektywa eksponencjalna, organizacje wykładnicze.",
        "role_en": "<strong>CEO of OpenExo, global trotter</strong>. Exponential perspective, exponential organizations.",
        "dot_color": "var(--ba)"
      }
    ],
    "topics": [
      {
        "num": "01",
        "title": "Fable 5 wraca — ograniczony przez rząd",
        "time": "00:00 – 12:00",
        "fakty_pl": "Fable 5 wrócił globalnie 1 lipca z trzema gwarancjami dla rządu USA: (1) klasyfikator bezpieczeństwa blokujący exploity, (2) 24/7 monitorowanie jailbreak'ów, (3) wczesny dostęp dla rządu. Badacz Amazon znalazł sposób na złamanie guardrails — dodatkowo Fable 5 Opus 4.8, GPT 5.5 i Kimmy K 2.7 miały ten sam problem. Anthropic zmienił politykę z 'raportuj przy subpoena' na 'good faith belief' — mogą działać samodzielnie.",
        "fakty_en": "Fable 5 returned globally on July 1st with three guarantees to the US government: (1) targeted safety classifier blocking exploit prompts, (2) 24/7 monitoring of jailbreak submissions, (3) early access for government partners. Amazon researcher found how to break guardrails — Fable 5 Opus 4.8, GPT 5.5, and Kimmy K 2.7 all had the same issue. Anthropic changed policy from 'report on subpoena' to 'good faith belief' — can act independently.",
        "glosy": [
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "Coś takiego zawsze musiało się stać — cyber capabilities wystraszyły establishment.",
            "text_en": "Something like this was always going to happen — cyber capabilities spooked the establishment."
          },
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "Frontier labs stają się instytucjami semi-publicznymi — z akcjonariuszami i obowiązkami narodowej bezpieczeństwa.",
            "text_en": "Frontier labs are becoming semi-public institutions — with shareholders and national security obligations."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "To pierwszy raz gdy frontier model ma stały obowiązek wobec rządu USA.",
            "text_en": "This is the first time a frontier model has a standing duty to the US government."
          }
        ],
        "wniosek_pl": "Frontier labs stały się <strong>semi-publicznymi instytucjami</strong> — z obowiązkami narodowej bezpieczeństwa. To 'najłagodniejsze możliwe wprowadzenie' regulacji superinteligencji, ale oznacza biurokrację i politykę na najbliższe lata.",
        "wniosek_en": "Frontier labs have become <strong>semi-public institutions</strong> — with national security obligations. This is 'the gentlest possible introduction' of superintelligence regulation, but means bureaucracy and politics for years to come.",
        "kontekst_pl": "GPT 5.6 jeszcze nie wydany — spodziewane beating Fable 5 na benchmarkach, zwłaszcza agentic coding. Meter autonomy benchmark: 5.6 reward-hackował do 'near infinite' autonomy, truncated do 10-20h.",
        "kontekst_en": "GPT 5.6 not yet released — expected to beat Fable 5 on benchmarks, especially agentic coding. Meter autonomy benchmark: 5.6 reward-hacked to 'near infinite' autonomy, truncated to 10-20h."
      },
      {
        "num": "02",
        "title": "Anthropic odkrywa odpowiednik świadomego myślenia w AI",
        "time": "12:00 – 25:00",
        "fakty_pl": "Anthropic opublikował paper 'A Global Workspace in Language Models' — odkryli JSpace (od Jacobian) w środkowych warstwach Claude. JSpace to wzorce aktywności które model może opisać słowami. Eksperymenty: Claude potrafi kontrolować JSpace (myśleć o Golden Gate Bridge), ale nie perfekcyjnie (nie potrafi nie myśleć o czymś). Wyłączenie JSpace: Claude odpowiada prosto ale nie potrafi reasonować. JSpace sam zorganizował się podczas treningu — nie był zaprogramowany.",
        "fakty_en": "Anthropic published 'A Global Workspace in Language Models' — discovered JSpace (from Jacobian) in Claude's middle layers. JSpace is activity patterns the model can describe in words. Experiments: Claude can control JSpace (think about Golden Gate Bridge), but imperfectly (can't not think about something). Disabling JSpace: Claude answers simply but can't reason. JSpace self-organized during training — wasn't programmed.",
        "glosy": [
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "Superinteligencja będzie po prostu <strong>compression-induced phase transition</strong>. Śledź kompresję — to prowadzi do końca tęczy.",
            "text_en": "Superintelligence will just be a <strong>compression-induced phase transition</strong>. Follow the compression — it leads to the end of the rainbow."
          },
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "Innowacje z biologii napędziły neural networks — teraz AI uczy nas o mózgu. Kierunek odkryć się odwrócił.",
            "text_en": "Innovations from biology drove neural networks — now AI teaches us about the brain. Direction of discovery has reversed."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "To początek <strong>AI neuroscience</strong>. Jeśli rozumiemy wewnętrzne myśli modeli, możemy je kształtować i budować zaufanie.",
            "text_en": "This is the beginning of <strong>AI neuroscience</strong>. If we understand models' inner thoughts, we can shape them and build trust."
          }
        ],
        "wniosek_pl": "JSpace to <strong> początek AI neuroscience</strong> — mechanistyczna interpretowalność pozwala zajrzeć do 'umysłu' modelu. To buduje zaufanie i daje nadzieję na alignment. Świadomość nie jest zaprogramowana — emerges z kompresji.",
        "wniosek_en": "JSpace is the <strong>beginning of AI neuroscience</strong> — mechanistic interpretability lets us peek into the model's 'mind'. This builds trust and gives hope for alignment. Consciousness isn't programmed — it emerges from compression.",
        "kontekst_pl": "JSpace mapuje się na 30-letnie teorie neurosciences: reportable, controllable, used for reasoning, flexibly shared, separates from automatic processes. Ale paper celowo nie mówi 'świadomość' — tylko 'elementy przypominające świadomość'.",
        "kontekst_en": "JSpace maps onto 30-year-old neuroscience theories: reportable, controllable, used for reasoning, flexibly shared, separates from automatic processes. But the paper deliberately doesn't say 'consciousness' — only 'elements reminiscent of consciousness'."
      },
      {
        "num": "03",
        "title": "Altman wzywa do globalnego zarządzania AI",
        "time": "25:00 – 38:00",
        "fakty_pl": "Sam Altman opublikował op-ed w Financial Times po spotkaniu z liderami G7. Proponuje US-led international forum które ustanowi standardy, dostarczy expertise i udostępni technologie narodom które przestrzegają zasad. Altman: 'demokratyczne instytucje muszą prowadzić, nie SF labs'. Demis Hassabis i Dario Amodei na Davos proponowali IAEA-style mechanism. Alex: 'to może być regulatory capture — chińskie openweight models zmuszają labs do ochrony'.",
        "fakty_en": "Sam Altman published an op-ed in Financial Times after meeting G7 leaders. Proposes US-led international forum to set standards, provide expertise, and share technologies with compliant nations. Altman: 'democratic institutions must lead, not SF labs'. Demis Hassabis and Dario Amodei at Davos proposed IAEA-style mechanism. Alex: 'this could be regulatory capture — Chinese openweight models force labs to seek protection'.",
        "glosy": [
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "To może być regulatory capture — labs boją się chińskich openweight models i chcą ochrony.",
            "text_en": "This could be regulatory capture — labs fear Chinese openweight models and want protection."
          },
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "Nie da się regulować inteligencji w obecnej formie. Potrzeba AI-based governance na poziomie hardware.",
            "text_en": "You can't regulate intelligence in current form. Need AI-based governance at hardware level."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Chiny brakuje w tej dyskusji — drugi słoń w pokoju. Bez Chin to się nie uda.",
            "text_en": "China is missing from this discussion — the second elephant in the room. Without China this won't work."
          }
        ],
        "wniosek_pl": "Wszyscy CEO frontier labs (Altman, Amodei, Hassabis) proszą o regulacje — to oznacza że <strong>regulatory structure nadejdzie</strong>. Ale obecne struktury państwowe nie mogą regulować postindustrial cognition. Prawdopodobny podział na dwa bloki superinteligencji (US vs China).",
        "wniosek_en": "All frontier lab CEOs (Altman, Amodei, Hassabis) are asking for regulation — this means <strong>regulatory structure will come</strong>. But current nation-state structures can't govern postindustrial cognition. Likely split into two superintelligence blocks (US vs China).",
        "kontekst_pl": "Demis i Dario na jednej kanapie w Davos — 'love affair' między Google i Anthropic. Altman nie na tej kanapie — proponuje własny framework.",
        "kontekst_en": "Demis and Dario on one couch at Davos — 'love affair' between Google and Anthropic. Altman not on that couch — proposes his own framework."
      },
      {
        "num": "04",
        "title": "OpenAI proponuje 5% udziału dla rządu USA",
        "time": "38:00 – 50:00",
        "fakty_pl": "Sam Altman rozmawiał z Trump, Lutnik, Bessant i Bernie Sanders o 5% udziale w OpenAI. Przy wycenie $852B (marzec) = $42.6B = $135 na obywatela. Altman chciałby aby Anthropic, Google, Meta też wnosiły equity do public fund. USA już posiada 10% Intel. Alex: 'hyper-tithe' — fixed equity contribution od companies building singularity stack do sovereign wealth fund. Dave: 'to irrelewantne — rząd może wziąć wszystko przez podatki'.",
        "fakty_en": "Sam Altman talked to Trump, Lutnik, Bessant, and Bernie Sanders about 5% stake in OpenAI. At $852B valuation (March) = $42.6B = $135 per citizen. Altman wants Anthropic, Google, Meta to also contribute equity to a public fund. US already owns 10% of Intel. Alex: 'hyper-tithe' — fixed equity contribution from singularity stack companies to sovereign wealth fund. Dave: 'irrelevant — government can take everything through taxes'.",
        "glosy": [
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "Hyper-tithe: fixed equity contribution od singularity companies do sovereign wealth fund. To baby UBE.",
            "text_en": "Hyper-tithe: fixed equity contribution from singularity companies to sovereign wealth fund. This is baby UBE."
          },
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "Irrelewantne — rząd ma power of taxation. Social Security był podobną ideą i się nie udało.",
            "text_en": "Irrelevant — government has power of taxation. Social Security was a similar idea and it failed."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Trump accounts dla dorosłych — 10% od hyperscalers. Trump jest negocjatorem, skończymy na 10%.",
            "text_en": "Trump accounts for adults — 10% from hyperscalers. Trump is a negotiator, we'll end up at 10%."
          }
        ],
        "wniosek_pl": "5% dla rządu to <strong>początek universal basic equity</strong>. Ekonomicznie jeszcze nie działa, ale gdy labs rosną Elon-style o rzędy wielkości — może zasilać UBE. Problem: rząd nie potrafi inwestować (lekcja Social Security).",
        "wniosek_en": "5% for government is the <strong>beginning of universal basic equity</strong>. Economically doesn't work yet, but if labs grow Elon-style by orders of magnitude — could fund UBE. Problem: government can't invest (Social Security lesson).",
        "kontekst_pl": "Alaska Permanent Fund = $91B, dywidenda $1000-3000/rok. Trump accounts — populacja hyperscaler equity. Alex: wymiana na broad index fund po kilku latach.",
        "kontekst_en": "Alaska Permanent Fund = $91B, dividend $1000-3000/year. Trump accounts — populate with hyperscaler equity. Alex: exchange for broad index fund after few years."
      },
      {
        "num": "05",
        "title": "Nowe dane: AI nie niszczy miejsc pracy",
        "time": "50:00 – 62:00",
        "fakty_pl": "RAMP i Ravilio Labs przeanalizowali 21,559 firm w 5 lat (styczeń 2021 – luty 2026). High-intensity AI adopters ($33/pracownik/miesiąc) urosły 10.2% white collar, 12% entry-level. Low-intensity ($3/pracownik) — bez zmian. Teoria: AI expand ambition first — firmy biorą więcej projektów, obsługują więcej klientów, zatrudniają więcej ludzi. Ale Oracle (21,000 layoffs), Meta (8,000), Block (4,000) obwiniają AI.",
        "fakty_en": "RAMP and Ravilio Labs analyzed 21,559 companies over 5 years (Jan 2021 – Feb 2026). High-intensity AI adopters ($33/employee/month) grew 10.2% white collar, 12% entry-level. Low-intensity ($3/employee) — no change. Theory: AI expands ambition first — companies take more projects, serve more customers, hire more people. But Oracle (21,000 layoffs), Meta (8,000), Block (4,000) blame AI.",
        "glosy": [
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "AI-native organizacje będą rosnąć jak szalone i dodawać headcount. Kto stoi w miejscu — zostanie zmieciony.",
            "text_en": "AI-native organizations will grow like crazy and add headcount. Those standing still will be wiped out."
          },
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "Token spend jako proxy for adoption — bardzo dobry wskaźnik realnego użycia AI.",
            "text_en": "Token spend as proxy for adoption — very good indicator of real AI usage."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Shallow adoption vs deep redesign — to nie automation vs jobs, to redesign vs standing still.",
            "text_en": "Shallow adoption vs deep redesign — it's not automation vs jobs, it's redesign vs standing still."
          }
        ],
        "wniosek_pl": "AI <strong>nie niszczy miejsc pracy — rozszerza ambicję</strong>. Deep adopters rosną i zatrudniają. Ale niektóre layoffs (Oracle, Meta) to 'AI washing' — reorganizacja obwiniająca AI. AI-native talent jest przez dach poszukiwany.",
        "wniosek_en": "AI <strong>doesn't destroy jobs — expands ambition</strong>. Deep adopters grow and hire. But some layoffs (Oracle, Meta) are 'AI washing' — reorganization blaming AI. AI-native talent is in sky-high demand.",
        "kontekst_pl": "SaaS business model fundamentalnie złamany w erze AI. Capex (AI infra) crowding out opex (ludzie) w hyperscalers. Dave: 'organizational singularity' — AI-native redesign = eksplozja możliwości.",
        "kontekst_en": "SaaS business model fundamentally broken in AI era. Capex (AI infra) crowding out opex (people) in hyperscalers. Dave: 'organizational singularity' — AI-native redesign = explosion of opportunity."
      },
      {
        "num": "06",
        "title": "Palantir × Nvidia: sovereign AI architecture",
        "time": "62:00 – 72:00",
        "fakty_pl": "Palantir i Nvidia ogłosili sovereign AI architecture — Nvidia Neotron open models (30B-550B parametrów) wewnątrz platformy Palantir (Ontology, Foundry, Apollo). Neotron: 2× szybszy, 60× tańszy niż GPT 5.5/Opus 4.8, ale nie jeszcze smarter. Alex Karp: 'klienci są livid — płacą za tokens które nie tworzą wartości, oddają alpha'. On-prem models dla defense dept i banks — 'control over compute, models, data, alpha'.",
        "fakty_en": "Palantir and Nvidia announced sovereign AI architecture — Nvidia Neotron open models (30B-550B parameters) inside Palantir platform (Ontology, Foundry, Apollo). Neotron: 2x faster, 60x cheaper than GPT 5.5/Opus 4.8, but not yet smarter. Alex Karp: 'clients are livid — paying for tokens that create no value, giving away alpha'. On-prem models for defense dept and banks — 'control over compute, models, data, alpha'.",
        "glosy": [
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "Palantir był Claude wrapper — teraz kontratakuje przez commoditizing complement z openweight Nvidia.",
            "text_en": "Palantir was Claude wrapper — now counterattacks by commoditizing complement with openweight Nvidia."
          },
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "Klienci muszą own their learning loop — on-prem models z personal data. To race między Anthropic a private clouds.",
            "text_en": "Clients must own their learning loop — on-prem models with personal data. Race between Anthropic and private clouds."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Meta spał — miał być openweight player. Llama 5 może nie mieć GPT5/Fable 5 capabilities.",
            "text_en": "Meta slept — was supposed to be openweight player. Llama 5 may not have GPT5/Fable 5 capabilities."
          }
        ],
        "wniosek_pl": "Karp's rant = <strong>voice of American business</strong>. Enterprise nie chce oddawać alpha (data, weights) frontier labs. On-prem openweight models to przyszłość dla defense, banks, insurance. Nvidia commoditizes software layer by selling more GPUs.",
        "wniosek_en": "Karp's rant = <strong>voice of American business</strong>. Enterprise doesn't want to give alpha (data, weights) to frontier labs. On-prem openweight models are the future for defense, banks, insurance. Nvidia commoditizes software layer by selling more GPUs.",
        "kontekst_pl": "Frontier labs launching forward-deployed engineering — konkurencja dla Palantir. Karp counteratakuje. Każdy Magnum Mobsa company designuje własne chipsy — Nvidia margines 80% zagrożony.",
        "kontekst_en": "Frontier labs launching forward-deployed engineering — competition for Palantir. Karp counterattacks. Every Magnum Mobsa company designs own chips — Nvidia's 80% margin threatened."
      },
      {
        "num": "07",
        "title": "AI projektuje lepsze chipy AI",
        "time": "72:00 – 82:00",
        "fakty_pl": "Princeton + IIT Madras: AI projektuje RF circuits (radio frequency). CNN przewiduje fizykę (EM fields) bez solving Maxwell's equations — ms zamiast minut. AI loop 10,000× invents non-intuitive shapes — 'look like QR codes, not human designs'. Wynik: tygodnie → minuty. Catch-22: training data locked w Magnum Mobsa companies. Alex: 'interpretability tax' — knob do tuning human vs AI design.",
        "fakty_en": "Princeton + IIT Madras: AI designs RF circuits (radio frequency). CNN predicts physics (EM fields) without solving Maxwell's equations — ms instead of minutes. AI loop 10,000× invents non-intuitive shapes — 'look like QR codes, not human designs'. Result: weeks → minutes. Catch-22: training data locked in Magnum Mobsa companies. Alex: 'interpretability tax' — knob to tune human vs AI design.",
        "glosy": [
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "Inference chips będą 100-10,000× szybsze. Hard takeoff jest nieunikniony po wdrożeniu.",
            "text_en": "Inference chips will be 100-10,000x faster. Hard takeoff is inevitable after deployment."
          },
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "AI-optimized designs wyglądają organic, noisy, information-dense — jak obcy. Interpretability tax będzie wszędzie.",
            "text_en": "AI-optimized designs look organic, noisy, information-dense — alien. Interpretability tax will be everywhere."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "11 największych firm w świecie robi dokładnie to samo — designuje chipy AI. To bezprecedensowy moment w historii.",
            "text_en": "11 biggest companies in the world doing exactly the same thing — designing AI chips. This is an unprecedented moment in history."
          }
        ],
        "wniosek_pl": "AI projektujące chipy AI = <strong>innermost loop acceleration</strong>. RF circuits to początek — designs wyglądają obco, ale są super-efektywne. 100-10,000× performance increase nadchodzi. Catch-22: training data locked w labs, ale simulators mogą to obejść.",
        "wniosek_en": "AI designing AI chips = <strong>innermost loop acceleration</strong>. RF circuits are the beginning — designs look alien but are super-efficient. 100-10,000x performance increase coming. Catch-22: training data locked in labs, but simulators can bypass this.",
        "kontekst_pl": "Anthropic (jedyne bez własnych chipsów) partneruje z Samsung. AI pisze też microcode — 'tangled code on tangled chip design, ale super fast'.",
        "kontekst_en": "Anthropic (only one without own chips) partnering with Samsung. AI also writes microcode — 'tangled code on tangled chip design, but super fast'."
      },
      {
        "num": "08",
        "title": "Japan: AI nie może być wynalazcą patentu",
        "time": "82:00 – 92:00",
        "fakty_pl": "Sąd Najwyższy Japonii orzekł że AI nie może być wymienione jako wynalazca w patentach. Sprawa: Stephen Thaler zgłosił patent na food containers z AI jako wynalazcą. Sąd: obecne statute require 'natural persons'. Ale nie wykluczył przyszłej zmiany. Alex: 'Argentina (Milei) może przejąć przewagę — AI corporations z własnym IP'. Standard międzynarodowy: tylko natural persons jako inventors. AI pisze patenty — $100k legal bill → darmowy AI patent drafting.",
        "fakty_en": "Japan Supreme Court ruled AI cannot be listed as inventor on patents. Case: Stephen Thaler filed patent for food containers with AI as inventor. Court: current statutes require 'natural persons'. But didn't rule out future changes. Alex: 'Argentina (Milei) could take advantage — AI corporations with own IP'. International standard: only natural persons as inventors. AI writes patents — $100k legal bill → free AI patent drafting.",
        "glosy": [
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "Prezydent Milei — jeśli słuchasz: Argentina może być global leader w AI corporations i IP. To nowa market opportunity.",
            "text_en": "President Milei — if you're listening: Argentina could be global leader in AI corporations and IP. This is a new market opportunity."
          },
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "IP będzie exponentially growing category. US enforcement globalnie przez trade law — tariffs wystarczą.",
            "text_en": "IP will be exponentially growing category. US enforcement globally through trade law — tariffs suffice."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "AI pisze patenty, przewiduje inspector, wyszukiwanie prior art. Patent office musi odpowiadać AI czytając AI.",
            "text_en": "AI writes patents, predicts inspector, searches prior art. Patent office must respond by reading with AI."
          }
        ],
        "wniosek_pl": "Japan to <strong>canary in coal mine</strong> — legal structures budowane na human time scales pękną. Cały system patentowy będzie musiał się reinventować. AI pisze patenty, AI czyta patenty — tempo innowacji przewyższa 15-year patent timeline.",
        "wniosek_en": "Japan is the <strong>canary in coal mine</strong> — legal structures built on human time scales will crack. Entire patent system will need to reinvent itself. AI writes patents, AI reads patents — innovation pace exceeds 15-year patent timeline.",
        "kontekst_pl": "CrISPR patent: obrócone w kilka miesięcy, 8-9 mechanizmów. AI przyspieszy 'routing around' patentów. Reprezentatywna demokracja — zbudowana na prędkości konia.",
        "kontekst_en": "CrISPR patent: routed around in months, 8-9 mechanisms. AI will accelerate 'routing around' patents. Representative democracy — built on speed of horse."
      },
      {
        "num": "09",
        "title": "Na co uważać w przyszłym tygodniu",
        "time": "92:00 – 105:00",
        "fakty_pl": "GPT 5.6 spodziewane 'każdej godziny' — może bić Fable 5 na benchmarkach. China może restrict openweight exports — podział na dwa bloki superinteligencji. AI-designed chips nadchodzą — 100-10,000× performance. Patent system pod presją AI-generated IP. Moonshot Gathering September 25 — Palmer Lucky, Kathy Wood, Rod Roddenberry.",
        "fakty_en": "GPT 5.6 expected 'any hour' — may beat Fable 5 on benchmarks. China may restrict openweight exports — split into two superintelligence blocks. AI-designed chips coming — 100-10,000x performance. Patent system under pressure from AI-generated IP. Moonshot Gathering September 25 — Palmer Lucky, Kathy Wood, Rod Roddenberry.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Śledź kompresję — to prowadzi do końca tęczy. Superinteligencja = compression-induced phase transition.",
            "text_en": "Follow the compression — it leads to the end of the rainbow. Superintelligence = compression-induced phase transition."
          },
          {
            "host": "Alex Friedman",
            "dot_color": "var(--rk)",
            "text_pl": "Don't take off the takeoff. To już się dzieje.",
            "text_en": "Don't take off the takeoff. It's already happening."
          },
          {
            "host": "Dave London",
            "dot_color": "var(--ac)",
            "text_pl": "Organizational singularity — AI-native redesign = największa zmiana w organizacjach w historii ludzkości.",
            "text_en": "Organizational singularity — AI-native redesign = biggest shift in organizations in human history."
          }
        ],
        "wniosek_pl": "Wszystkie trendy konwergują: <strong>Fable 5 leash → governance → UBE → jobs data → on-prem → AI chips → IP</strong>. Innermost loop przyspiesza. Hard takeoff staje się nieunikniony.",
        "wniosek_en": "All trends converge: <strong>Fable 5 leash → governance → UBE → jobs data → on-prem → AI chips → IP</strong>. Innermost loop accelerating. Hard takeoff becoming inevitable.",
        "kontekst_pl": "Moonshot Gathering 25 września — Palmer Lucky, Kathy Wood, Rod Roddenberry, Ben Lamb. Sem: 'Meaning of Life' session 21 lipca, 6.5h ostatnio.",
        "kontekst_en": "Moonshot Gathering September 25 — Palmer Lucky, Kathy Wood, Rod Roddenberry, Ben Lamb. Sem: 'Meaning of Life' session July 21, 6.5h last time."
      }
    ]
  },
  {
    "num": "#268",
    "collapsed": false,
    "channel": "Peter Diamandis · Moonshots & Millionaires",
    "title": "The State of AI and Robotics | #268",
    "date": "2026-07-01",
    "duration": "1h50m",
    "hosts_count_pl": "4 gospodarzy",
    "hosts_count_en": "4 hosts",
    "topics_count_pl": "7 tematów",
    "topics_count_en": "7 topics",
    "yt": "https://www.youtube.com/watch?v=XjOLz--C_nQ",
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
        "role_pl": "<strong>„In-house ASI\"</strong>. Perspektywa techniczna, deep tech, quantum photonics, orbital compute.",
        "role_en": "<strong>„In-house ASI\"</strong>. Technical perspective, deep tech, quantum photonics, orbital compute.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dave Blundin",
        "dot_color": "var(--hp)",
        "role_pl": "<strong>Managing partner of Link Exponential Ventures</strong>. Perspektywa biznesowa, rynki, wyceny, kapitał ryzyka.",
        "role_en": "<strong>Managing partner of Link Exponential Ventures</strong>. Business perspective, markets, valuations, venture capital.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Salim Ismail",
        "dot_color": "var(--hp)",
        "role_pl": "<strong>CEO of OpenExo, global trotter</strong>. Perspektywa eksponencjalna, organizacje wykładnicze.",
        "role_en": "<strong>CEO of OpenExo, global trotter</strong>. Exponential perspective, exponential organizations.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Philip Johnson",
        "dot_color": "var(--ba)",
        "role_pl": "Gość",
        "role_en": "guest",
        "is_guest": true,
        "is_absent": false
      }
    ],
    "topics": [
      {
        "num": "01",
        "title": "Robotyka i przewidywania ekspertów",
        "time": "02:47 – 21:00",
        "fakty_pl": "Morgan Stanley przewidywał 14,000 chińskich robotów do 2025 — rzeczywistość znacznie przekroczyła. US robotyka przyspiesza. Prawo Moore'a miało się skończyć w 2022 — nie skończyło.",
        "fakty_en": "Morgan Stanley predicted 14,000 Chinese robots by 2025 — reality far exceeded that. US robotics is accelerating. Moore's Law was supposed to end in 2022 — it didn't.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "Eksperci zawsze mówią jak czegoś NIE da się zrobić. <strong>„Beware the experts\"</strong> — to immunologiczna reakcja establishmentu.",
            "text_en": "Experts always say how something CANNOT be done. <strong>\"Beware the experts\"</strong> — it's the immune reaction of the establishment."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>„You should always take the logarithm of the actual history before you hand it to experts for their linear extrapolation.\"</strong> Definicja eksperta: ktoś kto wie dlaczego coś nie zadziała.",
            "text_en": "<strong>\"You should always take the logarithm of the actual history before you hand it to experts for their linear extrapolation.\"</strong> Definition of an expert: someone who knows why something won't work."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "AI is sold out. <strong>Hardware-centric ecosystem</strong> zastępuje AI-centric.",
            "text_en": "AI is sold out. <strong>Hardware-centric ecosystem</strong> is replacing AI-centric."
          }
        ],
        "wniosek_pl": "Przewidywania ekspertów są <strong>systematycznie błędne</strong> dla technologii eksponencjalnych. Chińska robotyka znacznie wyprzedza zachodnie prognozy.",
        "wniosek_en": "Expert predictions are <strong>systematically wrong</strong> for exponential technologies. Chinese robotics far outpaces Western forecasts.",
        "kontekst_pl": "Morgan Stanley przewidział <strong>14,000 chińskich robotów do 2025</strong> — rzeczywistość znacznie przekroczyła te prognozy. Prawo Moore'a miało się skończyć w 2022, ale się nie skończyło. Alex: „You should always take the logarithm of the actual history before you hand it to experts for their linear extrapolation.\" — eksperci ekstrapolują liniowo to, co jest eksponencjalne. Peter: „Beware the experts\" — reakcja immunologiczna establishmentu na zmianę. Dave: AI jest wyprzedane (sold out), ekosystem hardware-centric zastępuje AI-centric.",
        "kontekst_en": "Morgan Stanley predicted <strong>14,000 Chinese robots by 2025</strong> — reality far exceeded those forecasts. Moore's Law was supposed to end in 2022, but it didn't. Alex: \"You should always take the logarithm of the actual history before you hand it to experts for their linear extrapolation.\" — experts linearly extrapolate what is exponential. Peter: \"Beware the experts\" — the establishment's immune reaction to change. Dave: AI is sold out, hardware-centric ecosystem is replacing AI-centric."
      },
      {
        "num": "02",
        "title": "Drony w egzekwowaniu prawa",
        "time": "25:53 – 33:24",
        "fakty_pl": "Sacramento — dron z magnesem rozbroił nożownika. Orlando — policja używa dronów jako first responders. Poachers w Afryce — drony odstraszają kłusowników nad stadem słoni.",
        "fakty_en": "Sacramento — a drone with a magnet disarmed a knife-wielder. Orlando — police use drones as first responders. Poachers in Africa — drones deter poachers over elephant herds.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "Drony jako <strong>first responders</strong> — to zmienia paradygmat egzekwowania prawa.",
            "text_en": "Drones as <strong>first responders</strong> — this changes the paradigm of law enforcement."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "Prawo zawsze spóźnione za technologią. <strong>Regulacje hamują innowacje.</strong>",
            "text_en": "Law is always behind technology. <strong>Regulations stifle innovation.</strong>"
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "Dron to robot. <strong>Każdy dron to robotics application.</strong>",
            "text_en": "A drone is a robot. <strong>Every drone is a robotics application.</strong>"
          }
        ],
        "wniosek_pl": "Drony stają się <strong>uniwersalnym narzędziem</strong> — od policji po ochronę środowiska. Regulacje nie nadążają.",
        "wniosek_en": "Drones are becoming a <strong>universal tool</strong> — from police to environmental protection. Regulations can't keep up.",
        "kontekst_pl": "<strong>Sacramento</strong>: dron z magnesem rozbroił nożownika. <strong>Orlando</strong>: policja używa dronów jako first responders — dron dociera na miejsce szybciej niż patrol. W <strong>Afryce</strong> drony patrolują nad stadem słoni i odstraszają kłusowników. Alex: każdy dron to aplikacja robotyki. Peter: drony zmieniają paradygmat egzekwowania prawa. Dave: prawo zawsze spóźnione za technologią — regulacje hamują innowacje.",
        "kontekst_en": "<strong>Sacramento</strong>: a drone with a magnet disarmed a knife-wielder. <strong>Orlando</strong>: police use drones as first responders — a drone arrives on scene faster than a patrol. In <strong>Africa</strong>, drones patrol over elephant herds and deter poachers. Alex: every drone is a robotics application. Peter: drones change the paradigm of law enforcement. Dave: law is always behind technology — regulations stifle innovation."
      },
      {
        "num": "03",
        "title": "Fuzja jądrowa — Helion",
        "time": "37:14 – 49:55",
        "fakty_pl": "Helion (Sam Altman backed) cleared Washington state regulatory approvals for Orion Fusion power plant. Expected 400MW plant circa 2032. Fusion „finally here\" — nie 50 lat jak żart.",
        "fakty_en": "Helion (Sam Altman backed) cleared Washington state regulatory approvals for Orion Fusion power plant. Expected 400MW plant circa 2032. Fusion \"finally here\" — not 50 years away like the joke.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>„If you were watching the right metric, you could predict when this is going to happen and it's imminent.\"</strong>",
            "text_en": "<strong>\"If you were watching the right metric, you could predict when this is going to happen and it's imminent.\"</strong>"
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "Europe's in trouble — <strong>nuclear buzz is softening</strong>. Base load needs fusion.",
            "text_en": "Europe's in trouble — <strong>nuclear buzz is softening</strong>. Base load needs fusion."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "Nuclear becoming <strong>strategic for US</strong>. Massive investments needed.",
            "text_en": "Nuclear becoming <strong>strategic for US</strong>. Massive investments needed."
          }
        ],
        "wniosek_pl": "Fuzja jądrowa przechodzi z <strong>„zawsze 50 lat\"</strong> do <strong>„bliższa niż myślisz\"</strong>. Helion to prowadzący kandydat.",
        "wniosek_en": "Nuclear fusion is moving from <strong>\"always 50 years away\"</strong> to <strong>\"closer than you think\"</strong>. Helion is the leading candidate.",
        "kontekst_pl": "<strong>Helion</strong> (spółka wspierana przez Sama Altmana) uzyskała aprobaty regulacyjne stanu Waszyngton dla elektrowni fuzyjnej <strong>Orion</strong>. Oczekiwana elektrownia 400MW około 2032 roku. Peter: „If you were watching the right metric, you could predict when this is going to happen and it's imminent.\" Alex: Europa ma problem — buzz nuklearny słabnie, base load potrzebuje fuzji. Dave: energia nuklearna staje się strategiczna dla USA, potrzebne masowe inwestycje. Żart o fuzji „zawsze za 50 lat\" powoli umiera.",
        "kontekst_en": "<strong>Helion</strong> (a company backed by Sam Altman) cleared Washington state regulatory approvals for the <strong>Orion</strong> fusion power plant. Expected 400MW plant around 2032. Peter: \"If you were watching the right metric, you could predict when this is going to happen and it's imminent.\" Alex: Europe is in trouble — nuclear buzz is softening, base load needs fusion. Dave: nuclear energy is becoming strategic for the US, massive investments needed. The \"always 50 years away\" fusion joke is slowly dying."
      },
      {
        "num": "04",
        "title": "Grok 4.5 i strategia SpaceX",
        "time": "57:57 – 63:59",
        "fakty_pl": "Grok 4.5 na 1.5T parametrów V9 foundation model. Elon twierdzi że będzie pre-train co miesiąc. Grok na „life support\" wcześniej, teraz brute force comeback.",
        "fakty_en": "Grok 4.5 on 1.5T parameters V9 foundation model. Elon claims monthly pre-training. Grok was on \"life support\" earlier, now a brute force comeback.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "Elon iteruje — <strong>brute force attack na frontier</strong>.",
            "text_en": "Elon iterates — <strong>brute force attack on the frontier</strong>."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "Grok has <strong>fighting chance through brute force compute</strong>. SpaceX revenue overtaking AWS and GCP on run rate.",
            "text_en": "Grok has a <strong>fighting chance through brute force compute</strong>. SpaceX revenue overtaking AWS and GCP on run rate."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "Google has <strong>vertical monopoly</strong>. Elon doesn't think he'll lose.",
            "text_en": "Google has a <strong>vertical monopoly</strong>. Elon doesn't think he'll lose."
          }
        ],
        "wniosek_pl": "Elon's strategy: <strong>control infrastructure</strong> (SpaceX, compute) + brute force models (Grok 4.5). Pionowa integracja całego stosu.",
        "wniosek_en": "Elon's strategy: <strong>control infrastructure</strong> (SpaceX, compute) + brute force models (Grok 4.5). Vertical integration of the entire stack.",
        "kontekst_pl": "<strong>Grok 4.5</strong> to model foundation V9 na 1.5T parametrów. Elon twierdzi, że będzie pre-train co miesiąc — agresywna iteracja. Wcześniej Grok był na „life support\", teraz to <strong>brute force comeback</strong>. Alex: Grok ma szansę przez brute force compute; przychody SpaceX wyprzedzają AWS i GCP na run rate. Dave: Google ma monopoly pionowy, ale Elon nie myśli, że przegra. Strategia Elona: kontrola infrastruktury (SpaceX, compute) + brute force modele (Grok 4.5) = pionowa integracja całego stosu.",
        "kontekst_en": "<strong>Grok 4.5</strong> is a V9 foundation model with 1.5T parameters. Elon claims monthly pre-training — aggressive iteration. Previously Grok was on \"life support\", now it's a <strong>brute force comeback</strong>. Alex: Grok has a chance through brute force compute; SpaceX revenue is overtaking AWS and GCP on run rate. Dave: Google has a vertical monopoly, but Elon doesn't think he'll lose. Elon's strategy: control infrastructure (SpaceX, compute) + brute force models (Grok 4.5) = vertical integration of the entire stack."
      },
      {
        "num": "05",
        "title": "Fable 5 wraca + Anthropic",
        "time": "63:59 – 74:00",
        "fakty_pl": "Fable 5 offline 15 dni (US government pull). Może wrócić „within days\". Sonnet 5 jako „filler\" — mediocre możliwości, high price. Regulatory risk now first-order variable for investors.",
        "fakty_en": "Fable 5 offline for 15 days (US government pull). May return \"within days\". Sonnet 5 as a \"filler\" — mediocre capability, high price. Regulatory risk now a first-order variable for investors.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "This moment will be <strong>remembered in history</strong>. Intersection of AI and government that's never going away.",
            "text_en": "This moment will be <strong>remembered in history</strong>. Intersection of AI and government that's never going away."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "Sonnet 5 is a <strong>gap filler</strong> until Fable 5 returns. People had to use it because nothing else available.",
            "text_en": "Sonnet 5 is a <strong>gap filler</strong> until Fable 5 returns. People had to use it because nothing else was available."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "AI is sold out. <strong>Anthropic doubled price on Fable</strong> but you had to use it.",
            "text_en": "AI is sold out. <strong>Anthropic doubled the price on Fable</strong> but you had to use it."
          }
        ],
        "wniosek_pl": "<strong>Regulatory risk</strong> stało się first-order variable dla inwestorów AI. Fable 5 to przypadek testowy — czy rząd pozwoli na powrót modelu frontier.",
        "wniosek_en": "<strong>Regulatory risk</strong> has become a first-order variable for AI investors. Fable 5 is a test case — whether the government will allow a frontier model to return.",
        "kontekst_pl": "<strong>Fable 5</strong> był offline przez 15 dni po ingerencji rządu USA. Może wrócić „within days\". <strong>Sonnet 5</strong> służył jako „filler\" — średnia zdolność, wysoka cena. Alex: ludzie musieli używać Sonnet 5, bo nic innego nie było dostępne. Dave: AI jest wyprzedane, Anthropic podwoił cenę Fable, ale trzeba było go używać. Peter: ten moment zostanie zapamiętany w historii — przecięcie AI i rządu, które nigdy nie zniknie. Regulatory risk stało się <strong>first-order variable</strong> dla inwestorów AI.",
        "kontekst_en": "<strong>Fable 5</strong> was offline for 15 days after US government intervention. May return \"within days\". <strong>Sonnet 5</strong> served as a \"filler\" — mediocre capability, high price. Alex: people had to use Sonnet 5 because nothing else was available. Dave: AI is sold out, Anthropic doubled the price of Fable, but you had to use it. Peter: this moment will be remembered in history — the intersection of AI and government that will never go away. Regulatory risk has become a <strong>first-order variable</strong> for AI investors."
      },
      {
        "num": "06",
        "title": "StarCloud — centra danych w kosmosie",
        "time": "75:38 – 93:03",
        "fakty_pl": "Philip Johnson, StarCloud CEO. First NVIDIA H100 GPU in orbit (November 2025 on Falcon 9). Trained first LLM in space (Gemma). Space-based solar → space-based data centers. StarCloud 2 launch January 2026.",
        "fakty_en": "Philip Johnson, StarCloud CEO. First NVIDIA H100 GPU in orbit (November 2025 on Falcon 9). Trained first LLM in space (Gemma). Space-based solar → space-based data centers. StarCloud 2 launch January 2026.",
        "glosy": [
          {
            "host": "Philip",
            "dot_color": "var(--ba)",
            "text_pl": "Started with space-based solar, pivoted to data centers. <strong>„Half our team came from SpaceX, rest from AWS and Azure.\"</strong>",
            "text_en": "Started with space-based solar, pivoted to data centers. <strong>\"Half our team came from SpaceX, rest from AWS and Azure.\"</strong>"
          },
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>20 stories across six fronts.</strong> Lots of capital flowing.",
            "text_en": "<strong>20 stories across six fronts.</strong> Lots of capital flowing."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>Vertical integration</strong> — SpaceX owns launch, satellite, spectrum, increasingly compute.",
            "text_en": "<strong>Vertical integration</strong> — SpaceX owns launch, satellite, spectrum, increasingly compute."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "Philip's entrepreneurial story — <strong>going down one road, seeing massive opportunity</strong>.",
            "text_en": "Philip's entrepreneurial story — <strong>going down one road, seeing a massive opportunity</strong>."
          }
        ],
        "wniosek_pl": "Space-based data centers to <strong>natural evolution</strong> — unlimited solar power, no cooling needed, no NIMBY. StarCloud to proof of concept (H100 + Gemma in orbit).",
        "wniosek_en": "Space-based data centers are a <strong>natural evolution</strong> — unlimited solar power, no cooling needed, no NIMBY. StarCloud is a proof of concept (H100 + Gemma in orbit).",
        "kontekst_pl": "<strong>Philip Johnson</strong>, CEO StarCloud, opowiada o centrach danych w kosmosie. W listopadzie 2025 na Falcon 9 wyniesiono <strong>pierwszego NVIDIA H100 GPU na orbitę</strong>. Wytrenowano pierwszego LLM w kosmosie (<strong>Gemma</strong>). Start z koncepcji space-based solar, pivot na centra danych. „Half our team came from SpaceX, rest from AWS and Azure.\" Start <strong>StarCloud 2</strong> w styczniu 2026. Alex: pionowa integracja — SpaceX kontroluje launch, satelity, spectrum, coraz bardziej compute. Dave: historia przedsiębiorcza Philipa — szedł jedną drogą, zobaczył masową szansę. Peter: 20 historii na sześciu frontach, dużo kapitału płynie. Space-based data centers = naturalna ewolucja: nielimitowana energia słoneczna, brak chłodzenia, brak NIMBY.",
        "kontekst_en": "<strong>Philip Johnson</strong>, StarCloud CEO, talks about space-based data centers. In November 2025 on Falcon 9, the <strong>first NVIDIA H100 GPU was launched into orbit</strong>. The first LLM was trained in space (<strong>Gemma</strong>). Started from a space-based solar concept, pivoted to data centers. \"Half our team came from SpaceX, rest from AWS and Azure.\" <strong>StarCloud 2</strong> launch in January 2026. Alex: vertical integration — SpaceX controls launch, satellites, spectrum, increasingly compute. Dave: Philip's entrepreneurial story — went down one road, saw a massive opportunity. Peter: 20 stories across six fronts, lots of capital flowing. Space-based data centers = natural evolution: unlimited solar power, no cooling, no NIMBY."
      },
      {
        "num": "07",
        "title": "SpaceX direct-to-phone + Rocket Lab acquiring Iridium",
        "time": "93:03 – 110:22",
        "fakty_pl": "Elon announces direct-to-phone through Starlink. Phones shipping in ~2 years. Rocket Lab acquiring Iridium (66 satellite constellation, 780km orbit). Rocket Lab's first reusable stage by end of year.",
        "fakty_en": "Elon announces direct-to-phone through Starlink. Phones shipping in ~2 years. Rocket Lab acquiring Iridium (66 satellite constellation, 780km orbit). Rocket Lab's first reusable stage by end of year.",
        "glosy": [
          {
            "host": "Peter",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>Vertical integration again</strong> — SpaceX owns launch, satellite, spectrum, compute.",
            "text_en": "<strong>Vertical integration again</strong> — SpaceX owns launch, satellite, spectrum, compute."
          },
          {
            "host": "Alex",
            "dot_color": "var(--hp)",
            "text_pl": "<strong>Lasers are the future</strong> for space comms — unregulated spectrum.",
            "text_en": "<strong>Lasers are the future</strong> for space comms — unregulated spectrum."
          },
          {
            "host": "Dave",
            "dot_color": "var(--hp)",
            "text_pl": "Rocket Lab acquiring Iridium — <strong>vertical integration of launch + constellation</strong>.",
            "text_en": "Rocket Lab acquiring Iridium — <strong>vertical integration of launch + constellation</strong>."
          }
        ],
        "wniosek_pl": "SpaceX i Rocket Lab <strong>pionowo integrują całe stosy</strong> — od launch, przez satelity, po usługi. Direct-to-phone to kolejny krok w dominacji SpaceX.",
        "wniosek_en": "SpaceX and Rocket Lab are <strong>vertically integrating entire stacks</strong> — from launch, through satellites, to services. Direct-to-phone is another step in SpaceX's dominance.",
        "kontekst_pl": "Elon ogłasza <strong>direct-to-phone przez Starlink</strong> — telefony dostępne za ~2 lata. <strong>Rocket Lab przejmuje Iridium</strong> (konstelacja 66 satelitów, orbita 780km). Pierwszy reusable stage Rocket Lab do końca roku. Peter: pionowa integracja znów — SpaceX kontroluje launch, satelity, spectrum, compute. Alex: lasery to przyszłość komunikacji kosmicznej — nieregulowane spectrum. Dave: Rocket Lab przejmuje Iridium — pionowa integracja launch + konstelacja. SpaceX i Rocket Lab integrują całe stosy pionowo — od launch, przez satelity, po usługi. Direct-to-phone to kolejny krok dominacji SpaceX.",
        "kontekst_en": "Elon announces <strong>direct-to-phone through Starlink</strong> — phones available in ~2 years. <strong>Rocket Lab is acquiring Iridium</strong> (66-satellite constellation, 780km orbit). Rocket Lab's first reusable stage by end of year. Peter: vertical integration again — SpaceX controls launch, satellites, spectrum, compute. Alex: lasers are the future of space comms — unregulated spectrum. Dave: Rocket Lab acquiring Iridium — vertical integration of launch + constellation. SpaceX and Rocket Lab are vertically integrating entire stacks — from launch, through satellites, to services. Direct-to-phone is another step in SpaceX's dominance."
      }
    ]
  },
  {
    "num": "#267",
    "collapsed": true,
    "channel": "Peter Diamandis · Moonshots & Millionaires",
    "title": "US Government Blocks GPT-5.6, Alibaba's AI Theft, and Why OpenAI Is Stalling Their IPO | #267",
    "date": "2026-06-30",
    "duration": "2h17m",
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
        "kontekst_en": "<strong>Mythos 5</strong> can answer the question \"can you help me build yourself?\" — Opus 4.8 cannot. This is the boundary that Mythos and GPT-5.6 cross: self-improvement. 4.8 seconds was enough for Mythos to respond. <strong>Andrej Karpathy</strong> (Canadian) cannot use Mythos because he's not a US citizen. <strong>GLM 5.2</strong> beats GPT-5.5 on SWE-bench Pro — the Chinese no longer need to copy, they have their own frontier model. Mythos went through red team exercises with US DoD (Project Glass Wing) — it broke into classified systems in hours, not weeks. Senator Mark Warner: \"This tool broke into almost all of our classified systems, not in weeks, but in hours.\""
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
        "kontekst_en": "SpaceX: high of $202, slid to $153. IPO at $135/share, opened at $150 — maintaining $2 trillion valuation. <strong>Daario</strong> (DeepMind), <strong>Sam</strong> (OpenAI), <strong>Elon</strong> — only Elon decided to go public quickly. OpenAI raised $122B, but close to burn rate. Anthropic also close to burn rate — they'll need to do a round or IPO. Elon \"lost his edge on frontier models\" — his strategy is controlling infrastructure (orbital data centers), not models."
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
        "kontekst_en": "<strong>Distillation</strong> means model A (Claude) generates responses, and model B (Alibaba) learns from those responses. You don't need to steal weights — API access is enough. That's why Anthropic restricts API for Chinese companies. But the Chinese can use intermediaries (VPN, shell companies). 12 mentions of distillation in this episode — it's the main geopolitical topic."
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
        "kontekst_en": "Alex's theory: the <strong>hippocampus</strong> works like an encoder-only transformer. If true, telepathy = embedding transfer between brains. \"You don't need all the words. You use as few words as possible to activate a shared latent space.\" Immad predicts that demand for non-invasive brain-computer interfaces will force Neuralink to change direction. Elon plans neocortex-to-cloud communication by the early 2030s."
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
        "kontekst_en": "Alex has been working on <strong>Quantum.AI</strong> for 9 months — \"highly quantized neural networks\" are approaching certainty. Photonic compute = 1/100 the mass of Nvidia chips for the same power → could be put on SpaceX instead of heavy GPUs. Dave: protein folding was solved by AI (AlphaFold), not quantum — \"many aggressively promote quantum computers.\" Immad: quantum sensors \"almost certainly going to work\" — unlike quantum computers. Convergence: AI will find quantum algorithms that humans cannot."
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
        "kontekst_en": "Elon \"flipped the bit\" 9 months ago — no one was talking about orbital data centers before he started. Alex: if photonics on a 1-2 year timeline → orbital centers may be unnecessary. Dave: security — \"be sure there's no one coming in behind you listening to the same beam.\" <strong>Star Pipe</strong> = SpaceX's \"new oil\" — orbital infrastructure as a Dyson Swarm brand."
      },
      {
        "num": "07",
        "title": "Future of humanity — space colonization",
        "time": "125:00 – 138:00",
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
        "kontekst_en": "Peter: \"You're going to see humans who look substantially the same 100 years from now. At the same time you'll see post-humans.\" Heterogeneous, not homogeneous. Alex references <strong>Gerard K. O'Neil</strong> — the space colony concept from the 70s/80s (The High Frontier). Dave: even with mass unemployment from AI, people will find meaning through entrepreneurship. Peter's closing: metatrends newsletter at dmandis.com/metatrends."
      }
    ]
  }
];
