/* ============================================================
   CORPUS. Copied letter by letter from the source lessons.
   Nothing invented. Four confidence tiers, explained in About.
   ============================================================ */
var L1="Lesson 1",L2="Lesson 2",L4="Lesson 4",L5="Lesson 5",L6="Lesson 6",SMG="Surrey Morphology Group";

var UNITS=[
{n:1,t:"Letters first",s:"How Eleme is written",c:"--u1",
 tip:"A letter always sounds the same, in every word it turns up in.",
 items:[
 {e:"ekã",m:"language",k:"i",src:L2,lit:"From <b>ekã Eleme</b>, the Eleme language."},
 {e:"ɛdɔ amɔɔ",m:"sound",k:"c",src:L2},
 {e:"afabɛt",m:"letter",k:"c",src:L2},
 {e:"oso",m:"in",k:"c",src:L2,lit:"<b>Oso ekã Eleme</b> in the Eleme language, <b>oso echii</b> in the market."},
 {e:"Nnɛ afabɛt bee nkunã akɛ nnɛ ɛdɔ amɔɔ",m:"One alphabet represents one sound",k:"a",src:L2},
 {e:"Nnɛ ɛdɔ amɔɔ bee nkunã akɛ nnɛ afabɛt",m:"One sound represents one alphabet",k:"a",src:L2},
 {e:"Ekã Eleme agbo achu rɛ aʼo rɛ ɔʼrɔ afabɛt",m:"The Eleme language has 36 letters",k:"a",src:L1},
 {e:"Bui ogūrū afabɛt we dã ɛdɔ amɔɔ yaba",m:"Read the letters and listen to their sounds",k:"a",src:L1}
]},
{n:2,t:"Saying hello",s:"Morning, evening, how are you",c:"--u2",
 tip:"Eleme changes the question depending on who you greet: <b class='el'>ɔdɔ</b> to one person, <b class='el'>ɔdɔi</b> to a group.",
 items:[
 {e:"ageta",m:"morning",k:"i",src:L5,lit:"In both morning greetings."},
 {e:"mmuji abã",m:"good evening",k:"a",src:L5},
 {e:"Ɔwanɛnu",m:"thank you",k:"i",src:L5,lit:"Taken out of <b>Ɔwanɛnu, ɔbari bai</b>."},
 {e:"bai",m:"our",k:"c",src:L4,lit:"<b>ɔnɛ otoɛ bai</b> our teacher, <b>ɛʼaa bai</b> our mother."},
 {e:"Ɔbari",m:"God",k:"c",src:L6,lit:"“Sir” is literally <b>ɔbari bai</b>, our lord."},
 {e:"Ade ageta, ɛkalasi",m:"Good morning, class",k:"a",src:L5},
 {e:"Ageta, ɔbari bai",m:"Morning, Sir",k:"a",src:L5},
 {e:"Jaa bee ɔdɔ jaa?",m:"How are you? (one person)",k:"a",src:L5},
 {e:"Jaa bee ɔdɔi jaa?",m:"How are you? (a group)",k:"a",src:L5},
 {e:"Ndɔ akáà",m:"I am fine",k:"a",src:L5},
 {e:"Re dɔ akaa",m:"We are fine",k:"a",src:L5},
 {e:"Ntɛ bãrã nka bao dɔri wɔ?",m:"How are your parents?",k:"a",src:L5},
 {e:"Edɔri ãã",m:"They are fine",k:"a",src:L5},
 {e:"Ɔwanɛnu, ɔbari bai",m:"Thank you, Sir",k:"a",src:L5}
]},
{n:3,t:"Who people are",s:"Names and family",c:"--u3",
 tip:"Possession comes after the word, not before: <b class='el'>abee rã</b> reads “name my”.",
 items:[
 {e:"abee",m:"name",k:"c",src:L4},
 {e:"rã",m:"my",k:"c",src:L4},
 {e:"yɛ",m:"his, her",k:"i",src:L4,lit:"From <b>abee yɛ</b>. Lesson 6 has <b>adɛ nyɛ</b> for “her eyes”, so the form may shift."},
 {e:"ɛʼaa",m:"mother",k:"c",src:L4},
 {e:"onwi",m:"child",k:"c",src:L6},
 {e:"ɛgbara",m:"boys",k:"a",src:L4},
 {e:"okwia",m:"girls",k:"a",src:L4},
 {e:"amɛ",m:"who, whose",k:"c",src:L4},
 {e:"nkele",m:"little, small",k:"a",src:L6},
 {e:"epɔrɔ",m:"bad",k:"i",src:L6,lit:"From <b>bɛɛ epɔrɔ onwi</b>, is a bad child."},
 {e:"ɔnɛ otoɛ",m:"teacher",k:"a",src:L5},
 {e:"nsɛnwinɛ",m:"the children, the class",k:"c",src:L5},
 {e:"Abee rã kora Alale",m:"My name is Alale",k:"a",src:L4},
 {e:"Ɔnɛnɔ bee amɛ?",m:"Who is this person?",k:"a",src:L4},
 {e:"Nnɔɔ bee ɛʼaa rã",m:"This is my mother",k:"a",src:L4},
 {e:"Nnɔɔ bee ɔnɛ otoɛ bai",m:"This is our teacher",k:"a",src:L4},
 {e:"Ekarabee ɔnɛ àlabi abee yɛ",m:"Let everyone say his name",k:"a",src:L4}
]},
{n:4,t:"Things around you",s:"Food, water, money, places",c:"--u4",
 tip:"The safest words here: nearly all of them come from inside a full sentence.",
 items:[
 {e:"nja",m:"food",k:"c",src:L6},
 {e:"nna",m:"meat",k:"a",src:L6},
 {e:"mbalo",m:"soup",k:"a",src:L6},
 {e:"esaa",m:"yams",k:"c",src:L6},
 {e:"mmu",m:"water",k:"c",src:L6},
 {e:"ɛfere",m:"cup",k:"c",src:L6},
 {e:"ekpii",m:"money",k:"a",src:L6},
 {e:"ɔkãni",m:"firewood",k:"a",src:L6},
 {e:"adɛ",m:"eyes",k:"a",src:L6},
 {e:"ete",m:"tree",k:"a",src:L6},
 {e:"ofiɔ",m:"mango",k:"c",src:L4},
 {e:"akpa",m:"bag",k:"a",src:L2},
 {e:"akpaka",m:"shoe",k:"a",src:L2},
 {e:"mkpà",m:"scissors",k:"a",src:L2},
 {e:"kpabe",m:"hoe",k:"a",src:L2},
 {e:"mkpaà",m:"music, drum",k:"a",src:L2},
 {e:"kpakpagoo",m:"butterfly",k:"s",src:"A speaker",
  lit:"The lessons print <b>kpakpagogo</b>. A speaker born in Eleme country says <b>kpakpagoo</b>. His version wins, and this app is named after it."},
 {e:"mmu akara",m:"rain water",k:"a",src:L6},
 {e:"ɔtɔɔ nsã",m:"school",k:"c",src:L5},
 {e:"ɔtɔɔ Ɔbari",m:"church",k:"a",src:L6},
 {e:"echii",m:"market",k:"c",src:L4},
 {e:"ɔka",m:"farm",k:"c",src:L4},
 {e:"ɔtɔɔ",m:"house, building",k:"i",src:L6,lit:"Shared by <b>ɔtɔɔ nsã</b> school and <b>ɔtɔɔ Ɔbari</b> church."}
]},
{n:5,t:"Making sentences",s:"One shape, over and over",c:"--u5",
 tip:"Every sentence has the same shape: <b>who · ka · what they are doing · what to</b>. The word <b class='el'>ka</b> always sits in front of the verb.",
 items:[
 {e:"ka",m:"marks something happening now",k:"c",src:L6,lit:"In front of the verb in all eleven “is …-ing” sentences."},
 {e:"ogūrū",m:"makes a plural: the …s",k:"c",src:L4,lit:"<b>ogūrū ofiɔ</b> the mangoes, <b>ogūrū ebina</b> the questions."},
 {e:"oku",m:"those who, the ones",k:"c",src:L4,lit:"<b>oku ɛgbara</b> the boys, <b>oku okwia</b> the girls."},
 {e:"Mba ka a",m:"Mba is going",k:"a",src:L6,b:1},
 {e:"Ekiye ka bà nna",m:"Ekiye is eating meat",k:"a",src:L6,b:1},
 {e:"Kate ka bū nja",m:"Kate is grabbing for food",k:"a",src:L6,b:1},
 {e:"Eʼaa bai ka de nja",m:"Our mother is eating food",k:"a",src:L6,b:1},
 {e:"Mmama ka ãã esãa",m:"Mmama is frying yam",k:"a",src:L6,b:1},
 {e:"Gooya ka da mbalo",m:"Gooya is licking soup",k:"a",src:L6,b:1},
 {e:"Adake ka bɛ mmu akara",m:"Adake is collecting rain water",k:"a",src:L6,b:1},
 {e:"Nkajima ka ʼe mmu",m:"Nkajima is fetching water",k:"a",src:L6,b:1},
 {e:"Nwafor ka bi adɛ nyɛ",m:"Nwafor is closing her eyes",k:"a",src:L6,b:1},
 {e:"Ɔbɔle ka do ekpii",m:"Ɔbɔle is sharing money",k:"a",src:L6,b:1},
 {e:"Ollor bɔ ɔkãni",m:"Ollor tightens firewood",k:"a",src:L6,b:1},
 {e:"Ɔlɔma be aa Alale",m:"Ɔlɔma is Alale's mother",k:"a",src:L6,b:1}
]},
{n:6,t:"Counting and time",s:"One to six, yesterday, now",c:"--u6",
 tip:"The numbers come from the lesson titles themselves. They stop at six because the lessons stop at six.",
 items:[
 {e:"nnɛ",m:"one",k:"c",src:L1,lit:"<b>Ɔnɔɔnɔ Ri Nnɛ</b> Lesson One, and <b>nnɛ ɛfere</b> one cup."},
 {e:"ɔbɛrɛ",m:"two",k:"i",src:L2,lit:"From <b>Ɔnɔɔnɔ Rɛ Ɔbɛrɛ</b>, Lesson Two."},
 {e:"ɔtaa",m:"three",k:"i",src:L1},
 {e:"etaale",m:"four",k:"i",src:L4},
 {e:"ewo",m:"five",k:"c",src:L5,lit:"In the Lesson Five title, and again in <b>Onwi ewo agba</b>, a five year old child."},
 {e:"ɛʼɔrɔ",m:"six",k:"i",src:L6},
 {e:"agba",m:"years old",k:"a",src:L6},
 {e:"ade",m:"day",k:"i",src:L6},
 {e:"esii",m:"week",k:"c",src:L6},
 {e:"ɔsɔɔɔ",m:"yesterday",k:"i",src:L6},
 {e:"ninini",m:"today",k:"i",src:L6},
 {e:"eʼereri",m:"now",k:"i",src:L6},
 {e:"ajɔ",m:"many, several",k:"c",src:L6},
 {e:"Mma si ɔsɔɔɔ",m:"I went yesterday",k:"a",src:L6,b:1},
 {e:"Ngasi ninini",m:"I will go today",k:"a",src:L6,b:1},
 {e:"Nsia edãamɔ ade",m:"I do go everyday",k:"a",src:L6},
 {e:"Abere fɛ ajɔ ɛfere",m:"She has broken many cups",k:"a",src:L6,b:1},
 {e:"Onwi ewo agba bii nkele onwi",m:"A five year old child is a little child",k:"a",src:L6}
]},
{n:7,t:"The mango story",s:"A real passage",c:"--u7",
 tip:"The only full passage in the lessons. Everything above turns up in it.",
 story:{
  e:"Esii rɛ nɛɛ nwɛɛ, epoosi oku ɛgbara bãrã oku okwia rɛɛ ari oso ɔtɔɔ nsã bai siri ɔka Oluka si kɔ ofi. "+
    "Ntɛɛ oku ɛgbara kara kɔ ofiɔ, oku okwia kara laa ogūrū rɛɛ ekachi nkikɛ nwɛ oso oku. "+
    "Etorari ɛdamɔ ofiɔ suã echii; wee oku okwiaã aʼolari okure nã fima ofi rɛɛ awɛ mkpikpee.",
  m:"Last week some boys and girls from our school went to Oluka's farm to pluck mangoes. As the boys were "+
    "plucking the mangoes, the girls picked those that fell on the ground into the basket. They carried all "+
    "the mangoes to the market, and the girls sold them to those who like sweet mangoes."},
 items:[
 {e:"esii rɛ nɛɛ nwɛɛ",m:"last week",k:"c",src:L4},
 {e:"mkpikpee",m:"sweet",k:"i",src:L4,lit:"From <b>ofi rɛɛ awɛ mkpikpee</b>, sweet mangoes."},
 {e:"swe",m:"to throw down heavily, said of wrestling",k:"a",src:SMG,lit:"The one word not from the lessons. It works by sounding like what it means."},
 {e:"Mmade be esiri ɔka?",m:"When did they go to the farm?",k:"a",src:L4},
 {e:"Esiri ɔka amɛ?",m:"Whose farm did they go to?",k:"a",src:L4},
 {e:"Esiri na wɔ?",m:"What did they go to do?",k:"a",src:L4},
 {e:"Oku mmɔde kɔri ogūrū ofiɔ?",m:"Who are those that plucked the mangoes?",k:"a",src:L4},
 {e:"Enamari wɔ ogūrū ofiɔ oso echii?",m:"What did they do with the mangoes in the market?",k:"a",src:L4}
]}
];

