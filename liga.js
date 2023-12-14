/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'airbnb': '&#xe002;',
            'alibaba': '&#xe922;',
            'aliexpress': '&#xe91d;',
            'alliance': '&#xe003;',
            'amazon': '&#xe004;',
            'amplement': '&#xe005;',
            'android': '&#xe006;',
            'angellist': '&#xe007;',
            'angieslist': '&#xe916;',
            'apple': '&#xe008;',
            'appnet': '&#xe009;',
            'appstore': '&#xe91f;',
            'archive': '&#xe997;',
            'archive.org': '&#xe997;',
            'archiveorg': '&#xe997;',
            'artfight': '&#xe988;',
            'artfol': '&#xe98a;',
            'artistree': '&#xe99e;',
            'artstation': '&#xe959;',
            'ask': '&#xe930;',
            'augment': '&#xe908;',
            'avvo': '&#xe978;',
            'baidu': '&#xe00a;',
            'bale': '&#xe97e;',
            'bandcamp': '&#xe00b;',
            'battlenet': '&#xe00c;',
            'beatport': '&#xe955;',
            'bebee': '&#xe00e;',
            'bebo': '&#xe00f;',
            'behance': '&#xe010;',
            'bing': '&#xe92a;',
            'bitbucket': '&#xe909;',
            'blackberry': '&#xe951;',
            'blizzard': '&#xe011;',
            'blogger': '&#xe012;',
            'bloglovin': '&#xe904;',
            'bluesky': '&#xe98d;',
            'bluesky-alt': '&#xe98e;',
            'bonanza': '&#xe92c;',
            'bookbub': '&#xe949;',
            'booking': '&#xe936;',
            'buffer': '&#xe013;',
            'buzzly': '&#xe994;',
            'buzzlyart': '&#xe994;',
            'calendly': '&#xe93d;',
            'cara': '&#xe9a1;',
            'carrd': '&#xe981;',
            'cdbaby': '&#xe968;',
            'chrome': '&#xe014;',
            'codepen': '&#xe917;',
            'codered': '&#xe940;',
            'coderwall': '&#xe015;',
            'collectorz': '&#xe95c;',
            'comicfury': '&#xe99d;',
            'craigslist': '&#xe923;',
            'crunchbase': '&#xe93b;',
            'curiouscat': '&#xe989;',
            'curse': '&#xe016;',
            'dailymotion': '&#xe017;',
            'debian': '&#xe95f;',
            'deezer': '&#xe018;',
            'delicious': '&#xe019;',
            'deviantart': '&#xe01a;',
            'diablo': '&#xe01b;',
            'digg': '&#xe01c;',
            'digitalocean': '&#xe9a0;',
            'digital-ocean': '&#xe9a0;',
            'discord': '&#xe985;',
            'disqus': '&#xe01e;',
            'dlive': '&#xe975;',
            'doodle': '&#xe92b;',
            'douban': '&#xe01f;',
            'draugiem': '&#xe020;',
            'dribbble': '&#xe021;',
            'drupal': '&#xe022;',
            'ebay': '&#xe023;',
            'eitaa': '&#xe97c;',
            'elementaryos': '&#xe969;',
            'ello': '&#xe024;',
            'endomodo': '&#xe025;',
            'envato': '&#xe026;',
            'etsy': '&#xe027;',
            'facebook': '&#xe028;',
            'feedburner': '&#xe029;',
            'filmfreeway': '&#xe960;',
            'filmweb': '&#xe02a;',
            'firefox': '&#xe02b;',
            'fiverr': '&#xe91b;',
            'flattr': '&#xe02c;',
            'flickr': '&#xe02d;',
            'flipboard': '&#xe973;',
            'flowcode': '&#xe99f;',
            'flowpage': '&#xe99f;',
            'formulr': '&#xe02e;',
            'forrst': '&#xe02f;',
            'foursquare': '&#xe030;',
            'freelancer': '&#xe928;',
            'friendfeed': '&#xe031;',
            'fundable': '&#xe935;',
            'furaffinity': '&#xe987;',
            'furvilla': '&#xe998;',
            'fyuse': '&#xe90a;',
            '9gag': '&#xe984;',
            'gamefor': '&#xe94e;',
            'gamejolt': '&#xe901;',
            'gamewisp': '&#xe905;',
            'ghost': '&#xe933;',
            'github': '&#xe032;',
            'gitlab': '&#xe945;',
            'gitter': '&#xe96c;',
            'glaze': '&#xe98f;',
            'gnome': '&#xe961;',
            'goodreads': '&#xe033;',
            'google': '&#xe034;',
            'googlecalendar': '&#xe926;',
            'googlegroups': '&#xe036;',
            'googlehangouts': '&#xe974;',
            'googlemaps': '&#xe937;',
            'googlephotos': '&#xe037;',
            'googleplaymusic': '&#xe95e;',
            'googleplus': '&#xe038;',
            'googlescholar': '&#xe035;',
            'gotomeeting': '&#xe91c;',
            'grooveshark': '&#xe039;',
            'guru': '&#xe91e;',
            'gust': '&#xe92f;',
            'hackernews': '&#xe946;',
            'hackerone': '&#xe956;',
            'hackerrank': '&#xe03a;',
            'hearthstone': '&#xe03b;',
            'hellocoton': '&#xe03c;',
            'heroes': '&#xe03d;',
            'homeadvisor': '&#xe915;',
            'homefy': '&#xe93c;',
            'homes': '&#xe920;',
            'horde': '&#xe03f;',
            'houzz': '&#xe040;',
            'icq': '&#xe041;',
            'identica': '&#xe042;',
            'imdb': '&#xe043;',
            'indiedb': '&#xe94c;',
            'inkblot': '&#xe995;',
            'instagram': '&#xe044;',
            'instructables': '&#xe944;',
            'internet': '&#xe957;',
            'invision': '&#xe95a;',
            'issuu': '&#xe045;',
            'istock': '&#xe046;',
            'itchio': '&#xe962;',
            'itunes': '&#xe047;',
            'jamendo': '&#xe963;',
            'keybase': '&#xe048;',
            'kobo': '&#xe948;',
            'kofi': '&#xe983;',
            'ko-fi': '&#xe983;',
            'lanyrd': '&#xe049;',
            'lastfm': '&#xe04a;',
            'leprdspace': '&#xe990;',
            'leprd.space': '&#xe990;',
            'letterboxd': '&#xe96d;',
            'line': '&#xe04b;',
            'linkedin': '&#xe04c;',
            'linktree': '&#xe982;',
            'livejournal': '&#xe04d;',
            'livemaster': '&#xe93e;',
            'logmein': '&#xe91a;',
            'loomly': '&#xe932;',
            'lyft': '&#xe04e;',
            'macos': '&#xe04f;',
            'mail': '&#xe050;',
            'mailru': '&#xe94a;',
            'mastodon': '&#xe913;',
            'medium': '&#xe051;',
            'meetup': '&#xe052;',
            'messenger': '&#xe906;',
            'metapop': '&#xe970;',
            'microsoft': '&#xe90e;',
            'mix': '&#xe964;',
            'mixcloud': '&#xe053;',
            'mixer': '&#xe00d;',
            'mobcrush': '&#xe90d;',
            'moddb': '&#xe94b;',
            'modelmayhem': '&#xe054;',
            'moderneopets': '&#xe999;',
            'modernneopets': '&#xe999;',
            'mumble': '&#xe055;',
            'myanimelist': '&#xe950;',
            'myspace': '&#xe056;',
            'napster': '&#xe954;',
            'natgeo': '&#xe912;',
            'naver': '&#xe971;',
            'neocities': '&#xe992;',
            'neopets': '&#xe99a;',
            'newgrounds': '&#xe97f;',
            'newsvine': '&#xe057;',
            'nextdoor': '&#xe942;',
            'niconico': '&#xe939;',
            'nintendo': '&#xe058;',
            'npm': '&#xe059;',
            'odnoklassniki': '&#xe05a;',
            'openaigym': '&#xe919;',
            'openid': '&#xe05b;',
            'opera': '&#xe05c;',
            'origin': '&#xe941;',
            'outlook': '&#xe05d;',
            'overwatch': '&#xe05e;',
            'pandora': '&#xe907;',
            'patreon': '&#xe99b;',
            'paypal': '&#xe99c;',
            'periscope': '&#xe061;',
            'persona': '&#xe062;',
            'pillowfort': '&#xe980;',
            'pinterest': '&#xe063;',
            'pixiv': '&#xe94f;',
            'play': '&#xe064;',
            'player': '&#xe065;',
            'playstation': '&#xe066;',
            'pocket': '&#xe067;',
            'portfolio': '&#xe943;',
            '500px': '&#xe000;',
            'qobuz': '&#xe911;',
            'qq': '&#xe068;',
            'qrcode': '&#xe98b;',
            'quora': '&#xe069;',
            'raidcall': '&#xe06a;',
            'ravelry': '&#xe06b;',
            'realtor': '&#xe90f;',
            'redbubble': '&#xe979;',
            'reddit': '&#xe06c;',
            'redfin': '&#xe925;',
            'remote': '&#xe972;',
            'renren': '&#xe06d;',
            'rentry': '&#xe993;',
            'researchgate': '&#xe06e;',
            'residentadvisor': '&#xe06f;',
            'reverbnation': '&#xe070;',
            'rss': '&#xe071;',
            'seedrs': '&#xe929;',
            'seenthis': '&#xe95d;',
            'sharepoint': '&#xe965;',
            'sharethis': '&#xe072;',
            'sheezyart': '&#xe98c;',
            'shopify': '&#xe927;',
            'sketchfab': '&#xe90c;',
            'skype': '&#xe073;',
            'slack': '&#xe918;',
            'slideshare': '&#xe074;',
            'smashcast': '&#xe03e;',
            'smashwords': '&#xe947;',
            'smugmug': '&#xe075;',
            'snapchat': '&#xe076;',
            'society6': '&#xe97a;',
            'songkick': '&#xe077;',
            'soroush': '&#xe97d;',
            'soundcloud': '&#xe078;',
            'spip': '&#xe953;',
            'splice': '&#xe96f;',
            'spotify': '&#xe079;',
            'spreadshirt': '&#xe900;',
            'squarespace': '&#xe92d;',
            'stackexchange': '&#xe07a;',
            'stackoverflow': '&#xe07b;',
            'stage32': '&#xe96a;',
            'starcraft': '&#xe07c;',
            'stayfriends': '&#xe07d;',
            'steam': '&#xe07e;',
            'stitcher': '&#xe977;',
            'storehouse': '&#xe07f;',
            'strava': '&#xe080;',
            'streamjar': '&#xe081;',
            'strudelcafe': '&#xe991;',
            'strudel-cafe': '&#xe991;',
            'stumbleupon': '&#xe082;',
            'swarm': '&#xe083;',
            'teamspeak': '&#xe084;',
            'teamviewer': '&#xe085;',
            'technorati': '&#xe086;',
            'telegram': '&#xe087;',
            'threema': '&#xe96e;',
            'tidal': '&#xe910;',
            'tiktok': '&#xe96b;',
            'tinder': '&#xe966;',
            'toneden': '&#xe93a;',
            'toptal': '&#xe92e;',
            'torial': '&#xe95b;',
            'toyhouse': '&#xe986;',
            '8tracks': '&#xe001;',
            'traxsource': '&#xe94d;',
            'trello': '&#xe902;',
            'tripadvisor': '&#xe088;',
            'tripit': '&#xe089;',
            'triplej': '&#xe08a;',
            'trulia': '&#xe931;',
            'tumblr': '&#xe08b;',
            'tunein': '&#xe903;',
            'twitch': '&#xe08c;',
            'uber': '&#xe08e;',
            'ubuntu': '&#xe958;',
            'udemy': '&#xe93f;',
            'unsplash': '&#xe914;',
            'upwork': '&#xe934;',
            'ventrilo': '&#xe08f;',
            'viadeo': '&#xe090;',
            'viber': '&#xe091;',
            'viewbug': '&#xe092;',
            'vimeo': '&#xe093;',
            'vine': '&#xe094;',
            'vkontakte': '&#xe095;',
            'vsco': '&#xe976;',
            'warcraft': '&#xe096;',
            'weasyl': '&#xe996;',
            'wechat': '&#xe097;',
            'weibo': '&#xe098;',
            'whatsapp': '&#xe099;',
            'wickr': '&#xe952;',
            'wikipedia': '&#xe09a;',
            'windguru': '&#xe967;',
            'windows': '&#xe09b;',
            'wix': '&#xe924;',
            'wordpress': '&#xe09c;',
            'wykop': '&#xe09d;',
            'twitter': '&#xe0aa;',
            'twitter-x': '&#xe0aa;',
            'x-twitter': '&#xe0aa;',
            'xbox': '&#xe09e;',
            'xing': '&#xe09f;',
            'yahoo': '&#xe0a0;',
            'yammer': '&#xe0a1;',
            'yandex': '&#xe0a2;',
            'yelp': '&#xe0a3;',
            'younow': '&#xe0a4;',
            'youtube': '&#xe0a5;',
            'yt-gaming': '&#xe90b;',
            'zapier': '&#xe0a6;',
            'zazzle': '&#xe97b;',
            'zerply': '&#xe0a7;',
            'zillow': '&#xe938;',
            'zomato': '&#xe0a8;',
            'zoom': '&#xe921;',
            'zynga': '&#xe0a9;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/social-icons/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
