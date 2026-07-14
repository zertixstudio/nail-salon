export type Locale = "en" | "es" | "pt";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

export const translations = {
  en: {
    nav: { philosophy: "Philosophy", services: "Services", gallery: "Gallery", visit: "Visit", book: "Book Now" },
    hero: {
      eyebrow: "Porto, Portugal",
      title1: "The quiet",
      title2: "art of",
      title3: "detail.",
      sub: "A nail and beauty atelier where every line, cuticle and shade is considered before it is applied.",
      cta: "Reserve your appointment",
      scroll: "Scroll",
    },
    chapters: {
      one: { index: "Chapter I", title: "Our Philosophy", body: "We treat hands and skin the way a jeweller treats a setting — nothing is rushed, nothing is generic. Every appointment at G Beauty Concept begins with a conversation, not a menu." },
      two: { index: "Chapter II", title: "The Craft", body: "Trained technicians, medical-grade sterilisation, and a restrained palette of finishes. We do fewer things, and we do them with precision." },
    },
    services: {
      eyebrow: "What we do",
      title: "Services, considered.",
      list: [
        { name: "Signature Manicure", desc: "Shape, cuticle care and a finish of your choosing, at an unhurried pace." },
        { name: "Spa Pedicure", desc: "A restorative ritual for tired feet — soak, scrub, massage, polish." },
        { name: "Gel & Builder Nails", desc: "Long-wearing structure and shine, sculpted to your natural nail line." },
        { name: "Nail Art", desc: "Hand-painted detail, from a single accent line to a full set." },
        { name: "Eyebrow Design", desc: "Shape and tint that frames the face without ever looking done." },
        { name: "Deep Cleansing Facial", desc: "A slow, thorough facial focused on clarity and calm skin." },
      ],
    },
    gallery: { eyebrow: "Inside the atelier", title: "A space to slow down in." },
    booking: {
      eyebrow: "Reservations",
      title: "Sit with us.",
      body: "Book directly through Fresha — choose your treatment, your technician, and your time.",
      cta: "Book on Fresha",
    },
    footer: {
      visitUs: "Visit us",
      hoursTitle: "Hours",
      hours: [
        ["Monday", "9:00 – 17:00"],
        ["Tuesday – Saturday", "9:00 – 20:30"],
        ["Sunday", "Closed"],
      ],
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: { philosophy: "Filosofía", services: "Servicios", gallery: "Galería", visit: "Visítanos", book: "Reservar" },
    hero: {
      eyebrow: "Oporto, Portugal",
      title1: "El arte",
      title2: "silencioso",
      title3: "del detalle.",
      sub: "Un atelier de uñas y belleza donde cada línea, cutícula y tono se piensa antes de aplicarse.",
      cta: "Reserva tu cita",
      scroll: "Desplázate",
    },
    chapters: {
      one: { index: "Capítulo I", title: "Nuestra Filosofía", body: "Tratamos las manos y la piel como un joyero trata un engaste: nada se apresura, nada es genérico. Cada cita en G Beauty Concept comienza con una conversación, no con un menú." },
      two: { index: "Capítulo II", title: "El Oficio", body: "Técnicas formadas, esterilización de grado médico y una paleta de acabados contenida. Hacemos menos cosas, y las hacemos con precisión." },
    },
    services: {
      eyebrow: "Lo que hacemos",
      title: "Servicios, con criterio.",
      list: [
        { name: "Manicura Signature", desc: "Forma, cuidado de cutículas y el acabado que elijas, sin prisa." },
        { name: "Pedicura Spa", desc: "Un ritual reparador para pies cansados — remojo, exfoliación, masaje, esmalte." },
        { name: "Uñas de Gel", desc: "Estructura y brillo de larga duración, esculpidos a tu línea natural." },
        { name: "Nail Art", desc: "Detalle pintado a mano, desde una línea de acento hasta un set completo." },
        { name: "Diseño de Cejas", desc: "Forma y tinte que enmarca el rostro sin parecer 'hecho'." },
        { name: "Limpieza Facial Profunda", desc: "Un facial pausado y minucioso enfocado en claridad y calma." },
      ],
    },
    gallery: { eyebrow: "Dentro del atelier", title: "Un espacio para ir más despacio." },
    booking: {
      eyebrow: "Reservas",
      title: "Siéntate con nosotras.",
      body: "Reserva directamente en Fresha — elige tu tratamiento, tu técnica y tu horario.",
      cta: "Reservar en Fresha",
    },
    footer: {
      visitUs: "Visítanos",
      hoursTitle: "Horario",
      hours: [
        ["Lunes", "9:00 – 17:00"],
        ["Martes – Sábado", "9:00 – 20:30"],
        ["Domingo", "Cerrado"],
      ],
      rights: "Todos los derechos reservados.",
    },
  },
  pt: {
    nav: { philosophy: "Filosofia", services: "Serviços", gallery: "Galeria", visit: "Visite-nos", book: "Reservar" },
    hero: {
      eyebrow: "Porto, Portugal",
      title1: "A arte",
      title2: "silenciosa",
      title3: "do detalhe.",
      sub: "Um atelier de unhas e beleza onde cada linha, cutícula e tom é pensado antes de ser aplicado.",
      cta: "Marque a sua sessão",
      scroll: "Deslize",
    },
    chapters: {
      one: { index: "Capítulo I", title: "A Nossa Filosofia", body: "Tratamos mãos e pele como um joalheiro trata um engaste — nada é apressado, nada é genérico. Cada marcação na G Beauty Concept começa com uma conversa, não com um menu." },
      two: { index: "Capítulo II", title: "O Ofício", body: "Técnicas formadas, esterilização de grau médico e uma paleta de acabamentos contida. Fazemos menos coisas, e fazemo-las com precisão." },
    },
    services: {
      eyebrow: "O que fazemos",
      title: "Serviços, com critério.",
      list: [
        { name: "Manicure Signature", desc: "Forma, cuidado de cutículas e o acabamento à sua escolha, sem pressa." },
        { name: "Pedicure Spa", desc: "Um ritual reparador para pés cansados — imersão, esfoliação, massagem, verniz." },
        { name: "Unhas de Gel", desc: "Estrutura e brilho duradouros, esculpidos pela sua linha natural." },
        { name: "Nail Art", desc: "Detalhe pintado à mão, de uma linha de destaque a um set completo." },
        { name: "Design de Sobrancelhas", desc: "Forma e tintura que emolduram o rosto sem nunca parecer 'feito'." },
        { name: "Limpeza de Pele Profunda", desc: "Uma facial demorada e minuciosa, focada em clareza e calma." },
      ],
    },
    gallery: { eyebrow: "Dentro do atelier", title: "Um espaço para abrandar." },
    booking: {
      eyebrow: "Marcações",
      title: "Sente-se connosco.",
      body: "Marque diretamente pela Fresha — escolha o tratamento, a técnica e o horário.",
      cta: "Marcar na Fresha",
    },
    footer: {
      visitUs: "Visite-nos",
      hoursTitle: "Horário",
      hours: [
        ["Segunda", "9:00 – 17:00"],
        ["Terça – Sábado", "9:00 – 20:30"],
        ["Domingo", "Encerrado"],
      ],
      rights: "Todos os direitos reservados.",
    },
  },
} as const;

export const SITE = {
  name: "G Beauty Concept",
  address: "R. João das Regras 146, 4000-290 Porto",
  phone: "+351 965 171 796",
  mapsUrl: "https://www.google.com/maps/place/G+Beauty+Concept/@41.1552702,-8.6119818,17z/data=!3m1!4b1!4m6!3m5!1s0xd24656442ef1df1:0x83d15319bcf6beaf!8m2!3d41.1552702!4d-8.6094069",
  // Replace with your real Fresha booking page URL
  freshaUrl: "https://www.fresha.com/a/g-beauty-concept-porto-rua-joao-das-regras-146-p49i9xu4/all-offer?menu=true&pId=1365316&rwg_token=AE37R_hmCL_TJb3bk-2vfb9T66zLZfHcqfn_rM6ZSsCnHXRibuoLe7LouzX66ApNP9I8VuKJ7uk27Iqdlw8yisknRVKDBb67SQ%3D%3D",
};
