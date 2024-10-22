const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Check out the rules")
    .setDMPermission(false),
  /**
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    const rules1 = new EmbedBuilder()
      .setTitle("**Rules:**")
      .setDescription(
        "**1**. Make sure you are following Discord's [Terms of Service](https://discord.com/new/terms).\n\n**2**. Usernames and statuses must be PG-13 (SFW). Usernames must be in Latin/Roman script and cannot be in fancy fonts or foreign fonts.\n\n**3**. Keep all messages PG-13 (No NSFW messages, links, images or videos allowed) and send them in the appropriate channels for the right topics.\nIf broken you will get a 30d timeout\n\n**4**. Be respectful to anyone. Any form of toxicity is not allowed. Purposely starting arguments, discrimination of any form or bringing up drama (of other servers) will result in punishment. This includes images and videos.\n\n**5**. Topics such as; Health (including mental health), Religion, Politics or any topic considered controversial are not permitted.\n\n**6**. No spam of any form: Emote spam, text walling (large posts), lyrics spam, caps spam, bot command spam and disrupting voice channels. Chain spamming (multiple people engage in posting the same words, letters or emotes in a row) is also not allowed.\n\n**7**. Do not impersonate anyone. This includes bots, content creators, brands, staff and other users. Swapping identities/usernames is not allowed and a group all using the same identity/username is not allowed either.\n\n**8**. Do not send other users of this server DMs without asking for permission. Do not advertise in DMs without permission either.\n\n**9**. Avoid sending any suspicious and/or unknown links.\nDoing so will result in a 30d timeout.\n\n**10**. Do not ping Staff without their permission.\n\n**11**. Even if it's not written in the rules, staff may take action for the server's well-being.\n\n**12**. Want to report an issue or another user? Open a ticket in <#1208359977060667402> and do not discuss this in the chatting channels."
      )
      .setColor(0xcaba00);

    const rules2 = new EmbedBuilder()
      .setTitle(
        "<:icons_new1:1208360242535211048><:icons_new2:1208360240354037781> **Warning system:**"
      )
      .setDescription(
        "**2 Warns: <:icons_timeout:1208356915902423080> 30m\n3 Warns: <:icons_timeout:1208356915902423080> 30m\n4 Warns: <:icons_timeout:1208356915902423080> 30m\n5 Warns: <:icons_timeout:1208356915902423080> 1h\n6 Warns: <:icons_timeout:1208356915902423080> 6h\n7 Warns: <:icons_timeout:1208356915902423080> 12h\n8 Warns: <:icons_timeout:1208356915902423080> 1d\n9 Warns: <:icons_timeout:1208356915902423080> 28d\n10 Warns: <:icons_ban:1208356886227976222>**"
      )
      .setColor(0xca0000);

    const rules3 = new EmbedBuilder()
      .setTitle("**Other info:**")
      .setDescription(
        "Use </help:0> to get some general help,\nIf that doesn't work go to <#1208359977060667402> and make a ticket!"
      )
      .setColor(0x7291ed);

    interaction.reply({
      content: "The rules:",
      embeds: [rules1, rules2, rules3],
      ephemeral: true,
    });
  },
};
