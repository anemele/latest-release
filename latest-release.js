/**
 * Get the latest release of something.
 *
 * For those with LTS and current stable release, get these two version.
 * For the others, get two or three latest release.
 */

const axios = require('axios')
const config = require('./latest-release')

console.log('Get the latest release of something you are paying attention to:');

// axios.defaults.timeout = 10000;

config.filter(item => item.enable).forEach(function (item) {
    axios.get(item.url).then(function (res) {
        console.log('\n' + item.name);
        item.cb(res.data)
    }).catch(err => {
        if (err) console.log(err.message)
    })
})
