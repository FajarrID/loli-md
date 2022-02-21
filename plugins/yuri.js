handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/nsfw/yuri?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['yuri'] // yg tampil di menu
handler.command = ['yuri'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler