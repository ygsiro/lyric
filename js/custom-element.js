"use strict"

class LyricVowel extends HTMLSpanElement{
    constructor() {
        super();
    }
}

class LyricJunction extends HTMLSpanElement{
    constructor() {
        super();
    }
}

class LyricAccent extends HTMLSpanElement{
    constructor() {
        super();
    }
}

class LyricBless extends HTMLSpanElement{
    constructor() {
        super();
    }
}

class LyricCallAndResponse extends HTMLSpanElement{
    constructor() {
        super();
    }
}

customElements.define("vo", LyricVowel);
customElements.define("ju", LyricJunction);
customElements.define("acc", LyricJunction);
customElements.define("v", LyricBless);
customElements.define("cr", LyricCallAndResponse);