import { EmbedBuilder } from 'discord.js';

import { MessageType } from '@/types/MessageType';

/**
 * Creates an embed message with the given message type and message body.
 */
export function createEmbedMessage(
  messageType: MessageType,
  message: string,
  ephemeral: boolean = false,
): any {
  return {
    embeds: [new EmbedBuilder().setDescription(message).setColor(messageType)],
    ephemeral: ephemeral,
  };
}

export function parseError(err: any): string {
  if (!err) return 'Unknown error';
  if (!(err instanceof Error) && typeof err === 'string') return err;

  if (process.env.NODE_ENV === 'development') {
    return err.stack;
  } else {
    return err.name || 'Unknown error';
  }
}

export function truncateString(str: string, maxLength: number = 100): string {
  const ellipsis = '...';

  if (str.length > maxLength) {
    return str.slice(0, maxLength - ellipsis.length) + ellipsis;
  }
  return str;
}
