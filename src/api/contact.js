import { api } from "./http";

// Public: Contact form -> mesaj gönder
export const sendContact = (payload) => {
  return api.post("/api/v1/public/contact", payload); // ✅ DOĞRU
};

// Admin: Gelen mesajları listele
export const adminListContacts = () => {
  return api.get("/api/v1/admin/contacts"); // ✅ DOĞRU
};
