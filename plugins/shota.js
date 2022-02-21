handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/wallpaper/shota?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['shota'] // yg tampil di menu
handler.command = ['shota'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler
