handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/wallpaper/elaina?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['elaina'] // yg tampil di menu
handler.command = ['elaina'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler
