export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    category: 'Suscripción',
    question: '¿Necesito una cuenta de YouTube Music Premium para usar Pulso?',
    answer: 'No es necesario. Puedes iniciar sesión con cualquier cuenta gratuita de Google o YouTube Music. Pulso sincronizará tu biblioteca, listas y recomendaciones normalmente. Si además cuentas con una suscripción Premium activa, disfrutarás automáticamente del streaming de audio a máxima tasa de bits (256 kbps AAC) sin anuncios de video de la plataforma.',
  },
  {
    category: 'Seguridad',
    question: '¿Cómo se protegen mis credenciales y cookies de sesión?',
    answer: 'Tus credenciales nunca pasan por servidores externos ni telemetría de terceros. Pulso se ejecuta 100% de manera local. Las cookies de autenticación se almacenan cifradas mediante la API nativa Electron.safeStorage, aprovechando el llavero de seguridad de tu sistema operativo (Keychain en macOS, DPAPI en Windows y Secret Service / libsecret en Linux).',
  },
  {
    category: 'SponsorBlock',
    question: '¿Qué segmentos salta automáticamente SponsorBlock en las canciones?',
    answer: 'SponsorBlock utiliza una base de datos abierta mantenida por la comunidad musical. En Pulso salta de forma milimétrica intros no musicales, patrocinios de marcas dentro de videos oficiales, recordatorios de suscripción y silencios prolongados antes o después del track, para que escuches únicamente la música tal como fue concebida en estudio.',
  },
  {
    category: 'Rendimiento',
    question: '¿Por qué consume mucho menos que una pestaña de Chrome o Brave?',
    answer: 'Los navegadores web convencionales mantienen cargados cientos de procesos de renderizado, extensiones, scripts publicitarios y pestañas inactivas. Pulso ejecuta un runtime aislado y optimizado con Angular 22 y Chromium despojado de sobrecarga, con un hilo de decodificación de audio de bajo consumo y aceleración por GPU para el visualizador.',
  },
  {
    category: 'Instalación macOS',
    question: '¿Qué hago si macOS indica que la app "está dañada" o no puede abrirse?',
    answer: 'Al tratarse de una versión comunitaria de código abierto sin firma de pago de Apple Developer, Gatekeeper coloca el archivo en cuarentena preventiva. Para autorizarla, arrastra Pulso a tu carpeta de Aplicaciones, abre tu Terminal y ejecuta: xattr -cr /Applications/Pulso.app. Luego podrás abrirla con normalidad.',
  },
  {
    category: 'Licencia',
    question: '¿Es completamente gratuito y de código abierto?',
    answer: 'Sí. Pulso es un proyecto de código abierto publicado bajo licencia MIT. Puedes auditar el código fuente completo, contribuir con mejoras o compilarlo por tu cuenta desde el repositorio oficial de GitHub.',
  },
];
