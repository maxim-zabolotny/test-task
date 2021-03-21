module.exports = {
  // "parser": "babel-eslint",
  env: {
    browser: true
  },
  "extends": [
    "airbnb",
  ],
  "plugins": [
    "react-hooks",
  ],
  "rules": {
    "react/jsx-props-no-spreading": [0],
    "react/destructuring-assignment": [1],
    "import/no-unresolved": [0],
    "prefer-destructuring": [0],
    "import/extensions": [0],
    "react/no-danger": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "linebreak-style": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": [0],

    "jsx-a11y/click-events-have-key-events": [1],
    "jsx-a11y/anchor-is-valid": [1],
    "jsx-a11y/label-has-associated-control": [0],
    "jsx-a11y/label-has-for": [0],
    "max-len": [2, { "code": 120 }],
    "react/jsx-one-expression-per-line": [2],
    "semi": [2, "never"],
    "react/jsx-max-props-per-line": [2, {
      "maximum": 1, "when": "always"
    }],
    "no-empty-pattern": [0],
    "no-implicit-globals": [2],
    "react/prop-types": [0],
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "import/no-webpack-loader-syntax": [0],
    "no-magic-numbers": [0],
    "no-multiple-empty-lines": [2, {"max": 1, "maxEOF": 0}],
    "react-hooks/rules-of-hooks": [2], // Checks rules of Hooks
    "react-hooks/exhaustive-deps": [1],
    "import/order": ["error", {
      "newlines-between": "always",
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "pathGroups": [
        {
        "pattern": "components/**",
        "group": "internal",
        "position": "after"
      },{
          "pattern": "src/**",
          "group": "internal",
          "position": "after"
      },{
          "pattern": "contexts/**",
          "group": "internal",
          "position": "after"
      },{
          "pattern": "reducers/**",
          "group": "internal",
          "position": "after"
        }
      ],
      pathGroupsExcludedImportTypes: [
        'components',
        'src',
        'contexts',
        'reducers'
      ]
    }],
    "max-lines": [2, {"max": 200, "skipBlankLines": true, "skipComments": true}],

    "object-curly-newline": [2, {
      "ObjectExpression": { "multiline": true,"minProperties": 1 },
      "ObjectPattern": { "multiline": true,"minProperties": 1 },
      "ImportDeclaration": { "multiline": true,"minProperties": 1 },
      "ExportDeclaration": { "multiline": true,"minProperties": 1 },
    }],
    "object-property-newline": [2, {
      "allowAllPropertiesOnSameLine": false
    }],
    "camelcase": "off",
    "prefer-promise-reject-errors": "off",
  }
}
