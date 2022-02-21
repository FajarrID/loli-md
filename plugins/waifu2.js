handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/wallpaper/waifu2?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['waifu2'] // yg tampil di menu
handler.command = ['waifu2'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler
