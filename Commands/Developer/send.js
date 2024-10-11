const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
  Client,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("send")
    .setDescription("Send the rules/verify/color/pings messages.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false)
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to send.")
        .setRequired(true)
        .addChoices(
          { name: "Rules", value: "rules" },
          { name: "Verify", value: "verify" },
          { name: "Roles", value: "roles" }
        )
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel send the message to.")
        .setRequired(true)
    ),

  /**
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   * @param {Boolean} toggle - Toggle disable buttons
   * @param {string}[choice = null] choice - The color user chose
   */
  execute(interaction, client) {
    const message = interaction.options.getString("message");
    const channel = interaction.options.getChannel("channel");

    if (message === "rules") {
      const rules1 = new EmbedBuilder()
        .setTitle("**Rules:**")
        .setDescription(
          "**1**. Make sure you are following Discord's [Terms of Service](https://discord.com/new/terms).\n\n**2**. Usernames and statuses must be PG-13 (SFW). Usernames must be in Latin/Roman script and cannot be in fancy fonts or foreign fonts.\n\n**3**. Keep all messages PG-13 (No NSFW messages, links, images or videos allowed) and send them in the appropriate channels for the right topics.\nIf broken you will get a 30d timeout\n\n**4**. Be respectful to anyone. Any form of toxicity is not allowed. Purposely starting arguments, discrimination of any form or bringing up drama (of other servers) will result in punishment. This includes images and videos.\n\n**5**. Topics such as; Health (including mental health), Religion, Politics or any topic considered controversial are not permitted.\n\n**6**. No spam of any form: Emote spam, text walling (large posts), lyrics spam, caps spam, bot command spam and disrupting voice channels. Chain spamming (multiple people engage in posting the same words, letters or emotes in a row) is also not allowed.\n\n**7**. Do not impersonate anyone. This includes bots, content creators, brands, staff and other users. Swapping identities/usernames is not allowed and a group all using the same identity/username is not allowed either.\n\n**8**. Do not send other users of this server DMs without asking for permission. Do not advertise in DMs without permission either.\n\n**9**. Avoid sending any suspicious and/or unknown links.\nDoing so will result in a 30d timeout.\n\n**10**. Do not ping Staff without their permission.\n\n**11**. Even if it's not written in the rules, staff may take action for the server's well-being.\n\n**12**. Want to report an issue or another user? Open a ticket in <#1208359977060667402> and do not discuss this in the chatting channels."
        )
        .setColor(0xcaba00);

      const rules2 = new EmbedBuilder()
        .setTitle(
          "<:icons_new1A:1272535739686457414><:icons_new2A:1272535844057649237> **Warning system:**"
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

      channel.send({
        embeds: [rules1, rules2, rules3],
      });
      interaction.reply({
        content: "Rules sent!",
        ephemeral: true,
      });
    } else if (message === "verify") {
      const verifyButton = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Verify")
          .setCustomId("verify")
          .setStyle(ButtonStyle.Success)
          .setDisabled(false)
          .setEmoji("1272535367811334185")
      );

      const verifyEmbed = new EmbedBuilder()
        .setTitle("**Accepting the rules**")
        .setDescription(
          "**To verify please click the button!**"
        )
        .setColor(0x39f077)
        .setFooter({
          text: "By clicking verify you have agreed to the rules, and face the consequences if you don't follow them.",
        });

      channel.send({ embeds: [verifyEmbed], components: [verifyButton] });
      interaction.reply({
        content: "Verify message sent!",
        ephemeral: true,
      });
    } else if (message === "roles") {
      const colorRolesButton = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Change your color role!")
          .setCustomId("colorroles")
          .setStyle(ButtonStyle.Primary)
          .setDisabled(false)
          .setEmoji("1272535359028203551")
      );

      const pingRolesButton = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel("Change your ping roles!")
          .setCustomId("pingroles")
          .setStyle(ButtonStyle.Primary)
          .setDisabled(false)
          .setEmoji("1208445497522520105")
      );

      const rolesEmbed = new EmbedBuilder()
        .setTitle("**Edit your roles!**")
        .setDescription(
          "Click on one of the options to change your roles!"
        )
        .setColor(0x7291ed);

      channel.send({ embeds: [rolesEmbed], components: [colorRolesButton, pingRolesButton] });
      interaction.reply({
        content: "Roles sent!",
        ephemeral: true,
      });
    }
  },
};
