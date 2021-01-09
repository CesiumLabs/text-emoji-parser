# Text Emoji Parser
Simple JavaScript library to parse emojis from the given text. This package is based on **twemoji-parser**.

# Example

```js
const { parse } = require("text-emoji-parser");
const entities = parse("Hello 😀 I 🧡 Emojis 🤗");

console.log(entities);

/*
[
    {
        indices: [ 6, 8 ],
        text: '😀',
        type: 'emoji',
        unicode: '1f600'
    },
    {
        indices: [ 11, 13 ],
        text: '🧡',
        type: 'emoji',
        unicode: '1f9e1'
    },
    {
        indices: [ 21, 23 ],
        text: '🤗',
        type: 'emoji',
        unicode: '1f917'
    }
]
*/
```