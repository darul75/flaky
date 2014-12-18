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

  var dataFactory = function(a, b, c) {
    return {
      basic: a,
      advanced: b,
      ultimate: c
    };
  };

  var alpha = {
    65: dataFactory(['4'],['@','∂','q','aye'],['/\\',,'^',,'/-\\','|-\\']),
    66: dataFactory(['b','8','6','13'],['|3','ß'],['P>','|:','!3','(3','/3',')3']),
    67: dataFactory(['c', '['],['('], ['¢','<','©']),
    68: dataFactory(['d'],['[)','|o',')','I>','|>'],['?','T)','|)',0,'</']),
    69: dataFactory(['3'],['&','€','£','є','ë'],['[-','|=-']),
    70: dataFactory(['f'],['=','ƒ'],['|#','ph','/=']),
    71: dataFactory(['g','6'],['g','6'], ['&','(_+','9','C-','gee','(γ,']),
    72: dataFactory(['h'], ['#'],['/-/','[-]',']-[',')-(','(-)',':-:','|~|','|-|',']~[','}{',']-[','?','}-{','hèch']),
    73: dataFactory(['i', '1'],['\'', '!'], ['|','][','eye','3y3',']',':]']),
    74: dataFactory(['j'], ['7'],['_|','_/','¿','</','(/','ʝ',';']),
    75: dataFactory(['k'],['X'],['|<','|{','ɮ','<','|\\“']),
    76: dataFactory(['1'],['£','1_','ℓ',], ['|','|_','][_,']),
    77: dataFactory(['m'],['|v|','[V]','{V}'],['|\/|','/\\/\\','(u)','/\\/\\','(V)','(\\/)','/|\\','^^','/|/|','//.','.\\\\','/^^\\','///','|^^|']),
    78: dataFactory(['n'], ['^/','|V'],['|\\|','/\\/','[\\]','<\\>','{\\}','[]\\','//','^','[]','/V','₪']),
    79: dataFactory(['0'],['()'],['oh','[]','¤','°','([])']),
    80: dataFactory(['p'],['|>', '|*'],['|o','|º','|^(o)',,'|"','9','[]D','|°','|7','?','/*','¶']),
    81: dataFactory(['9'],['(_,)','()_'],['0_','°|','<|','0.']),
    82: dataFactory(['r'], ['2','|2'], ['|?','/2','|^','lz','®','[z','12','Я','ʁ','|²','.-',',-','|°\\']),
    83: dataFactory(['s','5'],['$','z','§','ehs','es'],['_/¯']),
    84: dataFactory(['7'],['+'],['-|-','1','][','†','|²','¯|¯']),
    85: dataFactory(['u'], ['(_)','|_|','v'],['L|','µ','J']),
    86: dataFactory(['v'], ['\\/','1/'],['|/','o|o']),
    87: dataFactory(['w'],['\/\/','vv'],['\'//','\\`','\\^/','(n)','\\V/','\\X/','\\|/','\\_|_/','\\_:_/','Ш','ɰ','`^/','\\./']),
    88: dataFactory(['x'],['><'],['Ж','}{','ecks','×',')(','8']),
    89: dataFactory(['y','\'/'],['\'/'],['7','j','`/','Ψ','φ','λ','Ч','¥']),
    90: dataFactory(['z','2'],['2'],['≥','=/=','7_','~/_','%','>_','>_','-\\_','\'/_'])
  };

  /*$level1   = array("4", "b", "c", "d", "3", "f", "g", "h", "i", "j", "k", "1", "m", "n", "0", "p", "9", "r", "s", "7", "u", "v", "w", "x", "y", "z");
  $level2   = array("4", "b", "c", "d", "3", "f", "g", "h", "1", "j", "k", "1", "m", "n", "0", "p", "9", "r", "5", "7", "u", "v", "w", "x", "y", "2");
  $level3   = array("4", "8", "c", "d", "3", "f", "6", "h", "'", "j", "k", "1", "m", "n", "0", "p", "9", "r", "5", "7", "u", "v", "w", "x", "'/", "2");
  $level4   = array("@", "8", "c", "d", "3", "f", "6", "h", "'", "j", "k", "1", "m", "n", "0", "p", "9", "r", "5", "7", "u", "v", "w", "x", "'/", "2");
  $level5   = array("@", "|3", "c", "d", "3", "f", "6", "#", "!", "7", "|<", "1", "m", "n", "0", "|>", "9", "|2", "$", "7", "u", "\\/", "w", "x", "'/", "2");
  $level6   = array("@", "|3", "c", "|)", "&", "|=", "6", "#", "!", ",|", "|<", "1", "m", "n", "0", "|>", "9", "|2", "$", "7", "u", "\\/", "w", "x", "'/", "2");
  $level7   = array("@", "|3", "[", "|)", "&", "|=", "6", "#", "!", ",|", "|<", "1", "^^", "^/", "0", "|*", "9", "|2", "5", "7", "(_)", "\\/", "\\/\\/", "><", "'/", "2");
  $level8   = array("@", "8", "(", "|)", "&", "|=", "6", "|-|", "!", "_|", "|\(", "1", "|\\/|", "|\\|", "()", "|>", "(,)", "|2", "$", "|", "|_|", "\\/", "\\^/", ")(", "'/", "\"/_");
  $level9   = array("@", "8", "(", "|)", "&", "|=", "6", "|-|", "!", "_|", "|\{", "|_", "/\\/\\", "|\\|", "()", "|>", "(,)", "|2", "$", "|", "|_|", "\\/", "\\^/", ")(", "'/", "\"/_");*/



  var regexp = /\b(\w)*\b/g;

  function Leeter(level, prc) {
    this.leeted = false;
    this.level = level || 'basic';
    this.prc = prc || 100;
  };

  Leeter.prototype.leet = function(node) {
    var nodes = this.getTextNodesIn(node);
    for (var i=0;i<nodes.length;i++) {
      var currentTextNode = nodes[i];
      var text = currentTextNode.textContent;
      currentTextNode.textContent = this.replacer(currentTextNode);      
      $(currentTextNode.parentElement).data('leeter', { oldContent: text });
    }
    this.leeted = !this.leeted;
  };

  Leeter.prototype.replacer = function(text) {    
    if (this.leeted) {
      return $(text.parentElement).data('leeter').oldContent;      
    }
    var self = this;
    var t = text.textContent.toUpperCase().replace(
      regexp,
      function(match) {
        var newWord = ' ';
        var length = match.length;
        for (var i=0;i<length;i++) {
          var ccode = match[i].toUpperCase().charCodeAt();
          if (alpha[ccode])
            newWord += alpha[ccode][self.level][0];
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

