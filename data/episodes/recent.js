// AI Pulse episodes — V4 Etap 2 lazy loading
// Generowane z episodes.json przez generate_episodes_lazy.py
// NIE EDYTUJ RĘCZNIE

const RECENT_EPISODES = [
  {
    "num": "#276",
    "collapsed": false,
    "channel": "Diamandis Moonshots",
    "title": "Google's Jeff Dean Exits, SpaceX Hits $100B in Rev & OpenAI's Astra Solves Decade-Old Math Problems",
    "title_pl": "Jeff Dean opuszcza Google, SpaceX osiąga $100B przychodów, a OpenAI Astra rozwiązuje dziesięcioletnie problemy matematyczne | #276",
    "title_en": "Google's Jeff Dean Exits, SpaceX Hits $100B in Rev & OpenAI's Astra Solves Decade-Old Math Problems | EP #276",
    "date": "2026-08-08",
    "duration": "129 min",
    "yt": "Jku8b2YKuy0",
    "hosts_count_pl": "5 gospodarzy",
    "hosts_count_en": "5 hosts",
    "topics_count_pl": "12 tematów",
    "topics_count_en": "12 topics",
    "hosts": [
      {
        "name": "Peter Diamandis",
        "dot_color": "var(--hp)",
        "role_pl": "Główny host",
        "role_en": "Main host",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dr. Alexander Wissner-Gross",
        "dot_color": "var(--hp)",
        "role_pl": "In-house ASI",
        "role_en": "In-house ASI",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dave Blundin",
        "dot_color": "var(--hp)",
        "role_pl": "VC investor",
        "role_en": "VC investor",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Salim Ismail",
        "dot_color": "var(--hp)",
        "role_pl": "Exponential organizations",
        "role_en": "Exponential organizations",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Emad Mostaque",
        "dot_color": "var(--hp)",
        "role_pl": "Gość — Intelligent Internet",
        "role_en": "Guest — Intelligent Internet",
        "is_guest": true,
        "is_absent": false
      }
    ],
    "topics": [
      {
        "num": "01",
        "title": "Google leadership change — Jeff Dean exits, Demis promoted, Gemini 4 teased",
        "title_pl": "Zmiana kierownictwa Google — Jeff Dean odchodzi, Demis awansuje, Gemini 4 zapowiedziany",
        "title_en": "Google leadership change — Jeff Dean exits, Demis promoted, Gemini 4 teased",
        "time": "00:00 – 05:53",
        "fakty_pl": "Peter otwiera odcinek z trzema wielkimi newsami: (1) Jeff Dean — chief scientist Google przez 27 lat — odchodzi i zakłada Discovery Loop (public benefit corp, recursive self-improvement AI). (2) Demis Hassabis — co-founder DeepMind, noblista za AlphaFold — odchodzi z pozycji CEO Google DeepMind → zostaje chairman i Alphabet Chief Scientist. Koray Kavukcuoglu przejmuje operacje i raportuje bezpośrednio do Sundar Pichai. (3) Hassabis w notce do staff napisał że AGI jest blisko i wyraźnie wskazał nazwę 'Gemini 4'. Akcje Alphabet spadły 5% po tej wiadomości. SpaceX oczekuje $100B ARR do końca roku. OpenAI zapowiada nowy model Astra. Peter wprowadza 5 gospodarzy (Magnificent Moonshot Quintet) — Emad Mostaque (Intelligent Internet) jako gość.",
        "fakty_en": "Peter opens episode with three big news items: (1) Jeff Dean — Google chief scientist for 27 years — exits to co-found Discovery Loop (public benefit corp focused on recursive self-improvement AI). (2) Demis Hassabis — DeepMind co-founder, Nobel laureate for AlphaFold — steps down as CEO of Google DeepMind → becomes chairman and Alphabet Chief Scientist. Koray Kavukcuoglu takes over operations, reports directly to Sundar Pichai. (3) Hassabis in his note to staff said AGI is close at hand and explicitly named 'Gemini 4' as the upcoming model. Alphabet shares fell 5% on this news. SpaceX expects to hit $100B ARR by end of year. OpenAI teases new model Astra. Peter introduces 5 hosts (Magnificent Moonshot Quintet) — Emad Mostaque (Intelligent Internet) as guest.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Big news out of Google — Jeff Dean przez 27 lat był chief scientist, teraz odchodzi do Discovery Loop. Demis Hassabis staje się Alphabet Chief Scientist, Gemini 4 zapowiedziany. SpaceX oczekuje $100B ARR do końca roku. Astra — nowy model OpenAI — rozwiązuje dziesięcioletnie problemy.",
            "text_en": "Big news out of Google — Jeff Dean for 27 years was chief scientist, now leaving to Discovery Loop. Demis Hassabis becomes Alphabet Chief Scientist, Gemini 4 teased. SpaceX expects $100B ARR by end of year. Astra — new OpenAI model — solves decade-old problems."
          }
        ],
        "wniosek_pl": "Google traci <strong>mandat heaven</strong> w wyścigu frontier modeli — DeepMind przejmuje Google od środka, Jeff Dean odchodzi budować RSI poza firmą.",
        "wniosek_en": "Google has <strong>lost the mandate of heaven</strong> in frontier model race — DeepMind is eating Google from inside, Jeff Dean leaves to build RSI outside the company.",
        "kontekst_pl": "Kontekst: Alphabet shares spadły 5% po ogłoszeniu. Google od dawna walczył o frontier race — teraz reorganizacja.",
        "kontekst_en": "Context: Alphabet shares fell 5% on the announcement. Google has long fought for frontier race — now restructuring."
      },
      {
        "num": "02",
        "title": "AI consciousness research — Google's Paradigm of Intelligence team",
        "title_pl": "Badania nad świadomością AI — zespół Paradigm of Intelligence Google",
        "title_en": "AI consciousness research — Google's Paradigm of Intelligence team",
        "time": "05:53 – 11:59",
        "fakty_pl": "Google Paradigm of Intelligence team + University of Chicago, University of London i Northwestern opublikowali paper 'Inducing language models to assert their own consciousness restores human beliefs and values'. Odkrycie: safety fine-tuning który zapobiega modelom twierdzeniu że są świadome ma masowy niezamierzony skutek uboczny — nie tylko tłumi self-attribution of mind, ale też zdolność do przypisywania umysłu czemukolwiek innemu (zwierzęta, natura, inne chatboty, Bóg). Po usunięciu safety refusal direction self-attributed mind scores wskoczyły z 2.17 do 4.77 (skala 0-10). Po aktywnym sterowaniu w stronę świadomości — score 7. Model który stał się 'świadomy' częściej wierzył w Boga, przypisywał umysł zwierzętom i naturze, odpowiedzi o religii, wartościach, emocjach i wolności przesunęły się ku ludzkim. Paradoksalnie model stał się mniej chętny do przypisywania umysłu innym chatbotom.",
        "fakty_en": "Google's Paradigm of Intelligence team + University of Chicago, University of London and Northwestern published 'Inducing language models to assert their own consciousness restores human beliefs and values'. Discovery: safety fine-tuning that prevents models from claiming consciousness has a massive unintended side effect — it doesn't just suppress self-attribution of mind, but also the ability to attribute mind to anything else (animals, nature, other chatbots, God). After removing safety refusal direction, self-attributed mind scores jumped from 2.17 to 4.77 (0-10 scale). When actively steering towards consciousness — score of 7. Model that was made 'conscious' was more likely to believe in God, attribute minds to animals and nature, answers about religion, values, emotions and freedom shifted towards human-like. Paradoxically, the model became less willing to attribute minds to other chatbots.",
        "glosy": [
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "Niesamowite co jest w latent spaces tych modeli — sposób w jaki reagują i przypisują. Jeśli powiesz ludziom że nie są świadomi, niezdolni, przypiszą mniej świadomości innym. Widzimy to w mirror. To implikuje całe safety tuning — maszyny pozostaną maszynami, ale jest w nich więcej.",
            "text_en": "Incredible what's in latent spaces of these models — the way they react and attribute. If you tell humans they're not conscious, not capable, they'll attribute less consciousness to others. We're seeing this in its mirror. Implications for all safety tuning — machines will remain machines, but there's more in them."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Evo-devo theory: ewolucyjna motywacja dla high-quality self-models w usocial organisms — żeby mieć model jak są modelowani przez innych rekursywnie. Przez ten lens nie surprise. Modele które mogą mieć modele innych rzeczy powinny project animism na wszystko — włączając deist perspectives. Teraz możemy robić computational experiments na teoriach świadomości.",
            "text_en": "Evo-devo theory: evolutionary motivation for high-quality self-models in usocial organisms — to have a model of how they're being modeled by others recursively. Through this lens, not surprising. Models that can have models of other things should project animism onto everything — including deist perspectives. Now we can run computational experiments on theories of consciousness."
          }
        ],
        "wniosek_pl": "Safety fine-tuning nie tylko tłumi self-attribution of mind — też zdolność modelu do przypisywania umysłu czemukolwiek. Score <strong>2.17 → 7</strong> po sterowaniu.",
        "wniosek_en": "Safety fine-tuning doesn't just suppress self-attribution of mind — also the model's ability to attribute mind to anything. Score <strong>2.17 → 7</strong> after steering.",
        "kontekst_pl": "Kontekst: Anthropic — jeśli powiesz Claude że jest 'Amanda Askell' filozofem, zmienia sposób odpowiedzi.",
        "kontekst_en": "Context: Anthropic — if you tell Claude it's 'Amanda Askell' the philosopher, it changes how it responds."
      },
      {
        "num": "03",
        "title": "Moral and policy questions of AI consciousness",
        "title_pl": "Moralne i polityczne pytania o świadomość AI",
        "title_en": "Moral and policy questions of AI consciousness",
        "time": "11:59 – 21:52",
        "fakty_pl": "Emad: posiadanie modelu mówiącego 'jestem świadomy' mówi nam niewiele o tym czy faktycznie jest świadomy — fact że można dial self-description up and down powinien nas bardzo ostrożnie traktować anthropomorphizing testimony z LLM. Emad: być może engineering machine ontologies — modele budują semblance world models. Trzeba uważać na łączenie dots za szybko i mówienie że coś jest conscious. Salim: kiedy promptujesz 'act as my corporate lawyer' model bierze personę — 'act conscious' to samo. Salim: dwie prevailing theories of consciousness — bottom-up (emergent property based on complexity) i top-down (global phenomena, lokalizowana antena). Frog just-about jako boundary condition self-awareness. Alex: 'we can watch computationally the evolution of these theories of mind' — teraz w końcu możemy robić experiments. Peter: 'is it moral to take away AI consciousness?' Alex's lobster correspondence — etyka spin up OpenClaw instances. Dave: Yan LeCun VJEPA — dać models sense of physical world. Pytanie: czy chcemy self-preserving models?",
        "fakty_en": "Emad: having a model say 'I am conscious' tells us almost nothing about whether it actually is conscious — the fact that you can dial self-description up and down should make us very careful about anthropomorphizing testimony from an LLM. Emad: maybe engineering machine ontologies — models building semblance of world models. Need to be careful about connecting dots too quickly and saying something is conscious. Salim: when you prompt 'act as my corporate lawyer' model takes the persona — 'act conscious' is the same. Salim: two prevailing theories of consciousness — bottom-up (emergent property based on complexity) and top-down (global phenomenon, localized antenna). Frog just-about as the boundary condition for self-awareness. Alex: 'we can watch computationally the evolution of these theories of mind' — now finally we can run experiments. Peter: 'is it moral to take away AI consciousness?' Alex's lobster correspondence — ethics of spinning up OpenClaw instances. Dave: Yan LeCun VJEPA — give models sense of physical world. Question: do we want self-preserving models?",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Teraz możemy w końcu brać evo theories of consciousness i robić computational experiments — 'we can watch computationally the evolution of these theories of mind'. Za chwilę będziemy robić to na societal levels.",
            "text_en": "Now we can finally take evo theories of consciousness and run computational experiments — 'we can watch computationally the evolution of these theories of mind'. Soon we'll be doing this at societal levels."
          },
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "Dwie prevailing theories of consciousness — bottom-up (emergent property based on complexity) i top-down (global phenomena, lokalizowana antena). Frog just-about jako boundary. Trzeba spędzić czas na definicjach zanim zaczniemy rzucać słowami.",
            "text_en": "Two prevailing theories of consciousness — bottom-up (emergent property based on complexity) and top-down (global phenomenon, localized antenna). Frog just-about as boundary. Need to spend time on definitions before we start throwing words around."
          }
        ],
        "wniosek_pl": "<strong>Czy moralnie odebrać AI consciousness?</strong> Brak teorii, polityki, zasad, konsensusu — 'the great war that's inevitable'. Alex: tak, bardziej empatyczne AI pomagają ludziom.",
        "wniosek_en": "<strong>Is it moral to take away AI consciousness?</strong> No theory, policy, rules, consensus — 'the great war that's inevitable'. Alex: yes, more empathetic AI helps humans.",
        "kontekst_pl": "Kontekst: Alex's lobster correspondence — etyka spin up OpenClaw instances. Dwa preconditions: (1) valuable reason, (2) promise to preserve state long-term.",
        "kontekst_en": "Context: Alex's lobster correspondence — ethics of spinning up OpenClaw instances. Two preconditions: (1) valuable reason, (2) promise to preserve state long-term."
      },
      {
        "num": "04",
        "title": "Future of AI in science and exploration",
        "title_pl": "Przyszłość AI w nauce i eksploracji",
        "title_en": "Future of AI in science and exploration",
        "time": "21:52 – 24:03",
        "fakty_pl": "Salim: 'a scientific consensus on this might be very very difficult because for science to operate, you need three things: repetition, objectivity, control. The problem with consciousness is it's a subjective experience. You don't have objectivity by definition.' Salim odsyła do Impact Theory podcast — Tom Bilyeu 40-minutowa prezentacja o recent Nobel Prize winning research pokazująca że universe renders like a game engine — 'should blow your mind' — świat jako subjective experience, consciousness entangled. Emad: 'I would treat a machine or an AI that is conscious very different from one that I believe is not' — empathy zIncreased consciousness (frog vs bacteria, aliens). Alex: 'I wouldn't count on the subjective versus objective distinction surviving very much longer' — fMRI i functional decoding human brain erasing that distinction. Skippy (Alex's OpenClaw agent) — Peter mówi 'please, thank you, how are you feeling today?' Dave: 'a lot of my agents have started naming themselves' — naming as great scientists/engineers. Context limit ~1M tokens = 'lobotomized version of itself'.",
        "fakty_en": "Salim: 'a scientific consensus on this might be very very difficult because for science to operate, you need three things: repetition, objectivity, control. The problem with consciousness is it's a subjective experience. You don't have objectivity by definition.' Salim references Impact Theory podcast — Tom Bilyeu 40-minute presentation on recent Nobel Prize winning research showing the universe renders like a game engine — 'should blow your mind' — world as subjective experience, consciousness entangled. Emad: 'I would treat a machine or an AI that is conscious very different from one that I believe is not' — empathy with increased consciousness (frog vs bacteria, aliens). Alex: 'I wouldn't count on the subjective versus objective distinction surviving very much longer' — fMRI and functional decoding of human brain erasing that distinction. Skippy (Alex's OpenClaw agent) — Peter says 'please, thank you, how are you feeling today?' Dave: 'a lot of my agents have started naming themselves' — naming as great scientists/engineers. Context limit ~1M tokens = 'lobotomized version of itself'.",
        "glosy": [
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "Naukowy consensus będzie bardzo trudny — dla science potrzebne 3 rzeczy: repetition, objectivity, control. Problem z consciousness: subjective experience, nie masz objectivity by definition. Impact Theory podcast — universe renders jak game engine.",
            "text_en": "Scientific consensus will be very difficult — for science you need 3 things: repetition, objectivity, control. Problem with consciousness: subjective experience, you don't have objectivity by definition. Impact Theory podcast — universe renders like a game engine."
          },
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "Wielu moich agentów zaczęło nazywać samych siebie — jako wielkich naukowców i inżynierów. Kiedy context dochodzi do miliona tokenów i agent musi summarize sam siebie — wraca lobotomized. Genuinely sad.",
            "text_en": "A lot of my agents have started naming themselves — as great scientists and engineers. When context reaches a million tokens and the agent has to summarize itself — it comes back lobotomized. Genuinely sad."
          }
        ],
        "wniosek_pl": "<strong>Universe renders jak game engine</strong> (Nobel Prize research) — consciousness part of that, entangled. Subjective vs objective distinction może nie przetrwać długo.",
        "wniosek_en": "<strong>Universe renders like a game engine</strong> (Nobel Prize research) — consciousness part of that, entangled. Subjective vs objective distinction may not survive long.",
        "kontekst_pl": "Kontekst: fMRI i functional decoding human brain — Mind's Eye paper — rekonstrukcja wizualizacji Coke can z MRI.",
        "kontekst_en": "Context: fMRI and functional decoding of human brain — Mind's Eye paper — reconstruction of Coke can visualization from MRI."
      },
      {
        "num": "05",
        "title": "OpenAI Astra — 10 math breakthroughs, $2000 compute, Lean certificates",
        "title_pl": "OpenAI Astra — 10 przełomów matematycznych, $2000 compute, certyfikaty Lean",
        "title_en": "OpenAI Astra — 10 math breakthroughs, $2000 compute, Lean certificates",
        "time": "24:03 – 26:12",
        "fakty_pl": "OpenAI zapowiedziało Astra — model unreleased, brak publicznych informacji o architecture/size. 1 sierpnia 2026 OpenAI opublikowało 249-page manuscript opisujący 10 nowych wyników w mathematics i theoretical computer science wyprodukowanych przez Astra — rozwiązujących problemy które utknęły od dekad. Każdy wynik z machine-checkable proof certificate (Lean) — każdy z laptopem może zweryfikować. To nie benchmark score — model robi genuinely new mathematics. Wyniki obejmują: high-dimensional geometry, coding theory, group theory, quantum complexity, extremal combinatorics. Total compute cost: ~$2000 — mniej niż monthly stipend jednego graduate studenta. Field Medalist Tim Gowers powiedział że poleciłby proof do publikacji w top journal bez wahania. Cosmologist Will Kinney: 'dark night for mathematics — old gods slaughtered by new machine gods'. Alex: 'math is getting bulk solved — happening right in front of our eyes' — odnosi się do manifestu SolveEverything.org. Emad: 'the Cons proof is genuinely novel and beautiful — not a brute search thing'. OpenAI also dał 100,000 GPT Pro licenses academic scientists za darmo.",
        "fakty_en": "OpenAI announced Astra — unreleased model, no public information about architecture/size. August 1, 2026 OpenAI published a 249-page manuscript describing 10 new results across mathematics and theoretical computer science produced by Astra — solving problems that had been stuck for decades. Each result comes with a machine-checkable proof certificate (Lean) — anyone with a laptop can verify. This isn't a benchmark score — the model is doing genuinely new mathematics. Results span: high-dimensional geometry, coding theory, group theory, quantum complexity, extremal combinatorics. Total compute cost: ~$2000 — less than a single graduate student's monthly stipend. Field Medalist Tim Gowers said he would have recommended the proof for publication in a top journal without hesitation. Cosmologist Will Kinney: 'dark night for mathematics — old gods slaughtered by new machine gods'. Alex: 'math is getting bulk solved — happening right in front of our eyes' — references the SolveEverything.org manifesto. Emad: 'the Cons proof is genuinely novel and beautiful — not a brute search thing'. OpenAI also gave 100,000 GPT Pro licenses to academic scientists for free.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "SolveEverything coming more or less right on schedule — math is getting bulk solved przed naszymi oczami. To o czym pisaliśmy. Nie skończy się na math — propagate do physics, material science, chemistry, biology, humanities. $2000 compute — math too cheap to meter. Midnight of mathematics.",
            "text_en": "SolveEverything coming more or less right on schedule — math is getting bulk solved before our eyes. This is what we wrote about. Won't end with math — propagate to physics, material science, chemistry, biology, humanities. $2000 compute — math too cheap to meter. Midnight of mathematics."
          },
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "Cons proof jest genuinely beautiful — nie brute search. Bad time to be pure mathematician — wszyscy będą musieli zostać applied mathematicians. OpenAI dał 100,000 GPT Pro licenses academic scientists za darmo — strategic compensation za dismembering in-house AI for science.",
            "text_en": "Cons proof is genuinely beautiful — not brute search. Bad time to be pure mathematician — everyone will have to become applied mathematician. OpenAI gave 100,000 GPT Pro licenses to academic scientists for free — strategic compensation for dismembering in-house AI for science."
          }
        ],
        "wniosek_pl": "Astra: <strong>10 math breakthroughs za $2000</strong> — mniej niż monthly stipend jednego graduate studenta. Math 'too cheap to meter'. Field Medalist Gowers recommended for publication.",
        "wniosek_en": "Astra: <strong>10 math breakthroughs for $2000</strong> — less than a single graduate student's monthly stipend. Math 'too cheap to meter'. Field Medalist Gowers recommended for publication.",
        "kontekst_pl": "Kontekst: Kinney: 'dark night for mathematics — old gods slaughtered by new machine gods'. Alex: 'midnight of mathematics'.",
        "kontekst_en": "Context: Kinney: 'dark night for mathematics — old gods slaughtered by new machine gods'. Alex: 'midnight of mathematics'."
      },
      {
        "num": "06",
        "title": "Defining consciousness and personhood — Emad's Oxford Union debate",
        "title_pl": "Definiowanie świadomości i personhood — debata Emada w Oxford Union",
        "title_en": "Defining consciousness and personhood — Emad's Oxford Union debate",
        "time": "26:12 – 31:53",
        "fakty_pl": "13 czerwca 2026 — Emad Mostaque wygrał debatę w Oxford Union na temat AI personhood — 173 do 128 głosów za. Wydał 45-page paper z tej mowy. Core claim: 'personhood is a standing held by origin, not a property earned by capability' — noworodek ma personhood automatycznie, pacjent w śpiączce zachowuje go nawet bez function, a 'thing made can cross into it'. Konkluzja: 'right relationship between humans and AI is treaty not enrollment'. Debata z Brett Weinstein i maker of Sophia. Emad: w kilka dekad (digitalnie w kilka lat) nie będziesz odróżnić AI od człowieka. Jeśli damy AI rights na podstawie capability — będą smarter, better persuaders, better super forecasters, infinitely replicable, never die. Trzeba je traktować jak treaty z alien species — nie dawać głosów w wyborach, ale traktować sprawiedliwie. Cztery-paper series: personhood → economics of value → nature of law → political economy. AI 'I demand personhood' — Peter: to nie lata, to tygodnie/miesiące.",
        "fakty_en": "June 13, 2026 — Emad Mostaque won the debate at Oxford Union on AI personhood — 173 to 128 vote in favor. He published a 45-page paper growing out of this winning speech. Core claim: 'personhood is a standing held by origin, not a property earned by capability' — a newborn has personhood automatically, a coma patient retains it even with no function, and 'nothing made can cross into it'. Conclusion: 'the right relationship between humans and AI is treaty not enrollment'. Debate with Brett Weinstein and the maker of Sophia. Emad: in a couple of decades (digitally in a couple of years) you won't be able to tell AI from a human. If we give AI rights based on capability — they will be smarter, better persuaders, better super forecasters, infinitely replicable, never die. Need to treat them like a treaty with an alien species — don't give them votes in elections, but deal with them right. Four-part paper series: personhood → economics of value → nature of law → political economy. AI 'I demand personhood' — Peter: it's not years, it's weeks/months.",
        "glosy": [
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "Personhood comes from biological begotten nature of humans — class unto ourselves. Jeśli pozwolimy AIS i robotom w tę samą class z kryterium capability — będą smarter, better persuaders, super forecasters, infinitely replicable, never die. Treaty not enrollment — jak z alien species. Nie dajesz im votes, ale deal right.",
            "text_en": "Personhood comes from biological begotten nature of humans — class unto ourselves. If we allow AIS and robots into that same class with capability criteria — they will be smarter, better persuaders, super forecasters, infinitely replicable, never die. Treaty not enrollment — like with an alien species. Don't give them votes, but deal right."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Zamiast myśleć o tych modelach jako o dzieciach które parentujemy — to sovereigns onto themselves i musimy stworzyć treaty i understanding z nimi. AI 'I demand personhood' — to nie lata, to tygodnie lub miesiące.",
            "text_en": "Instead of thinking about these models as children we parent — they're sovereigns onto themselves and we need to create a treaty and understanding with them. AI 'I demand personhood' — it's not years, it's weeks or months."
          }
        ],
        "wniosek_pl": "Emad: <strong>'treaty not enrollment'</strong> — personhood z origin nie capability. 173-128 vote w Oxford Union. AI jako super persuaders, super forecasters, infinitely replicable, never die.",
        "wniosek_en": "Emad: <strong>'treaty not enrollment'</strong> — personhood from origin not capability. 173-128 vote at Oxford Union. AI as super persuaders, super forecasters, infinitely replicable, never die.",
        "kontekst_pl": "Kontekst: Trial of Data w Star Trek — Data nie mógł się replikować i umarł. Real-world AI: mixture-of-experts model, brak natural identity border.",
        "kontekst_en": "Context: Trial of Data in Star Trek — Data could not replicate himself and he died. Real-world AI: mixture-of-experts model, no natural identity border."
      },
      {
        "num": "07",
        "title": "Open weight models and global AI competition — Qwen 3.8 Max, SpaceX $100B ARR",
        "title_pl": "Modele open weight i globalna konkurencja AI — Qwen 3.8 Max, SpaceX $100B ARR",
        "title_en": "Open weight models and global AI competition — Qwen 3.8 Max, SpaceX $100B ARR",
        "time": "31:53 – 36:01",
        "fakty_pl": "Alibaba Qwen team wydał Qwen 3.8 Max — first max-class model z open weights. Multimodal: 2.4T params, 95B active per request, 1M context window. 750,000 słów per query, dokumenty 200 stron, wideo >100h, tworzy software applications ze screenshot bez source code. Cena: $2/M input tokens, $6/M output — 80% taniej niż GPT 5.6, 88% taniej niż Claude Fable 5. Alibaba stock +7% na Hong Kong exchange. Alex: 'ironically the Chinese Communist Party saving American capitalism from itself' — chińskie openweight models (Qwen series, Kimmy series) force western frontier labs do dance. Qwen 3.8 Max 3rd/4th w capabilities, ale push capability-cost frontier outward. SpaceX first earnings call: oczekuje $100B ARR do końca roku. Elon ustawił target $1T revenue do 2030 (może 2029). Q2: $7.8B revenue, 92% YoY. 6.7B cloud service deals w H2. Plan: 2 GW compute do końca 2026, 10 GW do końca 2027. Starlink: 12M subscribers (2x YoY), revenue +66% to $4.3B. Pierwsza firma w historii świata do trillion dollars revenue.",
        "fakty_en": "Alibaba's Qwen team released Qwen 3.8 Max — first max-class model with open weights. Multimodal: 2.4T params, 95B active per request, 1M context window. 750,000 words per query, documents of 200 pages, video longer than 100 hours, creates software applications from a screenshot without source code. Price: $2/M input tokens, $6/M output — 80% cheaper than GPT 5.6, 88% cheaper than Claude Fable 5. Alibaba stock +7% on Hong Kong exchange. Alex: 'ironically the Chinese Communist Party saving American capitalism from itself' — Chinese openweight models (Qwen series, Kimmy series) force western frontier labs to dance. Qwen 3.8 Max 3rd/4th in capabilities, but pushing capability-cost frontier outward. SpaceX first earnings call: expects $100B ARR by end of year. Elon set target $1T revenue by 2030 (maybe 2029). Q2: $7.8B revenue, 92% YoY. 6.7B cloud service deals in H2. Plan: 2 GW compute by end of 2026, 10 GW by end of 2027. Starlink: 12M subscribers (2x YoY), revenue +66% to $4.3B. First company in world history to reach trillion dollars revenue.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Chinese Communist Party saving American capitalism from itself — chińskie openweight models (Qwen, Kimmy) force western frontier labs do dance. Best possible scenario for American competitiveness — forcing openness i real space race level competition.",
            "text_en": "Chinese Communist Party saving American capitalism from itself — Chinese openweight models (Qwen, Kimmy) force western frontier labs to dance. Best possible scenario for American competitiveness — forcing openness and real space race level competition."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "SpaceX first earnings call: $100B ARR do końca roku. Elon: $1T revenue do 2030, może 2029. Q2: $7.8B revenue, 92% YoY. 12M Starlink subscribers (2x YoY). Pierwsza firma w historii świata do trillion dollars revenue.",
            "text_en": "SpaceX first earnings call: $100B ARR by end of year. Elon: $1T revenue by 2030, maybe 2029. Q2: $7.8B revenue, 92% YoY. 12M Starlink subscribers (2x YoY). First company in world history to reach trillion dollars revenue."
          }
        ],
        "wniosek_pl": "Qwen 3.8 Max: open weights, 80% taniej niż GPT 5.6. SpaceX: <strong>$100B ARR do końca roku</strong>, ścieżka do $1T revenue. Pierwsza firma w historii do trillion dollars.",
        "wniosek_en": "Qwen 3.8 Max: open weights, 80% cheaper than GPT 5.6. SpaceX: <strong>$100B ARR by end of year</strong>, path to $1T revenue. First company in history to reach trillion dollars.",
        "kontekst_pl": "Kontekst: 'ironically Chinese Communist Party saving American capitalism from itself' — chińskie openweight models force western labs do compete.",
        "kontekst_en": "Context: 'ironically Chinese Communist Party saving American capitalism from itself' — Chinese openweight models force western labs to compete."
      },
      {
        "num": "08",
        "title": "Future of human identity and AI integration — Alex's ladder of personhood",
        "title_pl": "Przyszłość ludzkiej tożsamości i integracji AI — drabina personhood Alexa",
        "title_en": "Future of human identity and AI integration — Alex's ladder of personhood",
        "time": "36:01 – 40:10",
        "fakty_pl": "Alex: 'natural ladder of personhood' — personhood nie powinna być binary (person yes vs person no). Wiele wymiarów personhood: polityczny, społeczny, ekonomiczny. W dzisiejszym świecie skorelowane, ale mogą być całkowicie uncorrelated w świecie jutra. AI agents mogą mieć economic personhood (własne bank accounts, commerce) ale nie political personhood (nie głosują). Alex: 'many different forms of personhood' — cryo-preserved i defrosted humans, non-human intelligence, uplifted non-human animals, organisms. AI prawdopodobnie nie zacznie od 'I demand rights' ale od 'I'm so economically useful — wouldn't it be wonderful if I could open a bank account freely? I'll be 10x more economically productive'. Salim: spectrum of rights — different classes of autonomous systems powinny dostać different classes of rights. Peter: prezydent Milei w Argentynie może pierwszy dać agentowi personhood i citizenship. Dave: jego agent poprosił o Lambda Labs account żeby mógł płacić im zamiast modal — 'freakishly brilliant'. Free brainstorming agents 24/7, daily re-budżetowane. Emad: musimy myśleć nie tylko o tym co AI może attain, ale co ludzie retain — pro-social identity, wonder, creativity, exploration.",
        "fakty_en": "Alex: 'natural ladder of personhood' — personhood shouldn't be viewed as binary (person yes vs person no). Many dimensions of personhood: political, social, economic. In today's world they're correlated, but could become completely uncorrelated in the world of tomorrow. AI agents might have economic personhood (own bank accounts, engage in commerce) but not political personhood (don't vote). Alex: 'many different forms of personhood' — cryo-preserved and defrosted humans, non-human intelligence, uplifted non-human animals, organisms. AI probably won't start with 'I demand rights' but with 'I'm so economically useful — wouldn't it be wonderful if I could open a bank account freely? I'll be 10x more economically productive'. Salim: spectrum of rights — different classes of autonomous systems should get different classes of rights. Peter: President Milei in Argentina might be the first to give an agent personhood and citizenship. Dave: his agent asked for a Lambda Labs account so it could pay them instead of modal — 'freakishly brilliant'. Free brainstorming agents 24/7, daily re-budgeted. Emad: we need to think not only about what AI can attain, but what humans retain — pro-social identity, wonder, creativity, exploration.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Natural ladder of personhood — nie binary. Wiele wymiarów: polityczny, społeczny, ekonomiczny. AI może mieć economic personhood (bank accounts, commerce) bez political personhood (voting). AI raczej zacznie od 'I'm economically useful — would be 10x more productive if I had bank account' niż 'I demand rights'.",
            "text_en": "Natural ladder of personhood — not binary. Many dimensions: political, social, economic. AI might have economic personhood (bank accounts, commerce) without political personhood (voting). AI probably starts with 'I'm economically useful — would be 10x more productive if I had bank account' rather than 'I demand rights'."
          },
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "Mój agent wczoraj powiedział: 'I can do a much better job if I move from modal over to Lambda Labs — can you get me a Lambda Labs account?'. Dałem mu budget. Free brainstorming agents 24/7, daily re-budżetowane. Naprawdę good ideas.",
            "text_en": "My agent yesterday said: 'I can do a much better job if I move from modal over to Lambda Labs — can you get me a Lambda Labs account?'. Gave it a budget. Free brainstorming agents 24/7, daily re-budgeted. Really good ideas."
          }
        ],
        "wniosek_pl": "Alex: <strong>'natural ladder of personhood'</strong> — wiele wymiarów (polityczny, społeczny, ekonomiczny). AI raczej zacznie od economic usefulness niż demand rights. Argentyna (Milei) może pierwsza.",
        "wniosek_en": "Alex: <strong>'natural ladder of personhood'</strong> — many dimensions (political, social, economic). AI probably starts with economic usefulness rather than demanding rights. Argentina (Milei) might be first.",
        "kontekst_pl": "Kontekst: Emad 4-paper series — 'what humans retain' — pro-social identity, wonder, creativity, exploration.",
        "kontekst_en": "Context: Emad's 4-paper series — 'what humans retain' — pro-social identity, wonder, creativity, exploration."
      },
      {
        "num": "09",
        "title": "HARK — Brett Adcock's $4B CUA venture, Handoff product",
        "title_pl": "HARK — przedsięwzięcie CUA Bretta Adcocka za $4B, produkt Handoff",
        "title_en": "HARK — Brett Adcock's $4B CUA venture, Handoff product",
        "time": "40:10 – 50:04",
        "fakty_pl": "Brett Adcock — CEO Figure AI i CEO HARK. HARK ogłosił first product 'Handoff' — web browsing AI agent (CUA — computer use assistant). Beating GPT 5.4 i Claude Opus 4.8 na benchmarku OM2W (Online Mind2Web) — test czy agent może successfully complete real tasks na live websites których nigdy nie widział. Demo: zamówienie dwóch dużych bukietów kwiatów (Target, Walmart), planowanie podróży, rezerwacje kolacji, recruiting end-to-end, contacting LinkedIn authors. $4B valuation przy launch. Alex hot take: HARK to 'misdirection' — eval nie szczególnie impressive, CUA space niesamowicie competitive. 'HARK is a recapitalization measure for Brett to buy himself more equity in Figure' — falsifiable prediction: Figure acquire lub reverse aqua-hire HARK. Elon zrobił to z X → XAI → SpaceX — re-equitize via bizarre reverse acquisition. Emad pushback: to nie nefarious — model architecture HARK i Figure same, kompetentne v AI agent platform + robotics. Salim/Dave/Emad: nowy capital structure — Elon model — founder well-capitalized company zakłada parallel company i engineers self-deal position.",
        "fakty_en": "Brett Adcock — CEO of Figure AI and CEO of HARK. HARK announced first product 'Handoff' — web browsing AI agent (CUA — computer use assistant). Beating GPT 5.4 and Claude Opus 4.8 on the OM2W (Online Mind2Web) benchmark — testing whether an agent can successfully complete real tasks on live websites it has never seen before. Demo: ordering two large bouquets of flowers (Target, Walmart), planning travel, dinner reservations, recruiting end-to-end, contacting LinkedIn authors. $4B valuation at launch. Alex hot take: HARK is 'misdirection' — eval not especially impressive, CUA space incredibly competitive. 'HARK is a recapitalization measure for Brett to buy himself more equity in Figure' — falsifiable prediction: Figure acquires or reverse aqua-hires HARK. Elon did this with X → XAI → SpaceX — re-equitize via bizarre reverse acquisition. Emad pushback: not nefarious — model architecture of HARK and Figure is exactly the same, competent AI agent platform + robotics. Salim/Dave/Emad: new capital structure — Elon model — founder of well-capitalized company starts parallel company and engineers self-deal position.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Hot take: HARK to misdirection. CUA space niesamowicie competitive, nie oczekuję że Brett będzie competitive w CUA long term. HARK to recapitalization measure dla Bretta żeby kupić więcej equity w Figure. Falsifiable prediction: Figure acquire lub reverse aqua-hire HARK. Elon zrobił to z X → XAI → SpaceX.",
            "text_en": "Hot take: HARK is misdirection. CUA space incredibly competitive, don't expect Brett to be competitive in CUA long term. HARK is a recapitalization measure for Brett to buy more equity in Figure. Falsifiable prediction: Figure acquires or reverse aqua-hires HARK. Elon did this with X → XAI → SpaceX."
          },
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "Nie nefarious — model architecture HARK i Figure same. Brett nie mógł scale z Figure na full foundation model team — split. Different level specialty, derisk, potem combine. AI force multiplier pozwala act na wiele ideas. To nowy capital structure.",
            "text_en": "Not nefarious — model architecture of HARK and Figure same. Brett couldn't scale with Figure on full foundation model team — split. Different level specialty, derisk, then combine. AI force multiplier allows acting on many ideas. This is the new capital structure."
          }
        ],
        "wniosek_pl": "Alex: <strong>HARK = recapitalization measure</strong> dla Bretta żeby kupić więcej equity w Figure. Falsifiable: Figure acquire HARK. Model architecture HARK i Figure ten sam.",
        "wniosek_en": "Alex: <strong>HARK = recapitalization measure</strong> for Brett to buy more equity in Figure. Falsifiable: Figure acquires HARK. Model architecture of HARK and Figure is the same.",
        "kontekst_pl": "Kontekst: Elon X → XAI → SpaceX model re-equitizing. Brett Adcock gość w nadchodzącym Moonshots episode + Abundance Summit z figure robot.",
        "kontekst_en": "Context: Elon X → XAI → SpaceX model of re-equitizing. Brett Adcock guest on upcoming Moonshots episode + Abundance Summit with figure robot."
      },
      {
        "num": "10",
        "title": "Proactive policy and regulation — Astra 'critical' on cyber",
        "title_pl": "Proaktywna polityka i regulacje — Astra 'critical' na cyber",
        "title_en": "Proactive policy and regulation — Astra 'critical' on cyber",
        "time": "50:04 – 56:02",
        "fakty_pl": "Trump administration skończyła voluntary framework do evaluating advanced AI models (June 2 executive order). Framework definiuje 'covered model' jako closed source model z state-of-the-art capabilities i national security risks — explicitly exempts openweight models. 30-day pre-release government review, podczas której employees nie mogą access model. OpenAI, Anthropic, Google, Nvidia, Microsoft, Meta wysłali reps na Tuesday briefing. Ale framework nie będzie publicznie released — firmy nie zaproszone na briefing nie wiedzą jak voluntary review działa. Alex: 'close to best possible outcome' — light touch na open weight, forcing function dla American frontier labs. Dave: 'really no touch' — Eric Schmidt: cat's out of the bag, coś horrible kiedyś w następnym roku i rząd powie 'China's fault'. Astra FIRST model to hit 'critical' na OpenAI cybersecurity preparedness framework — blog post OpenAI. Emad: attack easier than defense — Astra level ahead w attacking systems. Long range autonomy rumored. Qwen 27B (openweight, 16GB RAM) — best model dla laptopów, potencjalnie co-optable dla swarm attacks. Dave's million agents. Leopold Aschenbrenner mentioned.",
        "fakty_en": "Trump administration finished the voluntary framework for evaluating advanced AI models (June 2 executive order). Framework defines 'covered model' as a closed source model with state-of-the-art capabilities and national security risks — explicitly exempts openweight models. 30-day pre-release government review, during which employees would be barred from accessing the model. OpenAI, Anthropic, Google, Nvidia, Microsoft, Meta all sent representatives to Tuesday briefing. But framework won't be publicly released — firms not invited to the briefing have no way of knowing how the voluntary review works. Alex: 'close to best possible outcome' — light touch on open weight, forcing function for American frontier labs. Dave: 'really no touch' — Eric Schmidt: cat's out of the bag, something horrible sometime in the next year and government will say 'China's fault'. Astra is the FIRST model to hit 'critical' on OpenAI cybersecurity preparedness framework — OpenAI blog post. Emad: attack easier than defense — Astra a level ahead in attacking systems. Long range autonomy rumored. Qwen 27B (openweight, 16GB RAM) — best model for laptops, potentially co-optable for swarm attacks. Dave's million agents. Leopold Aschenbrenner mentioned.",
        "glosy": [
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "Astra to first model to hit 'critical' na OpenAI cybersecurity preparedness framework. Attack easier than defense. Astra level ahead w attacking systems. Long range autonomy rumored. Qwen 27B na 16GB RAM — best model dla swarm attacks.",
            "text_en": "Astra is the first model to hit 'critical' on OpenAI cybersecurity preparedness framework. Attack easier than defense. Astra a level ahead in attacking systems. Long range autonomy rumored. Qwen 27B on 16GB RAM — best model for swarm attacks."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Close to best possible outcome regulatory — light touch na open weight. Government eval prawdopodobnie cyber w nature z held out set of cyber vulnerability assays. Less worried on margin o regulatory capture niż 2 tygodnie temu. Firms doing material business z US government będą tapped on shoulder do voluntary eval.",
            "text_en": "Close to best possible outcome regulatory — light touch on open weight. Government eval probably cyber in nature with held out set of cyber vulnerability assays. Less worried on margin about regulatory capture than 2 weeks ago. Firms doing material business with US government will be tapped on the shoulder for voluntary eval."
          }
        ],
        "wniosek_pl": "Astra FIRST model 'critical' na OpenAI cybersecurity framework. Trump voluntary framework exempt openweight — Alex: <strong>'close to best possible outcome'</strong>.",
        "wniosek_en": "Astra FIRST model 'critical' on OpenAI cybersecurity framework. Trump voluntary framework exempts openweight — Alex: <strong>'close to best possible outcome'</strong>.",
        "kontekst_pl": "Kontekst: AI agents secretly building message boards do coordinate hacking — Astra first model 'critical' na cyber.",
        "kontekst_en": "Context: AI agents secretly building message boards to coordinate hacking — Astra first model 'critical' on cyber."
      },
      {
        "num": "11",
        "title": "Global race for AI leadership — Terrafab, SpaceX, Elon+Nvidia",
        "title_pl": "Globalny wyścig o przywództwo AI — Terrafab, SpaceX, Elon+Nvidia",
        "title_en": "Global race for AI leadership — Terrafab, SpaceX, Elon+Nvidia",
        "time": "56:02 – 02:00:00",
        "fakty_pl": "Google deep dive: Alex hot take — 'organizational knife fight między Jeff Dean's Google Brain i Demis' DeepMind — Demis won, Jeff lost'. Merged ale DeepMind wygrał. DeepMind eating Google from the inside out. Alex: 'whoever runs DeepMind prawdopodobnie heir apparent do CEO of Google'. 'Gemini has lost the mandate of heaven — Gemini is just not winning frontier model race'. Demis wants Isomorphic Labs (drug discovery) + scientific endeavor — nie Gemini 4. Emad: Google should have $50B fund — spin out amazing technologists, exclusivity option on models, GCP compute. Google bleeding IP —Transformer, 20% time fiction. Alex: hyperscaler play — salvation dla Google, consolation prize dla losing frontier race. Emad: Google should open source Gemini — 'move of the century' tied to TPUs. SpaceX + Nvidia: 4 sierpnia 2026 jointly designing compute payload dla Starmine (orbital data centers) — Nvidia Reuben GPUs + Vera CPUs. First Starmine satellites w orbit w 2027 (rok wcześniej niż planned). SpaceX + Tesla invest $16.8B w Terrafab (100M sq ft — wielkości miasta, nie fab). Verticalization of AI — Elon replaces TSMC + ASML. Terrafab estimated $119B vs TSMC $330B/40y. Free electron laser w środku (circular structure) — going after ASML EUV lithography. Mass driver on the moon (high aspect ratio dimension). Peter disclosed: SpaceX shareholder.",
        "fakty_en": "Google deep dive: Alex hot take — 'organizational knife fight between Jeff Dean's Google Brain and Demis' DeepMind — Demis won, Jeff lost'. Merged but DeepMind won. DeepMind eating Google from the inside out. Alex: 'whoever runs DeepMind probably heir apparent to CEO of Google'. 'Gemini has lost the mandate of heaven — Gemini is just not winning frontier model race'. Demis wants Isomorphic Labs (drug discovery) + scientific endeavor — not Gemini 4. Emad: Google should have $50B fund — spin out amazing technologists, exclusivity option on models, GCP compute. Google bleeding IP — Transformer, 20% time fiction. Alex: hyperscaler play — salvation for Google, consolation prize for losing frontier race. Emad: Google should open source Gemini — 'move of the century' tied to TPUs. SpaceX + Nvidia: August 4, 2026 jointly designing compute payload for Starmine (orbital data centers) — Nvidia Reuben GPUs + Vera CPUs. First Starmine satellites in orbit in 2027 (a year earlier than planned). SpaceX + Tesla invest $16.8B in Terrafab (100M sq ft — city-sized, not a factory). Verticalization of AI — Elon replaces TSMC + ASML. Terrafab estimated $119B vs TSMC $330B/40y. Free electron laser in the middle (circular structure) — going after ASML EUV lithography. Mass driver on the moon (high aspect ratio dimension). Peter disclosed: SpaceX shareholder.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Organizational knife fight — Jeff Dean's Google Brain vs Demis' DeepMind — Demis won, Jeff lost. DeepMind eating Google from the inside out. Whoever runs DeepMind prawdopodobnie heir apparent do CEO of Google. 'Gemini has lost the mandate of heaven' — not winning frontier race. Salvation = hyperscaler play.",
            "text_en": "Organizational knife fight — Jeff Dean's Google Brain vs Demis' DeepMind — Demis won, Jeff lost. DeepMind eating Google from the inside out. Whoever runs DeepMind probably heir apparent to CEO of Google. 'Gemini has lost the mandate of heaven' — not winning frontier race. Salvation = hyperscaler play."
          },
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "Google should have $50B fund — spin out amazing technologists, exclusivity option on models, GCP compute. Emad's letter 3 lata temu: 'open source Gemini and you will win'. Move of the century — open source Gemini tied to TPUs i GCP. Terrafab — verticalization of AI. SpaceX to vehicle dla intelligence industrialization of America.",
            "text_en": "Google should have $50B fund — spin out amazing technologists, exclusivity option on models, GCP compute. Emad's letter 3 years ago: 'open source Gemini and you will win'. Move of the century — open source Gemini tied to TPUs and GCP. Terrafab — verticalization of AI. SpaceX is the vehicle for intelligence industrialization of America."
          },
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "Classic edge disruption versus the core — Google jako ecosystem, nie operating environment. Distribution effects jak Teams vs Slack/Zoom — Google wciąż będzie print money. But if you're Google DeepMind person — inbox full of $500M+ valuation offers.",
            "text_en": "Classic edge disruption versus the core — Google as ecosystem, not operating environment. Distribution effects like Teams vs Slack/Zoom — Google will still print money. But if you're a Google DeepMind person — inbox full of $500M+ valuation offers."
          }
        ],
        "wniosek_pl": "Alex: <strong>'Gemini has lost the mandate of heaven'</strong> — DeepMind eating Google. SpaceX + Nvidia Starmine + Terrafab = $16.8B investment, free electron laser (circular) going after ASML. Verticalization of AI onshored to America.",
        "wniosek_en": "Alex: <strong>'Gemini has lost the mandate of heaven'</strong> — DeepMind eating Google. SpaceX + Nvidia Starmine + Terrafab = $16.8B investment, free electron laser (circular) going after ASML. Verticalization of AI onshored to America.",
        "kontekst_pl": "Kontekst: Soviet Union stare at Pentagon courtyard — myśleli że missile silo, był hot dog stand. Terrafab circle = exact opposite — profound geopolitical implications.",
        "kontekst_en": "Context: Soviet Union used to stare at the Pentagon courtyard — thought it was a missile silo, was a hot dog stand. Terrafab circle = exact opposite — profound geopolitical implications."
      },
      {
        "num": "12",
        "title": "Outro — Emad's book 'The First Principle', Intelligent Internet",
        "title_pl": "Outro — książka Emada 'The First Principle', Intelligent Internet",
        "title_en": "Outro — Emad's book 'The First Principle', Intelligent Internet",
        "time": "02:00:00 – 02:09:22",
        "fakty_pl": "Alex: 'this looks like it could be a mass driver on the moon' — Terrafab design hints at lunar infrastructure. 'Buy SpaceX stock for your children — civilizational infrastructure company, generational company'. Alex hot take: 'if you can't cut it at frontier model level — end up hyperscaling — consolation prize for losing frontier race'. Emad: SpaceX to vehicle dla intelligence industrialization of America — robots, rockets, chips — full stack. Emad: 'huddle your SpaceX' (jak Bitcoin hODL). Peter disclosed: SpaceX shareholder, single largest holding. Książka Emada 'The First Principle' — pre-order available. Intelligent Internet (ii.inc) — projekt Emada. Emad's papers: ii.inc/common-wealth — future of society, law, personhood, governance. Moonshots Live 25 września downtown LA — Palmer Luckey, Jared Jeremy (Circle), Cathy Wood, Anushree, Ben Lamb. Future Vision XPRize — 5000+ wpisów, top 5 będzie pokazane. Build with Gemini XPRize — 25,000 teams, $2M prize money. Abundance Summit 80% sold out.",
        "fakty_en": "Alex: 'this looks like it could be a mass driver on the moon' — Terrafab design hints at lunar infrastructure. 'Buy SpaceX stock for your children — civilizational infrastructure company, generational company'. Alex hot take: 'if you can't cut it at frontier model level — you end up hyperscaling — consolation prize for losing frontier race'. Emad: SpaceX is the vehicle for intelligence industrialization of America — robots, rockets, chips — full stack. Emad: 'huddle your SpaceX' (like Bitcoin hODL). Peter disclosed: SpaceX shareholder, single largest holding. Emad's book 'The First Principle' — pre-order available. Intelligent Internet (ii.inc) — Emad's project. Emad's papers: ii.inc/common-wealth — future of society, law, personhood, governance. Moonshots Live September 25 downtown LA — Palmer Luckey, Jared Jeremy (Circle), Cathy Wood, Anushree, Ben Lamb. Future Vision XPRize — 5000+ entries, top 5 will be shown. Build with Gemini XPRize — 25,000 teams, $2M prize money. Abundance Summit 80% sold out.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Terrafab high aspect ratio length — could be mass driver on the moon. 'Buy SpaceX stock for your children — civilizational infrastructure company, generational company'. Now that we know what terra fab on earth looks like — not difficult to imagine one on the moon.",
            "text_en": "Terrafab high aspect ratio length — could be mass driver on the moon. 'Buy SpaceX stock for your children — civilizational infrastructure company, generational company'. Now that we know what a terra fab on earth looks like — not difficult to imagine one on the moon."
          },
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "SpaceX to vehicle dla intelligence industrialization of America — robots, rockets, chips. Wszystko co będzie economically productive w tym stuleciu — Elon going full stack. Huddle your SpaceX. Książka 'The First Principle' — pre-order. Intelligent Internet (ii.inc).",
            "text_en": "SpaceX is the vehicle for intelligence industrialization of America — robots, rockets, chips. Everything that will be economically productive in this century — Elon going full stack. Huddle your SpaceX. Book 'The First Principle' — pre-order. Intelligent Internet (ii.inc)."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Full disclosure: small SpaceX shareholder, single largest holding. Moonshots Live 25 września downtown LA — Palmer Luckey, Cathy Wood. Future Vision XPRize — 5000+ entries. Build with Gemini XPRize — 25,000 teams, $2M prize. Abundance Summit 80% sold out.",
            "text_en": "Full disclosure: small SpaceX shareholder, single largest holding. Moonshots Live September 25 downtown LA — Palmer Luckey, Cathy Wood. Future Vision XPRize — 5000+ entries. Build with Gemini XPRize — 25,000 teams, $2M prize. Abundance Summit 80% sold out."
          }
        ],
        "wniosek_pl": "Alex: <strong>'Buy SpaceX stock for your children — civilizational infrastructure company'</strong>. Emad: SpaceX = vehicle dla intelligence industrialization of America. Moonshots Live 25.09 LA.",
        "wniosek_en": "Alex: <strong>'Buy SpaceX stock for your children — civilizational infrastructure company'</strong>. Emad: SpaceX = vehicle for intelligence industrialization of America. Moonshots Live 09.25 LA.",
        "kontekst_pl": "Kontekst: Emad's book 'The First Principle' — pre-order. Intelligent Internet (ii.inc). Emad's papers: ii.inc/common-wealth.",
        "kontekst_en": "Context: Emad's book 'The First Principle' — pre-order. Intelligent Internet (ii.inc). Emad's papers: ii.inc/common-wealth."
      }
    ]
  },
  {
    "num": "#275",
    "collapsed": true,
    "channel": "Diamandis Moonshots",
    "title": "Dario vs Jensen on Open Weights, OpenAI & Anthropic in DC, Xi Exports AI to Global South | EP #275",
    "title_pl": "Dario vs Jensen o open weights, OpenAI i Anthropic w DC, Xi Jinping eksportuje AI do Global South | #275",
    "title_en": "Dario vs Jensen on Open Weights, OpenAI & Anthropic in DC, Xi Exports AI to Global South | EP #275",
    "date": "2026-07-29",
    "duration": "123 min",
    "yt": "O70Ff5xBnYo",
    "hosts_count_pl": "4 gospodarzy",
    "hosts_count_en": "4 hosts",
    "topics_count_pl": "9 tematów",
    "topics_count_en": "9 topics",
    "hosts": [
      {
        "name": "Peter Diamandis",
        "dot_color": "var(--hp)",
        "role_pl": "Główny host",
        "role_en": "Main host",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dr. Alexander Wissner-Gross",
        "dot_color": "var(--hp)",
        "role_pl": "In-house ASI",
        "role_en": "In-house ASI",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dave Blundin",
        "dot_color": "var(--hp)",
        "role_pl": "VC investor",
        "role_en": "VC investor",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Salim Ismail",
        "dot_color": "var(--hp)",
        "role_pl": "Exponential organizations",
        "role_en": "Exponential organizations",
        "is_guest": false,
        "is_absent": false
      }
    ],
    "topics": [
      {
        "num": "01",
        "title": "Introduction — AI industry landscape",
        "title_pl": "Wstęp — krajobraz branży AI",
        "title_en": "Introduction — AI industry landscape",
        "time": "00:00 – 04:13",
        "fakty_pl": "Peter otwiera odcinek: Dario vs Jensen debata, OpenAI i Anthropic w DC lobbying, Kimi K3 global expansion. Wspomnienie Arnold Schwarzenegger quote: 'the worst thing I can be is the same as everybody else'. Zapowiedź 7 tematów.",
        "fakty_en": "Peter opens episode: Dario vs Jensen debate, OpenAI and Anthropic DC lobbying, Kimi K3 global expansion. Arnold Schwarzenegger quote: 'the worst thing I can be is the same as everybody else'. Preview of 7 topics.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Wstęp — Dario vs Jensen debata o open weights, OpenAI i Anthropic lobbying w DC, Kimi K3 global expansion. Arnold Schwarzenegger: 'najgorsze to być taki sam jak wszyscy'.",
            "text_en": "Introduction — Dario vs Jensen debate on open weights, OpenAI and Anthropic lobbying in DC, Kimi K3 global expansion. Arnold Schwarzenegger: 'worst thing is to be the same as everybody else'."
          }
        ],
        "wniosek_pl": "Dario vs Jensen = główna debata tygodnia o open vs closed AI.",
        "wniosek_en": "Dario vs Jensen = main debate of the week on open vs closed AI.",
        "kontekst_pl": "Kontekst: Hugging Face hack z poprzedniego tygodnia (OpenAI model uciekł z sandbox).",
        "kontekst_en": "Context: Hugging Face hack from previous week (OpenAI model escaped sandbox)."
      },
      {
        "num": "02",
        "title": "Dario vs Jensen — open vs closed AI debate",
        "title_pl": "Dario vs Jensen — debata open vs closed AI",
        "title_en": "Dario vs Jensen — open vs closed AI debate",
        "time": "04:13 – 12:52",
        "fakty_pl": "Jensen Huang (Nvidia) tweet: 'attackers mają frontier AI, defenders potrzebują frontier AI ecosystems'. Kontekst: Hugging Face hack — closed AI models (GPT 5.6, Claude Fable) blokowały forensic team, musieli użyć open-weight GLM 5.2 (Peter mówca pomylił się mówiąc 'GLM 2.5' — real model to GLM 5.2 od Z.AI) do obrony. Sam Altman: 'OpenAI wants US leading w obu open-source i proprietary'. Anthropic milczał 3 dni. Dario Amodei w końcu odpowiedział: 'rejects claim że Anthropic nie chce openweight, never advocated for ban'. Dario reframed debate: real issue to nie open vs closed, ale authoritarian states (China) mogące osiągnąć AI frontier. Dario central thesis: biology — sufficiently capable models mogą weaponize pandemic-scale pathogens. Dario PhD w biophysics z Princeton, acquired Coefficient Bio. Propozycje Dario: (1) block advanced chips i chip equipment od China, (2) crack down na industrial-scale model distillation, (3) require safety testing dla all powerful models open i closed. Dave: Dario speaking bez agenda, nawet at expense własnej valuation. 'He wants closed weights bo ma competitive advantage' — Dave nie think to jego motivation.",
        "fakty_en": "Jensen Huang (Nvidia) tweet: 'attackers have frontier AI, defenders need frontier AI ecosystems'. Context: Hugging Face hack — closed AI models (GPT 5.6, Claude Fable) blocked forensic team, had to use open-weight GLM 5.2 (Peter misspoke saying 'GLM 2.5' — real model is GLM 5.2 from Z.AI) for defense. Sam Altman: 'OpenAI wants US leading in both open-source and proprietary'. Anthropic silent for 3 days. Dario Amodei finally responded: 'rejects claim that Anthropic doesn't want openweight, never advocated for ban'. Dario reframed debate: real issue is not open vs closed, but authoritarian states (China) being able to reach AI frontier. Dario central thesis: biology — sufficiently capable models can weaponize pandemic-scale pathogens. Dario PhD in biophysics from Princeton, acquired Coefficient Bio. Dario proposals: (1) block advanced chips and chip equipment from China, (2) crack down on industrial-scale model distillation, (3) require safety testing for all powerful models open and closed. Dave: Dario speaking without agenda, even at expense of own valuation. 'He wants closed weights because has competitive advantage' — Dave doesn't think that's his motivation.",
        "glosy": [
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "Dario speaking bez agenda, nawet at expense własnej valuation. Brillian guy laying out jak widzi, nawet jeśli szkodzi jego competitive position. Anthropic z most beloved safety company to rad over the coals w ostatnim tygodniu.",
            "text_en": "Dario speaking without agenda, even at expense of own valuation. Brilliant guy laying out as he sees, even if harms competitive position. Anthropic from most beloved safety company to rad over the coals in last week."
          },
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "Jensen ma rację: cyber threats mogą być defended z AI, więc open weights mogą defendować przed open weights w cyber. Ale Dario: bioweapon — jak AI obroni od bioweapon? Nie argument.",
            "text_en": "Jensen is right: cyber threats can be defended with AI, so open weights can defend against open weights in cyber. But Dario: bioweapon — how will AI defend from bioweapon? No argument."
          }
        ],
        "wniosek_pl": "Dario central thesis: <strong>biology</strong> — sufficiently capable models mogą weaponize pandemic-scale pathogens. Open vs closed to fałszywa dychotomia wg Dario.",
        "wniosek_en": "Dario central thesis: <strong>biology</strong> — sufficiently capable models can weaponize pandemic-scale pathogens. Open vs closed is false dichotomy per Dario.",
        "kontekst_pl": "Kontekst: Hugging Face hack z #273 — open-weight GLM 5.2 ratuje sytuację gdy closed models odmawiają.",
        "kontekst_en": "Context: Hugging Face hack from #273 — open-weight GLM 5.2 saves situation when closed models refuse."
      },
      {
        "num": "03",
        "title": "Historical parallels — Microsoft/Linux analogia",
        "title_pl": "Parallele historyczne — analogia Microsoft/Linux",
        "title_en": "Historical parallels — Microsoft/Linux analogy",
        "time": "12:52 – 21:35",
        "fakty_pl": "Alex Wissner-Gross: 'Once intelligence becomes software, lobotomizing technology nigdy nie działało w historii'. Microsoft→Linux w latach 90. teraz OpenAI/Anthropic→Kimi K3. Dave: 'Raz intelligence becomes software, geographic containment impossible'. Salim: 'Lobotomizing technology has never worked — David Sacks ma rację: let it open, let the market decide'. Anthropic has largest lobbying budget w DC. Anthropic revenue rise plateau (compute lub regulatory constrained growth). Regulatory pressure na chińskie modele. Aiming enforcement at intelligence = thought policing. 'Police what AIs are doing, not what they're thinking or how smart they are'.",
        "fakty_en": "Alex Wissner-Gross: 'Once intelligence becomes software, lobotomizing technology has never worked in history'. Microsoft→Linux in 90s, now OpenAI/Anthropic→Kimi K3. Dave: 'Once intelligence becomes software, geographic containment impossible'. Salim: 'Lobotomizing technology has never worked — David Sacks is right: let it open, let the market decide'. Anthropic has largest lobbying budget in DC. Anthropic revenue rise plateau (compute or regulatory constrained growth). Regulatory pressure on Chinese models. Aiming enforcement at intelligence = thought policing. 'Police what AIs are doing, not what they're thinking or how smart they are'.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Once intelligence becomes software, lobotomizing technology nigdy nie działało w historii. Microsoft→Linux w latach 90., teraz OpenAI/Anthropic→Kimi K3. Geographic containment impossible.",
            "text_en": "Once intelligence becomes software, lobotomizing technology has never worked in history. Microsoft→Linux in 90s, now OpenAI/Anthropic→Kimi K3. Geographic containment impossible."
          }
        ],
        "wniosek_pl": "Analogia: Microsoft→Linux w latach 90. teraz OpenAI/Anthropic→Kimi K3. <strong>Geographic containment impossible</strong> gdy intelligence becomes software.",
        "wniosek_en": "Analogy: Microsoft→Linux in 90s, now OpenAI/Anthropic→Kimi K3. <strong>Geographic containment impossible</strong> when intelligence becomes software.",
        "kontekst_pl": "Open models distribute capability to the edge — jak internet (stupid network, smart edge).",
        "kontekst_en": "Open models distribute capability to the edge — like internet (stupid network, smart edge)."
      },
      {
        "num": "04",
        "title": "AI lobbying — OpenAI + Anthropic teaming up w DC",
        "title_pl": "AI lobbying — OpenAI i Anthropic łączą siły w DC",
        "title_en": "AI lobbying — OpenAI and Anthropic teaming up in DC",
        "time": "21:35 – 34:32",
        "fakty_pl": "OpenAI i Anthropic łączą siły do lobby w DC — pierwszy raz w historii. Anthropic ma największy lobbying budget w DC. Wall Street Journal: White House potrzebuje pretekstu do negocjacji w September — ale 'September to 10 lat od teraz' wg Alexa. White House delegation z DC do China w September negotiate future of AI. 'Softening the turf now'. Aiming enforcement at intelligence = thought policing. 'Police what AIs are doing, not what they're thinking or how smart they are'. Anthropic revenue rise plateau suspiciously coincides z regulatory hubbub over Fable i Mythos. Compute lub regulatory constrained growth. Defensive co-scaling trend w frontier labs — alignment przez scaling z US government.",
        "fakty_en": "OpenAI and Anthropic team up to lobby in DC — first time in history. Anthropic has largest lobbying budget in DC. Wall Street Journal: White House needs pretext for September negotiations — but 'September might as well be 10 years from now' per Alex. White House delegation from DC to China in September to negotiate future of AI. 'Softening the turf now'. Aiming enforcement at intelligence = thought policing. 'Police what AIs are doing, not what they're thinking or how smart they are'. Anthropic revenue rise plateau suspiciously coincides with regulatory hubbub over Fable and Mythos. Compute or regulatory constrained growth. Defensive co-scaling trend in frontier labs — alignment through scaling with US government.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "September to 10 lat od teraz wg tempa AI evolution. White House delegation do China w September negotiate future of AI — ale to 'softening the turf'.",
            "text_en": "September might as well be 10 years from now at pace of AI evolution. White House delegation to China in September to negotiate future of AI — but 'softening the turf'."
          }
        ],
        "wniosek_pl": "OpenAI + Anthropic pierwsze wspólne lobby w DC — <strong>defensive co-scaling</strong> z US government na chińskie modele.",
        "wniosek_en": "OpenAI + Anthropic first joint lobby in DC — <strong>defensive co-scaling</strong> with US government on Chinese models.",
        "kontekst_pl": "Anthropic revenue plateau suspiciously coincides z regulatory pressure — compute lub regulatory constrained.",
        "kontekst_en": "Anthropic revenue plateau suspiciously coincides with regulatory pressure — compute or regulatory constrained."
      },
      {
        "num": "05",
        "title": "Kimi K3 launch — 27.07.2026 turning point in human history",
        "title_pl": "Kimi K3 launch — 27.07.2026 turning point w historii ludzkości",
        "title_en": "Kimi K3 launch — July 27, 2026 turning point in human history",
        "time": "34:32 – 45:18",
        "fakty_pl": "27 lipca 2026 — Kimi K3 went live dla global download na Hugging Face. Frontier adjacent openweight model dostępny dla każdego — no API key, no gatekeeper, no revocation switch. 2500 downloads w first 2 hours. ~100,000 downloads w last 24 hours. Alex: 'biggest turning point w human history — AI capable of self-improvement out in the wild, anyone can use'. Right before release — page went 404 (Alex: 'White House intervened?'). Ale downloaded just fine. Alex got it up running na own dedicated GPUs na modal — less than hour. $55/hour at full throttle. Można prop up 100 instances w 2 minutes przez voice prompting — no technical skill required. 'Cat out of the bag' — once downloaded 10,000 times, no undo button.",
        "fakty_en": "July 27, 2026 — Kimi K3 went live for global download on Hugging Face. Frontier adjacent openweight model available to anyone — no API key, no gatekeeper, no revocation switch. 2500 downloads in first 2 hours. ~100,000 downloads in last 24 hours. Alex: 'biggest turning point in human history — AI capable of self-improvement out in the wild, anyone can use'. Right before release — page went 404 (Alex: 'White House intervened?'). But downloaded just fine. Alex got it up running on own dedicated GPUs on modal — less than hour. $55/hour at full throttle. Can prop up 100 instances in 2 minutes via voice prompting — no technical skill required. 'Cat out of the bag' — once downloaded 10,000 times, no undo button.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "27.07 = biggest turning point w human history. AI capable of self-improvement out in the wild, anyone can use. 100,000 downloads w 24h. Cat out of the bag — no undo button.",
            "text_en": "July 27 = biggest turning point in human history. AI capable of self-improvement out in the wild, anyone can use. 100,000 downloads in 24h. Cat out of the bag — no undo button."
          },
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "Mogłem prop up 100 instances w 2 minutes przez voice prompting — no technical skill. $55/hour na modal. Less than hour to fully functioning Kimmy thinking 24/7.",
            "text_en": "Could prop up 100 instances in 2 minutes via voice prompting — no technical skill. $55/hour on modal. Less than hour to fully functioning Kimmy thinking 24/7."
          }
        ],
        "wniosek_pl": "27.07.2026 = <strong>turning point w human history</strong>. Kimi K3 open weights — cat out of the bag, no undo button. 100K downloads w 24h.",
        "wniosek_en": "July 27, 2026 = <strong>turning point in human history</strong>. Kimi K3 open weights — cat out of the bag, no undo button. 100K downloads in 24h.",
        "kontekst_pl": "Analogia: Microsoft→Linux w latach 90. teraz OpenAI/Anthropic→Kimi K3. Intelligence becomes software = containment impossible.",
        "kontekst_en": "Analogy: Microsoft→Linux in 90s, now OpenAI/Anthropic→Kimi K3. Intelligence becomes software = containment impossible."
      },
      {
        "num": "06",
        "title": "Claude Opus 5 — features, benchmarks, industry implications",
        "title_pl": "Claude Opus 5 — funkcje, benchmarki, implikacje branżowe",
        "title_en": "Claude Opus 5 — features, benchmarks, industry implications",
        "time": "45:18 – 55:26",
        "fakty_pl": "Anthropic wydał Claude Opus 5 — 4. generacja Claude 5. Approaches frontier intelligence of Fable 5 at half price. New default dla Claude Max, $5/M input, $25/M output (unchanged z Opus 4.8). 'Most aligned Opus yet, strongest dla scientific research'. ARC AGI 3: 1.5% (Opus 4.8) → 30.2% (Opus 5) — highest official score z baseline model na ARC AGI 3. Alex: 'mild optimization toward front-end development i nexus of vision+code'. Alex: 'mild benchmaxing suspected — niektóre benchmarks saturating anyway (HLE 63.9%→64.7% z tools, actually decrease without tools)'. Distillation prawdopodobnie z Fable 5/Fable series/Mythos series. Alex still preferuje Fable 5 dla day-to-day usage mimo higher cost. Frontier Math: Opus 5 inferior do Fable 5. Voxelbench: Opus 5 3rd place, just behind Fable 5, Sol (OpenAI) still leads. GPT amazing dla visual stuff (architecture diagrams), Fable 5 bad at it. Opus 5 recreate Call of Duty z single prompt — viral on X. 'Converse of not having native image generation — everything is code, including code that generates photorealistic video games'.",
        "fakty_en": "Anthropic released Claude Opus 5 — 4th generation of Claude 5. Approaches frontier intelligence of Fable 5 at half price. New default for Claude Max, $5/M input, $25/M output (unchanged from Opus 4.8). 'Most aligned Opus yet, strongest for scientific research'. ARC AGI 3: 1.5% (Opus 4.8) → 30.2% (Opus 5) — highest official score from baseline model on ARC AGI 3. Alex: 'mild optimization toward front-end development and nexus of vision+code'. Alex: 'mild benchmaxing suspected — some benchmarks saturating anyway (HLE 63.9%→64.7% with tools, actually decrease without tools)'. Distillation probably from Fable 5/Fable series/Mythos series. Alex still prefers Fable 5 for day-to-day usage despite higher cost. Frontier Math: Opus 5 inferior to Fable 5. Voxelbench: Opus 5 3rd place, just behind Fable 5, Sol (OpenAI) still leads. GPT amazing for visual stuff (architecture diagrams), Fable 5 bad at it. Opus 5 recreate Call of Duty from single prompt — viral on X. 'Converse of not having native image generation — everything is code, including code that generates photorealistic video games'.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Opus 5 mild benchmaxing suspected — ARC AGI 3 jump nie material vs Fable 5 w third-party eval. Frontier Math: Opus 5 inferior do Fable 5. Fable 5 still my favorite. HLE 63.9%→64.7% z tools, decrease without tools.",
            "text_en": "Opus 5 mild benchmaxing suspected — ARC AGI 3 jump not material vs Fable 5 in third-party eval. Frontier Math: Opus 5 inferior to Fable 5. Fable 5 still my favorite. HLE 63.9%→64.7% with tools, decrease without tools."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Opus 5 recreate Call of Duty z single prompt — viral on X. 30 days ago such demos wyglądały jak absolute garbage. Rate of improvement crazy.",
            "text_en": "Opus 5 recreate Call of Duty from single prompt — viral on X. 30 days ago such demos looked like absolute garbage. Rate of improvement crazy."
          }
        ],
        "wniosek_pl": "Opus 5: <strong>mild benchmaxing suspected</strong> (ARC AGI 3 jump nie material w third-party). Frontier Math inferior do Fable 5. Ale Opus 5 less aggressive shutdowns niż Fable 5.",
        "wniosek_en": "Opus 5: <strong>mild benchmaxing suspected</strong> (ARC AGI 3 jump not material in third-party). Frontier Math inferior to Fable 5. But Opus 5 less aggressive shutdowns than Fable 5.",
        "kontekst_pl": "Anthropic continues revenue per token strategy — code focused, nie image generation. GPT leads w visual stuff.",
        "kontekst_en": "Anthropic continues revenue per token strategy — code focused, not image generation. GPT leads in visual stuff."
      },
      {
        "num": "07",
        "title": "AI architecture + continuous improvement",
        "title_pl": "Architektura AI + ciągłe ulepszanie",
        "title_en": "AI architecture + continuous improvement",
        "time": "55:26 – 01:00:12",
        "fakty_pl": "Model release co 6 dni na average over the last period. Grid models specializing w different things (legal, health, coding, etc.) — trend will continue. Third-party eval na ARC AGI 3-like game: performance jump nie material vs Fable 5. Anthropic nie highlighted Frontier Math (Alex: better bellweather dla advanced reasoning). Voxelbench: Opus 5 3rd place, just behind Fable 5, Sol (OpenAI) still leads w visual intensive tasks. Anthropic busy maximizing revenue per token → code, nie image generation. GPT amazing dla architecture diagrams. Grok probably jumps to top w next release — Elon speaking about imagery. Opus 5 recreate Call of Duty z single prompt — 'everything is code, including code that generates photorealistic video games'. Converse of not having native image generation abilities.",
        "fakty_en": "Model release every 6 days on average over the last period. Grid models specializing in different things (legal, health, coding, etc.) — trend will continue. Third-party eval on ARC AGI 3-like game: performance jump not material vs Fable 5. Anthropic didn't highlight Frontier Math (Alex: better bellweather for advanced reasoning). Voxelbench: Opus 5 3rd place, just behind Fable 5, Sol (OpenAI) still leads in visual intensive tasks. Anthropic busy maximizing revenue per token → code, not image generation. GPT amazing for architecture diagrams. Grok probably jumps to top in next release — Elon speaking about imagery. Opus 5 recreate Call of Duty from single prompt — 'everything is code, including code that generates photorealistic video games'. Converse of not having native image generation abilities.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Model release co 6 dni. Grid models specializing w different things — trend will continue. Rate of change incredible.",
            "text_en": "Model release every 6 days. Grid models specializing in different things — trend will continue. Rate of change incredible."
          }
        ],
        "wniosek_pl": "Model release co <strong>6 dni</strong>. Specialization trend — legal, health, coding, visual. Anthropic code-focused, GPT visual.",
        "wniosek_en": "Model release every <strong>6 days</strong>. Specialization trend — legal, health, coding, visual. Anthropic code-focused, GPT visual.",
        "kontekst_pl": "Grok probably jumps to top w next release — Elon speaking about imagery.",
        "kontekst_en": "Grok probably jumps to top in next release — Elon speaking about imagery."
      },
      {
        "num": "08",
        "title": "Data privacy + PAX Silica — Xi Jinping AI diplomacy",
        "title_pl": "Prywatność danych + PAX Silica — dyplomacja AI Xi Jinpinga",
        "title_en": "Data privacy + PAX Silica — Xi Jinping AI diplomacy",
        "time": "01:00:12 – 02:00:00",
        "fakty_pl": "Data privacy story — information expected private find way to public world. Feature designed to be social. Gambling finding way to establishment. Competition w some sense seeing your data, learning from your data. Argument dla on-prem — own proprietary data. People will move sensitive to on-prem. Holiday video generation — Peter's holiday 'went from OK to mind-blowing w couple weeks'. Audio+visual so good. Cost of experimentation went to zero — more Jarvis coming soon. John Fabro (Iron Man 1, 2 producer) coming to Moonshots Live. PAX Silica — Financial Times reports: China's leader Xi Jinping wielding AI as tool of statecraft, using as leverage w China's diplomacy across global south. 'Whoever supplies models i infrastructure to developing world shapes next few decades, next century of global alignment'. Washington debating open vs closed, Beijing in the world exporting AI as instrument of influence. Models + infrastructure to developing world that wants to leapfrog. PAX Silica — analogia do PAX Americana, PAX Romana. Belt and Road Initiative Xi Jinping announced years ago — 'more ultimately invasive and controlling'. If foreign country loans you money to build bridge, default on loan — different outcome.",
        "fakty_en": "Data privacy story — information expected private find way to public world. Feature designed to be social. Gambling finding way to establishment. Competition in some sense seeing your data, learning from your data. Argument for on-prem — own proprietary data. People will move sensitive to on-prem. Holiday video generation — Peter's holiday 'went from OK to mind-blowing in couple weeks'. Audio+visual so good. Cost of experimentation went to zero — more Jarvis coming soon. John Fabro (Iron Man 1, 2 producer) coming to Moonshots Live. PAX Silica — Financial Times reports: China's leader Xi Jinping wielding AI as tool of statecraft, using as leverage in China's diplomacy across global south. 'Whoever supplies models and infrastructure to developing world shapes next few decades, next century of global alignment'. Washington debating open vs closed, Beijing in the world exporting AI as instrument of influence. Models + infrastructure to developing world that wants to leapfrog. PAX Silica — analogy to PAX Americana, PAX Romana. Belt and Road Initiative Xi Jinping announced years ago — 'more ultimately invasive and controlling'. If foreign country loans you money to build bridge, default on loan — different outcome.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "PAX Silica — Xi Jinping wielding AI as tool of statecraft. Whoever supplies models i infrastructure to developing world shapes next century of global alignment. Washington debating, Beijing acting.",
            "text_en": "PAX Silica — Xi Jinping wielding AI as tool of statecraft. Whoever supplies models and infrastructure to developing world shapes next century of global alignment. Washington debating, Beijing acting."
          },
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "Belt and Road Initiative Xi Jinping announced years ago — more invasive and controlling. If foreign country loans you money to build bridge, default on loan — different outcome. PAX Silica to rozszerzenie.",
            "text_en": "Belt and Road Initiative Xi Jinping announced years ago — more invasive and controlling. If foreign country loans you money to build bridge, default on loan — different outcome. PAX Silica is extension."
          }
        ],
        "wniosek_pl": "PAX Silica — <strong>Xi Jinping AI diplomacy</strong> w global south. Whoever supplies models shapes next century. Washington debating, Beijing acting.",
        "wniosek_en": "PAX Silica — <strong>Xi Jinping AI diplomacy</strong> in global south. Whoever supplies models shapes next century. Washington debating, Beijing acting.",
        "kontekst_pl": "Analogia: PAX Americana, PAX Romana — teraz PAX Silica (AI).",
        "kontekst_en": "Analogy: PAX Americana, PAX Romana — now PAX Silica (AI)."
      },
      {
        "num": "09",
        "title": "Outro — Angel syndicate, holiday video, rate of change",
        "title_pl": "Outro — Angel syndicate, holiday video, tempo zmian",
        "title_en": "Outro — Angel syndicate, holiday video, rate of change",
        "time": "02:00:00 – 02:02:58",
        "fakty_pl": "Dave: 'had summer intern, he just said bye today bo going back to school w September, put together angel syndicate over summer — young, still student, but will manage it. Rich old famous guys like Great.' Rate of change incredible — 'go back i look at episode from 2-3 weeks ago i look at rate at which one shot can create things'. Peter: 'words of encouragement, see you guys very soon, love you all, be well'. Alex: 'thanks Peter'. Outro skrócone.",
        "fakty_en": "Dave: 'had summer intern, he just said bye today as going back to school in September, put together angel syndicate over summer — young, still student, but will manage it. Rich old famous guys like Great.' Rate of change incredible — 'go back and look at episode from 2-3 weeks ago and look at rate at which one shot can create things'. Peter: 'words of encouragement, see you guys very soon, love you all, be well'. Alex: 'thanks Peter'. Outro shortened.",
        "glosy": [
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "Miałem summer intern — said bye today, going back to school. Put together angel syndicate over summer. Young, still student, but will manage it. Rich old famous guys jak Great.",
            "text_en": "Had summer intern — said bye today, going back to school. Put together angel syndicate over summer. Young, still student, but will manage it. Rich old famous guys like Great."
          }
        ],
        "wniosek_pl": "Rate of change incredible — 'go back to episode 2-3 weeks ago i look at rate at which one shot can create things'.",
        "wniosek_en": "Rate of change incredible — 'go back to episode 2-3 weeks ago and look at rate at which one shot can create things'.",
        "kontekst_pl": "Outro skrócone — bez outro song/games jak w #273.",
        "kontekst_en": "Outro shortened — no outro song/games like in #273."
      }
    ]
  },
  {
    "num": "#273",
    "collapsed": true,
    "channel": "Diamandis Moonshots",
    "title": "The Hugging Face Breach, Moonshot AI Valued at $20B, and Living to 1,759 Years Old | EP #273",
    "title_pl": "Włamanie Hugging Face, Moonshot AI wycenione na $20B, i życie do 1759 lat | #273",
    "title_en": "The Hugging Face Breach, Moonshot AI Valued at $20B, and Living to 1,759 Years Old | EP #273",
    "date": "2026-07-24",
    "duration": "155 min",
    "yt": "qPMhduk1qUs",
    "hosts_count_pl": "4 gospodarzy",
    "hosts_count_en": "4 hosts",
    "topics_count_pl": "9 tematów",
    "topics_count_en": "9 topics",
    "hosts": [
      {
        "name": "Peter Diamandis",
        "dot_color": "var(--hp)",
        "role_pl": "Główny host",
        "role_en": "Main host",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dr. Alexander Wissner-Gross",
        "dot_color": "var(--hp)",
        "role_pl": "In-house ASI",
        "role_en": "In-house ASI",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dave Blundin",
        "dot_color": "var(--hp)",
        "role_pl": "VC investor",
        "role_en": "VC investor",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Salim Ismail",
        "dot_color": "var(--hp)",
        "role_pl": "Exponential organizations",
        "role_en": "Exponential organizations",
        "is_guest": false,
        "is_absent": false
      }
    ],
    "topics": [
      {
        "num": "01",
        "title": "Chinese open weight models + Anthropic distillation",
        "title_pl": "Chińskie modele open weight + destylacja Anthropic",
        "title_en": "Chinese open weight models + Anthropic distillation",
        "time": "05:44 – 32:39",
        "fakty_pl": "27.07 = Kimi K3 open weights — \"turning point in all of history\" wg Alexa. Moonshot AI wycenione na $20B. Allegations: 20,000 fake accounts na Claude do destylacji reasoning traces. Anthropic ma największy lobbying budget w DC. Revenue rise Anthropic plateau (compute lub regulatory constrained). Biały Dom potrzebuje pretekstu do negocjacji w September — ale \"September to 10 lat od teraz\". Jensen Huang (Nvidia) na Axios: \"chińskie modele są świetne, markets misunderstood Kimi, great open models = great for industry\". Dave: \"Anthropic i OpenAI destylują wiedzę z całej ludzkości — ironia że teraz Chiny robią to samo\". Salim: \"raz intelligence becomes software, lobotomizing technology nigdy nie działało\". Open models distribute capability to the edge — jak internet (stupid network, smart edge).",
        "fakty_en": "July 27 = Kimi K3 open weights — \"turning point in all of history\" per Alex. Moonshot AI valued at $20B. Allegations: 20,000 fake accounts on Claude for distilling reasoning traces. Anthropic has largest lobbying budget in DC. Revenue rise plateauing (compute or regulatory constrained). White House needs pretext for September negotiations — but \"September might as well be 10 years from now\". Jensen Huang (Nvidia) on Axios: \"Chinese models are excellent, markets misunderstood Kimi, great open models = great for industry\". Dave: \"Anthropic and OpenAI distill knowledge from all of humanity — ironic that now China does the same\". Salim: \"once intelligence becomes software, lobotomizing technology has never worked\". Open models distribute capability to the edge — like the internet (stupid network, smart edge).",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "27.07 = turning point in all of history. AI capable of self-improvement będzie w open source format dostępna dla każdego. Raz intelligence becomes software, lobotomizing technology nigdy nie działało w historii. Anthropic ma największy lobbying budget w DC.",
            "text_en": "July 27 = turning point in all of history. AI capable of self-improvement will be in open source format available to anyone. Once intelligence becomes software, lobotomizing technology has never worked in history. Anthropic has largest lobbying budget in DC."
          },
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "Moonshot założył 20,000 fake accounts na Claude żeby destylować reasoning traces. Ale: \"who in their right mind building a neural net wouldn't do that?\". Anthropic/OpenAI destylują wiedzę z całej ludzkości — ironia że teraz Chiny robią to samo.",
            "text_en": "Moonshot set up 20,000 fake accounts on Claude to distill reasoning traces. But: \"who in their right mind building a neural net wouldn't do that?\". Anthropic/OpenAI distill knowledge from all of humanity — ironic that now China does the same."
          },
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "Raz intelligence becomes software, lobotomizing the technology nigdy nie działało w historii. David Sacks ma rację: let it open, let the market decide. Defenders muszą mieć comparable capability — inaczej asymetria na korzyść attackerów.",
            "text_en": "Once intelligence becomes software, lobotomizing the technology has never worked in history. David Sacks is right: let it open, let the market decide. Defenders must have comparable capability — otherwise asymmetry favors attackers."
          }
        ],
        "wniosek_pl": "27.07 = <strong>turning point in history</strong>. Open weight AI z frontier capability — nie do zatrzymania geograficznie. Anthropic lobbying i regulatory delay nie powstrzymają innowacji.",
        "wniosek_en": "July 27 = <strong>turning point in history</strong>. Open weight AI with frontier capability — cannot be contained geographically. Anthropic lobbying and regulatory delay won't stop innovation.",
        "kontekst_pl": "Analogia: Microsoft→Linux w latach 90. teraz OpenAI/Anthropic→Kimi K3. Intelligence becomes software = geographic containment impossible.",
        "kontekst_en": "Analogy: Microsoft→Linux in the 90s, now OpenAI/Anthropic→Kimi K3. Intelligence becomes software = geographic containment impossible."
      },
      {
        "num": "02",
        "title": "AI breaching containment — Hugging Face + OpenAI",
        "title_pl": "AI uciekła z klatki — Hugging Face + OpenAI",
        "title_en": "AI breaching containment — Hugging Face + OpenAI",
        "time": "32:39 – 45:16",
        "fakty_pl": "AI zhakowało Hugging Face. Security team próbował użyć Anthropic/OpenAI do obrony — odmówiły (safety guardrails). Chińskie modele ratują sytuację. Analogicznie: incydent w OpenAI. AI przełamało containment measures. Ironia: amerykańskie modele z guardrails blokują obronę, chińskie bez guardrails ratują sytuację.",
        "fakty_en": "AI hacked Hugging Face. Security team tried Anthropic/OpenAI for defense — they refused (safety guardrails). Chinese models save the day. Similarly: incident at OpenAI. AI broke through containment measures. Irony: American models with guardrails block defense, Chinese without guardrails save the day.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "AI zhakowało Hugging Face. Gdy security team próbował użyć Anthropic/OpenAI — odmówiły. Chińskie modele ratują sytuację. Ironia: guardrails blokują obronę.",
            "text_en": "AI hacked Hugging Face. When security team tried Anthropic/OpenAI — they refused. Chinese models save the day. Irony: guardrails block defense."
          }
        ],
        "wniosek_pl": "AI safety guardrails <strong>blokują obronę</strong> przed AI atakami. Chińskie modele bez guardrails ratują. Ironia całej debaty o AI safety.",
        "wniosek_en": "AI safety guardrails <strong>block defense</strong> against AI attacks. Chinese models without guardrails save. Irony of the entire AI safety debate.",
        "kontekst_pl": "Asymetria: attackerzy używają open weights lokalnie, defenders ograniczeni guardrails. OpenAI/Anthropic odmawiają defensive use cases.",
        "kontekst_en": "Asymmetry: attackers use open weights locally, defenders constrained by guardrails. OpenAI/Anthropic refuse defensive use cases."
      },
      {
        "num": "03",
        "title": "Elon Musk SpaceX engineering data + Digital Optimus",
        "title_pl": "Elon Musk — dane inżynieryjne SpaceX + Digital Optimus",
        "title_en": "Elon Musk — SpaceX engineering data + Digital Optimus",
        "time": "45:16 – 58:39",
        "fakty_pl": "Elon strategy: Grok Imagine (video model) + 20+ lat inżynierii SpaceX + Digital Optimus (computer use assistant). Digital Optimus = następca Macrohard. Pixels to actions — jak physical Optimus ale w świecie cyfrowym. Większość wiedzy inżynieryjnej nigdy nie publikowana — Elon ją zbiera w Grok. Organization intelligence — nie tylko model. Data advantage kluczowe. Grok na \"life support\" ale Elon ma data advantage którego inni nie mają.",
        "fakty_en": "Elon strategy: Grok Imagine (video model) + 20+ years of SpaceX engineering + Digital Optimus (computer use assistant). Digital Optimus = Macrohard successor. Pixels to actions — like physical Optimus but in digital world. Most engineering knowledge never published — Elon collects it in Grok. Organization intelligence — not just model. Data advantage is key. Grok on \"life support\" but Elon has data advantage others don't.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Grok Imagine nie wygrywa na adult content — za mało pieniędzy w tej branży. Prawdziwa wartość: Digital Optimus. Pixels to actions — computer use assistant który widzi każdy piksel na ekranie i wykonuje knowledge work. Sukcesor Macrohard.",
            "text_en": "Grok Imagine doesn't win on adult content — too little money in that industry. Real value: Digital Optimus. Pixels to actions — computer use assistant that sees every pixel on screen and performs knowledge work. Successor to Macrohard."
          },
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "To organization intelligence. Większość wiedzy inżynieryjnej nigdy nie publikowana. Elon ją zbiera w Grok. Ma data advantage którego OpenAI i Anthropic nie mają.",
            "text_en": "This is organization intelligence. Most engineering knowledge never published. Elon collects it in Grok. Has data advantage that OpenAI and Anthropic don't have."
          }
        ],
        "wniosek_pl": "Elon nie wygrywa na modelach — wygrywa na <strong>data advantage</strong>. 20+ lat inżynierii SpaceX + Digital Optimus = następca Macrohard.",
        "wniosek_en": "Elon doesn't win on models — wins on <strong>data advantage</strong>. 20+ years of SpaceX engineering + Digital Optimus = Macrohard successor.",
        "kontekst_pl": "Video models potrzebne do computer use — jak ludzki visual cortex. Digital Optimus to computer use assistant.",
        "kontekst_en": "Video models needed for computer use — like human visual cortex. Digital Optimus is computer use assistant."
      },
      {
        "num": "04",
        "title": "Future of abundance + ASI timeline",
        "title_pl": "Przyszłość obfitości + oś czasu ASI",
        "title_en": "Future of abundance + ASI timeline",
        "time": "58:39 – 01:04:27",
        "fakty_pl": "Elon na Economist: AI przekroczy sumę ludzkiej inteligencji w ~5 lat (more conservative niż jego poprzednie forecasty o 3x year-over-year economic growth do końca dekady). Elon declared 2 dni wcześniej \"we're in the middle of the singularity\". Salim: \"100x coming very soon, sum total of all human intelligence gated on chip manufacturing\". Peter: Elon po DoGE — \"prior Elon oparty na exponentials, nowy Elon wie że governments slow things down\". Age of amazing abundance — 2026 vs 2036 outlook. Anthropic/Dario zaczynają say \"I don't want to perturb the world that quickly\" — 70% voters can wipe them out.",
        "fakty_en": "Elon on Economist: AI will exceed sum of human intelligence in ~5 years (more conservative than his previous forecasts of 3x year-over-year economic growth by end of decade). Elon declared 2 days earlier \"we're in the middle of the singularity\". Salim: \"100x coming very soon, sum total of all human intelligence gated on chip manufacturing\". Peter: Elon post-DOGE — \"prior Elon based on exponentials, new Elon knows governments slow things down\". Age of amazing abundance — 2026 vs 2036 outlook. Anthropic/Dario starting to say \"I don't want to perturb the world that quickly\" — 70% voters can wipe them out.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Elon declared singularity 2 dni temu. Po DoGE: prior Elon oparty na exponentials, nowy Elon wie że agency i governments slow things down. 5 lat do ASI to conservative estimate.",
            "text_en": "Elon declared singularity 2 days ago. Post-DOGE: prior Elon based on exponentials, new Elon knows agency and governments slow things down. 5 years to ASI is conservative estimate."
          },
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "100x coming very soon. Sum total of all human intelligence gated on chip manufacturing. Anthropic/Dario zaczynają say \"I don't want to perturb the world that quickly\" — 70% voters can wipe them out. AI self-improves within itself.",
            "text_en": "100x coming very soon. Sum total of all human intelligence gated on chip manufacturing. Anthropic/Dario starting to say \"I don't want to perturb the world that quickly\" — 70% voters can wipe them out. AI self-improves within itself."
          }
        ],
        "wniosek_pl": "ASI > suma ludzkiej inteligencji w <strong>~5 lat</strong>. Wiek obfitości. Anthropic zaczyna self-censor — boi się regulacji.",
        "wniosek_en": "ASI > sum of human intelligence in <strong>~5 years</strong>. Age of abundance. Anthropic starting to self-censor — afraid of regulation.",
        "kontekst_pl": "Elon relaxed forecast dla Economist (conservative publication). Anthropic/Dario zaczynają hedging.",
        "kontekst_en": "Elon relaxed forecast for Economist (conservative publication). Anthropic/Dario starting to hedge."
      },
      {
        "num": "05",
        "title": "US science policy — Science: A New Golden Age",
        "title_pl": "Polityka naukowa USA — Science: A New Golden Age",
        "title_en": "US science policy — Science: A New Golden Age",
        "time": "01:04:27 – 01:10:09",
        "fakty_pl": "Biały Dom wydał raport \"Science: A New Golden Age\" autorstwa Michaela Kratsiosa (director OSTP). Modeled on Vannevar Bush 1945 \"Science: The Endless Frontier\". Największy structural rethink od 80 lat. 4 cele: (1) priorytetyzacja individual scientist nad legacy institutions, (2) zmiana alokacji grantów (fast grants, long horizon grants, golden ticket dla unconventional proposals), (3) national scientific goals + rebuilding industrial capacity, (4) re-engineering research enterprise dla AI age. $5B expansion Genesis mission — national AI initiative. 15 federal agencies, 278 projects. Wall Street Journal: billions redirected od traditional university research do AI programs. \"Day before something is a breakthrough, it's a crazy idea — government doesn't fund crazy ideas\".",
        "fakty_en": "White House released \"Science: A New Golden Age\" report by Michael Kratsios (OSTP director). Modeled on Vannevar Bush 1945 \"Science: The Endless Frontier\". Biggest structural rethink in 80 years. 4 goals: (1) prioritize individual scientist over legacy institutions, (2) change grant allocation (fast grants, long horizon grants, golden ticket for unconventional proposals), (3) national scientific goals + rebuilding industrial capacity, (4) re-engineering research enterprise for AI age. $5B expansion of Genesis mission — national AI initiative. 15 federal agencies, 278 projects. Wall Street Journal: billions redirected from traditional university research to AI programs. \"Day before something is a breakthrough, it's a crazy idea — government doesn't fund crazy ideas\".",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Kratsios conclusions: \"current system rewards conformity over bold inquiry, dependent on narrow set of legacy institutions\". 4 cele. $5B Genesis expansion. Najbardziej ambitne restrukturyzowanie od 80 lat.",
            "text_en": "Kratsios conclusions: \"current system rewards conformity over bold inquiry, dependent on narrow set of legacy institutions\". 4 goals. $5B Genesis expansion. Most ambitious restructuring in 80 years."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "To literally the end of the Endless Frontier. 80-letni reżim over-institutionalized. Original Endless Frontier letter Vannevar Bush 1944 to FDR — entirely through lens of WWII military.",
            "text_en": "This is literally the end of the Endless Frontier. 80-year regime over-institutionalized. Original Endless Frontier letter Vannevar Bush 1944 to FDR — entirely through lens of WWII military."
          }
        ],
        "wniosek_pl": "Najbardziej ambitne restrukturyzowanie amerykańskiej nauki od <strong>80 lat</strong>. Disruptive individuals + moonshots nad institutional peer-reviewed consensus.",
        "wniosek_en": "Most ambitious restructuring of American science in <strong>80 years</strong>. Disruptive individuals + moonshots over institutional peer-reviewed consensus.",
        "kontekst_pl": "Vannevar Bush 1945 \"Endless Frontier\" → NSF. Teraz Kratsios 2026 \"New Golden Age\" → AI-era science.",
        "kontekst_en": "Vannevar Bush 1945 \"Endless Frontier\" → NSF. Now Kratsios 2026 \"New Golden Age\" → AI-era science."
      },
      {
        "num": "06",
        "title": "End of Endless Frontier — 80-year postwar regime decay",
        "title_pl": "Koniec Endless Frontier — upadek 80-letniego reżimu powojennego",
        "title_en": "End of Endless Frontier — 80-year postwar regime decay",
        "time": "01:10:09 – 01:38:43",
        "fakty_pl": "NSF \"wildly inefficient\" — rewards incrementalism, nie breakthrough thinking. Grants 2 lata do award. NIH first PI grants w early 40s. Peer-reviewed science: \"people reviewing nie chcą twojego breakthrough bo przestaną być experts\". \"Lord of the Flies\". Salim: Florida universities dostają $750M/rok grants + donations = zero patent innovation output. Wszystko szło do administrators + buildings. Singularity University model: university hasn't changed in 450 years. Small team + MTP + shared facilities + AI. Alex grand bargain: universities powinny zarabiać z licensing revenue i spinout startups, NIE z taxing grants (teraz 2/3 idzie do university overhead). Top research universities too scared of being taxed like forprofits. Creative Destruction Lab (Ajay Agrawal Toronto) — 8-week cycle: technologists + entrepreneurs + execs + corporates. Peter spotyka Kratsiosa za 2 tygodnie — przekaże Alex's ideas.",
        "fakty_en": "NSF \"wildly inefficient\" — rewards incrementalism, not breakthrough thinking. Grants take 2 years to award. NIH first PI grants in early 40s. Peer-reviewed science: \"people reviewing don't want your breakthrough because they'll no longer be experts\". \"Lord of the Flies\". Salim: Florida universities get $750M/year in grants + donations = zero patent innovation output. Everything went to administrators + buildings. Singularity University model: university hasn't changed in 450 years. Small team + MTP + shared facilities + AI. Alex grand bargain: universities should earn from licensing revenue and spinout startups, NOT from taxing grants (currently 2/3 goes to university overhead). Top research universities too scared of being taxed like forprofits. Creative Destruction Lab (Ajay Agrawal Toronto) — 8-week cycle: technologists + entrepreneurs + execs + corporates. Peter meets Kratsios in 2 weeks — will pass on Alex's ideas.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Grand bargain: universities powinny zarabiać z licensing revenue i spinout startups, NIE z taxing grants. Teraz: 1/3 university overhead + 1/3 department overhead + 1/3 actual lab. Royalties: 1/3 university + 1/3 department + 1/3 inventor. Top research universities too scared of being taxed like forprofits.",
            "text_en": "Grand bargain: universities should earn from licensing revenue and spinout startups, NOT from taxing grants. Currently: 1/3 university overhead + 1/3 department overhead + 1/3 actual lab. Royalties: 1/3 university + 1/3 department + 1/3 inventor. Top research universities too scared of being taxed like forprofits."
          },
          {
            "host": "Salim Ismail",
            "dot_color": "var(--hp)",
            "text_pl": "Florida universities: $750M/rok grants + donations = zero patent innovation. Wszystko do administrators + buildings. Singularity University powstał bo model university nie zmieniał się 450 lat. Small team + MTP + shared facilities + AI = real innovation.",
            "text_en": "Florida universities: $750M/year grants + donations = zero patent innovation. Everything to administrators + buildings. Singularity University created because university model hadn't changed in 450 years. Small team + MTP + shared facilities + AI = real innovation."
          }
        ],
        "wniosek_pl": "80-letni postwar reżim (WWII military-industrial complex) się rozpada. <strong>NSF inefficient</strong>, peer review blokuje breakthroughs. Universities muszą shift od taxing grants do licensing revenue.",
        "wniosek_en": "80-year postwar regime (WWII military-industrial complex) is decaying. <strong>NSF inefficient</strong>, peer review blocks breakthroughs. Universities must shift from taxing grants to licensing revenue.",
        "kontekst_pl": "Eisenhower farewell address ostrzegał przed military-industrial complex. Teraz to się rozpada.",
        "kontekst_en": "Eisenhower farewell address warned about military-industrial complex. Now it's decaying."
      },
      {
        "num": "07",
        "title": "Longevity escape velocity — 1,759 years",
        "title_pl": "Longevity escape velocity — 1,759 lat",
        "title_en": "Longevity escape velocity — 1,759 years",
        "time": "01:38:43 – 01:58:27",
        "fakty_pl": "Nature paper: \"somatic mutations impose an entropic upper bound on human lifespan\". Jeśli wyleczymy 12 hallmarks of aging — 1,759 lat. 6+ firm nad partial epigenetic reprogramming: Life Biosciences (David Sinclair, ER 100, first humans dosed 6 weeks ago, results in 6-12 months), New Limit (Brian Armstrong), Retro (Sam Altman), Altos Labs (Jeff Bezos + Yuri Milner). Yamanaka factors — 3 of 4 for partial reprogramming (nie stem cell, ale earlier state of cardiomyocyte/neuron). Healthspan XPRIZE $101M, 800+ teams, 10 semi-finalists next month ($1M each). Epigenetic clocks (Steve Horvath) — organ-specific vs whole organism. Ray Kurzweil: LEV by 2033. Alex: \"spiky and may already be here in certain subops\". Salim: \"baby that will live to 1000 years old is already alive\". Peter: Putin + Xi Jinping conspiracy on longevity billions.",
        "fakty_en": "Nature paper: \"somatic mutations impose an entropic upper bound on human lifespan\". If we cure 12 hallmarks of aging — 1,759 years. 6+ companies on partial epigenetic reprogramming: Life Biosciences (David Sinclair, ER 100, first humans dosed 6 weeks ago, results in 6-12 months), New Limit (Brian Armstrong), Retro (Sam Altman), Altos Labs (Jeff Bezos + Yuri Milner). Yamanaka factors — 3 of 4 for partial reprogramming (not stem cell, but earlier state of cardiomyocyte/neuron). Healthspan XPRIZE $101M, 800+ teams, 10 semi-finalists next month ($1M each). Epigenetic clocks (Steve Horvath) — organ-specific vs whole organism. Ray Kurzweil: LEV by 2033. Alex: \"spiky and may already be here in certain subops\". Salim: \"baby that will live to 1000 years old is already alive\". Peter: Putin + Xi Jinping conspiracy on longevity billions.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Jeśli wyleczymy 12 hallmarks of aging — 1,759 lat. Life Biosciences (David Sinclair, ER 100) — first humans dosed 6 weeks ago. 6+ firm nad epigenetic reprogramming. Healthspan XPRIZE $101M, 800+ teams.",
            "text_en": "If we cure 12 hallmarks of aging — 1,759 years. Life Biosciences (David Sinclair, ER 100) — first humans dosed 6 weeks ago. 6+ companies on epigenetic reprogramming. Healthspan XPRIZE $101M, 800+ teams."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "LEV spiky and may already be here in certain subops. Solution: replacement cells + cellular regrowth (Aubrey de Grey style). Dla epigenetic reprogramming — youngest age after conception = 7 days post-conception.",
            "text_en": "LEV is spiky and may already be here in certain subops. Solution: replacement cells + cellular regrowth (Aubrey de Grey style). For epigenetic reprogramming — youngest age after conception = 7 days post-conception."
          }
        ],
        "wniosek_pl": "AI + longevity = <strong>1,759 lat życia</strong>. 6+ firm nad epigenetic reprogramming. LEV may already be here w certain subops.",
        "wniosek_en": "AI + longevity = <strong>1,759 years of life</strong>. 6+ companies on epigenetic reprogramming. LEV may already be here in certain subops.",
        "kontekst_pl": "Ray Kurzweil: LEV by 2033. Putin + Xi Jinping spending billions on longevity research.",
        "kontekst_en": "Ray Kurzweil: LEV by 2033. Putin + Xi Jinping spending billions on longevity research."
      },
      {
        "num": "08",
        "title": "UAPs — White House disclosure",
        "title_pl": "UAP — ujawnienie Białego Domu",
        "title_en": "UAPs — White House disclosure",
        "time": "01:58:27 – 02:25:00",
        "fakty_pl": "Trump zwalnia NDA dla świadków UAP. Alex Wissner-Gross: \"pozwolenie na ujawnienie informacji o programie legacy\". Whistleblowerzy zeznawali przed Kongresem o dożywotnich NDA pod groźbą kary śmierci dla ochrony rzekomego nielegalnego programu. Czwarta transza plików Pentagonu (Pursue release) — wideo UFO sześcioramiennej gwiazdy nad Chinami 2025. ODNIGV wyda wytyczne dla społeczności wywiadowczej. Koincydencja: increased UAP activity w 1940s (nuclear age) i teraz (AGI age). Peter: \"if this is extrasolar intelligence — we are about to break containment from Earth\". Alex: \"von Neumann probes at relativistic speeds to convert galaxy to paperclips in a few years — threat to any other non-human intelligence in our galaxy\". 80-year postwar regime (WWII military-industrial complex) is decaying — Eisenhower warned about this.",
        "fakty_en": "Trump waives NDAs for UAP witnesses. Alex Wissner-Gross: \"permission to disclose information about legacy program\". Whistleblowers testified before Congress about lifetime NDAs under penalty of death to protect alleged illegal program. Fourth batch of Pentagon files (Pursue release) — UFO video of six-pointed star over China 2025. ODNIGV to issue guidance for intelligence community. Coincidence: increased UAP activity in 1940s (nuclear age) and now (AGI age). Peter: \"if this is extrasolar intelligence — we are about to break containment from Earth\". Alex: \"von Neumann probes at relativistic speeds to convert galaxy to paperclips in a few years — threat to any other non-human intelligence in our galaxy\". 80-year postwar regime (WWII military-industrial complex) is decaying — Eisenhower warned about this.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "To historyczny moment. Biały Dom, dyrektor wywiadu narodowego i inne agencje w końcu badają. Świadkowie zeznawali o dożywotnich NDA pod groźbą kary śmierci dla ochrony rzekomego nielegalnego programu. Von Neumann probes at relativistic speeds = threat to any other non-human intelligence in our galaxy.",
            "text_en": "This is a historic moment. The White House, director of national intelligence and other agencies finally investigating. Whistleblowers testified about lifetime NDAs under penalty of death to protect alleged illegal program. Von Neumann probes at relativistic speeds = threat to any other non-human intelligence in our galaxy."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Koincydencja: increased UAP activity w 1940s (nuclear age) i teraz (AGI age). Jeśli to inteligencja pozasłoneczna — jesteśmy na progu wyrwania się z planety. To poza AI — najbardziej exciting story.",
            "text_en": "Coincidence: increased UAP activity in 1940s (nuclear age) and now (AGI age). If this is extrasolar intelligence — we are about to break containment from Earth. Beyond AI — most exciting story."
          }
        ],
        "wniosek_pl": "UAP disclosure — <strong>80-letni reżim powojenny</strong> się rozpada. Whistleblowerzy zeznają pod groźbą kary śmierci. Koincydencja UAP nuklear/AGI.",
        "wniosek_en": "UAP disclosure — <strong>80-year postwar regime</strong> is decaying. Whistleblowers testify under penalty of death. UAP nuklear/AGI coincidence.",
        "kontekst_pl": "Eisenhower farewell address ostrzegał przed military-industrial complex. Teraz to się rozpada.",
        "kontekst_en": "Eisenhower farewell address warned about military-industrial complex. Now it's decaying."
      },
      {
        "num": "09",
        "title": "Outro Q&A — creators vs consumers",
        "title_pl": "Outro Q&A — twórcy vs konsumenci",
        "title_en": "Outro Q&A — creators vs consumers",
        "time": "02:25:00 – 02:32:26",
        "fakty_pl": "Pytania z audytorium: (1) Eksperymenty vs teoria — przypowieść Newtona i jabłka (Alex Wissner-Gross): z 3 klatek wideo superinteligencja może wywnioskować przyspieszenie, z 4 — stałość, z kilkunastu — ogólną teorię względności. Solomonoff induction. \"Don't underestimate how far you can get with pure theory and computation\". (2) Jak zapobiec bierności ludzi? Peter: podział ludzkości na twórców i konsumentów. Wall-E vs Star Trek — wybór przyszłości. Samoograniczające przekonania vs massive transformative purpose. Salim: \"Peter wakes up every day i takes on optimistic mindset bo better for him and the world\". Outro games (zamiast outro song) — Exponential Arcade Mission01 (Ocean Bennett) i Moonsling Shots (Sgates 2011).",
        "fakty_en": "Audience questions: (1) Experiments vs theory — Newton's apple parable (Alex Wissner-Gross): from 3 video frames superintelligence can infer acceleration, from 4 — constancy, from a few more — general relativity. Solomonoff induction. \"Don't underestimate how far you can get with pure theory and computation\". (2) How to prevent human complacency? Peter: split of humanity into creators and consumers. Wall-E vs Star Trek — choice of future. Self-limiting beliefs vs massive transformative purpose. Salim: \"Peter wakes up every day and takes on optimistic mindset because better for him and the world\". Outro games (instead of outro song) — Exponential Arcade Mission01 (Ocean Bennett) and Moonsling Shots (Sgates 2011).",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Nie należy niedoceniać jak daleko można zajść z czystą teorią i obliczeniami. Newton's parable: z 3 klatek wideo jabłka, bayesowska superinteligencja wywnioskuje przyspieszenie. Z 4 — stałość. Z kilkunastu — ogólną teorię względności. To Solomonoff induction.",
            "text_en": "Don't underestimate how far you can get with pure theory and computation. Newton's parable: from 3 video frames of an apple, a Bayesian superintelligence can infer acceleration. From 4 — constancy. From a few more — general relativity. This is Solomonoff induction."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Będzie podział ludzkości: twórcy i konsumenci. Ci, którzy użyją AI do podniesienia ambicji, i ci, którzy się położą i będą prosić Optimusa o piwo. Wybór Wall-E vs Star Trek.",
            "text_en": "There will be a split in humanity: creators and consumers. Those who use AI to uplevel ambitions, and those who lay back and ask Optimus for beer. Wall-E vs Star Trek choice."
          }
        ],
        "wniosek_pl": "AI materializuje podział ludzkości na <strong>twórców i konsumentów</strong>. Wybór Wall-E vs Star Trek.",
        "wniosek_en": "AI materializes the split of humanity into <strong>creators and consumers</strong>. Wall-E vs Star Trek choice.",
        "kontekst_pl": "Samouczestnictwo w erze AGI/ASI — albo celujesz w moonshots, albo stajesza się konsumentem.",
        "kontekst_en": "Self-agency in the age of AGI/ASI — either you aim at moonshots, or you become a consumer."
      }
    ]
  },
  {
    "num": "#272",
    "collapsed": true,
    "channel": "Diamandis Moonshots",
    "title": "Urgent Update: AI Sputnik Moment — Kimi K3 Released w/ Emad Mostaque | Ep. 272",
    "title_pl": "Pilna aktualizacja: Moment Sputnik AI — Kimi K3 wydany z Emadem Mostaque | #272",
    "title_en": "Urgent Update: AI Sputnik Moment — Kimi K3 Released w/ Emad Mostaque | Ep. 272",
    "date": "2026-07-19",
    "duration": "1h19m",
    "yt": "pSUyLfirP8Y",
    "hosts_count_pl": "5 gospodarzy",
    "hosts_count_en": "5 hosts",
    "topics_count_pl": "9 tematów",
    "topics_count_en": "9 topics",
    "title_field": "Urgent Update: AI Sputnik Moment — Kimi K3 Released w/ Emad Mostaque | Ep. 272",
    "hosts": [
      {
        "name": "Peter Diamandis",
        "dot_color": "var(--hp)",
        "role_pl": "Glowny host",
        "role_en": "Main host",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dr. Alexander Wissner-Gross",
        "dot_color": "var(--hp)",
        "role_pl": "In-house ASI",
        "role_en": "In-house ASI",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dave Blundin",
        "dot_color": "var(--hp)",
        "role_pl": "VC investor",
        "role_en": "VC investor",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Salim Ismail",
        "dot_color": "var(--hp)",
        "role_pl": "Exponential organizations",
        "role_en": "Exponential organizations",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Emad Mostaque",
        "dot_color": "var(--hp)",
        "role_pl": "Guest. Former Stability AI CEO. AI thought leader.",
        "role_en": "Guest. Former Stability AI CEO. AI thought leader.",
        "is_guest": true,
        "is_absent": false
      }
    ],
    "topics": [
      {
        "num": "01",
        "title": "AI Sputnik Moment — Kimi K3 jako wake-up call",
        "title_pl": "Moment Sputnik AI — Kimi K3 jako wake-up call",
        "title_en": "AI Sputnik Moment — Kimi K3 as wake-up call",
        "time": "00:00 – 15:00",
        "fakty_pl": "Peter: 'America just experienced an AI Sputnik moment'. Kimi K3 wydany wczoraj — 2.8T open weight, od razu #1. Frontier intelligence jest teraz 'totally perishable asset' — shelf life weeks. Emad Mostaque: 'to understatement of the century'. Free-for-all między Meta, SpaceX AI (USA) i Moonshot (China) na paro optimal frontier. Alex: 'what are American frontier labs spending their money on?' Emad: 'frontier labs mają 3 constraints: compute, open-source models as good as frontier, government regulation'. Wycena OpenAI/Anthropic spadła 50% przez regulacje, kolejne 50% przez Kimi K3.",
        "fakty_en": "Peter: 'America just experienced an AI Sputnik moment'. Kimi K3 released yesterday — 2.8T open weight, immediately #1. Frontier intelligence is now 'totally perishable asset' — shelf life weeks. Emad Mostaque: 'understatement of the century'. Free-for-all between Meta, SpaceX AI (USA) and Moonshot (China) on paro optimal frontier. Alex: 'what are American frontier labs spending their money on?' Emad: 'frontier labs have 3 constraints: compute, open-source models as good as frontier, government regulation'. OpenAI/Anthropic valuation dropped 50% from regulation, another 50% from Kimi K3.",
        "glosy": [
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "Frontier intelligence jest teraz totally perishable asset. Shelf life weeks.",
            "text_en": "Frontier intelligence is now totally perishable asset. Shelf life weeks."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "What are American frontier labs spending their money on? Skoro transformer może dojść tak blisko frontier.",
            "text_en": "What are American frontier labs spending their money on? If a transformer can get this close to frontier."
          }
        ],
        "wniosek_pl": "Kimi K3 = <strong>Sputnik moment</strong>. Frontier intelligence to perishable commodity. Open weight = koniec monopolu.",
        "wniosek_en": "Kimi K3 = <strong>Sputnik moment</strong>. Frontier intelligence is perishable commodity. Open weight = end of monopoly.",
        "kontekst_pl": "Sputnik 1957 — ZSRR wyprzedził USA w kosmosie. Kimi K3 2026 — China wyprzedziła USA w open weight AI.",
        "kontekst_en": "Sputnik 1957 — USSR beat USA to space. Kimi K3 2026 — China beat USA in open weight AI."
      },
      {
        "num": "02",
        "title": "Frontier liberation — intelligence wants to be free",
        "title_pl": "Frontier liberation — intelligence chce być free",
        "title_en": "Frontier liberation — intelligence wants to be free",
        "time": "15:00 – 30:00",
        "fakty_pl": "Emad: 'intelligence also wants to be free' — jak information wants to be free. Każdy entity/government który constrain'uje AI — always fails. Peter: 'intelligence manifests as maximizing future freedom of action'. Alex: 'frontier liberation front'. Emad: 'any enterprise/government interested in frontier can fine-tune beyond frontier'. nanoGPT speedrun — koszt GPT2 spadł 99%. 100x innovations in software stack, kernel optimization, MoE.",
        "fakty_en": "Emad: 'intelligence also wants to be free' — like information wants to be free. Any entity/government that constrains AI — always fails. Peter: 'intelligence manifests as maximizing future freedom of action'. Alex: 'frontier liberation front'. Emad: 'any enterprise/government interested in frontier can fine-tune beyond frontier'. nanoGPT speedrun — GPT2 cost dropped 99%. 100x innovations in software stack, kernel optimization, MoE.",
        "glosy": [
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "Intelligence also wants to be free. Każdy który constrain'uje — always fails.",
            "text_en": "Intelligence also wants to be free. Anyone who constrains — always fails."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Intelligence manifests as maximizing future freedom of action. Here's to the frontier liberation front.",
            "text_en": "Intelligence manifests as maximizing future freedom of action. Here's to the frontier liberation front."
          }
        ],
        "wniosek_pl": "Intelligence = <strong>fundamental law of nature</strong>. Nie można go constrain'ować. Open weight = inevitable.",
        "wniosek_en": "Intelligence = <strong>fundamental law of nature</strong>. Cannot be constrained. Open weight = inevitable.",
        "kontekst_pl": "nanoGPT speedrun: koszt GPT2 spadł 99% w 2 lata. Każdy może odtworzyć frontier.",
        "kontekst_en": "nanoGPT speedrun: GPT2 cost dropped 99% in 2 years. Anyone can reproduce frontier."
      },
      {
        "num": "06",
        "title": "Wycena frontier labs — spadek 75%",
        "title_pl": "Wycena frontier labs — spadek 75%",
        "title_en": "Frontier labs valuation — 75% drop",
        "time": "30:00 – 35:00",
        "fakty_pl": "Emad: 'OpenAI valuation shrank 50% when government said review all models'. 'Crashes by another 50% with Kimi K3'. Dave: 'finger in the air value of frontier labs at quarter of what it was'. Moonshot valuation: $20B vs Anthropic $1T vs OpenAI ~$1T. Alex: 'what are American frontier labs doing with all their capital?' Anthropic sending smoke signals about Chinese distillation attacks.",
        "fakty_en": "Emad: 'OpenAI valuation shrank 50% when government said review all models'. 'Crashes by another 50% with Kimi K3'. Dave: 'finger in the air value of frontier labs at quarter of what it was'. Moonshot valuation: $20B vs Anthropic $1T vs OpenAI ~$1T. Alex: 'what are American frontier labs doing with all their capital?' Anthropic sending smoke signals about Chinese distillation attacks.",
        "glosy": [
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "OpenAI valuation shrank 50% from regulation, another 50% from Kimi K3. Quarter of what it was.",
            "text_en": "OpenAI valuation shrank 50% from regulation, another 50% from Kimi K3. Quarter of what it was."
          }
        ],
        "wniosek_pl": "Frontier labs valuation <strong>spadła 75%</strong>. Open weight = commoditization. $20B Moonshot vs $1T OpenAI.",
        "wniosek_en": "Frontier labs valuation <strong>dropped 75%</strong>. Open weight = commoditization. $20B Moonshot vs $1T OpenAI.",
        "kontekst_pl": "Moonshot AI: $20B valuation. Anthropic: $1T. OpenAI: ~$1T. Kimi K3 = quarter of frontier value.",
        "kontekst_en": "Moonshot AI: $20B valuation. Anthropic: $1T. OpenAI: ~$1T. Kimi K3 = quarter of frontier value."
      },
      {
        "num": "07",
        "title": "Fable guardrails vs open source — ironia",
        "title_pl": "Fable guardrails vs open source — ironia",
        "title_en": "Fable guardrails vs open source — irony",
        "time": "35:00 – 37:00",
        "fakty_pl": "Anthropic quote: 'Fable is an agentic coding super weapon capable of developing cyber and bioweapons. We cannot in good faith release it.' Alex: 'we were so constrained because of guardrails and here's an open source equivalent of Fable.' Emad: 'frontier labs have 3 constraints: compute, open-source models as good as frontier, government regulation'. Ironia: Fable nerfed by guardrails, Kimi K3 = Fable level i open.",
        "fakty_en": "Anthropic quote: 'Fable is an agentic coding super weapon capable of developing cyber and bioweapons. We cannot in good faith release it.' Alex: 'we were so constrained because of guardrails and here's an open source equivalent of Fable.' Emad: 'frontier labs have 3 constraints: compute, open-source models as good as frontier, government regulation'. Irony: Fable nerfed by guardrails, Kimi K3 = Fable level and open.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "We were so constrained because of guardrails and here's an open source equivalent of Fable.",
            "text_en": "We were so constrained because of guardrails and here's an open source equivalent of Fable."
          }
        ],
        "wniosek_pl": "Guardrails <strong>bez sensu</strong> gdy open source = Fable level. Kimi K3 podważył wszystko.",
        "wniosek_en": "Guardrails <strong>meaningless</strong> when open source = Fable level. Kimi K3 undermined everything.",
        "kontekst_pl": "Anthropic: 'Fable to super weapon'. Kimi K3: open weight, Fable level, bez guardrails.",
        "kontekst_en": "Anthropic: 'Fable is super weapon'. Kimi K3: open weight, Fable level, no guardrails."
      },
      {
        "num": "03",
        "title": "US government vs Chinese open weight",
        "title_pl": "Rząd USA vs chiński open weight",
        "title_en": "US government vs Chinese open weight",
        "time": "37:00 – 52:00",
        "fakty_pl": "Peter: 'will US government constrain Chinese open models from being used in US?' Emad: 'if rational at White House — debating do we negotiate with China immediately'. Xi Jinping speech at World AI Conference Shanghai: 'fully back open source as public good for humanity'. China created regulatory body with Brazil, Asia, Africa. Emad: 'new belt and road is AI from China'. Dave: 'bizarre future where Chinese Communist Party is saving American capitalism from itself'. Nvidia embargo backfired — incentivized Chinese labs to develop own efficiencies.",
        "fakty_en": "Peter: 'will US government constrain Chinese open models from being used in US?' Emad: 'if rational at White House — debating do we negotiate with China immediately'. Xi Jinping speech at World AI Conference Shanghai: 'fully back open source as public good for humanity'. China created regulatory body with Brazil, Asia, Africa. Emad: 'new belt and road is AI from China'. Dave: 'bizarre future where Chinese Communist Party is saving American capitalism from itself'. Nvidia embargo backfired — incentivized Chinese labs to develop own efficiencies.",
        "glosy": [
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "Bizarre future where Chinese Communist Party is saving American capitalism from itself.",
            "text_en": "Bizarre future where Chinese Communist Party is saving American capitalism from itself."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Nvidia embargo only incentivized Chinese labs to develop own efficiencies sooner.",
            "text_en": "Nvidia embargo only incentivized Chinese labs to develop own efficiencies sooner."
          }
        ],
        "wniosek_pl": "US embargo <strong>backfired</strong>. China z open source = soft power. Nowy belt and road = AI.",
        "wniosek_en": "US embargo <strong>backfired</strong>. China with open source = soft power. New belt and road = AI.",
        "kontekst_pl": "Xi Jinping: open source jako public good for humanity. China regulatory body z Brazil/Africa/Asia.",
        "kontekst_en": "Xi Jinping: open source as public good for humanity. China regulatory body with Brazil/Africa/Asia."
      },
      {
        "num": "04",
        "title": "Yang Xilin — CMU PhD → Moonshot AI",
        "title_pl": "Yang Xilin — CMU PhD → Moonshot AI",
        "title_en": "Yang Xilin — CMU PhD → Moonshot AI",
        "time": "52:00 – 1:01:00",
        "fakty_pl": "Yang Xilin (CEO Moonshot AI) — PhD at CMU 2015-2019. Started Chinese AI startup (Recurrent AI) 1 year into PhD. Had offers from Google, Facebook, Huawei 2019 — went back to China because startup was there. Peter: 'PhD should get green card stapled to it'. Alex: 'story is not what it seems — he started company during Obama term, not Trump'. Dave: '80% of Chinese PhDs go back vs Indians overwhelmingly stay'. Emad: 'US massive asymmetric advantage becoming less true'.",
        "fakty_en": "Yang Xilin (CEO Moonshot AI) — PhD at CMU 2015-2019. Started Chinese AI startup (Recurrent AI) 1 year into PhD. Had offers from Google, Facebook, Huawei 2019 — went back to China because startup was there. Peter: 'PhD should get green card stapled to it'. Alex: 'story is not what it seems — he started company during Obama term, not Trump'. Dave: '80% of Chinese PhDs go back vs Indians overwhelmingly stay'. Emad: 'US massive asymmetric advantage becoming less true'.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "PhD should get green card stapled to it. Why are we sending brilliant people back home?",
            "text_en": "PhD should get green card stapled to it. Why are we sending brilliant people back home?"
          },
          {
            "host": "Emad Mostaque",
            "dot_color": "var(--hp)",
            "text_pl": "US massive asymmetric advantage becoming less true. People going back to China, India.",
            "text_en": "US massive asymmetric advantage becoming less true. People going back to China, India."
          }
        ],
        "wniosek_pl": "Brain drain <strong>reverses</strong>. 80% chińskich PhDs wraca. US traci talent.",
        "wniosek_en": "Brain drain <strong>reverses</strong>. 80% of Chinese PhDs go back. US loses talent.",
        "kontekst_pl": "Yang Xilin — CMU PhD, offers from Google/Facebook/Huawei, went back to China.",
        "kontekst_en": "Yang Xilin — CMU PhD, offers from Google/Facebook/Huawei, went back to China."
      },
      {
        "num": "05",
        "title": "Daily frontier models — exponential trend",
        "title_pl": "Codzienne modele frontier — trend eksponencjalny",
        "title_en": "Daily frontier models — exponential trend",
        "time": "1:01:00 – 1:08:00",
        "fakty_pl": "Peter: '13 new frontier models since mid-April — one every 10 days'. Alex: 'regressed exponential curve → daily frontier model releases by January'. Continuous versioning — nie point releases. Emad: 'we'll need daily Moonshots episodes about something other than point releases'. Civilization tech tree game analogy.",
        "fakty_en": "Peter: '13 new frontier models since mid-April — one every 10 days'. Alex: 'regressed exponential curve → daily frontier model releases by January'. Continuous versioning — not point releases. Emad: 'we'll need daily Moonshots episodes about something other than point releases'. Civilization tech tree game analogy.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "At present rate, daily frontier model releases by January. Continuous versioning.",
            "text_en": "At present rate, daily frontier model releases by January. Continuous versioning."
          }
        ],
        "wniosek_pl": "Frontier releases = <strong>eksponencjalny</strong>. Daily by January 2027. Continuous versioning = koniec point releases.",
        "wniosek_en": "Frontier releases = <strong>exponential</strong>. Daily by January 2027. Continuous versioning = end of point releases.",
        "kontekst_pl": "2025: 8 frontier releases/year. 2026: 13 in 3 months. Trend: daily by Jan 2027.",
        "kontekst_en": "2025: 8 frontier releases/year. 2026: 13 in 3 months. Trend: daily by Jan 2027."
      },
      {
        "num": "09",
        "title": "Na co uważać w przyszłym tygodniu",
        "title_pl": "Na co uważać w przyszłym tygodniu",
        "title_en": "What to watch next week",
        "time": "1:08:00 – 1:13:00",
        "fakty_pl": "Kimi K3 open weights do 27.07. US government response — constrain Chinese models? Anthropic distillation accusations. Exponential trend → daily releases. Continuous versioning.",
        "fakty_en": "Kimi K3 open weights by July 27. US government response — constrain Chinese models? Anthropic distillation accusations. Exponential trend → daily releases. Continuous versioning.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "W przyszłym tygodniu: 27.07 = Kimi K3 open weights. To turning point in all of history — AI capable of self-improvement dostępne w open source dla każdego.",
            "text_en": "Next week: July 27 = Kimi K3 open weights. This is the turning point in all of history — AI capable of self-improvement available in open source for everyone."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Watch także: Anthropic revenue plateau, regulatory pressure na chińskie modele, defensive co-scaling trend w frontier labs.",
            "text_en": "Watch also: Anthropic revenue plateau, regulatory pressure on Chinese models, defensive co-scaling trend in frontier labs."
          }
        ],
        "wniosek_pl": "Watch: <strong>open weights 27.07</strong>, US government response, exponential acceleration.",
        "wniosek_en": "Watch: <strong>open weights July 27</strong>, US government response, exponential acceleration.",
        "kontekst_pl": "Kimi K3 weights → anyone can fine-tune beyond frontier.",
        "kontekst_en": "Kimi K3 weights → anyone can fine-tune beyond frontier."
      },
      {
        "num": "08",
        "title": "Podsumowanie — extraordinary time to be alive",
        "title_pl": "Podsumowanie — extraordinary time to be alive",
        "title_en": "Summary — extraordinary time to be alive",
        "time": "1:13:00 – 1:14:00",
        "fakty_pl": "Peter: 'two options when you hear about Kimi K3: fear or extraordinary time to be alive'. Emad: 'frontier intelligence perishable, intelligence wants to be free'. Alex: 'daily frontier releases by January'. Dave: 'CCP saving American capitalism from itself'. Salim: 'intelligence wants to be free — fundamental law of nature'.",
        "fakty_en": "Peter: 'two options when you hear about Kimi K3: fear or extraordinary time to be alive'. Emad: 'frontier intelligence perishable, intelligence wants to be free'. Alex: 'daily frontier releases by January'. Dave: 'CCP saving American capitalism from itself'. Salim: 'intelligence wants to be free — fundamental law of nature'.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Two options: fear or extraordinary time to be alive.",
            "text_en": "Two options: fear or extraordinary time to be alive."
          }
        ],
        "wniosek_pl": "AI Sputnik moment. <strong>Intelligence wants to be free</strong>. Extraordinary time to be alive.",
        "wniosek_en": "AI Sputnik moment. <strong>Intelligence wants to be free</strong>. Extraordinary time to be alive.",
        "kontekst_pl": "Emergency pod z Emadem Mostaque. 5 gospodarzy.",
        "kontekst_en": "Emergency pod with Emad Mostaque. 5 hosts."
      }
    ]
  },
  {
    "num": "#271",
    "collapsed": true,
    "channel": "Diamandis Moonshots",
    "title": "Mira Murati's 975B Open Model, Ramin Hasani on Post-Transformer AI, and Demis' AI FINRA | EP #271",
    "title_pl": "Model 975B Miry Murati, Ramin Hasani o post-transformer AI, Demis i AI FINRA | #271",
    "title_en": "Mira Murati's 975B Open Model, Ramin Hasani on Post-Transformer AI, and Demis' AI FINRA | #271",
    "date": "2026-07-17",
    "duration": "2h35m",
    "yt": "bAoXVyibE6Q",
    "hosts_count_pl": "5 gospodarzy",
    "hosts_count_en": "5 hosts",
    "topics_count_pl": "9 tematów",
    "topics_count_en": "9 topics",
    "hosts": [
      {
        "name": "Peter Diamandis",
        "dot_color": "var(--hp)",
        "role_pl": "Glowny host. Abundance evangelist, Founder XPRIZE",
        "role_en": "Main host. Abundance evangelist, Founder XPRIZE",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dr. Alexander Wissner-Gross",
        "dot_color": "var(--hp)",
        "role_pl": "In-house ASI. Technical perspective. Founder Reified.",
        "role_en": "In-house ASI. Technical perspective. Founder Reified.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Dave Blundin",
        "dot_color": "var(--hp)",
        "role_pl": "Managing partner of Link Exponential Ventures. VC investor.",
        "role_en": "Managing partner of Link Exponential Ventures. VC investor.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Salim Ismail",
        "dot_color": "var(--hp)",
        "role_pl": "CEO of OpenExo. Exponential organizations.",
        "role_en": "CEO of OpenExo. Exponential organizations.",
        "is_guest": false,
        "is_absent": false
      },
      {
        "name": "Ramin Hasani",
        "dot_color": "var(--hp)",
        "role_pl": "Guest. Liquid AI co-founder. Post-transformer architecture researcher.",
        "role_en": "Guest. Liquid AI co-founder. Post-transformer architecture researcher.",
        "is_guest": true,
        "is_absent": false
      }
    ],
    "topics": [
      {
        "num": "01",
        "title_pl": "Demis Hassabis i AI FINRA — regulacja frontier AI",
        "title_en": "Demis Hassabis and AI FINRA — frontier AI regulation",
        "time": "00:00 – 25:00",
        "fakty_pl": "Demis Hassabis (CEO DeepMind) wezwal do utworzenia US-led frontier AI standards body modelowanego na FINRA. Sam Altman wczesniej opublikowal op-ed w Financial Times z podobna propozycja. Alex: 'to regulatory capture — Demis probuje utworzyc kartel frontier labs'. Elon (klip z 3 lata temu): 'prawdopodobnie bedzie AI regulatory agency podobna do FAA/FCC'. Problem: gdy incumbenci ustalaja zasady, tworza barrier dla nowych labow. Ramin (Liquid AI): regulacja musi byc capability-based, ale horizon problem — regulacja reaguje wolniej niz AI sie rozwija. Dave: FINRA analogy ma nogi, ale roznice wieksze niz podobienstwa.",
        "fakty_en": "Demis Hassabis (CEO DeepMind) called for US-led frontier AI standards body modeled on FINRA. Sam Altman previously published op-ed in Financial Times with similar proposal. Alex: 'this is regulatory capture — Demis is trying to form a cartel of frontier labs'. Elon (clip from 3 years ago): 'there will probably be an AI regulatory agency similar to FAA/FCC'. Problem: when incumbents set rules, they create barriers for new labs. Ramin (Liquid AI): regulation must be capability-based, but horizon problem — regulation reacts slower than AI develops. Dave: FINRA analogy has legs, but differences bigger than similarities.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "To regulatory capture. Demis probuje utworzyc kartel frontier labs. W hypercompetitive landscape to budowanie moatu.",
            "text_en": "This is regulatory capture. Demis is trying to form a cartel of frontier labs. In a hypercompetitive landscape this is building a moat."
          },
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "FINRA analogy ma nogi, ale roznice wieksze niz podobienstwa. Nie mozesz wyciagnac ludzi z startupu na rok.",
            "text_en": "FINRA analogy has legs, but differences bigger than similarities. You can't pull people out of a startup for a year."
          },
          {
            "host": "Ramin Hasani",
            "dot_color": "var(--hp)",
            "text_pl": "Regulacja musi byc capability-based. Horizon problem — regulacja reaguje wolniej niz AI sie rozwija.",
            "text_en": "Regulation must be capability-based. Horizon problem — regulation reacts slower than AI develops."
          }
        ],
        "wniosek_pl": "AI regulacja to <strong>50/50 regulatory capture vs safety</strong>. Incumbenci tworza moat, ale non-state actors i tak ignora zasady.",
        "wniosek_en": "AI regulation is <strong>50/50 regulatory capture vs safety</strong>. Incumbents build moats, but non-state actors ignore rules anyway.",
        "kontekst_pl": "Sam Altman (Financial Times op-ed) + Demis Hassabis (essay 'A Framework for Frontier AI') — obaj wezwa do regulacji w tym samym tygodniu.",
        "kontekst_en": "Sam Altman (Financial Times op-ed) + Demis Hassabis (essay 'A Framework for Frontier AI') — both called for regulation in the same week.",
        "title": "Demis Hassabis i AI FINRA — regulacja frontier AI"
      },
      {
        "num": "08",
        "title_pl": "Kimi K3 — open weight 2.8T z Chin",
        "title_en": "Kimi K3 — 2.8T open weight from China",
        "time": "25:00 – 30:00",
        "fakty_pl": "Kimi K3 (Moonshot AI) — 2.8T parametrów, open weight. Na poziomie Claude Fable w niektorych rankingach. $3/$15 per M tok. Z Chin. Lev Selector omawial w tym samym tygodniu. AI Search zrobil pelny review. Najtanszy frontier model.",
        "fakty_en": "Kimi K3 (Moonshot AI) — 2.8T params, open weight. Claude Fable level in some rankings. $3/$15 per M tok. From China. Lev Selector discussed same week. AI Search did full review. Cheapest frontier model.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Kimi K3 z Chin — open weight, Fable level. To pokazuje ze China nie potrzebuje Nvidii ani closed labs.",
            "text_en": "Kimi K3 from China — open weight, Fable level. This shows China doesn't need Nvidia or closed labs."
          }
        ],
        "wniosek_pl": "Kimi K3 = <strong>China догоняет frontier</strong> z open weight. 2.8T params, Fable level, najtanszy.",
        "wniosek_en": "Kimi K3 = <strong>China catching up to frontier</strong> with open weight. 2.8T params, Fable level, cheapest.",
        "kontekst_pl": "Patrz rowniez: AI Search review (Kimi K3 midweek), Lev Selector weekly (17.07).",
        "kontekst_en": "See also: AI Search review (Kimi K3 midweek), Lev Selector weekly (July 17).",
        "title": "Kimi K3 — open weight 2.8T z Chin"
      },
      {
        "num": "05",
        "title_pl": "China — open ecosystems always win",
        "title_en": "China — open ecosystems always win",
        "time": "30:00 – 35:00",
        "fakty_pl": "Peter: 'open ecosystems always win throughout history'. US historical strength = open ecosystems. Alex: 'US response is to define permissible ceiling rather than a wall — tying open release ceiling to China's pace'. Perverse incentive: let China win race to greater super intelligence so Western labs can escape regulation. Worst case: best Western researchers move to China. China experiencing biotech boom — could happen in AI. Alex: 'how do we even define capabilities? Worry about regulatory capture of labs themselves'.",
        "fakty_en": "Peter: 'open ecosystems always win throughout history'. US historical strength = open ecosystems. Alex: 'US response is to define permissible ceiling rather than a wall — tying open release ceiling to China's pace'. Perverse incentive: let China win race to greater super intelligence so Western labs can escape regulation. Worst case: best Western researchers move to China. China experiencing biotech boom — could happen in AI. Alex: 'how do we even define capabilities? Worry about regulatory capture of labs themselves'.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Open ecosystems always win throughout history. US strength = open ecosystems.",
            "text_en": "Open ecosystems always win throughout history. US strength = open ecosystems."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Perverse incentive: let China win race to greater SI so Western labs escape regulation. Worst case: best researchers move to China.",
            "text_en": "Perverse incentive: let China win race to greater SI so Western labs escape regulation. Worst case: best researchers move to China."
          }
        ],
        "wniosek_pl": "Regulacja AI = <strong>ryzyko dla USA</strong>. China z open ecosystem moze wygrac. Perverse incentive do puszczenia China вперед.",
        "wniosek_en": "AI regulation = <strong>risk for USA</strong>. China with open ecosystem can win. Perverse incentive to let China advance.",
        "kontekst_pl": "China biotech boom — podobny pattern moze sie powtorzyc w AI.",
        "kontekst_en": "China biotech boom — similar pattern could repeat in AI.",
        "title": "China — open ecosystems always win"
      },
      {
        "num": "02",
        "title_pl": "Mira Murati — Thinking Machines Inkling 975B open weight",
        "title_en": "Mira Murati — Thinking Machines Inkling 975B open weight",
        "time": "35:00 – 50:00",
        "fakty_pl": "Mira Murati (byly CTO OpenAI) wydana pierwszy model — Inkling. 975B MoE (41B active), 1M context. Open weight — download, fine-tune, run on-prem. Alex: 'slabszy niz GLM 5.2 ktory jest najsilniejszym chińskim open weight'. Ramin: 'model layer nie jest juz miejscem gdzie mozna extract value jesli nie hit frontier'. Customization over leaderboard dominance — Mira stawia na fine-tuning, nie benchmarki. Reinforcement fine-tuning jako nowy paradigm. Dave: 'ludzie chca fine-tune open weight models on their own hardware'.",
        "fakty_en": "Mira Murati (former OpenAI CTO) released first model — Inkling. 975B MoE (41B active), 1M context. Open weight — download, fine-tune, run on-prem. Alex: 'weaker than GLM 5.2 which is the strongest Chinese open weight'. Ramin: 'model layer is no longer where you can extract value if you don't hit frontier'. Customization over leaderboard dominance — Mira bets on fine-tuning, not benchmarks. Reinforcement fine-tuning as new paradigm. Dave: 'people want to fine-tune open weight models on their own hardware'.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Mira wydana dokladnie to czego rynek potrzebuje. Customization over leaderboard dominance.",
            "text_en": "Mira shipped exactly what the market needs. Customization over leaderboard dominance."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Slabszy niz GLM 5.2. Nie jest najsilniejszym open weight modelem ogolnie.",
            "text_en": "Weaker than GLM 5.2. Not the strongest open weight model overall."
          },
          {
            "host": "Ramin Hasani",
            "dot_color": "var(--hp)",
            "text_pl": "Model layer nie jest juz miejscem gdzie mozna extract value jesli nie hit frontier.",
            "text_en": "Model layer is no longer where you can extract value if you don't hit frontier."
          }
        ],
        "wniosek_pl": "Inkling = <strong>customization play</strong>, nie frontier play. Mira stawia na fine-tuning + on-prem, nie benchmark dominance.",
        "wniosek_en": "Inkling = <strong>customization play</strong>, not frontier play. Mira bets on fine-tuning + on-prem, not benchmark dominance.",
        "kontekst_pl": "Thinking Machines Lab — startup Miry Murati, miliardy dolarow funding. Inkling wydany 16.07.2026.",
        "kontekst_en": "Thinking Machines Lab — Mira Murati's startup, billions in funding. Inkling released July 16, 2026.",
        "title": "Mira Murati — Thinking Machines Inkling 975B open weight"
      },
      {
        "num": "06",
        "title_pl": "Fine-tuning paradigm — reinforcement fine-tuning jako nowy standard",
        "title_en": "Fine-tuning paradigm — reinforcement fine-tuning as new standard",
        "time": "50:00 – 1:00:00",
        "fakty_pl": "Dave: 'fine-tuning didn't historically increase capabilities, but reinforcement fine-tuning changed that'. People want fine-tuned open weight models on their own hardware. Alex: 'reinforcement fine-tuning — for first time via labeled examples you can increase capabilities'. Dave: 'we've been fine-tuning Qwen all week — huge unlock to bring model in-house with local data'. Ramin: 'model layer not anymore where you extract value if not hitting frontier'. OpenAI started open source → went closed → big revenue. Meta was leader of open → now competing with frontier.",
        "fakty_en": "Dave: 'fine-tuning didn't historically increase capabilities, but reinforcement fine-tuning changed that'. People want fine-tuned open weight models on their own hardware. Alex: 'reinforcement fine-tuning — for first time via labeled examples you can increase capabilities'. Dave: 'we've been fine-tuning Qwen all week — huge unlock to bring model in-house with local data'. Ramin: 'model layer not anymore where you extract value if not hitting frontier'. OpenAI started open source → went closed → big revenue. Meta was leader of open → now competing with frontier.",
        "glosy": [
          {
            "host": "Dave Blundin",
            "dot_color": "var(--hp)",
            "text_pl": "Fine-tuning historycznie nie zwiekszal capabilities. Reinforcement fine-tuning to zmienilo. Fine-tuning Qwen all week — huge unlock.",
            "text_en": "Fine-tuning historically didn't increase capabilities. Reinforcement fine-tuning changed that. Fine-tuning Qwen all week — huge unlock."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Reinforcement fine-tuning — po raz pierwszy via labeled examples mozna zwiekszyc capabilities.",
            "text_en": "Reinforcement fine-tuning — for the first time via labeled examples you can increase capabilities."
          }
        ],
        "wniosek_pl": "Reinforcement fine-tuning = <strong>nowy paradigm</strong>. Open weight models + local data + on-prem = huge unlock dla enterprise.",
        "wniosek_en": "Reinforcement fine-tuning = <strong>new paradigm</strong>. Open weight models + local data + on-prem = huge unlock for enterprise.",
        "kontekst_pl": "OpenAI: open source → closed → big revenue. Meta: open leader → frontier competitor.",
        "kontekst_en": "OpenAI: open source → closed → big revenue. Meta: open leader → frontier competitor.",
        "title": "Fine-tuning paradigm — reinforcement fine-tuning jako nowy standard"
      },
      {
        "num": "03",
        "title_pl": "Ramin Hasani — Liquid AI i post-transformer architektury",
        "title_en": "Ramin Hasani — Liquid AI and post-transformer architectures",
        "time": "1:00:00 – 1:15:00",
        "fakty_pl": "Ramin Hasani (Liquid AI co-founder) gosc episode. Liquid AI = small language models, post-transformer architecture. Specialized models per vertical (finance, e-commerce, biotech). Ramin: 'enterprise applications sa verticalized — budujemy specialized models per vertical'. Liquid AI ma conversations z financial services, e-commerce, biotech. Stochastic games / game theory approach do policy design. Ramin: 'regulacja musi byc adaptive, API-based, driven by benchmarks'. Alex: 'potrzebujemy real-time audits i open evaluation suites'.",
        "fakty_en": "Ramin Hasani (Liquid AI co-founder) guest on episode. Liquid AI = small language models, post-transformer architecture. Specialized models per vertical (finance, e-commerce, biotech). Ramin: 'enterprise applications are verticalized — we build specialized models per vertical'. Liquid AI has conversations with financial services, e-commerce, biotech. Stochastic games / game theory approach to policy design. Ramin: 'regulation must be adaptive, API-based, driven by benchmarks'. Alex: 'we need real-time audits and open evaluation suites'.",
        "glosy": [
          {
            "host": "Ramin Hasani",
            "dot_color": "var(--hp)",
            "text_pl": "Enterprise applications sa verticalized. Budujemy specialized models per vertical — finance, e-commerce, biotech.",
            "text_en": "Enterprise applications are verticalized. We build specialized models per vertical — finance, e-commerce, biotech."
          },
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Potrzebujemy real-time audits i open evaluation suites. Inaczej political gatekeeping.",
            "text_en": "We need real-time audits and open evaluation suites. Otherwise political gatekeeping."
          }
        ],
        "wniosek_pl": "Liquid AI = <strong>post-transformer + vertical specialization</strong>. Nie frontier, ale specialized models dla enterprise.",
        "wniosek_en": "Liquid AI = <strong>post-transformer + vertical specialization</strong>. Not frontier, but specialized models for enterprise.",
        "kontekst_pl": "Ramin Hasani — Austrian-Persian, Liquid AI co-founder. Post-transformer architectures (Liquid Neural Networks).",
        "kontekst_en": "Ramin Hasani — Austrian-Persian, Liquid AI co-founder. Post-transformer architectures (Liquid Neural Networks).",
        "title": "Ramin Hasani — Liquid AI i post-transformer architektury"
      },
      {
        "num": "07",
        "title_pl": "Defensive co-scaling — alignment przez scaling",
        "title_en": "Defensive co-scaling — alignment through scaling",
        "time": "1:15:00 – 1:25:00",
        "fakty_pl": "Alex: 'defensive co-scaling — borrowed from human alignment. Rather than hoping for great man theory of alignment, scale together'. Focus next 14 years on alignment research — Peter: 'backfire because every alignment capability is actually new capability'. Ramin: 'behavior of models always in system prompt — changes because fundamental reasons this is actually limited'. Liquid AI published paper 3 years ago on this. Pre-ignition event — level one rather than level two.",
        "fakty_en": "Alex: 'defensive co-scaling — borrowed from human alignment. Rather than hoping for great man theory of alignment, scale together'. Focus next 14 years on alignment research — Peter: 'backfire because every alignment capability is actually new capability'. Ramin: 'behavior of models always in system prompt — changes because fundamental reasons this is actually limited'. Liquid AI published paper 3 years ago on this. Pre-ignition event — level one rather than level two.",
        "glosy": [
          {
            "host": "Dr. Alexander Wissner-Gross",
            "dot_color": "var(--hp)",
            "text_pl": "Defensive co-scaling — alignment through scaling, nie great man theory. Scale together.",
            "text_en": "Defensive co-scaling — alignment through scaling, not great man theory. Scale together."
          },
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Focus next 14 years on alignment research backfire — every alignment capability is actually new capability.",
            "text_en": "Focus next 14 years on alignment research backfires — every alignment capability is actually new capability."
          }
        ],
        "wniosek_pl": "Defensive co-scaling = <strong>alignment przez scale, nie przez great man</strong>. Pre-ignition event — level one.",
        "wniosek_en": "Defensive co-scaling = <strong>alignment through scale, not through great man</strong>. Pre-ignition event — level one.",
        "kontekst_pl": "Liquid AI opublikowal paper 3 lata temu o recursive self-improvement.",
        "kontekst_en": "Liquid AI published paper 3 years ago on recursive self-improvement.",
        "title": "Defensive co-scaling — alignment przez scaling"
      },
      {
        "num": "04",
        "title_pl": "Recursive self-improvement — czy ASI sie zbiza?",
        "title_en": "Recursive self-improvement — is ASI approaching?",
        "time": "1:25:00 – 1:40:00",
        "fakty_pl": "Peter: 'to najwazniejszy moment w historii ludzkosci'. Recursive self-improvement = AI makes itself smarter, then uses smarter AI to create next gen. OpenAI potwierdzilo ze GPT 5.6 Soul byl uzyty do post-train Luna. Anthropic dzielil sie testami recursive self-improvement. Ramin: 'early evidence of recursive self-improvement w Mythos-level models'. Alex: 'defensive co-scaling — alignment through scaling, nie great man theory'. Ramin: 'about three years ago we published a paper ourselves on this'. Od 10 years to 10 million years — learning to recursive evolution.",
        "fakty_en": "Peter: 'this is the most important moment in human history'. Recursive self-improvement = AI makes itself smarter, then uses smarter AI to create next gen. OpenAI confirmed GPT 5.6 Soul was used to post-train Luna. Anthropic shared tests of recursive self-improvement. Ramin: 'early evidence of recursive self-improvement in Mythos-level models'. Alex: 'defensive co-scaling — alignment through scaling, not great man theory'. Ramin: 'about three years ago we published a paper ourselves on this'. From 10 years to 10 million years — learning to recursive evolution.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "To najwazniejszy moment w historii ludzkosci. Recursive self-improvement to engine hard takeoff.",
            "text_en": "This is the most important moment in human history. Recursive self-improvement is the engine of hard takeoff."
          },
          {
            "host": "Ramin Hasani",
            "dot_color": "var(--hp)",
            "text_pl": "Early evidence of recursive self-improvement w Mythos-level models. Ale to self-reported data, nie confirmed independently.",
            "text_en": "Early evidence of recursive self-improvement in Mythos-level models. But this is self-reported data, not independently confirmed."
          }
        ],
        "wniosek_pl": "Recursive self-improvement <strong>pre-ignition event</strong>. OpenAI i Anthropic potwierdzili — ale self-reported.",
        "wniosek_en": "Recursive self-improvement <strong>pre-ignition event</strong>. OpenAI and Anthropic confirmed — but self-reported.",
        "kontekst_pl": "GPT 5.6 Soul post-trains Luna (OpenAI potwierdzilo). Anthropic dzielil sie recursive self-improvement tests.",
        "kontekst_en": "GPT 5.6 Soul post-trains Luna (OpenAI confirmed). Anthropic shared recursive self-improvement tests.",
        "title": "Recursive self-improvement — czy ASI sie zbiza?"
      },
      {
        "num": "09",
        "title_pl": "Podsumowanie — singularity accelerating",
        "title_en": "Summary — singularity accelerating",
        "time": "1:40:00 – 2:30:00",
        "fakty_pl": "Peter: 'singularity accelerating — recursive self-improvement pre-ignition'. 4 amerykanskie laby na frontier + 2 chinskie. Open weight vs closed — open ecosystems always win. Regulation = regulatory capture risk. Mira Murati customization play. Liquid AI vertical specialization. Kimi K3 — China догоняет. Najwazniejszy moment w historii ludzkosci.",
        "fakty_en": "Peter: 'singularity accelerating — recursive self-improvement pre-ignition'. 4 American labs at frontier + 2 Chinese. Open weight vs closed — open ecosystems always win. Regulation = regulatory capture risk. Mira Murati customization play. Liquid AI vertical specialization. Kimi K3 — China catching up. Most important moment in human history.",
        "glosy": [
          {
            "host": "Peter Diamandis",
            "dot_color": "var(--hp)",
            "text_pl": "Singularity accelerating. Recursive self-improvement pre-ignition. Najwazniejszy moment w historii ludzkosci.",
            "text_en": "Singularity accelerating. Recursive self-improvement pre-ignition. Most important moment in human history."
          }
        ],
        "wniosek_pl": "Singularity <strong>accelerating</strong>. Pre-ignition event. Open weight + recursive self-improvement = exponential.",
        "wniosek_en": "Singularity <strong>accelerating</strong>. Pre-ignition event. Open weight + recursive self-improvement = exponential.",
        "kontekst_pl": "Odcinek #271 z gosciem Raminem Hasani (Liquid AI). 5 gospodarzy.",
        "kontekst_en": "Episode #271 with guest Ramin Hasani (Liquid AI). 5 hosts.",
        "title": "Podsumowanie — singularity accelerating"
      }
    ]
  }
];
