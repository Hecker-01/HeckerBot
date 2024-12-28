const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Get the server invite.")
    .setDMPermission(false),
  /**
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    const invite = new EmbedBuilder()
      .setTitle("Server invite")
      .setDescription(
        "The server invite is: **https://dsc.gg/macawsmp**\nIf that doen't work you can use: https://discord.gg/pZh64HntcZ"
      )
      .setColor(0xff0000);

    interaction.reply({ content: "", embeds: [invite], ephemeral: true });
  },
};
