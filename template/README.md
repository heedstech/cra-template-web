# Project Created with Heeds Web Template.

## Runing the Project

First add this to your devDependencies in package.json:

```
"devDependencies": {
  "@types/react-router-dom": "^5.1.5",
  "@typescript-eslint/eslint-plugin": "^3.3.0",
  "@typescript-eslint/parser": "^3.3.0",
  "@types/jest": "^25.1.4",
  "@types/react-dom": "^16.9.8",
  "@types/react-redux": "^7.1.9",
  "@types/styled-components": "^5.1.9",
  "eslint-config-prettier": "^6.11.0",
  "eslint-plugin-prettier": "^3.4.0",
  "eslint-plugin-react": "^7.20.0",
  "prettier": "^2.2.1",
  "husky": "^6.0.0"
}
```

After this, add this husky config to your package.json:

```
  "husky": {
    "hooks": {
      "pre-commit": "CI=true npm test"
    }
  }
```

Then run:

```
yarn
```

Now you just need to start the aplication.

```
yarn start
```
