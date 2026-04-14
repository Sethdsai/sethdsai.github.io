var E=[
{n:"Sharpness",i:"\u2694",m:5,it:["Sword","Axe"],d:"Increases melee damage. Each level adds 1.25 extra damage on Bedrock, 0.5 on Java. Stacks with Strength."},
{n:"Protection",i:"\uD83D\uDEE1",m:4,it:["Armor"],d:"Reduces most damage by 4% per level. Stacks across armor with diminishing returns. Max effective 20 total."},
{n:"Efficiency",i:"\u26CF",m:5,it:["Pickaxe","Shovel","Axe","Hoe","Shears"],d:"Increases mining speed 30% per level over base. Level V makes most blocks instant-mine."},
{n:"Unbreaking",i:"\uD83D\uDC8E",m:3,it:["All items"],d:"Chance to not consume durability. Armor: 50%+(50%/level+1). Tools: 100%/(level+1) chance."},
{n:"Fortune",i:"\uD83C\uDF40",m:3,it:["Pickaxe","Shovel","Axe","Hoe"],d:"Increases block drops. Diamond ore avg 2.2 at III. Incompatible with Silk Touch."},
{n:"Silk Touch",i:"\u2728",m:1,it:["Pickaxe","Shovel","Axe","Hoe","Shears"],d:"Blocks drop themselves. Collect glass, ice, stone, ore blocks. Incompatible with Fortune."},
{n:"Fire Aspect",i:"\uD83D\uDD25",m:2,it:["Sword"],d:"Sets target on fire for 4s per level. Cooks mob drops. Doesn't work on fire-immune Nether mobs."},
{n:"Knockback",i:"\uD83D\uDCA8",m:2,it:["Sword"],d:"Adds 3 blocks knockback per level. Keeps enemies away but annoying in close combat."},
{n:"Looting",i:"\uD83D\uDCB0",m:3,it:["Sword"],d:"Increases mob drop chances +1% per level. Max drop count +1. Affects rare drops too."},
{n:"Aqua Affinity",i:"\uD83C\uDF0A",m:1,it:["Helmet"],d:"Removes underwater mining speed penalty. Without it, mining underwater takes 5x longer."},
{n:"Respiration",i:"\uD83E\uDE81",m:3,it:["Helmet"],d:"Extends underwater breathing by 15s per level. Reduces drowning damage by 2 per level."},
{n:"Depth Strider",i:"\uD83E\uDDB6",m:3,it:["Boots"],d:"Increases underwater speed. Level III matches land speed. Incompatible with Frost Walker."},
{n:"Frost Walker",i:"\u2744",m:2,it:["Boots"],d:"Creates frosted ice when walking on water. Radius 2+level. Incompatible with Depth Strider."},
{n:"Mending",i:"\uD83D\uDD27",m:1,it:["All items"],d:"Repairs durability using XP orbs. Each XP restores 2 durability. Incompatible with Infinity. Rare find."},
{n:"Infinity",i:"\u267E",m:1,it:["Bow"],d:"Shooting doesn't consume arrows. Still need 1 arrow. Tipped/spectral arrows consumed. Incompatible with Mending."},
{n:"Power",i:"\uD83C\uDFF9",m:5,it:["Bow"],d:"Increases arrow damage 25% per level. Power V does 6-25 hearts depending on charge."},
{n:"Thorns",i:"\uD83C\uDF35",m:3,it:["Armor"],d:"15% chance per level to deal 1-4 damage to attackers. Costs 2 extra durability when triggered."},
{n:"Soul Speed",i:"\uD83D\uDC7B",m:3,it:["Boots"],d:"Increases speed on soul sand/soil. Level III gives 1.3x walk speed. Damages boots on soul blocks."},
{n:"Swift Sneak",i:"\uD83E\uDD75",m:3,it:["Leggings"],d:"Increases sneak speed 15% per level. Level III = 75% walk speed. Ancient Cities only."},
{n:"Loyalty",i:"\uD83D\uDD04",m:3,it:["Trident"],d:"Trident returns after throwing. Higher = faster return. Level III near instant. No Void return."},
{n:"Riptide",i:"\uD83C\uDF2A",m:3,it:["Trident"],d:"Launches player in rain/water. Higher = more distance. Incompatible with Loyalty and Channeling."},
{n:"Channeling",i:"\u26A1",m:1,it:["Trident"],d:"Summons lightning on hit during thunderstorms. Target must be sky-exposed. Only in storms."},
{n:"Multishot",i:"\uD83D\uDD31",m:1,it:["Crossbow"],d:"Shoots 3 arrows spread pattern. Only 1 consumed. Incompatible with Piercing."},
{n:"Piercing",i:"\uD83C\uDFAF",m:4,it:["Crossbow"],d:"Arrows pass through entities. Pierce shields. Level = entities pierced. Incompatible with Multishot."},
{n:"Quick Charge",i:"\u26A1",m:3,it:["Crossbow"],d:"Reduces reload time 0.25s per level. Base 1.25s, QCh III = 0.5s."},
{n:"Binding Curse",i:"\uD83D\uDD12",m:1,it:["Armor","Elytra"],d:"Item can't be removed once worn. Only death or creative replacement removes it."},
{n:"Vanishing Curse",i:"\uD83D\uDC80",m:1,it:["All items"],d:"Item destroyed on death instead of dropping. Can't remove with grindstone."}
];
var CR=[
{n:"Crafting Table",i:"\uD83E\uDEF5",r:"1x Crafting Table",ig:["4x Oak Planks"],d:"Opens 3x3 crafting grid. The most basic block you need."},
{n:"Stone Pickaxe",i:"\u26CF",r:"1x Stone Pickaxe",ig:["3x Cobblestone","2x Stick"],d:"Early mining tool. Mines stone faster than wood. Needed for iron ore."},
{n:"Iron Ingot",i:"\uD83D\uDDC0",r:"1x Iron Ingot",ig:["1x Iron Ore + Fuel"],d:"Smelt iron ore in furnace. Used for tools, armor, buckets, redstone."},
{n:"Torch",i:"\uD83D\uDD26",r:"4x Torch",ig:["1x Coal/Charcoal","1x Stick"],d:"Primary light source. Prevents mob spawning in 12-block radius."},
{n:"Furnace",i:"\uD83D\uDD25",r:"1x Furnace",ig:["8x Cobblestone"],d:"Smelt ores, cook food, make stone. Essential for progression."},
{n:"Chest",i:"\uD83D\uDCE6",r:"1x Chest",ig:["8x Oak Planks"],d:"Stores 27 stacks. Two side by side = 54 slots double chest."},
{n:"Iron Pickaxe",i:"\u26CF",r:"1x Iron Pickaxe",ig:["3x Iron Ingot","2x Stick"],d:"Mines diamond, gold, redstone, emerald ores. Essential tier."},
{n:"Diamond Pickaxe",i:"\uD83D\uDC8E",r:"1x Diamond Pickaxe",ig:["3x Diamond","2x Stick"],d:"Only tool that mines obsidian. Required for Nether portal and enchanting."},
{n:"Shield",i:"\uD83D\uDEE1",r:"1x Shield",ig:["1x Iron Ingot","6x Planks"],d:"Blocks damage when held up. Disabled by axe attacks."},
{n:"Brewing Stand",i:"\uD83E\uDDEA",r:"1x Brewing Stand",ig:["1x Blaze Rod","3x Cobblestone"],d:"Brews potions. Needs blaze powder fuel. All potion recipes need this."},
{n:"Enchanting Table",i:"\uD83D\uDCD6",r:"1x Enchanting Table",ig:["4x Obsidian","2x Diamond","1x Book"],d:"Enchants gear using XP. Max power with 15 bookshelves."},
{n:"Nether Portal",i:"\uD83D\uDD00",r:"Nether Portal",ig:["10-14x Obsidian","1x Flint & Steel"],d:"Gateway to Nether. Frame 4x5 to 23x23. Light with flint & steel."}
];
var P=[
{n:"Regeneration",i:"\u2764\u200D\uD83E\uDE79",b:"Awkward + Ghast Tear",e:"Redstone(8:00)/Glowstone(II)",d:"Restores health over time. I: 0.5 hearts/sec 45s. II: 1 heart/sec 22s."},
{n:"Speed",i:"\uD83C\uDFC3",b:"Awkward + Sugar",e:"Redstone(8:00)/Glowstone(II)",d:"+20% move speed per level. Speed II = +40%. Essential for travel."},
{n:"Fire Resistance",i:"\uD83D\uDD25",b:"Awkward + Magma Cream",e:"Redstone(8:00)",d:"Complete fire/lava immunity. No protection from /kill or void."},
{n:"Healing",i:"\u2764",b:"Awkward + Glistering Melon",e:"Glowstone(II: 4 hearts)",d:"Instant health. I: 2 hearts. II: 4 hearts. Undead take damage instead."},
{n:"Night Vision",i:"\uD83D\uDC41",b:"Awkward + Golden Carrot",e:"Redstone(8:00)",d:"See in dark 3:00 (8:00 extended). Max screen brightness."},
{n:"Strength",i:"\uD83D\uDCAA",b:"Awkward + Blaze Powder",e:"Redstone(8:00)/Glowstone(II)",d:"+3 damage per level (Java). II: +6 damage. Huge melee boost."},
{n:"Water Breathing",i:"\uD83E\uDEA7",b:"Awkward + Pufferfish",e:"Redstone(8:00)",d:"No oxygen depletion 3:00 (8:00 ext). Great for ocean monuments."},
{n:"Invisibility",i:"\uD83D\uDC7B",b:"Night Vision + Fermented Spider Eye",e:"Redstone(8:00)",d:"Invisible 3:00. Armor/items still visible. Mobs detect at close range."},
{n:"Slow Falling",i:"\uD83E\uDE82",b:"Awkward + Phantom Membrane",e:"Redstone(4:00)",d:"Reduced fall speed. No fall damage. Good for elytra launches."},
{n:"Poison",i:"\u2620",b:"Awkward + Spider Eye",e:"Redstone(2:00)/Glowstone(II)",d:"Damage over time. Can't kill (leaves 1 heart). Undead immune."},
{n:"Turtle Master",i:"\uD83D\uDC22",b:"Awkward + Turtle Shell",e:"Redstone/Glowstone",d:"60% slow but -60% damage taken. II: 90% slow, -90% damage."},
{n:"Weakness",i:"\uD83D\uDCC9",b:"Awkward + Fermented Spider Eye",e:"Redstone(4:00)",d:"-4 melee damage per level (Java). Used to cure zombie villagers."}
];
var R=[
{n:"T Flip-Flop",i:"\uD83D\uDD04",df:"Medium",d:"Toggles on/off with each press. Button acts like lever. For toggle doors and lights.",c:["2x Sticky Piston","2x Redstone Block","2x Repeater","1x Button"]},
{n:"2x2 Piston Door",i:"\uD83D\uDEAA",df:"Easy",d:"Hidden door with 4 sticky pistons. Completely hidden when closed.",c:["4x Sticky Piston","Redstone Dust","1x Lever","Blocks"]},
{n:"Item Elevator",i:"\u2B06",df:"Easy",d:"Droppers pointing up move items vertically. 2-tick pulse chain per dropper.",c:["Droppers","2-tick Repeaters","Hopper","Chest"]},
{n:"Clock Circuit",i:"\u23F0",df:"Easy",d:"Repeating pulse. 2 repeaters + dust loop. Adjustable speed.",c:["2x Repeater","2x Redstone Dust"]},
{n:"Auto Farm",i:"\uD83C\uDF3E",df:"Medium",d:"Observer detects growth, piston breaks, water+hopper collects. Wheat/carrots/potatoes.",c:["Observer","Piston","Hopper","Water","Chest"]},
{n:"Secret Passage",i:"\uD83D\uDD75",df:"Hard",d:"Hidden entrance with paintings over piston wall. Triggered by hidden button.",c:["Sticky Pistons","Redstone","Painting","Hidden Trigger"]},
{n:"XOR Gate",i:"\u26A1",df:"Hard",d:"ON when exactly one input is ON. Used in adders and combo locks.",c:["3x Redstone Torch","Redstone Dust","2x Input"]}
];
var B=[
{n:"Plains",i:"\uD83C\uDF3F",t:"0.8",d:"Flat grassland, oak trees, villages, horses, bees. Common starting biome."},
{n:"Desert",i:"\uD83C\uDFDC",t:"2.0",d:"Hot dry sand, cacti, dead bushes. Desert temples with loot. No rain."},
{n:"Jungle",i:"\uD83C\uDF3A",t:"0.95",d:"Dense trees, vines, cocoa, ocelots, parrots. Jungle temples and bamboo."},
{n:"Taiga",i:"\uD83C\uDF32",t:"0.25",d:"Cold spruce forest. Foxes, sweet berries, pillager outposts. Snows."},
{n:"Ocean",i:"\uD83C\uDF0A",t:"0.5",d:"Large water. Monuments, shipwrecks, ruins, kelp, seagrass."},
{n:"Deep Dark",i:"\uD83D\uDD3A",t:"0.0",d:"Warden + Ancient Cities. Sculk detects vibrations. Best loot, highest danger."},
{n:"Cherry Grove",i:"\uD83C\uDF38",t:"0.5",d:"Pink cherry trees with petal particles. Bees. Added 1.20. Scenic."},
{n:"Mushroom Fields",i:"\uD83C\uDF44",t:"0.9",d:"Rare island, mycelium, mooshrooms. No hostile mobs spawn. Safe haven."},
{n:"Badlands",i:"\uD83C\uDFDC",t:"2.0",d:"Terracotta colors. Gold ore at any Y level. Surface mineshafts."},
{n:"Lush Caves",i:"\uD83D\uDC8E",t:"0.5",d:"Glow berries, spore blossoms, azalea above. Axolotls in pools."},
{n:"Dripstone Caves",i:"\uD83E\uDEA8",t:"0.8",d:"Pointed dripstone, stalactites/stalagmites. Abundant copper ore."}
];
var S=[
{c:"-781047734",v:"1.21",d:"Survival island with shipwreck + ocean monument. Cherry grove on mainland.",t:["Island","Shipwreck"]},
{c:"283490237",v:"1.21",d:"Village at spawn next to ruined portal. Stronghold below village.",t:["Village","Speedrun"]},
{c:"2146956",v:"1.21",d:"Ancient city at spawn. Massive deep dark. Multiple connected cities.",t:["Ancient City","Challenge"]},
{c:"43500680",v:"1.21",d:"Cherry grove mountain at spawn. Village in valley. Dripstone cave nearby.",t:["Cherry","Mountain"]},
{c:"-89143467",v:"1.20+",d:"Desert temple with diamonds at spawn. Three villages in view.",t:["Desert","Diamonds"]},
{c:"62610320",v:"1.21",d:"Jungle temple + bamboo at spawn. Pandas and ocelots.",t:["Jungle","Bamboo"]},
{c:"57501905",v:"1.20+",d:"Massive lush cave exposed in ravine at spawn. Glow berries everywhere.",t:["Lush Cave","Scenic"]},
{c:"306959825",v:"1.21",d:"Double ocean monument near spawn. Shipwreck between them.",t:["Ocean","Monument"]}
];
var CI=["diamond_sword","diamond_pickaxe","diamond_axe","diamond_shovel","diamond_helmet","diamond_chestplate","diamond_leggings","diamond_boots","iron_sword","iron_pickaxe","netherite_sword","netherite_pickaxe","golden_apple","enchanted_golden_apple","ender_pearl","nether_star","dragon_egg","elytra","trident","totem_of_undying","bow","crossbow","shield","tnt","redstone","diamond","emerald","netherite_ingot","iron_ingot","obsidian"];
var CE=["speed","haste","strength","jump_boost","regeneration","resistance","fire_resistance","water_breathing","invisibility","night_vision","weakness","poison","wither","slow_falling","levitation","absorption"];
var CT=["zombie","skeleton","creeper","spider","enderman","witch","blaze","ghast","wither_skeleton","piglin","iron_golem","wolf","cat","horse","phantom","warden","allay","axolotl","frog","goat"];
var cat="give";