var ALPHA=[
["a","like the a in Spanish casa","akpa","bag"],["b","like English b","kpabe","hoe"],
["ch","like the ch in church","chi","to pin"],["d","like English d","adɛ","eyes"],
["e","closed, like French é","ete","tree"],["ɛ","open, like the e in bed","ɛfere","cup"],
["f","like English f","ofiɔ","mango"],["g","hard, like go","agba","years old"],
["gb","g and b at the same instant","",""],["gw","g with rounded lips","",""],
["h","like English h","",""],["i","like the i in machine","bi","to close"],
["j","like English j","jaa","how"],["k","like English k","ɔka","farm"],
["kp","k and p at the same instant, a hollow pop","kpakpagoo","butterfly"],
["kw","k with rounded lips","",""],["l","like English l","laa","to pick"],
["m","like English m","mbalo","soup"],["n","like English n","nna","meat"],
["nw","n with rounded lips","nwɛɛ","last, past"],["ny","like the ñ in señor","adɛ nyɛ","her eyes"],
["o","closed, like French eau","oku","those who"],["ɔ","open and rounded, like law","ɔkãni","firewood"],
["p","like English p","ɔparánsi","passage"],["r","like English r","rã","my"],
["s","like English s","esaa","yams"],["sw","s with rounded lips","swe","to throw down"],
["t","like English t","ete","tree"],["u","like the u in flute","bui","read"],
["w","like English w","wɔ","what"],["y","like the y in yes","yɛ","his"],
["ʼ","a tiny catch, like uh-oh","ɛʼaa","mother"]
];
var NASAL=[["ã","ɔkãni","firewood"],["ɛ̃","",""],["ĩ","",""],["ɔ̃","",""],["ũ","",""]];
var UC=["--u1","--u2","--u3","--u4","--u5","--u6","--u7"];

