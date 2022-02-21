handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/wallpaper/kurumi?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['kurumi'] // yg tampil di menu
handler.command = ['kurumi'] // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler
