import { Resvg } from "@resvg/resvg-js"
import fs from "fs"

const svg = fs.readFileSync("images/icon.svg")
const resvg = new Resvg(svg, {
	fitTo: { mode: "width", value: 128 },
	font: { loadSystemFonts: true, defaultFontFamily: "Segoe UI" },
})
const png = resvg.render().asPng()
fs.writeFileSync("images/icon.png", png)
console.log("Wrote images/icon.png (" + png.length + " bytes)")
