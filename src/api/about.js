// src/api/about.js
import { api } from "./http";
import { withFallback } from "./fallbackGuard";
import { fallbackAbout } from "../data/fallback";

// Public (ziyaretçi)
export const getAbout = () => {
  return withFallback(api.get("/api/v1/public/about"), fallbackAbout);
};

// Admin (panel)
export const getAboutAdmin = () => {
  return api.get("/api/v1/admin/about");
};

export const updateAboutAdmin = (payload) => {
  return api.put("/api/v1/admin/about", payload);
};
