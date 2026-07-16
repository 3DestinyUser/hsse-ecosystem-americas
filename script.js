const dimensions = [
  {
    id: "culture",
    label: "Culture",
    title: "Culture™",
    dimension: "Dimensión humana",
    image: "assets/culture.webp",
    color: "#008a21",
    summary: "Convierte comportamientos, hábitos y valores en señales visibles para liderar seguridad antes del incidente.",
    purpose: "Instala rituales, reconocimientos y observaciones que hacen tangible la cultura de cuidado.",
    problem: "La conducta segura suele verse tarde, cuando ya apareció el desvío o el accidente.",
    value: "Alinea liderazgo, equipos y contratistas alrededor de decisiones consistentes de Cero Daño.",
    keywords: ["Respeto", "Integridad", "Cuidado", "Responsabilidad", "Confianza"],
    kpi: "Índice de cultura segura y participación activa",
    connections: ["prevent", "training", "advisor"]
  },
  {
    id: "prevent",
    label: "Prevent",
    title: "Prevent™",
    dimension: "Dimensión preventiva",
    image: "assets/prevent.webp",
    color: "#ff5a12",
    summary: "Anticipa riesgos de campo y transforma señales tempranas en acciones preventivas trazables.",
    purpose: "Ordena reportes, checklists, observaciones y alertas para actuar antes de que el riesgo escale.",
    problem: "Las señales críticas se dispersan entre recorridas, mensajes y memoria operativa.",
    value: "Aumenta velocidad de respuesta y disciplina de cierre sobre condiciones inseguras.",
    keywords: ["Anticipar", "Identificar", "Señalizar", "Evaluar", "Actuar"],
    kpi: "Reportes preventivos mitigados a tiempo",
    connections: ["culture", "operational-control", "advisor"]
  },
  {
    id: "intelligence",
    label: "Intelligence",
    title: "Intelligence™",
    dimension: "Dimensión cognitiva",
    image: "assets/intelligence.webp",
    color: "#00aeef",
    summary: "Integra datos, modelos y predicción para detectar patrones de riesgo antes de que se materialicen.",
    purpose: "Cruza información operacional, clima, entrenamiento, incidentes y comportamiento en un motor predictivo.",
    problem: "Los datos existen, pero aislados no explican tendencia, causalidad ni prioridad.",
    value: "Reduce incertidumbre y orienta recursos hacia los riesgos con mayor impacto potencial.",
    keywords: ["Datos", "Análisis", "Modelos", "Predicción", "Decisión"],
    kpi: "Precisión del modelo predictivo de riesgo",
    connections: ["regional-analytics", "operational-control", "advisor"]
  },
  {
    id: "training",
    label: "Training",
    title: "Training™",
    dimension: "Dimensión formativa",
    image: "assets/training.webp",
    color: "#7c35e8",
    summary: "Desarrolla competencias críticas mediante rutas, misiones y evaluación conectadas al riesgo real.",
    purpose: "Gestiona formación por rol, brechas de competencia, certificaciones y feedback de mejora.",
    problem: "La capacitación se vuelve genérica cuando no responde al riesgo diario de cada operación.",
    value: "Aumenta preparación, estandariza desempeño y reduce exposición por falta de competencia.",
    keywords: ["Simuladores", "Misiones", "Rutas", "Evaluación", "Certificación"],
    kpi: "Cobertura de competencias críticas certificadas",
    connections: ["culture", "immersive-learning", "knowledge"]
  },
  {
    id: "knowledge",
    label: "Knowledge",
    title: "Knowledge™",
    dimension: "Dimensión informativa",
    image: "assets/knowledge.webp",
    color: "#ff9700",
    summary: "Centraliza casos, lecciones, procedimientos e insights en una biblioteca viva HSSE.",
    purpose: "Permite encontrar conocimiento confiable justo cuando una decisión o tarea lo necesita.",
    problem: "Las lecciones aprendidas quedan enterradas en PDFs, correos, carpetas o memorias individuales.",
    value: "Multiplica aprendizaje organizacional y convierte experiencia pasada en prevención futura.",
    keywords: ["Biblioteca", "Casos", "Insights", "Patrones", "Búsqueda"],
    kpi: "Consultas útiles y lecciones reutilizadas",
    connections: ["training", "advisor", "intelligence"]
  },
  {
    id: "advisor",
    label: "Advisor",
    title: "Advisor™",
    dimension: "Dimensión guía",
    image: "assets/advisor.webp",
    color: "#db1f24",
    summary: "Acompaña a líderes y supervisores con recomendaciones, alertas y decisiones asistidas.",
    purpose: "Entrega orientación contextual para priorizar acciones y reducir tiempos de respuesta.",
    problem: "En momentos críticos, la decisión correcta depende de experiencia, norma y contexto simultáneo.",
    value: "Eleva consistencia ejecutiva y operativa con recomendaciones explicables y accionables.",
    keywords: ["Detectar", "Analizar", "Recomendar", "Priorizar", "Alertar"],
    kpi: "Precisión y adopción de recomendaciones HSSE",
    connections: ["prevent", "knowledge", "operational-control"]
  },
  {
    id: "immersive-learning",
    label: "Immersive Learning",
    title: "Immersive Learning™",
    dimension: "Dimensión experiencial",
    image: "assets/immersive-learning.webp",
    color: "#7134d8",
    summary: "Entrena decisiones seguras en AR/VR, juegos serios y misiones sin exponer personas al riesgo.",
    purpose: "Recrea escenarios críticos para practicar, equivocarse, recibir feedback y consolidar hábitos.",
    problem: "La teoría no siempre se convierte en memoria operativa bajo presión.",
    value: "Acelera aprendizaje, mejora retención y prepara equipos para situaciones de alto impacto.",
    keywords: ["AR/VR", "Misiones", "Gamificación", "Feedback", "Colaboración"],
    kpi: "Retención de conocimiento y reducción de errores conductuales",
    connections: ["training", "culture", "knowledge"]
  },
  {
    id: "operational-control",
    label: "Operational Control",
    title: "Operational Control™",
    dimension: "Dimensión operativa",
    image: "assets/operational-control.webp",
    color: "#0a64ff",
    summary: "Unifica monitoreo, alertas, flujos y control de riesgos en tiempo real para la terminal.",
    purpose: "Da visibilidad sobre personas, equipos, zonas críticas, cámaras, tareas y estado operacional.",
    problem: "La respuesta se demora cuando la información está repartida entre sistemas y equipos.",
    value: "Coordina acción inmediata y reduce exposición mediante control operativo continuo.",
    keywords: ["Monitorear", "Controlar", "Coordinar", "Alertar", "Decidir"],
    kpi: "Tiempo medio de respuesta ante alertas críticas",
    connections: ["prevent", "intelligence", "regional-analytics"]
  },
  {
    id: "regional-analytics",
    label: "Regional Analytics",
    title: "Regional Analytics™",
    dimension: "Dimensión estratégica",
    image: "assets/regional-analytics.webp",
    color: "#167c18",
    summary: "Compara terminales, mapas de riesgo y tendencias para dirigir decisiones regionales.",
    purpose: "Homologa indicadores y permite entender desempeño, variaciones y prioridades entre terminales.",
    problem: "Sin una mirada regional, los aprendizajes quedan locales y los patrones sistémicos se pierden.",
    value: "Facilita inversión, priorización y estandarización de mejores prácticas a escala.",
    keywords: ["Comparar", "Visualizar", "Analizar", "Predecir", "Decidir"],
    kpi: "Indicadores homologados y mejora regional sostenida",
    connections: ["intelligence", "operational-control", "knowledge"]
  }
];

