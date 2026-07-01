export function classes(...nomes: Array<string | false | null | undefined>) {
  return nomes.filter(Boolean).join(" ");
}
