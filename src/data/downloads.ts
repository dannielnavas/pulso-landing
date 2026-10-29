export interface ArchitectureOption {
  label: string;
  sublabel: string;
  format: string;
  filename: string;
  size: string;
  url: string;
  recommended?: boolean;
}

export interface PlatformDownload {
  id: 'mac' | 'windows' | 'linux';
  name: string;
  osRequirement: string;
  icon: string;
  defaultArchitecture: string;
  architectures: ArchitectureOption[];
}

const REPO_RELEASES = 'https://github.com/dannielnavas/ytmdannieldev/releases/download/v0.1.0';

export const platformsData: PlatformDownload[] = [
  {
    id: 'mac',
    name: 'macOS',
    osRequirement: 'macOS 11 Big Sur o superior',
    icon: 'apple',
    defaultArchitecture: 'Apple Silicon (M1/M2/M3/M4)',
    architectures: [
      {
        label: 'Apple Silicon',
        sublabel: 'M1, M2, M3, M4 (arm64)',
        format: '.dmg',
        filename: 'Pulso-0.1.0-arm64.dmg',
        size: '84.2 MB',
        url: `${REPO_RELEASES}/Pulso-0.1.0-arm64.dmg`,
        recommended: true,
      },
      {
        label: 'Intel x64',
        sublabel: 'Procesadores Intel de 64 bits',
        format: '.dmg',
        filename: 'Pulso-0.1.0-x64.dmg',
        size: '87.1 MB',
        url: `${REPO_RELEASES}/Pulso-0.1.0-x64.dmg`,
      },
      {
        label: 'Portátil ZIP',
        sublabel: 'Sin instalador (.zip)',
        format: '.zip',
        filename: 'Pulso-0.1.0-mac.zip',
        size: '89.4 MB',
        url: `${REPO_RELEASES}/Pulso-0.1.0-mac.zip`,
      },
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    osRequirement: 'Windows 10 / 11 (64 bits)',
    icon: 'windows',
    defaultArchitecture: 'Instalador Oficial NSIS',
    architectures: [
      {
        label: 'Instalador Oficial',
        sublabel: 'Setup con desinstalador limpio (NSIS)',
        format: '.exe',
        filename: 'Pulso-Setup-0.1.0.exe',
        size: '79.5 MB',
        url: `${REPO_RELEASES}/Pulso-Setup-0.1.0.exe`,
        recommended: true,
      },
      {
        label: 'Versión Portable',
        sublabel: 'Ejecuta directamente sin instalar',
        format: '.exe',
        filename: 'Pulso-0.1.0-portable.exe',
        size: '81.2 MB',
        url: `${REPO_RELEASES}/Pulso-0.1.0-portable.exe`,
      },
    ],
  },
  {
    id: 'linux',
    name: 'Linux',
    osRequirement: 'Cualquier distribución moderna',
    icon: 'linux',
    defaultArchitecture: 'Universal AppImage',
    architectures: [
      {
        label: 'AppImage Universal',
        sublabel: 'Haz ejecutable y reproduce en cualquier distro',
        format: '.AppImage',
        filename: 'Pulso-0.1.0.AppImage',
        size: '83.0 MB',
        url: `${REPO_RELEASES}/Pulso-0.1.0.AppImage`,
        recommended: true,
      },
      {
        label: 'Arch Linux / CachyOS',
        sublabel: 'Paquete optimizado para Pacman / AUR',
        format: '.pacman',
        filename: 'Pulso-0.1.0.pacman',
        size: '80.4 MB',
        url: `${REPO_RELEASES}/Pulso-0.1.0.pacman`,
      },
      {
        label: 'Ubuntu / Debian',
        sublabel: 'Paquete de instalación nativo .deb',
        format: '.deb',
        filename: 'Pulso-0.1.0.deb',
        size: '82.3 MB',
        url: `${REPO_RELEASES}/Pulso-0.1.0.deb`,
      },
    ],
  },
];
