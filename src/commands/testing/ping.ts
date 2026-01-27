import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  AutocompleteInteraction,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js';
import { IBaseCommand } from '@/commands/IBaseCommand';

import inSameVoiceChannel from '@/middleware/inSameVoiceChannel';

export default class PingCommand implements IBaseCommand {
  data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!');

  /**
   * Example middleware array for this command.
   */
  middleware = [inSameVoiceChannel];

  /**
   * Example autocomplete method for this command.
   */
  // async autocomplete(interaction: AutocompleteInteraction) {
  //   // autocomplete logic here
  // }

  /**
   * This method is called when the command is executed.
   */
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply('Pong!');
  }
}
