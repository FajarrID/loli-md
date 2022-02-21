handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/nsfw/ass?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['ass'] // yg tampil di menu
handler.command = ['ass'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler