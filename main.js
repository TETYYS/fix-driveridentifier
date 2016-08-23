// ==UserScript==
// @name         Fix driveridentifier
// @version      1.0
// @description  Transforms driver download link to include only vendor link
// @author       tetyys
// @include      /^https?:\/\/(www\.|)driveridentifier\.com\/scan\/[\w-]+\/driver-detail\/.*$/
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    var dump = $('body > div:nth-child(2)');

    if (dump !== undefined) {
        dump = dump[0];
        if (dump.style.cssText == "float: left;") {
            dump.remove();
        }
    }

    var link = $('a[title="Download driver from OEM "]');

    if (link !== undefined) {
        link = link[0];
        var mid = link.href.indexOf("download_file.php?url=");
        link.href = decodeURIComponent(link.href.slice(mid + 22));
        link.href = link.href.slice(0, link.href.indexOf("&hardware_id="));
    }
})();
