const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
      .setName("ip")
      .setDescription("Get the current server ip.")
      .setDMPermission(false),
    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
      require("dotenv").config();
      const invite = new EmbedBuilder()
        .setTitle("Server IP")
        .setDescription(
          `The server IP is: \`${process.env.MC_IP}\``
        )
        .setColor(0x00b6ff);
  
      interaction.reply({ content: "", embeds: [invite], ephemeral: true });
    },
  };
  