# Github Issue Viewer

## Running

```bash
$ yarn install
$ yarn start
```

## Rate Limiting

If you run into 403 errors that's due to Github rate limiting on unauthenticated API requests. To resolve this add your github credentials to `src/githubClient.ts`