/* ============================================================
   STATE
   ============================================================ */
var DAY=86400000;
function today(){return Math.floor((Date.now()-new Date().getTimezoneOffset()*60000)/DAY)}
function uid(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return"c"+(h>>>0).toString(36)}
UNITS.forEach(function(u){u.items.forEach(function(x){x.id=uid(x.e+"|"+x.m);x.u=u.n;x.c=u.c})});

var LS="eleme-kpakpagoo-v3";
var state={cards:{},days:0,last:null,unlocked:1,doneUnits:[],newPerDay:8,mine:[],
           mode:"recognise",game:"cards",checked:{},speaker:"",pos:null};
var db=null,saving=false,pending=false;

function loadLocal(){try{var r=localStorage.getItem(LS);if(r)state=Object.assign(state,JSON.parse(r))}catch(e){}}
function save(){
  try{localStorage.setItem(LS,JSON.stringify(state))}catch(e){}
  if(!db)return;
  if(saving){pending=true;return}saving=true;
  db.doc("state/main").set(JSON.parse(JSON.stringify(state)))
   .catch(function(){}).then(function(){saving=false;if(pending){pending=false;save()}})}

function view(x){
  var ck=state.checked[x.id];if(!ck)return x;
  var y=Object.assign({},x);y.k="s";y.src=(state.speaker||"A speaker");
  if(ck.e)y.e=ck.e; if(ck.m)y.m=ck.m;
  y.lit=(ck.e||ck.m)?"Corrected by a speaker. The lessons print <b>"+x.e+"</b> for “"+x.m+"”."
                    :"A speaker confirmed this.";
  return y;
}
function pool(){
  var o=[];
  UNITS.forEach(function(u){if(state.doneUnits.indexOf(u.n)>=0)o=o.concat(u.items.map(view))});
  state.mine.forEach(function(m){o.push({id:m.id,e:m.e,m:m.m,k:"s",src:state.speaker||"You",lit:m.n||"",u:0,c:"--u5"})});
  return o;
}
function cardOf(id){return state.cards[id]||{n:0,ivl:0,ef:2.5,due:0,seen:0}}
function countKnown(){var n=0;for(var k in state.cards)if(state.cards[k].ivl>=21)n++;return n}
function ivlFor(id,q){var c=cardOf(id);if(q===0)return 0;
  var ef=Math.max(1.3,c.ef+(0.1-(3-q)*(0.08+(3-q)*0.02)));
  if(c.n===0)return q===1?1:q===2?2:4;
  if(c.n===1)return q===1?2:q===2?4:7;
  return Math.max(1,Math.round(c.ivl*ef*(q===1?0.6:q===3?1.25:1)))}
function grade(id,q){var t=today(),c=Object.assign({},cardOf(id));
  if(q===0){c.n=0;c.ivl=0;c.due=t}
  else{c.ef=Math.max(1.3,c.ef+(0.1-(3-q)*(0.08+(3-q)*0.02)));c.ivl=ivlFor(id,q);c.n++;c.due=t+c.ivl}
  c.seen=(c.seen||0)+1;state.cards[id]=c}
function nextIn(id,q){var v=ivlFor(id,q);return v===0?"now":v===1?"1 day":v+" days"}
function countDay(){var t=today();if(state.last===t)return;state.days=(state.days||0)+1;state.last=t}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function badge(k){
  if(k==="s")return '<span class="tag t-s">checked by a speaker</span>';
  if(k==="a")return '<span class="tag t-a">straight from the lesson</span>';
  if(k==="c")return '<span class="tag t-c">seen twice</span>';
  return '<span class="tag t-i">my reading</span>';
}
function wordsOf(s){return s.trim().split(/\s+/)}
function shuffle(a){var b=a.slice(),i,j,t;
  for(i=b.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));t=b[i];b[i]=b[j];b[j]=t}return b}

/* ============================================================
   LESSON BUILDER — every option shown is a real word
   ============================================================ */
function makeQuiz(x,all){
  var wc=wordsOf(x.e).length;
  if(x.b&&Math.random()<.5)return{t:"build",x:x};
  if(wc<=2){
    var short=all.filter(function(y){return y.id!==x.id&&wordsOf(y.e).length<=2});
    if(short.length<3)short=all.filter(function(y){return y.id!==x.id});
    if(short.length<3)return null;
    return{t:"pick",x:x,dir:Math.random()<.5?"meaning":"word",opts:shuffle([x].concat(shuffle(short).slice(0,3)))};
  }
  var w=wordsOf(x.e),idx=1+Math.floor(Math.random()*(w.length-1)),seen={},bank=[];
  all.forEach(function(y){wordsOf(y.e).forEach(function(t){
    var clean=t.replace(/[?.,;]/g,"");
    if(clean&&clean!==w[idx]&&clean.length>1&&!seen[clean]){seen[clean]=1;bank.push(clean)}})});
  if(bank.length<3)return null;
  return{t:"gap",x:x,idx:idx,w:w,opts:shuffle([w[idx]].concat(shuffle(bank).slice(0,3)))};
}
function makeSteps(u){
  var items=u.items.map(view),steps=[],i,grp;
  if(u.story)steps.push({t:"story",u:u});
  for(i=0;i<items.length;i+=4){
    grp=items.slice(i,i+4);
    grp.forEach(function(x){steps.push({t:"teach",x:x})});
    shuffle(grp).slice(0,Math.min(3,grp.length)).forEach(function(x){
      var q=makeQuiz(x,items);if(q)steps.push(q)});
  }
  steps.push({t:"end",u:u});
  return steps;
}

/* ============================================================
   LEARN: list + player
   ============================================================ */
