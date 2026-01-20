module.exports = {
  event: 'remove',
  handle: async ({ api, event }) => {
    const removedMembers = event.participants;

    const funnyMessages = [
      "এই যে চলে গেলি? গ্রুপ তোকে ছাড়া এখন WiFi ছাড়া ফোনের মতো! — Admin By EMon-BHai",
      "ভাই রে ভাই, তুই না থাকলে গ্রুপের হাসি অটো সাইলেন্টে চলে গেল! — Admin By EMon-BHai",
      "এত তাড়াতাড়ি পালাইবি কেন? ভাড়া তো এখনো দিস নাই! — Admin By EMon-BHai",
      "গ্রুপ ছেড়ে গেলি, কিন্তু তোর স্টিকারগুলো রেখে গেলি! — Admin By EMon-BHai",
      "এই গ্রুপে ঢুকা সহজ, কিন্তু বের হওয়া এত নাটকীয় কেন! — Admin By EMon-BHai",
      "ভাই ডিলিট হইলি না, ইতিহাস হইলি! — Admin By EMon-BHai",
      "তুই গেলি, কিন্তু তোর মিমগুলো এখনো অনলাইনে! — Admin By EMon-BHai",
      "গ্রুপের অক্সিজেন সাপ্লাই কমে গেল আজ! — Admin By EMon-BHai",
      "তোরে ছাড়া গ্রুপ এখন বিরিয়ানি ছাড়া বিয়ে বাড়ি! — Admin By EMon-BHai",
      "ভাই এত ইমোশনাল সিন কেন? Netflix সিরিজ নাকি! — Admin By EMon-BHai",

      "তুই না থাকলে কে রাতে ২টায় ‘আছো কেউ?’ লিখবে! — Admin By EMon-BHai",
      "গ্রুপ ছেড়ে গেলি, কিন্তু ডাটা তো এখনো শেষ হয় নাই! — Admin By EMon-BHai",
      "ভাই রে, তুই গেলি আর গ্রুপের নোটিফিকেশন ডায়েট শুরু! — Admin By EMon-BHai",
      "এই গ্রুপে আসা ছিল সিনেমা, যাওয়া হলো ট্রেলার! — Admin By EMon-BHai",
      "তুই ছাড়া গ্রুপ এখন চার্জার ছাড়া মোবাইল! — Admin By EMon-BHai",
      "ভাই তুই গেলে, কিন্তু তোর seen এখনো রয়ে গেছে! — Admin By EMon-BHai",
      "গ্রুপে আর কে ফ্রি ডাটা বিতরণ করবে! — Admin By EMon-BHai",
      "তুই না থাকলে ঝগড়াও এখন বেকার! — Admin By EMon-BHai",
      "ভাই তুই গেলে গ্রুপের কমেডিয়ান রিটায়ার্ড! — Admin By EMon-BHai",
      "গ্রুপ ছেড়ে গেলি, কিন্তু আমাদের হৃদয় থেকে না! — Admin By EMon-BHai",

      "ভাই তুই গেলে গ্রুপ এখন silent mode! — Admin By EMon-BHai",
      "এই গ্রুপে তুই ছিলি ফ্রি WiFi এর মতো! — Admin By EMon-BHai",
      "তুই ছাড়া গ্রুপ এখন লবণ ছাড়া তরকারি! — Admin By EMon-BHai",
      "ভাই তুই গেলে গ্রুপের চা-নাস্তার দোকান বন্ধ! — Admin By EMon-BHai",
      "তুই ছিলি গ্রুপের পাওয়ার ব্যাংক! — Admin By EMon-BHai",
      "ভাই তুই গেলে গ্রুপের রিমোট হারিয়ে গেল! — Admin By EMon-BHai",
      "তুই ছাড়া গ্রুপ এখন ফেসবুক ছাড়া ইন্টারনেট! — Admin By EMon-BHai",
      "ভাই তুই গেলে গ্রুপের হালকা বাতাসও ভারী! — Admin By EMon-BHai",
      "গ্রুপ ছেড়ে গেলি, কিন্তু তোর নাম এখনো ইতিহাসে! — Admin By EMon-BHai",
      "তুই ছিলি গ্রুপের WiFi Router! — Admin By EMon-BHai",

      "ভাই তুই গেলে গ্রুপ এখন কমেন্ট ছাড়া পোস্ট! — Admin By EMon-BHai",
      "তুই ছাড়া গ্রুপ এখন চিনি ছাড়া চা! — Admin By EMon-BHai",
      "ভাই তুই গেলে গ্রুপের গসিপ বিভাগ বন্ধ! — Admin By EMon-BHai",
      "গ্রুপ ছেড়ে গেলি, কিন্তু মজা রেখে গেলি! — Admin By EMon-BHai",
      "তুই ছিলি গ্রুপের ফানি ফিল্টার! — Admin By EMon-BHai",
      "ভাই তুই গেলে গ্রুপ এখন জোক ছাড়া সার্কাস! — Admin By EMon-BHai",
      "তুই ছাড়া গ্রুপ এখন লাইক ছাড়া রিল! — Admin By EMon-BHai",
      "ভাই তুই গেলে গ্রুপের হাসি হাইবারনেশন! — Admin By EMon-BHai",
      "গ্রুপ ছেড়ে গেলি, কিন্তু তোর স্মৃতি থেকে যাবে! — Admin By EMon-BHai",
      "ভাই তুই গেলে গ্রুপ এখন ব্যাটারি লো মোডে! — Admin By EMon-BHai"
    ];

    for (const member of removedMembers) {
      const randomMsg =
        funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

      await api.sendMessage(event.id, {
        text: `@${member.split('@')[0]} ${randomMsg}`,
        mentions: [member]
      });
    }
  }
};
