import allVersions from "./getAllVersions.js";

/*
KSchema CLI – Dynamic Usage Renderer
*/

export default function showUsage(version) {
    const g = "\x1b[32m";
    const y = "\x1b[33m";
    const c = "\x1b[36m";
    const gray = "\x1b[90m";
    const r = "\x1b[0m";

    const commandLines = Object.entries(allVersions)
        .map(([name]) =>
            `  ${g}${name.padEnd(20)}${r}`
        )
        .join("\n");

    const exampleLines = Object.entries(allVersions)
        .map(([name]) =>
            `  ${gray}npx @keshavsoft/express-todo ${name}${r}`
        )
        .join("\n");

    console.log(`
${c}🚀 express-todo v${version}${r}

${y}Usage:${r}
  ${g}npx @keshavsoft/express-todo${r} <command> [options]

${y}Commands:${r}
${commandLines}

${y}Examples:${r}
${exampleLines}

${y}Tip:${r}
  ${gray}npm i -g @keshavsoft/express-todo${r}
`);
}