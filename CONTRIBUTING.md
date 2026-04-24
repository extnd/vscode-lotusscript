# Contributing

## Grammar changes

The TextMate grammar lives in [`syntaxes/lotusscript.yaml-tmlanguage`](syntaxes/lotusscript.yaml-tmlanguage). Edit the YAML; the JSON under `dist/` is generated.

Run `bun run convert` to regenerate and `bun run test` to exercise the smoke tests in `syntaxes/tests/*.lss`.

When adding a new pattern, add a small regression file in `syntaxes/tests/` with a `SYNTAX TEST` header and scope assertions (see [textmate-grammar-test](https://github.com/PanAeon/textmate-grammar-test) for the assertion format).

## Local install

```
bun run install:dev
```

This packages and installs the extension from source. Reload the VS Code window afterwards.

## Pull requests

- Keep grammar changes minimal and focused — one feature per PR
- Include a test file demonstrating the new/changed behavior
- Do not commit `dist/` — it is generated at publish time
