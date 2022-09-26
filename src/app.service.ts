import { Injectable } from '@nestjs/common';
const { Webhook, MessageBuilder } = require('discord-webhook-node');
import axios from 'axios';
var cron = require('node-cron');

@Injectable()
export class AppService {
  static running = false;
  static lastTxnTash = '';
  static tenMinOldBLockNumber = null;

  sendDiscordMessage(): void {
    const hook = new Webhook(process.env.DISCORD_WEBHOOK);
    const embed = new MessageBuilder()
      .setTitle('Wallet transaction detected')
      .setDescription('Wallet address: ' + process.env.WALLET_ADDRESS)
      .setURL(`https://etherscan.io/address/${process.env.WALLET_ADDRESS}`)
      .setColor('#32CD32')
      .setTimestamp();
    hook.send(embed);
  }

  async run(): Promise<string> {
    if (AppService.running) {
      return 'Already running!';
    }
    cron.schedule('*/1 * * * *', async () => {
      // Get last transaction
      const txnList = await axios.get(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${process.env.WALLET_ADDRESS}&startblock=${AppService.tenMinOldBLockNumber}&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`,
      );
      const txns = txnList.data.result;
      const lastTxn = txns[txns.length - 1];

      // Send discord message if txn hash is different
      if (lastTxn.hash !== AppService.lastTxnTash) {
        AppService.lastTxnTash = lastTxn.hash;
        this.sendDiscordMessage();
      }
    });
    AppService.running = true;

    return 'Running!';
  }
}
