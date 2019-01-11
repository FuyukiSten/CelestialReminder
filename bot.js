'use strict';

import {Client, RichEmbed} from "discord.js";
const client = new Client();

client.on('ready', () => {
    console.log('Bot carregado');
    let c = client.channels.get('402216598666215427'); // ID do canal
    let dicasarray = ['É recomendado que a quantidade máxima de focus colocada no physical seja 100.', 'Caso você tenha uma kagune/quinque poderosa, você pode ir de servidor em servidor e ir eliminando a Eto Boss para atingir o nível máximo com mais facilidade.', 'A quantidade máxima de speed é 200.', 'Atualmente a quinque mais poderosa do jogo é a SSS Owl.', 'Atualmente a kagune mais poderosa do jogo é a Tatara (em sua segunda forma).', 'Jogadores que escolheram o lado da CCG tem mais facilidade para farmar, pois seus npcs não revidam.', 'Os npcs que dão mais rc são os da Aogiri(localizados ao lado da loja de kagune ou em frente a arena).', 'Quando você troca de kagune/quinque, seu rc é resetado.', 'Só é possível trocar a cor da sua kagune/quinque utilizando robux.']
    const interval = setInterval (function () {
        let embed = new RichEmbed();
        embed.addField('**Ro-Ghoul Dicas:**', `${dicasarray[Math.floor(Math.random()*dicasarray.length)]}`);
        embed.setColor(0x36393f);
        c.send(embed);
    }, 1 * 600000); 
});

client.login(process.env.TOKEN);