var run=null; /* {u, steps, i, answered, correct, slot, bank} */

function renderLearn(){
  if(run)return renderStep();
  document.getElementById("head").classList.remove("hidden");
  var el=document.getElementById("p-learn");
  var h='<h2 class="sec">Seven little units</h2>'+
   '<p class="lede">Press Go and the lesson takes you through, one word at a time, to the end of the '+
   'chapter. Everything you finish comes back later in Practice.</p><div class="units">';
  UNITS.forEach(function(u){
    var fin=state.doneUnits.indexOf(u.n)>=0,
        locked=u.n>state.unlocked,
        resuming=state.pos&&state.pos.u===u.n&&!fin,
        current=!fin&&!locked;
    h+='<div class="unit'+(current?" on":"")+(fin?" fin":"")+(locked?" locked":"")+'" style="--c:var('+u.c+')">'+
      '<span class="unum">'+u.n+'</span>'+
      '<span><span class="utitle">'+esc(u.t)+'</span>'+
      '<span class="usub">'+esc(u.s)+' · '+u.items.length+' words'+(fin?" · done":"")+'</span></span>'+
      (locked?'<span class="ulock">Locked</span>'
        :'<button class="ubtn'+(fin?' quiet':'')+'" data-go="'+u.n+'">'+
          (resuming?"Continue":fin?"Again":"Go")+'</button>')+
      '</div>';
  });
  el.innerHTML=h+'</div>';
  Array.prototype.forEach.call(el.querySelectorAll("[data-go]"),function(b){
    b.onclick=function(){startUnit(+b.dataset.go)}});
}

function startUnit(n){
  var u=UNITS[n-1];
  run={u:u,steps:makeSteps(u),i:0,answered:false,correct:null,slot:[],bank:[]};
  if(state.pos&&state.pos.u===n&&state.pos.i<run.steps.length)run.i=state.pos.i;
  prepStep();renderStep();
}
function prepStep(){
  var s=run.steps[run.i];
  run.answered=false;run.correct=null;run.picked=-1;
  if(s&&s.t==="build"){
    run.slot=[];
    run.bank=shuffle(wordsOf(s.x.e).map(function(w,i){return{w:w,i:i}}));
  }
}
function advance(){
  run.i++;
  if(run.i>=run.steps.length){run=null;state.pos=null;save();renderLearn();return}
  state.pos={u:run.u.n,i:run.i};save();prepStep();renderStep();
}
function quitRun(){state.pos=run?{u:run.u.n,i:run.i}:null;run=null;save();renderLearn();
  document.getElementById("head").classList.remove("hidden")}

function renderStep(){
  var el=document.getElementById("p-learn"),u=run.u,s=run.steps[run.i];
  var pct=Math.round(run.i/(run.steps.length-1)*100);
  document.getElementById("head").classList.toggle("hidden",s.t!=="end");

  var head='<div class="pbar"><button class="pquit" id="quit" aria-label="Leave the lesson">×</button>'+
    '<div class="ptrack"><i style="width:'+pct+'%"></i></div>'+
    '<span class="pcount">'+Math.min(run.i+1,run.steps.length-1)+'/'+(run.steps.length-1)+'</span></div>';
  var body="";

  if(s.t==="story"){
    body='<div class="step"><p class="slabel">READ THIS FIRST</p>'+
      '<p class="tale el">'+esc(u.story.e)+'</p><p class="taletr">'+esc(u.story.m)+'</p>'+
      '<div class="pfoot"><button class="next" id="nx">Start the unit</button></div></div>';
  }
  else if(s.t==="teach"){
    var x=s.x,long=wordsOf(x.e).length>3;
    body='<div class="step"><p class="slabel">'+(long?"NEW PHRASE":"NEW WORD")+'</p>'+
      '<p class="big el"'+(long?' style="font-size:clamp(22px,5.2vw,31px)"':'')+'>'+esc(x.e)+'</p>'+
      '<p class="mean">'+esc(x.m)+'</p>'+
      (x.lit?'<p class="snote">'+x.lit+'</p>':'')+
      '<div class="pfoot"><button class="next" id="nx">Got it</button></div></div>';
  }
  else if(s.t==="pick"){
    var mn=s.dir==="meaning";
    body='<div class="step"><p class="slabel">'+(mn?"WHAT DOES THIS MEAN?":"WHICH ONE IS IT?")+'</p>'+
      '<p class="ask'+(mn?' el':'')+'">'+esc(mn?s.x.e:s.x.m)+'</p>'+
      '<div class="opts">'+s.opts.map(function(o,i){
        return '<button class="opt'+(mn?"":" el")+'" data-opt="'+i+'">'+esc(mn?o.m:o.e)+'</button>'}).join("")+
      '</div>'+footArea()+'</div>';
  }
  else if(s.t==="gap"){
    var shown=s.w.map(function(w,i){return i===s.idx?"_____":w}).join(" ");
    body='<div class="step"><p class="slabel">WHICH WORD IS MISSING?</p>'+
      '<p class="ask el">'+esc(shown)+'</p>'+
      '<p class="asksub">'+esc(s.x.m)+'</p>'+
      '<div class="opts">'+s.opts.map(function(o,i){
        return '<button class="opt el" data-opt="'+i+'">'+esc(o)+'</button>'}).join("")+
      '</div>'+footArea()+'</div>';
  }
  else if(s.t==="build"){
    body='<div class="step"><p class="slabel">PUT IT IN ORDER</p>'+
      '<p class="ask">'+esc(s.x.m)+'</p>'+
      '<div class="slot" id="slot">'+run.slot.map(function(t,i){
        return '<button class="chip el" data-back="'+i+'">'+esc(t.w)+'</button>'}).join("")+'</div>'+
      '<div class="bank" id="bank">'+run.bank.map(function(t,i){
        return '<button class="chip el" data-take="'+i+'">'+esc(t.w)+'</button>'}).join("")+'</div>'+
      footArea(run.bank.length===0)+'</div>';
  }
  else if(s.t==="end"){
    var added=state.doneUnits.indexOf(u.n)<0;
    if(added){state.doneUnits.push(u.n);state.unlocked=Math.max(state.unlocked,u.n+1)}
    state.pos=null;countDay();save();updatePills();
    var nxt=UNITS[u.n];
    body='<div class="fin" style="--c:var('+u.c+')"><div class="finnum">'+u.n+'</div>'+
      '<p class="fintitle el">Ɔwanɛnu</p>'+
      '<p class="finsub">Unit '+u.n+' finished. Its '+u.items.length+' words are now in Practice, and they '+
      'will come back over the next few days so they stick.</p><div class="finrow">'+
      (nxt&&state.doneUnits.indexOf(nxt.n)<0?'<button class="btn go" style="--go:var('+nxt.c+')" id="nu">Start unit '+nxt.n+'</button>':'')+
      '<button class="btn" id="bk">Back to the units</button>'+
      '<button class="btn" id="pr">Practice now</button></div></div>';
    el.innerHTML=body;
    var nu=document.getElementById("nu");
    if(nu)nu.onclick=function(){startUnit(nxt.n)};
    document.getElementById("bk").onclick=function(){run=null;renderLearn()};
    document.getElementById("pr").onclick=function(){run=null;startSession();show("practice")};
    return;
  }

  el.innerHTML='<div class="play" style="--c:var('+u.c+')">'+head+body+'</div>';
  var q=document.getElementById("quit");if(q)q.onclick=quitRun;
  var nx=document.getElementById("nx");if(nx)nx.onclick=advance;

  Array.prototype.forEach.call(el.querySelectorAll("[data-opt]"),function(b){
    b.onclick=function(){
      if(run.answered)return;
      var i=+b.dataset.opt,ok;
      if(s.t==="pick")ok=(s.opts[i].id===s.x.id); else ok=(s.opts[i]===s.w[s.idx]);
      run.answered=true;run.correct=ok;run.picked=i;
      grade(s.x.id,ok?2:0);countDay();save();updatePills();renderStep();
    }});
  if(run.answered){
    Array.prototype.forEach.call(el.querySelectorAll("[data-opt]"),function(b){
      var i=+b.dataset.opt,isRight;
      if(s.t==="pick")isRight=(s.opts[i].id===s.x.id); else isRight=(s.opts[i]===s.w[s.idx]);
      b.classList.add(isRight?"right":(i===run.picked?"wrong":"dim"));
      b.setAttribute("disabled","disabled");
    });
  }
  Array.prototype.forEach.call(el.querySelectorAll("[data-take]"),function(b){
    b.onclick=function(){var i=+b.dataset.take;run.slot.push(run.bank[i]);run.bank.splice(i,1);renderStep()}});
  Array.prototype.forEach.call(el.querySelectorAll("[data-back]"),function(b){
    b.onclick=function(){var i=+b.dataset.back;run.bank.push(run.slot[i]);run.slot.splice(i,1);
      run.answered=false;run.correct=null;renderStep()}});
  var ck=document.getElementById("check");
  if(ck)ck.onclick=function(){
    var ok=run.slot.map(function(t){return t.w}).join(" ")===s.x.e;
    run.answered=true;run.correct=ok;grade(s.x.id,ok?2:0);countDay();save();updatePills();renderStep()};
}