const roles = [
  {
    id: "operario",
    label: "Operario",
    title: "Operario / Contratista",
    summary: "Trabaja con tareas claras y práctica segura desde el terreno.",
    color: "#ff5a12",
    dimensions: ["prevent", "training", "immersive-learning", "knowledge", "culture"],
    kpis: ["Tareas seguras", "Reportes preventivos", "Competencias vigentes"],
    workflow: [
      "Consulta la tarea y los controles críticos antes de iniciar.",
      "Completa checklist, reporta desvíos y recibe guía inmediata.",
      "Entrena escenarios críticos y consulta procedimientos cuando lo necesita.",
      "Cierra aprendizaje con feedback y evidencia de cumplimiento."
    ],
    permissions: [
      "Crear reportes Prevent y observaciones de campo.",
      "Ver sus entrenamientos, certificaciones y misiones.",
      "Consultar Knowledge y recomendaciones asignadas.",
      "Recibir alertas relevantes a su zona o tarea."
    ]
  },
  {
    id: "supervisor",
    label: "Supervisor",
    title: "Supervisor de turno",
    summary: "Coordina personas, tareas y alertas, convirtiendo señales tempranas en acción inmediata.",
    color: "#0a64ff",
    dimensions: ["operational-control", "prevent", "advisor", "training", "culture"],
    kpis: ["Alertas cerradas", "Tiempo de respuesta", "Equipo habilitado"],
    workflow: [
      "Revisa estado del turno, zonas críticas, permisos y trabajos activos.",
      "Prioriza alertas con Advisor y asigna responsables.",
      "Verifica competencias antes de tareas críticas.",
      "Registra cierre, evidencia y aprendizajes para Knowledge."
    ],
    permissions: [
      "Asignar acciones preventivas y responsables.",
      "Resolver o escalar alertas operativas.",
      "Ver estado de equipo y competencias críticas.",
      "Solicitar reentrenamiento o intervención HSSE."
    ]
  },
  {
    id: "hsse-local",
    label: "HSSE Local",
    title: "HSSE Officer / Manager local",
    summary: "Gobierna la prevención diaria, la cultura local, el cumplimiento y la mejora continua de la terminal.",
    color: "#008a21",
    dimensions: ["culture", "prevent", "advisor", "operational-control", "knowledge", "training"],
    kpis: ["Cierre preventivo", "Cultura segura", "Cumplimiento crítico"],
    workflow: [
      "Define campañas, controles críticos y foco preventivo de la terminal.",
      "Audita reportes, incidentes, acciones y cumplimiento.",
      "Convierte casos reales en lecciones y contenidos reutilizables.",
      "Eleva patrones hacia Intelligence y Regional Analytics."
    ],
    permissions: [
      "Configurar campañas Culture y Prevent.",
      "Aprobar lecciones aprendidas y contenidos Knowledge.",
      "Escalar riesgos críticos a gerencia y región.",
      "Revisar dashboards locales y planes de acción."
    ]
  },
  {
    id: "operaciones",
    label: "Operaciones",
    title: "Operations Manager",
    summary: "Equilibra continuidad operacional y seguridad, con visibilidad total de riesgos, recursos y decisiones.",
    color: "#00aeef",
    dimensions: ["operational-control", "intelligence", "advisor", "prevent", "regional-analytics"],
    kpis: ["Continuidad segura", "Riesgo operacional", "Decisiones a tiempo"],
    workflow: [
      "Monitorea la operación en tiempo real y los riesgos por zona.",
      "Recibe predicciones y recomendaciones sobre restricciones o desvíos.",
      "Coordina recursos, pausas operativas y acciones correctivas.",
      "Evalúa impacto en productividad, seguridad y continuidad."
    ],
    permissions: [
      "Ver mapas, alertas, flujos y trabajos críticos.",
      "Autorizar o pausar operaciones según riesgo.",
      "Consultar predicciones y escenarios de Intelligence.",
      "Escalar decisiones ejecutivas a dirección local."
    ]
  },
  {
    id: "direccion-pais",
    label: "Dirección País",
    title: "Country Manager / Dirección local",
    summary: "Lee desempeño de seguridad, cultura y operación para asignar foco, recursos y accountability.",
    color: "#167c18",
    dimensions: ["regional-analytics", "intelligence", "culture", "operational-control", "advisor"],
    kpis: ["Tendencia país", "Riesgo residual", "Inversión priorizada"],
    workflow: [
      "Revisa score HSSE, tendencias, incidentes y cultura.",
      "Compara áreas, turnos, contratistas y operaciones críticas.",
      "Define prioridades de inversión, formación y control.",
      "Da seguimiento ejecutivo a compromisos de Cero Daño."
    ],
    permissions: [
      "Ver indicadores ejecutivos por terminal y área.",
      "Aprobar prioridades estratégicas y recursos.",
      "Revisar recomendaciones ejecutivas de Advisor.",
      "Solicitar planes de intervención local."
    ]
  },
  {
    id: "regional-global",
    label: "Regional / Global",
    title: "Regional HSSE / Corporate",
    summary: "Estandariza indicadores, compara países y escala aprendizajes para todo el mapa APM Terminals.",
    color: "#ff9700",
    dimensions: ["regional-analytics", "intelligence", "knowledge", "culture", "training"],
    kpis: ["Benchmark regional", "Lecciones escaladas", "Estandarización"],
    workflow: [
      "Compara terminales, países y regiones con indicadores homologados.",
      "Detecta patrones sistémicos y terminales que requieren soporte.",
      "Escala mejores prácticas, contenidos y campañas globales.",
      "Ajusta estándares y prioridades corporativas según evidencia."
    ],
    permissions: [
      "Ver comparativos regionales y globales.",
      "Publicar estándares y contenidos corporativos.",
      "Definir benchmarks, campañas y lineamientos.",
      "Priorizar inversiones globales de seguridad."
    ]
  }
];

