import ApplicationCommand from '../Components/ApplicationCommand'
import Embed from '../Components/Embed'
import Message from '../Components/Message'
import { replaceTypesByEmojis } from '../Utils'

/**
 * This command is only available when using the non Dockerfile
 */
export default class Debug extends ApplicationCommand {
	public definition = {
		name: 'debug',
		description: 'Simple test frame',
		options: []
	}

	public async all() {

		const embed = new Embed()
		embed.title('TCGdex BOT')
			.description(
				'This command allows you to quickly check if the bot is not missing a permission in your channel\n' +
				'If you can see this message it means the bot has the `Send Messages` and `Read Message History` permissions'
			)
		embed.addField('Test Emotes', 'If you can see the Emotes it means that the bot has the `Use External Emojis` permission\n' + replaceTypesByEmojis('Colorless Fire Dragon Electric Metal Darkness Grass Psychic Lightning Water Fairy Fighting'))
		return new Message(' ')
			.embed(embed)
	}
}
