/* ============================================================
   auth.middleware.js — Filtro de seguridad: bloquea usuarios sin token
   Encargado: equipo DevSecOps / QA & Seguridad

   TODO: reemplazar la verificación MOCK por jsonwebtoken.verify()
   real cuando el login entregue JWT reales.
============================================================ */

module.exports = function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No autorizado: falta el token" });
  }

  // TODO: validar el token real con jwt.verify(token, process.env.JWT_SECRET)
  const tokenValido = authHeader.startsWith("Bearer ");
  if (!tokenValido) {
    return res.status(401).json({ error: "Token inválido" });
  }

  next();
};
