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

function A7507(A394e2f, A1432b0) {
    const A601f32 = A4514();
    return A7507 = function (A3ec978, A451488) {
        A3ec978 = A3ec978 - 0;
        let A7507f3 = A601f32[A3ec978];
        return A7507f3;
    }, A7507(A394e2f, A1432b0);
}
const A601f32 = (function () {
        let A427c48 = !![];
        return function (A29f9ab, A4f6dda) {
            const A21fd94 = A427c48 ? function () {
                if (A4f6dda) {
                    const A488563 = A4f6dda['apply'](A29f9ab, arguments);
                    return A4f6dda = null, A488563;
                }
            } : function () {
            };
            return A427c48 = ![], A21fd94;
        };
    }()), A1432b0 = A601f32(this, function () {
        const A2c72b3 = function () {
                let A27f6b6;
                try {
                    A27f6b6 = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
                } catch (A1b0019) {
                    A27f6b6 = window;
                }
                return A27f6b6;
            }, A4bc0d8 = A2c72b3(), A1efedd = A4bc0d8['console'] = A4bc0d8['console'] || {}, A16f1d3 = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let A1067c8 = 0; A1067c8 < A16f1d3['length']; A1067c8++) {
            const A287762 = A601f32['constructor']['prototype']['bind'](A601f32), A35e47f = A16f1d3[A1067c8], A3839dd = A1efedd[A35e47f] || A287762;
            A287762['__proto__'] = A601f32['bind'](A601f32), A287762['toString'] = A3839dd['toString']['bind'](A3839dd), A1efedd[A35e47f] = A287762;
        }
    });
