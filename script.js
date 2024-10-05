const embed = new MessageEmbed()
    .setTitle('Dingo Dowload')
    .setURL('https://dingo-sooty.vercel.app/')
    .setDescription('Site oficial do dowload do Aplicativo Dingo!')
    .setImage('dingologo.png')
    .setFooter('Compartilhe seus momentos');
    
message.channel.send(embed);
