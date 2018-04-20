//     apple-device-names
//     Version 1.1.7
//     https://github.com/twitter-fabric/apple-model-names
//     (c) 2017 Google, Inc.
//     apple-device-names may be freely distributed under the MIT license.

;(function () {
  function _convertMacbookPro(code, opts) {
    if (!code) return '';
    if (/^13[_,]3$/.test(code)) return 'Retina, 15", Late 2016';
    if (/^13[_,]2$/.test(code)) return 'Retina, 13", Late 2016, Four Thunderbolt 3 ports';
    if (/^13[_,]1$/.test(code)) return 'Retina, 13", Late 2016, Two Thunderbolt 3 ports';
    if (/^11[_,][4,5]$/.test(code)) return 'Retina, 15", Mid 2015';
    if (/^11[_,][2,3]$/.test(code)) return 'Retina, 15", Mid 2014';
    if (/^12[_,]1$/.test(code)) return 'Retina, 13", Early 2015';
    if (/^11[_,]1$/.test(code)) return 'Retina, 13", Mid 2014';
    if (/^10[_,]2$/.test(code)) return 'Retina, 13", Early 2013';
    if (/^10[_,]1$/.test(code)) return 'Retina, 15", Early 2013';
    if (/^9[_,]2$/.test(code)) return '13", Mid 2012';
    if (/^9[_,]1$/.test(code)) return '15", Mid 2012';
    if (/^8[_,]3$/.test(code)) return '17", Late 2011';
    if (/^8[_,]2$/.test(code)) return '15", Late 2011';
    if (/^8[_,]1$/.test(code)) return '13", Late 2011';
    if (/^7[_,]1$/.test(code)) return '13", Mid 2010';
    if (/^6[_,]2$/.test(code)) return '15", Mid 2010';
    if (/^6[_,]1$/.test(code)) return '17", Mid 2010';
    if (/^5[_,]5$/.test(code)) return '13", Mid 2009';
    if (/^5[_,]3$/.test(code)) return '15", Mid 2009';
    if (/^5[_,]2$/.test(code)) return '17", Mid 2009';
    if (/^5[_,]1$/.test(code)) return 'Late 2008';
    if (/^4[_,]1$/.test(code)) return 'Early 2008';
    if (/^3[_,]1$/.test(code)) return 'Late 2007';
    if (/^2[_,]2$/.test(code)) return '15", Core 2 Duo';
    if (/^2[_,]1$/.test(code)) return '17", Core 2 Duo';
    if (/^1[_,]2$/.test(code)) return '17"';
    if (/^1[_,]1$/.test(code)) return '15", Glossy';
    return code;
  }

  function _convertMacbookAir(code, opts) {
    if (!code) return '';
    if (/^7[_,]2$/.test(code)) return '13", Early 2015';
    if (/^7[_,]1$/.test(code)) return '11", Early 2015';
    if (/^6[_,]2$/.test(code)) return '13", Mid 2013/Early 2014';
    if (/^6[_,]1$/.test(code)) return '11", Mid 2013/Early 2014';
    if (/^5[_,]2$/.test(code)) return '13", Mid 2012';
    if (/^5[_,]1$/.test(code)) return '11", Mid 2012';
    if (/^4[_,]2$/.test(code)) return '13", Mid 2011';
    if (/^4[_,]1$/.test(code)) return '11", Mid 2011';
    if (/^3[_,]2$/.test(code)) return '13", Late 2010';
    if (/^3[_,]1$/.test(code)) return '11", Late 2010';
    if (/^2[_,]1$/.test(code)) return 'Late 2008/Mid 2009';
    if (/^1[_,]1$/.test(code)) return 'Original Model';
    return code;
  }

  function _convertMacbook(code, opts) {
    if (!code) return '';
    if (/^8[_,]1$/.test(code)) return 'Retina, 12", Early 2015';
    if (/^7[_,]1$/.test(code)) return '13", Mid 2010';
    if (/^6[_,]1$/.test(code)) return '13", Late 2009';
    if (/^5[_,]2$/.test(code)) return '13", Mid 2009';
    if (/^5[_,]1$/.test(code)) return '13", Aluminum, Late 2008';
    if (/^4[_,]1$/.test(code)) return '13", Late 2007';
    if (/^3[_,]1$/.test(code)) return '13", Late 2007';
    if (/^2[_,]1$/.test(code)) return '13", Mid 2007';
    if (/^1[_,]1$/.test(code)) return 'Original Model';
    return code;
  }

  function _convertImac(code, opts) {
    if (!code) return '';
    if (/^17[_,]2$/.test(code)) return 'Retina 5K, 27", Late 2015';
    if (/^16[_,]2$/.test(code)) return 'Retina 4K, 21.5", Late 2015';
    if (/^16[_,]1$/.test(code)) return '21.5", Late 2015';
    if (/^15[_,]1$/.test(code)) return 'Retina 5K, 27", Mid 2015';
    if (/^15[_,]1$/.test(code)) return 'Retina 5K, 27", Mid 2015';
    if (/^14[_,]4$/.test(code)) return '21.5", Mid 2014';
    if (/^14[_,]2$/.test(code)) return '27", Late 2013';
    if (/^14[_,]1$/.test(code)) return '21.5", Late 2013';
    if (/^13[_,]2$/.test(code)) return '27", Late 2012';
    if (/^13[_,]1$/.test(code)) return '21.5", Late 2012';
    if (/^12[_,]2$/.test(code)) return '27", Mid 2011';
    if (/^12[_,]1$/.test(code)) return '21.5", Mid 2011';
    if (/^11[_,]3$/.test(code)) return '27", Mid 2010';
    if (/^11[_,]2$/.test(code)) return '21.5", Mid 2010';
    if (/^10[_,]1$/.test(code)) return 'Late 2009';
    if (/^9[_,]1$/.test(code)) return 'Early 2009';
    if (/^8[_,]1$/.test(code)) return 'Early 2008';
    if (/^7[_,]1$/.test(code)) return 'Mid 2007';
    return code;
  }

  function _convertMacMini(code, opts) {
    if (!code) return '';
    if (/^7[_,][1-3]$/.test(code)) return 'Late 2014';
    if (/^6[_,][1-2]$/.test(code)) return 'Late 2012';
    if (/^5[_,][1-3]$/.test(code)) return 'Mid 2011';
    if (/^5[_,][1-3]$/.test(code)) return 'Mid 2011';
    if (/^4[_,]1$/.test(code)) return 'Mid 2010';
    if (/^3[_,]1$/.test(code)) return 'Early/Late 2009';
    if (/^2[_,]1$/.test(code)) return 'Mid 2007';
    if (/^1[_,]1$/.test(code)) return 'Early/Late 2006';
    return code;
  }

  function _convertMacPro(code, opts) {
    if (!code) return '';
    if (/^6[_,]1$/.test(code)) return 'Late 2013';
    if (/^5[_,]1$/.test(code)) return 'Mid 2012';
    return code;
  }

  function _convertIphone(code, opts) {
    if (!code) return '';
    if (/^10[_,][36]$/.test(code)) return 'X';
    if (/^10[_,][25]$/.test(code)) return '8 Plus';
    if (/^10[_,][14]$/.test(code)) return '8';
    if (/^9[_,][24]$/.test(code)) return '7 Plus';
    if (/^9[_,][13]$/.test(code)) return '7';
    if (/^8[_,]4$/.test(code)) return 'SE';
    if (/^8[_,]2$/.test(code)) return '6s Plus';
    if (/^8[_,]1$/.test(code)) return '6s';
    if (/^7[_,]2$/.test(code)) return '6';
    if (/^7[_,]1$/.test(code)) return '6 Plus';
    if (/^6[_,]\d$/.test(code)) return '5s';
    if (/^5[_,][34]$/.test(code)) return '5c';
    if (/^5[_,]\d$/.test(code)) return '5';
    if (/^4[_,]\d$/.test(code)) return '4s';
    if (/^3[_,]\d$/.test(code)) return '4';
    if (/^2[_,]\d$/.test(code)) return '3GS';
    if (/^1[_,]2$/.test(code)) return '3G';
    if (/^1[_,]1$/.test(code)) return '1';
    return code;
  }

  function _convertIpod(code, opts) {
    if (!code) return '';
    if (/^7[_,]\d$/.test(code)) return '6G';
    if (/^5[_,]\d$/.test(code)) return '5G';
    if (/^4[_,]\d$/.test(code)) return '4G';
    if (/^3[_,]\d$/.test(code)) return '3G';
    if (/^2[_,]\d$/.test(code)) return '2G';
    if (/^1[_,]\d$/.test(code)) return '1G';
    return code;
  }

  function _convertIpad(code, opts) {
    if (!code) return '';
    if (/^7[_,][3-4]$/.test(code)) return 'Pro (10.5 inch)';
    if (/^7[_,][1-2]$/.test(code)) return 'Pro (12.9 inch, 2nd Gen)';
    if (/^6[_,]1[1-2]$/.test(code)) return '5';
    if (/^6[_,][7-8]$/.test(code)) return 'Pro (12.9 inch)';
    if (/^6[_,][3-4]$/.test(code)) return 'Pro (9.7 inch)';
    if (/^5[_,][3-4]$/.test(code)) return 'Air 2';
    if (/^5[_,][1-2]$/.test(code)) return 'mini 4';
    if (/^4[_,][7-9]$/.test(code)) return 'mini 3';
    if (/^4[_,][4-6]$/.test(code)) return 'mini 2';
    if (/^4[_,][1-3]$/.test(code)) return 'Air';
    if (/^3[_,][4-6]$/.test(code)) return '4';
    if (/^3[_,][1-3]$/.test(code)) return '3';
    if (/^2[_,][5-7]$/.test(code)) return 'mini';
    if (/^2[_,][1-4]$/.test(code)) return '2';
    if (/^1[_,]\d$/.test(code)) return '1';
    return code;
  }

  function _convertTv(code, opts) {
    if (!code) return '';
    if (/^6[_,]\d$/.test(code)) return '4K';
    if (/^5[_,]\d$/.test(code)) return '4th G';
    if (/^3[_,]\d$/.test(code)) return '3rd G';
    if (/^2[_,]\d$/.test(code)) return '2nd G';
    return code;
  }

  function _convertWatch(code, opts) {
    if (!code) return '';
    if (/^2[_,][3-4]$/.test(code)) return 'Series 2';
    if (/^1[_,][6-7]$/.test(code)) return 'Series 1';
    if (/^1[_,][1-2]$/.test(code)) return '1st G';
    return code;
  }

  function _parseOptions(opts) {
    opts = typeof opts === 'undefined' ? {} : opts;
    opts.noMatchString = opts.noMatchString || 'Other';
    return opts;
  }

  function getAppleModelName(str, opts) {
    if (!str || typeof str !== 'string') return;
    opts = _parseOptions(opts);

    var result = [str];
    if (str.match(/simulator/i)) {
      result = ['Simulator'];
    } else if (str.match(/ios/i)) {
      result = ['iOS (Simulator)'];
    } else if (m = str.match(/iphone\s?(.*)/i)) {
      result = ['iPhone', _convertIphone(m[1], opts)];
    } else if (m = str.match(/ipad\s?(.*)/i)) {
      result = ['iPad', _convertIpad(m[1], opts)];
    } else if (m = str.match(/ipod\s?(.*)/i)) {
      result = ['iPod touch', _convertIpod(m[1], opts)];
    } else if (m = str.match(/macbookpro\s?(.*)/i)) {
      result = ['MacBook Pro', _convertMacbookPro(m[1], opts)];
    } else if (m = str.match(/macbookair\s?(.*)/i)) {
      result = ['MacBook Air', _convertMacbookAir(m[1], opts)];
    } else if (m = str.match(/macbook\s?(.*)/i)) {
      result = ['MacBook', _convertMacbook(m[1], opts)];
    } else if (m = str.match(/imac\s?(.*)/i)) {
      result = ['iMac', _convertImac(m[1], opts)];
    } else if (m = str.match(/macmini\s?(.*)/i)) {
      result = ['Mac mini', _convertMacMini(m[1], opts)];
    } else if (m = str.match(/macpro\s?(.*)/i)) {
      result = ['Mac Pro', _convertMacPro(m[1], opts)];
    } else if (m = str.match(/appletv\s?(.*)/i)) {
      result = ['Apple TV', _convertTv(m[1], opts)];
    } else if (m = str.match(/watch\s?(.*)/i)) {
      result = ['Apple Watch', _convertWatch(m[1], opts)];
    } else {
      result = [opts.noMatchString];
    }

    if (!opts.split) {
      result = result.join(' ').trim();
    }
    return result;
  };

  if (typeof define === 'function' && define.amd) {
    // RequireJS / AMD
    define(function () {
      return getAppleModelName;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS
    module.exports = getAppleModelName;
  } else {
    // Global
    this.getAppleModelName = getAppleModelName;
  }
}.call(this));
