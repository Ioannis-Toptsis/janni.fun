const mc_servers = [
    {
        name: "EternalCore",
        ip: "eternal.janni.fun",
        port: 25565
    }
];

function formatUptime(seconds) {
    if (!seconds) return "Offline";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hrs}h ${mins}m`;
}

async function fetchServerStatus(server) {
    const url = `https://api.mcstatus.io/v2/status/java/${server.ip}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.online) {
            return {
                status: "online",
                players: data.players.online,
                maxPlayers: data.players.max,
                version: data.version.name_clean,
                ping: data.debug?.ping
            };
        } else {
            return {
                status: "offline"
            };
        }
    } catch (error) {
        console.error("Error fetching server status:", error);
        return {
            status: "offline"
        };
    }
}

async function displayServerStatus() {
    const section = document.getElementById("section2");
    const container = document.createElement("div");
    container.className = "server-status-list";

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginTop = "20px";
    table.style.color = "white";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["Server-Name", "Game", "Status", "IP", "Player"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.borderBottom = "2px solid #e24a4a";
        th.style.padding = "10px";
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (const server of mc_servers) {
        const statusData = await fetchServerStatus(server);

        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid #333";

        // Server-Name
        let td = document.createElement("td");
        td.textContent = server.name;
        td.style.padding = "10px";
        tr.appendChild(td);
        
        // Game
        td = document.createElement("td");
        td.textContent = "Minecraft - " + statusData.version;
        td.style.padding = "10px";
        tr.appendChild(td);

        // Status
        td = document.createElement("td");
        td.textContent = statusData.status === "online" ? "🟩" : "🟥";
        td.style.padding = "10px";
        tr.appendChild(td);

        // IP
        td = document.createElement("td");
        td.textContent = server.ip;
        td.style.padding = "10px";
        tr.appendChild(td);

        // Spieler (online / max)
        td = document.createElement("td");
        if (statusData.status === "online" && statusData.players !== undefined) {
            td.textContent = `${statusData.players} / ${statusData.maxPlayers}`;
        } else {
            td.textContent = "🤷‍♂️";
        }
        td.style.padding = "10px";
        tr.appendChild(td);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    container.appendChild(table);

    // Clear old content and append new table
    const sectionContent = section.querySelector(".section-content");
    sectionContent.innerHTML = "<h3 id='serverStatusTitle'>Server Status</h3>"; // reset header
    sectionContent.appendChild(container);
}

window.addEventListener("DOMContentLoaded", () => {
    displayServerStatus();
});

window.addEventListener("DOMContentLoaded", () => {
    displayServerStatus();

    setInterval(() => {
        displayServerStatus();
    }, 30000);
});