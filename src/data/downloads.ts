const VERSION = "9.4";

export const PLATFORMS = [
	{
		name: "Windows",
		path: "/download/windows",
		key: "windows",
		icon: "simple-icons:windows",
	},
	{
		name: "macOS",
		path: "/download/macos",
		key: "macos",
		icon: "simple-icons:apple",
	},
	{
		name: "Steam Deck",
		path: "/download/steam-deck",
		key: "steam-deck",
		icon: "simple-icons:steam",
	},
	{
		name: "Linux",
		path: "/download/linux",
		key: "linux",
		icon: "simple-icons:linux",
	},
] as const;

export const DOWNLOADS = {
	windows: [
		{
			title: "x86-64",
			downloads: [
				{
					title: "Installer (.exe)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Windows-MSVC-Setup-${VERSION}.exe`,
					type: "primary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (.zip)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Windows-MinGW-w64-Portable-${VERSION}.zip`,
					type: "secondary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
			],
		},
		{
			title: "ARM64",
			downloads: [
				{
					title: "Installer (.exe)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Windows-MSVC-arm64-Setup-${VERSION}.exe`,
					type: "secondary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (.zip)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Windows-MSVC-arm64-Portable-${VERSION}.zip`,
					type: "secondary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	linux: [
		{
			title: "x86-64 and ARM64",
			downloads: [
				{
					title: "Flathub",
					href: "https://flathub.org/apps/details/org.prismlauncher.PrismLauncher",
					type: "primary" as const,
					icon: "simple-icons:flathub",
					secondaryIcon: "lucide:link",
				},
			],
		},
		{
			title: "x86-64",
			downloads: [
				{
					title: "AppImage (.appimage)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-x86_64.AppImage`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (tar.gz)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-Qt6-Portable-${VERSION}.tar.gz`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (Qt 5) (tar.gz)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-Qt5-Portable-${VERSION}.tar.gz`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	macos: [
		{
			title: "Big Sur or later",
			downloads: [
				{
					title: "Universal (.dmg)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-macOS-${VERSION}.zip`,
					type: "primary" as const,
					icon: "simple-icons:apple",
					secondaryIcon: "lucide:download",
				},
			],
		},
		{
			title: "High Sierra to Catalina",
			downloads: [
				{
					title: "Legacy (.dmg)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-macOS-Legacy-${VERSION}.zip`,
					type: "secondary" as const,
					icon: "simple-icons:apple",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	"steam-deck": [
		{
			title: "Steam Deck",
			downloads: [
				{
					title: "Flathub",
					href: "https://flathub.org/apps/details/org.prismlauncher.PrismLauncher",
					type: "primary" as const,
					icon: "simple-icons:flathub",
					secondaryIcon: "lucide:link",
				},
			],
		},
	],
};
