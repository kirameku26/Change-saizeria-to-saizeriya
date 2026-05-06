// ==UserScript==
// @name         Change saizeria to saizeriya
// @namespace    https://github.com/kirameku26
// @version      1.1.0
// @description  サイゼリアをサイゼリヤに変えます
// @author       kirameku
// @match        *://*/*
// @supportURL   https://github.com/kirameku26/Change-saizeria-to-saizeriya/issues
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        const fromWord = "サイゼリア";
        const toWord = "サイゼリヤ";

        const walk = (node) => {
            // input要素やtextarea要素は無視する
            if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') return;
                // ページ全体の要素を一つずつチェックする関数
            if (node.nodeType === 1) { // ELEMENT_NODE
                const ariaLabel = node.getAttribute('aria-label');
                if (ariaLabel === 'ポスト本文') return;
            }

            if (node.nodeType === 3) { // テキストノード（実際の文字部分）の場合
                if (node.nodeValue.includes(fromWord)) {
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