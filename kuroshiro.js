!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):r.kuroshiro=e()}(this,function(){"use strict";var r=function(r){if(Array.isArray(r)){for(var e=0,a=Array(r.length);e<r.length;e++)a[e]=r[e];return a}return Array.from(r)},e="ぁ".charCodeAt(0)-"ァ".charCodeAt(0),a="ァ".charCodeAt(0)-"ぁ".charCodeAt(0),n=function(r){return(r=r[0])>="぀"&&r<="ゟ"},o=function(r){return(r=r[0])>="゠"&&r<="ヿ"},t=function(r){return(r=r[0])>="一"&&r<="鿏"||r>="豈"&&r<="﫿"||r>="㐀"&&r<="䶿"},u=function(r){for(var e=0;e<r.length;e++)if(o(r[e]))return!0;return!1},i=function(r){for(var e=0;e<r.length;e++)if(t(r[e]))return!0;return!1},f=function(a){return[].concat(r(a)).map(function(r){return r>"゠"&&r<"ヷ"?String.fromCharCode(r.charCodeAt(0)+e):r}).join("")},s=function(e){return[].concat(r(e)).map(function(r){return r>"぀"&&r<"゗"?String.fromCharCode(r.charCodeAt(0)+a):r}).join("")},y=function(r){for(var e,a,n={"１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","０":"0","！":"!","”":'"',"＃":"#","＄":"$","％":"%","＆":"&","’":"'","（":"(","）":")","＝":"=","～":"~","｜":"|","＠":"@","‘":"`","＋":"+","＊":"*","；":";","：":":","＜":"<","＞":">","、":",","。":".","／":"/","？":"?","＿":"_","・":"･","「":"[","」":"]","｛":"{","｝":"}","￥":"\\","＾":"^","ふぁ":"fa","ふぃ":"fi","ふぇ":"fe","ふぉ":"fo","ファ":"fa","フィ":"fi","フェ":"fe","フォ":"fo","きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho","ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo","ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo","りゃ":"rya","りゅ":"ryu","りょ":"ryo","キャ":"kya","キュ":"kyu","キョ":"kyo","シャ":"sha","シュ":"shu","ショ":"sho","チャ":"cha","チュ":"chu","チョ":"cho","ニャ":"nya","ニュ":"nyu","ニョ":"nyo","ヒャ":"hya","ヒュ":"hyu","ヒョ":"hyo","ミャ":"mya","ミュ":"myu","ミョ":"myo","リャ":"rya","リュ":"ryu","リョ":"ryo","ふゃ":"fya","ふゅ":"fyu","ふょ":"fyo","ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo","びゃ":"bya","びゅ":"byu","びょ":"byo","ぢゃ":"dya","ぢゅ":"dyu","ぢょ":"dyo","じゃ":"ja","じゅ":"ju","じょ":"jo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo","フャ":"fya","フュ":"fyu","フョ":"fyo","ピャ":"pya","ピュ":"pyu","ピョ":"pyo","ビャ":"bya","ビュ":"byu","ビョ":"byo","ヂャ":"dya","ヂュ":"dyu","ヂョ":"dyo","ジャ":"ja","ジュ":"ju","ジョ":"jo","ギャ":"gya","ギュ":"gyu","ギョ":"gyo","ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","だ":"da","ぢ":"di","づ":"du","で":"de","ど":"do","ざ":"za","じ":"zi","ず":"zu","ぜ":"ze","ぞ":"zo","が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","パ":"pa","ピ":"pi","プ":"pu","ペ":"pe","ポ":"po","バ":"ba","ビ":"bi","ブ":"bu","ベ":"be","ボ":"bo","ダ":"da","ヂ":"di","ヅ":"du","デ":"de","ド":"do","ザ":"za","ジ":"zi","ズ":"zu","ゼ":"ze","ゾ":"zo","ガ":"ga","ギ":"gi","グ":"gu","ゲ":"ge","ゴ":"go","わ":"wa","ゐ":"wi","ゑ":"we","を":"wo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","や":"ya","ゆ":"yu","よ":"yo","ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","は":"ha","ひ":"hi","ふ":"hu","へ":"he","ほ":"ho","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","た":"ta","ち":"ti","つ":"tu","て":"te","と":"to","さ":"sa","し":"si","す":"su","せ":"se","そ":"so","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","あ":"a","い":"i","う":"u","え":"e","お":"o","ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o","ゃ":"ya","ゅ":"yu","ょ":"yo","ワ":"wa","ヰ":"wi","ヱ":"we","ヲ":"wo","ラ":"ra","リ":"ri","ル":"ru","レ":"re","ロ":"ro","ヤ":"ya","ユ":"yu","ヨ":"yo","マ":"ma","ミ":"mi","ム":"mu","メ":"me","モ":"mo","ハ":"ha","ヒ":"hi","フ":"hu","ヘ":"he","ホ":"ho","ナ":"na","ニ":"ni","ヌ":"nu","ネ":"ne","ノ":"no","タ":"ta","チ":"ti","ツ":"tu","テ":"te","ト":"to","サ":"sa","シ":"si","ス":"su","セ":"se","ソ":"so","カ":"ka","キ":"ki","ク":"ku","ケ":"ke","コ":"ko","ア":"a","イ":"i","ウ":"u","エ":"e","オ":"o","ァ":"a","ィ":"i","ゥ":"u","ェ":"e","ォ":"o","ャ":"ya","ュ":"yu","ョ":"yo","ヶ":"ke","ヵ":"ka","ん":"n","ー":"-","　":" "},o=0,t=r.length,u="";o<=t;)(a=n[r.substring(o,o+2)])?(u+=a,o+=2):(u+=(a=n[e=r.substring(o,o+1)])?a:e,o+=1);return u=(u=u.replace(/っ([bcdfghijklmnopqrstuvwyz])/gm,"$1$1")).replace(/っ/gm,"tu")},c=function(r){for(var e=!1,a=!1,u=0;u<r.length;u++)t(r[u])?e=!0:(n(r[u])||o(r[u]))&&(a=!0);return e&&a?1:e?0:a?2:3},d=function(r,e,a){a=a||"";for(var n="",o=0;o<r.length;o++)o!==r.length-1?n+=r[o][e]+""+a:n+=r[o][e];return n};function m(){this._analyzer=null}m.prototype.init=function(r,e){var a=this;null==a._analyzer?r.init(function(n){return n?e(n):(a._analyzer=r,e())}):e(new Error("Kuroshiro has already been initialized."))},m.prototype.convert=function(r,e,a){(e=e||{}).to=e.to||"hiragana",e.mode=e.mode||"normal",e.delimiter_start=e.delimiter_start||"(",e.delimiter_end=e.delimiter_end||")",r=r||"",this._analyzer.parse(r,function(r,n){if(r)return a(r);for(var m=0;m<n.length;m++)n[m].reading||(n[m].reading=n[m].surface_form);if("normal"===e.mode||"spaced"===e.mode)switch(e.to){case"katakana":return"normal"===e.mode?a(null,d(n,"reading")):a(null,d(n,"reading"," "));case"romaji":return"normal"===e.mode?a(null,y(d(n,"reading"))):a(null,y(d(n,"reading"," ")));case"hiragana":for(var h=0;h<n.length;h++)if(i(n[h].surface_form))if(u(n[h].surface_form)){n[h].reading=f(n[h].reading);for(var l="",g="",p=0;p<n[h].surface_form.length;p++)t(n[h].surface_form[p])?g+="(.*)":g+=o(n[h].surface_form[p])?f(n[h].surface_form[p]):n[h].surface_form[p];var _=new RegExp(g).exec(n[h].reading);if(_){for(var k=0,v=0;v<n[h].surface_form.length;v++)t(n[h].surface_form[v])?(l+=_[k+1],k++):l+=n[h].surface_form[v];n[h].reading=l}}else n[h].reading=f(n[h].reading);else n[h].reading=n[h].surface_form;return"normal"===e.mode?a(null,d(n,"reading")):a(null,d(n,"reading"," "))}else{if("okurigana"!==e.mode&&"furigana"!==e.mode)return a(new Error("No such mode..."));for(var b=[],w=0;w<n.length;w++){switch(n[w].reading=f(n[w].reading),c(n[w].surface_form)){case 0:b.push([n[w].surface_form,1,n[w].reading]);break;case 1:for(var j="",z=!1,A=[],C=0;C<n[w].surface_form.length;C++)t(n[w].surface_form[C])?z?A[A.length-1]+=n[w].surface_form[C]:(z=!0,j+="(.*?)",A.push(n[w].surface_form[C])):(z=!1,A.push(n[w].surface_form[C]),j+=o(n[w].surface_form[C])?f(n[w].surface_form[C]):n[w].surface_form[C]);var x=new RegExp("^"+j+"$").exec(n[w].reading);if(x)for(var K=1,E=0;E<A.length;E++)t(A[E][0])?b.push([A[E],1,x[K++]]):b.push([A[E],2,f(A[E])]);else b.push([n[w].surface_form,1,n[w].reading]);break;case 2:for(var $=0;$<n[w].surface_form.length;$++)b.push([n[w].surface_form[$],2,n[w].reading[$]]);break;case 3:for(var H=0;H<n[w].surface_form.length;H++)b.push([n[w].surface_form[H],3,n[w].surface_form[H]])}}var R="";switch(e.to){case"katakana":if("okurigana"===e.mode)for(var S=0;S<b.length;S++)1!==b[S][1]?R+=b[S][0]:R+=b[S][0]+e.delimiter_start+s(b[S][2])+e.delimiter_end;else for(var q=0;q<b.length;q++)1!==b[q][1]?R+=b[q][0]:R+="<ruby>"+b[q][0]+"<rp>"+e.delimiter_start+"</rp><rt>"+s(b[q][2])+"</rt><rp>"+e.delimiter_end+"</rp></ruby>";return a(null,R);case"romaji":if("okurigana"===e.mode)for(var N=0;N<b.length;N++)1!==b[N][1]?R+=b[N][0]:R+=b[N][0]+e.delimiter_start+y(b[N][2])+e.delimiter_end;else{R+="<ruby>";for(var B=0;B<b.length;B++)R+=b[B][0]+"<rp>"+e.delimiter_start+"</rp><rt>"+y(b[B][2])+"</rt><rp>"+e.delimiter_end+"</rp>";R+="</ruby>"}return a(null,R);case"hiragana":if("okurigana"===e.mode)for(var D=0;D<b.length;D++)1!==b[D][1]?R+=b[D][0]:R+=b[D][0]+e.delimiter_start+b[D][2]+e.delimiter_end;else for(var F=0;F<b.length;F++)1!==b[F][1]?R+=b[F][0]:R+="<ruby>"+b[F][0]+"<rp>"+e.delimiter_start+"</rp><rt>"+b[F][2]+"</rt><rp>"+e.delimiter_end+"</rp></ruby>";return a(null,R)}}})},m.prototype.toHiragana=function(r,e,a){return(e=e||{}).to="hiragana",this.convert(r,e,a)},m.prototype.toKatakana=function(r,e,a){return(e=e||{}).to="katakana",this.convert(r,e,a)},m.prototype.toRomaji=function(r,e,a){return(e=e||{}).to="romaji",this.convert(r,e,a)};var h=new m;return h.hasHiragana=function(r){for(var e=0;e<r.length;e++)if(n(r[e]))return!0;return!1},h.hasKatakana=u,h.hasKanji=i,h.isHiragana=n,h.isKatakana=o,h.isKanji=t,h});
//# sourceMappingURL=kuroshiro.js.map
