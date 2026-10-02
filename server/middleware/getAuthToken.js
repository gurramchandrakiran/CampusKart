const getAuthToken = (req) => {
  const authorization = req.get('authorization');
  if (authorization && /^Bearer\s+/i.test(authorization)) {
    return authorization.replace(/^Bearer\s+/i, '').trim() || null;
  }

  return req.cookies?.token || null;
};

module.exports = getAuthToken;