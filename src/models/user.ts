export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string;
  initials: string;
  color: string;
  status: 'online' | 'offline' | 'idle';
}