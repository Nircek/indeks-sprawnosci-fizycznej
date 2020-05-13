DONE = 'Udało mi się!';
NOTDONE = 'Niestety, nie umiem tego zrobić...';

var data = [
  /*
    PODSTAWOWY TEST SPRAWNOŚCI FIZYCZNEJ KRZYSZTOFA ZUCHORY
    src: http://www.1lojaslo.pl/TEST-SPRAWNO%C5%9ACI-FIZYCZNEJ.pdf
    sha256sum: b21f89960a65cefdc712c535e9afb9f4c89b13ccb5b09b622ecac4cee6cd6b0d
    Last-Modified: Wed, 03 Jul 2013 20:36:34 GMT
    Content-Length: 477575
  */
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
      6: [5, 8, 11, 14, 17, 20],
      7: [6, 9, 12, 15, 28, 22],
      8: [6, 10, 13, 17, 31, 25],
      9: [6, 11, 15, 19, 33, 27],
      11: [6, 11, 16, 20, 35, 29],
      13: [6, 12, 17, 22, 37, 31],
      16: [6, 12, 18, 23, 38, 33],
      19: [6, 12, 18, 24, 30, 35],
      26: [6, 12, 18, 23, 38, 33],
      36: [6, 12, 17, 22, 37, 31],
      46: [6, 11, 16, 20, 35, 29],
      56: [6, 11, 15, 19, 33, 27],
      61: [6, 10, 13, 17, 31, 25],
      66: [6, 9, 12, 15, 28, 22],
      71: [5, 8, 11, 14, 27, 20],
    },
  },
  {
    title: 'Szybkość',
    desc:
      'Biegnij szybko w miejscu przez 10 sekund wysoko unosząc kolana i klaszcząc' +
      'pod unoszoną nogą. Policz liczbę klaśnięć.',
    img: null,
    type: 'int',
    timer: 10,
    test: true,
    var: 'speed',
    marks: {
      m: {
        1: 15,
        2: 20,
        3: 25,
        4: 30,
        5: 35,
        6: 40,
      },
      f: {
        1: 12,
        2: 16,
        3: 20,
        4: 25,
        5: 30,
        6: 35,
      },
    },
  },
  {
    title: 'Skoczność',
    desc: 'Skocz w dla obunóż z miejsca. Rezultat zmierz własnymi stopami.' + 
    'Wynik zaokrąglij do całej stopy.', // tylko chciałbym, żeby te descriptiony wszystkie były jakoś sensowne podzielone (patrz przykład wyżej), żeby nie było takich długich linijek w kodzie jak ten komentarz na przykład, bo się to średnio czyta...
    img: null,
    type: 'int',
    timer: null,
    test: true,
    var: 'jump',
    marks: {
      a: {
        1: 5,
        2: 6,
        3: 7,
        4: 8,
        5: 9,
        6: 10,
      },
    },
  },
  {
    title: 'Siła ramion',
    desc: 'Siła ramion - Poziom minimalny',
    desc: 'Uchwyć się drążka lub gałęzi, tak aby swobodnie zwisać.' + 
    'Nie dotykaj podłoża nogami. Próbuj wykonać kolejne ćwiczenia' +
    'o wzrastającej trudności.',
    img: null,
    type: 'multi',
    progressive: true,
    test: true,
    var: 'arms',
    marks: {
      m: {
        1: {
          title: 'Zawiśnij na wyprostowanych rękach i wytrzymaj 10 sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        2: {
          title: 'Siła ramion - Poziom dostateczny',
          desc: 'Zawiśnij na wyprostowanej jednej ręce i wytrzymaj 10 sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        3: {
          title: 'Siła ramion - Poziom dobry',
          desc: 'Zawiśnij, podciągnij się oburącz, uginając mocno ramiona, tak, aby głowa'
                + 'była wyżej niż drążek, i wytrzymaj 3 sek.',
          img: null,
          type: 'radio',
          timer: 3,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        4: {
          title: 'Siła ramion - Poziom bardzo dobry',
          desc: 'Zawiśnij, podciągnij się oburącz, uginając mocno ramiona, tak, aby głowa'
              + 'była wyżej niż drążek i wytrzymaj 10 sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        5: {
          title: 'Siła ramion - Poziom wysoki',
          desc: 'Zawiśnij, podciągnij się oburącz, jedną rękę wolno opuść, wytrzymaj 10 sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        6: {
          title: 'Siła ramion - Poziom wybitny',
          desc: 'Zawiśnij, podciągnij się oburącz, jedną rękę wolno opuść, utrzymuj się kolejno na'
                + 'lewej i prawej ręce po 10 sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
      },
      f: {
        1: {
          title: 'Siła ramion - Poziom minimalny',
          desc: 'Zawiśnij na wyprostowanych rękach i wytrzymaj 3 sek.',
          img: null,
          type: 'radio',
          timer: 3,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        2: {
          title: 'Siła ramion - Poziom dostateczny',
          desc: 'Zawiśnij na wyprostowanych rękach i wytrzymaj 10 sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        3: {
          title: 'Siła ramion - Poziom dobry',
          desc: 'Zawiśnij na jednej ręce i wytrzymaj 3 sek.',
          img: null,
          type: 'radio',
          timer: 3,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        4: {
          title: 'Siła ramion - Poziom bardzo dobry',
          desc: 'Zawiśnij na jednej ręce i wytrzymaj 10 sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        5: {
          title: 'Siła ramion - Poziom wysoki',
          desc: 'Zawiśnij, podciągnij się oburącz, uginając mocno ramiona, tak, aby głowa'
          + 'była wyżej niż drążek i wytrzymaj 3 sek.',
          img: null,
          type: 'radio',
          timer: 3,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        6: {
          title: 'Siła ramion - Poziom wybitny',
          desc: 'Zawiśnij, podciągnij się oburącz, uginając mocno ramiona, tak, aby głowa'
          + 'była wyżej niż drążek i wytrzymaj 10 sek.',
          img: null,
          type: 'radio',
          timer: 10,
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
      },
    },
  },
  {
    title: 'Gibkość',
    desc: 'Stań w pozycji na baczność, nie zginając nóg w kolanach. Wykonaj ruchem ciągłym powolny skłon'
          + 'tułowia w przód. Nogi proste. Liczy się poprawne wykonanie zadania.',
    type: 'multi',
    progressive: true,
    test: true,
    var: 'supple',
    marks: {
      a: {
        1: {
          title: 'Gibkość - Poziom minimalny',
          desc: 'Chwyć oburącz za kostki.',
          img: null,
          type: 'radio',
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        2: {
          title: 'Gibkość - Poziom dostateczny',
          desc: 'Dotknij palcami obu rąk palców stóp.',
          img: null,
          type: 'radio',
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        3: {
          title: 'Gibkość - Poziom dobry',
          desc: 'Dotknij palcami obu rąk podłoża.',
          img: null,
          type: 'radio',
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        4: {
          title: 'Gibkość - Poziom bardzo dobry',
          desc: 'Wszystkimi palcami obu rąk (szeroko rozwarte) dotknij podłoża.',
          img: null,
          type: 'radio',
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        5: {
          title: 'Gibkość - Poziom wysoki',
          desc: 'Dotknij obiema dłońmi podłoża.',
          img: null,
          type: 'radio',
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
        6: {
          title: 'Gibkość - Poziom wybitny',
          desc: 'Dotknij głową kolan.',
          img: null,
          type: 'radio',
          var: null,
          marks: { true: DONE, false: NOTDONE },
        },
      },
    },
  },
  {
    title: 'Wytrzymałość',
    desc: 'Spróbuj jak długo możesz biec. Próbę możesz wykonać w dwojaki sposób: w miejscu w tempie ok.'
          + '120 kroków na minutę lub na odległość. W pierwszym przypadku decyduje czas trwania biegu,' 
          + 'w drugim pokonany dystans.',
    img: null,
    type: 'choice',
    choices: [
      {
        title: 'Wytrzymałość - czas',
        desc: 'Postaraj się biegać tak długo, jak tylko potrafisz. Do pomiaru czasu możesz użyć np. zegarka.',
        img: null,
        type: 'int',
        timer: 0,
        test: true,
        var: 'stamina-time',
        marks: {
          m: {
            1: 2 * 60,
            2: 5 * 60,
            3: 10 * 60,
            4: 15 * 60,
            5: 20 * 60,
            6: 30 * 60,
          },
          f: {
            1: 1 * 60,
            2: 3 * 60,
            3: 6 * 60,
            4: 10 * 60,
            5: 15 * 60,
            6: 20 * 60,
          },
        },
      },
      {
        title: 'Wytrzymałość - dystans',
        desc: 'Postaraj się pokanać tak duży dystans jak potrafisz, do pomiaru możesz wykorzystać' 
            + 'np. aplikację w telefonie.',
        img: null,
        type: 'int',
        timer: null,
        test: true,
        var: 'stamina-distance',
        marks: {
          m: {
            1: 400,
            2: 1000,
            3: 2000,
            4: 2500,
            5: 3000,
            6: 4000,
          },
          f: {
            1: 200,
            2: 500,
            3: 1000,
            4: 1500,
            5: 2000,
            6: 2500,
          },
        },
      },
    ],
  },
  {
    title: 'Siła mięśni brzucha',
    desc: 'Połóż się na plecach, z dowolnie ułożonymi rękami. Unieś nogi tuż nad podłoże i wykonuj nożyce' 
          + 'nożyce poprzeczne tak długo, jak możesz. O wyniku decyduje czas trwania próby.',
    type: 'int',
    timer: 0,
    test: true,
    var: 'stomach',
    marks: {
      m: {
        1: 30,
        2: 1 * 60,
        3: 90,
        4: 2 * 60,
        5: 3 * 60,
        6: 4 * 60,
      },
      f: {
        1: 10,
        2: 30,
        3: 1 * 60,
        4: 90,
        5: 2 * 60,
        6: 3 * 60,
      },
    },
  },
  {
    title: 'Podsumowanie',
    desc: 'Brawo! Ukończyłeś indeks sprawności! Oto twoja ocena: ',
    type: 'summary-overall',
  },
  {
    title: 'Podsumowanie szczegółowe',
    desc: '',
    type: 'summary',
  },
];

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

var submit = document.getElementById('prototype-submit');
var tsubmit = submit.cloneNode(true);
tsubmit.setAttribute('id', 'submit1');
tsubmit.innerHTML = tsubmit.innerHTML.replaceAll('{{title}}', 'Tytuł');
document.getElementById('container').appendChild(tsubmit);
let checkbox = document.getElementsByClassName("checkbox");
checkbox[1].addEventListener('click', draw);
function draw()
{
  let tick = document.getElementsByClassName("check");
  tick[1].style.display = "block";
  checkbox[1].style.cursor = "default";
}
