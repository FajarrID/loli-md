handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/nsfw/masturbation?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['masturbatin'] // yg tampil di menu
handler.command = ['masturbation'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler