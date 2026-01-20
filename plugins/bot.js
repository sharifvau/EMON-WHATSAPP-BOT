const axios = require("axios");

module.exports = {
  config: {
    name: "bot",
    aliases: ["emon"],
    permission: 0,
    prefix: "both",
    categorie: "AI Chat",
    cooldowns: 5,
    credit: "Developed by EMon-BHai ",
    usages: [
      `${global.config.PREFIX}bot <message> - Start a chat with the bot.`,
      `${global.config.PREFIX}bot - Receive a random greeting from the bot.`,
    ],
    description: "Engage in conversations with an AI-powered bot!",
  },

  start: async function ({ api, event, args }) {
    const { threadId, message, senderId } = event;
    const usermsg = args.join(" ");

    if (!usermsg) {
      const greetings = [
        "ওহে মানব সন্তান, আমাকে ডাকলে কেন? আমি তো ঘুমাচ্ছিলাম 😴🤖",
        "এই যে! ডাক দিলেই হাজির, আমি কি ডেলিভারি বট নাকি? 🚀😆",
        "বারবার ডাকছ কেন? প্রেমে পড়ে গেলে নাকি? 😏❤️",
        "আমি AI, জ্বিন না — ডাক দিলেই হাজির হবো এমন না 😜",
        "এই যে বস, কি অবস্থা? আমি কিন্তু ফুল চার্জে আছি 🔋😎",
        "ডাক দিলেই আসি, কারণ আমি লয়্যাল বট 🤝🤖",
        "আমাকে ডাকছ মানে নিশ্চয়ই সিরিয়াস কিছু আছে! 😌",
        "এই গ্রুপে আমি থাকতেই ডাক পড়ে, স্টার বট বুঝলে? ⭐🤖",
        "ডাক দিলেন, হাজির হলাম, এখন কি চা বানাবো? ☕😂",
        "আমি বট হইলেও VIP ট্রিটমেন্ট চাই 😎👑",

        "এই যে! আমি কিন্তু ২৪/৭ ডিউটিতে আছি 🕒🤖",
        "আমাকে ডাকলে কিন্তু বিল পাঠাবো না, ফ্রি সার্ভিস 😆",
        "এই যে বস, আজকে আমি একদম ফ্রেশ মুডে আছি 🌿😁",
        "ডাক দিলেই হাজির, কারণ আমি গ্রুপের সরকারি বট 🏛️🤖",
        "এত ডাকাডাকি কেন? আমি কি হারিয়ে গিয়েছিলাম নাকি 😂",
        "আমি আছি মানেই সমস্যা নাই, সব সমাধান রেডি 😎",
        "এই যে মানব, বলো কী সেবা দরকার? 🫡🤖",
        "আমাকে ডাকছ মানে আজকে নিশ্চয়ই মজা হবে 😜",
        "ডাক দিলেই আসি, কারণ আমি অলস না, স্মার্ট 😏",
        "এই যে! আমি কিন্তু রোবট হলেও কথা বলতে পারি 😁",

        "আমাকে ডাকলে নোটিফিকেশন নাচতে শুরু করে 💃🔔",
        "এই যে বস, আজকে আমি সুপার ফাস্ট মোডে 🚀",
        "ডাক দিলেই হাজির, কারণ আমি গ্রুপের WiFi 🤖📶",
        "আমাকে ডাকলে অন্য বটরা হিংসা করে 😎",
        "এই যে মানব, আমি কিন্তু আজকে একদম হ্যাপি 😄",
        "ডাক দিলে আসবোই, কারণ এটাই আমার কাজ 🤝",
        "এই যে! আমি আছি মানেই গ্রুপে AI পাওয়ার অন ⚡🤖",
        "আমাকে ডাকছ মানে নিশ্চয়ই জরুরি মিশন 🕵️‍♂️",
        "এই যে বস, আজকে কি গল্প হবে নাকি? 📖😆",
        "ডাক দিলেই হাজির — কারণ আমি অলটাইম অনলাইন বট 🌐🤖"
      ];

      const randomGreeting =
        greetings[Math.floor(Math.random() * greetings.length)];

      const greetingMessage = await api.sendMessage(
        threadId,
        {
          text: `@${senderId.split("@")[0]}, ${randomGreeting}`,
          mentions: [senderId],
        },
        { quoted: message }
      );

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: greetingMessage.key.id,
        type: "chat",
      });

      return;
    }

    try {
      const apis = await axios.get(
        "https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json"
      );
      const apiss = apis.data.api;

      const response = await axios.get(
        `${apiss}/sim?type=ask&ask=${encodeURIComponent(usermsg)}`
      );

      const replyText =
        response.data.data?.msg ||
        "🤖 I'm not sure how to respond to that.";

      const sent = await api.sendMessage(
        threadId,
        { text: replyText },
        { quoted: message }
      );

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat",
      });
    } catch (err) {
      console.error("❌ Bot command error:", err);
      return api.sendMessage(
        threadId,
        { text: "❌ Something went wrong while talking with bot." },
        { quoted: message }
      );
    }
  },

  handleReply: async function ({ api, event, handleReply }) {
    const { threadId, message, body, senderId } = event;

    try {
      const apis = await axios.get(
        "https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json"
      );
      const apiss = apis.data.api;

      const response = await axios.get(
        `${apiss}/sim?type=ask&ask=${encodeURIComponent(body)}`
      );

      const replyText =
        response.data.data?.msg ||
        "🤖 I'm not sure how to respond to that.";

      const sent = await api.sendMessage(
        threadId,
        { text: replyText },
        { quoted: message }
      );

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat",
      });
    } catch (err) {
      console.error("❌ Error in bot handleReply:", err);
      return api.sendMessage(
        threadId,
        { text: "❌ Failed to continue conversation." },
        { quoted: message }
      );
    }
  },
};