setTimeout(function(){var s=document.getElementById("splash");s.classList.add("out");setTimeout(function(){s.classList.remove("on");document.getElementById("main").classList.remove("hidden")},300)},2000);

function go(p){document.querySelectorAll(".page").forEach(function(e){e.classList.remove("on")});document.getElementById("p-"+p).classList.add("on");document.querySelectorAll(".nb").forEach(function(b){b.classList.toggle("on",b.dataset.p===p)});document.querySelector(".content").scrollTop=0;
if(p==="ench"&&!window._ei){window._ei=1;rEnch(E)}
if(p==="craft"&&!window._ci){window._ci=1;rCraft(CR)}
if(p==="pot"&&!window._pi){window._pi=1;rPot(P)}
if(p==="cmd"&&!window._cmi){window._cmi=1;iCmd()}
if(p==="red"&&!window._ri){window._ri=1;rRed(R)}
if(p==="bio"&&!window._bi){window._bi=1;rBio(B)}
if(p==="seed"&&!window._si){window._si=1;rSeed(S)}
}

function tog(el){document.querySelectorAll(".ic.xp").forEach(function(c){if(c!==el)c.classList.remove("xp")});el.classList.toggle("xp")}

function rEnch(l){document.getElementById("ench-l").innerHTML=l.map(function(e){return'<div class="ic" onclick="tog(this)"><div class="ic-h"><div class="ic-l"><span class="ic-i">'+e.i+'</span><span class="ic-n">'+e.n+'</span></div><span class="ic-b '+(e.m>=5?"b-r":"b-g")+'">max '+e.m+'</span></div><div class="ic-d"><p class="ic-p">'+e.d+'</p><div class="mt">'+e.it.map(function(t){return'<span class="mtg">'+t+"</span>"}).join("")+"</div></div></div>"}).join("")}
function filtEnch(v){var q=v.toLowerCase();rEnch(E.filter(function(e){return e.n.toLowerCase().indexOf(q)>-1||e.d.toLowerCase().indexOf(q)>-1}))}

