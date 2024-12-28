const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  ActionRowBuilder,
  EmbedBuilder,
  Client,
  ButtonBuilder,
} = require("discord.js");

function getSongOfTheDayMessage() {
  const messages = [
    "🎵 Trainer, a new sound is challenging your playlist!",
    "🎧 Your ears encountered a wild beat! Critical hit incoming!",
    "🎼 A melodic creature has spawned! Time to jam!",
    "🎵 It's dangerous to go alone, take this tune!",
    "🥁 Breaking news: Today's song is dropping beats like it's hot!",
    "🎷 Your daily jam is here--handle with care, it's contagious!",
    "🎸 Hit play and let the rhythm battle your boredom!",
    "🎺 Brace yourself; today's track just stole the spotlight!",
    "🎸 Your SoundDex registers a new tune, will you add it to your collection?",
    "🎶 Vibe alert: The Song of the Day has entered the arena!",
    "🎵 Stop scrolling, start jamming! The daily track has arrived!",
    "🎧 Breaking news: This song is the reason headphones were invented!",
    "🎸 Attention, music fans: The tune of the day has landed!",
    "🎤 Drop everything and vibe, today's song is here to take over!",
    "🥁 One track to rule them all, today's song is live!",
    "🗣️ Hello everyone this is *your* daily dose of music!",
    "🎹 Heads up: A sonic masterpiece just made its debut!",
    "🎼 Crank it up—the song of the day is fresh out of the oven!",
  ];

  // Generate a random index to pick a message
  const randomIndex = Math.floor(Math.random() * messages.length);

  // Return the randomly selected message
  return messages[randomIndex];
}

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("dailysong")
    .setDescription("Send the daily song to the server.")
    .addStringOption((option) =>
      option
        .setName("song")
        .setDescription("The song to send to the server.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("artist")
        .setDescription("The artist of the song.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("imagelink")
        .setDescription("The URL of the album image.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("songlink")
        .setDescription("The link to the song.")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("color")
        .setDescription("The color of the embed.")
        .setRequired(false)
    ),

  /**
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    await interaction.deferReply({ ephemeral: true });

    const song = interaction.options.getString("song");
    const artist = interaction.options.getString("artist");
    const imageLink = interaction.options.getString("imagelink");
    const songLink = interaction.options.getString("songlink");
    const color = interaction.options.getInteger("color");

    const songEmbed = new EmbedBuilder()
      .setTitle(`${song} • ${artist}`)
      .setURL(songLink)
      .setDescription(getSongOfTheDayMessage())
      .setImage(imageLink)
      .setColor(color)
      .setTimestamp(new Date().setHours(0, 0, 0, 0))
      .setFooter({ text: `@Hecker_01`, iconURL: interaction.user.avatarURL() });

    const openSongRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setLabel("Open Song").setStyle(5).setURL(songLink)
    );

    const openPlaylistRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Open Whole Playlist")
        .setStyle(5)
        .setURL(
          "https://open.spotify.com/playlist/1l2onXzSVQK4qf4LgziRIz?si=w4wbvxj5QkGa0n0P512B_Q&pi=IWKau3NxRii4I"
        )
    );

    const channel = client.channels.cache.get("1322134552637870141");
    channel
      .send({
        content: "<@&1322134856813252608>",
        embeds: [songEmbed],
        components: [openSongRow, openPlaylistRow],
      })
      .then((message) => {
        message.react("⬆️");
        message.react("⬇️");
      });

    interaction.editReply({
      content: "Song has been sent!",
      ephemeral: true,
    });
  },
};
