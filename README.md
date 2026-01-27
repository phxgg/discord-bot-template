# discord-bot-template

A Discord bot template to get you started with building your own bot quickly.

## Installation

**Node.js v24+** is required.

1. Copy `.env.example` to `.env` and configure the values. See [Environment variables](#environment-variables) for more information.
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Deploy commands. See [Deploy commands](#deploy-commands) for more information.
5. Start the bot: `npm start`

## Environment variables

| Variable | Description | Default value | Required |
| -------- | ----------- | ------------- | -------- |
| `DISCORD_BOT_TOKEN` | Discord bot token | `null` | `true` |
| `APPLICATION_ID` | Discord application ID | `null` | `true` |
| `GUILD_ID` | Guild ID to deploy commands to | `null` | `false` if you deploy globally |
| `APPLICATION_NAME` | Application name | `null` | `false` |
| `NODE_ENV` | Node environment. Use `development` or `production` | `development` | `true` |

## Deploy commands

> [!NOTE]
> To deploy or undeploy commands, you will have to first build the project using `npm run build`.

1. For a specific guild: `npm run deploy` (must have set the `GUILD_ID` variable in `.env`)
2. For all guilds: `npm run deploy-global` (will take a while for discord to deploy)

**Undeploy**
1. For a specific guild: `npm run undeploy` (must have set the `GUILD_ID` variable in `.env`)
2. For all guilds: `npm run undeploy-global`
