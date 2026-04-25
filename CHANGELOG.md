# Changelog

## 0.1.1
_2026-04-25_

- Recognize seven additional Notes classes:
  - `NotesGPS`, `NotesGPSCoordinates`, `NotesGPSPosition`
  - `NotesLLMRequest`, `NotesLLMResponse` (HCL Domino 14 AI integration)
  - `NotesDOMNamedNodeMap`, `NotesDOMXMLDeclNode`
- Wire up auto-publish to VS Code Marketplace and Open VSX on tag push, gated by a manual approval environment

## 0.1.0
_2026-04-25_

- Initial grammar covering comments, strings, keywords, operators, types, numbers, line continuation
- Block comment support for `%REM` / `%END REM` / `%ENDREM`
- Notes class recognition (~60+ classes) as `support.class.notes.lotusscript`
- Preprocessor directive highlighting (`%INCLUDE`, `%IF`, ...)
- `Use` / `UseLSX` / `Declare Lib` / `Option` statement highlighting
- `ForAll ... End ForAll` block recognition
- Language configuration: bracket matching, auto-close, indentation rules
- Snippet set for common LotusScript idioms
