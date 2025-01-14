// row 1
const tilt_sign = document.querySelector(".tilt-sign");
const rowNumOne = document.querySelector(".rowNumOne");
const rowNumTwo = document.querySelector(".rowNumTwo");
const rowNumThree = document.querySelector(".rowNumThree");
const rowNumFour = document.querySelector(".rowNumFour");
const rowNumFive = document.querySelector(".rowNumFive");
const rowNumSix = document.querySelector(".rowNumSix");
const rowNumSeven = document.querySelector(".rowNumSeven");
const rowNumEight = document.querySelector(".rowNumEight");
const rowNumNine = document.querySelector(".rowNumNine");
const rowNumZero = document.querySelector(".rowNumZero");
const hipen_sign = document.querySelector(".hipen-sign");
const plusEqual_sign = document.querySelector(".plusEqual-sign");
const backspace = document.querySelector(".backspace");
const endKey = document.querySelector(".endKey");
const pageDown = document.querySelector(".pageDown");
const numLock = document.querySelector(".numLock");
const numSlash = document.querySelector(".numSlash");
const numAsterisk = document.querySelector(".numAsterisk");

// row 3
const tabKey = document.querySelector(".tabKey");
const q = document.querySelector(".q");
const w = document.querySelector(".w");
const e = document.querySelector(".e");
const r = document.querySelector(".r");
const t = document.querySelector(".t");
const y = document.querySelector(".y");
const u = document.querySelector(".u");
const i = document.querySelector(".i");
const o = document.querySelector(".o");
const p = document.querySelector(".p");
const sqBracket = document.querySelector(".sqBracket");
const curlyBracket = document.querySelector(".curlyBracket");
const pipeSign = document.querySelector(".pipeSign");
const insert = document.querySelector(".insert");
const numPadSeven = document.querySelector(".numPadSeven");
const numPadEight = document.querySelector(".numPadEight");
const numPadNine = document.querySelector(".numPadNine");
const numPadPlus = document.querySelector(".numPadPlus");

// row 4
const capsLock = document.querySelector(".capsLock");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");
const colons = document.querySelector(".colons");
const qout = document.querySelector(".qout");
const enter = document.querySelector(".enter");
const del = document.querySelector(".del");
const numPadFour = document.querySelector(".numPadFour");
const numPadFive = document.querySelector(".numPadFive");
const numPadSix = document.querySelector(".numPadSix");
const numPadMinus = document.querySelector(".numPadMinus");

// row 5
const shift = document.querySelector(".shift");
const z = document.querySelector(".z");
const x = document.querySelector(".x");
const c = document.querySelector(".c");
const v = document.querySelector(".v");
const b = document.querySelector(".b");
const n = document.querySelector(".n");
const m = document.querySelector(".m");
const lessThan = document.querySelector(".lessThan");
const greaterThan = document.querySelector(".greaterThan");
const questionSign = document.querySelector(".questionSign");
const shift2 = document.querySelector(".shift2");

const upArrow = document.querySelector(".upArrow");
const numPadOne = document.querySelector(".numPadOne");
const numPadTwo = document.querySelector(".numPadTwo");
const numPadThree = document.querySelector(".numPadThree");
const enter2 = document.querySelector(".enter2");

// row 6
const control = document.querySelector(".control");
const control2 = document.querySelector(".control2");
const win = document.querySelector(".win");
const metaKey = document.querySelector(".metaKey");
const alt = document.querySelector(".alt");
const alt2 = document.querySelector(".alt2");
const spacebar = document.querySelector(".spacebar");
const leftArrow = document.querySelector(".leftArrow");
const downArrow = document.querySelector(".downArrow");
const rightArrow = document.querySelector(".rightArrow");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const rightClick = document.querySelector(".rightClick");

// row 1
const esc = document.querySelector(".esc");
const f1 = document.querySelector(".f1");
const f2 = document.querySelector(".f2");
const f3 = document.querySelector(".f3");
const f4 = document.querySelector(".f4");
const f5 = document.querySelector(".f5");
const f6 = document.querySelector(".f6");
const f7 = document.querySelector(".f7");
const f8 = document.querySelector(".f8");
const f9 = document.querySelector(".f9");
const f10 = document.querySelector(".f10");
const f11 = document.querySelector(".f11");
const f12 = document.querySelector(".f12");
const home = document.querySelector(".home");
const pageUp = document.querySelector(".pageUp");
const pauseBreak = document.querySelector(".pauseBreak");
const printScreen = document.querySelector(".printScreen").value;
const screenLock = document.querySelector(".screenLock");
const displayKey = document.querySelector(".displayKey");

