const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  Client,
} = require("discord.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check the bot's latency.")
    .setDMPermission(false),
  /**
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    const ping = new EmbedBuilder()
      .setTitle("**🏓 Pong!**")
      .setDescription(
        `Latency | ${
          Date.now() - interaction.createdTimestamp
        }ms.\nAPI Latency | ${Math.round(client.ws.ping)}ms`
      )
      .setColor(0xff0000);

    interaction.reply({
      content: "",
      embeds: [ping],
      ephemeral: true,
    });
  },
};
