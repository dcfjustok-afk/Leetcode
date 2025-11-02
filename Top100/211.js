
var WordDictionary = function () {
    this.children = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.children;
    for (let ch of word) {
        if (!node[ch])
            node[ch] = {}
        node = node[ch]
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, node = this.children) {
    for (let i = 0; i < word.length; i++) {
        let ch = word[i];
        if (ch === '.') {
            // 对所有子节点递归匹配剩余部分
            for (let key in node) {
                if (key !== 'isEnd' && this.search(word.slice(i + 1), node[key])) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node[ch]) return false;
            node = node[ch];
        }
    }
    return !!node.isEnd;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */