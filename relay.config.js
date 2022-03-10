module.exports = {
  src: "./apps/site/",
  schema: "./apps/site/schema/schema.graphql",
  exclude: [
    "**/.next/**",
    "**/node_modules/**",
    "**/test/**",
    "**/__generated__/**",
    "**/schema/**",
  ],
  extensions: ["ts", "tsx"],
  language: "typescript",
  artifactDirectory: "./apps/site/queries/__generated__",
  watch: true,
};