function footArea(ready){
  var s=run.steps[run.i];
  if(!run.answered){
    if(s.t==="build")
      return '<div class="pfoot"><button class="next'+(ready?'':' off')+'" id="check"'+
             (ready?'':' disabled')+'>Check</button></div>';
    return '<div class="pfoot"><p class="verdict">&nbsp;</p><button class="next off" disabled>Pick one</button></div>';
  }
  var right=run.correct,ans=(s.t==="pick")?(s.dir==="meaning"?s.x.m:s.x.e)
            :(s.t==="gap"?s.w[s.idx]:s.x.e);
  return '<div class="pfoot"><p class="verdict '+(right?"ok":"no")+'">'+
    (right?"That is it.":"Not this time.")+
    '<span>'+(right?esc(s.x.e)+" · "+esc(s.x.m):"The answer is "+esc(ans))+'</span></p>'+
    '<button class="next" id="nx2">Carry on</button></div>';
}

/* ============================================================
   PRACTICE
   ============================================================ */
var queue=[],cur=null,flipped=false,total=0,done=0;
function buildQueue(){
  var t=today(),due=[],fresh=[];
  pool().forEach(function(x){var c=state.cards[x.id];
    if(!c)fresh.push(x);else if(c.due<=t)due.push(x)});
  due.sort(function(a,b){return cardOf(a.id).due-cardOf(b.id).due});
  return due.concat(fresh.slice(0,state.newPerDay));
}
function startSession(){queue=buildQueue();total=queue.length;done=0;cur=queue.shift()||null;flipped=false}
function producing(){if(state.mode==="produce")return true;
  if(state.mode==="recognise")return false;return cardOf(cur.id).n>=2}
function switcher(){return '<div class="switch">'+
  [["cards","Flashcards"],["sentences","Build a sentence"]].map(function(g){
    return '<button data-g="'+g[0]+'" aria-pressed="'+(state.game===g[0])+'">'+g[1]+'</button>'}).join("")+'</div>'}
function wireSwitch(el){Array.prototype.forEach.call(el.querySelectorAll(".switch button"),function(b){
  b.onclick=function(){state.game=b.dataset.g;save();renderPractice()}})}

function renderPractice(){
  var el=document.getElementById("p-practice");
  if(!state.doneUnits.length){
    el.innerHTML='<div class="rest"><p class="bigt">Nothing here yet</p>'+
      '<p>Finish the first unit in Learn. Everything you meet there turns up here afterwards.</p>'+
      '<button class="btn go" id="go">Take me to Learn</button></div>';
    document.getElementById("go").onclick=function(){show("learn")};return}
  if(state.game==="sentences")return renderGame(el);

  var dirs='<div class="dirs">'+
    [["recognise","Eleme → English"],["mixed","Mix it up"],["produce","English → Eleme"]]
    .map(function(m){return '<button data-m="'+m[0]+'" aria-pressed="'+(state.mode===m[0])+'">'+m[1]+'</button>'}).join("")+'</div>';
  if(!cur){
    var fresh=pool().filter(function(x){return !state.cards[x.id]}).length;
    el.innerHTML=switcher()+'<div class="rest"><p class="bigt el">Ɔwanɛnu</p><p>'+
      (done?done+' card'+(done===1?'':'s')+' done. ':'')+
      (fresh?fresh+' still waiting from the units you have finished.'
            :'Nothing due today. Start another unit, or come back tomorrow.')+'</p>'+
      '<button class="btn go" id="again">'+(fresh?'Keep going':'Shuffle ten anyway')+'</button></div>';
    wireSwitch(el);
    document.getElementById("again").onclick=function(){startSession();
      if(!cur){var p=shuffle(pool()).slice(0,10);queue=p;total=p.length;done=0;cur=queue.shift()||null}
      flipped=false;renderPractice();updatePills()};
    return}
  var c=cardOf(cur.id),pct=total?Math.round(done/total*100):0,prod=producing();
  var meta='<div class="fmeta"><span>'+(cur.u?"Unit "+cur.u:"Your word")+'</span>'+
    '<span>'+(c.n>0?"seen "+c.seen+"×":"new")+'</span></div>';
  el.innerHTML=switcher()+dirs+'<div class="track"><i style="width:'+pct+'%"></i></div>'+
   '<div class="flip'+(flipped?' on':'')+'" style="--c:var('+(cur.c||"--u1")+')"><div class="flip-in">'+
    '<div class="face front">'+meta+'<p class="q'+(prod?' en':' el')+'">'+esc(prod?cur.m:cur.e)+'</p>'+
      '<div class="foot"><div class="tapme" id="flipme">'+(prod?"Show the Eleme":"Show what it means")+'</div></div></div>'+
    '<div class="face back">'+meta+'<p class="a'+(prod?' el':' en')+'">'+esc(prod?cur.e:cur.m)+'</p>'+
      (cur.lit?'<p class="note">'+cur.lit+'</p>':'')+
      '<div class="srcline">'+badge(cur.k)+'<span>'+esc(cur.src)+'</span></div>'+
      '<div class="foot"><div class="grades">'+
        '<button data-q="0">Again<small>now</small></button>'+
        '<button data-q="1">Hard<small>'+nextIn(cur.id,1)+'</small></button>'+
        '<button data-q="2">Good<small>'+nextIn(cur.id,2)+'</small></button>'+
        '<button data-q="3">Easy<small>'+nextIn(cur.id,3)+'</small></button></div></div></div>'+
   '</div></div>';
  wireSwitch(el);
  Array.prototype.forEach.call(el.querySelectorAll(".dirs button"),function(b){
    b.onclick=function(){state.mode=b.dataset.m;save();flipped=false;renderPractice()}});
  var f=document.getElementById("flipme");if(f)f.onclick=function(){flipped=true;renderPractice()};
  Array.prototype.forEach.call(el.querySelectorAll(".grades button"),function(b){
    b.onclick=function(){var q=+b.dataset.q;grade(cur.id,q);
      if(q===0)queue.push(cur);else done++;
      countDay();save();cur=queue.shift()||null;flipped=false;renderPractice();updatePills()}});
}

