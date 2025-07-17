/*
  Developed by Janni (Ioannis Toptsis).
  You can find the website's source code on his GitHub,
  available under https://github.janni.fun
*/

// Sections
const sections = [
    document.getElementById('hub'),
    document.getElementById('section1'),
    document.getElementById('section2'),
    document.getElementById('section3'),
    document.getElementById('section4')
];

let currentIndex = 0;
let isScrolling = false;

function updateActiveSidebar() {
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('active');
    });
    if (currentIndex > 0) {
        const activeLink = document.querySelector(`.sidebar a[data-index="${currentIndex}"]`);
        if (activeLink) activeLink.classList.add('active');
    }
}

function toggleSidebar() {
    if (currentIndex > 0) {
        document.body.classList.add('show-sidebar');
    } else {
        document.body.classList.remove('show-sidebar');
    }
}

function scrollToIndex(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentIndex = index;
    updateActiveSidebar();
    toggleSidebar();
    setTimeout(() => { isScrolling = false; }, 1000);
}

window.addEventListener('wheel', e => {
    if (isScrolling) return;
    if (e.deltaY > 0) {
        scrollToIndex(currentIndex + 1);
    } else if (e.deltaY < 0) {
        scrollToIndex(currentIndex - 1);
    }
    e.preventDefault();
}, { passive: false });

document.querySelectorAll('.card, .sidebar a').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        const idx = parseInt(el.dataset.index);
        scrollToIndex(idx);
    });
});

scrollToIndex(0);

