!function (A5d60ad) {
    var A9678a0 = (function () {
            var A3f65a4 = !![];
            return function (A177b26, A5c27bd) {
                var A3f2617 = A3f65a4 ? function () {
                    if (A5c27bd) {
                        var A2d510b = A5c27bd['apply'](A177b26, arguments);
                        return A5c27bd = null, A2d510b;
                    }
                } : function () {
                };
                return A3f65a4 = ![], A3f2617;
            };
        }()), A46cdcb = A9678a0(this, function () {
            var A1dabe4;
            try {
                var A318b45 = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
                A1dabe4 = A318b45();
            } catch (Ab7f026) {
                A1dabe4 = window;
            }
            var A3bf5dd = A1dabe4['console'] = A1dabe4['console'] || {}, A230904 = [
                    'log',
                    'warn',
                    'info',
                    'error',
                    'exception',
                    'table',
                    'trace'
                ];
            for (var A1ca62e = 0; A1ca62e < A230904['length']; A1ca62e++) {
                var A3510d2 = A9678a0['constructor']['prototype']['bind'](A9678a0), Acadadd = A230904[A1ca62e], A11348f = A3bf5dd[Acadadd] || A3510d2;
                A3510d2['__proto__'] = A9678a0['bind'](A9678a0), A3510d2['toString'] = A11348f['toString']['bind'](A11348f), A3bf5dd[Acadadd] = A3510d2;
            }
        });
    A46cdcb(), A5d60ad['switcher'] = function (A3040b9) {
        var A3661d8 = A5d60ad('input[type=checkbox]');
        void 0 !== A3040b9 && A3040b9['length'] && (A3661d8 = A3661d8['filter'](A3040b9)), A3661d8['each'](function () {
            var A3aa775 = A5d60ad(this)['hide'](), A8de085 = A5d60ad(document['createElement']('div'))['addClass']('ui-switcher')['attr']('aria-checked', A3aa775['is'](':checked'));
            'radio' === A3aa775['attr']('type') && A8de085['attr']('data-name', A3aa775['attr']('name')), toggleSwitch = function (A2354af) {
                void 0 === A2354af['target']['type'] && A3aa775['trigger'](A2354af['type']), A8de085['attr']('aria-checked', A3aa775['is'](':checked')), 'radio' === A3aa775['attr']('type') && A5d60ad('.ui-switcher[data-name=' + A3aa775['attr']('name') + ']')['not'](A8de085['get'](0))['attr']('aria-checked', !1);
            }, A8de085['on']('click', toggleSwitch), A3aa775['on']('click', toggleSwitch), A8de085['insertBefore'](A3aa775);
        });
    };
}(jQuery);