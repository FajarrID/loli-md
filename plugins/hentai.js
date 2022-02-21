handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/nsfw/hentai?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['hentai'] // yg tampil di menu
handler.command = ['hentai'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler