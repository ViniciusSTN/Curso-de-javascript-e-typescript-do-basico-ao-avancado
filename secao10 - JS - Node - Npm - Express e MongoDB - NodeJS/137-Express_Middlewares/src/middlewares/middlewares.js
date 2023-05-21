exports.middlewareGlobal = (req, res, next) => {
    // console.log('Passei no middleware global');
    if (req.body.client) {
        console.log();
        console.log(`Vi que você postou ${req.body.client}`);
        console.log();
    }
    next();
}

// exports.outroMiddleware = (req, res, next) => {
//     console.log('Sou outro middleware');
// }
