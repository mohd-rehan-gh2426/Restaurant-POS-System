export function getInitials(name) {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    // Single name → take first two letters
    return parts[0].substring(0, 2).toUpperCase();
  } else {
    // Multiple names → take first and last initials
    const firstInitial = parts[0][0].toUpperCase();
    const lastInitial = parts[parts.length - 1][0].toUpperCase();
    return firstInitial + lastInitial;
  }
}