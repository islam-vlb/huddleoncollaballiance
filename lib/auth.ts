export type User = { name: string; email: string };

const USERS_KEY = 'huddleon_users';
const SESSION_KEY = 'huddleon_session';

type StoredUser = User & { hash: string };

async function hash(pw: string) {
  const data = new TextEncoder().encode('huddleon:' + pw);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function users(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') as StoredUser[];
  } catch {
    return [];
  }
}

export function getSession(): User | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export async function register(name: string, email: string, pw: string): Promise<{ ok: boolean; error?: string; user?: User }> {
  const list = users();
  if (list.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { ok: false, error: 'An account with this email already exists.' };
  }
  const u: StoredUser = { name, email, hash: await hash(pw) };
  list.push(u);
  localStorage.setItem(USERS_KEY, JSON.stringify(list));
  const user = { name, email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return { ok: true, user };
}

export async function login(email: string, pw: string): Promise<{ ok: boolean; error?: string; user?: User }> {
  const u = users().find((x) => x.email.toLowerCase() === email.toLowerCase());
  if (!u || u.hash !== (await hash(pw))) return { ok: false, error: 'Email or password is incorrect.' };
  const user = { name: u.name, email: u.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return { ok: true, user };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export async function updateAccount(current: User, name: string, newPw?: string): Promise<User> {
  const list = users();
  const idx = list.findIndex((u) => u.email.toLowerCase() === current.email.toLowerCase());
  if (idx >= 0) {
    list[idx].name = name;
    if (newPw) list[idx].hash = await hash(newPw);
    localStorage.setItem(USERS_KEY, JSON.stringify(list));
  }
  const user = { name, email: current.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}
