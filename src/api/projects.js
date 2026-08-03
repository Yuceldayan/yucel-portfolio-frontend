// src/api/projects.js
import { api } from "./http";
import { withFallback } from "./fallbackGuard";
import { fallbackProjects } from "../data/fallback";

// Public
export const getProjects = () =>
  withFallback(api.get("/api/v1/public/projects"), fallbackProjects);

export const getProjectById = (id) => {
  if (id === undefined || id === null || id === "") {
    return Promise.reject(new Error("Project id gerekli"));
  }
  return withFallback(
    api.get(`/api/v1/public/projects/${id}`),
    fallbackProjects.find((p) => String(p.id) === String(id)) ?? null
  );
};

// Admin (şimdilik auth yok)
export const adminCreateProject = (payload) =>
  api.post("/api/v1/admin/projects", payload);

export const adminUpdateProject = (id, payload) => {
  if (id === undefined || id === null || id === "") {
    return Promise.reject(new Error("Project id gerekli"));
  }
  return api.put(`/api/v1/admin/projects/${id}`, payload);
};

export const adminDeleteProject = (id) => {
  if (id === undefined || id === null || id === "") {
    return Promise.reject(new Error("Project id gerekli"));
  }
  return api.delete(`/api/v1/admin/projects/${id}`);
};
