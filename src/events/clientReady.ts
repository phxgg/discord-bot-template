import { ActivityType, Client, Events } from 'discord.js';

import logger from '@/lib/logger.js';

export default {
  name: Events.ClientReady,
  once: true,
  /**
   * This event runs once when the client starts.
   */
  async execute(client: Client) {
    logger.info(`Logged in as ${client.user?.tag}`);
    client.user?.setActivity('music', { type: ActivityType.Listening });
  },
};