document.addEventListener("keydown", (event) => {
     event.preventDefault();
     let keyWord = event.key;
     let key = event.keyCode;
     console.log(key);
     displayKey.innerText = `<${keyWord}>`;
     playAudio(key);

     // row 1
     switch (key) {
          case 27:
               {
                    esc.classList.add("lh1");
               }
               break;
          case 112:
               {
                    f1.classList.add("lh1");
               }
               break;
          case 113:
               {
                    f2.classList.add("lh1");
               }
               break;
          case 114:
               {
                    f3.classList.add("lh1");
               }
               break;
          case 115:
               {
                    f4.classList.add("lh2");
               }
               break;
          case 116:
               {
                    f5.classList.add("lh2");
               }
               break;
          case 117:
               {
                    f6.classList.add("lh2");
               }
               break;
          case 118:
               {
                    f7.classList.add("lh2");
               }
               break;
          case 119:
               {
                    f8.classList.add("lh2");
               }
               break;
          case 120:
               {
                    f9.classList.add("lh3");
               }
               break;
          case 121:
               {
                    f10.classList.add("lh3");
               }
               break;
          case 122:
               {
                    f11.classList.add("lh3");
               }
               break;
          case 123:
               {
                    f12.classList.add("lh3");
               }
               break;
          case 36:
               {
                    home.classList.add("lh6");
               }
               break;
          case 33:
               {
                    pageUp.classList.add("lh7");
               }
               break;
          case 19:
               {
                    pauseBreak.classList.add("lh5");
               }
               break;
          case 145:
               {
                    screenLock.classList.add("lh8");
               }
               break;
          case printScreen:
               {
                    printScreen.classList.add("lh5");
               }
               break;
     }

     // row 2
     switch (key) {
          case 192:
               {
                    tilt_sign.classList.add("lh1");
               }
               break;
          case 49:
               {
                    rowNumOne.classList.add("lh1");
               }
               break;
          case 50:
               {
                    rowNumTwo.classList.add("lh2");
               }
               break;
          case 51:
               {
                    rowNumThree.classList.add("lh3");
               }
               break;
          case 52:
               {
                    rowNumFour.classList.add("lh4");
               }
               break;
          case 53:
               {
                    rowNumFive.classList.add("lh4");
               }
               break;
          case 54:
               {
                    rowNumSix.classList.add("lh5");
               }
               break;
          case 55:
               {
                    rowNumSeven.classList.add("lh5");
               }
               break;
          case 56:
               {
                    rowNumEight.classList.add("lh6");
               }
               break;
          case 57:
               {
                    rowNumNine.classList.add("lh7");
               }
               break;
          case 48:
               {
                    rowNumZero.classList.add("lh8");
               }
               break;
          case 189:
               {
                    hipen_sign.classList.add("lh8");
               }
               break;
          case 187:
               {
                    plusEqual_sign.classList.add("lh8");
               }
               break;
          case 8:
               {
                    backspace.classList.add("lh8");
               }
               break;
          case 35:
               {
                    endKey.classList.add("lh6");
               }
               break;
          case 34:
               {
                    pageDown.classList.add("lh7");
               }
               break;
          case 144:
               {
                    numLock.classList.add("lh5");
               }
               break;
          case 111:
               {
                    numSlash.classList.add("lh6");
               }
               break;
          case 106:
               {
                    numAsterisk.classList.add("lh8");
               }
               break;
     }

     // row 3
     switch (key) {
          case 9:
               {
                    tabKey.classList.add("lh1");
               }
               break;
          case 81:
               {
                    q.classList.add("lh1");
               }
               break;
          case 87:
               {
                    w.classList.add("lh2");
               }
               break;
          case 69:
               {
                    e.classList.add("lh3");
               }
               break;
          case 82:
               {
                    r.classList.add("lh4");
               }
               break;
          case 84:
               {
                    t.classList.add("lh4");
               }
               break;
          case 89:
               {
                    y.classList.add("lh5");
               }
               break;
          case 85:
               {
                    u.classList.add("lh5");
               }
               break;
          case 73:
               {
                    i.classList.add("lh6");
               }
               break;
          case 79:
               {
                    o.classList.add("lh7");
               }
               break;
          case 80:
               {
                    p.classList.add("lh8");
               }
               break;
          case 219:
               {
                    sqBracket.classList.add("lh8");
               }
               break;
          case 221:
               {
                    curlyBracket.classList.add("lh8");
               }
               break;
          case 220:
               {
                    pipeSign.classList.add("lh8");
               }
               break;
          case 45:
               {
                    insert.classList.add("lh6");
               }
               break;
          case 103:
               {
                    numPadSeven.classList.add("lh7");
               }
               break;
          case 104:
               {
                    numPadEight.classList.add("lh5");
               }
               break;
          case 105:
               {
                    numPadNine.classList.add("lh6");
               }
               break;
          case 107:
               {
                    numPadPlus.classList.add("lh8");
               }
               break;
     }

     // row 4
     switch (key) {
          case 20:
               {
                    capsLock.classList.add("lh1");
               }
               break;
          case 65:
               {
                    a.classList.add("lh1");
               }
               break;
          case 83:
               {
                    s.classList.add("lh2");
               }
               break;
          case 68:
               {
                    d.classList.add("lh3");
               }
               break;
          case 70:
               {
                    f.classList.add("lh4");
               }
               break;
          case 71:
               {
                    g.classList.add("lh4");
               }
               break;
          case 72:
               {
                    h.classList.add("lh5");
               }
               break;
          case 74:
               {
                    j.classList.add("lh5");
               }
               break;
          case 75:
               {
                    k.classList.add("lh6");
               }
               break;
          case 76:
               {
                    l.classList.add("lh7");
               }
               break;
          case 186:
               {
                    colons.classList.add("lh8");
               }
               break;
          case 222:
               {
                    qout.classList.add("lh8");
               }
               break;
          case 13:
               {
                    enter.classList.add("lh8");
                    enter2.classList.add("lh8");
               }
               break;
          case 46:
               {
                    del.classList.add("lh6");
               }
               break;
          case 100:
               {
                    numPadFour.classList.add("lh7");
               }
               break;
          case 101:
               {
                    numPadFive.classList.add("lh5");
               }
               break;
          case 102:
               {
                    numPadSix.classList.add("lh6");
               }
               break;
          case 109:
               {
                    numPadMinus.classList.add("lh8");
               }
               break;
     }

     // row 5
     switch (key) {
          case 16:
               {
                    shift.classList.add("lh1");
                    shift2.classList.add("lh8");
               }
               break;
          case 90:
               {
                    z.classList.add("lh1");
               }
               break;
          case 88:
               {
                    x.classList.add("lh2");
               }
               break;
          case 67:
               {
                    c.classList.add("lh3");
               }
               break;
          case 86:
               {
                    v.classList.add("lh4");
               }
               break;
          case 66:
               {
                    b.classList.add("lh4");
               }
               break;
          case 78:
               {
                    n.classList.add("lh5");
               }
               break;
          case 77:
               {
                    m.classList.add("lh5");
               }
               break;
          case 188:
               {
                    lessThan.classList.add("lh6");
               }
               break;
          case 190:
               {
                    greaterThan.classList.add("lh7");
               }
               break;
          case 191:
               {
                    questionSign.classList.add("lh8");
               }
               break;
          case 38:
               {
                    upArrow.classList.add("lh6");
               }
               break;
          case 97:
               {
                    numPadOne.classList.add("lh7");
               }
               break;
          case 98:
               {
                    numPadTwo.classList.add("lh5");
               }
               break;
          case 99:
               {
                    numPadThree.classList.add("lh6");
               }
               break;
     }

     // row 6
     switch (key) {
          case 17:
               {
                    control.classList.add("lh1");
                    control2.classList.add("lh8");
               }
               break;
          case 91:
               {
                    win.classList.add("lh1");
                    metaKey.classList.add("lh8");
               }
               break;
          case 18:
               {
                    alt.classList.add("lh1");
                    alt2.classList.add("lh7");
               }
               break;
          case 32:
               {
                    spacebar.classList.add("lh9");
               }
               break;
          case 93:
               {
                    rightClick.classList.add("lh8");
               }
               break;
          case 37:
               {
                    leftArrow.classList.add("lh8");
               }
               break;
          case 40:
               {
                    downArrow.classList.add("lh6");
               }
               break;
          case 39:
               {
                    rightArrow.classList.add("lh7");
               }
               break;
          case 96:
               {
                    zero.classList.add("lh5");
               }
               break;
          case 110:
               {
                    dot.classList.add("lh6");
               }
               break;
     }
});

function playAudio(text) {
     let audio = new Audio("./audio/keypress.mp3");
     audio.play();
}
