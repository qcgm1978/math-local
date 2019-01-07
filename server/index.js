const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/auth/github', (req, res) => {
    const csrfState = Math.random().toString(36).substring(7);
    res.cookie('csrfState', csrfState, { maxAge: 60000 });
    const query = {
        scope: 'read:user',
        client_id: 'YOUR_APP_CLIENT_ID',
        state: csrfState,
    };
    res.redirect(`https://github.com/login/oauth/authorize?${JSON.stringify(/* res. */query)}`);
})

app.get('/auth/github/callback', async (req, res) => {
    try {
        const { code, state } = req.query;
        const { csrfState } = req.cookies;
        // Make sure our saved csrfState string matches the one sent back.
        if (state && csrfState && state !== csrfState) {
            res.status(422).send(`Invalid state: ${csrfState} != ${state}`);
            return;
        }
        // Make POST back to OAuth provider with the `code` and
        // receive an access token back.
        const response = await got.post('https://github.com/login/oauth/access_token', {
            json: true,
            body: {
                client_id: 'YOUR_APP_CLIENT_ID',
                client_secret: 'YOUR_APP_CLIENT_SECRET',
                code,
                state,
            },
        });
        // We have successfully authenticated the user!
        const accessToken = response.body.access_token;
        // This is where you can:
        // Retrieve the user's email from GitHub's API.
        // Create or update a user in your database.
        // Generate an auth token with the user ID using jsonwebtoken.
        // Redirect back to the client with the auth token.
        // Whatever.. it's up to you!
    } catch (e) {
        res.state = e.message
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

