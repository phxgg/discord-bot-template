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
2. For all guilds: `npm run deploy:global` (will take a while for discord to deploy)

**Undeploy**
1. For a specific guild: `npm run undeploy` (must have set the `GUILD_ID` variable in `.env`)
2. For all guilds: `npm run undeploy:global`

## Creating a new command

To create a new slash command for the Discord bot, follow these steps:

1. **Create a new command file** in the appropriate subdirectory under `src/commands/`. For example, to create a "hello" command, create `src/commands/general/hello.ts`.

2. **Implement the command class** that follows the `IBaseCommand` interface:

```typescript
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { IBaseCommand } from '@/commands/IBaseCommand';

export default class HelloCommand implements IBaseCommand {
  data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Responds with a greeting');

  async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply(`Hello, ${interaction.user.username}!`);
  }
}
```

3. **Optional: Add middleware** to restrict command usage. For example, to require users to be in the same voice channel as the bot:

```typescript
import { inSameVoiceChannel } from '@/middleware/inSameVoiceChannel';

export default class HelloCommand implements IBaseCommand {
  data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Responds with a greeting');

  middleware = [inSameVoiceChannel];

  async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply(`Hello, ${interaction.user.username}!`);
  }
}
```

4. **Optional: Add autocomplete support** for command options:

```typescript
import { AutocompleteInteraction } from 'discord.js';

export default class HelloCommand implements IBaseCommand {
  data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Responds with a greeting')
    .addStringOption(option =>
      option
        .setName('choice')
        .setDescription('Choose an option')
        .setAutocomplete(true)
    );

  async autocomplete(interaction: AutocompleteInteraction): Promise<void> {
    const focusedValue = interaction.options.getFocused();
    const choices = ['option1', 'option2', 'option3'];
    const filtered = choices.filter(choice => 
      choice.startsWith(focusedValue)
    );
    await interaction.respond(
      filtered.map(choice => ({ name: choice, value: choice }))
    );
  }

  async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply(`Hello, ${interaction.user.username}!`);
  }
}
```

5. **Build and deploy the commands** by running:

```sh
npm run build
npm run deploy
```

Or for global commands:

```sh
npm run build
npm run deploy:global
```

The bot will automatically discover and register your new command based on the file structure in the `src/commands/` directory.
