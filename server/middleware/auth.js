export function protect(_req, res, next) {
  return res.status(501).json({ message: 'Authentication is not implemented yet.' });
}

export function adminOnly(_req, res, next) {
  return res.status(501).json({ message: 'Admin authorization is not implemented yet.' });
}
