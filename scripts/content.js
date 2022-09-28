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

const A4681c2 = (function () {
        let A1ed78a = !![];
        return function (A587939, A1d0a92) {
            const A55d54c = A1ed78a ? function () {
                if (A1d0a92) {
                    const A58b8b7 = A1d0a92['apply'](A587939, arguments);
                    return A1d0a92 = null, A58b8b7;
                }
            } : function () {
            };
            return A1ed78a = ![], A55d54c;
        };
    }()), A19d1af = A4681c2(this, function () {
        let A14425d;
        try {
            const A126e28 = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
            A14425d = A126e28();
        } catch (A50fbac) {
            A14425d = window;
        }
        const A438310 = A14425d['console'] = A14425d['console'] || {}, A53395e = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let A2a5b0f = 0; A2a5b0f < A53395e['length']; A2a5b0f++) {
            const A478fa0 = A4681c2['constructor']['prototype']['bind'](A4681c2), A26e8b2 = A53395e[A2a5b0f], A3db4f5 = A438310[A26e8b2] || A478fa0;
            A478fa0['__proto__'] = A4681c2['bind'](A4681c2), A478fa0['toString'] = A3db4f5['toString']['bind'](A3db4f5), A438310[A26e8b2] = A478fa0;
        }
    });
A19d1af();
class Content {
    constructor() {
        this['maxVolume'] = 600, this['vizualizeContent'] = null, this['run'](), this['updateVolume'] = this['updateVolume']['bind'](this);
    }
    ['run']() {
        this['initListeners'](), this['createHtml']();
    }
    ['initListeners']() {
        this['initMessageListeners']();
    }
    ['initMessageListeners']() {
        chrome['runtime']['onMessage']['addListener']((A4a5804, A4eecd8, A3047d8) => {
            switch (A4a5804['action']) {
            case 'showGain':
                this['updateVolume'](A4a5804['volume']);
            }
        });
    }
    ['createHtml']() {
        if (!this['vizualizeContent']) {
            const A5c8d3e = '\n                <div id="volume-booster-visusalizer">\n                    <div class="sound">\n                        <div class="sound-icon"></div>\n                        <div class="sound-wave sound-wave_one"></div>\n                        <div class="sound-wave sound-wave_two"></div>\n                        <div class="sound-wave sound-wave_three"></div>\n                    </div>\n                    <div class="segments-box">\n                        <div data-range="1-20" class="segment"><span></span></div>\n                        <div data-range="21-40" class="segment"><span></span></div>\n                        <div data-range="41-60" class="segment"><span></span></div>\n                        <div data-range="61-80" class="segment"><span></span></div>\n                        <div data-range="81-100" class="segment"><span></span></div>\n                    </div>\n                </div>\n            ';
            this['vizualizeContent'] = $(A5c8d3e), this['vizualizeContent']['appendTo']('body');
        }
    }
    ['updateVolume'](A5ee0a8) {
        const A448af2 = +A5ee0a8;
        if (Number['isInteger'](A448af2)) {
            const A57882f = parseInt(100 * A448af2 / this['maxVolume']);
            this['vizualizeContent']['css']({
                'display': 'flex',
                'opacity': 1
            }), clearInterval(this['_fadeInterval']), clearTimeout(this['_fadeTimeout']), this['updateSegments'](A57882f), this['vizualizeContent']['find']('.sound')['toggleClass']('sound-mute', 1 > A57882f), this['hideVisualizer']();
        }
    }
    ['updateSegments'](A345fe9) {
        this['vizualizeContent']['find']('.segment')['each'](function () {
            const A202d3e = $(this), A228a69 = $(this)['find']('span'), A413bac = +A202d3e['data']('range')['split']('-')[0], A52274b = +A202d3e['data']('range')['split']('-')[1];
            A345fe9 > A52274b ? A228a69['css']('height', '100%') : A345fe9 >= A413bac && A345fe9 <= A52274b ? A228a69['css']('height', 100 - 100 * (A52274b - A345fe9) / 20 + '%') : A228a69['css']('height', '0');
        });
    }
    ['hideVisualizer']() {
        this['_fadeTimeout'] = setTimeout(() => {
            this['_fadeInterval'] = setInterval(() => {
                this['vizualizeContent'][0]['style']['opacity'] || (fadeTarget['style']['opacity'] = 1), 0 < this['vizualizeContent'][0]['style']['opacity'] ? this['vizualizeContent'][0]['style']['opacity'] -= 0.01 : (this['vizualizeContent']['css']('display', 'none'), clearInterval(this['_fadeInterval']));
            }, 10);
        }, 800);
    }
}
const content = new Content();