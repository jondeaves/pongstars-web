# Pongstars Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/b13fefd3-255e-4a66-9665-63b3cac0c89d/deploy-status)](https://app.netlify.com/sites/pongstars-web/deploys)

Simple UI to view and contribute ideas to the Pongstars app.

## Configuration

### Development

Add a .env file at the root of the project with the following format

```shell
REACT_APP_API_KEY=[MORPUS_API_KEY]
REACT_APP_API_ENDPOINT=[MORPUS_API_ENDPOINT]
```

### Production

Ensure the environment variables above are defined during the build step
