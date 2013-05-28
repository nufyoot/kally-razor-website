var KallyRazor  = require('kally-razor');
var path        = require('path');

module.exports = function (config) {
    if (path.sep == '/') {
        var razor = new KallyRazor({
            root: config.dirname + '/src/views/home',
            layout: config.dirname + '/src/views/shared/_layout.html'
        });
    } else {
        var razor = new KallyRazor({
            root: config.dirname + '\\src\\views\\home',
            layout: config.dirname + '\\src\\views\\shared\\_layout.html'
        });
    }

    return {
        index: function (req, res) {
            res.send(razor.render('index.html', { activeTab: 'home' }));
        },

        about: function (req, res) {
            res.send(razor.render('about.html', { activeTab: 'about' }));
        }
    };
};
