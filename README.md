# eslint-config-karasu

[![npm](https://img.shields.io/npm/v/eslint-config-standard)](https://npmjs.com/package/eslint-config-karasu)

- Single quotes & semi
- Auto fix for formatting (aimed to be used standalone without Prettier)

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-karasu
```

### Config `.eslintrc`

```json
{
  "extends": "karasu"
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Config WebStorm auto fix

`Tools > Actions on Save`
- [x] `Run EsLint --fix`
- [ ] `Run Prettier`

## License

MIT
