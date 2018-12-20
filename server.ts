
import * as express from 'express';
import { readFileSync } from 'fs';

class App {
    private app: express.Application;

    constructor() {
        this.initApp();
    }

    private initApp = async () => {
        this.app = express();
        const indexHtml = await readFileSync(__dirname + '/elements/index.html');

        this.app.use(express.static(__dirname + '/elements'));

        this.app.get('*', (req, res) => {
            console.log('Oki?')
            res.status(res.statusCode).send(indexHtml);
        })

        this.app.listen(4100, () => console.log('Listening on port 4100'))
    }
}

export = new App();