// Language
const translations = {
  en: {
    hubTitle: "Welcome to the HUB",
    hubSubtitle: "This is Janni’s portfolio, a curated collection of his current and past projects, along with background information and insights.",
    hubWarning: "🚧 This website is still under development 🚧",
    cardAboutTitle: "📄 About Me 📄",
    cardAboutText: "Here you’ll find information about Janni, who he is, why this website exists, and what he wants to achieve.",
    cardServerTitle: "🟩 Server Status 🟩",
    cardServerText: "View real-time information about the operational status, uptime, and performance of all currently running servers managed.",
    cardProjectsTitle: "♟️ Projects ♟️",
    cardProjectsText: "EternalCore (Minecraft Anarchy Survival), Pudding Clicker (Game), and other projects that are either ongoing or completed.",
    cardLinksTitle: "🌍 Links 🌍",
    cardLinksText: "Here you’ll find all the links to social media platforms and the Discord server.",
    hubSide: "HUB",
    aboutSide: "About Me",
    serverstatusSide: "Server Status",
    projectsSide: "Projects",
    linksSide: "Links",
    aboutMeTitle: "About Me",
    whoIsJanniTitle: "Who is Janni?",
    whoIsJanniText1: "My name is Janni, legally Ioannis Toptsis. I'm a passionate developer on a continuous journey to deepen my knowledge and skills, and a gamer from Hessen, Germany. From an early age, I found a safe haven in technology, a place where I could truly be myself. What began with video games quickly evolved into a deep interest in the systems behind them.",
    whoIsJanniText2: "Even in my youth, I built my own servers and wrote my first lines of code in Lua, Java, and later C# and JavaScript, mostly without formal instruction, driven purely by curiosity and the joy of creating. Whether it was Minecraft plugins, scripts for GTA multiplayer mods, or entire roleplay servers: every project was a new challenge, but above all, a learning experience.",
    whoIsJanniText3: "My projects were never created alone, many of them were built together with longtime friends I've grown close to over the years. Today, I use my portfolio not only to showcase my work but also to bring structure to my ideas and projects.",
    whoIsJanniText4: "At the heart of everything I do is the same motivation as back then: a passion for technology and the drive to learn about the things that truly interest me.",
    myJourneyTitle: "My Journey",
    myJourneyText1: "I was born on May 30, 2002, in Offenbach am Main and have lived a life marked by psychological challenges. From an early age, I searched for a place where I could feel safe and free. I found that place in technology. Computers, games, scripting, and programming became the space where I could truly be who I wanted to be.",
    myJourneyText2: "I played my first video game at the age of seven; as far as I can remember, it was Call of Duty: World at War. Year after year, I followed each new Call of Duty release on the PlayStation 3. Looking back, I wish I had been a “Nintendo kid.” Today, I love Nintendo and am making up for lost time. From today’s perspective, the PlayStation is actually my “least favorite console.” Still, I owned almost every generation: PS1, PS2, PSP, PS3, PS4, as well as the original Xbox and Xbox 360. But in hindsight, my absolute favorite was the original Xbox.",
    myJourneyText3: "Around 2013, my fascination with PCs began, marking a deeper dive into technology and software. The game that had a lasting impact on me was GTA: San Andreas. It was the starting point for real friendships that still last today. Inspired by Gronkh, I started my first YouTube channel back then. My first Let’s Plays were recorded directly from the screen using a basic touchscreen phone, very rudimentary. A school friend then introduced me to the multiplayer modification MTA (Multi Theft Auto) for GTA: San Andreas. That was the beginning of a very special time.",
    myJourneyText4: "Through the Energy Reallife server, I met my first online friends. I became curious about how the technology behind the game mode worked, so I started exploring an open-source script called Vio-Lite on my own. That was my entry into Lua scripting. Later, together with my first online friend Chris, I set up our own MTA server. For that, we bought a ready-made Reallife script called LoSa from a seller named Shady. The script had legendary status for us, a modern look, clean folder structure, and an incredible faction system for its time. When we acquired it, we toasted with milk that evening, a moment I will never forget.",
    myJourneyText5: "Of course, not everything went smoothly. The journey was bumpy, full of setbacks, but also packed with learning moments. Although the server soon went offline, we kept starting new attempts, often with new friends we met along the way. We were young, enthusiastic, and full of ideas.",
    myJourneyText6: "Through another contact from Energy Reallife, I happened to meet other people who were running a local Minecraft server via Hamachi at the time. That gave me the idea to rent my own Minecraft server through Nitrado. I regularly asked my mother for a Paysafecard to finance the server. I had taken over the map from my friends, and once again, my curiosity grew about whether I could implement cool features here too, like with MTA.",
    myJourneyText7: "So, I taught myself Java and programmed my first plugin: a scoreboard that displayed how many times a player had died. I was incredibly proud of it and showed it to all my friends. Their enthusiasm became my motivation to keep going. That’s how our server “Greentown” came to be, limited to our circle of friends, but everyone had a lot of fun with it.",
    myJourneyText8: "At the same time, I restarted my YouTube channel, this time with the goal of exciting smaller YouTubers about “Greentown.” Through this, I met another person who had a strong impact on my life. I also launched my first Minecraft network: byPrefix.net, heavily inspired by GommeHD.net. I experimented with BungeeCord, the technology behind it fascinated me deeply. Although the project ended after about two years and never had many users, that didn’t matter to me. For me, it was a valuable learning experience. Even though others called it a “failure,” it was an important learning project on my journey to what I do today with Janni.fun. This phase played a major role in my decision to become an IT specialist in application development.",
    myJourneyText9: "After that, there was a quieter period. I focused more on gaming and only worked on smaller side projects. Then I discovered GT-MP, the first multiplayer modification for GTA V. Immediately, that old MTA feeling was back. Chris and I checked out the German RP server GVMP right away, which back then didn’t even have character creation or voice chat. For us, that was normal; nowadays, it’s hard to imagine. Unfortunately, I didn’t yet have the knowledge to write my own scripts for GT-MP, especially since C++ was too complex for me. So, for the time being, I stayed a player, also on platforms like RageMP, altV, and later FiveM.",
    myJourneyText10: "With FiveM came a great opportunity: Lua support and a community providing many open-source resources. I used the ESX framework and developed my first own GTA RP server on it. The project was well-structured and modern, with high standards influenced by the LoSa script, which still shapes me today. Unfortunately, there weren’t enough active players to enable real roleplay. Later, I invested in the paid altV script “Valea,” my first real project with C# and JavaScript. I learned an incredible amount from this script and began customizing it according to my vision. The result was my own, revised RP server on altV.",
    myJourneyText11: "I was never alone in any of my projects. Chris has been my closest partner from the very beginning, whether in programming, designing, or managing projects together. I am endlessly grateful to him for that. In recent years, I have also had support from friends like Dustin and Leon, whom I met through the server myLife. We remain close friends to this day.",
    myJourneyText12: "The most recent projects went better than many before, but in hindsight, much was chaotic, unorganized, and often overly ambitious. There were too many fresh starts and too many loose ends. However, all these experiences led to a clear goal: I want to bring order to my projects. That’s exactly why this website exists.",
    myJourneyText13: "It is not just my portfolio, but the starting point for everything to come: structured, thoughtful, and with a clear vision.",
    whatIsTitle: "What is Janni.fun?",
    whatIsText1: "Janni.fun is my digital playground. Here, I gather everything I’ve developed or experimented with over time, from ongoing projects to completed ideas, as well as open-source projects I’ve published. The site serves as a portfolio, an overview of my hobby, and a place where I can test new things, showcase them, and make them accessible to others.",
    whatIsText2: "Additionally, Janni.fun is a central hub for my game servers and other servers. If you’re playing on one of my servers, you’ll find the main access points here. There’s also a central account system that lets you log in to my various projects and manage your account.",
    whatIsText3: "Janni.fun is more than just a website; it’s the place where I bring together my digital projects, try out new ideas, and make everything accessible in one spot for you (and me).",
    serverStatusTitle: "Server Status",
    projectsTitle: "Projects",
    projectsClick: "Projects with a folder icon are clickable.",
    projectsText: "This section is displayed in English only.",
    linksTitle: "Links",
    linksText: "Under Development."
  },
  de: {
    hubTitle: "Willkommen im HUB",
    hubSubtitle: "Dies ist Janni’s Portfolio, eine kuratierte Sammlung seiner aktuellen und vergangenen Projekte sowie Hintergrundinformationen und Einblicke.",
    hubWarning: "🚧 Diese Webseite ist noch in Entwicklung 🚧",
    cardAboutTitle: "📄 Über mich 📄",
    cardAboutText: "Hier findest du Informationen über Janni, wer er ist, warum diese Webseite existiert und was er erreichen möchte.",
    cardServerTitle: "🟩 Serverstatus 🟩",
    cardServerText: "Echtzeitinformationen über den Betriebsstatus, die Verfügbarkeit und Leistung aller aktuell betriebenen Server.",
    cardProjectsTitle: "♟️ Projekte ♟️",
    cardProjectsText: "EternalCore (Minecraft Anarchy Survival), Pudding Clicker (Game) und andere Projekte, die entweder laufen oder abgeschlossen sind.",
    cardLinksTitle: "🌍 Links 🌍",
    cardLinksText: "Hier findest du alle Links zu sozialen Medien und dem Discord-Server.",
    hubSide: "HUB",
    aboutSide: "Über mich",
    serverstatusSide: "Serverstatus",
    projectsSide: "Projekte",
    linksSide: "Links",
    aboutMeTitle: "Über mich",
    whoIsJanniTitle: "Wer ist Janni",
    whoIsJanniText1: "Mein Name ist Janni, bürgerlich Ioannis Toptsis, ich bin ein begeisterter Entwickler auf dem Weg, mein Wissen und Können stetig zu vertiefen, und ein Gamer aus Hessen. Schon früh fand ich in der Technik einen sicheren Hafen, ein Ort, an dem ich ganz ich selbst sein konnte. Was mit Videospielen begann, entwickelte sich schnell zu einem tiefen Interesse für die Systeme dahinter.",
    whoIsJanniText2: "Bereits in meiner Jugend baute ich eigene Server, schrieb erste Zeilen Code in Lua, Java und später C# & JavaScript, meist ohne formale Anleitung, sondern aus reiner Neugier und Freude am Machen. Ob Minecraft-Plugins, Scripts für GTA-Multiplayer-Mods oder komplette Roleplay-Server: Jedes Projekt war für mich eine neue Herausforderung, aber vor allem ein Lernprozess.",
    whoIsJanniText3: "Meine Projekte entstanden nie allein, viele davon gemeinsam mit langjährigen Freunden, mit denen ich über die Jahre zusammengewachsen bin. Heute nutze ich mein Portfolio nicht nur, um meine Arbeit zu präsentieren, sondern auch, um Ordnung in meine Ideen und Projekte zu bringen.",
    whoIsJanniText4: "Der Kern von allem, was ich tue, ist dieselbe Motivation wie damals: Spaß an Technik und das Ziel Wissen anzueignen welches mich interessiert.",
    myJourneyTitle: "Mein Weg zur Technik",
    myJourneyText1: "Ich wurde am 30. Mai 2002 in Offenbach am Main geboren und habe ein psychisch herausforderndes Leben geführt. Schon früh suchte ich nach einem Ort, an dem ich mich sicher und frei fühlen konnte. Diesen Ort fand ich in der Technik. Computer, Spiele, Scripting und Programmierung, dort konnte ich sein, wer ich sein wollte.",
    myJourneyText2: "Bereits mit sieben Jahren spielte ich mein erstes Videospiel, soweit ich mich erinnern kann, war es Call of Duty: World at War. Jahr für Jahr folgte das jeweils neueste Call of Duty auf der PlayStation 3. Rückblickend wünschte ich mir, ich wäre ein „Nintendo-Kind“ gewesen, heute liebe ich Nintendo und hole vieles davon nach. Aus heutiger Sicht ist tatsächlich die PlayStation meine „Hass-Konsole“. Trotzdem besaß ich fast alle Generationen: PS1, PS2, PSP, PS3, PS4, außerdem die erste Xbox sowie die Xbox 360. Mein absoluter Favorit war aber rückblickend die erste Xbox.",
    myJourneyText3: "Etwa ab 2013 begann meine Faszination für den PC, und damit auch mein tiefer Einstieg in Technik und Software. Das Spiel, das mich besonders geprägt hat, war GTA: San Andreas. Es war der Startpunkt für echte Freundschaften, die bis heute bestehen. Inspiriert von Gronkh startete ich damals meinen ersten YouTube-Kanal. Meine ersten Let’s Plays nahm ich mit einem ersten Touch-Handy direkt vom Bildschirm auf, alles ganz rudimentär. Ein Schulfreund brachte mich dann auf die Multiplayer-Modifikation MTA (Multi Theft Auto) für GTA: San Andreas. Das war der Beginn einer ganz besonderen Zeit.",
    myJourneyText4: "Durch den Server Energy Reallife lernte ich meine ersten Internetfreunde kennen. Ich wurde neugierig, wie die Technik hinter dem Spielmodus funktionierte, also begann ich, mich privat mit einem Open Source Script namens Vio-Lite auseinanderzusetzen. Das war mein Einstieg ins Lua-Scripting. Später baute ich gemeinsam mit meinem ersten Internetfreund Chris einen eigenen MTA-Server auf. Dafür kauften wir ein vorgefertigtes Reallife-Script namens LoSa von einem Verkäufer namens Shady. Das Script hatte für uns legendären Status, moderner Look, saubere Ordnerstruktur und ein unglaubliches Fraktionssystem für damalige Zeiten. Als wir es erworben hatten, stießen wir abends mit Milch darauf an, ein Moment, den ich nie vergessen werde.",
    myJourneyText5: "Natürlich lief nicht alles reibungslos. Der Weg dahin war holprig, voller Rückschläge, aber auch voller Lernmomente. Zwar ging der Server bald offline, doch wir starteten immer wieder neue Versuche, auch mit neuen Freunden, die wir auf dem Weg kennenlernten. Wir waren jung, enthusiastisch und voller Ideen.",
    myJourneyText6: "Über einen weiteren Kontakt aus Energy Reallife lernte ich zufällig andere Leute kennen, die damals einen Minecraft-Server lokal über Hamachi betrieben. Das brachte mich auf die Idee, einen eigenen Minecraft-Server über Nitrado zu mieten. Ich fragte meine Mutter regelmäßig nach einer Paysafecard, um den Server zu finanzieren. Die Map hatte ich von meinen Freunden übernommen, und wieder wuchs meine Neugier, ob man auch hier coole Funktionen wie bei MTA umsetzen konnte.",
    myJourneyText7: "Also brachte ich mir Java selbst bei und programmierte mein erstes Plugin: ein Scoreboard, das anzeigte, wie oft man schon gestorben war. Ich war unglaublich stolz darauf und zeigte es allen Freunden. Ihre Begeisterung war mein Antrieb, weiterzumachen. So entstand unser Server „Greentown“, der sich zwar auf unseren Freundeskreis beschränkte, aber dafür hatten alle richtig Spaß daran.",
    myJourneyText8: "Nebenbei startete ich wieder mit YouTube, diesmal mit dem Ziel, kleinere YouTuber für „Greentown“ zu begeistern. Darüber lernte ich eine weitere Person kennen, die mein Leben stark geprägt hat. Gleichzeitig eröffnete ich mein erstes Minecraft-Netzwerk: byPrefix.net, stark inspiriert von GommeHD.net. Ich experimentierte mit Bungeecord. Die Technik dahinter faszinierte mich sehr. Zwar war das Projekt nach rund zwei Jahren vorbei und hatte nie viele User, aber das war mir egal, für mich war es eine wertvolle Erfahrung. Auch wenn andere meinten, es sei „gescheitert“, war es für mich ein wichtiges Lernprojekt auf dem Weg zu dem, was ich heute unter Janni.fun mache. Diese Phase trug maßgeblich zu meiner Entscheidung bei, Fachinformatiker für Anwendungsentwicklung zu werden.",
    myJourneyText9: "Danach gab es eine ruhigere Zeit. Ich konzentrierte mich mehr aufs Zocken, baute nur kleinere Nebenprojekte. Doch dann stieß ich auf GT-MP, die erste Multiplayer-Modifikation für GTA V. Sofort war das alte MTA-Gefühl wieder da, Chris und ich checkten direkt den deutschen RP-Server GVMP, damals noch ohne Charaktererstellung oder Voice-Chat. Für uns war das normal, für heutige Verhältnisse kaum vorstellbar. Leider fehlte mir damals noch das Wissen, um eigene Scripts für GT-MP zu schreiben, vor allem C++ war mir zu komplex. Also blieb ich erstmal Spieler, auch auf Plattformen wie RageMP, altV und später FiveM.",
    myJourneyText10: "Mit FiveM kam dann die große Chance: Lua-Unterstützung und eine Community, die viele Open-Source-Ressourcen bereitstellt. Ich nutzte das ESX-Framework und entwickelte darauf meinen ersten eigenen GTA-RP-Server. Das Projekt war sauber aufgebaut, modern, mein Anspruch war hoch, beeinflusst durch das LoSa-Script, das mich bis heute prägt. Leider fehlte es an genug aktiven Spielern, um echtes Roleplay zu ermöglichen. Später investierte ich in das kostenpflichtige altV-Script „Valea“, mein erstes echtes Projekt mit C# und JavaScript. Ich habe unglaublich viel durch dieses Script gelernt und begann, es nach meinen Vorstellungen zu überarbeiten. Das Resultat: ein eigener, überarbeiteter RP-Server auf altV.",
    myJourneyText11: "In allen Projekten war ich nie allein. Chris war von Anfang an mein engster Partner, sei es beim Programmieren, Designen oder in der gemeinsamen Projektführung. Dafür bin ich ihm bis heute unendlich dankbar. Auch in den letzten Jahren hatte ich Unterstützung, von Freunden wie Dustin und Leon, die ich durch den Server myLife kennengelernt habe. Wir sind bis heute eng befreundet.",
    myJourneyText12: "Die letzten Projekte liefen besser als viele zuvor, aber rückblickend war vieles chaotisch, unorganisiert und oft zu ambitioniert. Es gab zu viele Neuanfänge, zu viele lose Enden. All diese Erfahrungen führten jedoch zu einem klaren Ziel: Ich möchte Ordnung in meine Projekte bringen. Genau deshalb gibt es diese Website.",
    myJourneyText13: "Sie ist nicht nur mein Portfolio, sondern der Ausgangspunkt für alles, was kommt: strukturiert, durchdacht und mit klarer Vision.",
    whatIsTitle: "Was ist Janni.fun",
    whatIsText1: "Janni.fun ist mein digitaler Spielplatz. Hier sammle ich alles, was ich über die Zeit entwickelt oder ausprobiert habe, von laufenden Projekten über abgeschlossene Ideen bis hin zu Open-Source-Projekten, die ich veröffentlicht habe. Die Seite dient als Portfolio, als Übersicht meines Hobbys und als Ort, an dem ich neue Dinge testen, präsentieren und für andere nutzbar machen kann.",
    whatIsText2: "Darüber hinaus ist Janni.fun ein zentraler HUB für meine Gameserver und sonstige Server. Wenn du auf einem meiner Server unterwegs bist, findest du hier die wichtigsten Zugänge. Zusätzlich gibt es ein zentrales Account-System, mit dem du dich bei meinen verschiedenen Projekten anmelden und deinen Account verwalten kannst.",
    whatIsText3: "Kurz gesagt: Janni.fun ist mehr als nur eine Website, es ist der Ort, an dem ich meine digitalen Projekte zusammenbringe, neue Ideen ausprobiere und alles an einem Platz für dich (und mich) zugänglich mache.",
    serverStatusTitle: "Serverstatus",
    projectsTitle: "Projekte",
    projectsClick: "Projekte mit Ordner-Symbol sind anklickbar.",
    projectsText: "Dieser Bereich wird nur in Englisch angezeigt.",
    linksTitle: "Links",
    linksText: "In Entwicklung."
  }
};


