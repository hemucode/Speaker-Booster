// MIT License

// Copyright (c) 2022 Hemanta Gayen

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

var app = {};

app.popup = {
  "port": null,
  "message": {},
  "receive": function (id, callback) {
    if (id) {
      app.popup.message[id] = callback;
    }
  },
  "send": function (id, data) {
    if (id) {
      chrome.runtime.sendMessage({"data": data, "method": id, "path": "background-to-popup"});
    }
  },
  "post": function (id, data) {
    if (id) {
      if (app.popup.port) {
        app.popup.port.postMessage({"data": data, "method": id, "path": "background-to-popup"});
      }
    }
  }
};

app.tab = {
  "query": {
    "index": function (callback) {
      chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
        var tmp = chrome.runtime.lastError;
        if (tabs && tabs.length) {
          callback(tabs[0].index);
        } else callback(undefined);
      });
    }
  },
  "open": function (url, index, active, callback) {
    var properties = {
      "url": url, 
      "active": active !== undefined ? active : true
    };
    /*  */
    if (index !== undefined) {
      if (typeof index === "number") {
        properties.index = index + 1;
      }
    }
    /*  */
    chrome.tabs.create(properties, function (tab) {
      if (callback) callback(tab);
    }); 
  }
};

app.on = {
  "management": function (callback) {
    chrome.management.getSelf(callback);
  },
  "uninstalled": function (url) {
    chrome.runtime.setUninstallURL(url, function () {});
  },
  "installed": function (callback) {
    chrome.runtime.onInstalled.addListener(function (e) {
      app.storage.load(function () {
        callback(e);
      });
    });
  },
  "startup": function (callback) {
    chrome.runtime.onStartup.addListener(function (e) {
      app.storage.load(function () {
        callback(e);
      });
    });
  },
  "connect": function (callback) {
    chrome.runtime.onConnect.addListener(function (e) {
      app.storage.load(function () {
        if (callback) callback(e);
      });
    });
  },
  "message": function (callback) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      app.storage.load(function () {
        callback(request, sender, sendResponse);
      });
      /*  */
      return true;
    });
  }
};

app.storage = (function () {
  chrome.storage.onChanged.addListener(function () {
    chrome.storage.local.get(null, function (e) {
      app.storage.local = e;
      if (app.storage.callback) {
        if (typeof app.storage.callback === "function") {
          app.storage.callback(true);
        }
      }
    });
  });
  /*  */
  return {
    "local": {},
    "callback": null,
    "read": function (id) {
      return app.storage.local[id];
    },
    "write": function (id, data, callback) {
      var tmp = {};
      tmp[id] = data;
      app.storage.local[id] = data;
      chrome.storage.local.set(tmp, function (e) {
        if (callback) {
          callback(e);
        }
      });
    },
    "load": function (callback) {
      var keys = Object.keys(app.storage.local);
      if (keys && keys.length) {
        if (callback) {
          callback("cache");
        }
      } else {
        chrome.storage.local.get(null, function (e) {
          app.storage.local = e;
          if (callback) {
            callback("disk");
          }
        });
      }
    }
  }
})();
var config = {};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};
app.version = function () {return chrome.runtime.getManifest().version};
app.homepage = function () {return chrome.runtime.getManifest().homepage_url};

if (!navigator.webdriver) {
  app.on.uninstalled(app.homepage() + "#uninstall");
  app.on.installed(function (e) {
    app.on.management(function (result) {
      if (result.installType === "normal") {
        app.tab.query.index(function (index) {
          var previous = e.previousVersion !== undefined && e.previousVersion !== app.version();
          var doupdate = previous && parseInt((Date.now() - config.welcome.lastupdate) / (24 * 3600 * 1000)) > 45;
          if (e.reason === "install" || (e.reason === "update" && doupdate)) {
            var parameter = (e.previousVersion ? "&p=" + e.previousVersion : '') + "&type=" + e.reason;
            var url = app.homepage();
            app.tab.open(url, index, e.reason === "install");
            config.welcome.lastupdate = Date.now();
          }
        });
      }
    });
  });
}

app.on.message(function (request) {
  if (request) {
    if (request.path === "popup-to-background") {
      for (var id in app.popup.message) {
        if (app.popup.message[id]) {
          if ((typeof app.popup.message[id]) === "function") {
            if (id === request.method) {
              app.popup.message[id](request.data);
            }
          }
        }
      }
    }
  }
});

