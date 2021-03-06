'use strict';
let DONE = 'Udało mi się!';
let NOTDONE = 'Nie umiem tego zrobić...';

var data = [
  /*
    PODSTAWOWY TEST SPRAWNOŚCI FIZYCZNEJ KRZYSZTOFA ZUCHORY
    src: http://www.1lojaslo.pl/TEST-SPRAWNO%C5%9ACI-FIZYCZNEJ.pdf
    sha256sum: b21f89960a65cefdc712c535e9afb9f4c89b13ccb5b09b622ecac4cee6cd6b0d
    Last-Modified: Wed, 03 Jul 2013 20:36:34 GMT
    Content-Length: 477575
  */
  {
    title: 'Cześć!',
    desc:
      'Znudził Ci się kanapowy styl życia? A&nbsp;może po prostu chcesz się sprawdzić? ' +
      'Tak czy inaczej musisz zrobić indeks sprawności.',
    submit: 'Zróbmy to!',
    img: null,
    type: 'submit',
  },
  {
    title: 'Płeć',
    desc: 'Kim jesteś?',
    img: null,
    type: 'radio',
    test: false,
    var: 'gender',
    marks: {
      m: 'mężczyzną',
      f: 'kobietą',
    },
  },
  {
    title: 'Wiek',
    desc: 'Ile masz lat?',
    img: null,
    type: 'int',
    test: false,
    var: 'overall-mark',
    marks: {
      6: [0, 5, 8, 11, 14, 17, 20],
      7: [0, 6, 9, 12, 15, 18, 22],
      8: [0, 6, 10, 13, 17, 21, 25],
      9: [0, 6, 11, 15, 19, 23, 27],
      11: [0, 6, 11, 16, 20, 25, 29],
      13: [0, 6, 12, 17, 22, 27, 31],
      16: [0, 6, 12, 18, 23, 28, 33],
      19: [0, 6, 12, 18, 24, 30, 35],
      26: [0, 6, 12, 18, 23, 28, 33],
      36: [0, 6, 12, 17, 22, 27, 31],
      46: [0, 6, 11, 16, 20, 25, 29],
      56: [0, 6, 11, 15, 19, 23, 27],
      61: [0, 6, 10, 13, 17, 21, 25],
      66: [0, 6, 9, 12, 15, 18, 22],
      71: [0, 5, 8, 11, 14, 17, 20],
    },
  },
  {
    title: 'Szybkość',
    desc:
      'Biegnij szybko w&nbsp;miejscu przez 10&nbsp;sekund wysoko unosząc kolana i&nbsp;klaszcząc ' +
      'pod&nbsp;unoszoną nogą. Policz liczbę klaśnięć.',
    img: null,
    type: 'int',
    timer: 10,
    test: true,
    var: 'speed',
    marks_split: 'gender',
    marks: {
      m: {
        0: 0,
        15: 1,
        20: 2,
        25: 3,
        30: 4,
        35: 5,
        40: 6,
      },
      f: {
        0: 0,
        12: 1,
        16: 2,
        20: 3,
        25: 4,
        30: 5,
        35: 6,
      },
    },
  },
  {
    title: 'Skoczność',
    desc:
      'Skocz w&nbsp;dal obunóż z&nbsp;miejsca. Rezultat zmierz własnymi stopami. ' +
      'Wynik zaokrąglij do&nbsp;całej stopy.',
    img: null,
    type: 'int',
    timer: null,
    test: true,
    var: 'jump',
    marks: {
      0: 0,
      5: 1,
      6: 2,
      7: 3,
      8: 4,
      9: 5,
      10: 6,
    },
  },
  {
    title: 'Siła ramion',
    desc:
      'Uchwyć się drążka lub gałęzi, tak aby swobodnie zwisać. ' +
      'Nie dotykaj podłoża nogami. Próbuj wykonać kolejne ćwiczenia ' +
      'o&nbsp;wzrastającej trudności.',
    submit: 'Zróbmy to!',
    img: null,
    type: 'multi',
    progressive: true,
    test: true,
    var: 'arms',
    marks_split: 'gender',
    marks: {
      m: {
        0: true,
        1: {
          title: 'Siła ramion - Poziom minimalny',
          desc:
            'Zawiśnij na wyprostowanych rękach i&nbsp;wytrzymaj 10&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        2: {
          title: 'Siła ramion - Poziom dostateczny',
          desc:
            'Zawiśnij na wyprostowanej jednej ręce i&nbsp;wytrzymaj 10&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        3: {
          title: 'Siła ramion - Poziom dobry',
          desc:
            'Zawiśnij, podciągnij się oburącz, uginając mocno ramiona, tak, aby głowa ' +
            'była wyżej niż drążek, i&nbsp;wytrzymaj 3&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 3,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        4: {
          title: 'Siła ramion - Poziom bardzo dobry',
          desc:
            'Zawiśnij, podciągnij się oburącz, uginając mocno ramiona, tak, aby głowa ' +
            'była wyżej niż drążek i&nbsp;wytrzymaj 10&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        5: {
          title: 'Siła ramion - Poziom wysoki',
          desc:
            'Zawiśnij, podciągnij się oburącz, jedną rękę wolno opuść, wytrzymaj 10&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        6: {
          title: 'Siła ramion - Poziom wybitny',
          desc:
            'Zawiśnij, podciągnij się oburącz, jedną rękę wolno opuść, utrzymuj się kolejno na&nbsp;' +
            'lewej i&nbsp;prawej ręce po 10&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
      },
      f: {
        0: true,
        1: {
          title: 'Siła ramion - Poziom minimalny',
          desc:
            'Zawiśnij na wyprostowanych rękach i&nbsp;wytrzymaj 3&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 3,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        2: {
          title: 'Siła ramion - Poziom dostateczny',
          desc:
            'Zawiśnij na wyprostowanych rękach i&nbsp;wytrzymaj 10&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        3: {
          title: 'Siła ramion - Poziom dobry',
          desc: 'Zawiśnij na jednej ręce i&nbsp;wytrzymaj 3&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 3,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        4: {
          title: 'Siła ramion - Poziom bardzo dobry',
          desc: 'Zawiśnij na jednej ręce i&nbsp;wytrzymaj 10&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        5: {
          title: 'Siła ramion - Poziom wysoki',
          desc:
            'Zawiśnij, podciągnij się oburącz, uginając mocno ramiona, tak, aby głowa ' +
            'była wyżej niż drążek i&nbsp;wytrzymaj 3&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 3,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
        6: {
          title: 'Siła ramion - Poziom wybitny',
          desc:
            'Zawiśnij, podciągnij się oburącz, uginając mocno ramiona, tak, aby głowa ' +
            'była wyżej niż drążek i&nbsp;wytrzymaj 10&nbsp;sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: true,
          marks: { true: DONE, false: NOTDONE },
        },
      },
    },
  },
  {
    title: 'Gibkość',
    desc:
      'Stań w&nbsp;pozycji na&nbsp;baczność, nie zginając nóg w&nbsp;kolanach. Wykonaj ruchem ciągłym powolny skłon ' +
      'tułowia w&nbsp;przód. Nogi&nbsp;proste. Liczy się poprawne wykonanie zadania.',
    submit: 'Zróbmy to!',
    type: 'multi',
    progressive: true,
    test: true,
    var: 'supple',
    marks: {
      0: true,
      1: {
        title: 'Gibkość - Poziom minimalny',
        desc: 'Chwyć oburącz za kostki.',
        img: null,
        type: 'radio',
        var: true,
        marks: { true: DONE, false: NOTDONE },
      },
      2: {
        title: 'Gibkość - Poziom dostateczny',
        desc: 'Dotknij palcami obu rąk palców stóp.',
        img: null,
        type: 'radio',
        var: true,
        marks: { true: DONE, false: NOTDONE },
      },
      3: {
        title: 'Gibkość - Poziom dobry',
        desc: 'Dotknij palcami obu rąk podłoża.',
        img: null,
        type: 'radio',
        var: true,
        marks: { true: DONE, false: NOTDONE },
      },
      4: {
        title: 'Gibkość - Poziom bardzo dobry',
        desc: 'Wszystkimi palcami obu rąk (szeroko rozwarte) dotknij podłoża.',
        img: null,
        type: 'radio',
        var: true,
        marks: { true: DONE, false: NOTDONE },
      },
      5: {
        title: 'Gibkość - Poziom wysoki',
        desc: 'Dotknij obiema dłońmi podłoża.',
        img: null,
        type: 'radio',
        var: true,
        marks: { true: DONE, false: NOTDONE },
      },
      6: {
        title: 'Gibkość - Poziom wybitny',
        desc: 'Dotknij głową kolan.',
        img: null,
        type: 'radio',
        var: true,
        marks: { true: DONE, false: NOTDONE },
      },
    },
  },
  {
    title: 'Wytrzymałość',
    desc:
      'Spróbuj jak długo możesz biec. Próbę możesz wykonać w&nbsp;dwojaki sposób: w&nbsp;miejscu w&nbsp;tempie ok. ' +
      '120&nbsp;kroków na&nbsp;minutę lub na&nbsp;odległość. W&nbsp;pierwszym przypadku decyduje czas trwania biegu, ' +
      'w&nbsp;drugim pokonany dystans.',
    submit: 'Podejmij wybór!',
    img: null,
    type: 'submit',
  },
  {
    title: 'Wytrzymałość - wybór',
    desc: 'Jak chcesz wykonać test?',
    img: null,
    type: 'choice',
    choices: [
      {
        label: 'na czas',
        title: 'Wytrzymałość - czas',
        desc: 'Postaraj się biegać tak długo, jak tylko potrafisz.',
        img: null,
        type: 'int',
        timer: 0,
        test: true,
        var: 'stamina-time',
        marks_split: 'gender',
        marks: {
          m: {
            0: 0,
            120: 1,
            300: 2,
            600: 3,
            900: 4,
            1200: 5,
            1800: 6,
          },
          f: {
            0: 0,
            60: 1,
            180: 2,
            360: 3,
            600: 4,
            900: 5,
            1200: 6,
          },
        },
      },
      {
        label: 'na dystans',
        title: 'Wytrzymałość - dystans',
        desc:
          'Postaraj się pokonać tak duży dystans jak potrafisz. Do pomiaru możesz wykorzystać ' +
          'np.&nbsp;aplikację w&nbsp;telefonie.',
        img: null,
        type: 'int',
        timer: null,
        test: true,
        var: 'stamina-distance',
        marks_split: 'gender',
        marks: {
          m: {
            0: 0,
            400: 1,
            1000: 2,
            2000: 3,
            2500: 4,
            3000: 5,
            4000: 6,
          },
          f: {
            0: 0,
            200: 1,
            500: 2,
            1000: 3,
            1500: 4,
            2000: 5,
            2500: 6,
          },
        },
      },
    ],
  },
  {
    title: 'Siła mięśni brzucha',
    desc:
      'Połóż się na plecach, z&nbsp;dowolnie ułożonymi rękami. Unieś nogi tuż nad podłoże i&nbsp;wykonuj ' +
      'nożyce poprzeczne tak długo, jak możesz. O&nbsp;wyniku decyduje czas trwania próby.',
    type: 'int',
    timer: 0,
    test: true,
    var: 'stomach',
    marks_split: 'gender',
    marks: {
      m: {
        0: 0,
        30: 1,
        60: 2,
        90: 3,
        120: 4,
        180: 5,
        240: 6,
      },
      f: {
        0: 0,
        10: 1,
        30: 2,
        60: 3,
        90: 4,
        120: 5,
        180: 6,
      },
    },
  },
  {
    title: 'Podsumowanie',
    desc: '',
    submit: 'Przejdź do szczegółów',
    type: 'summary-overall',
    marks: {
      0: 'Klęska pedagogiczna',
      1: 'Minimalny',
      2: 'Dostateczny',
      3: 'Dobry',
      4: 'Bardzo dobry',
      5: 'Wysoki',
      6: 'Wybitny',
    },
  },
  {
    title: 'Podsumowanie szczegółowe',
    desc: '',
    type: 'summary',
    marks: {
      0: 'Klęska pedagogiczna',
      1: 'Minimalny',
      2: 'Dostateczny',
      3: 'Dobry',
      4: 'Bardzo dobry',
      5: 'Wysoki',
      6: 'Wybitny',
    },
  },
];

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.protInject = function (id, value) {
  var target = this;
  return target.replaceAll(`{{${id}}}`, value);
};

Array.prototype.equals = function (array) {
  return (
    this.length == array.length &&
    this.map((e, i) => e == array[i]).every((x) => x)
  );
};

function getSheet(el) {
  while (el.parentElement.id != 'container') el = el.parentElement;
  return el;
}

var dynamicIds = {};

function getDynamicId(id) {
  if (!dynamicIds.hasOwnProperty(id)) dynamicIds[id] = 0;
  return id + ++dynamicIds[id];
}

function prot(type, id, obj, cont = document.getElementById('container')) {
  let prot = document.getElementById('prototype-' + type).cloneNode(true);
  prot.setAttribute('id', id);
  Object.keys(obj).map((x) => {
    prot.innerHTML = prot.innerHTML.protInject(x, obj[x]);
  });
  cont.prepend(prot);
  prot.dispatchEvent(new Event('load'));
  return prot;
}

function protSubmit(title, desc, submit) {
  return prot('submit', getDynamicId('submit'), {
    title: title,
    desc: desc,
    submit: submit,
  });
}

var translation = {};

function select(el) {
  if (nextVar) vars[nextVar] = translation[el.id];
  if (nextTest) tests[nextTest] = translation[el.id];
  next(el);
}

var radioOptions = [];

function protRadio(title, desc, options) {
  let id = getDynamicId('radio');
  let p = prot('radio', id, { title: title, desc: desc });
  translation = {};
  Object.keys(options).map((x) => {
    let did = getDynamicId(id + '-');
    translation[did] = x;
    let o = prot(
      'option',
      did,
      { title: options[x] },
      p.getElementsByClassName('radio-options')[0]
    ).getElementsByClassName('checkbox')[0];
    radioAddListener(o);
    radioOptions.push(o);
  });
  return p;
}

function protDesc(title, desc) {
  return prot('desc', getDynamicId('desc'), { title: title, desc: desc });
}

var intTranslation = {};

function intTranslate(ovalue) {
  let value = null;
  let keys = Object.keys(intTranslation).map((x) => parseInt(x));
  keys.sort((a, b) => b - a);
  if (ovalue <= keys[keys.length - 1])
    value = intTranslation[keys[keys.length - 1]];
  else
    for (let e of keys)
      if (ovalue >= e) {
        value = intTranslation[e];
        break;
      }
  return value;
}

function submit(value) {
  value = intTranslate(value);
  if (nextVar) vars[nextVar] = value;
  if (nextTest) tests[nextTest] = value;
}

function protInt(title, desc, marks) {
  let id = getDynamicId('int');
  intTranslation = marks;
  let p = prot('int', id, { title: title, desc: desc });
  p.getElementsByTagName('input')[0].focus();
  return p;
}

function protSummaryChart(title, desc, curr, max, mark, submit) {
  let id = getDynamicId('summary-chart');
  let p = prot('summary-chart', id, {
    title: title,
    desc: desc,
    mark: mark,
    id: id + 'canvas',
    submit: submit,
  });
  let ctx = document.getElementById(id + 'canvas').getContext('2d');
  ctx.font = '100px';
  ctx.fillText(curr + '/' + max, 0, 10);
  return p;
}

function protSummary(title, desc, marks) {
  let id = getDynamicId('summary');
  let p = prot('summary', id, { title: title, desc: desc });
  Object.keys(marks).every((x) =>
    prot(
      'summary-mark',
      getDynamicId(id + '-'),
      { name: x, mark: marks[x] },
      p.getElementsByClassName('summary-marks')[0]
    )
  );
  return p;
}

[...document.getElementsByClassName('checkbox')].map((x) => {
  x.innerHTML = document.getElementById('prototype-checkbox').innerHTML;
});

var iterator = [-1];
var vars = {},
  tests = {};
var nextVar = null,
  nextTest = null;
var sheets = [{ goBack: () => restore([-1], {}, {}) }];
function restore(_iterator, _vars, _tests) {
  iterator = _iterator;
  vars = _vars;
  tests = _tests;
}

var nextQueue = new Promise((r) => r());

function next(caller, forecall = null, backwards = false) {
  if (!forecall) forecall = () => new Promise((r) => r());
  return (nextQueue = nextQueue
    .then(() => forecall())
    .then(() => nextNow(caller, backwards))
    .catch((e) => console.log(e)));
}

function nextNow(caller, backwards = false) {
  let l, pl;
  if (backwards) {
    if (sheets.length < 3) {
      console.log('ERR:cannot go back: last sheet');
      return;
    }
    l = sheets.pop();
    pl = sheets.pop();
    pl.goBack();
  }
  if (caller && sheets.length && getSheet(caller) != sheets[sheets.length - 1])
    throw 'not a lastSheet';
  updateTimer();
  let lastIterator = [...iterator];
  iterator[iterator.length - 1]++;
  let current = data[iterator[0]];
  let sheet = null;
  for (let level = 1; level < iterator.length; ++level) {
    nextVar = current.var;
    nextTest = current.test ? current.title : null;
    switch (current.type) {
      case 'multi':
        let marks = current.marks;
        if (current.marks_split)
          marks = current.marks[vars[current.marks_split]];
        let ms = Object.keys(marks);
        ms.sort();
        if (level + 1 == iterator.length) {
          if (!iterator[level]) {
            // first execution
          } else if (vars[true] == 'true') {
            if (nextVar) vars[nextVar] = ms[iterator[level] - 1];
            if (nextTest) tests[nextTest] = ms[iterator[level] - 1];
          } else if (current.progressive) {
            iterator[level] = ms.length;
          }
          if (iterator[level] == ms.length) {
            iterator.pop();
            return nextNow(caller);
          }
        }
        current = marks[ms[iterator[level]]];
        break;
      case 'choice':
        if (level + 1 == iterator.length) {
          if (!iterator[level]) {
            // first execution
            iterator[level] = vars[true];
            iterator.push(0);
            --level;
          }
        } else {
          if (iterator[level + 1] != 0) {
            iterator.splice(level);
            return nextNow(caller);
          } else current = current.choices[iterator[level++]];
        }
    }
  }
  if (current === true) {
    vars[true] = 'true';
    return nextNow(caller);
  }
  nextVar = current.var;
  nextTest = current.test ? current.title : null;
  let marks = current.marks;
  if (current.marks_split) marks = current.marks[vars[current.marks_split]];
  switch (current.type) {
    case 'submit':
      sheet = protSubmit(current.title, current.desc, current.submit);
      break;
    case 'radio':
      // img
      sheet = protRadio(current.title, current.desc, marks);
      break;
    case 'int':
      sheet = protInt(current.title, current.desc, marks);
      break;
    case 'multi':
      sheet = protSubmit(current.title, current.desc, current.submit);
      iterator.push(-1);
      vars[true] = 'true';
      break;
    case 'choice':
      nextVar = true;
      sheet = protRadio(
        current.title,
        current.desc,
        Object.assign({}, ...current.choices.map((x, i) => ({ [i]: x.label })))
      );
      iterator.push(-1);
      break;
    case 'summary-overall':
      let curr = Object.values(tests).reduce((a, b) => a + parseInt(b), 0);
      let max = Object.values(tests).length * 6;
      intTranslation = Object.assign(
        {},
        ...vars['overall-mark'].map((x, i) => ({ [x]: i }))
      );
      let mark = intTranslate(curr);
      intTranslation = current.marks;
      mark = intTranslate(mark);
      sheet = protSummaryChart(
        current.title,
        current.desc,
        curr,
        max,
        mark,
        current.submit
      );
      break;
    case 'summary':
      intTranslation = current.marks;
      sheet = protSummary(
        current.title,
        current.desc,
        Object.assign(
          {},
          ...Object.entries(tests).map((x) => {
            return { [x[0]]: intTranslate(x[1]) };
          })
        )
      );
      break;
  }
  let ut = () => updateTimerScheduled([...iterator], current.timer);
  if (!backwards)
    if (sheets.length > 1) threwOut(sheets[sheets.length - 1]).then(ut);
    else ut();
  let _vars = Object.assign({}, vars);
  let _tests = Object.assign({}, tests);
  sheet.goBack = () => restore(lastIterator, _vars, _tests);
  sheets.push(sheet);
  if (backwards) {
    threwIn(pl)
      .then(() => {
        pl.parentNode.removeChild(pl);
        l.parentNode.removeChild(l);
      })
      .then(ut);
  }
}

function updateTimerScheduled(old_iterator = null, value = null) {
  if (!old_iterator) updateTimer(null);
  else if (old_iterator.equals(iterator)) updateTimer(value);
}

function back() {
  return next(null, null, true);
}

next(null);

function check(caller) {
  return new Promise((resolve) => {
    caller.getElementsByClassName('check')[0].style.display = 'block';
    caller.style.cursor = 'default';
    setTimeout(resolve, 1500);
  });
}

function intAddListener(self) {
  self
    .getElementsByTagName('input')[0]
    .addEventListener('keydown', intEventListener);
}

function intEventListener(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    let t = event.target;
    t.blur();
    t.removeEventListener('keydown', intEventListener);
    next(
      t,
      () =>
        new Promise((r) => {
          submit(t.value);
          r();
        })
    );
  }
}

function radioAddListener(self) {
  self.addEventListener('click', radioEventListener);
}

function radioEventListener(event) {
  let t = event.target;
  if (!radioOptions.includes(t)) {
    console.log('WARN: this not in radioOptions');
    radioOptions.push(t);
  }
  radioOptions.forEach((e) => {
    e.removeEventListener('click', radioEventListener);
  });
  check(t).then(() => select(t.parentElement));
}

function threwOutNow(self) {
  return (self.moving = new Promise((resolve) => {
    let s = self.style;
    s.transition = 'top 2s ease-in';
    s.top = '100vh';
    self.ontransitionend = () => {
      self.ontransitionend = null;
      s.transition = '';
      s.left = ((Math.random() * 201) | 0) - 100 + 'vw';
      s.top = '100vh';
      resolve();
    };
  }));
}
function threwInNow(self) {
  return (self.moving = new Promise((resolve) => {
    let s = self.style;
    s.transition = 'top 2s linear, left 2s ease-out';
    s.left = '';
    s.top = '';
    self.ontransitionend = () => {
      self.ontransitionend = null;
      s.transition = '';
      resolve();
    };
  }));
}

function threwOut(self) {
  if (self.moving) return self.moving.then(() => threwOutNow(self));
  else return threwOutNow(self);
}
function threwIn(self) {
  if (self.moving) return self.moving.then(() => threwInNow(self));
  else return threwInNow(self);
}

function formatDelta(millis) {
  let regex = /.*(\d{2}):(\d{2}:\d{2}\.\d{2}).*/.exec(
    new Date(Math.abs(millis)).toISOString()
  );
  return (
    (millis < 0 ? '-' : '') +
    (regex[1] != '00' ? regex[1] + ':' : '') +
    regex[2]
  );
}

const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
const buttonReset = document.getElementById('reset');
const timer = document.getElementById('timer');
const counter = document.getElementById('counter');

var interval = null;
const delay = 3500;

function updateTimer(value) {
  clearInterval(interval);

  if (value == null) {
    timer.classList.remove('thrown-in');
    return;
  } else timer.classList.add('thrown-in');

  value *= 1000; // cast s to ms
  let startTime, paused, time, first, timedOut;
  let stopwatch = value === 0;

  function reset() {
    clearInterval(interval);
    startTime = 0;
    paused = true;
    time = value;
    first = true;
    timedOut = false;
    counter.innerText = formatDelta(time);
  }
  reset();

  function startAnimation() {
    console.log('START');
    // TODO: an animation
  }
  function timeoutAnimation() {
    console.log('TIME OUT');
    // TODO: an animation
  }

  let update = stopwatch
    ? () => {
        if (!paused) {
          let now = Date.now();
          time = now - startTime;
          if (startTime <= now)
            if (first) {
              first = false;
            }
        }
        counter.innerText = formatDelta(time);
      }
    : () => {
        if (!paused) {
          let now = Date.now();
          if (startTime > now) time = now - startTime;
          else {
            if (first) {
              first = false;
              startAnimation();
            }
            time = startTime - now + value;
            if (time < 0) {
              if (!timedOut) {
                timedOut = true;
                timeoutAnimation();
              }
              if (time < delay) reset();
            }
          }
        }
        counter.innerText = formatDelta(time);
      };

  buttonStart.onclick = () => {
    if (paused) {
      paused = false;
      if (startTime == 0) {
        startTime = Date.now();
        startTime += delay;
      } else {
        startTime =
          stopwatch || time < 0 ? Date.now() - time : Date.now() - value + time;
      }
      clearInterval(interval);
      interval = setInterval(update, 1000 / 45);
    }
  };

  buttonStop.onclick = () => {
    paused = true;
  };

  buttonReset.onclick = reset;
}
