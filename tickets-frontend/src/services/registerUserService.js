const BASE_URL = "http://localhost:8080";

export async function register({ username, email, password }) {
  const res = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (res.status === 201) return;
  
  const errorText = await res.text().catch(() => "");
  throw new Error(errorText || `Error al registrar (HTTP ${res.status})`);
}
