if (import.meta.main) {
  /**
   * exports is the list of generated export entries.
   * @see https://jsr.io/docs/package-configuration#exports
   */
  const exports: [string, string][] = [];
  for await (
    const entry of Deno.readDir(
      new URL(import.meta.resolve("./schema.org")),
    )
  ) {
    if (entry.isFile && entry.name.endsWith(".ts")) {
      const name = entry.name.replace(/\.ts$/, "");
      exports.push([
        `./${name}`,
        `./schema.org/${entry.name}`,
      ]);
    }
  }

  const denoConfigLocation = new URL(import.meta.resolve("./deno.json"));
  const denoConfig = JSON.parse(await Deno.readTextFile(denoConfigLocation));
  denoConfig.exports = Object.fromEntries(exports);
  await Deno.writeTextFile(
    denoConfigLocation,
    JSON.stringify(denoConfig, null, 2) + "\n",
  );
}
