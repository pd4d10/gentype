// Generated by ReScript, PLEASE EDIT WITH CARE


function makeVariant(param) {
  return /* NonUnary */{
          _0: 5,
          _1: 3
        };
}

function makeABC(param) {
  return {
          TAG: /* A */0,
          _0: {
            c: {
              TAG: /* C */0,
              _0: "a string"
            }
          },
          _1: 5
        };
}

function makeBC(param) {
  return {
          c: {
            TAG: /* C */0,
            _0: "a string"
          }
        };
}

function makeAC(param) {
  return {
          TAG: /* A */0,
          _0: {
            TAG: /* C */0,
            _0: "a string"
          },
          _1: 5
        };
}

function makeAD(param) {
  return {
          TAG: /* A */0,
          _0: /* Int */{
            _0: 3
          },
          _1: 5
        };
}

function makeAE(param) {
  return {
          TAG: /* A */0,
          _0: 3,
          _1: 5
        };
}

function makeFD(param) {
  return {
          TAG: /* F */0,
          _0: /* Int */{
            _0: 3
          }
        };
}

function makeHD(param) {
  return {
          TAG: /* H */0,
          _0: /* Int */{
            _0: 5
          },
          _1: 5
        };
}

function makeJ(param) {
  return /* J */{
          _0: /* Int */{
            _0: 5
          },
          _1: /* Int */{
            _0: 3
          }
        };
}

function makeK(param) {
  return /* K */{
          _0: [
            /* Int */{
              _0: 5
            },
            /* Int */{
              _0: 3
            }
          ]
        };
}

function testBoxedBinary(param) {
  return 34;
}

function testUnboxedBinary(param) {
  return 34;
}

function testInline(x) {
  switch (x.TAG | 0) {
    case /* I */0 :
        return {
                TAG: /* I */0,
                i: x.i,
                j: x.j
              };
    case /* J */1 :
        return x;
    case /* K */2 :
        return {
                TAG: /* K */2,
                _0: x._1,
                _1: x._0
              };
    
  }
}

export {
  makeVariant ,
  makeABC ,
  makeBC ,
  makeAC ,
  makeAD ,
  makeAE ,
  makeFD ,
  makeHD ,
  makeJ ,
  makeK ,
  testBoxedBinary ,
  testUnboxedBinary ,
  testInline ,
}
/* No side effect */
