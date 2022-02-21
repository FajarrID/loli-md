handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/nsfw/ero?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['ero'] // yg tampil di menu
handler.command = ['ero'] // untuk panggil perintah .yuri
handler.tags = ['nsfw'] // jangan diubah

module.exports = handler
