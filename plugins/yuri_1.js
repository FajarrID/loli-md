handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/wallpaper/yuri?apikey=kyouka')
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['yuri1] // yg tampil di menu
handler.command = ['yuri1 // untuk panggil perintah .yuri
handler.tags = ['anime'] // jangan diubah

module.exports = handler
