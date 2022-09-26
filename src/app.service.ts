import { Injectable } from '@nestjs/common';
const { Webhook, MessageBuilder } = require('discord-webhook-node');

@Injectable()
export class AppService {
  static running = false;
  run(): string {
    if (AppService.running) {
      return 'Already running!';
    }
    const hook = new Webhook(process.env.DISCORD_WEBHOOK);
    const embed = new MessageBuilder()
      .setTitle('Wallet transaction detected')
      .setURL(
        'https://etherscan.io/address/0xfea037b0b5edcc90c626e2e1d5d792b949888892',
      )
      .setColor('#32CD32')
      .setTimestamp();

    hook.send(embed);
    AppService.running = true;
    return 'Running!';
  }
}
