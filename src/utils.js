/** Encode a public/ filename with spaces and parens into a valid URL path */
export function pub(filename) {
  return filename
    .replace(/ /g, "%20")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
}
