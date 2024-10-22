const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChatInputCommandInteraction,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout someone")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .setDMPermission(false)
    .addUserOption((options) =>
      options
        .setName("target")
        .setDescription("Select the target member.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("duration")
        .setDescription("Provide a duration for this timeout.")
        .setRequired(true)
        .addChoices(
          { name: "Remove", value: "remove" },
          { name: "30 minutes", value: "30m" },
          { name: "1 Hour", value: "1h" },
          { name: "6 Hours", value: "6h" },
          { name: "12 Hours", value: "12h" },
          { name: "1 Day", value: "1d" },
          { name: "28 Days", value: "28d" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Provide a reason for the timeout")
        .setMaxLength(512)
        .setRequired(true)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    const { options, guild, member } = interaction;

    const target = options.getMember("target");
    const duration = options.getString("duration");
    const reason = options.getString("reason");

    const errorsArray = [];

    const errorsEmbed = new EmbedBuilder()
      .setTitle(
        "**<:icons_coloredwrong:1208356610909667349> Could not timeout member!**"
      )
      .setColor(0xff0000);

    if (!target)
      return interaction.reply({
        embeds: [errorsEmbed.setDescription("This member could not be found!")],
        ephemeral: true,
      });

    if (!target.manageable || !target.moderatable)
      errorsArray.push("This user is not moderatable by this bot.");

    if (member.roles.highest.position < target.roles.highest.position)
      errorsArray.push("This member has a higher role that you.");

    if (errorsArray.length)
      return interaction.reply({
        embeds: [errorsEmbed.setDescription(errorsArray.join("\n"))],
        ephemeral: true,
      });

    if (duration === "remove") {
      const time = null;
      target.timeout(time, reason).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              `**Oops!**\nSometing unexpected happened, please report this to an admin!\n\n\`${err}\``
            ),
          ],
          ephemeral: true,
        });
        console.log(err);
        const channel = client.channels.cache.get("1208353362093940757");
        channel.send({
          content: `**Hey <@&1208361992826388510>**, someone fucked up using /timeout\n\nError:\n\`\`\`${err}\`\`\``,
          ephemeral: false,
        });
      });
    } else if (duration === "30m") {
      const time = 1800000;
      target.timeout(time, reason).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              `**Oops!**\nSometing unexpected happened, please report this to an admin!\n\n\`${err}\``
            ),
          ],
          ephemeral: true,
        });
        console.log(err);
        const channel = client.channels.cache.get("1208353362093940757");
        channel.send({
          content: `**Hey <@&1208361992826388510>**, someone fucked up using /timeout\n\nError:\n\`\`\`${err}\`\`\``,
          ephemeral: false,
        });
      });
    } else if (duration === "1h") {
      const time = 3600000;
      target.timeout(time, reason).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              `**Oops!**\nSometing unexpected happened, please report this to an admin!\n\n\`${err}\``
            ),
          ],
          ephemeral: true,
        });
        console.log(err);
        const channel = client.channels.cache.get("1208353362093940757");
        channel.send({
          content: `**Hey <@&1208361992826388510>**, someone fucked up using /timeout\n\nError:\n\`\`\`${err}\`\`\``,
          ephemeral: false,
        });
      });
    } else if (duration === "6h") {
      const time = 21600000;
      target.timeout(time, reason).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              `**Oops!**\nSometing unexpected happened, please report this to an admin!\n\n\`${err}\``
            ),
          ],
          ephemeral: true,
        });
        console.log(err);
        const channel = client.channels.cache.get("1208353362093940757");
        channel.send({
          content: `**Hey <@&1208361992826388510>**, someone fucked up using /timeout\n\nError:\n\`\`\`${err}\`\`\``,
          ephemeral: false,
        });
      });
    } else if (duration === "12h") {
      const time = 43200000;
      target.timeout(time, reason).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              `**Oops!**\nSometing unexpected happened, please report this to an admin!\n\n\`${err}\``
            ),
          ],
          ephemeral: true,
        });
        console.log(err);
        const channel = client.channels.cache.get("1208353362093940757");
        channel.send({
          content: `**Hey <@&1208361992826388510>**, someone fucked up using /timeout\n\nError:\n\`\`\`${err}\`\`\``,
          ephemeral: false,
        });
      });
    } else if (duration === "1d") {
      const time = 86400000;
      target.timeout(time, reason).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              `**Oops!**\nSometing unexpected happened, please report this to an admin!\n\n\`${err}\``
            ),
          ],
          ephemeral: true,
        });
        console.log(err);
        const channel = client.channels.cache.get("1208353362093940757");
        channel.send({
          content: `**Hey <@&1208361992826388510>**, someone fucked up using /timeout\n\nError:\n\`\`\`${err}\`\`\``,
          ephemeral: false,
        });
      });
    } else if (duration === "28d") {
      const time = 2419200000;
      target.timeout(time, reason).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              `**Oops!**\nSometing unexpected happened, please report this to an admin!\n\n\`${err}\``
            ),
          ],
          ephemeral: true,
        });
        console.log(err);
        const channel = client.channels.cache.get("1208353362093940757");
        channel.send({
          content: `**Hey <@&1208361992826388510>**, someone fucked up using /timeout\n\nError:\n\`\`\`${err}\`\`\``,
          ephemeral: false,
        });
      });
    }
    const success = new EmbedBuilder()
      .setTitle(
        "**<:icons_coloredright:1208356609240338492> Timeout successfull!**"
      )
      .setColor(0x39f077)
      .setDescription(`Successfully timed out ${target} for ${duration}`);
    interaction.reply({ embeds: [success], ephemeral: true });

    const channel = client.channels.cache.get("1208353362093940757");
    const timeout = new EmbedBuilder()
      .setTitle(
        `**<:icons_Warning:1208356607214358538> ${target.displayName} has been timed out!**`
      )
      .setDescription(
        `**Moderator:** ${interaction.user}\n**User that got timed out:** ${target}\n**Amount of time:** ${duration}\n**Reason:** "${reason}"`
      )
      .setColor(0xffbd2b);
    channel.send({
      content: "<@&1208361992826388510>",
      embeds: [timeout],
    });
  },
};
