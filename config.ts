// Auto-generated configuration for BLS Spain Mauritania AutoBot

export const config = {
  botName: "BLS Spain Mauritania",
  country: "Mauritania",
  provider: "BLS International",
  destination: "Spain",
  loginUrl: "https://mr.blsspainvisa.com/account/login",
  centers: [
  "Nouakchott",
  "Nouadhibou"
],
  visaCategories: [
  "Tourist",
  "Business",
  "Family Visit"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
