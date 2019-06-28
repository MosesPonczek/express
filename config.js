const dbPassword = 'XsHhATxzJG9pD7Tc';

module.exports = {
    db: `mongodb+srv://admin:${dbPassword}@cluster0-fusth.mongodb.net/test?retryWrites=true&w=majority`,
    keySession: ['ASX%!@#ZZASD'],
    maxAgeSession: 24 * 60 * 60 * 1000
}