{inputs, ...}: {
  imports = [inputs.git-hooks.flakeModule];
  perSystem = {
    config,
    pkgs,
    ...
  }: {
    pre-commit.settings = {
      excludes = [
        "flake.lock"
        "pnpm-lock.yaml"
      ];
      hooks = {
        markdownlint.enable = true;
        alejandra.enable = true;
        deadnix.enable = true;
        nil.enable = true;
        prettier.enable = true;
      };
    };

    devShells.default = pkgs.mkShell {
      shellHook = ''
        ${config.pre-commit.installationScript}
      '';
      packages = with pkgs; [
        nodejs
        pnpm
      ];
    };

    formatter = pkgs.alejandra;
  };
}
