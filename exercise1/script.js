
function clocks() {
    const now = new Date();
    const brusselsTime = now.toLocaleString('en-GB', {timeZone: 'Europe/Brussels'});
    const reykjavikTime = now.toLocaleString('en-GB', {timeZone: 'Atlantic/Reykjavik'});
    const anchorageTime = now.toLocaleString('en-GB', {timeZone: 'America/Anchorage'});
    const kyivtime = now.toLocaleString('en-GB', {timeZone: 'Europe/Kyiv'});
    
    document.getElementById("brussels").innerHTML = `Brussels: ${brusselsTime}`;
    document.getElementById("anchorage").innerHTML = `Anchorage: ${anchorageTime}`;
    document.getElementById("reykjavik").innerHTML = `Reykjavik: ${reykjavikTime}`;
    document.getElementById("kyiv").innerHTML = `Kyiv: ${kyivtime}`;
     
}

setInterval(clocks, 1000);