const executiveLoopStages = [
  {
    title: "Observe",
    copy: "Make safe behavior visible and capture early risk signals before exposure escalates.",
    dimensions: ["Culture", "Prevent"]
  },
  {
    title: "Understand",
    copy: "Connect operational, behavioral and competence data to identify patterns that isolated systems cannot see.",
    dimensions: ["Intelligence"]
  },
  {
    title: "Prepare",
    copy: "Close role-specific competence gaps through targeted learning and safe practice in high-risk scenarios.",
    dimensions: ["Training", "Immersive Learning"]
  },
  {
    title: "Guide",
    copy: "Bring standards, lessons and contextual recommendations into the moment a decision is required.",
    dimensions: ["Knowledge", "Advisor"]
  },
  {
    title: "Control",
    copy: "Coordinate active work, critical controls, alerts and accountable actions across the terminal.",
    dimensions: ["Operational Control"]
  },
  {
    title: "Scale",
    copy: "Benchmark terminals, detect systemic patterns and turn local learning into regional intervention.",
    dimensions: ["Regional Analytics"]
  }
];

const executiveDimensionPlates = {
  Culture: {
    image: "assets/culture.webp",
    alt: "Culture dimension overview: behaviors, values and human safety culture"
  },
  Prevent: {
    image: "assets/prevent.webp",
    alt: "Prevent dimension overview: anticipation, signals and preventive action"
  },
  "Regional Analytics": {
    image: "assets/regional-analytics.webp",
    alt: "Regional Analytics dimension overview: terminal comparison, risk maps and global trends"
  }
};

const executiveCaseSteps = [
  {
    label: "Moment 01 · Signal",
    title: "See exposure before an event.",
    copy: "Prevent captures a line-of-fire observation while Operational Control identifies active exposure around the task.",
    dimensions: ["Prevent", "Operational Control"]
  },
  {
    label: "Moment 02 · Pattern",
    title: "Connect signals and prioritize action.",
    copy: "Intelligence detects recurrence across shifts and Advisor recommends an explainable critical-control intervention.",
    dimensions: ["Intelligence", "Advisor"]
  },
  {
    label: "Moment 03 · Capability",
    title: "Close the gap for the role at risk.",
    copy: "Training assigns the relevant lashing pathway while Immersive Learning lets operators practice without exposure.",
    dimensions: ["Training", "Immersive Learning"]
  },
  {
    label: "Moment 04 · Learn & scale",
    title: "Turn one intervention into regional learning.",
    copy: "Knowledge retains the lesson, Culture reinforces the behavior and Regional Analytics scales the response across Americas.",
    dimensions: ["Knowledge", "Culture", "Regional Analytics"]
  }
];

const executivePresenterNotes = [
  "Open with the outcome, not the technology: one system connecting frontline signals to regional standards.",
  "Click two or three stages to show that the nine dimensions behave as a loop, not as separate applications.",
  "Advance through the four moments. Keep the story on one lashing risk and emphasize how every dimension contributes.",
  "Open the Americas network to anchor the concept in 17 real locations, then ask the Copilot question. The recommendation remains illustrative and traceable to connected signals.",
  "Close with a focused validation request: one use case, two terminals and three measurable success signals over 90 days."
];

const app = document.querySelector(".app");
const loginScene = document.querySelector("#login");
const hubScene = document.querySelector("#hub");
const executiveScene = document.querySelector("#executive-americas");
const academyScene = document.querySelector("#academy");
const detailScene = document.querySelector("#detail");
const roleScene = document.querySelector("#role");
const nav = document.querySelector("[data-primary-nav]");
const toggleButtons = document.querySelectorAll(".view-toggle button");
const loginUserName = document.querySelector("#login-user-name");
const loginUserRole = document.querySelector("#login-user-role");
const loginStatus = document.querySelector("#login-status");
const copilotAnswer = document.querySelector("#copilot-answer");
const copilotPriority = document.querySelector("#copilot-priority");
const copilotReason = document.querySelector("#copilot-reason");
const detailImage = document.querySelector("#detail-image");
const detailDimension = document.querySelector("#detail-dimension");
const detailTitle = document.querySelector("#detail-title");
const detailSummary = document.querySelector("#detail-summary");
const detailPurpose = document.querySelector("#detail-purpose");
const detailProblem = document.querySelector("#detail-problem");
const detailValue = document.querySelector("#detail-value");
const detailKeywords = document.querySelector("#detail-keywords");
const detailKpi = document.querySelector("#detail-kpi");
const detailConnections = document.querySelector("#detail-connections");
const detailCount = document.querySelector("#detail-count");
const roleTitle = document.querySelector("#role-title");
const roleSummary = document.querySelector("#role-summary");
const roleKpis = document.querySelector("#role-kpis");
const roleDimensions = document.querySelector("#role-dimensions");
const roleWorkflow = document.querySelector("#role-workflow");
const rolePermissions = document.querySelector("#role-permissions");
const roleCount = document.querySelector("#role-count");
const executiveSlides = document.querySelectorAll("[data-executive-slide]");
const executiveProgressLabel = document.querySelector("#executive-progress-label");
const executiveProgressBar = document.querySelector("#executive-progress-bar");
const executivePrevious = document.querySelector("#executive-previous");
const executiveNext = document.querySelector("#executive-next");
const executiveLoopIndex = document.querySelector("#executive-loop-index");
const executiveLoopTitle = document.querySelector("#executive-loop-title");
const executiveLoopCopy = document.querySelector("#executive-loop-copy");
const executiveLoopDimensions = document.querySelector("#executive-loop-dimensions");
const executiveCaseLabel = document.querySelector("#executive-case-label");
const executiveCaseTitle = document.querySelector("#executive-case-title");
const executiveCaseCopy = document.querySelector("#executive-case-copy");
const executiveCaseDimensions = document.querySelector("#executive-case-dimensions");
const executiveCopilotAnswer = document.querySelector("#executive-copilot-answer");
const executiveNotes = document.querySelector("#executive-notes");
const executiveNoteCopy = document.querySelector("#executive-note-copy");
const executiveDimensionDrawer = document.querySelector("#executive-dimension-drawer");
const executiveNetworkDrawer = document.querySelector("#executive-network-drawer");
const executivePlateViewer = document.querySelector("#executive-plate-viewer");
const executivePlateTitle = document.querySelector("#executive-plate-title");
const executivePlateImage = document.querySelector("#executive-plate-image");
const executivePilotStatus = document.querySelector("#executive-pilot-status");

