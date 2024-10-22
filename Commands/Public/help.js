const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get some general information about the server.")
    .setDMPermission(false),
  /**
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    const help = new EmbedBuilder()
      .setTitle(
        "<:Info1:1208356341630894133><:Info2:1208356335633178675> **Help Menu**"
      )
      .addFields(
        {
          name: "**Command Help**",
          value:
            "</help:1208363767159721987> - Gives you this menu.\n</invite:1208363767159721986> - Gives you the invite link.\n</rules:1208363767159721984> - Gives you the rules.\n</ip:1208366726123880479> - Gives you the current server IP.",
        },
        {
          name: "**Tickets**",
          value:
            "If you have any other questions, you can go to <#1208359977060667402> and create a ticket!",
        }
      )
      .setColor(0xe4b400);

    return interaction.reply({
      content: "",
      embeds: [help],
      ephemeral: true,
    });
  },
};
