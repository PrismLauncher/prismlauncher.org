{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShellNoCC {
  buildInputs = [
    pkgs.astro-language-server
    pkgs.typescript-language-server
  ];
}
