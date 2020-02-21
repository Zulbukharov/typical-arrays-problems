
exports.min = min = (a) => Array.isArray(a) && a.length > 0 ? a.reduce((v, r) => r > v ? v : r, Infinity) : 0;

exports.max = max = (a) => Array.isArray(a) && a.length > 0 ? a.reduce((v, r) => r < v ? v : r, -Infinity) : 0;

exports.avg = avg = a => Array.isArray(a) && a.length > 0 ? a.reduce((v, s) => s += v, 0) / a.length : 0
