import { clearedCookie, isPasswordCorrect, sessionCookie } from '../../lib/hogAuth';

// POST { password } logs in, DELETE logs out.
export default function handler(req, res) {
    if (req.method === 'POST') {
        if (!isPasswordCorrect(req.body?.password)) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        res.setHeader('Set-Cookie', sessionCookie());
        return res.status(204).end();
    }

    if (req.method === 'DELETE') {
        res.setHeader('Set-Cookie', clearedCookie());
        return res.status(204).end();
    }

    res.setHeader('Allow', 'POST, DELETE');
    return res.status(405).end();
}
