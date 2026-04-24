# LotusScript for VS Code

Syntax highlighting and snippets for HCL Domino / Lotus Notes LotusScript (`.lss`).

## Features

- Syntax highlighting covering the LotusScript language surface:
  - `%REM` / `%END REM` block comments (and the non-standard `%ENDREM`)
  - Preprocessor directives (`%INCLUDE`, `%IF`, `%DEFINE`, ...)
  - All three string literal forms: `"..."`, `|...|`, `{...}`
  - `ForAll ... End ForAll`, `Use`, `UseLSX`, `Declare Lib`, `Option`
  - Sub / Function / Property Get|Set|Let definitions
  - Class and Type blocks
  - Numeric literals with hex, octal, binary, type suffix, and date literal support
  - Statement continuation (`_` at end of line)
  - `Dim ... As New NotesXxx` with ~60+ Notes classes recognized as a distinct scope
- Snippets for common LotusScript idioms (If, Sub, Function, Class, ForAll, Select Case, On Error, agent Initialize skeleton, etc.)
- Language configuration with bracket matching, auto-close for `"`, `|`, `()`, `[]`, and indentation rules

## Development

The grammar is authored in YAML (`syntaxes/lotusscript.yaml-tmlanguage`) and compiled to JSON at build time.

Requires [Bun](https://bun.sh/) 1.3+.

```
bun install
bun run validate       # validate YAML against schemas
bun run convert        # YAML -> dist/*.json
bun run test           # convert + run grammar tests against syntaxes/tests/*.lss
bun run package:dev    # produce a .vsix
bun run install:dev    # build and install locally
```

## Credits

Build scaffolding (YAML-to-JSON pipeline, validation script, CI layout) was seeded from [serkonda7/vscode-vba](https://github.com/serkonda7/vscode-vba) and remains under MPL-2.0. The LotusScript grammar itself is original work.

## License

[MPL-2.0](LICENSE)