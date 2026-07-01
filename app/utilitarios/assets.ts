export function caminhoDoAsset(caminho: string) {
  const baseDoSite = import.meta.env.BASE_URL || "/";

  return `${baseDoSite.replace(/\/?$/, "/")}${caminho.replace(/^\//, "")}`;
}