const langBtn = document.getElementById('language-btn');
const langMenu = document.getElementById('language-menu');
const langLinks = langMenu.querySelectorAll('a');

let currentLang = localStorage.getItem('language') || 'en';
setLanguage(currentLang);

langBtn.addEventListener('click', () => {
  langMenu.classList.toggle('show');
});

langLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const selectedLang = link.dataset.lang;
    setLanguage(selectedLang);
    langMenu.classList.remove('show');
  });
});

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  if (lang === 'en') {
    langBtn.textContent = 'English ▼';
  } else if (lang === 'de') {
    langBtn.textContent = 'Deutsch ▼';
  }
}
  
window.addEventListener('click', e => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove('show');
  }
});

function updateTexts(lang) {
  Object.keys(translations[lang]).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = translations[lang][id];
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  if (lang === 'en') {
    langBtn.textContent = 'English ▼';
  } else if (lang === 'de') {
    langBtn.textContent = 'Deutsch ▼';
  }
  updateTexts(lang);
}

// Anti-Scroll
document.addEventListener("DOMContentLoaded", function () {
    const scrollBoxes = document.querySelectorAll(".card-no-hover, .table-container");

    scrollBoxes.forEach((box) => {
      box.addEventListener("wheel", function (e) {
        const atTop = box.scrollTop === 0;
        const atBottom = box.scrollHeight - box.scrollTop === box.clientHeight;
        const scrollingDown = e.deltaY > 0;

        if ((scrollingDown && atBottom) || (!scrollingDown && atTop)) {
          return;
        }

        e.stopPropagation();
      }, { passive: false });
    });
  });

/*
  Developed by Janni (Ioannis Toptsis).
  You can find the website's source code on his GitHub,
  available under https://github.janni.fun
*/