let activeIndex = -1;
let activeRoleIndex = -1;
let activeExecutiveIndex = 0;
let activeExecutiveLoopStage = 0;
let activeExecutiveCaseStep = 0;
let navMode = "dimensions";
let isRouting = false;
let executivePlateTrigger = null;
let selectedLoginUser = "operario";

const loginUsers = {
  operario: {
    name: "Carlos Medina",
    role: "Operario de Trinca y Destrinca · Terminal Callao · Turno B",
    target: "academy"
  },
  supervisor: {
    name: "María Torres",
    role: "Supervisor de Muelle · Terminal Callao · Turno B",
    target: "role-supervisor"
  },
  "hsse-local": {
    name: "Andrés Rojas",
    role: "Jefe HSSE Local · Terminal Callao",
    target: "role-hsse-local"
  }
};

const copilotResponses = {
  pasarela: {
    answer:
      "Con pasarela húmeda, entra con tres puntos de apoyo, confirma iluminación y reporta cualquier superficie resbaladiza antes de mover barras.",
    priority: "Inspeccionar pasarela y puntos de apoyo",
    reason: "La humedad aumenta probabilidad de caída durante acceso y egreso del buque."
  },
  carga: {
    answer:
      "Si hay carga suspendida, mantén distancia de exclusión, evita línea de fuego y confirma comunicación visual/radial antes de liberar tensión.",
    priority: "Confirmar distancia segura con STS",
    reason: "La interacción con spreader y contenedores suspendidos es riesgo fatal para lashing."
  },
  fatiga: {
    answer:
      "Alterna tareas de alta fuerza, revisa postura y avisa al líder si pierdes agarre o precisión. La fatiga degrada coordinación fina.",
    priority: "Aplicar pausa activa de 3 minutos",
    reason: "Fatiga muscular incrementa errores en turnbuckles, barras largas y liberación brusca."
  },
  noche: {
    answer:
      "En trabajo nocturno, valida iluminación, señales entre compañeros y visibilidad del operador STS antes de iniciar la secuencia.",
    priority: "Validar iluminación y señales",
    reason: "La baja visibilidad aumenta errores de comunicación y exposición a objetos que caen."
  }
};

const trainingModules = {
  trinca: {
    image: "assets/lashing-prologue.webp",
    title: "Trinca y Destrinca",
    progress: "Progreso 78%",
    mission: "Liberación segura de barra",
    instruction:
      "Instrucción: asegura comunicación, postura y zona de exclusión antes de liberar tensión.",
    steps: ["Verifica tensión.", "Afloja el tensor.", "Retira el pasador.", "Libera la barra con control."],
    lesson: "Afloja el tensor sin exponer los dedos.",
    copy:
      "Mantén ambas manos en el cuerpo exterior del tensor. Nunca introduzcas dedos en el ojal o pasador.",
    prompt: "carga"
  },
  ergonomia: {
    image: "assets/lashing-ergonomics.webp",
    title: "Peso del acero",
    progress: "Progreso 64%",
    mission: "Levante seguro de barra",
    instruction:
      "Instrucción: flexiona rodillas, activa piernas y mantén espalda recta al levantar la barra.",
    steps: ["Evalúa peso y agarre.", "Alinea espalda y casco.", "Levanta con piernas.", "Pausa si aparece fatiga."],
    lesson: "La barra se controla con piernas, no con la espalda.",
    copy:
      "La fatiga lumbar reduce fuerza y precisión. Usa postura estable, evita torsión y pide apoyo ante barras largas.",
    prompt: "fatiga"
  },
  tensor: {
    image: "assets/lashing-turnbuckle.webp",
    title: "Atrapamientos",
    progress: "Progreso 52%",
    mission: "Control de turnbuckle",
    instruction:
      "Instrucción: mantén dedos fuera del ojal, pasador y línea de cierre del tensor.",
    steps: ["Ubica zona de atrapamiento.", "Toma el cuerpo exterior.", "Gira sin cruzar dedos.", "Retira manos antes de liberar."],
    lesson: "Tus manos nunca entran en la línea de atrapamiento.",
    copy:
      "Un movimiento repentino puede aplastar o cizallar dedos. La técnica correcta separa agarre, tensión y retiro.",
    prompt: "carga"
  },
  proteccion: {
    image: "assets/lashing-eye-protection.webp",
    title: "Protección ocular",
    progress: "Progreso 86%",
    mission: "PPE antes de liberar tensión",
    instruction:
      "Instrucción: confirma gafas ajustadas, barbijo al mentón y protección facial completa.",
    steps: ["Revisa casco.", "Ajusta barbijo.", "Verifica gafas.", "Mantén rostro fuera de trayectoria."],
    lesson: "Protege ojos y rostro antes de acercarte al tensor.",
    copy:
      "Las barras superiores pueden zafarse de forma brusca. El PPE correcto reduce consecuencias ante liberación inesperada.",
    prompt: "pasarela"
  }
};

const lessons = {
  tension: {
    heading: "Verifica tensión antes de tocar la barra.",
    copy:
      "Asegúrate de que el contenedor esté estable, que la STS no esté interactuando con la carga y que tus compañeros conozcan la maniobra.",
    image: "assets/lashing-cover.webp"
  },
  tensor: {
    heading: "Afloja el tensor sin exponer los dedos.",
    copy:
      "Gira la manija manteniendo ambas manos en el cuerpo exterior del tensor. Nunca introduzcas dedos en el ojal o pasador.",
    image: "assets/lashing-turnbuckle.webp"
  },
  pasador: {
    heading: "Retira el pasador con control.",
    copy:
      "Extrae el pasador con el cuerpo fuera de la línea de fuego y confirma que la barra no tenga energía acumulada.",
    image: "assets/lashing-eye-protection.webp"
  },
  barra: {
    heading: "Libera la barra sin movimientos bruscos.",
    copy:
      "Mantén agarre firme, comunica la maniobra y baja la barra evitando giro de espalda o golpe contra el contenedor.",
    image: "assets/lashing-ergonomics.webp"
  }
};