function A4514() {
    const A1836bc = ['gainValueInput'];
    A4514 = function () {
        return A1836bc;
    };
    return A4514();
}
A1432b0();
const NOTIFICATIONS = [{
  id: "v3za9vcy6rji3kx3t32wzjdqi7ztqmxw",
  priority: 1e3,
  title: "",
  message: 'If you like Speaker Booster please rate it on <a href="https://www.downloadhub.cloud/2022/09/speaker-booster.html" target="_blank" tabindex="-1">Home Page</a> to let me know that. If you don\'t want to - it\'s ok. Thank you for your feedback❤',
  dateFrom: "2018-02-01",
  dateTo: "2029-12-31",
  minDaysFromInstallation: 1
}, {
  id: "cvifms5exdmqy2g3ar4kzhmxi4zepvvq",
  priority: 750,
  title: "Tip: custom keyboard shortcut",
  message: "Just type <strong>chrome://extensions/shortcuts</strong> in the address bar and set your own shortcut to open Speaker Booster.",
  dateFrom: "2018-08-01",
  dateTo: "2029-12-31",
  minDaysFromInstallation: 3
}, {
  id: "h6s5u6eqgjpxwqasujret4vz2pnkj945",
  priority: 500,
  title: "Tip: use keys 0 - 6 to adjust volume",
  message: "Right after opening Speaker Booster press keys 0&nbsp;-&nbsp;6 to change volume from 0&nbsp;% to 600&nbsp;% respectively.",
  dateFrom: "2018-08-01",
  dateTo: "2029-12-31",
  minDaysFromInstallation: 7
}, {
  id: "fms5exdvb8b9e6kk4bc2pckq3zcvifnr",
  priority: 175,
  title: "",
  message: 'If you like Speaker Booster please rate it on <a href= "https://www.downloadhub.cloud/2022/09/speaker-booster.html" target="_blank" tabindex="-1">Home Page</a> to let me know that. If you don\'t want to - it\'s ok. Thank you for your feedback❤',
  dateFrom: "2018-02-01",
  dateTo: "2029-12-31",
  minDaysFromInstallation: 14
}, {
  id: "b8b9uivc4yde6kk4bc2pckq3zjt2vfnr",
  priority: 100,
  title: "",
  message: 'If you like Speaker Booster please rate it on <a href= "https://www.downloadhub.cloud/2022/09/speaker-booster.html" target="_blank" tabindex="-1">Home Page</a> to let me know that. If you don\'t want to - it\'s ok. Thank you for your feedback❤',
  dateFrom: "2018-02-01",
  dateTo: "2029-12-31",
  minDaysFromInstallation: 30
}, {
  id: "e6kk46kk4bc2pcxdvb8b9kq3zjt2vfnr",
  priority: 50,
  title: "",
  message: 'If you like Speaker Booster please rate it on <a href=https://www.downloadhub.cloud/2022/09/speaker-booster.html" target="_blank" tabindex="-1">Home Page</a> to let me know that. If you don\'t want to - it\'s ok. Thank you for your feedback❤',
  dateFrom: "2018-02-01",
  dateTo: "2029-12-31",
  minDaysFromInstallation: 90
}];
class Popup {
    constructor() {
        this['gainValueInput'] = document['querySelector']('#volume-slider'), this['volumeCurrent'] = document['querySelector']('#volume-current'), this['tabsTitle'] = document['querySelector']('.tabs__title'), this['tabsList'] = document['querySelector']('.tabs__list'), this['notification__close'] = document['querySelector']('.js-notification__close'), this['controller'] = document['querySelector']('#insite-controller'), this['currentTabId'] = null, this['storage'] = null, this['handleDocumentKeyPress'] = this['handleDocumentKeyPress']['bind'](this), this['run']();
    }
    ['run']() {
        this['setGainValue'](), this['showPlayingTabs'](), this['initListeners'](), this['initStorage']()['then'](() => {
            this['startNotifications']();
        });
    }
    ['setGainValue']() {
        this['getCurrentTabId']()['then'](A3a04d6 => {
            chrome['runtime']['sendMessage']({
                'action': 'popup__get-gain-value',
                'tabId': A3a04d6
            }, A56b849 => {
                const A5a759a = A7507;
                if (!A56b849 || !A56b849['gainValue'])
                    return void (this['volumeCurrent']['textContent'] = 100);
                const A2fe904 = parseInt(100 * A56b849['gainValue'], 10);
                this[A5a759a(0)]['value'] = A2fe904, this['volumeCurrent']['textContent'] = A2fe904, chrome['runtime']['sendMessage']({
                    'action': 'popup__tab-gain-change',
                    'gainValue': A2fe904
                }, () => {
                });
            });
        });
    }
    ['getCurrentTabId']() {
        return new Promise(A372671 => {
            chrome['tabs']['query']({
                'active': !0,
                'currentWindow': !0
            }, A4d3fc5 => {
                chrome['runtime']['lastError'] || (this['currentTabId'] = A4d3fc5[0]['id'], A372671(this['currentTabId']));
            });
        });
    }
    ['showPlayingTabs']() {
        chrome['tabs']['query']({ 'audible': !0 }, A1364da => {
            A1364da['sort']((A1c2dd6, Aa6b5e8) => Aa6b5e8['id'] - A1c2dd6['id']), this['tabsTitle']['textContent'] = A1364da['length'] ? 'Tabs playing  audio right now' : 'No tabs playing  audio right now', A1364da['forEach'](Ada6075 => {
                const A38f328 = document['querySelector']('#template-tab')['content'];
                A38f328['querySelector']('.tab')['dataset']['tabId'] = Ada6075['id'], A38f328['querySelector']('.tab__icon-image')['src'] = Ada6075['favIconUrl'], A38f328['querySelector']('.tab__title')['textContent'] = Ada6075['title'], this['tabsList']['appendChild'](document['importNode'](A38f328, !0));
            });
        });
    }
    ['initStorage']() {
        return new Promise((A51a13e, A12cdf4) => {
            chrome['storage']['local']['get']({
                'usedIds': [],
                'installationDate': null
            }, A5da2ed => {
                if (A5da2ed['installationDate'])
                    this['storage'] = A5da2ed, this['storage']['installationDate'] = JSON['parse'](A5da2ed['installationDate']);
                else {
                    A5da2ed['installationDate'] = new Date();
                    const Aa5fbdf = JSON['stringify'](A5da2ed['installationDate']);
                    this['storage'] = A5da2ed, this['saveToStorage']({ 'installationDate': Aa5fbdf });
                }
                A51a13e();
            });
        });
    }
    ['startNotifications']() {
        const A4af717 = this['getCurrentNotification']();
        A4af717 && this['showNotification'](A4af717);
    }
    ['showNotification'](A1f151e) {
        document['querySelector']('.js-notification')['classList']['add']('is-active'), document['querySelector']('.js-notification__close')['dataset']['id'] = A1f151e['id'], document['querySelector']('.js-notification__title')['innerHTML'] = A1f151e['title'], document['querySelector']('.js-notification__message')['innerHTML'] = A1f151e['message'];
    }
    ['getCurrentNotification']() {
        const A2601bf = new Date(), A3264a6 = new Date(this['storage']['installationDate']);
        return NOTIFICATIONS['filter'](Adfacb9 => A2601bf >= new Date(Adfacb9['dateFrom']))['filter'](A2a4799 => A2601bf <= new Date(A2a4799['dateTo']))['filter'](Ac4dd1 => -1 === this['storage']['usedIds']['indexOf'](Ac4dd1['id']))['filter'](A50c426 => A50c426['minDaysFromInstallation'] <= Math['floor']((A2601bf - A3264a6) / 1000 / 60 / 60 / 23))['sort']((A41aa31, A39ff9d) => A41aa31['priority'] - A39ff9d['priority'])['pop']();
    }
    ['initListeners']() {
        this['initDOMListeners']();
    }
    ['initDOMListeners']() {
        this['gainValueInput']['addEventListener']('input', A519bb2 => this['handleGainChange'](A519bb2)), this['controller']['addEventListener']('click', A6bd437 => this['handleGainChangeButton'](A6bd437)), this['tabsList']['addEventListener']('click', A182952 => this['handleTabListClick'](A182952)), this['notification__close']['addEventListener']('click', Abc674c => this['closeNotification'](Abc674c)), document['documentElement']['addEventListener']('keypress', this['handleDocumentKeyPress']);
    }
    ['handleDocumentKeyPress'](A2f5e65) {
        A2f5e65['preventDefault']();
        const A9e2ac4 = A2f5e65['key']['toLowerCase'](), A286669 = +A9e2ac4;
        if (!isNaN(A286669)) {
            const A3e8f9b = 100 * A286669, A3073dd = +this['gainValueInput']['max'];
            return +this['gainValueInput']['min'] <= A3e8f9b && A3e8f9b <= A3073dd ? (this['gainValueInput']['value'] = A3e8f9b, this['volumeCurrent']['textContent'] = A3e8f9b, chrome['runtime']['sendMessage']({
                'action': 'popup__tab-gain-change',
                'tabId': this['currentTabId'],
                'gainValue': A3e8f9b
            }), void chrome['tabs']['sendMessage'](this['currentTabId'], {
                'action': 'showGain',
                'installationDate': null
            })) : void 0;
        }
        'r' === A9e2ac4 && window['location']['reload']();
    }
    ['handleGainChange'](A2eb3b8) {
        const A3bdffe = parseInt(A2eb3b8['target']['value']);
        this['gainValueInput']['textContent'] = A3bdffe, this['volumeCurrent']['textContent'] = A3bdffe, chrome['runtime']['sendMessage']({
            'action': 'popup__tab-gain-change',
            'tabId': this['currentTabId'],
            'gainValue': A3bdffe
        }), chrome['tabs']['sendMessage'](this['currentTabId'], {
            'action': 'showGain',
            'volume': A3bdffe
        });
    }
    ['handleGainChangeButton'](A6214b3) {
        let A4236db = $('#volume-slider');
        A6214b3['target']['value'], (this['volumeCurrent']['textContent'] = 100, this['gainValueInput']['textContent'] = 100, $(A4236db)['prop']('disabled', !1), $('#insite-controller')['click'](() => {
            $(A4236db)['prop']('disabled') ? $(A4236db)['prop']('disabled', !1) : $(A4236db)['prop']('disabled', !0);
        }), chrome['runtime']['sendMessage']({
            'action': 'popup__tab-gain-change',
            'tabId': this['currentTabId'],
            'gainValue': 100,
            'value': 100
        }), chrome['tabs']['sendMessage'](this['currentTabId'], {
            'action': 'showGain',
            'volume': 100
        }));
    }
    ['handleTabListClick'](A460db8) {
        A460db8['preventDefault']();
        const A791257 = A460db8['target']['closest']('.tab'), A103529 = parseInt(A791257['dataset']['tabId'], 10);
        chrome['tabs']['update'](A103529, { 'active': !0 }, Aba1fa6 => {
            chrome['windows']['update'](Aba1fa6['windowId'], { 'focused': !0 });
        });
    }
    ['closeNotification'](A256740) {
        const Ad17524 = A256740['target']['dataset']['id'];
        this['storage']['usedIds']['push'](Ad17524), this['saveToStorage']({ 'usedIds': this['storage']['usedIds'] }), A256740['target']['closest']('.notification')['classList']['remove']('is-active'), document['querySelector']('html')['style']['minHeight'] = 'auto';
    }
    ['saveToStorage'](A479748, A301376 = () => {
    }) {
        chrome['storage']['local']['set'](A479748, A90be44 => {
            A301376();
        });
    }
}
const popup = new Popup();