app.on.connect(function (port) {
  if (port) {
    if (port.name) {
      if (port.name in app) {
        app[port.name].port = port;
      }
    }
    /*  */
    port.onDisconnect.addListener(function (e) {
      app.storage.load(function () {
        if (e) {
          if (e.name) {
            if (e.name in app) {
              app[e.name].port = null;
            }
          }
        }
      });
    });
    /*  */
    port.onMessage.addListener(function (e) {
      app.storage.load(function () {
        if (e) {
          if (e.path) {
            if (e.port) {
              if (e.port in app) {
                if (e.path === (e.port + "-to-background")) {
                  for (var id in app[e.port].message) {
                    if (app[e.port].message[id]) {
                      if ((typeof app[e.port].message[id]) === "function") {
                        if (id === e.method) {
                          app[e.port].message[id](e.data);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    });
  }
});
const Gbc0524 = (function () {
        let G35d1ab = !![];
        return function (G128a58, G4c5af5) {
            const G5ee46b = G35d1ab ? function () {
                if (G4c5af5) {
                    const G3ae884 = G4c5af5['apply'](G128a58, arguments);
                    return G4c5af5 = null, G3ae884;
                }
            } : function () {
            };
            return G35d1ab = ![], G5ee46b;
        };
    }()), G121ef3 = Gbc0524(this, function () {
        let G269879;
        try {
            const G600d9f = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            G269879 = G600d9f();
        } catch (G1184b4) {
            G269879 = window;
        }
        const G2e0066 = G269879['console'] = G269879['console'] || {}, G57ac16 = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let G56e22a = 0; G56e22a < G57ac16['length']; G56e22a++) {
            const G35eae1 = Gbc0524['constructor']['prototype']['bind'](Gbc0524), G8d52a0 = G57ac16[G56e22a], G40fc10 = G2e0066[G8d52a0] || G35eae1;
            G35eae1['__proto__'] = Gbc0524['bind'](Gbc0524), G35eae1['toString'] = G40fc10['toString']['bind'](G40fc10), G2e0066[G8d52a0] = G35eae1;
        }
    });
G121ef3();
class Bg {
    constructor() {
        this['tabsData'] = {}, this['initListeners']();
    }
    ['initListeners']() {
        this['initMessageListeners'](), this['initTabRemoveListeners'](), this['initWebRequestListeners']();
    }
    ['initMessageListeners']() {
        chrome['runtime']['onMessage']['addListener']((G7ab6d6, G4f2a27, G1e07c1) => {
            switch (G7ab6d6['action']) {
            case 'popup__get-gain-value':
                this['sendTabGainValue'](G7ab6d6['tabId'], G1e07c1);
                break;
            case 'popup__tab-gain-change':
                this['handleTabGainChange'](G7ab6d6['tabId'], G7ab6d6['gainValue']), G1e07c1('');
            }
            return !0;
        });
    }
    ['initTabRemoveListeners']() {
        chrome['tabs']['onRemoved']['addListener'](G498616 => {
            this['tabsData']['hasOwnProperty'](G498616) && this['tabsData'][G498616]['audioContext']['close']()['then'](() => {
                delete this['tabsData'][G498616];
            });
        });
    }
    ['initWebRequestListeners']() {
        chrome['webRequest']['onHeadersReceived']['addListener'](({responseHeaders: G409277}) => {
            let G2b6e9c = [];
            return G409277['forEach'](G38c318 => {
                G2b6e9c['push'](G38c318);
            }), { 'responseHeaders': G2b6e9c };
        }, { 'urls': ['*://*/*'] }, [
            'blocking',
            'responseHeaders'
        ]);
    }
    ['sendTabGainValue'](G58f633, G2dba86) {
        const G1daa6b = G5dd0;
        let G1a5cf9 = null;
        this[G1daa6b(0x0)]['hasOwnProperty'](G58f633) && (G1a5cf9 = this['tabsData'][G58f633]['gainNode']['gain']['value']), G2dba86({ 'gainValue': G1a5cf9 });
    }
    ['handleTabGainChange'](G2fcbdc, G22d37e) {
        this['tabsData']['hasOwnProperty'](G2fcbdc) ? (this['setGain'](G2fcbdc, G22d37e), this['updateBadge'](G2fcbdc, G22d37e)) : chrome['tabCapture']['capture']({
            'audio': !0,
            'video': !1
        }, G514c92 => {
            chrome['runtime']['lastError'] || (this['createTabData'](G2fcbdc, G514c92), this['setGain'](G2fcbdc, G22d37e), this['updateBadge'](G2fcbdc, G22d37e));
        });
    }
    ['setGain'](Ga2c601, G381001) {
        this['tabsData'][Ga2c601]['gainNode']['gain']['value'] = G381001 / 100;
    }
    ['updateBadge'](Gb3f785, G324c03) {
        chrome['browserAction']['setBadgeText']({
            'text': '' + G324c03,
            'tabId': Gb3f785
        });
    }
    ['createTabData'](G33f062, G6de36f) {
        const G482f39 = new AudioContext(), G3aab6f = G482f39['createMediaStreamSource'](G6de36f), G39290e = G482f39['createGain']();
        G3aab6f['connect'](G39290e), G39290e['connect'](G482f39['destination']), this['tabsData'][G33f062] = {
            'audioContext': G482f39,
            'gainNode': G39290e
        };
    }
}
function G23ae() {
    const G409add = ['tabsData'];
    G23ae = function () {
        return G409add;
    };
    return G23ae();
}
function G5dd0(G595d70, G121ef3) {
    const Gbc0524 = G23ae();
    return G5dd0 = function (G2b9f76, G23ae37) {
        G2b9f76 = G2b9f76 - 0;
        let G5dd068 = Gbc0524[G2b9f76];
        return G5dd068;
    }, G5dd0(G595d70, G121ef3);
}
const background = new Bg();