let missionStep = 0;

function getDimension(id) {
  return dimensions.find((item) => item.id === id);
}

function createNav(mode = navMode) {
  navMode = mode;
  const items = mode === "roles" ? roles : dimensions;
  nav.innerHTML = items
    .map((item, index) => {
      const prefix = mode === "roles" ? "R" : String(index + 1).padStart(2, "0");
      return `
        <button
          type="button"
          data-${mode === "roles" ? "role-id" : "id"}="${item.id}"
          style="--item-color: ${item.color}"
          aria-label="Abrir ${item.title}"
        >
          ${prefix} ${item.label}
        </button>
      `;
    })
    .join("");

  toggleButtons.forEach((button) => {
    const isActive =
      (mode === "dimensions" && button.dataset.action === "dimensions-mode") ||
      (mode === "roles" && button.dataset.action === "roles-mode");
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function setActiveNav(id) {
  nav.querySelectorAll("button").forEach((button) => {
    const isActive = button.dataset.id === id || button.dataset.roleId === id;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function setScenes(scene) {
  loginScene.hidden = scene !== "login";
  hubScene.hidden = scene !== "hub";
  executiveScene.hidden = scene !== "executive";
  academyScene.hidden = scene !== "academy";
  detailScene.hidden = scene !== "detail";
  roleScene.hidden = scene !== "role";
  loginScene.classList.toggle("is-active", scene === "login");
  hubScene.classList.toggle("is-active", scene === "hub");
  executiveScene.classList.toggle("is-active", scene === "executive");
  academyScene.classList.toggle("is-active", scene === "academy");
  detailScene.classList.toggle("is-active", scene === "detail");
  roleScene.classList.toggle("is-active", scene === "role");
}

function showLogin() {
  activeIndex = -1;
  activeRoleIndex = -1;
  app.dataset.view = "login";
  document.documentElement.lang = "es";
  app.style.setProperty("--accent", "#ff6a13");
  setScenes("login");
  setActiveNav("");
  loginStatus.textContent = "Listo para validar identidad.";
  document.querySelector(".login-panel")?.classList.remove("is-scanning", "is-approved");
  document.title = "Login HSSE Ecosystem";
  if (!isRouting) {
    history.replaceState(null, "", "#login");
  }
}

function showExecutive() {
  activeIndex = -1;
  activeRoleIndex = -1;
  app.dataset.view = "executive";
  document.documentElement.lang = "en";
  app.style.setProperty("--accent", "#ff6a13");
  setScenes("executive");
  setActiveNav("");
  setExecutiveLoopStage(0);
  setExecutiveCaseStep(0);
  setExecutiveSlide(0);
  toggleExecutiveNotes(false);
  toggleExecutiveDimensionDrawer(false);
  toggleExecutiveNetworkDrawer(false);
  if (executivePilotStatus) executivePilotStatus.textContent = "";
  if (executiveCopilotAnswer) {
    executiveCopilotAnswer.classList.remove("is-ready");
    executiveCopilotAnswer.innerHTML = "<span>Ready to analyze the connected ecosystem.</span>";
  }
  document.title = "HSSE Ecosystem | Americas Executive Briefing";
  if (!isRouting) {
    history.replaceState(null, "", "#executive-americas");
  }
}

function openAcademy() {
  activeIndex = -1;
  activeRoleIndex = -1;
  app.dataset.view = "academy";
  document.documentElement.lang = "es";
  app.style.setProperty("--accent", "#ff5a12");
  setScenes("academy");
  setActiveNav("");
  document.title = "Mi Academia HSSE | Trinca y Destrinca";
  if (!isRouting) {
    history.replaceState(null, "", "#academy");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHub() {
  activeIndex = -1;
  activeRoleIndex = -1;
  app.dataset.view = "hub";
  document.documentElement.lang = "es";
  app.style.setProperty("--accent", "#ff6a13");
  setScenes("hub");
  setActiveNav("");
  document.title = "HSSE Human Safety Ecosystem";
  if (!isRouting) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
}

function openDimension(id) {
  const index = dimensions.findIndex((item) => item.id === id);
  if (index < 0) return;

  createNav("dimensions");
  activeIndex = index;
  activeRoleIndex = -1;
  const item = dimensions[index];
  app.dataset.view = "detail";
  document.documentElement.lang = "es";
  app.style.setProperty("--accent", item.color);

  detailImage.src = item.image;
  detailImage.alt = `${item.title}, ${item.dimension}`;
  detailDimension.textContent = item.dimension;
  detailTitle.textContent = item.title;
  detailSummary.textContent = item.summary;
  detailPurpose.textContent = item.purpose;
  detailProblem.textContent = item.problem;
  detailValue.textContent = item.value;
  detailKpi.textContent = item.kpi;
  detailCount.textContent = `${index + 1} / ${dimensions.length}`;

  detailKeywords.innerHTML = item.keywords.map((keyword) => `<li>${keyword}</li>`).join("");
  detailConnections.innerHTML = item.connections
    .map((connectionId) => {
      const connection = getDimension(connectionId);
      return connection
        ? `<button type="button" data-id="${connection.id}">${connection.label}</button>`
        : "";
    })
    .join("");

  setScenes("detail");
  setActiveNav(item.id);
  document.title = `${item.title} | HSSE Ecosystem`;
  if (!isRouting) {
    history.replaceState(null, "", `#${item.id}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openRole(id) {
  const index = roles.findIndex((item) => item.id === id);
  if (index < 0) return;

  createNav("roles");
  activeRoleIndex = index;
  activeIndex = -1;
  const role = roles[index];
  app.dataset.view = "role";
  document.documentElement.lang = "es";
  app.style.setProperty("--accent", role.color);

  roleTitle.textContent = role.title;
  roleSummary.textContent = role.summary;
  roleCount.textContent = `${index + 1} / ${roles.length}`;
  roleKpis.innerHTML = role.kpis.map((kpi) => `<strong>${kpi}</strong>`).join("");
  roleWorkflow.innerHTML = role.workflow.map((step) => `<li>${step}</li>`).join("");
  rolePermissions.innerHTML = role.permissions.map((item) => `<li>${item}</li>`).join("");
  roleDimensions.innerHTML = role.dimensions
    .map((dimensionId) => {
      const dimension = getDimension(dimensionId);
      return dimension
        ? `<button type="button" data-id="${dimension.id}" style="--item-color: ${dimension.color}">${dimension.label}</button>`
        : "";
    })
    .join("");

  setScenes("role");
  setActiveNav(role.id);
  document.title = `${role.title} | Roles HSSE Ecosystem`;
  if (!isRouting) {
    history.replaceState(null, "", `#role-${role.id}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stepDimension(direction) {
  const current = activeIndex < 0 ? 0 : activeIndex;
  const next = (current + direction + dimensions.length) % dimensions.length;
  openDimension(dimensions[next].id);
}

function stepRole(direction) {
  const current = activeRoleIndex < 0 ? 0 : activeRoleIndex;
  const next = (current + direction + roles.length) % roles.length;
  openRole(roles[next].id);
}

function setExecutiveSlide(index) {
  const nextIndex = Math.max(0, Math.min(index, executiveSlides.length - 1));
  activeExecutiveIndex = nextIndex;

  executiveSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === nextIndex);
    slide.classList.toggle("is-before", slideIndex < nextIndex);
    slide.setAttribute("aria-hidden", slideIndex === nextIndex ? "false" : "true");
  });

  document.querySelectorAll(".executive-dots button[data-exec-slide]").forEach((button) => {
    const isActive = Number(button.dataset.execSlide) === nextIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "step" : "false");
  });

  if (executiveProgressLabel) {
    executiveProgressLabel.textContent = `${String(nextIndex + 1).padStart(2, "0")} / ${String(executiveSlides.length).padStart(2, "0")}`;
  }
  if (executiveProgressBar) {
    executiveProgressBar.style.width = `${((nextIndex + 1) / executiveSlides.length) * 100}%`;
  }
  if (executivePrevious) executivePrevious.disabled = nextIndex === 0;
  if (executiveNext) executiveNext.disabled = nextIndex === executiveSlides.length - 1;
  if (executiveNoteCopy) executiveNoteCopy.textContent = executivePresenterNotes[nextIndex];

  toggleExecutiveDimensionDrawer(false);
  toggleExecutiveNetworkDrawer(false);
  document.title = `HSSE Ecosystem | Executive Brief ${nextIndex + 1} of ${executiveSlides.length}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stepExecutive(direction) {
  setExecutiveSlide(activeExecutiveIndex + direction);
}

function setExecutiveLoopStage(index) {
  const stage = executiveLoopStages[index];
  if (!stage) return;
  activeExecutiveLoopStage = index;

  document.querySelectorAll("[data-exec-stage]").forEach((button) => {
    const isActive = Number(button.dataset.execStage) === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  if (executiveLoopIndex) executiveLoopIndex.textContent = `Stage ${String(index + 1).padStart(2, "0")}`;
  if (executiveLoopTitle) executiveLoopTitle.textContent = stage.title;
  if (executiveLoopCopy) executiveLoopCopy.textContent = stage.copy;
  if (executiveLoopDimensions) {
    executiveLoopDimensions.innerHTML = stage.dimensions
      .map((dimension) =>
        executiveDimensionPlates[dimension]
          ? `<button type="button" data-exec-plate="${dimension}" aria-label="Open ${dimension} dimension overview">${dimension}</button>`
          : `<strong>${dimension}</strong>`
      )
      .join("");
  }
}

function openExecutivePlate(name, trigger) {
  const plate = executiveDimensionPlates[name];
  if (!plate || !executivePlateViewer || !executivePlateImage) return;

  executivePlateTrigger = trigger || document.activeElement;
  if (executivePlateTitle) executivePlateTitle.textContent = name;
  executivePlateImage.src = plate.image;
  executivePlateImage.alt = plate.alt;

  if (typeof executivePlateViewer.showModal === "function") {
    if (!executivePlateViewer.open) executivePlateViewer.showModal();
  } else {
    executivePlateViewer.setAttribute("open", "");
  }
}

function closeExecutivePlate() {
  if (!executivePlateViewer) return;
  if (typeof executivePlateViewer.close === "function" && executivePlateViewer.open) {
    executivePlateViewer.close();
  } else {
    executivePlateViewer.removeAttribute("open");
  }
  executivePlateTrigger?.focus?.();
  executivePlateTrigger = null;
}

function setExecutiveCaseStep(index) {
  const step = executiveCaseSteps[index];
  if (!step) return;
  activeExecutiveCaseStep = index;

  document.querySelectorAll("[data-exec-case]").forEach((button) => {
    const isActive = Number(button.dataset.execCase) === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  if (executiveCaseLabel) executiveCaseLabel.textContent = step.label;
  if (executiveCaseTitle) executiveCaseTitle.textContent = step.title;
  if (executiveCaseCopy) executiveCaseCopy.textContent = step.copy;
  if (executiveCaseDimensions) {
    executiveCaseDimensions.innerHTML = step.dimensions.map((dimension) => `<strong>${dimension}</strong>`).join("");
  }
}

function advanceExecutiveCase() {
  const next = (activeExecutiveCaseStep + 1) % executiveCaseSteps.length;
  setExecutiveCaseStep(next);
}

function runExecutiveCopilot() {
  if (!executiveCopilotAnswer) return;
  executiveCopilotAnswer.classList.remove("is-ready");
  executiveCopilotAnswer.innerHTML = "<span>Connecting leading signals across the Americas portfolio...</span>";

  window.setTimeout(() => {
    executiveCopilotAnswer.innerHTML = `
      <strong>Prioritize lashing operations in the Andean cluster.</strong>
      <span>Three signals are moving together: repeated line-of-fire observations, delayed action closure and a role-specific competence gap.</span>
      <small>Recommended: 30-day critical-control sprint</small>
    `;
    executiveCopilotAnswer.classList.add("is-ready");
  }, 560);
}

function toggleExecutiveNotes(forceOpen) {
  if (!executiveNotes) return;
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : executiveNotes.hidden;
  executiveNotes.hidden = !shouldOpen;
  document.querySelector("[data-action='exec-notes']")?.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

function toggleExecutiveDimensionDrawer(forceOpen) {
  if (!executiveDimensionDrawer) return;
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : executiveDimensionDrawer.hidden;
  executiveDimensionDrawer.hidden = !shouldOpen;
  if (shouldOpen) {
    if (executiveNetworkDrawer) executiveNetworkDrawer.hidden = true;
    executiveDimensionDrawer.scrollTop = 0;
  }
}

function setExecutiveRegionFilter(filter) {
  const validFilter = ["all", "north", "latin"].includes(filter) ? filter : "all";
  document.querySelectorAll("[data-exec-region]").forEach((button) => {
    const isActive = button.dataset.execRegion === validFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  document.querySelectorAll("[data-network-group]").forEach((group) => {
    group.hidden = validFilter !== "all" && group.dataset.networkGroup !== validFilter;
  });
}

function toggleExecutiveNetworkDrawer(forceOpen) {
  if (!executiveNetworkDrawer) return;
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : executiveNetworkDrawer.hidden;
  executiveNetworkDrawer.hidden = !shouldOpen;
  if (shouldOpen) {
    if (executiveDimensionDrawer) executiveDimensionDrawer.hidden = true;
    setExecutiveRegionFilter("all");
    executiveNetworkDrawer.scrollTop = 0;
  }
}

function confirmExecutivePilot() {
  if (!executivePilotStatus) return;
  executivePilotStatus.textContent = "Pilot brief ready: lashing use case · two terminals · 90 days.";
}

function handleAction(action) {
  if (action === "login") showLogin();
  if (action === "scan-login") runBiometricLogin();
  if (action === "open-executive") showExecutive();
  if (action === "home") showHub();
  if (action === "start") openDimension(dimensions[0].id);
  if (action === "dimensions-mode") {
    createNav("dimensions");
    openDimension(dimensions[Math.max(activeIndex, 0)].id);
  }
  if (action === "roles-mode") {
    createNav("roles");
    openRole(roles[Math.max(activeRoleIndex, 0)].id);
  }
  if (action === "next") stepDimension(1);
  if (action === "previous") stepDimension(-1);
  if (action === "next-role") stepRole(1);
  if (action === "previous-role") stepRole(-1);
  if (action === "complete-mission") completeMissionStep();
  if (action === "exec-next") stepExecutive(1);
  if (action === "exec-previous") stepExecutive(-1);
  if (action === "exec-restart") showExecutive();
  if (action === "exec-exit") showHub();
  if (action === "exec-notes") toggleExecutiveNotes();
  if (action === "exec-case-next") advanceExecutiveCase();
  if (action === "exec-copilot") runExecutiveCopilot();
  if (action === "exec-dimensions") toggleExecutiveDimensionDrawer(true);
  if (action === "exec-close-dimensions") toggleExecutiveDimensionDrawer(false);
  if (action === "exec-network") toggleExecutiveNetworkDrawer(true);
  if (action === "exec-close-network") toggleExecutiveNetworkDrawer(false);
  if (action === "exec-close-plate") closeExecutivePlate();
  if (action === "exec-pilot") confirmExecutivePilot();
}

function selectLoginUser(id) {
  if (!loginUsers[id]) return;
  selectedLoginUser = id;
  const user = loginUsers[id];
  loginUserName.textContent = user.name;
  loginUserRole.textContent = user.role;
  loginStatus.textContent = "Listo para validar identidad.";
  document.querySelector(".login-panel")?.classList.remove("is-scanning", "is-approved");
  document.querySelectorAll("[data-login-user]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.loginUser === id);
  });
}

function runBiometricLogin() {
  const panel = document.querySelector(".login-panel");
  const user = loginUsers[selectedLoginUser];
  panel?.classList.remove("is-approved");
  panel?.classList.add("is-scanning");
  loginStatus.textContent = "Escaneando rostro y rol operativo...";

  window.setTimeout(() => {
    panel?.classList.remove("is-scanning");
    panel?.classList.add("is-approved");
    loginStatus.textContent = "Identidad validada. Abriendo panel personalizado...";
  }, 950);

  window.setTimeout(() => {
    if (user.target === "academy") {
      openAcademy();
    } else {
      openRole(user.target.replace("role-", ""));
    }
  }, 1650);
}

function updateCopilot(promptId) {
  const response = copilotResponses[promptId];
  if (!response || !copilotAnswer || !copilotPriority || !copilotReason) return;

  document.querySelectorAll("[data-copilot-prompt]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.copilotPrompt === promptId);
  });

  copilotAnswer.classList.remove("is-updating");
  void copilotAnswer.offsetWidth;
  copilotAnswer.textContent = response.answer;
  copilotAnswer.classList.add("is-updating");
  copilotPriority.textContent = response.priority;
  copilotReason.textContent = response.reason;
}

function setOperatorTab(tabId) {
  const targetPanel = document.querySelector(`[data-operator-panel="${tabId}"]`);
  if (!targetPanel) return;

  document.querySelectorAll("[data-operator-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.operatorTab === tabId);
  });

  document.querySelectorAll("[data-operator-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.operatorPanel === tabId);
  });
}

function setTrainingModule(moduleId) {
  const module = trainingModules[moduleId];
  if (!module) return;

  document.querySelectorAll("[data-training-module]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.trainingModule === moduleId);
  });

  const simulatorImage = document.querySelector("#simulator-image");
  const simulatorTitle = document.querySelector("#simulator-title");
  const simulatorProgress = document.querySelector("#simulator-progress");
  const simulatorInstruction = document.querySelector("#simulator-instruction");
  const missionTitle = document.querySelector("#mission-title");
  const missionSteps = document.querySelector("#mission-steps");
  const lessonHeading = document.querySelector("#lesson-heading");
  const lessonCopy = document.querySelector("#lesson-copy");
  const lessonImage = document.querySelector("#lesson-image");

  if (simulatorImage) simulatorImage.src = module.image;
  if (simulatorTitle) simulatorTitle.textContent = module.title;
  if (simulatorProgress) simulatorProgress.textContent = module.progress;
  if (simulatorInstruction) simulatorInstruction.textContent = module.instruction;
  if (missionTitle) missionTitle.textContent = module.mission;
  if (missionSteps) missionSteps.innerHTML = module.steps.map((step) => `<li>${step}</li>`).join("");
  if (lessonHeading) lessonHeading.textContent = module.lesson;
  if (lessonCopy) lessonCopy.textContent = module.copy;
  if (lessonImage) lessonImage.src = module.image;

  missionStep = 0;
  updateMissionStep();
  updateCopilot(module.prompt);
}

function setLesson(lessonId) {
  const lesson = lessons[lessonId];
  if (!lesson) return;

  document.querySelectorAll("[data-lesson]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lesson === lessonId);
  });

  const lessonHeading = document.querySelector("#lesson-heading");
  const lessonCopy = document.querySelector("#lesson-copy");
  const lessonImage = document.querySelector("#lesson-image");
  if (lessonHeading) lessonHeading.textContent = lesson.heading;
  if (lessonCopy) lessonCopy.textContent = lesson.copy;
  if (lessonImage) lessonImage.src = lesson.image;
}

function updateMissionStep() {
  const steps = document.querySelectorAll("#mission-steps li");
  steps.forEach((step, index) => {
    step.classList.toggle("is-done", index < missionStep);
    step.classList.toggle("is-current", index === missionStep);
  });
}

function completeMissionStep() {
  const steps = document.querySelectorAll("#mission-steps li");
  if (!steps.length) return;
  missionStep = Math.min(missionStep + 1, steps.length);
  updateMissionStep();

  const progress = document.querySelector("#simulator-progress");
  if (progress && missionStep === steps.length) {
    progress.textContent = "Misión completada";
  }
}

function answerQuiz(result, button) {
  document.querySelectorAll("[data-quiz]").forEach((option) => {
    option.classList.remove("is-correct", "is-wrong");
  });

  const feedback = document.querySelector("#quiz-feedback");
  if (result === "correct") {
    button.classList.add("is-correct");
    if (feedback) {
      feedback.textContent =
        "Correcto. La liberación brusca puede golpear rostro, manos o cuerpo. Mantén PPE, postura y línea de fuego controladas.";
    }
  } else {
    button.classList.add("is-wrong");
    if (feedback) {
      feedback.textContent =
        "Casi. El riesgo principal es que la barra se zafe bruscamente por tensión acumulada.";
    }
  }
}

document.addEventListener("click", (event) => {
  if (event.target === executivePlateViewer) {
    closeExecutivePlate();
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    handleAction(actionTarget.dataset.action);
    return;
  }

  const executivePlateTarget = event.target.closest("[data-exec-plate]");
  if (executivePlateTarget) {
    openExecutivePlate(executivePlateTarget.dataset.execPlate, executivePlateTarget);
    return;
  }

  const executiveSlideTarget = event.target.closest(".executive-dots button[data-exec-slide]");
  if (executiveSlideTarget) {
    setExecutiveSlide(Number(executiveSlideTarget.dataset.execSlide));
    return;
  }

  const executiveStageTarget = event.target.closest("[data-exec-stage]");
  if (executiveStageTarget) {
    setExecutiveLoopStage(Number(executiveStageTarget.dataset.execStage));
    return;
  }

  const executiveCaseTarget = event.target.closest("[data-exec-case]");
  if (executiveCaseTarget) {
    setExecutiveCaseStep(Number(executiveCaseTarget.dataset.execCase));
    return;
  }

  const executiveRegionTarget = event.target.closest("[data-exec-region]");
  if (executiveRegionTarget) {
    setExecutiveRegionFilter(executiveRegionTarget.dataset.execRegion);
    return;
  }

  const operatorTabTarget = event.target.closest("[data-operator-tab]");
  if (operatorTabTarget) {
    setOperatorTab(operatorTabTarget.dataset.operatorTab);
    return;
  }

  const moduleTarget = event.target.closest("[data-training-module]");
  if (moduleTarget) {
    setTrainingModule(moduleTarget.dataset.trainingModule);
    setOperatorTab("simulator");
    return;
  }

  const lessonTarget = event.target.closest("[data-lesson]");
  if (lessonTarget) {
    setLesson(lessonTarget.dataset.lesson);
    return;
  }

  const quizTarget = event.target.closest("[data-quiz]");
  if (quizTarget) {
    answerQuiz(quizTarget.dataset.quiz, quizTarget);
    return;
  }

  const loginTarget = event.target.closest("[data-login-user]");
  if (loginTarget) {
    selectLoginUser(loginTarget.dataset.loginUser);
    return;
  }

  const copilotTarget = event.target.closest("[data-copilot-prompt]");
  if (copilotTarget) {
    updateCopilot(copilotTarget.dataset.copilotPrompt);
    return;
  }

  const dimensionTarget = event.target.closest("[data-id]");
  if (dimensionTarget) {
    openDimension(dimensionTarget.dataset.id);
    return;
  }

  const roleTarget = event.target.closest("[data-role-id]");
  if (roleTarget) {
    openRole(roleTarget.dataset.roleId);
  }
});

document.addEventListener("keydown", (event) => {
  if (app.dataset.view === "executive") {
    if (executivePlateViewer?.open) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeExecutivePlate();
      }
      return;
    }

    if (event.key === "Escape") {
      if (executiveNetworkDrawer && !executiveNetworkDrawer.hidden) {
        toggleExecutiveNetworkDrawer(false);
      } else if (executiveDimensionDrawer && !executiveDimensionDrawer.hidden) {
        toggleExecutiveDimensionDrawer(false);
      } else {
        showHub();
      }
      return;
    }

    if (event.key.toLowerCase() === "n") {
      toggleExecutiveNotes();
      return;
    }

    if (event.key === "ArrowRight" || event.key === " ") {
      if (event.key === " " && document.activeElement?.tagName === "BUTTON") return;
      event.preventDefault();
      stepExecutive(1);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepExecutive(-1);
    }
    return;
  }

  if (event.key === "Escape") {
    app.dataset.view === "login" ? showHub() : showLogin();
    return;
  }

  if (event.key === "ArrowRight") {
    app.dataset.view === "role" ? stepRole(1) : stepDimension(1);
    return;
  }

  if (event.key === "ArrowLeft") {
    app.dataset.view === "role" ? stepRole(-1) : stepDimension(-1);
  }
});

window.addEventListener("hashchange", routeFromHash);

function routeFromHash() {
  isRouting = true;
  const id = location.hash.replace("#", "");
  if (!id || id === "login") {
    showLogin();
  } else if (id === "executive-americas") {
    showExecutive();
  } else if (id === "academy") {
    openAcademy();
  } else if (id.startsWith("role-")) {
    openRole(id.replace("role-", ""));
  } else if (dimensions.some((item) => item.id === id)) {
    openDimension(id);
  } else {
    createNav("dimensions");
    showHub();
  }
  isRouting = false;
}

createNav("dimensions");
routeFromHash();