function rCraft(l){document.getElementById("craft-l").innerHTML=l.map(function(c){return'<div class="ic" onclick="tog(this)"><div class="ic-h"><div class="ic-l"><span class="ic-i">'+c.i+'</span><span class="ic-n">'+c.n+'</span></div><span class="ic-b b-b">'+c.r.split("x")[0].trim()+'</span></div><div class="ic-d"><p class="ic-p">'+c.d+'</p><div class="mt">'+c.ig.map(function(i){return'<span class="mtg">'+i+"</span>"}).join("")+'<span class="mtg" style="color:#7ab85a">\u2192 '+c.r+"</span></div></div></div>"}).join("")}
function filtCraft(v){var q=v.toLowerCase();rCraft(CR.filter(function(c){return c.n.toLowerCase().indexOf(q)>-1||c.d.toLowerCase().indexOf(q)>-1}))}

function rPot(l){document.getElementById("pot-l").innerHTML=l.map(function(p){return'<div class="ic" onclick="tog(this)"><div class="ic-h"><div class="ic-l"><span class="ic-i">'+p.i+'</span><span class="ic-n">'+p.n+'</span></div><span class="ic-b b-y">brew</span></div><div class="ic-d"><p class="ic-p">'+p.d+'</p><div class="mt"><span class="mtg">'+p.b+'</span><span class="mtg">'+p.e+'</span></div></div></div>"}).join("")}
function filtPot(v){var q=v.toLowerCase();rPot(P.filter(function(p){return p.n.toLowerCase().indexOf(q)>-1||p.d.toLowerCase().indexOf(q)>-1}))}

function iCmd(){var d=document.getElementById("cmd-cats");d.innerHTML=["give","effect","summon","gamemode","tp","weather"].map(function(c){return'<button class="ccb'+(c===cat?" on":"")+'" onclick="sCat(\''+c+"',this)\">"+c+"</button>"}).join("");rCmdF()}
function sCat(c,el){cat=c;document.querySelectorAll(".ccb").forEach(function(b){b.classList.remove("on")});el.classList.add("on");rCmdF()}
function rCmdF(){var f=document.getElementById("cmd-form");var o=function(v){return'<option value="'+v+'">'+v.replace(/_/g," ")+"</option>"};var inp=function(id,v){return'<label>'+id+'</label><input type="text" id="c-'+id+'" value="'+v+'">'};var sel=function(id,opts){return'<label>'+id+'</label><select id="c-'+id+'">'+opts.map(o).join("")+"</select>"};switch(cat){case"give":f.innerHTML=sel("target",["@p","@a","@s","@r"])+sel("item",CI)+inp("amount","1");break;case"effect":f.innerHTML=sel("target",["@p","@a","@s"])+sel("effect",CE)+inp("duration","30")+inp("amplifier","0");break;case"summon":f.innerHTML=sel("entity",CT)+inp("x","~")+inp("y","~")+inp("z","~");break;case"gamemode":f.innerHTML=sel("mode",["survival","creative","adventure","spectator"])+sel("target",["@p","@a","@s"]);break;case"tp":f.innerHTML=sel("target",["@p","@s"])+inp("x","~")+inp("y","~")+inp("z","~");break;case"weather":f.innerHTML=sel("type",["clear","rain","thunder"])+inp("duration","6000");break}gCmd()}
function gCmd(){var r=document.getElementById("cmd-out");var gv=function(id){var e=document.getElementById("c-"+id);return e?e.value:""};var cmd="";switch(cat){case"give":cmd="/give "+gv("target")+" minecraft:"+gv("item")+" "+gv("amount");break;case"effect":cmd="/effect give "+gv("target")+" minecraft:"+gv("effect")+" "+gv("duration")+" "+gv("amplifier");break;case"summon":cmd="/summon minecraft:"+gv("entity")+" "+gv("x")+" "+gv("y")+" "+gv("z");break;case"gamemode":cmd="/gamemode "+gv("mode")+" "+gv("target");break;case"tp":cmd="/tp "+gv("target")+" "+gv("x")+" "+gv("y")+" "+gv("z");break;case"weather":cmd="/weather "+gv("type")+" "+gv("duration");break}r.textContent=cmd}
document.addEventListener("change",function(e){if(e.target.closest(".cform"))gCmd()});
document.addEventListener("input",function(e){if(e.target.closest(".cform"))gCmd()});
function cpCmd(){var c=document.getElementById("cmd-out").textContent;navigator.clipboard.writeText(c).then(function(){toast("copied!")}).catch(function(){toast("failed")})}

function rRed(l){document.getElementById("red-l").innerHTML=l.map(function(r){return'<div class="ic" onclick="tog(this)"><div class="ic-h"><div class="ic-l"><span class="ic-i">'+r.i+'</span><span class="ic-n">'+r.n+'</span></div><span class="ic-b '+(r.df==="Easy"?"b-g":r.df==="Hard"?"b-r":"b-y")+'">'+r.df+'</span></div><div class="ic-d"><p class="ic-p">'+r.d+'</p><div class="mt">'+r.c.map(function(c){return'<span class="mtg">'+c+"</span>"}).join("")+"</div></div></div>"}).join("")}

function loadSk(){var u=document.getElementById("sk-in").value.trim();if(!u)return;var p=document.getElementById("sk-prev");p.innerHTML='<p class="sk-ph">loading...</p>';fetch("https://api.mojang.com/users/profiles/minecraft/"+u).then(function(r){if(!r.ok)throw new Error("not found");return r.json()}).then(function(d){return fetch("https://sessionserver.mojang.com/session/minecraft/profile/"+d.id)}).then(function(r){return r.json()}).then(function(prof){var sp=prof.properties.find(function(p){return p.name==="textures"});if(!sp)throw new Error("no skin");var dec=JSON.parse(atob(sp.value));var url=dec.textures.SKIN.url;p.innerHTML='<div style="text-align:center"><img src="'+url+'" class="sk-img" alt="skin"><p style="color:#7ab85a;margin-top:10px;font-weight:700">'+u+"</p></div>"}).catch(function(){p.innerHTML='<p class="sk-ph" style="color:#c88">player not found</p>'})}

function rBio(l){document.getElementById("bio-l").innerHTML=l.map(function(b){return'<div class="ic" onclick="tog(this)"><div class="ic-h"><div class="ic-l"><span class="ic-i">'+b.i+'</span><span class="ic-n">'+b.n+'</span></div><span class="ic-b b-b">t:'+b.t+'</span></div><div class="ic-d"><p class="ic-p">'+b.d+'</p></div></div>'}).join("")}
function filtBio(v){var q=v.toLowerCase();rBio(B.filter(function(b){return b.n.toLowerCase().indexOf(q)>-1||b.d.toLowerCase().indexOf(q)>-1}))}

function rSeed(l){document.getElementById("seed-l").innerHTML=l.map(function(s){return'<div class="sc"><div class="sc-h"><span class="sc-c" onclick="event.stopPropagation();cpSeed(\''+s.c+"')\">"+s.c+'</span><span class="sc-v">'+s.v+'</span></div><p class="sc-p">'+s.d+'</p><div class="sc-t">'+s.t.map(function(t){return'<span class="mtg">'+t+"</span>"}).join("")+"</div></div>"}).join("")}
function cpSeed(c){navigator.clipboard.writeText(c).then(function(){toast("seed copied!")}).catch(function(){toast("failed")})}

function toast(m){var t=document.getElementById("toast");t.textContent=m;t.classList.remove("hidden");setTimeout(function(){t.classList.add("hidden")},1800)}
