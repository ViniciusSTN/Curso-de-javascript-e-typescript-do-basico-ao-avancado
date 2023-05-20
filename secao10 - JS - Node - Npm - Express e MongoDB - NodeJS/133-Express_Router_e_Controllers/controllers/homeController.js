exports.homePage = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="qualquerCoisa">
            <button>Enviar</button>
        </form>
    `);
};

exports.handlePost = (req, res) => {
    res.send('Sou a nova rota de POST');
};
