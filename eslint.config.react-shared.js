// @ts-expect-error no types
import prettierConfig from "eslint-config-prettier";
// @ts-expect-error no types
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
// @ts-expect-error no types
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

import sharedConfig from "./eslint.config.shared.js";

export default tseslint.config(
  ...sharedConfig,
  // @ts-expect-error wrong types
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      "react-hooks": reactHooks,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/checked-requires-onchange-or-readonly": [
        "off",
        {
          ignoreMissingProperties: false,
          ignoreExclusiveCheckedAttribute: false,
        },
      ],
      "react/forbid-prop-types": [
        "error",
        {
          forbid: ["any", "array", "object"],
          checkContextTypes: true,
          checkChildContextTypes: true,
        },
      ],
      "react/jsx-boolean-value": ["error", "never", { always: [] }],
      "react/jsx-handler-names": [
        "off",
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
        },
      ],
      "react/jsx-no-bind": [
        "error",
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: true,
        },
      ],
      "react/jsx-no-literals": ["off", { noStrings: true }],
      "react/jsx-pascal-case": [
        "error",
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      "react/sort-prop-types": [
        "off",
        {
          ignoreCase: true,
          callbacksLast: false,
          requiredFirst: false,
          sortShapeProp: true,
        },
      ],
      "react/no-danger": "warn",
      "react/no-did-mount-set-state": "off",
      "react/no-did-update-set-state": "error",
      "react/no-will-update-set-state": "error",
      "react/no-multi-comp": "off",
      "react/no-set-state": "off",
      "react/prefer-es6-class": ["error", "always"],
      "react/prefer-stateless-function": [
        "error",
        { ignorePureComponents: true },
      ],
      // TypeScript
      "react/prop-types": ["off"],
      "react/require-render-return": "error",
      "react/self-closing-comp": "error",
      "react/sort-comp": [
        "error",
        {
          order: [
            "static-variables",
            "static-methods",
            "instance-variables",
            "lifecycle",
            "/^handle.+$/",
            "/^on.+$/",
            "getters",
            "setters",
            "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
            "instance-methods",
            "everything-else",
            "rendering",
          ],
          groups: {
            lifecycle: [
              "displayName",
              "propTypes",
              "contextTypes",
              "childContextTypes",
              "mixins",
              "statics",
              "defaultProps",
              "constructor",
              "getDefaultProps",
              "getInitialState",
              "state",
              "getChildContext",
              "getDerivedStateFromProps",
              "componentWillMount",
              "UNSAFE_componentWillMount",
              "componentDidMount",
              "componentWillReceiveProps",
              "UNSAFE_componentWillReceiveProps",
              "shouldComponentUpdate",
              "componentWillUpdate",
              "UNSAFE_componentWillUpdate",
              "getSnapshotBeforeUpdate",
              "componentDidUpdate",
              "componentDidCatch",
              "componentWillUnmount",
            ],
            rendering: ["/^render.+$/", "render"],
          },
        },
      ],
      "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-indent": ["error", 2],
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/require-optimization": ["off", { allowDecorators: [] }],
      "react/forbid-component-props": ["off", { forbid: [] }],
      "react/forbid-elements": ["off", { forbid: [] }],
      "react/no-unused-prop-types": [
        "error",
        {
          customValidators: [],
          skipShapeProps: true,
        },
      ],
      "react/style-prop-object": "error",
      "react/no-array-index-key": "error",
      "react/void-dom-elements-no-children": "error",
      "react/default-props-match-prop-types": [
        "error",
        { allowRequiredDefaults: false },
      ],
      "react/no-redundant-should-component-update": "error",
      "react/no-unused-state": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/destructuring-assignment": ["error", "always"],
      "react/no-access-state-in-setstate": "error",
      "react/button-has-type": [
        "error",
        {
          button: true,
          submit: true,
          reset: false,
        },
      ],
      "react/no-this-in-sfc": "error",
      "react/jsx-fragments": ["error", "syntax"],
      "react/state-in-constructor": ["error", "never"],
      "react/static-property-placement": ["error", "static public field"],
      "react/jsx-no-script-url": [
        "error",
        [
          {
            name: "Link",
            props: ["to"],
          },
        ],
      ],
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      "react/jsx-no-constructed-context-values": "error",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/no-namespace": "error",
      "react/prefer-exact-props": "error",
      "react/no-arrow-function-lifecycle": "error",
      "react/no-invalid-html-attribute": "error",
      "react/no-unused-class-component-methods": "error",
      "react/hook-use-state": "error",
      "react/iframe-missing-sandbox": "error",
      "react/jsx-no-leaked-render": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/require-default-props": "off",
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "jsx-a11y/alt-text": [
        "error",
        {
          elements: ["img", "object", "area", 'input[type="image"]'],
          img: [],
          object: [],
          area: [],
          'input[type="image"]': [],
        },
      ],
      "jsx-a11y/anchor-has-content": ["error", { components: [] }],
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to"],
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],
      "jsx-a11y/aria-activedescendant-has-tabindex": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": ["error", { ignoreNonDOM: false }],
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/autocomplete-valid": [
        "error",
        {
          inputComponents: [],
        },
      ],
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/control-has-associated-label": [
        "error",
        {
          labelAttributes: ["label"],
          controlComponents: [],
          ignoreElements: [
            "audio",
            "canvas",
            "embed",
            "input",
            "textarea",
            "tr",
            "video",
          ],
          ignoreRoles: [
            "grid",
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "row",
            "tablist",
            "toolbar",
            "tree",
            "treegrid",
          ],
          depth: 5,
        },
      ],
      "jsx-a11y/heading-has-content": ["error", { components: [""] }],
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: "both",
          depth: 25,
        },
      ],
      "jsx-a11y/lang": "error",
      "jsx-a11y/media-has-caption": [
        "error",
        {
          audio: [],
          video: [],
          track: [],
        },
      ],
      "jsx-a11y/mouse-events-have-key-events": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
      "jsx-a11y/no-distracting-elements": [
        "error",
        {
          elements: ["marquee", "blink"],
        },
      ],
      "jsx-a11y/no-interactive-element-to-noninteractive-role": [
        "error",
        {
          tr: ["none", "presentation"],
        },
      ],
      "jsx-a11y/no-noninteractive-element-interactions": [
        "error",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
        },
      ],
      "jsx-a11y/no-noninteractive-element-to-interactive-role": [
        "error",
        {
          ul: [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid",
          ],
          ol: [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid",
          ],
          li: ["menuitem", "option", "row", "tab", "treeitem"],
          table: ["grid"],
          td: ["gridcell"],
        },
      ],
      "jsx-a11y/no-noninteractive-tabindex": [
        "error",
        {
          tags: [],
          roles: ["tabpanel"],
          allowExpressionValues: true,
        },
      ],
      "jsx-a11y/no-redundant-roles": [
        "error",
        {
          nav: ["navigation"],
        },
      ],
      "jsx-a11y/no-static-element-interactions": [
        "error",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
        },
      ],
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",
      "jsx-a11y/tabindex-no-positive": "error",
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  prettierConfig,
);
