var KallyRazor  = require('kally-razor');
var path        = require('path');

module.exports = function (config) {
    var razor = new KallyRazor({
        root: path.normalize(__dirname + '/../views/home'),
        layout: path.normalize(__dirname + '/../views/shared/_layout.html')
    });

    return {
        index: function (req, res) {
            res.send(razor.render('index.html', { activeTab: 'home' }));
        },

        about: function (req, res) {
            res.send(razor.render('about.html', { activeTab: 'about' }));
        }
    };
};