var gCur=null,gBank=[],gSlot=[],gRes="";
function gList(){var o=[];UNITS.forEach(function(u){if(state.doneUnits.indexOf(u.n)>=0)
  u.items.forEach(function(x){if(x.b)o.push(view(x))})});return o}
function newGame(){var l=gList();if(!l.length){gCur=null;return}
  var p=l[Math.floor(Math.random()*l.length)];
  if(gCur&&l.length>1&&p.id===gCur.id)return newGame();
  gCur=p;gSlot=[];gRes="";gBank=shuffle(wordsOf(p.e).map(function(w,i){return{w:w,i:i}}))}
function renderGame(el){
  if(!gList().length){
    el.innerHTML=switcher()+'<div class="rest"><p class="bigt">Not open yet</p>'+
      '<p>Unit 5 is where sentences are taught. Finish it and this unlocks.</p>'+
      '<button class="btn go" id="go">Take me to Learn</button></div>';
    wireSwitch(el);document.getElementById("go").onclick=function(){show("learn")};return}
  if(!gCur)newGame();
  el.innerHTML=switcher()+
   '<p class="lede">Every sentence here is printed whole in a lesson, so you are never asked to invent Eleme.</p>'+
   '<div class="game" style="--c:var(--u6)"><p class="gtarget">'+esc(gCur.m)+'</p>'+
   '<div class="slot">'+gSlot.map(function(t,i){
     return '<button class="chip el" data-back="'+i+'">'+esc(t.w)+'</button>'}).join("")+'</div>'+
   '<div class="bank">'+gBank.map(function(t,i){
     return '<button class="chip el" data-take="'+i+'">'+esc(t.w)+'</button>'}).join("")+'</div>'+
   '<p class="verdict '+(gRes==="ok"?"ok":gRes==="no"?"no":"")+'" style="margin-top:16px">'+
     (gRes==="ok"?'That is it.':gRes==="no"?'Not the order the lesson gives.':'&nbsp;')+'</p>'+
   '<div style="display:flex;gap:9px;flex-wrap:wrap">'+
     (gBank.length===0&&gRes!=="ok"?'<button class="btn go" style="--go:var(--u6)" id="chk">Check it</button>':'')+
     (gRes==="ok"?'<button class="btn go" style="--go:var(--u6)" id="nxt">Next one</button>':'')+
     '<button class="btn sm" id="showme">Show me</button>'+
     '<button class="btn sm" id="skip">Skip</button></div></div>';
  wireSwitch(el);
  Array.prototype.forEach.call(el.querySelectorAll("[data-take]"),function(b){
    b.onclick=function(){var i=+b.dataset.take;gSlot.push(gBank[i]);gBank.splice(i,1);gRes="";renderPractice()}});
  Array.prototype.forEach.call(el.querySelectorAll("[data-back]"),function(b){
    b.onclick=function(){var i=+b.dataset.back;gBank.push(gSlot[i]);gSlot.splice(i,1);gRes="";renderPractice()}});
  var chk=document.getElementById("chk");
  if(chk)chk.onclick=function(){gRes=(gSlot.map(function(t){return t.w}).join(" ")===gCur.e)?"ok":"no";
    if(gRes==="ok"){grade(gCur.id,2);countDay();save();updatePills()}renderPractice()};
  var nxt=document.getElementById("nxt");if(nxt)nxt.onclick=function(){newGame();renderPractice()};
  document.getElementById("showme").onclick=function(){
    gSlot=wordsOf(gCur.e).map(function(w,i){return{w:w,i:i}});gBank=[];gRes="ok";renderPractice()};
  document.getElementById("skip").onclick=function(){newGame();renderPractice()};
}

/* ============================================================
   ALPHABET
   ============================================================ */
function renderAlphabet(){
  document.getElementById("p-alphabet").innerHTML=
  '<h2 class="sec">The alphabet</h2>'+
  '<p class="lede">36 letters. Pairs like <span class="el">kp</span> and <span class="el">gb</span> count as '+
  'one letter each. A letter always sounds the same, wherever it turns up.</p>'+
  '<div class="grid">'+ALPHA.map(function(a,i){
    return '<div class="let" style="--c:var('+UC[i%7]+')"><b>'+a[0]+'</b><span class="say">'+esc(a[1])+'</span>'+
      (a[2]?'<span class="ex"><em>'+esc(a[2])+'</em> · '+esc(a[3])+'</span>':'')+'</div>'}).join("")+'</div>'+
  '<h2 class="sec" style="margin-top:30px">Vowels through the nose</h2>'+
  '<p class="lede">Same vowel, with air going through the nose too, the way French <em>an</em> and <em>on</em> '+
  'work. Four of these five have no example anywhere in the lessons.</p>'+
  '<div class="grid">'+NASAL.map(function(a){
    return '<div class="let" style="--c:var(--u5)"><b>'+a[0]+'</b>'+
      (a[1]?'<span class="ex"><em>'+esc(a[1])+'</em> · '+esc(a[2])+'</span>':'<span class="ex">no example yet</span>')+
      '</div>'}).join("")+'</div>'+
  '<div class="box" style="margin-top:24px"><h3>One honest warning</h3>'+
  '<p class="sub" style="margin:0">These descriptions tell you what the letters stand for. They cannot tell you '+
  'the tone, and in Eleme the pitch of a syllable is part of the word. The lessons mark tone only now and then. '+
  'So this page gets you reading. For speaking, you need to hear someone.</p></div>';
}

/* ============================================================
   MY WORDS
   ============================================================ */
var KEYS=["ɔ","ɛ","ã","ɛ̃","ĩ","ɔ̃","ũ","ʼ","à","á","ā","ū","ī"];
function doubtful(){var o=[];UNITS.forEach(function(u){u.items.forEach(function(x){
  if(!state.checked[x.id]&&(x.k==="i"||x.k==="c"))o.push(x)})});return o}

