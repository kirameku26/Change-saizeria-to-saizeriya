// ==UserScript==
// @name         Change saizeria to saizeriya
// @namespace    https://github.com/kirameku26
// @version      1.0
// @description  サイゼリヤをサイゼリヤに変えます
// @author       kirameku
// @supportURL   https://github.com/kirameku26/Change-saizeria-to-saizeriya/issues
// @match        *://*/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        const searchKey = "サイゼリヤ";
        const fromWord = "サイゼリヤ";
        const toWord = "サイゼリヤ";

        // ページ全体の要素を一つずつチェックする関数
        const walk = (node) => {
            // input要素やtextarea要素は無視する
            if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') return;

            if (node.nodeType === 3) { // テキストノード（実際の文字部分）の場合
                if (node.nodeValue.includes(searchKey)) {
                    node.nodeValue = node.nodeValue.replaceAll(fromWord, toWord);
                }
            } else {
                // 子要素があればさらに奥まで探しに行く
                for (let child of node.childNodes) {
                    walk(child);
                }
            }
        };

        walk(document.body);
    }, 1000);
})();
