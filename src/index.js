!function() {

  /*
  065      101    41   01000001        A
  066      102    42   01000010        B
  067      103    43   01000011        C
  068      104    44   01000100        D
  069      105    45   01000101        E
  070      106    46   01000110        F
  071      107    47   01000111        G
  072      110    48   01001000        H
  073      111    49   01001001        I
  074      112    4A   01001010        J
  075      113    4B   01001011        K
  076      114    4C   01001100        L
  077      115    4D   01001101        M
  078      116    4E   01001110        N
  079      117    4F   01001111        O
  080      120    50   01010000        P
  081      121    51   01010001        Q
  082      122    52   01010010        R
  083      123    53   01010011        S
  084      124    54   01010100        T
  085      125    55   01010101        U
  086      126    56   01010110        V
  087      127    57   01010111        W
  088      130    58   01011000        X
  089      131    59   01011001        Y
  090      132    5A   01011010        Z
  */

  var alpha = {
    65: ['4','/\\','@','^','aye','∂','/-\\','|-\\', 'q'],
    66: ['8','6','13','|3','ß','P>','|:','!3','(3','/3',')3'],
    67: ['(','¢','<','[','©'],
    68: ['[)','|o',')','I>','|>','?','T)','|)',0,'</'],
    69: ['3','&','€','£','є','ë','[-','|=-'],
    70: ['=','ƒ','|#','ph','/='],
    71: ['6','&','(_+','9','C-','gee','(γ,'],
    72: ['#','/-/','[-]',']-[',')-(','(-)',':-:','|~|','|-|',']~[','}{',']-[','?','}-{','hèch'],
    73: ['1','!','|','][','eye','3y3',']',':]'],
    74: ['_|','_/','¿','</','(/','ʝ',';'],
    75: ['X','|<','|{','ɮ','<','|\\“'],
    76: ['1','£','1_','ℓ','|','|_','][_,'],
    77: ['|v|','[V]','{V}','|\/|','/\\/\\','(u)','/\\/\\','(V)','(\\/)','/|\\','^^','/|/|','//.','.\\\\','/^^\\','///','|^^|'],
    78: ['^/','|V','|\\|','/\\/','[\\]','<\\>','{\\}','[]\\','//','^','[]','/V','₪'],
    79: ['0','()','oh','[]','¤','°','([])'],
    80: ['|*','|o','|º','|^(o)','|>','|"','9','[]D','|°','|7','?','/*','¶'],
    81: ['(_,)','()_','0_','°|','<|','0.'],
    82: ['2','|?','/2','|^','lz','®','[z','12','Я','|2','ʁ','|²','.-',',-','|°\\'],
    83: ['5','$','z','§','ehs','es','_/¯'],
    84: ['7','+','-|-','1','][','†','|²','¯|¯'],
    85: ['(_)','|_|','v','L|','µ','J'],
    86: ['\\/','1/','|/','o|o'],
    87: ['\/\/','vv','\'//','\\`','\\^/','(n)','\\V/','\\X/','\\|/','\\_|_/','\\_:_/','Ш','ɰ','`^/','\\./'],
    88: ['><','Ж','}{','ecks','×',')(','8'],
    89: ['7','j','`/','Ψ','φ','λ','Ч','¥','\'/'],
    90: ['≥','2','=/=','7_','~/_','%','>_','>_','-\\_','\'/_']
  };

  var regexp = /\b(\w)*\b/g;

  function Leeter() {

  };

  Leeter.prototype.leet = function(node) {
    var nodes = this.getTextNodesIn(node);
    for (var i=0;i<nodes.length;i++) {
      var currentTextNode = nodes[i];
      currentTextNode.textContent = this.replacer(currentTextNode);
    }
  };

  Leeter.prototype.replacer = function(text) {
    var t = text.textContent.toUpperCase().replace(
      regexp, 
      function(match) {
        var newWord = ' ';
        for (var i=0;i<match.length;i++) {
          var ccode = match[i].toUpperCase().charCodeAt();
          if (alpha[ccode])
            newWord += alpha[ccode][0];
        }
        return newWord;
      }
    );
    return t;
  };

  Leeter.prototype.getTextNodesIn = function(node, includeWhitespaceNodes) {
    var textNodes = [], nonWhitespaceMatcher = /\S/;

    function getTextNodes(node) {
      if (node.nodeType == 3) {
        if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) {
          textNodes.push(node);
        }
      } else {
        for (var i = 0, len = node.childNodes.length; i < len; ++i) {
          getTextNodes(node.childNodes[i]);
        }
      }
    }

    getTextNodes(node);
    return textNodes;
  };

  // EXPORT

  // node
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Leeter;
  }
  else { // amd
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return Leeter;
      });
    }
    else {
      window.Leeter = Leeter;
    }
  }

}();

