handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/nsfw/cum?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['cum'] // yg tampil di menu
handler.command = ['cum'] // untuk panggil perintah .yuri
handler.tags = ['nsfw'] // jangan diubah

module.exports = handler