function renderMine(){
  var el=document.getElementById("p-mine"),list=doubtful(),nb=Object.keys(state.checked).length;
  var h='<h2 class="sec">My words</h2>'+
   '<p class="lede">Anything you pick up outside this app goes here and joins Practice straight away.</p>'+
   '<div class="box accent"><h3>Add a word</h3>'+
   '<p class="sub">Heard it from someone, found it in a book, saw it on a sign: put it in.</p>'+
   '<form class="add" id="addf">'+
     '<div><label for="f-el">The Eleme word</label><input id="f-el" autocomplete="off" placeholder="kpakpagoo">'+
     '<div class="keys">'+KEYS.map(function(k){return '<button type="button" data-k="'+k+'">'+k+'</button>'}).join("")+'</div></div>'+
     '<div><label for="f-en">What it means</label><input id="f-en" autocomplete="off" placeholder="butterfly"></div>'+
     '<div><label for="f-note">Where it came from (optional)</label><input id="f-note" autocomplete="off" placeholder="my friend Kingsley"></div>'+
     '<div><button class="btn go" style="--go:var(--u5)" type="submit">Add it</button></div>'+
   '</form></div>';
  h+=(state.mine.length
    ?'<h3 style="font-family:\'Baloo 2\',sans-serif;font-weight:700;font-size:19px;margin:0 0 10px">'+
      state.mine.length+' word'+(state.mine.length===1?'':'s')+' you have added</h3>'+
     '<div class="words" style="margin-bottom:26px">'+state.mine.map(function(m){
       return '<div class="w"><div class="e el">'+esc(m.e)+'</div><div class="m">'+esc(m.m)+'</div>'+
        '<div class="x">'+badge("s")+(m.n?'<span>'+esc(m.n)+'</span>':'')+
        '<button class="del" data-id="'+m.id+'">remove</button></div></div>'}).join("")+'</div>'
    :'<div class="empty" style="margin-bottom:26px">Nothing added yet. The first word someone teaches you goes here.</div>');
  h+='<h2 class="sec">Words worth double-checking</h2>'+
   '<p class="lede">All the Eleme in this app comes from one blog written in 2013. For '+list.length+' of these '+
   'words I had to work out the meaning myself, from the sentence around them. If you know someone who speaks '+
   'Eleme, these are the ones to run past them. Whatever they say beats the blog, and the app will teach their '+
   'version instead.</p>'+
   '<div class="box"><label for="spk" style="font-size:11.5px;font-weight:700;color:var(--ink2);display:block;margin-bottom:6px">Who is helping you check?</label>'+
   '<div class="cfix"><input id="spk" placeholder="their first name" value="'+esc(state.speaker)+'">'+
   '<button class="btn sm" id="spksave">Save</button></div>'+
   (nb?'<p class="sub" style="margin:13px 0 0">'+nb+' checked so far.</p>':'')+
   '<p class="sub" style="margin:13px 0 0"><button class="btn sm" id="copy">Copy the next five as a message</button></p></div>';
  if(!list.length)h+='<div class="empty">Every doubtful word has been checked.</div>';
  list.slice(0,12).forEach(function(x){
    h+='<div class="chk"><div class="ctop"><span class="cel">'+esc(x.e)+'</span>'+
      '<span class="cen">'+esc(x.m)+'</span>'+badge(x.k)+'</div>'+
      '<p class="cwhy">'+(x.lit?x.lit:"Printed in "+x.src+" with nothing around it to check against.")+'</p>'+
      '<div class="cact"><button class="btn sm" data-ok="'+x.id+'">They say it is right</button>'+
      '<button class="btn sm" data-fixopen="'+x.id+'">They gave a different word</button></div>'+
      '<div class="cfix" id="fix-'+x.id+'" hidden><input class="el" id="fe-'+x.id+'" value="'+esc(x.e)+'">'+
      '<input id="fm-'+x.id+'" value="'+esc(x.m)+'">'+
      '<button class="btn sm" data-fix="'+x.id+'">Save their version</button></div></div>'});
  if(list.length>12)h+='<p class="hint">'+(list.length-12)+' more after these.</p>';
  el.innerHTML=h;

  var inp=document.getElementById("f-el");
  Array.prototype.forEach.call(el.querySelectorAll(".keys button"),function(b){
    b.onclick=function(){var s=inp.selectionStart==null?inp.value.length:inp.selectionStart,k=b.dataset.k;
      inp.value=inp.value.slice(0,s)+k+inp.value.slice(inp.selectionEnd==null?s:inp.selectionEnd);
      inp.focus();inp.setSelectionRange(s+k.length,s+k.length)}});
  document.getElementById("addf").onsubmit=function(ev){ev.preventDefault();
    var e=inp.value.trim(),m=document.getElementById("f-en").value.trim(),
        n=document.getElementById("f-note").value.trim();
    if(!e||!m)return;
    state.mine.push({id:"m"+Date.now().toString(36),e:e,m:m,n:n});save();renderMine();updatePills()};
  Array.prototype.forEach.call(el.querySelectorAll(".del"),function(b){
    b.onclick=function(){state.mine=state.mine.filter(function(m){return m.id!==b.dataset.id});
      save();renderMine();updatePills()}});
  document.getElementById("spksave").onclick=function(){
    state.speaker=document.getElementById("spk").value.trim();save();renderMine()};
  document.getElementById("copy").onclick=function(){
    var b=document.getElementById("copy");
    var txt=list.slice(0,5).map(function(x,i){
      return (i+1)+". "+x.e+" — I have this as “"+x.m+"”. Is that right, and would you say it that way?"}).join("\n");
    try{navigator.clipboard.writeText("Some Eleme words I am trying to check:\n\n"+txt);b.textContent="Copied"}
    catch(e){b.textContent="Could not copy"}
    setTimeout(function(){b.textContent="Copy the next five as a message"},1800)};
  Array.prototype.forEach.call(el.querySelectorAll("[data-ok]"),function(b){
    b.onclick=function(){state.checked[b.dataset.ok]={t:today()};save();renderMine();updatePills()}});
  Array.prototype.forEach.call(el.querySelectorAll("[data-fixopen]"),function(b){
    b.onclick=function(){var f=document.getElementById("fix-"+b.dataset.fixopen);f.hidden=!f.hidden}});
  Array.prototype.forEach.call(el.querySelectorAll("[data-fix]"),function(b){
    b.onclick=function(){var id=b.dataset.fix;
      state.checked[id]={t:today(),e:document.getElementById("fe-"+id).value.trim(),
                         m:document.getElementById("fm-"+id).value.trim()};
      save();renderMine();updatePills()}});
}

/* ============================================================
   ABOUT
   ============================================================ */
