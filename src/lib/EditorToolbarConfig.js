export const INLINE_STYLE_BUTTONS = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Strikethrough', style: 'STRIKETHROUGH'},
  {label: 'Monospace', style: 'CODE'},
];

export const BLOCK_TYPE_DROPDOWN = [
  {label: 'معمولی', style: 'unstyled'},
  {label: 'تیتر بزرگ', style: 'header-one'},
  {label: 'تیتر متوسط', style: 'header-two'},
  {label: 'تیتر کوچک', style: 'header-three'},
  // {label: 'Code Block', style: 'code-block'},
];
export const BLOCK_TYPE_BUTTONS = [
  {label: 'لیست', style: 'unordered-list-item'},
  {label: 'لیست باترتیب', style: 'ordered-list-item'},
  {label: 'نقل قول', style: 'blockquote'},
];

export default {
  INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
};
