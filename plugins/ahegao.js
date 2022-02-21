handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/nsfw/ahegao?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['ahegao'] // yg tampil di menu
handler.command = ['ahegao'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler
