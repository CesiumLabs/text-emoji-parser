import emojiRegex from "./regex";

export interface EmojiEntity {
  type: string;
  text: string;
  indices: number[];
};

export const TypeName = "emoji";

/**
 * A function to parse emojis from text
 * @param text Text to parse emojis from
 * @param options Parsing options
 */
export function parse(text: string): EmojiEntity[] {
  const entities = [];

  emojiRegex.lastIndex = 0;
  while(true) {
    const result = emojiRegex.exec(text);
    if (!result) break;

    const emojiText = result[0];

    entities.push({
        indices: [result.index, emojiRegex.lastIndex],
        text: emojiText,
        type: TypeName,
        unicode: emojiToUnicode(emojiText)
    });
  }

  return entities;
}

export function emojiToUnicode(emoji: string): string {
    if (emoji.length === 1) return emoji.charCodeAt(0).toString(16);

    let comp = ((emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000);

    if (comp < 0) return emoji.charCodeAt(0).toString(16);

    return comp.toString(16);
}