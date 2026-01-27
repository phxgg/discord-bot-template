# discord-bot-template

A Discord bot template to get you started with building your own bot quickly.

## Installation

**Node.js v24+** is required.

1. Copy `.env.example` to `.env` and configure the values. See [Environment variables](#environment-variables) for more information.
2. Install dependencies: `npm install`
3. Install FFmpeg on your system: [FFmpeg](https://ffmpeg.org/download.html)
4. Build the project: `npm run build`
5. Deploy commands. See [Deploy commands](#deploy-commands) for more information.
6. Start the bot: `npm start`

## Environment variables

| Variable | Description | Default value | Required |
| -------- | ----------- | ------------- | -------- |
| `DISCORD_BOT_TOKEN` | Discord bot token | `null` | `true` |
| `APPLICATION_ID` | Discord application ID | `null` | `true` |
| `GUILD_ID` | Guild ID to deploy commands to | `null` | `false` if you deploy globally |
| `APPLICATION_NAME` | Application name | `null` | `false` |
| `NODE_ENV` | Node environment. Use `development` or `production` | `development` | `true` |

## Deploy commands

1. For a specific guild: `npm run deploy` (must have set the `GUILD_ID` variable in `.env`)
2. For all guilds: `npm run deploy-global` (will take a while for discord to deploy)

**Undeploy**
1. For a specific guild: `npm run undeploy` (must have set the `GUILD_ID` variable in `.env`)
2. For all guilds: `npm run undeploy-global`