function renderAbout(){
  document.getElementById("p-about").innerHTML=
  '<h2 class="sec">Where every word comes from</h2><div class="prose">'+
  '<p><strong>Nothing here is invented.</strong> Every line was copied letter by letter from a lesson someone '+
  'published. Eleme has around 40,000 speakers and almost nothing online, so this collection is small on '+
  'purpose. A small true one beats a big wrong one.</p>'+
  '<h3>The four labels on the words</h3>'+
  '<p>'+badge("s")+' Someone who speaks Eleme confirmed it, or corrected it. This beats everything else, and '+
  'it is the only label that can grow. That is what <strong>My words</strong> is for.</p>'+
  '<p>'+badge("a")+' The lesson prints that word against that meaning, usually inside a full sentence.</p>'+
  '<p>'+badge("c")+' The same word shows up in two separate places meaning the same thing. '+
  '<span class="el">ewo</span> is “five” in a lesson title and again in “a five year old child”.</p>'+
  '<p>'+badge("i")+' I worked it out from the sentence around it. Usually sound, still only my reading.</p>'+
  '<h3>The first correction from a speaker</h3>'+
  '<p>The lessons print <strong>kpakpagogo</strong> for butterfly. A speaker born in Eleme country says '+
  '<strong>kpakpagoo</strong>. His version wins, and the app is named after it. That is the whole idea in one '+
  'word: a blog from 2013 is a starting point, a person is the authority.</p>'+
  '<h3>Mistakes I made and fixed</h3>'+
  '<p>My first pass read a summary of these lessons rather than the exact text, which put five errors into the '+
  'first version of this app.</p>'+
  '<div class="fix"><p class="now">oso</p><p class="was"><s>school</s> → <strong>in</strong>. School is '+
  '<span class="el">ɔtɔɔ nsã</span>.</p></div>'+
  '<div class="fix"><p class="now">oku</p><p class="was"><s>church</s> → <strong>those who</strong>. Church is '+
  '<span class="el">ɔtɔɔ Ɔbari</span>, the house of God.</p></div>'+
  '<div class="fix"><p class="now">ninini</p><p class="was"><s>will go</s> → <strong>today</strong>. The meaning '+
  'was attached to the wrong word in the sentence.</p></div>'+
  '<div class="fix"><p class="now">nnɛ</p><p class="was"><s>one / cup</s> → <strong>one</strong>. Cup is '+
  '<span class="el">ɛfere</span>.</p></div>'+
  '<div class="fix"><p class="now">Lesson 6</p><p class="was">I had turned pieces of sentences into dictionary '+
  'entries. They now sit inside the sentences they came from.</p></div>'+
  '<h3>Still open</h3><ul>'+
  '<li>The printed alphabet comes to 37 items while the text says 36. I have not quietly dropped one to make '+
  'the sum work.</li>'+
  '<li>Four of the five nasal vowels have no example word anywhere.</li>'+
  '<li>Counting stops at six because the lessons stop at six.</li>'+
  '<li>There is an Eleme anthem in Lesson 3, left out here: the translation I could get read as smoothed rather '+
  'than literal, and a wrong anthem is worse than none.</li>'+
  '<li>No audio exists for free. For a language where pitch changes meaning, that is the real gap.</li></ul>'+
  '<h3>Sources</h3><p class="srcs">'+
  '<a href="https://mpiooeleme.wordpress.com/2013/04/15/learn-eleme-alphabets/" target="_blank" rel="noopener">Mpioo Eleme, Lesson 1: the alphabet</a><br>'+
  '<a href="https://mpiooeleme.wordpress.com/2013/05/03/learn-eleme-language/" target="_blank" rel="noopener">Mpioo Eleme, Lesson 2: the sounds</a><br>'+
  '<a href="https://mpiooeleme.wordpress.com/2013/05/08/learn-eleme-language-3/" target="_blank" rel="noopener">Mpioo Eleme, Lesson 4: people, and the mango story</a><br>'+
  '<a href="https://mpiooeleme.wordpress.com/2013/05/08/learn-eleme-language-4/" target="_blank" rel="noopener">Mpioo Eleme, Lesson 5: greetings</a><br>'+
  '<a href="https://mpiooeleme.wordpress.com/2013/05/17/learn-eleme-language-5/" target="_blank" rel="noopener">Mpioo Eleme, Lesson 6: sentences</a><br>'+
  '<a href="https://www.smg.surrey.ac.uk/languages/eleme/" target="_blank" rel="noopener">Surrey Morphology Group, Eleme</a><br>'+
  '<a href="https://en.wikipedia.org/wiki/Eleme_language" target="_blank" rel="noopener">Eleme language, Wikipedia</a>'+
  '</p></div>';
}

/* ============================================================
   SHELL
   ============================================================ */
function updatePills(){
  document.getElementById("m-unit").textContent=Math.min(state.unlocked,UNITS.length);
  document.getElementById("m-held").textContent=countKnown();
  document.getElementById("m-days").textContent=state.days||0;
}
var RENDER={learn:renderLearn,practice:renderPractice,alphabet:renderAlphabet,mine:renderMine,about:renderAbout};
function show(tab){
  if(tab!=="learn"&&run){state.pos={u:run.u.n,i:run.i};run=null;save();
    document.getElementById("head").classList.remove("hidden")}
  Array.prototype.forEach.call(document.querySelectorAll("nav.tabs button"),function(b){
    b.setAttribute("aria-selected",b.dataset.tab===tab)});
  ["learn","practice","alphabet","mine","about"].forEach(function(t){
    document.getElementById("p-"+t).hidden=(t!==tab)});
  RENDER[tab]();
  try{localStorage.setItem(LS+"-tab",tab)}catch(e){}
}
Array.prototype.forEach.call(document.querySelectorAll("nav.tabs button"),function(b){
  b.onclick=function(){show(b.dataset.tab)}});
document.addEventListener("click",function(ev){
  if(ev.target&&ev.target.id==="nx2")advance();
});

loadLocal();
if(!Array.isArray(state.mine))state.mine=[];
if(!Array.isArray(state.doneUnits))state.doneUnits=[];
if(!state.checked||typeof state.checked!=="object")state.checked={};
if(!state.game)state.game="cards";
startSession();
var tab="learn";
try{var st=localStorage.getItem(LS+"-tab");if(st&&RENDER[st])tab=st}catch(e){}
show(tab);updatePills();

(function(){
  if(!window.claude||!window.claude.use)return;
  window.claude.use("db").then(function(d){
    if(!d)return;db=d;
    return d.doc("state/main").get().then(function(snap){
      if(snap&&snap.exists){
        var r=snap.data()||{};
        var lo=Object.keys(state.cards).length,ro=Object.keys(r.cards||{}).length;
        if(ro>lo||(ro===lo&&(r.doneUnits||[]).length>=state.doneUnits.length)){
          state=Object.assign(state,r);
          if(!Array.isArray(state.mine))state.mine=[];
          if(!Array.isArray(state.doneUnits))state.doneUnits=[];
          if(!state.checked||typeof state.checked!=="object")state.checked={};
          if(!state.game)state.game="cards";
          startSession();run=null;
          show(document.querySelector('nav.tabs button[aria-selected="true"]').dataset.tab);
          updatePills();
        } else save();
      } else save();
      document.getElementById("footnote").textContent="Saved and synced across your devices";
    });
  }).catch(function(){});
})();
