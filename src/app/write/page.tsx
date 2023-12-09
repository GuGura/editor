import Page from "@/components/Layout/Page";
import { Title } from "@/components/editor/Title";
import Editor from "@/components/editor/Editor";
import ContentEditableComponent from "@/components/test";
import MyContentEditableComponent from "@/components/testr";

const data = {
  type: "element",
  tag: "div",
  content: null,
  attributes: {},
  children: [
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app":
          '{"type":"text","data":[{"type":"text","text":"cdadsadfdsf"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-top: -7px; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "cdadsadfdsf",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "div",
      content: null,
      attributes: {
        class: "wrap_item item_type_img img_align_left",
        "data-app":
          '{"type": "img", "url": "http://t1.daumcdn.net/brunch/service/user/gi51/image/emZeeVrFqeod7RQEdNTLTjRXH3c.png", "originalName": "", "align": "content-left", "mobileAlign": "full","caption": "", "width": 4167, "height": 4167 }',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 13px 0px 0px -272.5px; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: 1245px; clear: both; cursor: pointer; position: relative; color: rgb(51, 51, 51); font-size: 14px; background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "element",
          tag: "div",
          content: null,
          attributes: {
            class: "wrap_content",
            style:
              "--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 0px auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; text-rendering: inherit; width: 700px;",
          },
          children: [
            {
              type: "element",
              tag: "div",
              content: null,
              attributes: {
                class: "wrap_img_content_float",
                style:
                  "--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 0px 20px 0px 0px; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; text-rendering: inherit; float: left;",
              },
              children: [
                {
                  type: "element",
                  tag: "div",
                  content: null,
                  attributes: {
                    class: "wrap_img_float",
                    style:
                      "--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin: 0px; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; text-rendering: inherit; position: relative; transition-duration: 0.5s; transition-timing-function: ease; font-size: 0px; overflow: visible; width: 350px; z-index: 1;",
                  },
                  children: [
                    {
                      type: "element",
                      tag: "img",
                      content: null,
                      attributes: {
                        class: "img_float",
                        src: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Fgi51%2Fimage%2FemZeeVrFqeod7RQEdNTLTjRXH3c.png",
                        "data-filename": "",
                        style:
                          "border-style: initial; border-color: initial; border-image: initial; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 0px; width: 350px; float: left;",
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"Fail"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 6px 0px 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "Fail",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"df"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "df",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"d"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "d",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"df"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "df",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"fd"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "fd",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"df"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "df",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"d"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "d",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"f"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "f",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"df"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "df",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"dfs"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "dfs",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"fdd"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "fdd",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"FaiFail"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "FaiFail",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"fd"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "fd",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"ds"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "ds",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"Fail"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "Fail",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"Fail"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "ㄹㅇㄴㄹㅇㄴ",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"Fail"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "element",
          tag: "br",
          content: null,
          attributes: {
            style:
              "--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ;",
          },
          children: [],
        },
      ],
    },
    {
      type: "element",
      tag: "p",
      content: null,
      attributes: {
        class: "wrap_item item_type_text",
        "data-app": '{"type":"text","data":[{"type":"text","text":"Fail"}]}',
        style:
          '--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-right: auto; margin-left: auto; padding: 0px; -webkit-font-smoothing: antialiased; backface-visibility: hidden; font-family: "Noto Sans DemiLight", "Malgun Gothic", sans-serif; text-rendering: inherit; width: auto; font-size: 11pt; letter-spacing: 0.8px; line-height: 22pt; min-width: auto; color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);',
      },
      children: [
        {
          type: "text",
          tag: null,
          content: "ㅇㅁㄴㅇ",
          attributes: {},
          children: [],
        },
      ],
    },
  ],
};
export default async function page() {
  return (
    <Page className={"block"}>
      <Title />
      <Editor />
      <MyContentEditableComponent jsonData={data} />
      <ContentEditableComponent />
    </Page>
  );
}
