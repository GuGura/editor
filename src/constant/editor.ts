export const BaseProps = {};
interface BaseProps {
  type: "element" | "text";
  tag: string;
  content: string | null;
  attributes?: { [key: string]: string };
  children: [];
}

const Tags = [];

export const MARK_BOLD = `mark-bold`;
export const MARK_NORMAL = `mark-normal`;
export const MARK_LINK = "mark-link";
export const MARK_ITALIC = `mark-italic`;
export const MARK_UNDERLINE = `mark-underline`;
export const MARK_CODE = `mark-code`;

export const MARK_LIST = [
  MARK_BOLD,
  MARK_NORMAL,
  MARK_LINK,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_CODE,
];

export const BLOCK_QUOTE_ONE = `block-quote1`;
export const BLOCK_QUOTE_TWO = `block-quote2`;
export const BLOCK_PARAGRAPH = `block-paragraph`;
export const BLOCK_HEADING_ONE = `block-heading1`;
export const BLOCK_HEADING_TWO = `block-heading2`;
export const BLOCK_HEADING_THREE = `block-heading3`;
export const BLOCK_CODE = `block-code`;

export const BLOCK_LIST = [
  BLOCK_QUOTE_ONE,
  BLOCK_QUOTE_TWO,
  BLOCK_PARAGRAPH,
  BLOCK_HEADING_ONE,
  BLOCK_HEADING_TWO,
  BLOCK_HEADING_THREE,
  BLOCK_CODE,
];
export const BULLETED_LIST = `bulleted-list`;
export const NUMBER_LIST = `number-list`;
export const LIST_TYPES = [NUMBER_LIST, BULLETED_LIST];

export const TEXT_ALIGN_LEFT = `left`;
export const TEXT_ALIGN_CENTER = `center`;
export const TEXT_ALIGN_RIGHT = `right`;
export const TEXT_ALIGN_TYPES = [
  TEXT_ALIGN_LEFT,
  TEXT_ALIGN_CENTER,
  TEXT_ALIGN_RIGHT,
];

export const HR = `hr`;
export const IMAGE = `image`;
export const VIDEO = `video`;
export const EDITABLE_VOID = `editable-void`;
export const BUTTON = `button`;
export const BADGE = `badge`;
export const LINE_HEIGHT = `line-height`;
export const EMOJI_SMAIL = `smail`;
export const ITEM_LIST = `item-list`;

export const MENTION = `mention`;
export const EMOJI_SQUIRREL = `squirrel`;
export const EMOJI_APPLE = `apple`;
export const EMOJI_MEDAL = `medal`;
export const EMOJI_CAR = `car`;
export const EMOJI_ALL = `all`;
export const VIEW_TYPE_MODIFY = `modify`;
export const VIEW_TYPE_READONLY = `readOnly`;
export const TABLE = `table`;
export const TABLE_CELL = `table-cell`;
export const TITLE = `title`;
export const TABLE_ROW = `table-row`;
export const LIST_ITEM = `list-item`;

export const TYPE = `type`;
export const ALIGN = `align`;
export const IMAGE_SIZE_LARGE = "large";
export const IMAGE_SIZE_MIDDLE = "middle";
export const IMAGE_SIZE_SMALL = "small";
