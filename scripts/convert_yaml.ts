import { YAML } from "bun"
import fs from "fs"

const in_files = [
	["language-configuration.yml", "dist/language-configuration.json"],
	["snippets/snippets.yml", "dist/snippets.json"],
	["syntaxes/lotusscript.yaml-tmlanguage", "dist/lotusscript.json"],
]

fs.mkdirSync("dist", { recursive: true });

for (const [input, output] of in_files) {
	const data = fs.readFileSync(input, "utf8")
	const json = YAML.parse(data)
	fs.writeFileSync(output, JSON.stringify(json, null, 0))
}
