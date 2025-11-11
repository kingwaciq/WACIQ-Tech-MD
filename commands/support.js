module.exports = {
  name: "support",
  alias: ["helpbot", "support", "pathanupport"],
  description: "Get Arslan-tech-bot-v2 support links and contact info",
  category: "general",
  async run({ conn, m }) {
    const caption = `🛠️ *ARSLAN-TECH-BOT-V2 - SUPPORT CENTER* 🛠️



💬 *WhatsApp Support Group:*  
https://chat.whatsapp.com/KRyARlvcUjoIv1CPSSyQA5?mode=wwt

📲 *Telegram Support:*  
https://t.me/@arslanmdofficial

🧑‍💻 *GitHub Repository:*  
https://github.com/Arslan-MD/Arslan_MD

📞 *Bot Admin:*  
wa.me/923237045919

📞 *Bot Owner:*  
wa.me/923237045919

🧠 Use *.menu* to explore commands.
💥 Stay updated and have fun using Arslan-tech-bot-v2!`;

    await conn.sendMessage(m.chat, {
      text: caption,
      mentions: [m.sender]
    }, { quoted: m });
  }
};
